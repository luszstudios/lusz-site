import type { Metadata } from "next";
import { ProjectTile } from "@/components/ProjectTile";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected work from LUSZ STUDIOS: events, campaigns, content and community.",
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-lime px-5 pb-12 pt-10 md:px-12 md:pt-24">
        <h1 className="display text-[clamp(3.5rem,13vw,12rem)]">work</h1>
        <p className="mt-6 max-w-lg text-lg leading-snug">
          Things we made, ran or shot. Some for brands, some because Stockholm needed them.
        </p>
      </section>
      <section className="px-5 py-12 md:px-12">
        <div className="grid gap-x-4 gap-y-12 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} className={i % 3 === 1 ? "md:pt-12" : ""}>
              <ProjectTile project={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
