import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { Trust } from "@/components/landing/Trust";
import { Metrics } from "@/components/landing/Metrics";
import { Features } from "@/components/landing/Features";
import { ProductPreview } from "@/components/landing/ProductPreview";
import { Personas } from "@/components/landing/Personas";
import { CTA } from "@/components/landing/CTA";
import { SiteFooter } from "@/components/landing/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PatentLens — AI-native patent intelligence platform" },
      {
        name: "description",
        content:
          "PatentLens unifies semantic search, prior art analysis, and competitive landscape mapping into a single AI workspace for IP attorneys and R&D strategists.",
      },
      { property: "og:title", content: "PatentLens — AI-native patent intelligence" },
      {
        property: "og:description",
        content:
          "The strategic operating system for patent intelligence. Built on evidence — not opinion.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Trust />
        <Metrics />
        <Features />
        <ProductPreview />
        <Personas />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}
