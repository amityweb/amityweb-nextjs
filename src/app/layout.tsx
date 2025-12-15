import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Amity Web Solutions | Web Design & Development in Caerphilly",
        template: "%s | Amity Web Solutions"
    },
    description: "Expert web design, development, hosting and support since 2005. Over 400 websites built. WordPress, WooCommerce, Laravel, Craft CMS specialists based in Caerphilly, South Wales.",
    keywords: ["web design", "web development", "Caerphilly", "Cardiff", "South Wales", "WordPress", "WooCommerce", "hosting"],
    authors: [{ name: "Amity Web Solutions" }],
    openGraph: {
        type: "website",
        locale: "en_GB",
        url: "https://www.amityweb.co.uk",
        siteName: "Amity Web Solutions",
        title: "Amity Web Solutions | Web Design & Development",
        description: "Expert web design, development, hosting and support since 2005.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>)
{
    return (
        <html lang="en">
            <GoogleAnalytics />
            <body className={`${inter.variable} antialiased`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
