'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

/*----------------------------------------
Header component with responsive navigation
----------------------------------------*/
export default function Header()
{
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/services', label: 'Services' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="bg-white border-b border-[var(--border)] sticky top-0 z-50">
            <div className="container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.svg"
                            alt="Amity Web Solutions"
                            width={180}
                            height={50}
                            priority
                            className="h-10 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[var(--foreground)] hover:text-[var(--primary)] font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" className="btn-primary">
                            Get in Touch
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-[var(--secondary)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-[var(--border)]">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-[var(--foreground)] hover:text-[var(--primary)] font-medium py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="btn-primary text-center mt-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
