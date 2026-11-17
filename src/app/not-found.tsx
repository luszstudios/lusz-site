import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-start justify-center gap-8 bg-blue px-5 py-20 text-white md:px-12">
      <h1 className="display text-[clamp(3rem,10vw,9rem)] text-lime">wrong room.</h1>
      <p className="text-xl">This page does not exist, or it moved.</p>
      <Button href="/" variant="lime">
        back to the start
      </Button>
    </section>
  );
}
