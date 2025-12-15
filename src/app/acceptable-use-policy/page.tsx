import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Acceptable Use Policy',
    description: 'Amity Web Solutions managed hosting acceptable use policy.',
};

/*----------------------------------------
Acceptable Use Policy Page
----------------------------------------*/
export default function AcceptableUsePolicyPage()
{
    return (
        <>
            <section className="bg-[var(--secondary)] text-white py-16">
                <div className="container">
                    <h1 className="text-4xl font-bold text-white">Acceptable Use Policy</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="prose prose-lg max-w-4xl">
                        <h2>Amity Web Solutions Ltd Managed Hosting Acceptable Use Policy</h2>
                        <p>This document contains information about what type of behaviour is and is not allowed on the Amity Web Solutions Ltd Network. If you have any questions, please contact us at <a href="mailto:info@amityweb.co.uk" className="text-[var(--primary)]">info@amityweb.co.uk</a>.</p>

                        <h2>Background</h2>
                        <p>From time to time Amity Web Solutions Ltd may impose reasonable rules and regulations regarding the use of its services. Such rules and regulations are called Acceptable Use Policies (AUPs) and are posted below.</p>
                        <p>The AUPs are not exhaustive and Amity Web Solutions Ltd reserves the right to modify the AUPs at any time, effective upon either the posting of the modified AUPs to this page or notification of the modified AUPs. By registering for and using the services, and thereby accepting the terms and conditions of the Master Services Agreement or its equivalent, you agree to abide by the AUPs as modified from time to time.</p>

                        <h2>System and Network Security</h2>
                        <p>Violations of system or network security may result in civil or criminal liability. Amity Web Solutions Ltd will investigate occurrences which may involve such violations and may involve, and cooperate with, law enforcement authorities in prosecuting users who are involved in such violations.</p>

                        <h2>Password Protection</h2>
                        <p>A user shall select and use passwords that are secure and hard to guess. A user shall not share or give out passwords, nor shall a user leave passwords in places that might be seen by others. A user shall take appropriate security precautions to prevent others from gaining access to the user's computer or to any of the user's passwords.</p>

                        <h2>Lawful Purpose</h2>
                        <p>Services provided by Amity Web Solutions Ltd may only be used for lawful purposes. The transmission, distribution, or storage of any information, data or material in violation of British or European Union law is prohibited. This includes, but is not limited to, material protected by copyright, trademark, trade secret or other intellectual property rights used without authorisation, or material that violates export control laws.</p>

                        <h2>Unsolicited Commercial Email/Unsolicited Bulk Email (UCE/UBE)</h2>
                        <p>Spam, as most commonly defined, is unsolicited commercial email (UCE). Sending UCE is strictly prohibited. Additionally, sending large amounts of unsolicited email is prohibited regardless of its commercial nature.</p>

                        <h2>Suspension</h2>
                        <p>Amity Web Solutions Ltd may suspend or limit a user's service, without notice if necessary, if that user has violated this AUP or is otherwise using the services in a manner that may expose Amity Web Solutions Ltd or others to harm.</p>

                        <h2>Cancellation</h2>
                        <p>Amity Web Solutions Ltd may immediately cancel a user's service, without notice if necessary, if that user's conduct becomes so severe as to warrant cancellation rather than suspension.</p>

                        <h2>Indemnification</h2>
                        <p>User agrees to indemnify, defend, and hold harmless Amity Web Solutions Ltd and its agents and employees against any and all claims of any kind resulting from user's violation of this AUP, and user agrees to pay any judgment or reasonable settlement arising from any such claim.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
