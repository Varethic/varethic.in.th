import ContactForm from "@/components/app/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact | Varethic", description: "Get in touch with Varethic.", alternates: { canonical: "/contact" } };

export default function Contact() {
    const email = process.env.CONTACT_TO_EMAIL;

    return (
        <section className="mx-auto grid w-full max-w-6xl flex-1 content-center items-start gap-12 px-6 py-10 md:grid-cols-2 md:gap-16">
            <h1 className="sr-only">Contact</h1>
            <ContactForm />
            <div className="order-first flex flex-col gap-6 md:order-none">
                <p className="text-text-2">Questions or project inquiries? Send us a message and we will get back to you.</p>
                {email && (
                    <div>
                        <p className="text-meta text-text-2">Email</p>
                        <a href={`mailto:${email}`} className="mt-1 inline-block text-meta text-text underline underline-offset-4 transition-colors duration-200 ease-out hover:text-text-2">{email}</a>
                    </div>
                )}
            </div>
        </section>
    );
}
