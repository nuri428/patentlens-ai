import { ScanSearch } from "lucide-react";

const cols = [
  {
    title: "Platform",
    items: ["Patent Search", "Prior Art", "Trend Analysis", "Competitor Intel", "Report Builder"],
  },
  {
    title: "Solutions",
    items: ["Patent Attorneys", "R&D Strategy", "IP Portfolio", "Litigation Support"],
  },
  {
    title: "Resources",
    items: ["Documentation", "API Reference", "Changelog", "Trust & Security"],
  },
  {
    title: "Company",
    items: ["About", "Customers", "Careers", "Contact"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy text-white">
                <ScanSearch className="h-4 w-4" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight">PatentLens</span>
            </div>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-ink-soft">
              An AI-native patent intelligence platform for IP teams, attorneys, and R&D strategists.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                {c.title}
              </div>
              <ul className="space-y-2">
                {c.items.map((i) => (
                  <li key={i}>
                    <a className="text-[13px] text-ink-soft hover:text-ink" href="#">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[12px] text-ink-muted md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} PatentLens, Inc. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">SOC 2</a>
            <a href="#" className="hover:text-ink">DPA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
