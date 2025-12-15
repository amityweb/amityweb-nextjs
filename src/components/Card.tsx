import Image from 'next/image';
import Link from 'next/link';

/*----------------------------------------
Props interface for Card component
----------------------------------------*/
interface CardProps
{
    href: string;
    image?: string;
    imageAlt: string;
    title: string;
    description?: string;
    tags?: string[];
    meta?: React.ReactNode;
    className?: string;
}

/*----------------------------------------
Reusable Card component for portfolio and blog items
Image fills to card edge with tags displayed below
----------------------------------------*/
export default function Card({ href, image, imageAlt, title, description, tags, meta, className = '' }: CardProps)
{
    return (
        <article className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${className}`}>
            <Link href={href} className="block">
                {/* Image - fills to card edge */}
                <div className="relative aspect-video bg-[var(--secondary)] overflow-hidden flex items-center justify-center">
                    {image ? (
                        <Image
                            src={image}
                            alt={imageAlt}
                            width={400}
                            height={225}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    ) : (
                        <Image
                            src="/logo-white.svg"
                            alt="Amity Web Solutions"
                            width={120}
                            height={40}
                            className="opacity-30"
                        />
                    )}
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Meta info (category, date, etc) */}
                    {meta && (
                        <div className="text-sm text-[var(--muted)] mb-2">
                            {meta}
                        </div>
                    )}
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">
                        {title}
                    </h3>
                    
                    {/* Description */}
                    {description && (
                        <p className="text-[var(--muted)] line-clamp-3 mb-4">
                            {description}
                        </p>
                    )}
                    
                    {/* Tags */}
                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-[var(--secondary)]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </Link>
        </article>
    );
}
