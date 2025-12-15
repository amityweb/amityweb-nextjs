'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Script from 'next/script';

/*----------------------------------------
Cloudflare Turnstile widget interface
----------------------------------------*/
declare global
{
    interface Window
    {
        turnstile: {
            render: (container: string | HTMLElement, options: TurnstileOptions) => string;
            reset: (widgetId: string) => void;
            remove: (widgetId: string) => void;
            execute: (container: string | HTMLElement, options?: TurnstileOptions) => void;
            getResponse: (widgetId?: string) => string | undefined;
        };
    }
}

interface TurnstileOptions
{
    sitekey: string;
    callback: (token: string) => void;
    'error-callback'?: () => void;
    'expired-callback'?: () => void;
    size?: 'normal' | 'compact' | 'invisible';
    theme?: 'light' | 'dark' | 'auto';
    execution?: 'render' | 'execute';
}

/*----------------------------------------
Contact form component with Turnstile
----------------------------------------*/
export default function ContactForm()
{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
    const turnstileRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const turnstileLoadedRef = useRef(false);

    /* Initialize Turnstile widget */
    const initTurnstile = useCallback(() =>
    {
        if (!turnstileRef.current || !window.turnstile || widgetIdRef.current)
        {
            return;
        }

        try
        {
            widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
                sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '',
                callback: (token: string) =>
                {
                    setTurnstileToken(token);
                },
                'error-callback': () =>
                {
                    setTurnstileToken(null);
                },
                'expired-callback': () =>
                {
                    setTurnstileToken(null);
                },
                size: 'normal',
                theme: 'light',
            });
        }
        catch (error)
        {
            console.error('Turnstile initialization error:', error);
        }
    }, []);

    /* Handle Turnstile script load */
    const handleTurnstileLoad = () =>
    {
        turnstileLoadedRef.current = true;
        initTurnstile();
    };

    /* Initialize on mount if script already loaded */
    useEffect(() =>
    {
        if (window.turnstile && !widgetIdRef.current)
        {
            initTurnstile();
        }
    }, [initTurnstile]);

    /* Cleanup on unmount */
    useEffect(() =>
    {
        return () =>
        {
            if (widgetIdRef.current && window.turnstile)
            {
                try
                {
                    window.turnstile.remove(widgetIdRef.current);
                }
                catch (e)
                {
                    /* Ignore cleanup errors */
                }
            }
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) =>
    {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        /* Check Turnstile token */
        if (!turnstileToken)
        {
            setStatus('error');
            setErrorMessage('Please complete the security verification checkbox above before submitting.');
            return;
        }

        try
        {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    turnstileToken,
                }),
            });

            if (!response.ok)
            {
                const data = await response.json();
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', company: '', message: '' });
            
            /* Reset Turnstile for potential next submission */
            if (widgetIdRef.current && window.turnstile)
            {
                window.turnstile.reset(widgetIdRef.current);
                setTurnstileToken(null);
            }
        }
        catch (error)
        {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'There was a problem sending your message. Please try again or call us directly.');
            console.error('Contact form error:', error);
            
            /* Reset Turnstile on error */
            if (widgetIdRef.current && window.turnstile)
            {
                window.turnstile.reset(widgetIdRef.current);
                setTurnstileToken(null);
            }
        }
    };

    if (status === 'success')
    {
        return (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for getting in touch. We&apos;ll respond to your enquiry shortly.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-green-600 hover:text-green-700 font-medium"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <>
            {/* Cloudflare Turnstile Script */}
            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                strategy="lazyOnload"
                onLoad={handleTurnstileLoad}
            />

            <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                        {errorMessage}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                            Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-shadow"
                            placeholder="John Smith"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-shadow"
                            placeholder="john@example.com"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-shadow"
                            placeholder="029 2088 6582"
                        />
                    </div>

                    {/* Company */}
                    <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                            Company Name
                        </label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-shadow"
                            placeholder="Your Company Ltd"
                        />
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                        Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-white border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none transition-shadow resize-vertical"
                        placeholder="Tell us about your project..."
                    />
                </div>

                {/* Turnstile Widget Container */}
                <div ref={turnstileRef} className="cf-turnstile mb-2" />

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'submitting' ? (
                        <span className="flex items-center gap-2">
                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                        </span>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </form>
        </>
    );
}
