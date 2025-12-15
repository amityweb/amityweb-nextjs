import Link from 'next/link';

/*----------------------------------------
ServiceCard component - Reusable service card with icon
Shows icon next to title on large screens, stacked on mobile
----------------------------------------*/

interface ServiceCardProps
{
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps)
{
    return (
        <Link href={href} className="card group cursor-pointer">
            {/* Icon and Title - side by side on large screens */}
            <div className="flex items-center gap-4 mb-4">
                <div className="card-icon shrink-0">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-[var(--primary)] transition-colors">
                    {title}
                </h3>
            </div>
            <p className="text-[var(--muted)]">
                {description}
            </p>
        </Link>
    );
}
