/*----------------------------------------
Portfolio Items Data
----------------------------------------*/
export interface PortfolioItem
{
    title: string;
    slug: string;
    image: string;
    description?: string;
    url?: string;
    technologies?: string[];
}

/*----------------------------------------
Get unique technologies from all portfolio items
----------------------------------------*/
export function getTechnologies(): string[]
{
    const techSet = new Set<string>();
    portfolioItems.forEach(item => {
        item.technologies?.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
}

/*----------------------------------------
Get a portfolio item by slug
----------------------------------------*/
export function getPortfolioItemBySlug(slug: string): PortfolioItem | undefined
{
    return portfolioItems.find(item => item.slug === slug);
}

export const portfolioItems: PortfolioItem[] = [
    { 
        title: 'Carer Friendly Wales', 
        slug: 'carer-friendly-wales', 
        image: '/portfolio/screen/Carer-Friendly.jpg.webp',
        description: 'Website for the Carer Friendly Wales initiative.',
        technologies: ['WordPress', 'Custom Theme']
    },
    { 
        title: 'Wales & West Housing Association', 
        slug: 'wales-west-housing-association', 
        image: '/portfolio/screen/Wales-and-West-Housing.jpg.webp',
        description: 'Housing association website with tenant portal.',
        technologies: ['WordPress', 'WooCommerce']
    },
    { 
        title: 'Monmouthshire Housing Association', 
        slug: 'monmouthshire-housing-association', 
        image: '/portfolio/screen/MHA.jpg.webp',
        description: 'Corporate website for Monmouthshire Housing.',
        technologies: ['WordPress', 'Custom Development']
    },
    { 
        title: 'Ty Hafan Crackerjackpot Lottery', 
        slug: 'ty-hafan-crackerjackpot-lottery', 
        image: '/portfolio/screen/Lottery.jpg.webp',
        description: 'Charity lottery website for Ty Hafan.',
        technologies: ['WordPress', 'Payment Integration']
    },
    { 
        title: 'Vision 21', 
        slug: 'vision-21', 
        image: '/portfolio/screen/V2.jpg.webp',
        description: 'Charity website for Vision 21.',
        technologies: ['WordPress', 'Accessibility Focus']
    },
    { 
        title: 'Valleys Regional Park', 
        slug: 'valleys-regional-park', 
        image: '/portfolio/screen/Valleys-Regional.jpg.webp',
        description: 'Tourism website for Valleys Regional Park.',
        technologies: ['WordPress', 'Interactive Maps']
    },
    { 
        title: 'Super Computing Wales', 
        slug: 'super-computing-wales', 
        image: '/portfolio/screen/Super-Computing.jpg.webp',
        description: 'Academic research computing website.',
        technologies: ['WordPress', 'Custom Theme']
    },
    { 
        title: 'Capsel Homes', 
        slug: 'capsel-homes', 
        image: '/portfolio/screen/Capsel.jpg.webp',
        description: 'Property development company website.',
        technologies: ['WordPress', 'Property Listings']
    },
    { 
        title: 'Youth Futures Foundation', 
        slug: 'youth-futures-foundation', 
        image: '/portfolio/screen/Youth-Futures.jpg.webp',
        description: 'Foundation website focused on youth employment.',
        technologies: ['WordPress', 'Custom Development']
    },
    { 
        title: 'Procter Cast Stone', 
        slug: 'procter-cast-stone', 
        image: '/portfolio/screen/Procter-Cast-Stone.jpg.webp',
        description: 'Manufacturing company website.',
        technologies: ['WordPress', 'Product Catalogue']
    },
    { 
        title: 'Sense Earth', 
        slug: 'sense-earth', 
        image: '/portfolio/screen/Sense-Earth.jpg.webp',
        description: 'Environmental consultancy website.',
        technologies: ['WordPress', 'Custom Theme']
    },
    { 
        title: 'Swperbox', 
        slug: 'swperbox', 
        image: '/portfolio/screen/Swperbox.jpg.webp',
        description: 'Subscription box service website.',
        technologies: ['WordPress', 'WooCommerce']
    },
    { 
        title: 'Heatsense', 
        slug: 'heatsense', 
        image: '/portfolio/screen/Heatsense.jpg.webp',
        description: 'Heating services company website.',
        technologies: ['WordPress', 'Lead Generation']
    },
    { 
        title: 'Cavamh', 
        slug: 'cavamh', 
        image: '/portfolio/screen/Cavamh.jpg.webp',
        description: 'Voluntary action organisation website.',
        technologies: ['WordPress', 'Events Management']
    },
    { 
        title: 'Captiva Spa', 
        slug: 'captiva-spa', 
        image: '/portfolio/screen/Captiva-Spa.jpg.webp',
        description: 'Luxury spa and wellness website.',
        technologies: ['WordPress', 'Booking System']
    },
    { 
        title: 'Green Finance Institute', 
        slug: 'green-finance-institute', 
        image: '/portfolio/screen/Green-Finance-Institute.jpg.webp',
        description: 'Financial institute focused on green initiatives.',
        technologies: ['WordPress', 'Custom Theme']
    },
    { 
        title: 'Expeditions Wales', 
        slug: 'expeditions-wales', 
        image: '/portfolio/screen/expeditionswales_screen.png.webp',
        description: 'Outdoor adventure company website.',
        technologies: ['WordPress', 'Booking System']
    },
    { 
        title: 'Blagrave Trust', 
        slug: 'blagrave-trust', 
        image: '/portfolio/screen/blagrave_screen-980x733.png.webp',
        description: 'Charitable trust website.',
        technologies: ['WordPress', 'Grant Management']
    },
    { 
        title: 'Workshed Wales', 
        slug: 'workshed-wales', 
        image: '/portfolio/screen/workshed_screen-980x792.png.webp',
        description: 'Co-working space website.',
        technologies: ['WordPress', 'Membership System']
    },
    { 
        title: 'Powys Mental Health', 
        slug: 'powys-mental-health', 
        image: '/portfolio/screen/pavo-screenshot.png.webp',
        description: 'Mental health support services website.',
        technologies: ['WordPress', 'Resource Directory']
    },
    { 
        title: 'Let Right & Sell Right Property', 
        slug: 'let-right-sell-right-property-lettings-and-sales', 
        image: '/portfolio/screen/let-right-3.png',
        description: 'Property lettings and sales agency website.',
        technologies: ['WordPress', 'Property Listings']
    },
];
