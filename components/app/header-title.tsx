"use client";

import { usePathname } from "next/navigation";

const titles: Record<string, string> = { "/about": "About", "/project": "Project", "/contact": "Contact", "/privacy": "Privacy Policy", "/terms": "Terms of Service" };

export default function HeaderTitle() {
    const title = titles[usePathname()];
    if (!title) return null;
    return <span className="pointer-events-none absolute hidden md:block inset-x-0 text-center text-nav font-semibold text-text">{title}</span>;
}
