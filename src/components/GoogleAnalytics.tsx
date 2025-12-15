'use client';

import Script from 'next/script';

/*----------------------------------------
Google Analytics Component
Implements GA4 tracking with gtag.js
----------------------------------------*/
export default function GoogleAnalytics()
{
    const GA_ID = 'G-ZVSWXP635W';

    return (
        <>
            {/* Load Google Analytics script */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            
            {/* Initialize GA4 */}
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}');
                `}
            </Script>
        </>
    );
}
