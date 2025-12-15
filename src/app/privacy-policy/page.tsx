import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Amity Web Solutions privacy policy explaining how we collect, use, and protect your personal data under GDPR.',
};

/*----------------------------------------
Privacy Policy Page
----------------------------------------*/
export default function PrivacyPolicyPage()
{
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[var(--secondary)] text-white py-16">
                <div className="container">
                    <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className="prose prose-lg max-w-4xl">
                        <p>From the 25th May 2018, the General Data Protection Regulations (GDPRs) imposes legal obligations upon EU businesses who collect and process personal data, which is any information relating to an identifiable person. The policy sets out what data we collect, why we need it, how we protect it and your rights.</p>
                        
                        <p>From time to time we may change this policy by updating this page. You should regularly check this page to ensure that you are happy with any changes.</p>

                        <h2>What We Collect</h2>
                        <p><strong>We may collect the following information:</strong></p>
                        <ul>
                            <li>Your Name</li>
                            <li>Your Postal address</li>
                            <li>Your Email address</li>
                            <li>Your Telephone number</li>
                        </ul>

                        <h2>What We Do With the Information We Gather</h2>
                        <p><em>For general enquiries:</em></p>
                        <ul>
                            <li>To be able to respond to your enquiry</li>
                        </ul>
                        
                        <p><em>For customers:</em></p>
                        <ul>
                            <li>To administer your contract with us, including service delivery and invoicing</li>
                            <li>To contact you directly to inform you of important services relating to your website and other services we provide</li>
                        </ul>

                        <h2>Who Is Responsible for This Data?</h2>
                        <p>The Data Controller is responsible for the way in which personal data is processed. For all enquiries to the Data Controller, please use the following details:</p>
                        <p><strong>Data Controller</strong>: Laurence Cope<br /><strong>Contact</strong>: See the <Link href="/contact" className="text-[var(--primary)]">contact page</Link></p>

                        <h2>How We Protect Your Data and Keep It Secure</h2>
                        <p>We are committed to doing all that we can to keep your data secure. We have set up systems and processes to prevent unauthorised access or disclosure of your data. See our <Link href="/legal/security-policy" className="text-[var(--primary)]">security policy</Link> for more information.</p>

                        <h2>Your Rights</h2>
                        <p>You have the right to request:</p>
                        <ul>
                            <li>Information about how your personal data is processed</li>
                            <li>A copy of that personal data</li>
                            <li>That anything inaccurate in your personal data is corrected immediately</li>
                        </ul>
                        
                        <p>You can also:</p>
                        <ul>
                            <li>Raise an objection about how your personal data is processed</li>
                            <li>Request that your personal data is erased if there is no longer a justification for it</li>
                            <li>Ask that the processing of your personal data is restricted in certain circumstances</li>
                        </ul>
                        
                        <p>If you have any of these requests, get in contact with our Data Protection Officer via the <Link href="/contact" className="text-[var(--primary)]">contact us</Link> page, clearly stating what your request is for.</p>

                        <h2>Sharing Your Information</h2>
                        <p>We will not share your information with any third parties for the purposes of direct marketing, nor for any reason unrelated to fulfil the nature of the enquiry or contractual service we provide. If we need to share your data with third parties in order to deal with your enquiry or service we provide, we will contact you for consent.</p>
                        
                        <p>We will have contracts in place with any data processors. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will not share your personal information with any organisation apart from us. They will hold it securely and retain it for the period we instruct.</p>
                        
                        <p>In some circumstances we are legally obliged to share information. For example under a court order or where we cooperate with other European supervisory authorities in handling complaints or investigations.</p>

                        <h2>How Long We Keep Your Data</h2>
                        <p>We will only retain your personal data for as long as:</p>
                        <ul>
                            <li>It is needed for the purposes set out in this document</li>
                            <li>The law requires us to</li>
                        </ul>
                        <p>In general, this means that we will only hold your personal data for a minimum of 1 year and a maximum of 7 years.</p>

                        <h2>Links to Other Websites</h2>
                        <p>This site contains links to other websites.</p>
                        <p>This privacy policy only applies to Amity Web Solutions Ltd, and doesn't cover other websites or organisations. Third party websites we link to should have their own terms and conditions and privacy policies.</p>

                        <h2>Contact Us or Make a Complaint</h2>
                        <p>You can contact us via our <Link href="/contact" className="text-[var(--primary)]">contact us page</Link></p>
                        <p>You can make a complaint using our <Link href="/legal/customer-complaints-process" className="text-[var(--primary)]">complaints process</Link></p>
                    </div>
                </div>
            </section>
        </>
    );
}
