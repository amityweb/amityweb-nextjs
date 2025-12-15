import Link from 'next/link';
import Image from 'next/image';

/*----------------------------------------
Footer component with company info and links
----------------------------------------*/
export default function Footer()
{
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--secondary)] text-white">
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Image
                            src="/logo-white.svg"
                            alt="Amity Web Solutions"
                            width={180}
                            height={50}
                            className="h-10 w-auto mb-6"
                        />
                        <p className="text-gray-300 mb-6 max-w-md">
                            Crafting exceptional websites since 2005. We deliver high-quality 
                            web design, development, hosting, and support services that help 
                            businesses thrive online.
                        </p>
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/cyber-essentials.svg"
                                alt="Cyber Essentials Certified"
                                width={80}
                                height={80}
                                className="h-16 w-auto"
                            />
                            <span className="text-sm text-gray-300">
                                Proudly Cyber Essentials Certified
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/services" className="text-gray-300 hover:text-[var(--primary)] transition-colors">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="text-gray-300 hover:text-[var(--primary)] transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-[var(--primary)] transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-[var(--primary)] transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <a href="tel:02920886582" className="hover:text-[var(--primary)] transition-colors">
                                    029 2088 6582
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@amityweb.co.uk" className="hover:text-[var(--primary)] transition-colors">
                                    info@amityweb.co.uk
                                </a>
                            </li>
                            <li className="text-sm">
                                Ty Merlin<br />
                                Caerphilly Business Park<br />
                                Caerphilly, CF83 3GS
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700">
                <div className="container py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                        <p>
                            © {currentYear} Amity Web Solutions Limited. Company No. 05649124. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="hover:text-[var(--primary)] transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-[var(--primary)] transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
