import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Amity Web Solutions - web design and development specialists based in Caerphilly, South Wales since 2005.',
};

/*----------------------------------------
About page component
----------------------------------------*/
export default function AboutPage()
{
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[var(--secondary)] to-[var(--secondary-light)] text-white py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            About Amity Web Solutions
                        </h1>
                        <p className="text-xl text-gray-300">
                            We&apos;ve been designing and developing websites since 2005 and are 
                            passionate about delivering success for our customers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="section-title">Our Story</h2>
                            <p className="text-[var(--muted)] mb-6">
                                Founded in 2005, Amity Web Solutions has grown from a small web design 
                                studio into a comprehensive digital agency serving businesses across 
                                the UK and beyond.
                            </p>
                            <p className="text-[var(--muted)] mb-6">
                                Based in Caerphilly, South Wales, we combine the personal touch of a 
                                local business with the expertise and capabilities of a larger agency. 
                                Our location means we can offer competitive pricing while maintaining 
                                the highest standards of quality and service.
                            </p>
                            <p className="text-[var(--muted)]">
                                With over 400 websites built and counting, we know a thing or two when 
                                it comes to web. But we&apos;re never complacent – we continually invest 
                                in learning new technologies and improving our processes to deliver 
                                better results for our clients.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-8">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-[var(--primary)]">400+</p>
                                    <p className="text-[var(--muted)]">Websites Built</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-[var(--primary)]">2005</p>
                                    <p className="text-[var(--muted)]">Founded</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-[var(--primary)]">5.0</p>
                                    <p className="text-[var(--muted)]">Google Rating</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-[var(--primary)]">100%</p>
                                    <p className="text-[var(--muted)]">UK Based</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section bg-gray-50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="section-title">What We Stand For</h2>
                        <p className="section-subtitle mx-auto">
                            Our values guide everything we do, from how we approach projects 
                            to how we treat our clients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 text-center">
                            <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Quality First</h3>
                            <p className="text-[var(--muted)]">
                                We never cut corners. Every website we build is crafted with attention 
                                to detail and built to the highest standards.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 text-center">
                            <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Client Partnership</h3>
                            <p className="text-[var(--muted)]">
                                We work with you, not just for you. Your success is our success, 
                                and we&apos;re invested in helping your business grow.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 text-center">
                            <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Continuous Innovation</h3>
                            <p className="text-[var(--muted)]">
                                The web never stands still, and neither do we. We embrace new 
                                technologies to deliver better solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cyber Essentials Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="section-title">Cyber Essentials Certified</h2>
                            <p className="text-[var(--muted)] mb-6">
                                Cyber Essentials is an effective government-backed scheme that helps 
                                us protect our organisation against a whole range of common cyber attacks.
                            </p>
                            <p className="text-[var(--muted)] mb-6">
                                This certification demonstrates our commitment to cyber security best 
                                practices. When you work with us, you can trust that your data and 
                                your customers&apos; data is handled securely.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Secure firewalls and internet gateways</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Secure configuration of devices and software</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Access control and user privilege management</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Malware protection</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Patch management and software updates</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                src="/cyber-essentials-badge.svg"
                                alt="Cyber Essentials Certified"
                                width={300}
                                height={300}
                                className="max-w-[250px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="section bg-gray-50">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
                                <span className="text-[var(--muted)]">Office Location</span>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="section-title">Where to Find Us</h2>
                            <p className="text-[var(--muted)] mb-6">
                                We&apos;re based at Caerphilly Business Park, just a short drive from 
                                Cardiff and easily accessible from across South Wales.
                            </p>
                            <address className="not-italic text-[var(--foreground)] mb-6">
                                <strong>Amity Web Solutions Limited</strong><br />
                                Ty Merlin<br />
                                Caerphilly Business Park<br />
                                Caerphilly, CF83 3GS
                            </address>
                            <p className="text-[var(--muted)] mb-4">
                                <strong>Phone:</strong>{' '}
                                <a href="tel:02920886582" className="text-[var(--primary)]">
                                    029 2088 6582
                                </a>
                            </p>
                            <p className="text-[var(--muted)]">
                                <strong>Email:</strong>{' '}
                                <a href="mailto:info@amityweb.co.uk" className="text-[var(--primary)]">
                                    info@amityweb.co.uk
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[var(--secondary)] text-white py-16">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Ready to start your project? We&apos;d love to hear from you.
                    </p>
                    <Link href="/contact" className="btn-primary">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    );
}
