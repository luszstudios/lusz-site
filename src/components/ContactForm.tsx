"use client";

import { useState } from "react";
import { site } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border-0 border-b-2 border-charcoal bg-transparent px-0 py-3 text-xl placeholder:text-charcoal/60 focus:border-blue focus:ring-0";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col gap-4">
        <p className="display text-5xl text-blue md:text-6xl">got it.</p>
        <p className="text-xl">We read everything ourselves and reply within a few days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-7">
      <div className="grid gap-7 md:grid-cols-2">
        <label className="flex flex-col gap-1 text-[15px] font-semibold">
          your name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="flex flex-col gap-1 text-[15px] font-semibold">
          email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <div className="grid gap-7 md:grid-cols-2">
        <label className="flex flex-col gap-1 text-[15px] font-semibold">
          brand or company
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="flex flex-col gap-1 text-[15px] font-semibold">
          what is it about
          <select name="topic" className={field} defaultValue="A project">
            <option>A project</option>
            <option>An event or activation</option>
            <option>Artists as ambassadors</option>
            <option>The Coffee Party</option>
            <option>The store</option>
            <option>Something else</option>
          </select>
        </label>
      </div>
      <label className="flex flex-col gap-1 text-[15px] font-semibold">
        the idea, even if it is half an idea
        <textarea name="message" required rows={5} className={field} />
      </label>
      {/* Hidden from people; bots fill it in and get ignored. */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-charcoal px-7 py-4 text-base font-bold lowercase text-lime transition-colors hover:bg-blue hover:text-white disabled:opacity-60"
        >
          {status === "sending" ? "sending…" : "send it"}
        </button>
        {status === "error" && (
          <p role="alert" className="font-semibold">
            That did not go through. Email us at{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            and we will pick it up there.
          </p>
        )}
      </div>
    </form>
  );
}
