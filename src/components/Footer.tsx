import Link from "next/link";
import { site } from "@/content/site";
import { Button } from "./Button";
import { Star } from "./Star";

export function Footer() {
  return (
    <footer className="bg-charcoal text-lime">
      <div className="flex flex-wrap items-end justify-between gap-8 px-5 py-16 md:px-12 md:py-24">
        <h2 className="display text-[clamp(2.75rem,7.4vw,6.6rem)]">
          bring the idea.
          <br />
          we bring the room.
        </h2>
        <Button href="/contact" variant="lime">
          start a project
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4 border-t border-lime/40 px-5 py-6 text-sm md:px-12">
        <span className="flex items-center gap-2 font-bold">
          <Star className="h-4 w-4 text-orange" />
          {site.name} Stockholm, working worldwide
        </span>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a className="hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="hover:underline" href={site.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a className="hover:underline" href={site.storeInstagram} target="_blank" rel="noreferrer">
            Store on Instagram
          </a>
          <a className="hover:underline" href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <Link className="hover:underline" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
