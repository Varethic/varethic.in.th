import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Privacy Policy | Varethic", description: "How Varethic collects, uses and protects your data.", alternates: { canonical: "/privacy" } };

const sections = [
    { title: "Who we are", text: "Varethic (varethic.in.th) is the data controller for this website and handles personal data in line with Thailand's Personal Data Protection Act B.E. 2562 (PDPA)." },
    { title: "Information we collect", text: "This website has no accounts or tracking. We collect personal data only when you send us a message. Our hosting may keep standard technical logs, such as IP address and requested pages, for security and reliability." },
    { title: "When you contact us", text: "If you use the contact form or email us, we receive the details you send, such as your name, email address and message. Form messages are delivered to us by an email service provider." },
    { title: "Why we use it", text: "We use what you send us only to reply to you and to provide the services you ask about, based on your consent or to take steps at your request. We do not use it for marketing without your consent." },
    { title: "Cookies and analytics", text: "This website does not use cookies for tracking, advertising or analytics. If that changes, we will update this policy and ask for consent where required." },
    { title: "Sharing and transfers", text: "We do not sell your personal data. We share it only with providers that help us operate the website, or when the law requires it. If data is processed outside Thailand, we ensure appropriate protection." },
    { title: "Retention and security", text: "We keep your messages only as long as needed to handle your request, then delete them, and protect them with reasonable technical and organizational measures." },
    { title: "Your rights", text: "Under the PDPA you may access, correct, delete, object to or restrict the use of your data, withdraw consent, and request a copy of it. You may also complain to the Personal Data Protection Committee." },
    { title: "Children", text: "This website is not directed at children, and we do not knowingly collect their personal data." },
];

export default function Privacy() {
    return (
        <section className="mx-auto flex w-full max-w-6xl px-6 flex-1 flex-col justify-center gap-6 py-6">
            <div>
                <h1 className="text-3xl font-semibold tracking-[-0.02em] text-text md:text-4xl">Privacy Policy</h1>
                <p className="mt-2 text-meta text-text-2">Last updated: November 2026</p>
            </div>
            <div className="grid gap-x-10 md:grid-cols-2">
                {sections.map(({ title, text }) => (
                    <div key={title} className="border-t border-line py-4">
                        <h2 className="font-semibold text-text">{title}</h2>
                        <p className="mt-2 text-meta text-text-2">{text}</p>
                    </div>
                ))}
                <div className="border-t border-line py-4">
                    <h2 className="font-semibold text-text">Contact</h2>
                    <p className="mt-2 text-meta text-text-2">Questions or requests about your data? See the <Link href="/contact" className="text-text underline underline-offset-4">Contact page</Link>.</p>
                </div>
            </div>
        </section>
    );
}
