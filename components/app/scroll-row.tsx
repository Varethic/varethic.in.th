"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect, useRef } from "react";

export default function ScrollRow({ children }: { children: React.ReactNode }) {
    const wrapper = useRef<HTMLDivElement>(null);
    const content = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!wrapper.current || !content.current) return;
        const lenis = new Lenis({ wrapper: wrapper.current, content: content.current, orientation: "horizontal", gestureOrientation: "both", autoRaf: true, duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 5) });
        return () => lenis.destroy();
    }, []);

    return (
        <div ref={wrapper} className="@container mt-3 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div ref={content} className="flex w-max gap-4">
                {children}
            </div>
        </div>
    );
}
