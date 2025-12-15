import { NextRequest, NextResponse } from 'next/server';

/*----------------------------------------
Contact form API route
Handles form submissions and sends email
----------------------------------------*/

interface ContactFormData
{
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
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

        /*
        TODO: Implement email sending
        Options:
        1. Nodemailer with SMTP
        2. SendGrid
        3. Resend
        4. AWS SES
        
        Example with Resend (recommended for Vercel):
        
        import { Resend } from 'resend';
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        await resend.emails.send({
            from: 'website@amityweb.co.uk',
            to: 'info@amityweb.co.uk',
            subject: `New Contact Form Submission from ${data.name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
                <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
                <p><strong>Message:</strong></p>
                <p>${data.message}</p>
            `,
        });
        */

        /* For now, log the submission (remove in production) */
        console.log('Contact form submission:', data);

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
