import Footer from "@/components/app/footer";
import Header from "@/components/app/header";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ibm-mono",
    display: "swap",
});

const description = "We build the software and run it in the cloud, so you can focus on your business.";

export const metadata: Metadata = {
    metadataBase: new URL("https://varethic.in.th"),
    title: "Varethic",
    description,
    applicationName: "Varethic",
    // No og/twitter title or url here: pages inherit this object whole, so they would all share the home values
    openGraph: { type: "website", siteName: "Varethic" },
    twitter: { card: "summary_large_image" },
    robots: { index: true, follow: true },
};

const jsonLd = { "@context": "https://schema.org", "@type": "Organization", name: "Varethic", url: "https://varethic.in.th", logo: "https://varethic.in.th/assets/varethic.svg" };

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${ibmMono.variable} antialiased`}>
            <body className="flex min-h-screen flex-col">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
                <Header />
                <main className="flex flex-1 flex-col">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
