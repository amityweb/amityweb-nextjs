import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { blogPosts, getPostBySlug } from '@/data/blogPosts';
import type { Metadata } from 'next';

/*----------------------------------------
Generate static params for all blog posts
----------------------------------------*/
export function generateStaticParams()
{
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

/*----------------------------------------
Generate metadata for each blog post
----------------------------------------*/
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata>
{
    return params.then(({ slug }) => {
        const post = getPostBySlug(slug);
        
        if (!post)
        {
            return {
                title: 'Post Not Found'
            };
        }
        
        return {
            title: post.title,
            description: post.excerpt
        };
    });
}

/*----------------------------------------
Individual Blog Post Page
----------------------------------------*/
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> })
{
    const { slug } = await params;
    const post = getPostBySlug(slug);
    
    if (!post)
    {
        notFound();
    }
    
    /* Get related posts (same category or recent) */
    const relatedPosts = blogPosts
        .filter(p => p.slug !== slug)
        .slice(0, 3);
    
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[var(--secondary)] text-white py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        {/* Category & Date */}
                        <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                            {post.category && (
                                <>
                                    <span className="text-[var(--primary)]">{post.category}</span>
                                    <span>•</span>
                                </>
                            )}
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </time>
                        </div>
                        
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            {post.title}
                        </h1>
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
                            {post.image ? (
                                <div className="aspect-video rounded-xl overflow-hidden mb-8">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
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
                            
                            {/* Article Content */}
                            <article 
                                className="prose prose-lg max-w-none"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                            
                            {/* Back Link */}
                            <div className="mt-12 pt-8 border-t border-[var(--border)]">
                                <Link 
                                    href="/blog"
                                    className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                    Back to Blog
                                </Link>
                            </div>
                        </div>
                        
                        {/* Sidebar */}
                        <div>
                            <div className="bg-[var(--surface)] rounded-xl p-6 sticky top-24">
                                <h3 className="font-bold mb-4">More Articles</h3>
                                <ul className="space-y-4">
                                    {relatedPosts.map((relatedPost) => (
                                        <li key={relatedPost.slug}>
                                            <Link 
                                                href={`/blog/${relatedPost.slug}`}
                                                className="group"
                                            >
                                                <span className="text-sm text-[var(--muted)]">
                                                    {new Date(relatedPost.date).toLocaleDateString('en-GB', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                                <h4 className="font-medium group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                                                    {relatedPost.title}
                                                </h4>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                                    <Link 
                                        href="/blog"
                                        className="text-[var(--primary)] hover:underline text-sm"
                                    >
                                        View all articles →
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
                            Need Help With Your Website?
                        </h2>
                        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                            Get in touch with our team to discuss your project.
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
