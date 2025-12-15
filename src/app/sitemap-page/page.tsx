import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { blogPosts, getCategories } from '@/data/blogPosts';

export const metadata: Metadata = {
    title: 'Sitemap',
    description: 'Complete sitemap of Amity Web Solutions website. Find all pages, services, blog posts and legal information.',
};

/*----------------------------------------
HTML Sitemap Page
----------------------------------------*/
export default function SitemapPage()
{
    const categories = getCategories();
    const recentPosts = blogPosts.slice(0, 20);

    return (
        <>
            {/* Hero Section */}
            <section className="bg-[var(--secondary)] text-white py-16">
                <div className="container">
                    <h1 className="text-4xl font-bold text-white">Sitemap</h1>
                    <p className="text-xl text-gray-300 mt-4">
                        Find your way around our website
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Main Pages */}
                        <div>
                            <h2 className="text-xl font-bold mb-4 text-[var(--primary)]">Main Pages</h2>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-[var(--muted)] hover:text-[var(--primary)]">Home</Link></li>
                                <li><Link href="/about" className="text-[var(--muted)] hover:text-[var(--primary)]">About Us</Link></li>
                                <li><Link href="/services" className="text-[var(--muted)] hover:text-[var(--primary)]">Services</Link></li>
                                <li><Link href="/portfolio" className="text-[var(--muted)] hover:text-[var(--primary)]">Portfolio</Link></li>
                                <li><Link href="/blog" className="text-[var(--muted)] hover:text-[var(--primary)]">Blog</Link></li>
                                <li><Link href="/contact" className="text-[var(--muted)] hover:text-[var(--primary)]">Contact</Link></li>
                                <li><Link href="/faqs" className="text-[var(--muted)] hover:text-[var(--primary)]">FAQs</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h2 className="text-xl font-bold mb-4 text-[var(--primary)]">Services</h2>
                            <ul className="space-y-2">
                                {services.map((service) => (
                                    <li key={service.slug}>
                                        <Link 
                                            href={`/services/${service.slug}`} 
                                            className="text-[var(--muted)] hover:text-[var(--primary)]"
                                        >
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Location Pages */}
                        <div>
                            <h2 className="text-xl font-bold mb-4 text-[var(--primary)]">Locations</h2>
                            <ul className="space-y-2">
                                <li><Link href="/web-design-cardiff" className="text-[var(--muted)] hover:text-[var(--primary)]">Web Design Cardiff</Link></li>
                                <li><Link href="/web-design-newport" className="text-[var(--muted)] hover:text-[var(--primary)]">Web Design Newport</Link></li>
                            </ul>

                            <h2 className="text-xl font-bold mb-4 mt-8 text-[var(--primary)]">Legal</h2>
                            <ul className="space-y-2">
                                <li><Link href="/legal/privacy-policy" className="text-[var(--muted)] hover:text-[var(--primary)]">Privacy Policy</Link></li>
                                <li><Link href="/legal/cookie-policy" className="text-[var(--muted)] hover:text-[var(--primary)]">Cookie Policy</Link></li>
                                <li><Link href="/legal/acceptable-use-policy" className="text-[var(--muted)] hover:text-[var(--primary)]">Acceptable Use Policy</Link></li>
                                <li><Link href="/legal/security-policy" className="text-[var(--muted)] hover:text-[var(--primary)]">Security Policy</Link></li>
                                <li><Link href="/legal/disclaimer" className="text-[var(--muted)] hover:text-[var(--primary)]">Disclaimer</Link></li>
                                <li><Link href="/legal/copyright" className="text-[var(--muted)] hover:text-[var(--primary)]">Copyright</Link></li>
                                <li><Link href="/legal/customer-complaints-process" className="text-[var(--muted)] hover:text-[var(--primary)]">Complaints Process</Link></li>
                                <li><Link href="/legal/data-breach-policy" className="text-[var(--muted)] hover:text-[var(--primary)]">Data Breach Policy</Link></li>
                                <li><Link href="/legal/green-policy" className="text-[var(--muted)] hover:text-[var(--primary)]">Green Policy</Link></li>
                            </ul>
                        </div>

                        {/* Blog Categories */}
                        <div>
                            <h2 className="text-xl font-bold mb-4 text-[var(--primary)]">Blog Categories</h2>
                            <ul className="space-y-2">
                                {categories.map((category) => (
                                    <li key={category}>
                                        <Link 
                                            href={`/blog?category=${encodeURIComponent(category)}`} 
                                            className="text-[var(--muted)] hover:text-[var(--primary)]"
                                        >
                                            {category}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Recent Blog Posts */}
                    <div className="mt-12">
                        <h2 className="text-xl font-bold mb-4 text-[var(--primary)]">Recent Blog Posts</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {recentPosts.map((post) => (
                                <Link 
                                    key={post.slug}
                                    href={`/blog/${post.slug}`} 
                                    className="text-[var(--muted)] hover:text-[var(--primary)] text-sm"
                                >
                                    {post.title}
                                </Link>
                            ))}
                        </div>
                        <p className="mt-4 text-[var(--muted)]">
                            <Link href="/blog" className="text-[var(--primary)] hover:underline">
                                View all {blogPosts.length} blog posts →
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
