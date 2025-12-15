import Link from 'next/link';
import Image from 'next/image';
import ReviewsSlider from '@/components/ReviewsSlider';

/*----------------------------------------
Homepage component
----------------------------------------*/
export default function Home()
{
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[var(--secondary)] to-[var(--secondary-light)] text-white">
                <div className="container py-20 md:py-32">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                            Websites That Work As Hard As You Do
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                            High-quality web design, development, hosting and support from a team 
                            that&apos;s been delivering success for businesses since 2005.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                                Start Your Project
                            </Link>
                            <Link href="/portfolio" className="btn-secondary bg-white/10 hover:bg-white/20 text-lg px-8 py-4">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-[var(--primary)] text-white py-8">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-3xl md:text-4xl font-bold">400+</p>
                            <p className="text-sm md:text-base opacity-90">Websites Built</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold">20+</p>
                            <p className="text-sm md:text-base opacity-90">Years Experience</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold">5.0</p>
                            <p className="text-sm md:text-base opacity-90">Google Rating</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-bold">100%</p>
                            <p className="text-sm md:text-base opacity-90">UK Based</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="section bg-white">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="section-title">What We Do</h2>
                        <p className="section-subtitle mx-auto">
                            From concept to launch and beyond, we deliver complete web solutions 
                            tailored to your business needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Service Card: Design */}
                        <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-[var(--primary)] rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Web Design</h3>
                            <p className="text-[var(--muted)]">
                                Beautiful, responsive designs that capture your brand and engage your visitors 
                                from the first click.
                            </p>
                        </div>

                        {/* Service Card: Development */}
                        <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-[var(--primary)] rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Development</h3>
                            <p className="text-[var(--muted)]">
                                Expert development in WordPress, WooCommerce, Laravel, Craft CMS, and more. 
                                Built for performance and scalability.
                            </p>
                        </div>

                        {/* Service Card: Hosting */}
                        <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-[var(--primary)] rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Hosting & Support</h3>
                            <p className="text-[var(--muted)]">
                                Reliable, secure hosting with proactive monitoring and responsive support 
                                when you need it.
                            </p>
                        </div>

                        {/* Service Card: E-commerce */}
                        <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-[var(--primary)] rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">E-commerce</h3>
                            <p className="text-[var(--muted)]">
                                WooCommerce and custom shopping solutions that turn visitors into customers 
                                and drive sales growth.
                            </p>
                        </div>

                        {/* Service Card: Maintenance */}
                        <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-[var(--primary)] rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Maintenance</h3>
                            <p className="text-[var(--muted)]">
                                Keep your website secure, updated, and performing at its best with our 
                                ongoing maintenance packages.
                            </p>
                        </div>

                        {/* Service Card: Bug Fixing */}
                        <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                            <div className="w-14 h-14 bg-[var(--primary)] rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Bug Fixing</h3>
                            <p className="text-[var(--muted)]">
                                Something not working? We specialise in diagnosing and fixing issues 
                                that others can&apos;t solve.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/services" className="btn-primary">
                            Explore All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="section bg-gray-50">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="section-title">Built With Technologies You Can Trust</h2>
                            <p className="text-[var(--muted)] mb-6">
                                Our expertise spans the full spectrum of modern web technologies. 
                                Whether you need a content-managed website, a complex e-commerce platform, 
                                or a custom web application, we have the skills to deliver.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {['PHP', 'HTML', 'CSS', 'JavaScript', 'Laravel', 'WordPress', 'WooCommerce', 'Craft CMS', 'Expression Engine', 'CodeIgniter', 'MySQL', 'jQuery'].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--secondary)] border border-[var(--border)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white rounded-xl p-8 shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">AI & Automation</h3>
                            <p className="text-[var(--muted)] mb-6">
                                We&apos;re embracing the future with AI-powered solutions and automation 
                                that help streamline your business processes and improve efficiency.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Intelligent chatbots and customer service automation</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>Workflow automation and integration</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>AI-enhanced content and SEO strategies</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="section bg-gray-100">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="section-title">What Our Clients Say</h2>
                        <p className="section-subtitle mx-auto">
                            Don&apos;t just take our word for it. Here&apos;s what businesses we&apos;ve worked 
                            with have to say about their experience.
                        </p>
                    </div>
                    <ReviewsSlider />
                </div>
            </section>

            {/* Cyber Essentials Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <Image
                                src="/cyber-essentials-badge.svg"
                                alt="Cyber Essentials Certified"
                                width={300}
                                height={300}
                                className="mx-auto"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="section-title">Proudly Cyber Essentials Certified</h2>
                            <p className="text-[var(--muted)] mb-6">
                                Cyber Essentials is an effective government-backed scheme that helps us 
                                protect our organisation against a whole range of common cyber attacks.
                            </p>
                            <p className="text-[var(--muted)]">
                                This certification demonstrates our commitment to cyber security best practices, 
                                ensuring we protect not only our own systems but also the data and websites 
                                of our valued customers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[var(--secondary)] text-white py-20">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Whether you need a new website, improvements to an existing one, or reliable 
                        hosting and support, we&apos;re here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                            Get a Free Quote
                        </Link>
                        <a href="tel:02920886582" className="btn-secondary bg-white/10 hover:bg-white/20 text-lg px-8 py-4">
                            Call 029 2088 6582
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
