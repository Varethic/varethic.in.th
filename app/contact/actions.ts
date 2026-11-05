"use server";

import { after } from "next/server";

export type ContactState = { ok: boolean; message: string };

export async function sendContact(_: ContactState, formData: FormData): Promise<ContactState> {
    if (formData.get("website")) return { ok: true, message: "Thanks, your message has been sent." };

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    if (!name || !message || !/^\S+@\S+\.\S+$/.test(email)) return { ok: false, message: "Please fill in your name, a valid email and a message." };
    if (name.length > 100 || email.length > 200 || message.length > 5000) return { ok: false, message: "Your message is too long." };

    const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, TURNSTILE_SECRET_KEY } = process.env;
    if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) return { ok: false, message: "Messages cannot be sent right now. Please email us directly." };

    // Bot check: enforced whenever the Turnstile secret is configured
    if (TURNSTILE_SECRET_KEY) {
        const token = String(formData.get("cf-turnstile-response") ?? "");
        const check = token && await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: new URLSearchParams({ secret: TURNSTILE_SECRET_KEY, response: token }) }).then((r) => r.json()).catch(() => null);
        if (!check?.success) return { ok: false, message: "Verification failed. Please try again." };
    }

    const from = CONTACT_FROM_EMAIL ?? "Varethic <onboarding@resend.dev>";
    const send = (body: object) => fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, ...body }) });

    const res = await send({ to: CONTACT_TO_EMAIL, reply_to: email, subject: `New message from ${name}`, text: `From: ${name} <${email}>\n\n${message}` });
    if (!res.ok) return { ok: false, message: "Something went wrong. Please try again or email us directly." };

    // Auto-reply is best effort: the message is already delivered, so a failure here must not fail the form
    after(() => send({ to: email, reply_to: CONTACT_TO_EMAIL, subject: "Thanks for contacting Varethic", text: `Hi ${name},\n\nThank you for contacting Varethic. We have received your message and will get back to you as soon as possible.\n\nThis is an automated message. If you would like to add anything, just reply to this email or write to ${CONTACT_TO_EMAIL}.\n\nVarethic\nhttps://varethic.in.th` }).catch(() => {}));
    return { ok: true, message: "Thanks, your message has been sent." };
}
