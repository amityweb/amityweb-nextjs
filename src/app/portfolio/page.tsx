import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioItems } from '@/data/portfolio';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'View our portfolio of web design and development projects. Over 400 websites built for businesses across the UK.',
};

/*----------------------------------------
Portfolio page component
----------------------------------------*/
export default function PortfolioPage()
{
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

            {/* Portfolio Grid */}
            <section className="section bg-white">
                <div className="container">
                    {/* Portfolio Items */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioItems.map((item) => (
                            <article
                                key={item.slug}
                                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                {/* Image */}
                                <div className="relative aspect-video bg-[var(--secondary)] overflow-hidden flex items-center justify-center">
                                    <Image
                                        src="/logo-white.svg"
                                        alt={item.title}
                                        width={120}
                                        height={40}
                                        className="opacity-30"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3">
                                        {item.title}
                                    </h3>
                                    {item.description && (
                                        <p className="text-[var(--muted)] mb-4">
                                            {item.description}
                                        </p>
                                    )}
                                    {item.technologies && (
                                        <div className="flex flex-wrap gap-2">
                                            {item.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-[var(--secondary)]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
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
