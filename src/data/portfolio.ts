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

export const portfolioItems: PortfolioItem[] = [
    { 
        title: 'Carer Friendly Wales', 
        slug: 'carer-friendly-wales', 
        image: '/portfolio/carer-friendly-wales.jpg',
        description: 'Website for the Carer Friendly Wales initiative.',
        technologies: ['WordPress', 'Custom Theme']
    },
    { 
        title: 'Wales & West Housing Association', 
        slug: 'wales-west-housing-association', 
        image: '/portfolio/wales-west-housing.jpg',
        description: 'Housing association website with tenant portal.',
        technologies: ['WordPress', 'WooCommerce']
    },
    { 
        title: 'Monmouthshire Housing Association', 
        slug: 'monmouthshire-housing-association', 
        image: '/portfolio/mha.jpg',
        description: 'Corporate website for Monmouthshire Housing.',
        technologies: ['WordPress', 'Custom Development']
    },
    { 
        title: 'Ty Hafan Crackerjackpot Lottery', 
        slug: 'ty-hafan-crackerjackpot-lottery', 
        image: '/portfolio/lottery.jpg',
        description: 'Charity lottery website for Ty Hafan.',
        technologies: ['WordPress', 'Payment Integration']
    },
    { 
        title: 'Vision 21', 
        slug: 'vision-21', 
        image: '/portfolio/vision-21.jpg',
        description: 'Charity website for Vision 21.',
        technologies: ['WordPress', 'Accessibility Focus']
    },
    { 
        title: 'Valleys Regional Park', 
        slug: 'valleys-regional-park', 
        image: '/portfolio/valleys-regional.jpg',
        description: 'Tourism website for Valleys Regional Park.',
        technologies: ['WordPress', 'Interactive Maps']
    },
    { 
        title: 'Super Computing Wales', 
        slug: 'super-computing-wales', 
        image: '/portfolio/super-computing.jpg',
        description: 'Academic research computing website.',
        technologies: ['WordPress', 'Custom Theme']
    },
    { 
        title: 'Capsel Homes', 
        slug: 'capsel-homes', 
        image: '/portfolio/capsel.jpg',
        description: 'Property development company website.',
        technologies: ['WordPress', 'Property Listings']
    },
    { 
        title: 'Youth Futures Foundation', 
        slug: 'youth-futures-foundation', 
        image: '/portfolio/youth-futures.jpg',
        description: 'Foundation website focused on youth employment.',
        technologies: ['WordPress', 'Custom Development']
    },
    { 
        title: 'Procter Cast Stone', 
        slug: 'procter-cast-stone', 
        image: '/portfolio/procter-cast-stone.jpg',
        description: 'Manufacturing company website.',
        technologies: ['WordPress', 'Product Catalogue']
    },
    { 
        title: 'Sense Earth', 
        slug: 'sense-earth', 
        image: '/portfolio/sense-earth.jpg',
        description: 'Environmental consultancy website.',
        technologies: ['WordPress', 'Custom Theme']
    },
    { 
        title: 'Swperbox', 
        slug: 'swperbox', 
        image: '/portfolio/swperbox.jpg',
        description: 'Subscription box service website.',
        technologies: ['WordPress', 'WooCommerce']
    },
    { 
        title: 'Heatsense', 
        slug: 'heatsense', 
        image: '/portfolio/heatsense.jpg',
        description: 'Heating services company website.',
        technologies: ['WordPress', 'Lead Generation']
    },
    { 
        title: 'Cavamh', 
        slug: 'cavamh', 
        image: '/portfolio/cavamh.jpg',
        description: 'Voluntary action organisation website.',
        technologies: ['WordPress', 'Events Management']
    },
    { 
        title: 'Captiva Spa', 
        slug: 'captiva-spa', 
        image: '/portfolio/captiva-spa.jpg',
        description: 'Luxury spa and wellness website.',
        technologies: ['WordPress', 'Booking System']
    },
    { 
        title: 'Green Finance Institute', 
        slug: 'green-finance-institute', 
        image: '/portfolio/green-finance-institute.jpg',
        description: 'Financial institute focused on green initiatives.',
        technologies: ['WordPress', 'Custom Theme']
    },
    { 
        title: 'Expeditions Wales', 
        slug: 'expeditions-wales', 
        image: '/portfolio/expeditions-wales.png',
        description: 'Outdoor adventure company website.',
        technologies: ['WordPress', 'Booking System']
    },
    { 
        title: 'Blagrave Trust', 
        slug: 'blagrave-trust', 
        image: '/portfolio/blagrave-trust.png',
        description: 'Charitable trust website.',
        technologies: ['WordPress', 'Grant Management']
    },
    { 
        title: 'Workshed Wales', 
        slug: 'workshed-wales', 
        image: '/portfolio/workshed-wales.png',
        description: 'Co-working space website.',
        technologies: ['WordPress', 'Membership System']
    },
    { 
        title: 'Powys Mental Health', 
        slug: 'powys-mental-health', 
        image: '/portfolio/powys-mental-health.png',
        description: 'Mental health support services website.',
        technologies: ['WordPress', 'Resource Directory']
    },
    { 
        title: 'Let Right & Sell Right Property', 
        slug: 'let-right-sell-right-property-lettings-and-sales', 
        image: '/portfolio/let-right.png',
        description: 'Property lettings and sales agency website.',
        technologies: ['WordPress', 'Property Listings']
    },
];
