import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Web design, development, hosting, support and maintenance services from Amity Web Solutions. WordPress, WooCommerce, Laravel, Craft CMS specialists.',
};

/*----------------------------------------
Services page component
----------------------------------------*/
export default function ServicesPage()
{
    const services = [
        {
            id: 'web-design',
            title: 'Web Design',
            description: 'Beautiful, responsive websites that capture your brand identity and engage your visitors.',
            features: [
                'Custom designs tailored to your brand',
                'Mobile-first responsive layouts',
                'User experience (UX) focused',
                'Accessibility compliant',
                'SEO-friendly structure',
                'Fast loading speeds',
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
        },
        {
            id: 'web-development',
            title: 'Web Development',
            description: 'Expert development using industry-leading technologies to build robust, scalable websites.',
            features: [
                'WordPress & WooCommerce',
                'Laravel applications',
                'Craft CMS',
                'Expression Engine',
                'CodeIgniter',
                'Bespoke PHP development',
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
        },
        {
            id: 'ecommerce',
            title: 'E-commerce Solutions',
            description: 'Online stores that convert visitors into customers and scale with your business.',
            features: [
                'WooCommerce development',
                'Payment gateway integration',
                'Stock management systems',
                'Order processing automation',
                'Multi-currency support',
                'Secure checkout processes',
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            id: 'hosting',
            title: 'Web Hosting',
            description: 'Reliable, secure hosting with proactive monitoring and expert support.',
            features: [
                'High-performance servers',
                'SSL certificates included',
                'Daily backups',
                '99.9% uptime guarantee',
                'DDoS protection',
                'Email hosting',
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            ),
        },
        {
            id: 'maintenance',
            title: 'Maintenance & Support',
            description: 'Keep your website secure, updated, and running smoothly with ongoing support.',
            features: [
                'Regular security updates',
                'Plugin/module updates',
                'Performance monitoring',
                'Content updates',
                'Technical support',
                'Emergency response',
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            id: 'bug-fixing',
            title: 'Bug Fixing & Repairs',
            description: 'Expert diagnosis and repair of website issues that others can\'t solve.',
            features: [
                'Debugging complex issues',
                'Performance optimisation',
                'Security vulnerability fixes',
                'Cross-browser compatibility',
                'Database repair',
                'Migration assistance',
            ],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[var(--secondary)] to-[var(--secondary-light)] text-white py-20">
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
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${
                                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                            >
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="w-16 h-16 bg-[var(--primary)] rounded-xl flex items-center justify-center text-white mb-6">
                                        {service.icon}
                                    </div>
                                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                                    <p className="text-lg text-[var(--muted)] mb-6">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3">
                                                <svg className="w-5 h-5 text-[var(--primary)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={`bg-gray-100 rounded-2xl p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                                        <div className="text-[var(--primary)]">
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[var(--primary)] text-white py-16">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Need a Custom Solution?
                    </h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        Every business is unique. Let&apos;s discuss your specific requirements 
                        and create a solution that fits perfectly.
                    </p>
                    <Link href="/contact" className="btn-secondary bg-white text-[var(--primary)] hover:bg-gray-100">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    );
}
