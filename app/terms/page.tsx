import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Terms of Service | Varethic", description: "Terms for using the Varethic website.", alternates: { canonical: "/terms" } };

const sections = [
    { title: "Acceptance of terms", text: "By accessing or using this website you agree to these terms. If you do not agree, please do not use the website." },
    { title: "Use of the website", text: "You may use this website for lawful purposes only. You must not disrupt it, attempt unauthorized access, scrape it at scale, or use it to harm others." },
    { title: "Intellectual property", text: "The content, design, logo and branding on this website belong to Varethic unless stated otherwise. You may not copy or reuse them without written permission." },
    { title: "Information only", text: "This website describes our software and cloud work for general information. It is not an offer or contract. Services are provided under a separate written agreement." },
    { title: "No warranty", text: "The website is provided as is and as available. We do not guarantee that it will be uninterrupted, error-free or always up to date." },
    { title: "Limitation of liability", text: "To the extent permitted by law, Varethic is not liable for any loss arising from your use of, or inability to use, this website." },
    { title: "External links", text: "This website may link to other sites. We are not responsible for their content or practices." },
    { title: "Privacy", text: "How we handle personal data is described in our Privacy Policy, which forms part of these terms." },
    { title: "Governing law", text: "These terms are governed by the laws of Thailand, and the courts of Thailand have jurisdiction over any dispute." },
    { title: "Changes to these terms", text: "We may update these terms from time to time. Continued use of the website means you accept the updated terms." },
];

export default function Terms() {
    return (
        <section className="mx-auto flex w-full max-w-6xl px-6 flex-1 flex-col justify-center gap-6 py-6">
            <div>
                <h1 className="text-3xl font-semibold tracking-[-0.02em] text-text md:text-4xl">Terms of Service</h1>
                <p className="mt-2 text-meta text-text-2">Last updated: November 2026</p>
            </div>
            <div className="grid gap-x-10 md:grid-cols-2">
                {sections.map(({ title, text }) => (
                    <div key={title} className="border-t border-line py-4">
                        <h2 className="font-semibold text-text">{title}</h2>
                        <p className="mt-2 text-meta text-text-2">{text}</p>
                    </div>
                ))}
            </div>
            <p className="text-meta text-text-2">Questions about these terms? See the <Link href="/contact" className="text-text underline underline-offset-4">Contact page</Link>.</p>
        </section>
    );
}
