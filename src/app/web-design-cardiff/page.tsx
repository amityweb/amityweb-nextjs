import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { getServiceIcon } from '@/components/ServiceIcons';

export const metadata: Metadata = {
    title: 'Web Design Cardiff | Professional Website Design Services',
    description: 'Expert web design services in Cardiff. Amity Web Solutions creates stunning, responsive websites for Cardiff businesses. Based in nearby Caerphilly with over 400 websites built.',
};

/*----------------------------------------
Web Design Cardiff Page
----------------------------------------*/
export default function WebDesignCardiffPage()
{
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-subtle py-20 md:py-24">
                <div className="container">
                    <div className="max-w-4xl">
                        <h1 className="hero-title mb-6">
                            Web Design <span className="text-[var(--primary)]">Cardiff</span>
                        </h1>
                        <p className="text-xl text-[var(--muted)] mb-8">
                            Professional web design services for Cardiff businesses. We create stunning, 
                            user-focused websites that help your business grow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="btn-primary">
                                Get a Free Quote
                            </Link>
                            <Link href="/portfolio" className="btn-secondary">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="section">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Cardiff&apos;s Trusted Web Design Partner</h2>
                            <p className="text-lg text-[var(--muted)] mb-6">
                                Based just a few miles from Cardiff city centre in Caerphilly, Amity Web Solutions 
                                has been delivering exceptional web design services to Cardiff businesses since 2005. 
                                We understand the local market and what Cardiff businesses need to succeed online.
                            </p>
                            <p className="text-lg text-[var(--muted)] mb-6">
                                Whether you&apos;re a startup in Cardiff Bay, a professional services firm in the city centre, 
                                or a retail business in one of Cardiff&apos;s vibrant shopping areas, we have the expertise 
                                to create a website that works for your business.
                            </p>
                            <ul className="check-list">
                                <li>Over 400 websites designed and built</li>
                                <li>Nearly 20 years of experience</li>
                                <li>5.0 Google Review rating</li>
                                <li>Local team based in Caerphilly</li>
                            </ul>
                        </div>
                        <div className="bg-[var(--surface)] rounded-2xl p-8">
                            <h3 className="text-xl font-bold mb-4">Why Choose a Local Web Designer?</h3>
                            <ul className="space-y-4 text-[var(--muted)]">
                                <li className="flex gap-3">
                                    <svg className="w-6 h-6 text-[var(--primary)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>Face-to-face meetings when you need them</span>
                                </li>
                                <li className="flex gap-3">
                                    <svg className="w-6 h-6 text-[var(--primary)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Quick response times and same-day support</span>
                                </li>
                                <li className="flex gap-3">
                                    <svg className="w-6 h-6 text-[var(--primary)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                    </svg>
                                    <span>Understanding of the Welsh business landscape</span>
                                </li>
                                <li className="flex gap-3">
                                    <svg className="w-6 h-6 text-[var(--primary)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span>Long-term relationships with Cardiff businesses</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="section bg-[var(--surface)]">
                <div className="container">
                    <div className="text-center mb-14">
                        <h2 className="section-title">Our Web Design Services</h2>
                        <p className="section-subtitle mx-auto">
                            Complete web design and development services for Cardiff businesses
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => {
                            const IconComponent = getServiceIcon(service.icon);
                            return (
                                <Link 
                                    key={service.slug}
                                    href={`/services/${service.slug}`} 
                                    className="card group cursor-pointer bg-white"
                                >
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

            {/* Cardiff Focus */}
            <section className="section">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="section-title">Serving Cardiff and South Wales</h2>
                        <p className="text-lg text-[var(--muted)] mb-8">
                            From our base in Caerphilly, we&apos;re perfectly positioned to serve businesses across 
                            Cardiff and the wider South Wales region. We&apos;ve worked with businesses in Cardiff Bay, 
                            the city centre, Roath, Canton, Pontcanna, and many other areas.
                        </p>
                        <p className="text-lg text-[var(--muted)] mb-8">
                            We also work with businesses throughout Wales and the UK. Modern technology means 
                            we can deliver the same high-quality service whether you&apos;re around the corner or 
                            across the country.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20" style={{ backgroundColor: '#e94e1a' }}>
                <div className="container">
                    <div className="text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Discuss Your Cardiff Web Design Project?
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Get in touch for a free, no-obligation quote. We&apos;d love to hear about your project.
                        </p>
                        <Link 
                            href="/contact" 
                            className="inline-block bg-white text-[#e94e1a] px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                        >
                            Get Your Free Quote
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
