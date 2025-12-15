import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Disclaimer',
    description: 'Amity Web Solutions website disclaimer.',
};

export default function DisclaimerPage()
{
    return (
        <>
            <section className="bg-[var(--secondary)] text-white py-16">
                <div className="container">
                    <h1 className="text-4xl font-bold text-white">Disclaimer</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="prose prose-lg max-w-4xl">
                        <h2>Information on This Website Is for General Information Purposes Only</h2>
                        <p>Although we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.</p>
                        
                        <p>In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.</p>
                        
                        <p>Through this website you are able to link to other websites which are not under our control. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
                        
                        <p>Every effort is made to keep the website up and running smoothly. However, we take no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
