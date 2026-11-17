import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Star } from "@/components/Star";
import { getProject, projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: project.cover ? { images: [project.cover.src] } : undefined,
  };
}

const heroColor = {
  blue: "bg-blue text-white [--accent:var(--color-lime)]",
  lime: "bg-lime text-charcoal [--accent:var(--color-charcoal)]",
  orange: "bg-orange text-charcoal [--accent:var(--color-charcoal)]",
  charcoal: "bg-charcoal text-white [--accent:var(--color-lime)]",
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className={`px-5 pb-10 pt-10 md:px-12 md:pt-20 ${heroColor[project.color]}`}>
        <Link href="/work" className="text-[15px] font-semibold hover:underline">
          ← all work
        </Link>
        <h1 className="display mt-8 text-[clamp(2.75rem,9vw,8.5rem)] text-(--accent)">
          {project.title}
        </h1>
        <div className="mt-10 flex flex-wrap justify-between gap-x-12 gap-y-6">
          <p className="max-w-xl text-xl leading-snug">{project.summary}</p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 self-end text-[15px]">
            <dt className="font-bold">Role</dt>
            <dd>{project.role}</dd>
            <dt className="font-bold">Year</dt>
            <dd>{project.year}</dd>
          </dl>
        </div>
      </header>

      {project.cover && (
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          width={project.cover.width}
          height={project.cover.height}
          priority
          sizes="100vw"
          className={`w-full object-cover ${project.cover.height > project.cover.width ? "max-h-[90vh] object-top" : "max-h-[85vh]"}`}
        />
      )}

      {project.facts && (
        <ul className="grid border-b-2 border-charcoal md:grid-cols-2">
          {project.facts.map((f) => (
            <li
              key={f}
              className="border-t-2 border-charcoal px-5 py-5 text-lg font-semibold md:px-12 md:odd:border-r-2"
            >
              {f}
            </li>
          ))}
        </ul>
      )}

      {project.sections && (
        <div className="px-5 py-6 md:px-12 md:py-10">
          {project.sections.map((s) => (
            <Reveal key={s.heading}>
              <section className="flex flex-wrap gap-x-12 gap-y-4 border-b-2 border-charcoal py-10 last:border-b-0">
                <h2 className="display flex-[1_1_18rem] text-4xl md:text-5xl">{s.heading}</h2>
                <p className="flex-[1.4_1_24rem] text-xl leading-normal">{s.body}</p>
              </section>
            </Reveal>
          ))}
        </div>
      )}

      {project.video && (
        <section className="px-5 pb-6 md:px-12">
          <video
            src={project.video.src}
            poster={project.video.poster}
            controls
            playsInline
            preload="metadata"
            className="w-full bg-charcoal"
          />
        </section>
      )}

      {project.gallery && (
        <section className="px-5 pb-6 md:px-12">
          <div className="grid gap-4 md:grid-cols-2">
            {project.gallery.map((g, i) => (
              <Reveal key={g.src} className={i % 2 === 1 ? "md:pt-16" : ""}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={g.width}
                  height={g.height}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="w-full"
                />
              </Reveal>
            ))}
          </div>
          {project.credits && <p className="mt-4 text-sm">{project.credits}</p>}
        </section>
      )}

      {project.draft && (
        <section className="flex items-center gap-4 px-5 py-14 md:px-12">
          <Star className="h-8 w-8 shrink-0 text-orange" />
          <p className="text-xl">The full story of this project is on its way. Ask us about it in the meantime.</p>
        </section>
      )}

      <section className="flex flex-wrap items-end justify-between gap-8 bg-lime px-5 py-14 md:px-12">
        <div className="flex flex-col items-start gap-6">
          <h2 className="display max-w-3xl text-[clamp(2.25rem,5vw,4.5rem)]">
            want something like this for your brand?
          </h2>
          <Button href="/contact">let&apos;s talk</Button>
        </div>
        <Link href={`/work/${next.slug}`} className="text-right font-bold hover:underline">
          next: {next.title} →
        </Link>
      </section>
    </article>
  );
}
