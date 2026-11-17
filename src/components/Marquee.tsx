import { Star } from "./Star";

export function Marquee({ text }: { text: string }) {
  const items = Array.from({ length: 8 });
  return (
    <div aria-hidden="true" className="overflow-hidden bg-charcoal py-5 text-lime">
      <div className="marquee-track flex w-max items-center gap-7 whitespace-nowrap text-xl font-semibold">
        {items.map((_, i) => (
          <span key={i} className="flex items-center gap-7">
            {text}
            <Star className="h-5 w-5 text-orange" />
          </span>
        ))}
      </div>
    </div>
  );
}
