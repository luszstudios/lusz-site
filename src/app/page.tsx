import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Marquee } from "@/components/Marquee";
import { ProjectTile } from "@/components/ProjectTile";
import { Reveal } from "@/components/Reveal";
import { Star } from "@/components/Star";
import { featured, projects } from "@/content/projects";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function Home() {
  const more = projects.filter((p) => p.slug !== featured.slug).slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-lime px-5 pb-10 pt-36 md:px-12 md:pb-12 md:pt-40">
        <Star className="spin-slow absolute -right-10 -top-6 h-44 w-44 text-orange md:-right-10 md:top-0 md:h-[26rem] md:w-[26rem]" />
        <div className="relative flex flex-col gap-8">
          <h1 className="display text-[clamp(2.9rem,8.4vw,7.6rem)]">
            we make
            <br />
            things people
            <br />
            show up for.
          </h1>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <p className="max-w-md text-lg leading-snug">
              An independent creative studio in Stockholm. Brand, content, events and community,
              from the first idea to the last guest leaving.
            </p>
            <Button href="/work">see the work</Button>
          </div>
        </div>
      </section>

      <Marquee text={site.marquee} />

      {/* What we do */}
      <section className="px-5 py-14 md:px-12 md:py-16">
        <div className="mb-5 flex justify-between text-[15px] font-semibold">
          <h2>what we do</h2>
          <Link href="/services" className="hover:underline">
            all services →
          </Link>
        </div>
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 0.05}>
            <Link
              href={`/services#${s.slug}`}
              className="group flex flex-wrap items-baseline gap-x-10 gap-y-3 border-t-2 border-charcoal py-5 last:border-b-2"
            >
              <span className="display flex-[1_1_22rem] text-6xl transition-colors group-hover:text-blue md:text-[5.5rem]">
                {s.name}
              </span>
              <span className="flex-[1_1_22rem] text-lg leading-snug">{s.line}</span>
            </Link>
          </Reveal>
        ))}
      </section>

      {/* Selected work: flagship case study */}
      <section className="bg-blue px-5 py-14 text-white md:px-12 md:py-16">
        <div className="mb-7 flex justify-between text-[15px] font-semibold">
          <h2>selected work</h2>
          <Link href="/work" className="hover:underline">
            all work →
          </Link>
        </div>
        <Link href={`/work/${featured.slug}`} className="group flex flex-wrap gap-10">
          <div className="flex flex-[1_1_26rem] flex-col justify-between gap-8">
            <h3 className="display text-[clamp(2.5rem,6.2vw,5.6rem)] text-lime group-hover:underline group-hover:decoration-4 group-hover:underline-offset-8">
              {featured.title}
            </h3>
            <ul className="text-[17px]">
              {featured.facts?.map((f) => (
                <li key={f} className="border-t border-white py-3 last:border-b">
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-[1_1_32rem] flex-col gap-3">
            {featured.cover && (
              <Image
                src={featured.cover.src}
                alt={featured.cover.alt}
                width={featured.cover.width}
                height={featured.cover.height}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-72 w-full object-cover md:h-[25rem]"
              />
            )}
            <div className="grid grid-cols-2 gap-3">
              {featured.gallery?.slice(0, 2).map((g) => (
                <Image
                  key={g.src}
                  src={g.src}
                  alt={g.alt}
                  width={g.width}
                  height={g.height}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="h-56 w-full object-cover md:h-[23rem]"
                />
              ))}
            </div>
            {featured.credits && <span className="text-[13px]">{featured.credits}</span>}
          </div>
        </Link>
      </section>

      {/* Clients */}
      <section className="flex flex-col gap-3 border-b-2 border-charcoal px-5 py-10 md:px-12">
        <h2 className="text-[15px] font-semibold">worked with</h2>
        <p className="display text-2xl !leading-[1.15] md:text-3xl">{site.clients.join(", ")}</p>
        <p className="max-w-4xl leading-normal">Also: {site.clientsAlso.join(", ")}</p>
      </section>

      {/* More work */}
      <section className="px-5 py-12 md:px-12">
        <div className="grid gap-x-4 gap-y-10 md:grid-cols-3">
          {more.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} className={i === 1 ? "md:pt-12" : ""}>
              <ProjectTile project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="flex flex-wrap gap-x-16 gap-y-8 bg-lime px-5 py-14 md:px-12 md:py-16">
        <div className="flex flex-[2_1_32rem] flex-col gap-6">
          <h2 className="text-[15px] font-semibold">about</h2>
          <p className="display text-[clamp(2.1rem,4.4vw,3.9rem)] !leading-[0.98]">
            lusz is betsey, a marketer &amp; photographer from buenos aires, and the people she makes things with.
          </p>
          <p className="max-w-xl text-lg leading-snug">
            Based in Stockholm since 2017, after 45 countries and a few years in start-ups. The
            studio is small on purpose: the person you brief is the person who plans, directs and
            shows up on the day.
          </p>
          <Link href="/about" className="self-start font-bold hover:underline">
            more about us →
          </Link>
        </div>
        <ul className="flex-[1_1_20rem] self-end text-[17px]">
          {site.credentials.map((c) => (
            <li key={c} className="border-t-2 border-charcoal py-3 last:border-b-2">
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* Recommendation */}
      {site.quote && (
        <section className="flex flex-col gap-6 px-5 py-16 md:px-12">
          <blockquote className="display max-w-6xl text-[clamp(1.9rem,4vw,3.5rem)] !leading-[1.02] !normal-case text-blue">
            “{site.quote.text}”
          </blockquote>
          <p>{site.quote.by}</p>
        </section>
      )}

      {/* Store */}
      <section className="flex flex-wrap items-end justify-between gap-8 bg-orange px-5 py-12 md:px-12">
        <div className="flex max-w-xl flex-col gap-6">
          <h2 className="display text-[clamp(2.5rem,5vw,4.5rem)]">lusz studios store</h2>
          <p className="text-lg leading-snug">
            Vintage clothes, cameras and objects, shot and styled by the studio. One of each, gone
            when gone.
          </p>
        </div>
        <Button href={site.tradera}>enter the store</Button>
      </section>
    </>
  );
}
