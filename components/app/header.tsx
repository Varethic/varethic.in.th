import HeaderTitle from "@/components/app/header-title";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="relative z-3 mx-auto flex h-17 w-full max-w-6xl px-6 items-center gap-4 border-b border-line">
            <Link href="/" aria-label="Varethic home" className="flex shrink-0 items-center gap-0.5 py-2.5">
                <Image src="/assets/varethic.svg" alt="" width={128} height={128} className="block h-9 w-auto" priority unoptimized />
                <span className="text-nav font-semibold tracking-[-0.01em] text-text">Varethic</span>
            </Link>

            <HeaderTitle />

            <nav className="flex ml-auto gap-1" aria-label="Main navigation">
                <Link href="/" lang="en" aria-current="page" className="flex h-8.5 items-center px-2.5 text-nav text-text-2 transition-colors duration-200 ease-out hover:text-text">
                    Home
                </Link>
                <Link href="/about" lang="en" aria-current="page" className="flex h-8.5 items-center px-2.5 text-nav text-text-2 transition-colors duration-200 ease-out hover:text-text">
                    About
                </Link>
                <Link href="/project" lang="en" aria-current="page" className="flex h-8.5 items-center px-2.5 text-nav text-text-2 transition-colors duration-200 ease-out hover:text-text">
                    Project
                </Link>
            </nav>
        </header>
    );
}
