import { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';
import { services } from '@/data/services';
import { portfolioItems } from '@/data/portfolio';

/*----------------------------------------
XML Sitemap Generator
----------------------------------------*/
export default function sitemap(): MetadataRoute.Sitemap
{
    const baseUrl = 'https://www.amityweb.co.uk';
    
    /* Static pages */
    const staticPages = [
        { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
        { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/portfolio', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/blog', priority: 0.9, changeFrequency: 'daily' as const },
        { url: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/faqs', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/web-design-cardiff', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/web-design-newport', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/sitemap-page', priority: 0.3, changeFrequency: 'monthly' as const },
    ];

    /* Legal pages */
    const legalPages = [
        '/privacy-policy',
        '/cookie-policy',
        '/acceptable-use-policy',
        '/security-policy',
        '/disclaimer',
        '/copyright',
        '/customer-complaints-process',
        '/data-breach-policy',
        '/green-policy',
    ];

    /* Build sitemap entries */
    const sitemapEntries: MetadataRoute.Sitemap = [
        /* Static pages */
        ...staticPages.map((page) => ({
            url: `${baseUrl}${page.url}`,
            lastModified: new Date(),
            changeFrequency: page.changeFrequency,
            priority: page.priority,
        })),
        
        /* Legal pages */
        ...legalPages.map((page) => ({
            url: `${baseUrl}${page}`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.3,
        })),
        
        /* Service pages */
        ...services.map((service) => ({
            url: `${baseUrl}/services/${service.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
        
        /* Portfolio pages */
        ...portfolioItems.map((item) => ({
            url: `${baseUrl}/portfolio/${item.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
        
        /* Blog posts */
        ...blogPosts.map((post) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: new Date(post.date),
            changeFrequency: 'yearly' as const,
            priority: 0.6,
        })),
    ];

    return sitemapEntries;
}
