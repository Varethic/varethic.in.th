import type { Metadata } from "next";

export const metadata: Metadata = { title: "Varethic", description: "We build the software and run it in the cloud, so you can focus on your business.", alternates: { canonical: "/" } };

export default function Home() {
    return (
        <section className="flex flex-1 flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-semibold text-text">Varethic</h1>
            <p className="mt-4 max-w-xl text-text-2">We build the software and run it in the cloud, so you can focus on your business.</p>
        </section>
    );
}
