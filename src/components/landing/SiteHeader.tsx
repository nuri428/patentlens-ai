import { Link } from "@tanstack/react-router";
import { ScanSearch } from "lucide-react";
import { type Language, useLanguage } from "@/lib/i18n";

const navTargets = ["#features", "#workspace", "#personas"] as const;
const languages: Language[] = ["ko", "en"];

export function SiteHeader() {
  const { language, setLanguage, t } = useLanguage();

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
              {t.header.beta}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {t.header.nav.map((label, index) => (
            <a
              key={label}
              href={navTargets[index]}
              className="text-[13.5px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex rounded-md border border-border bg-surface p-0.5">
            {languages.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLanguage(code)}
                className={`rounded-[5px] px-2.5 py-1.5 text-[12px] font-semibold uppercase transition ${
                  language === code
                    ? "bg-navy text-white shadow-card"
                    : "text-ink-soft hover:text-ink"
                }`}
                aria-pressed={language === code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
