import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

/*----------------------------------------
Contact form API route
Handles form submissions with Turnstile
verification and sends email via Resend
----------------------------------------*/

interface ContactFormData
{
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
    turnstileToken: string;
}

interface TurnstileResponse
{
    success: boolean;
    'error-codes'?: string[];
    challenge_ts?: string;
    hostname?: string;
}

/*----------------------------------------
Verify Cloudflare Turnstile token
----------------------------------------*/
async function verifyTurnstile(token: string): Promise<boolean>
{
    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    
    if (!secretKey)
    {
        console.error('TURNSTILE_SECRET_KEY not configured');
        return false;
    }

    try
    {
        const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                secret: secretKey,
                response: token,
            }),
        });

        const data: TurnstileResponse = await response.json();
        
        if (!data.success)
        {
            console.error('Turnstile verification failed:', data['error-codes']);
        }
        
        return data.success;
    }
    catch (error)
    {
        console.error('Turnstile verification error:', error);
        return false;
    }
}

/*----------------------------------------
Escape HTML to prevent XSS in emails
----------------------------------------*/
function escapeHtml(text: string): string
{
    const htmlEntities: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, char => htmlEntities[char]);
}

export async function POST(request: NextRequest)
{
    try
    {
        const data: ContactFormData = await request.json();

        /* Validate required fields */
        if (!data.name || !data.email || !data.message)
        {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        /* Validate email format */
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email))
        {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        /* Verify Turnstile token */
        if (!data.turnstileToken)
        {
            return NextResponse.json(
                { error: 'Security verification required' },
                { status: 400 }
            );
        }

        const isValidToken = await verifyTurnstile(data.turnstileToken);
        if (!isValidToken)
        {
            return NextResponse.json(
                { error: 'Security verification failed. Please try again.' },
                { status: 400 }
            );
        }

        /* Check Resend API key is configured */
        if (!process.env.RESEND_API_KEY)
        {
            console.error('RESEND_API_KEY not configured');
            return NextResponse.json(
                { error: 'Email service not configured' },
                { status: 500 }
            );
        }

        /* Initialize Resend client */
        const resend = new Resend(process.env.RESEND_API_KEY);

        /* Escape user input for HTML email */
        const safeName = escapeHtml(data.name);
        const safeEmail = escapeHtml(data.email);
        const safePhone = data.phone ? escapeHtml(data.phone) : 'Not provided';
        const safeCompany = data.company ? escapeHtml(data.company) : 'Not provided';
        const safeMessage = escapeHtml(data.message).replace(/\n/g, '<br>');

        /* Send email via Resend */
        const { error: emailError } = await resend.emails.send({
            from: 'Amity Web Website <website@amityweb.co.uk>',
            to: ['info@amityweb.co.uk'],
            replyTo: data.email,
            subject: `New Contact Form Submission from ${safeName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Name:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${safeName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                                <a href="mailto:${safeEmail}">${safeEmail}</a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${safePhone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Company:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${safeCompany}</td>
                        </tr>
                    </table>
                    <div style="margin-top: 20px;">
                        <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
                        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; line-height: 1.6;">
                            ${safeMessage}
                        </div>
                    </div>
                    <p style="margin-top: 30px; font-size: 12px; color: #666;">
                        This message was sent from the contact form on amityweb.co.uk
                    </p>
                </div>
            `,
        });

        if (emailError)
        {
            console.error('Resend email error:', emailError);
            return NextResponse.json(
                { error: 'Failed to send email. Please try again.' },
                { status: 500 }
            );
        }

        /* Return success response */
        return NextResponse.json(
            { success: true, message: 'Message sent successfully' },
            { status: 200 }
        );
    }
    catch (error)
    {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
        );
    }
}
