import Link from 'next/link';
import Image from 'next/image';
import ReviewsSlider from '@/components/ReviewsSlider';
import { services } from '@/data/services';
import { getServiceIcon } from '@/components/ServiceIcons';

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
                            We <span className="text-[var(--primary)]">Design</span>, <span className="text-[var(--primary)]">Build</span>, and
                            <br /><span className="text-[var(--primary)]">Nurture</span> Digital Experiences.
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
                        {services.map((service) => {
                            const IconComponent = getServiceIcon(service.icon);
                            return (
                                <Link 
                                    key={service.slug}
                                    href={`/services/${service.slug}`} 
                                    className="card group cursor-pointer"
                                >
                                    {/* Icon and Title - side by side on desktop */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="card-icon shrink-0">
                                            <IconComponent />
                                        </div>
                                        <h3 className="text-xl font-semibold group-hover:text-[var(--primary)] transition-colors">
                                            {service.shortTitle}
                                        </h3>
                                    </div>
                                    <p className="text-[var(--muted)]">
                                        {service.description}
                                    </p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section bg-[var(--surface)]">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            {/* Placeholder for team/office image */}
                            <div className="aspect-[4/3] bg-[var(--bg)] rounded-2xl flex items-center justify-center border border-[var(--border)]">
                                <div className="text-center p-8">
                                    <Image
                                        src="/cyber-essentials-badge.svg"
                                        alt="Cyber Essentials Certified"
                                        width={120}
                                        height={120}
                                        className="mx-auto mb-4 opacity-60"
                                    />
                                    <p className="text-[var(--muted)]">Cyber Essentials Certified</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="section-title text-left">Why Choose Amity Web?</h2>
                            <p className="text-[var(--muted)] mb-8">
                                Since 2005, we&apos;ve been helping businesses across Wales and beyond 
                                establish powerful digital presences. Our approach combines technical 
                                expertise with genuine care for your success.
                            </p>
                            <ul className="check-list">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                    Over 400 websites designed and built
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                    Nearly 20 years of experience
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                    5.0 Google Review rating
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                    Cyber Essentials Certified
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                    UK-based team in Caerphilly
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                    Long-term client relationships
                                </li>
                            </ul>
                            <div className="mt-8">
                                <Link href="/about" className="btn-primary">
                                    Learn More About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Reviews */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-14">
                        <h2 className="section-title">What Our Clients Say</h2>
                        <p className="section-subtitle mx-auto">
                            Don&apos;t just take our word for it – here&apos;s what our clients have to say 
                            about working with Amity Web Solutions.
                        </p>
                    </div>
                    <ReviewsSlider />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20" style={{ backgroundColor: '#e94e1a' }}>
                <div className="container">
                    <div className="text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Let&apos;s discuss how we can help bring your digital vision to life.
                        </p>
                        <Link 
                            href="/contact" 
                            className="inline-block bg-white text-[#e94e1a] px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
