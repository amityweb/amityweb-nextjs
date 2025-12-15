import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Copyright',
    description: 'Copyright information for Amity Web Solutions website content and materials.',
};

/*----------------------------------------
Copyright Page
----------------------------------------*/
export default function CopyrightPage()
{
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[var(--secondary)] text-white py-16">
                <div className="container">
                    <h1 className="text-4xl font-bold text-white">Copyright</h1>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className="prose prose-lg max-w-4xl">
                        <h2>This Website and Its Content is Copyright the Website Owner</h2>
                        
                        <p>All rights reserved.</p>
                        
                        <p>Any redistribution or reproduction of part or all of the contents in any form is prohibited other than the following:</p>
                        
                        <ul>
                            <li>You may print or download to a local hard disk extracts for your personal and non-commercial use only</li>
                            <li>You may copy the content to individual third parties for their personal use, but only if you acknowledge the website as the source of the material</li>
                        </ul>
                        
                        <p>You may not, except with our express written permission, distribute or commercially exploit the content. Nor may you transmit it or store it in any other website or other form of electronic retrieval system.</p>
                        
                        <p className="mt-8">
                            <Link href="/contact" className="text-[var(--primary)] hover:underline">
                                Contact us
                            </Link> if you have any questions about copyright.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
