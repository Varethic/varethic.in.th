import type { Metadata } from "next";

export const metadata: Metadata = { title: "Project | Varethic", description: "Software and cloud projects by Varethic.", alternates: { canonical: "/project" } };

const categories = ["Software", "Cloud"];

export default function Project() {
    return (
        <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-12 px-6 py-10">
            <h1 className="sr-only">Project</h1>
            {categories.map((category) => <h2 key={category} className="h-32 text-xl font-semibold text-text">{category}</h2>)}
        </section>
    );
}
