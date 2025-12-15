import Link from 'next/link';

/*----------------------------------------
Footer component - Clean modern design
----------------------------------------*/
export default function Footer()
{
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-[var(--border)] pt-20 pb-8">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-[var(--foreground)]">
                                Amity<span className="text-[var(--primary)]">Web</span>
                            </span>
                        </Link>
                        <p className="text-[var(--muted)] mb-6">
                            Designing, building, and maintaining exceptional digital experiences 
                            for modern businesses.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-[var(--foreground)] mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/services/web-design" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Web Design
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/web-development" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/hosting" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Hosting
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/maintenance" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Support & Maintenance
                                </Link>
                            </li>
                            <li>
                                <Link href="/web-design-cardiff" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Web Design Cardiff
                                </Link>
                            </li>
                            <li>
                                <Link href="/web-design-newport" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Web Design Newport
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-[var(--foreground)] mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/faqs" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/sitemap-page" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Sitemap
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-[var(--foreground)] mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/legal/privacy-policy" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/cookie-policy" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Cookie Policy
                                </Link>
                            </li>
                            <li>
                                <a href="/terms-of-business.pdf" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <Link href="/legal/acceptable-use-policy" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Acceptable Use Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/security-policy" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Security Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/disclaimer" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Disclaimer
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/copyright" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Copyright
                                </Link>
                            </li>
                            <li>
                                <Link href="/legal/green-policy" className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors">
                                    Green Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="font-semibold text-[var(--foreground)] mb-4">Connect</h3>
                        <div className="flex gap-4 mb-6">
                            <a 
                                href="https://github.com/amityweb" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                                aria-label="GitHub"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                                </svg>
                            </a>
                            <a 
                                href="https://twitter.com/amityweb" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                                aria-label="Twitter"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a 
                                href="https://linkedin.com/company/amity-web-solutions-ltd" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                        <p className="text-[var(--muted)] text-sm">
                            <a href="tel:02920886582" className="hover:text-[var(--primary)]">029 2088 6582</a>
                            <br />
                            <a href="mailto:info@amityweb.co.uk" className="hover:text-[var(--primary)]">info@amityweb.co.uk</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[var(--border)] mt-16 pt-8">
                <div className="container pb-0">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--muted)]">
                        <p>
                            © {currentYear} Amity Web Solutions Limited. All rights reserved.
                        </p>
                        <p className="text-center text-xs">
                            Registered in England and Wales No. 05649124 | VAT No. 996 2856 51
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
