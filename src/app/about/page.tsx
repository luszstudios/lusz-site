import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Star } from "@/components/Star";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "LUSZ STUDIOS is Betsey, a marketer and photographer from Buenos Aires based in Stockholm, and the people she makes things with.",
};

const beliefs = [
  {
    head: "the room comes first",
    body: "A campaign is finished when people are standing in it. We plan backwards from the moment someone walks in, picks up the product or opens the post.",
  },
  {
    head: "small on purpose",
    body: "The person you brief is the person who plans, directs and shows up on the day. For bigger jobs we bring in photographers, DJs, designers and producers we already trust.",
  },
  {
    head: "tech, with a pulse",
    body: "We like new tools and use them. We also know that nobody ever told a friend about a brand because its content calendar was full.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-lime px-5 pb-14 pt-10 md:px-12 md:pt-24">
        <Star className="spin-slow absolute -right-10 bottom-6 h-40 w-40 text-blue md:h-72 md:w-72" />
        <h1 className="display relative max-w-6xl text-[clamp(2.5rem,7vw,6.5rem)]">
          lusz is betsey, a marketer &amp; photographer from buenos aires, and the people she makes things with.
        </h1>
      </section>

      <section className="flex flex-wrap gap-x-16 gap-y-10 px-5 py-14 md:px-12 md:py-20">
        <div className="flex flex-[1.4_1_26rem] flex-col gap-6 text-xl leading-normal">
          <p>
            Betsey started in fashion photography, spent years running social media for start-ups
            and lifestyle brands, travelled through 45 countries and landed in Stockholm in 2017.
            LUSZ STUDIOS is where all of that ended up: one studio for strategy, content, events
            and community.
          </p>
          <p>
            In 2025 she co-founded The Coffee Party Stockholm, a Sunday daytime party that has sold
            out every edition since. It is the clearest example of what we do for brands: have an
            idea, build it properly, and give people a reason to come back.
          </p>
          <p>We work in English, Swedish and Spanish.</p>
        </div>
        <ul className="flex-[1_1_20rem] self-start text-[17px]">
          {site.credentials.map((c) => (
            <li key={c} className="border-t-2 border-charcoal py-3 last:border-b-2">
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-4 px-5 pb-14 md:grid-cols-3 md:px-12">
        <Image
          src="/images/seated.jpg"
          alt="Audience seated on the floor of a raw white room watching two performers"
          width={1800}
          height={1200}
          sizes="(min-width: 768px) 66vw, 100vw"
          className="h-72 w-full object-cover md:col-span-2 md:h-[30rem]"
        />
        <Image
          src="/images/club.jpg"
          alt="Disco balls and red light beams in a dark club"
          width={1200}
          height={1800}
          sizes="(min-width: 768px) 33vw, 100vw"
          className="h-72 w-full object-cover md:h-[30rem]"
        />
      </section>

      <section className="bg-blue px-5 py-14 text-white md:px-12 md:py-20">
        <h2 className="mb-8 text-[15px] font-semibold">how we think</h2>
        {beliefs.map((b) => (
          <Reveal key={b.head}>
            <div className="flex flex-wrap gap-x-12 gap-y-4 border-t border-white py-8">
              <h3 className="display flex-[1_1_20rem] text-4xl text-lime md:text-6xl">{b.head}</h3>
              <p className="flex-[1_1_22rem] text-xl leading-snug">{b.body}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {site.quote && (
        <section className="flex flex-col gap-6 bg-ice px-5 py-20 text-burgundy md:px-12 md:py-24">
          <blockquote className="display max-w-6xl text-[clamp(1.9rem,4vw,3.5rem)] !leading-[1.02] !normal-case">
            “{site.quote.text}”
          </blockquote>
          <p>{site.quote.by}</p>
        </section>
      )}

      <section className="flex flex-wrap items-end justify-between gap-8 bg-orange px-5 py-14 md:px-12">
        <h2 className="display max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)]">
          coffee? we know a place.
        </h2>
        <Button href="/contact">say hi</Button>
      </section>
    </>
  );
}
