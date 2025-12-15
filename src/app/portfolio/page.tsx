import type { Metadata } from 'next';
import Link from 'next/link';
import Card from '@/components/Card';
import { portfolioItems, getTechnologies } from '@/data/portfolio';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'View our portfolio of web design and development projects. Over 400 websites built for businesses across the UK.',
};

/*----------------------------------------
Portfolio page component with tag filtering
----------------------------------------*/
export default async function PortfolioPage(
    { searchParams }: { searchParams: Promise<{ tag?: string }> }
)
{
    const params = await searchParams;
    const selectedTag = params.tag || '';
    
    /* Filter by tag if specified */
    const filteredItems = selectedTag 
        ? portfolioItems.filter(item => item.technologies?.includes(selectedTag))
        : portfolioItems;
    
    /* Get all unique technologies */
    const technologies = getTechnologies();

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[var(--secondary)] to-[var(--secondary-light)] text-white py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Our Work
                        </h1>
                        <p className="text-xl text-gray-300">
                            With over 400 websites built since 2005, here&apos;s a selection of 
                            projects we&apos;re proud of.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tag Filter */}
            <section className="py-6 border-b border-[var(--border)]">
                <div className="container">
                    <div className="flex flex-wrap justify-center gap-2">
                        <Link 
                            href="/portfolio"
                            className={`px-4 py-2 text-sm font-medium transition-colors ${
                                !selectedTag 
                                    ? 'text-[var(--foreground)] border-b-2 border-[var(--primary)]' 
                                    : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                            }`}
                        >
                            All Projects
                        </Link>
                        {technologies.map((tech) => (
                            <Link 
                                key={tech}
                                href={`/portfolio?tag=${encodeURIComponent(tech)}`}
                                className={`px-4 py-2 text-sm font-medium transition-colors ${
                                    selectedTag === tech 
                                        ? 'text-[var(--foreground)] border-b-2 border-[var(--primary)]' 
                                        : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                                }`}
                            >
                                {tech}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="section bg-white">
                <div className="container">
                    {/* Portfolio Items */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.map((item) => (
                            <Card
                                key={item.slug}
                                href={`/portfolio/${item.slug}`}
                                image={item.image}
                                imageAlt={item.title}
                                title={item.title}
                                description={item.description}
                                tags={item.technologies}
                            />
                        ))}
                    </div>
                    
                    {/* Results count */}
                    <p className="text-center text-[var(--muted)] mt-8">
                        Showing {filteredItems.length} project{filteredItems.length !== 1 ? 's' : ''}
                        {selectedTag && ` tagged with "${selectedTag}"`}
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-100 py-16">
                <div className="container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Want to See Your Project Here?
                    </h2>
                    <p className="text-lg text-[var(--muted)] mb-8 max-w-2xl mx-auto">
                        Let&apos;s discuss how we can bring your vision to life and create 
                        a website that delivers results.
                    </p>
                    <Link href="/contact" className="btn-primary">
                        Start Your Project
                    </Link>
                </div>
            </section>
        </>
    );
}
