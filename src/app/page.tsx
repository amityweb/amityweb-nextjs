import Link from 'next/link';
import Image from 'next/image';
import ReviewsSlider from '@/components/ReviewsSlider';

/*----------------------------------------
Homepage component - Clean modern design
----------------------------------------*/
export default function Home()
{
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-subtle py-20 md:py-24">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="hero-title mb-6">
                            We <span className="text-[var(--primary)]">Design</span>, Build, and
                            <br />Nurture Digital Experiences.
                        </h1>
                        <p className="text-xl text-[var(--muted)] mb-10 max-w-2xl mx-auto">
                            Amity Web is your full-cycle digital partner. From initial concept to 
                            hosting and maintenance, we handle the technical details so you can 
                            focus on your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary">
                                Start Your Project
                            </Link>
                            <Link href="/services" className="btn-secondary">
                                View Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-14">
                        <h2 className="section-title">Everything You Need</h2>
                        <p className="section-subtitle mx-auto">
                            We don&apos;t just build websites; we provide a complete ecosystem of services 
                            to ensure your digital presence thrives long-term.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Design */}
                        <div className="card">
                            <div className="card-icon">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Design</h3>
                            <p className="text-[var(--muted)]">
                                User-centric UI/UX design that captures your brand identity and 
                                converts visitors into customers.
                            </p>
                        </div>

                        {/* Build */}
                        <div className="card">
                            <div className="card-icon">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Build</h3>
                            <p className="text-[var(--muted)]">
                                Robust front-end and back-end development using WordPress, Laravel, 
                                Craft CMS and more.
                            </p>
                        </div>

                        {/* Host */}
                        <div className="card">
                            <div className="card-icon">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Host</h3>
                            <p className="text-[var(--muted)]">
                                Secure, high-performance hosting solutions ensuring your site is 
                                always online and fast.
                            </p>
                        </div>

                        {/* Support */}
                        <div className="card">
                            <div className="card-icon">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Support</h3>
                            <p className="text-[var(--muted)]">
                                Ongoing technical support to help you navigate digital challenges 
                                as your business grows.
                            </p>
                        </div>

                        {/* Maintain */}
                        <div className="card">
                            <div className="card-icon">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Maintain</h3>
                            <p className="text-[var(--muted)]">
                                Regular updates, security patches, and performance optimization 
                                to keep your site healthy.
                            </p>
                        </div>

                        {/* Fix Bugs */}
                        <div className="card">
                            <div className="card-icon">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Fix Bugs</h3>
                            <p className="text-[var(--muted)]">
                                Rapid troubleshooting and bug fixing to resolve issues and ensure 
                                smooth operation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="section bg-[var(--background-alt)]">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="bg-gray-200 rounded-2xl aspect-[4/3] overflow-hidden">
                                {/* Replace with actual image */}
                                <div className="w-full h-full bg-gradient-to-br from-[var(--secondary)] to-[var(--secondary-light)] flex items-center justify-center">
                                    <span className="text-white/50 text-lg">Team Image</span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="section-title">Why Choose Amity Web?</h2>
                            <p className="text-[var(--muted)] text-lg mb-8">
                                We believe in long-term partnerships, not just one-off projects. Our 
                                holistic approach ensures that your website isn&apos;t just launched—it&apos;s 
                                nurtured, protected, and improved over time.
                            </p>
                            <ul className="check-list space-y-4">
                                <li>
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-medium">20+ years of web development experience</span>
                                </li>
                                <li>
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-medium">Proactive monitoring and maintenance</span>
                                </li>
                                <li>
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-medium">Transparent pricing and communication</span>
                                </li>
                                <li>
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-medium">Focus on performance and accessibility</span>
                                </li>
                                <li>
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="font-medium">Cyber Essentials certified for your security</span>
                                </li>
                            </ul>
                            <div className="mt-8">
                                <Link href="/about" className="btn-secondary">
                                    Learn More About Us
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="section-title">What Our Clients Say</h2>
                        <p className="section-subtitle mx-auto">
                            Don&apos;t just take our word for it. Here&apos;s what businesses we&apos;ve worked 
                            with have to say.
                        </p>
                    </div>
                    <ReviewsSlider />
                </div>
            </section>

            {/* Technologies Section */}
            <section className="section-sm border-t border-[var(--border)]">
                <div className="container">
                    <p className="text-center text-sm text-[var(--muted)] uppercase tracking-wider mb-8">
                        Powered by Modern Technologies
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-[var(--muted)]">
                        <span className="text-xl font-semibold">PHP</span>
                        <span className="text-xl font-semibold">WordPress</span>
                        <span className="text-xl font-semibold">Laravel</span>
                        <span className="text-xl font-semibold">Craft CMS</span>
                        <span className="text-xl font-semibold">MySQL</span>
                        <span className="text-xl font-semibold">JavaScript</span>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[var(--primary)] py-20">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Whether you need a brand new website, a complex web application, or 
                        support for an existing site, we&apos;re here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-secondary bg-white text-[var(--foreground)] hover:bg-gray-100">
                            Get a Free Quote
                        </Link>
                        <a href="tel:02920886582" className="btn-secondary bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white/50">
                            Schedule a Call
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
