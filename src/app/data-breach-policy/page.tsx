import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Data Breach Policy',
    description: 'Amity Web Solutions data breach policy outlining our procedures for handling and reporting data breaches.',
};

/*----------------------------------------
Data Breach Policy Page
----------------------------------------*/
export default function DataBreachPolicyPage()
{
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[var(--secondary)] text-white py-16">
                <div className="container">
                    <h1 className="text-4xl font-bold text-white">Data Breach Policy</h1>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className="prose prose-lg max-w-4xl">
                        <h2>The Data Protection Officer (DPO): Laurence Cope</h2>
                        
                        <h3>Introduction</h3>
                        
                        <p>Amity Web Solutions collects, stores, processes, and shares personal data of its customers and its customers&apos; customers. Every care is taken to protect personal data from accidental or deliberate incidents to avoid a data protection breach. A data breach of personal data may result in harm to individual(s), reputational damage, detrimental effect on service provision, legislative non-compliance and/or financial costs.</p>
                        
                        <p>The UK General Data Protection Regulation (UK GDPR) requires a personal data breach to be reported to the relevant supervisory authority (ICO) within 72 hours of the organisation becoming aware of it, where feasible, but only where it is likely to pose a risk to people&apos;s rights and freedoms. Failure to report a breach when required to do so could result in a significant fine.</p>
                        
                        <h3>Purpose and Scope</h3>
                        
                        <p>This procedure applies to all personal data held by Amity Web Solutions, in both electronic and manual form.</p>
                        
                        <p>The aims of this procedure are:</p>
                        
                        <ul>
                            <li>To provide a framework for responding to data breaches</li>
                            <li>To ensure data breaches are appropriately identified and reported</li>
                            <li>To ensure data breaches are recorded and investigated</li>
                            <li>To ensure all staff are aware of reporting procedures</li>
                        </ul>
                        
                        <h3>What is a Personal Data Breach?</h3>
                        
                        <p>A personal data breach means a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data.</p>
                        
                        <p>Examples of data breaches include:</p>
                        
                        <ul>
                            <li>Loss or theft of data or equipment on which data is stored</li>
                            <li>Unauthorised access to or use of data by a third party or staff member</li>
                            <li>Loss of data due to unforeseen circumstances such as fire or flood</li>
                            <li>Human error (e.g. data sent to wrong recipient)</li>
                            <li>Hacking attacks</li>
                            <li>&apos;Blagging&apos; offences where information is obtained by deception</li>
                        </ul>
                        
                        <h3>Reporting a Breach</h3>
                        
                        <p>All staff must report actual or suspected data breaches to the Data Protection Officer immediately upon discovery. Reports should include:</p>
                        
                        <ul>
                            <li>Date and time of breach (or suspected breach)</li>
                            <li>Details of person reporting the breach</li>
                            <li>Description of the breach</li>
                            <li>Categories and approximate number of individuals concerned</li>
                            <li>Categories and approximate number of records concerned</li>
                        </ul>
                        
                        <h3>Investigation and Risk Assessment</h3>
                        
                        <p>The DPO will investigate all reported breaches and assess the risk to individuals. This assessment will consider:</p>
                        
                        <ul>
                            <li>The type of breach</li>
                            <li>The nature, sensitivity and volume of personal data</li>
                            <li>Ease of identification of individuals</li>
                            <li>Severity of consequences for individuals</li>
                            <li>Special characteristics of the individual (e.g. vulnerable person)</li>
                            <li>Number of affected individuals</li>
                        </ul>
                        
                        <h3>Notification</h3>
                        
                        <p>Where a breach is likely to result in a risk to the rights and freedoms of individuals, we will notify the ICO within 72 hours of becoming aware of the breach.</p>
                        
                        <p>Where a breach is likely to result in a high risk to the rights and freedoms of individuals, we will also notify those individuals without undue delay.</p>
                        
                        <h3>Contact</h3>
                        
                        <p>To report a data breach or for any questions regarding this policy, please <Link href="/contact" className="text-[var(--primary)] hover:underline">contact us</Link>.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
