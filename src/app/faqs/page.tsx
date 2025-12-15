import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'FAQs - Frequently Asked Questions',
    description: 'Frequently asked questions about Amity Web Solutions services including hosting, support, web design and development.',
};

/*----------------------------------------
FAQs interface
----------------------------------------*/
interface FaqItem
{
    question: string;
    answer: string;
}

interface FaqSection
{
    title: string;
    faqs: FaqItem[];
}

/*----------------------------------------
FAQ Data
----------------------------------------*/
const faqSections: FaqSection[] = [
    {
        title: 'Hosting & Support',
        faqs: [
            {
                question: 'What is your hosting and support service?',
                answer: 'Our standard hosting and support plan includes superior, fast, reliable, secure hosting with email accounts, 30 minutes support time per month for help with CMS, general queries, small content changes, and email support. WordPress sites receive automatic weekly updates for security. Development work (enhancements/extra features) is quoted separately.'
            },
            {
                question: 'What does support cover?',
                answer: 'Support covers help with your content management system, general email/phone discussions, small content changes (updating images, phone numbers, etc.), and help with email accounts. Development work such as new features or major changes is not included but can be quoted.'
            },
            {
                question: 'How do I contact support?',
                answer: 'You can contact our support team via email at info@amityweb.co.uk or by phone on 029 2088 6582 during office hours (Monday-Friday, 9am-5pm).'
            },
            {
                question: 'What is your uptime guarantee?',
                answer: 'We aim for 99.9% uptime on all our hosting services. Our servers are monitored 24/7 and we use enterprise-grade infrastructure to ensure reliability.'
            }
        ]
    },
    {
        title: 'Web Design & Development',
        faqs: [
            {
                question: 'How long does it take to build a website?',
                answer: 'Timescales vary depending on the complexity of your project. A simple brochure website might take 4-6 weeks, while a complex e-commerce site or web application could take 3-6 months. We\'ll provide a realistic timeline during our initial consultation.'
            },
            {
                question: 'Do you provide website content?',
                answer: 'We can help with content strategy and copywriting, though this is typically quoted separately. Many clients provide their own content. We can advise on what content you\'ll need and the best format to supply it.'
            },
            {
                question: 'Will my website be mobile-friendly?',
                answer: 'Absolutely. All websites we build are fully responsive and optimised for mobile, tablet, and desktop devices. Mobile-friendliness is also important for SEO.'
            },
            {
                question: 'Can I update the website myself?',
                answer: 'Yes! We build most websites using WordPress or similar content management systems that allow you to easily update text, images, and other content. We provide training and documentation to help you get started.'
            },
            {
                question: 'Do you offer e-commerce solutions?',
                answer: 'Yes, we build e-commerce websites using WooCommerce (for WordPress) and other platforms. We can integrate payment gateways, shipping calculators, and inventory management systems.'
            }
        ]
    },
    {
        title: 'Pricing & Payment',
        faqs: [
            {
                question: 'How much does a website cost?',
                answer: 'Costs vary depending on your requirements. We provide detailed quotes after understanding your needs. As a guide, a simple brochure website starts from around £2,000, while more complex projects are priced accordingly.'
            },
            {
                question: 'What are your payment terms?',
                answer: 'For new projects, we typically require a 50% deposit to begin work, with the balance due on completion. Hosting and support is billed monthly or annually in advance.'
            },
            {
                question: 'Do you offer payment plans?',
                answer: 'For larger projects, we can arrange milestone-based payments. Please discuss your requirements with us and we\'ll find a solution that works for you.'
            }
        ]
    },
    {
        title: 'General',
        faqs: [
            {
                question: 'Where are you based?',
                answer: 'We\'re based in Caerphilly, South Wales. We work with clients across Wales, the UK, and internationally. Most of our communication is via phone, email, and video calls, though we\'re happy to meet in person when appropriate.'
            },
            {
                question: 'Do you work with businesses outside Wales?',
                answer: 'Yes! While we\'re proud of our Welsh roots, we work with clients throughout the UK and beyond. Modern technology makes remote collaboration easy and effective.'
            },
            {
                question: 'What CMS do you recommend?',
                answer: 'We primarily work with WordPress due to its flexibility, extensive plugin ecosystem, and ease of use. For specific requirements, we may recommend other solutions such as Craft CMS or custom-built systems.'
            }
        ]
    }
];

/*----------------------------------------
FAQs Page
----------------------------------------*/
export default function FAQsPage()
{
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[var(--secondary)] text-white py-16">
                <div className="container">
                    <h1 className="text-4xl font-bold text-white">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-300 mt-4">
                        Find answers to common questions about our services
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <p className="text-lg text-[var(--muted)] mb-12 max-w-3xl">
                        This section is intended to provide you with answers to common questions as well as general information about the company. If you can&apos;t find what you require, don&apos;t hesitate to <Link href="/contact" className="text-[var(--primary)] hover:underline">drop us a line</Link>.
                    </p>
                    
                    <div className="space-y-12 faq-section">
                        {faqSections.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                                <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                                <div className="space-y-4">
                                    {section.faqs.map((faq, faqIndex) => (
                                        <details 
                                            key={faqIndex}
                                            className="group bg-[var(--surface)] rounded-lg"
                                        >
                                            <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold hover:text-[var(--primary)] transition-colors">
                                                {faq.question}
                                                <svg 
                                                    className="w-5 h-5 transition-transform group-open:rotate-180" 
                                                    fill="none" 
                                                    stroke="currentColor" 
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </summary>
                                            <div className="px-6 pb-6 text-[var(--muted)]">
                                                {faq.answer}
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-12 p-8 bg-[var(--surface)] rounded-xl text-center">
                        <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
                        <p className="text-[var(--muted)] mb-6">
                            We&apos;re here to help. Get in touch and we&apos;ll be happy to assist.
                        </p>
                        <Link href="/contact" className="btn-primary">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
