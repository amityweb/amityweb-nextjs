import Link from 'next/link';
import Card from '@/components/Card';
import { blogPosts, getCategories } from '@/data/blogPosts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Web development tips, company news, and insights from the Amity Web Solutions team.'
};

/*----------------------------------------
Blog Listing Page with pagination
----------------------------------------*/
export default async function BlogPage(
    { searchParams }: { searchParams: Promise<{ page?: string; category?: string }> }
)
{
    const params = await searchParams;
    const currentPage = parseInt(params.page || '1', 10);
    const selectedCategory = params.category || '';
    const postsPerPage = 12;
    
    /* Filter by category if specified */
    const filteredPosts = selectedCategory 
        ? blogPosts.filter(post => post.category === selectedCategory)
        : blogPosts;
    
    /* Calculate pagination */
    const totalPosts = filteredPosts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);
    
    /* Get all categories */
    const categories = getCategories();

    return (
        <>
            {/* Hero Section */}
            <section className="bg-[var(--secondary)] text-white py-20">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            Blog
                        </h1>
                        <p className="text-xl text-gray-300">
                            Web development tips, company news, and insights from our team.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-6 border-b border-[var(--border)]">
                <div className="container">
                    <div className="flex flex-wrap justify-center gap-2">
                        <Link 
                            href="/blog"
                            className={`px-4 py-2 text-sm font-medium transition-colors ${
                                !selectedCategory 
                                    ? 'text-[var(--foreground)] border-b-2 border-[var(--primary)]' 
                                    : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                            }`}
                        >
                            All Posts
                        </Link>
                        {categories.map((category) => (
                            <Link 
                                key={category}
                                href={`/blog?category=${encodeURIComponent(category)}`}
                                className={`px-4 py-2 text-sm font-medium transition-colors ${
                                    selectedCategory === category 
                                        ? 'text-[var(--foreground)] border-b-2 border-[var(--primary)]' 
                                        : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                                }`}
                            >
                                {category}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {paginatedPosts.map((post) => (
                            <Card
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                image={post.image}
                                imageAlt={post.title}
                                title={post.title}
                                description={post.excerpt}
                                tags={post.tags}
                                meta={
                                    <div className="flex items-center gap-3">
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
                                }
                            />
                        ))}
                    </div>
                    
                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-12">
                            {currentPage > 1 && (
                                <Link 
                                    href={`/blog?page=${currentPage - 1}${selectedCategory ? `&category=${encodeURIComponent(selectedCategory)}` : ''}`}
                                    className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] transition-colors"
                                >
                                    Previous
                                </Link>
                            )}
                            
                            <div className="flex gap-1">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                    /* Show first, last, current, and adjacent pages */
                                    if (
                                        page === 1 || 
                                        page === totalPages || 
                                        (page >= currentPage - 1 && page <= currentPage + 1)
                                    ) {
                                        return (
                                            <Link
                                                key={page}
                                                href={`/blog?page=${page}${selectedCategory ? `&category=${encodeURIComponent(selectedCategory)}` : ''}`}
                                                className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
                                                    page === currentPage
                                                        ? 'bg-[var(--primary)] text-white'
                                                        : 'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]'
                                                }`}
                                            >
                                                {page}
                                            </Link>
                                        );
                                    } else if (
                                        page === currentPage - 2 || 
                                        page === currentPage + 2
                                    ) {
                                        return <span key={page} className="w-10 h-10 flex items-center justify-center">...</span>;
                                    }
                                    return null;
                                })}
                            </div>
                            
                            {currentPage < totalPages && (
                                <Link 
                                    href={`/blog?page=${currentPage + 1}${selectedCategory ? `&category=${encodeURIComponent(selectedCategory)}` : ''}`}
                                    className="px-4 py-2 rounded-lg bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] transition-colors"
                                >
                                    Next
                                </Link>
                            )}
                        </div>
                    )}
                    
                    {/* Post count */}
                    <p className="text-center text-[var(--muted)] mt-6">
                        Showing {startIndex + 1}-{Math.min(startIndex + postsPerPage, totalPosts)} of {totalPosts} posts
                    </p>
                </div>
            </section>
        </>
    );
}
