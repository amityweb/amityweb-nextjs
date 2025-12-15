import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { getServiceIcon } from '@/components/ServiceIcons';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Web design, development, hosting, support and maintenance services from Amity Web Solutions. WordPress, WooCommerce, Laravel, Craft CMS specialists.',
};

/*----------------------------------------
Services page component
----------------------------------------*/
export default function ServicesPage()
{
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[var(--secondary)] text-white py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-300">
                            From design to development, hosting to support, we offer comprehensive 
                            web solutions tailored to your business needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section bg-white">
                <div className="container">
                    <div className="space-y-16">
                        {services.map((service, index) => {
                            const IconComponent = getServiceIcon(service.icon);
                            return (
                                <div
                                    key={service.slug}
                                    id={service.slug}
                                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                                        index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                                >
                                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-16 h-16 bg-[var(--primary)] rounded-xl flex items-center justify-center text-white">
                                                <IconComponent className="w-8 h-8" />
                                            </div>
                                            <h2 className="text-3xl font-bold">{service.title}</h2>
                                        </div>
                                        <p className="text-lg text-[var(--muted)] mb-6">
                                            {service.fullDescription}
                                        </p>
                                        <ul className="check-list mb-6">
                                            {service.features.map((feature) => (
                                                <li key={feature}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link 
                                            href={`/services/${service.slug}`}
                                            className="btn-primary inline-block"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                    <div className={`bg-gray-100 rounded-2xl p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                                            <div className="text-[var(--primary)]">
                                                <IconComponent className="w-16 h-16" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20" style={{ backgroundColor: '#e94e1a' }}>
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Need a Custom Solution?
                    </h2>
                    <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
                        Every business is unique. Let&apos;s discuss your specific requirements 
                        and create a solution that fits perfectly.
                    </p>
                    <Link 
                        href="/contact" 
                        className="inline-block bg-white text-[#e94e1a] px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    );
}
