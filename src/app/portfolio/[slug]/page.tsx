import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioItems, getPortfolioItemBySlug } from '@/data/portfolio';
import type { Metadata } from 'next';

/*----------------------------------------
Generate static params for all portfolio items
----------------------------------------*/
export function generateStaticParams()
{
    return portfolioItems.map((item) => ({
        slug: item.slug,
    }));
}

/*----------------------------------------
Generate metadata for each portfolio item
----------------------------------------*/
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata>
{
    return params.then(({ slug }) => {
        const item = getPortfolioItemBySlug(slug);
        
        if (!item)
        {
            return {
                title: 'Project Not Found'
            };
        }
        
        return {
            title: `${item.title} - Portfolio`,
            description: item.description || `View our ${item.title} project - web design and development by Amity Web Solutions.`
        };
    });
}

/*----------------------------------------
Individual Portfolio Item Page
----------------------------------------*/
export default async function PortfolioItemPage({ params }: { params: Promise<{ slug: string }> })
{
    const { slug } = await params;
    const item = getPortfolioItemBySlug(slug);
    
    if (!item)
    {
        notFound();
    }
    
    /* Get related portfolio items (different projects) */
    const relatedItems = portfolioItems
        .filter(p => p.slug !== slug)
        .slice(0, 3);
    
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[var(--secondary)] text-white py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        {/* Technologies */}
                        {item.technologies && item.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {item.technologies.map((tech) => (
                                    <span 
                                        key={tech}
                                        className="px-3 py-1 bg-white/10 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                        
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            {item.title}
                        </h1>
                        
                        {item.description && (
                            <p className="text-xl text-gray-300 mt-4">
                                {item.description}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Featured Image */}
                            {item.image ? (
                                <div className="aspect-video rounded-xl overflow-hidden mb-8 border border-[var(--border)]">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={800}
                                        height={450}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="aspect-video bg-[var(--secondary)] rounded-xl mb-8 flex items-center justify-center">
                                    <Image
                                        src="/logo-white.svg"
                                        alt="Amity Web Solutions"
                                        width={200}
                                        height={60}
                                        className="opacity-50"
                                    />
                                </div>
                            )}
                            
                            {/* Project Details */}
                            <div className="prose prose-lg max-w-none">
                                <h2>About This Project</h2>
                                <p>
                                    {item.description || `${item.title} is one of our portfolio projects showcasing our web design and development expertise.`}
                                </p>
                                
                                {item.technologies && item.technologies.length > 0 && (
                                    <>
                                        <h3>Technologies Used</h3>
                                        <ul>
                                            {item.technologies.map((tech) => (
                                                <li key={tech}>{tech}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                            
                            {/* Visit Site Button */}
                            {item.url && (
                                <div className="mt-8">
                                    <a 
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary"
                                    >
                                        Visit Website
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            )}
                            
                            {/* Back Link */}
                            <div className="mt-12 pt-8 border-t border-[var(--border)]">
                                <Link 
                                    href="/portfolio"
                                    className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back to Portfolio
                                </Link>
                            </div>
                        </div>
                        
                        {/* Sidebar */}
                        <div>
                            <div className="bg-[var(--background-alt)] rounded-xl p-6 sticky top-24">
                                <h3 className="font-bold mb-4">More Projects</h3>
                                <ul className="space-y-4">
                                    {relatedItems.map((relatedItem) => (
                                        <li key={relatedItem.slug}>
                                            <Link 
                                                href={`/portfolio/${relatedItem.slug}`}
                                                className="group flex gap-4"
                                            >
                                                <div className="w-20 h-16 rounded overflow-hidden flex-shrink-0 border border-[var(--border)]">
                                                    <Image
                                                        src={relatedItem.image}
                                                        alt={relatedItem.title}
                                                        width={80}
                                                        height={64}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-medium group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                                                        {relatedItem.title}
                                                    </h4>
                                                    {relatedItem.technologies && relatedItem.technologies.length > 0 && (
                                                        <span className="text-xs text-[var(--muted)]">
                                                            {relatedItem.technologies[0]}
                                                        </span>
                                                    )}
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                                    <Link 
                                        href="/portfolio"
                                        className="text-[var(--primary)] hover:underline text-sm"
                                    >
                                        View all projects →
                                    </Link>
                                </div>
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
                            Want a Website Like This?
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Let&apos;s discuss how we can bring your digital presence to life.
                        </p>
                        <Link 
                            href="/contact" 
                            className="inline-block bg-white text-[#e94e1a] px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
