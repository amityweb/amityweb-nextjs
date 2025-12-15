import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Green Policy',
    description: 'Amity Web Solutions environmental policy and commitment to sustainable business practices.',
};

/*----------------------------------------
Green Policy Page
----------------------------------------*/
export default function GreenPolicyPage()
{
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[var(--secondary)] text-white py-16">
                <div className="container">
                    <h1 className="text-4xl font-bold text-white">Green Policy</h1>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className="prose prose-lg max-w-4xl">
                        <h2>At Amity Web Solutions We Are Trying to Do Our Bit for the Environment</h2>
                        
                        <p>We offer the top level of service and quality customers expect. Whenever possible we follow these simple guidelines and encourage our customers to do the same:</p>
                        
                        <ul>
                            <li>Electronic communication and invoicing where possible</li>
                            <li>Printing documents only when absolutely necessary</li>
                            <li>Electronic bank transfer of payments</li>
                            <li>Recycling all recyclable material</li>
                            <li>Sourcing equipment and furniture from local, sustainable sources where possible</li>
                            <li>Using energy-efficient equipment and lighting</li>
                            <li>Encouraging remote working to reduce commuting</li>
                            <li>Using green hosting providers where available</li>
                        </ul>
                        
                        <p>We continuously look for ways to reduce our environmental impact and welcome suggestions from our customers and staff.</p>
                        
                        <p className="mt-8">
                            <Link href="/contact" className="text-[var(--primary)] hover:underline">
                                Contact us
                            </Link> if you have any questions about our green policy.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
