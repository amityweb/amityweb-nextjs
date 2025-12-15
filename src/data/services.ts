/*----------------------------------------
Services data - Shared across home, services listing, and individual pages
----------------------------------------*/

export interface Service
{
    slug: string;
    title: string;
    shortTitle: string;
    description: string;
    fullDescription: string;
    features: string[];
    icon: string;
}

export const services: Service[] = [
    {
        slug: 'web-design',
        title: 'Web Design',
        shortTitle: 'Design',
        description: 'User-centric UI/UX design that captures your brand identity and converts visitors into customers.',
        fullDescription: 'Great design is more than just aesthetics – it\'s about creating intuitive, engaging experiences that guide visitors towards action. Our design process begins with understanding your brand, your audience, and your goals.',
        features: [
            'Brand-focused UI/UX design',
            'Mobile-first responsive layouts',
            'Wireframing and prototyping',
            'User journey mapping',
            'Conversion-optimised design',
            'Accessibility compliance'
        ],
        icon: 'design'
    },
    {
        slug: 'web-development',
        title: 'Web Development',
        shortTitle: 'Build',
        description: 'Robust front-end and back-end development using WordPress, Laravel, Craft CMS and more.',
        fullDescription: 'We hand-code every website we build, ensuring clean, efficient code that performs well and is easy to maintain. Whether you need a simple brochure site or a complex web application, we have the expertise to deliver.',
        features: [
            'WordPress & WooCommerce',
            'Laravel & PHP development',
            'Craft CMS websites',
            'Custom web applications',
            'API integrations',
            'E-commerce solutions'
        ],
        icon: 'build'
    },
    {
        slug: 'web-hosting',
        title: 'Web Hosting',
        shortTitle: 'Host',
        description: 'Secure, high-performance hosting solutions ensuring your site is always online and fast.',
        fullDescription: 'Your website is only as good as its hosting. We provide enterprise-grade hosting on our own managed servers, giving you the speed, security, and reliability your business deserves.',
        features: [
            'High-performance SSD servers',
            'Daily automated backups',
            'SSL certificates included',
            'Email hosting',
            '99.9% uptime guarantee',
            'UK-based data centres'
        ],
        icon: 'host'
    },
    {
        slug: 'website-support',
        title: 'Website Support',
        shortTitle: 'Support',
        description: 'Ongoing technical support to help you navigate digital challenges as your business grows.',
        fullDescription: 'Technology doesn\'t stand still, and neither do we. Our support packages ensure your website stays secure, up-to-date, and performing at its best. Think of us as your outsourced web team.',
        features: [
            'Priority email & phone support',
            'Content updates',
            'Technical troubleshooting',
            'Training and guidance',
            'Monthly reporting',
            'Emergency response'
        ],
        icon: 'support'
    },
    {
        slug: 'website-maintenance',
        title: 'Website Maintenance',
        shortTitle: 'Maintain',
        description: 'Regular updates, security patches, and performance optimisation to keep your site healthy.',
        fullDescription: 'A website requires regular maintenance to stay secure and perform well. We handle all the technical updates so you can focus on running your business, with peace of mind that your site is in safe hands.',
        features: [
            'Regular security updates',
            'Plugin/module updates',
            'Performance monitoring',
            'Security scanning',
            'Database optimisation',
            'Uptime monitoring'
        ],
        icon: 'maintain'
    },
    {
        slug: 'bug-fixing',
        title: 'Bug Fixing & Repairs',
        shortTitle: 'Fix Bugs',
        description: 'Rapid troubleshooting and bug fixing to resolve issues and ensure smooth operation.',
        fullDescription: 'Website problems can cost you customers and revenue. Whether it\'s a broken feature, a security vulnerability, or a mysterious error, we diagnose and fix issues quickly to get you back on track.',
        features: [
            'Debugging complex issues',
            'Performance optimisation',
            'Security vulnerability fixes',
            'Cross-browser compatibility',
            'Database repair',
            'Migration assistance'
        ],
        icon: 'bugs'
    }
];
