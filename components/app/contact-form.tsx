"use client";

import { sendContact, type ContactState } from "@/app/contact/actions";
import Script from "next/script";
import { useActionState, useEffect, useRef, useState } from "react";

declare global {
    interface Window {
        turnstile?: { reset: () => void };
        onTurnstileDone?: () => void;
        onTurnstileLost?: () => void;
    }
}

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const field = "w-full rounded-md border border-line-2 bg-transparent px-3 py-2.5 text-meta text-text outline-none transition-colors duration-200 ease-out placeholder:text-text-2/60 focus:border-line-3";

export default function ContactForm() {
    const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, { ok: false, message: "" });

    const form = useRef<HTMLFormElement>(null);
    const [verified, setVerified] = useState(!siteKey);

    useEffect(() => {
        window.onTurnstileDone = () => setVerified(true);
        window.onTurnstileLost = () => setVerified(false);
    }, []);

    useEffect(() => {
        if (state.ok) form.current?.reset();
        // A Turnstile token is single use, so require a fresh check after every submit
        if (state.message && siteKey) {
            setVerified(false);
            window.turnstile?.reset();
        }
    }, [state]);

    return (
        <form ref={form} action={action} className="flex flex-col gap-3">
            <input name="name" placeholder="Name" aria-label="Name" required maxLength={100} autoComplete="name" className={field} />
            <input name="email" type="email" placeholder="Email" aria-label="Email" required maxLength={200} autoComplete="email" className={field} />
            <textarea name="message" placeholder="Message" aria-label="Message" required maxLength={5000} rows={5} className={`${field} resize-none`} />
            <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
            {siteKey && (
                <>
                    <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
                    <div className={`cf-turnstile${verified ? " hidden" : ""}`}data-sitekey={siteKey} data-theme="dark" data-size="flexible" data-callback="onTurnstileDone" data-expired-callback="onTurnstileLost" data-error-callback="onTurnstileLost" />
                </>
            )}
            {verified && <button type="submit" disabled={pending} className="flex h-10 w-full items-center justify-center rounded-md border border-line-3 bg-hover text-meta font-medium text-text transition-colors duration-200 ease-out hover:bg-line disabled:opacity-50">{pending ? "Sending..." : "Send message"}</button>}
            {state.message && <p role="status" className={`text-meta ${state.ok ? "text-text" : "text-text-2"}`}>{state.message}</p>}
        </form>
    );
}
