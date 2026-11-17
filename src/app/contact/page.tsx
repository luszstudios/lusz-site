import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project, book an activation or just say hi to LUSZ STUDIOS in Stockholm.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-lime px-5 pb-12 pt-10 md:px-12 md:pt-24">
        <h1 className="display text-[clamp(2.75rem,9vw,8.5rem)]">
          got an idea
          <br />
          that needs a room?
        </h1>
      </section>
      <section className="flex flex-wrap gap-x-16 gap-y-12 px-5 py-14 md:px-12 md:py-20">
        <div className="flex-[2_1_30rem]">
          <ContactForm />
        </div>
        <div className="flex flex-[1_1_16rem] flex-col gap-8 text-lg">
          <div className="flex flex-col gap-1">
            <span className="text-[15px] font-semibold">email</span>
            <a className="text-xl font-bold hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[15px] font-semibold">whatsapp</span>
            <a
              className="text-xl font-bold hover:underline"
              href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
            >
              {site.whatsappLabel}
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[15px] font-semibold">where</span>
            <span className="text-xl font-bold">Stockholm, working worldwide</span>
          </div>
        </div>
      </section>
    </>
  );
}
