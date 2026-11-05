import Link from "next/link";

const links = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/contact", label: "Contact" },
];

export default async function Footer() {
    "use cache";
    return (
        <footer className="mx-auto flex w-full max-w-6xl flex-col gap-4 border-t border-line px-6 py-6 text-meta text-text-2 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Varethic.in.th. All rights reserved.</p>
            <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
                {links.map(({ href, label }) => <Link key={href} href={href} className="transition-colors duration-200 ease-out hover:text-text">{label}</Link>)}
            </nav>
        </footer>
    );
}
