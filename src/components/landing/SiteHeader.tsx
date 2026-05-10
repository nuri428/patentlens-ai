import { Link } from "@tanstack/react-router";
import { ScanSearch } from "lucide-react";

const nav = [
  { label: "Platform", to: "/" },
  { label: "Solutions", to: "/" },
  { label: "Intelligence", to: "/" },
  { label: "Pricing", to: "/" },
  { label: "Docs", to: "/" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy text-white">
            <ScanSearch className="h-4 w-4" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[15px] font-semibold tracking-tight text-ink">PatentLens</span>
            <span className="rounded-sm bg-muted px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-ink-soft">
              Beta
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="hidden rounded-md px-3 py-1.5 text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink md:inline-flex"
          >
            Sign in
          </Link>
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-navy px-3.5 py-2 text-[13px] font-medium text-white shadow-card transition-colors hover:bg-navy-soft"
          >
            Request demo
          </Link>
        </div>
      </div>
    </header>
  );
}
