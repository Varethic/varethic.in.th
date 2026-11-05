import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About | Varethic", description: "Varethic builds software and runs it in the cloud.", alternates: { canonical: "/about" } };

const areas = [
    { title: "Software", text: "Web and backend applications that are clean, reliable and easy to maintain." },
    { title: "Cloud", text: "Infrastructure that is deployed, monitored and scaled so services stay available." },
];

export default function About() {
    return (
        <section className="mx-auto grid w-full max-w-6xl flex-1 content-center items-center gap-12 px-6 py-10 md:grid-cols-2 md:gap-16">
            <div>
                <h1 className="text-3xl leading-snug font-semibold tracking-[-0.02em] text-text md:text-4xl">We build the software and run it in the cloud.</h1>
                <p className="mt-4 max-w-md text-text-2">One team from the first line of code to a running service.</p>
                <Link href="/contact" className="group mt-8 inline-flex items-center gap-2 text-meta text-text">
                    <span className="underline underline-offset-4">Get in touch</span>
                    <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
                </Link>
            </div>
            <ul className="group/list flex flex-col gap-3">
                {areas.map(({ title, text }, i) => (
                    <li key={title} className="flex gap-4 rounded-md border border-line-2 p-5 transition-all duration-200 ease-out hover:border-line-3 hover:bg-hover group-hover/list:opacity-50 hover:opacity-100!">
                        <span className="pt-0.5 text-meta text-text-2">0{i + 1}</span>
                        <div>
                            <h2 className="font-semibold text-text">{title}</h2>
                            <p className="mt-1 text-meta text-text-2">{text}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}
