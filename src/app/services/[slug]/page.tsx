import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/data/services';
import { getServiceIcon } from '@/components/ServiceIcons';
import type { Metadata } from 'next';

/*----------------------------------------
Generate static params for all service pages
----------------------------------------*/
export function generateStaticParams()
{
    return services.map((service) => ({
        slug: service.slug,
    }));
}

/*----------------------------------------
Generate metadata for each service page
----------------------------------------*/
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata>
{
    return params.then(({ slug }) => {
        const service = services.find((s) => s.slug === slug);
        
        if (!service)
        {
            return {
                title: 'Service Not Found'
            };
        }
        
        return {
            title: service.title,
            description: service.description
        };
    });
}

/*----------------------------------------
Individual Service Page
----------------------------------------*/
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> })
{
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);
    
    if (!service)
    {
        notFound();
    }
    
    const IconComponent = getServiceIcon(service.icon);
    
    /* Get other services for cross-linking */
    const otherServices = services.filter((s) => s.slug !== slug);
    
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[var(--secondary)] text-white py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-[var(--primary)] rounded-xl flex items-center justify-center">
                                <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white">
                                {service.title}
                            </h1>
                        </div>
                        <p className="text-xl text-gray-300">
                            {service.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold mb-6">Overview</h2>
                            <p className="text-lg text-[var(--muted)] mb-8">
                                {service.fullDescription}
                            </p>
                            
                            <h3 className="text-xl font-bold mb-4">What&apos;s Included</h3>
                            <ul className="list-disc list-inside space-y-2 text-[var(--muted)] mb-8">
                                {service.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Sidebar */}
                        <div>
                            <div className="bg-[var(--surface)] rounded-xl p-6 sticky top-24">
                                <h3 className="font-bold mb-4">Other Services</h3>
                                <ul className="space-y-3">
                                    {otherServices.map((s) => {
                                        const OtherIcon = getServiceIcon(s.icon);
                                        return (
                                            <li key={s.slug}>
                                                <Link 
                                                    href={`/services/${s.slug}`}
                                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--bg)] transition-colors group"
                                                >
                                                    <div className="w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                                                        <OtherIcon className="w-5 h-5 text-white" />
                                                    </div>
                                                    <span className="font-medium group-hover:text-[var(--primary)] transition-colors">
                                                        {s.title}
                                                    </span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20" style={{ backgroundColor: '#e94e1a' }}>
                <div className="container">
                    <div className="text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Let&apos;s Discuss Your Project
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Get in touch to find out how our {service.title.toLowerCase()} services can help your business.
                        </p>
                        <Link 
                            href="/contact" 
                            className="inline-block bg-white text-[#e94e1a] px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
