import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy, identity, content, events and community from one Stockholm studio. Think, make, gather.",
};

const tone = ["bg-white", "bg-blue text-white", "bg-white"];
const headTone = ["text-charcoal", "text-lime", "text-charcoal"];
const rule = ["border-charcoal", "border-white", "border-charcoal"];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-lime px-5 pb-12 pt-10 md:px-12 md:pt-24">
        <h1 className="display text-[clamp(3rem,11vw,10rem)]">
          think.
          <br />
          make.
          <br />
          gather.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-snug">
          Three things, usually in that order. Hire us for one of them or for the whole run, from
          the first strategy session to the last guest leaving.
        </p>
      </section>

      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} className={`scroll-mt-4 px-5 py-14 md:px-12 md:py-20 ${tone[i]}`}>
          <Reveal className="flex flex-wrap gap-x-16 gap-y-8">
            <div className="flex flex-[1_1_24rem] flex-col gap-6">
              <span className="text-[15px] font-semibold">0{i + 1}</span>
              <h2 className={`display text-[clamp(4rem,11vw,9rem)] ${headTone[i]}`}>{s.name}</h2>
              <p className="max-w-lg text-xl leading-snug">{s.body}</p>
            </div>
            <ul className="flex-[1_1_22rem] self-end text-lg">
              {s.items.map((item) => (
                <li key={item} className={`border-t-2 py-3 last:border-b-2 ${rule[i]}`}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      ))}

      <section className="flex flex-wrap items-end justify-between gap-8 bg-orange px-5 py-14 md:px-12">
        <h2 className="display max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)]">
          not sure which one you need? most people aren&apos;t.
        </h2>
        <Button href="/contact">tell us the problem</Button>
      </section>
    </>
  );
}
