import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'View our portfolio of web design and development projects. Over 400 websites built for businesses across the UK.',
};

/*----------------------------------------
Portfolio item type definition
----------------------------------------*/
interface PortfolioItem
{
    id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    url?: string;
    technologies: string[];
}

/*----------------------------------------
Sample portfolio items - replace with your actual projects
----------------------------------------*/
const portfolioItems: PortfolioItem[] = [
    {
        id: '1',
        title: 'Compound Security',
        category: 'E-commerce',
        description: 'Worldwide e-commerce website for the inventors of the Mosquito Anti-Loitering Device.',
        image: '/portfolio/placeholder.jpg',
        technologies: ['WooCommerce', 'WordPress', 'PHP'],
    },
    {
        id: '2',
        title: 'Welsh Costume Centre',
        category: 'E-commerce',
        description: 'Multi-faceted e-commerce website for traditional Welsh costumes and accessories.',
        image: '/portfolio/placeholder.jpg',
        technologies: ['WooCommerce', 'WordPress', 'PHP'],
    },
    {
        id: '3',
        title: 'Let Right',
        category: 'Corporate',
        description: 'Professional website for a leading lettings management and estate agent in Pontypridd.',
        image: '/portfolio/placeholder.jpg',
        url: 'https://let-right.co.uk',
        technologies: ['WordPress', 'PHP', 'Custom Theme'],
    },
    {
        id: '4',
        title: 'Professional Services',
        category: 'Corporate',
        description: 'Clean, professional corporate website with content management system.',
        image: '/portfolio/placeholder.jpg',
        technologies: ['Craft CMS', 'PHP', 'Twig'],
    },
    {
        id: '5',
        title: 'Local Business',
        category: 'Small Business',
        description: 'Modern website design for a local service business with booking integration.',
        image: '/portfolio/placeholder.jpg',
        technologies: ['WordPress', 'PHP', 'JavaScript'],
    },
    {
        id: '6',
        title: 'Charity Organisation',
        category: 'Non-profit',
        description: 'Accessible, user-friendly website for a charitable organisation.',
        image: '/portfolio/placeholder.jpg',
        technologies: ['WordPress', 'PHP', 'Accessibility'],
    },
];

const categories = ['All', 'E-commerce', 'Corporate', 'Small Business', 'Non-profit'];

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
                    {/* Category Filter - future enhancement */}
                    <div className="flex flex-wrap gap-3 mb-12 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                                    category === 'All'
                                        ? 'bg-[var(--primary)] text-white'
                                        : 'bg-gray-100 text-[var(--foreground)] hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Portfolio Items */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioItems.map((item) => (
                            <article
                                key={item.id}
                                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                {/* Image */}
                                <div className="relative aspect-video bg-gray-200 overflow-hidden">
                                    <div className="absolute inset-0 bg-[var(--secondary)] flex items-center justify-center">
                                        <span className="text-white text-lg font-medium">{item.title}</span>
                                    </div>
                                    {/* Uncomment when you have actual images */}
                                    {/* <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    /> */}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <span className="text-sm font-medium text-[var(--primary)]">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-semibold mt-2 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-[var(--muted)] mb-4">
                                        {item.description}
                                    </p>
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
                                    {item.url && (
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 mt-4 text-[var(--primary)] font-medium hover:underline"
                                        >
                                            Visit Website
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
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
