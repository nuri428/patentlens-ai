import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-grid-navy opacity-50" />
      <div className="absolute -left-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="text-[36px] font-semibold leading-tight tracking-tight">
            Bring the entire patent universe<br />into a single decision surface.
          </h2>
          <p className="mt-4 text-[15px] text-white/70">
            Get a guided walkthrough with our IP intelligence team. We'll model your portfolio,
            run a competitor benchmark, and ship you a sample landscape brief — all in 30 minutes.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-[14px] font-medium text-primary-foreground shadow-elevated transition hover:brightness-110">
            Request enterprise demo <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-[14px] font-medium text-white/90 transition hover:bg-white/10">
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}
