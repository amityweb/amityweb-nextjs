import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Security Policy',
    description: 'Amity Web Solutions security policy for servers and websites.',
};

export default function SecurityPolicyPage()
{
    return (
        <>
            <section className="bg-[var(--secondary)] text-white py-16">
                <div className="container">
                    <h1 className="text-4xl font-bold text-white">Security Policy</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="prose prose-lg max-w-4xl">
                        <p>Amity Web Solutions takes security seriously which is why we have the following policy in place:</p>

                        <h2>Servers</h2>
                        <ul>
                            <li>We frequently update all our web hosting servers to use the latest software, which would include security and bug patch releases</li>
                            <li>Serious security threats would be patched on the servers as soon as possible</li>
                            <li>We have an industry leading firewall to protect the servers, in particular:
                                <ul>
                                    <li>DDoS Attacks</li>
                                    <li>Block vulnerable scripts in CMS</li>
                                    <li>Monitor suspicious activity (several password failures for example) and block IP addresses</li>
                                    <li>Closed all ports except from approved IP addresses</li>
                                </ul>
                            </li>
                            <li>No public facing control panels</li>
                            <li>Secure password policy, at least 8 characters of random uppercase and lowercase letters, numbers and symbols</li>
                            <li>Virus and malicious file scanner continuously scanning the server for malicious files with immediate quarantine</li>
                            <li>Connection to servers from our approved IP addresses is via Secure Shell Access methods only (SSH). We do not use insecure FTP, but secure SFTP.</li>
                        </ul>

                        <h2>Websites</h2>
                        <ul>
                            <li>Secure password policy for logins</li>
                            <li>Systems kept up to date where feasible</li>
                            <li>Reputable content management systems and plugins that have in-built security protection</li>
                            <li>Hard to guess admin URLs</li>
                            <li>SSLs as standard</li>
                            <li>We have strict guidelines, standards and a go live checklist we follow to build websites to a high standard and to ensure security is met</li>
                        </ul>

                        <h3>WordPress in Particular Additionally Has:</h3>
                        <ul>
                            <li>Security and firewall plugins to monitor and protect it from malicious access
                                <ul>
                                    <li>Includes virus and malicious file scanner continuously scanning the server for malicious files with immediate quarantine</li>
                                </ul>
                            </li>
                            <li>Automatic and frequent updates to WordPress core, themes and plugins</li>
                            <li>Only reputable themes and plugins are used</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
