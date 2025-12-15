import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy',
    description: 'Information about the cookies used on the Amity Web Solutions website.',
};

/*----------------------------------------
Cookie Policy Page
----------------------------------------*/
export default function CookiePolicyPage()
{
    return (
        <>
            <section className="bg-[var(--secondary)] text-white py-16">
                <div className="container">
                    <h1 className="text-4xl font-bold text-white">Cookie Policy</h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="prose prose-lg max-w-4xl">
                        <h2>What Are Cookies</h2>
                        <p>A cookie is a small file which is placed on your computer's hard drive to help store your user preferences, login and session states, analyse web traffic or let you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</p>
                        
                        <p>Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.</p>
                        
                        <p>Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>

                        <h2>Cookies Used on This Site</h2>
                        <p>The following cookies may be set:</p>
                        
                        <h3>Essential Cookies</h3>
                        <p>These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
                        
                        <h3>Analytics Cookies</h3>
                        <p><strong>Google Analytics (_ga, _gid, _gat):</strong> We use Google Analytics to monitor and report on our website usage such as the number of visitors to the site, search phrases used to find us, pages visited on the site and time spent on the site. The statistics gathered are a necessary requirement in order for us to provide and improve our value added products and services and to stay competitive. The cookies do not collect information that identifies a visitor.</p>
                        
                        <h2>Managing Cookies</h2>
                        <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
