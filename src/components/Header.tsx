'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { services } from '@/data/services';

/*----------------------------------------
Header component with dropdown navigation
----------------------------------------*/
export default function Header()
{
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <header className="bg-white border-b border-[var(--border)] relative z-50">
            <div className="container">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.svg"
                            alt="Amity Web Solutions"
                            width={140}
                            height={32}
                            className="h-8 w-auto"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {/* Services Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <Link
                                href="/services"
                                className="text-[var(--muted)] hover:text-[var(--foreground)] font-medium transition-colors flex items-center gap-1"
                            >
                                Services
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Link>
                            
                            {/* Dropdown Menu */}
                            {servicesOpen && (
                                <div className="absolute top-full left-0 pt-2">
                                    <div className="bg-white rounded-xl shadow-lg border border-[var(--border)] py-2 min-w-[220px]">
                                        {services.map((service) => (
                                            <Link
                                                key={service.slug}
                                                href={`/services/${service.slug}`}
                                                className="block px-4 py-2 text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
                                            >
                                                {service.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/portfolio"
                            className="text-[var(--muted)] hover:text-[var(--foreground)] font-medium transition-colors"
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/blog"
                            className="text-[var(--muted)] hover:text-[var(--foreground)] font-medium transition-colors"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/about"
                            className="text-[var(--muted)] hover:text-[var(--foreground)] font-medium transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-[var(--muted)] hover:text-[var(--foreground)] font-medium transition-colors"
                        >
                            Contact
                        </Link>
                        <Link href="/contact" className="btn-primary py-2 px-5">
                            Get a Quote
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-[var(--foreground)]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-[var(--border)]">
                        <div className="flex flex-col gap-1">
                            <Link
                                href="/services"
                                className="text-[var(--muted)] hover:text-[var(--foreground)] font-medium py-3 px-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Services
                            </Link>
                            {/* Mobile service sub-links */}
                            <div className="pl-4 flex flex-col gap-1">
                                {services.map((service) => (
                                    <Link
                                        key={service.slug}
                                        href={`/services/${service.slug}`}
                                        className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] py-2 px-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {service.title}
                                    </Link>
                                ))}
                            </div>
                            <Link
                                href="/portfolio"
                                className="text-[var(--muted)] hover:text-[var(--foreground)] font-medium py-3 px-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="/blog"
                                className="text-[var(--muted)] hover:text-[var(--foreground)] font-medium py-3 px-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/about"
                                className="text-[var(--muted)] hover:text-[var(--foreground)] font-medium py-3 px-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className="text-[var(--muted)] hover:text-[var(--foreground)] font-medium py-3 px-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link
                                href="/contact"
                                className="btn-primary text-center mt-3"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
