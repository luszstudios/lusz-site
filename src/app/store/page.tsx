import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Star } from "@/components/Star";
import { site } from "@/content/site";
import { storeItems } from "@/content/store";

export const metadata: Metadata = {
  title: "Store",
  description:
    "LUSZ STUDIOS STORE: vintage clothes, cameras and objects, shot and styled by the studio.",
};

export default function StorePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-orange px-5 pb-12 pt-10 md:px-12 md:pt-24">
        <Star className="spin-slow absolute -right-8 top-6 h-36 w-36 text-lime md:h-64 md:w-64" />
        <p className="relative text-[15px] font-semibold">lusz studios</p>
        <h1 className="display relative text-[clamp(4rem,17vw,16rem)]">store</h1>
        <p className="relative mt-6 max-w-lg text-lg leading-snug">
          Vintage clothes, cameras and objects, shot and styled by the studio. One of each, gone
          when gone.
        </p>
        <div className="relative mt-8">
          <Button href={site.tradera}>shop on tradera</Button>
        </div>
      </section>

      {storeItems.length > 0 ? (
        <section className="px-5 py-12 md:px-12">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
            {storeItems.map((item, i) => (
              <li key={item.name} className={i % 3 === 1 ? "md:pt-12" : ""}>
                <a href={item.href} target="_blank" rel="noreferrer" className="group flex flex-col gap-3">
                  <div className="relative aspect-[3/4] overflow-hidden border-2 border-charcoal">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {item.sold && (
                      <span className="absolute left-3 top-3 bg-charcoal px-3 py-1 text-sm font-bold text-lime">
                        sold
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline justify-between gap-4 font-semibold">
                    <span className="group-hover:underline">{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section className="flex flex-col items-start gap-8 px-5 py-20 md:px-12 md:py-28">
          <h2 className="display max-w-4xl text-[clamp(2.25rem,6vw,5.5rem)]">
            the next drop is being photographed.
          </h2>
          <p className="max-w-lg text-xl leading-snug">
            Everything is sold through our Tradera shop, and shown on Instagram first.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href={site.tradera}>shop on tradera</Button>
            <Button href={site.storeInstagram} variant="orange">
              @luszstudios.store
            </Button>
          </div>
        </section>
      )}
    </>
  );
}
