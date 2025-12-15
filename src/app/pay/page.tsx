import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Payments',
    description: 'Payment information for Amity Web Solutions customers.',
    robots: 'noindex, nofollow',
};

/*----------------------------------------
Pay Page - Payment redirect information
----------------------------------------*/
export default function PayPage()
{
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[var(--secondary)] text-white py-16">
                <div className="container">
                    <h1 className="text-4xl font-bold text-white">Payments</h1>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-[var(--surface)] rounded-2xl p-8 md:p-12">
                            <svg className="w-16 h-16 mx-auto mb-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            
                            <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
                            
                            <p className="text-lg text-[var(--muted)] mb-6">
                                We no longer accept online payment on our own website.
                            </p>
                            
                            <p className="text-[var(--muted)] mb-8">
                                If you clicked the Pay link in an invoice received, please check the invoice 
                                email (not the PDF) as it should include an up-to-date payment link on FreeAgent.
                            </p>
                            
                            <p className="text-[var(--muted)]">
                                Thank you for your understanding.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
