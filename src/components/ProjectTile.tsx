import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { Star } from "./Star";

const blocks = {
  blue: "bg-blue text-lime",
  lime: "bg-lime text-charcoal",
  orange: "bg-orange text-charcoal",
  charcoal: "bg-charcoal text-lime",
};

// A project card: the cover photo, or a colour block with the name when there is no photo yet.
export function ProjectTile({ project, tall = false }: { project: Project; tall?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className="group flex flex-col gap-3">
      <div className={`relative overflow-hidden ${tall ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
        {project.cover ? (
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className={`flex h-full w-full flex-col justify-between p-5 ${blocks[project.color]}`}>
            <Star className="h-10 w-10 transition-transform duration-700 group-hover:rotate-90" />
            <span className="display text-4xl md:text-5xl">{project.title}</span>
          </div>
        )}
      </div>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-lg font-bold lowercase group-hover:underline">{project.title}</span>
        <span className="text-sm">{project.role}</span>
      </div>
    </Link>
  );
}
