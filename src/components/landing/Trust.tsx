const logos = [
  "Northstar IP", "Hanwha R&D", "Lumen Labs", "Atlas Therapeutics",
  "Kinetic Robotics", "Vector Foundry", "Helix Bio", "Orbit Mobility",
];

export function Trust() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="text-center text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
          Trusted by IP teams and research labs across 14 countries
        </div>
        <div className="mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
          {logos.map((l) => (
            <div key={l} className="text-center font-mono text-[12.5px] text-ink-soft/80 transition-colors hover:text-ink">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
