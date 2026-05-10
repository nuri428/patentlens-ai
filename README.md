# PatentLens

PatentLens is a B2B patent intelligence product concept focused on prior-art analysis, semantic patent search, and technology trend exploration.

This repository currently contains the landing-page frontend and supporting project scaffolding. The product direction is defined in [docs/patent-platform-prd.md](/Users/nuri/dev/git/patentlens-ai/docs/patent-platform-prd.md:1).

## Current status

- Landing page frontend is implemented with bilingual `KO / EN` copy support.
- The page has been simplified to prioritize clarity over placeholder interactions.
- Navigation currently points only to real sections within the landing page.
- Service flows such as sign-up, live search, and report generation are not connected yet.

## Tech stack

- React 19
- TanStack Start / TanStack Router
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Recharts

## Project structure

- [src/components/landing](/Users/nuri/dev/git/patentlens-ai/src/components/landing): landing page sections
- [src/lib/i18n.tsx](/Users/nuri/dev/git/patentlens-ai/src/lib/i18n.tsx:1): bilingual copy dictionary and language state
- [src/routes/index.tsx](/Users/nuri/dev/git/patentlens-ai/src/routes/index.tsx:1): landing route entry
- [docs/patent-platform-prd.md](/Users/nuri/dev/git/patentlens-ai/docs/patent-platform-prd.md:1): product requirements document
- [docs/ontology/patent_kg.ttl](/Users/nuri/dev/git/patentlens-ai/docs/ontology/patent_kg.ttl:1): ontology reference

## Local development

### 1. Install dependencies

```bash
bun install
```

### 2. Start the dev server

The project uses Vite 7, which requires Node.js `20.19+` or `22.12+`.

If your default Node version is older, run Vite with a compatible Node binary:

```bash
/path/to/node node_modules/vite/bin/vite.js dev --host 127.0.0.1
```

If your local environment already has a recent Node version, the standard command is:

```bash
bun run dev --host 127.0.0.1
```

### 3. Build

```bash
/path/to/node node_modules/vite/bin/vite.js build
```

or:

```bash
bun run build
```

## Notes

- A compatibility adjustment was applied in [vite.config.ts](/Users/nuri/dev/git/patentlens-ai/vite.config.ts:1) so the Lovable TanStack config resolves correctly in this project setup.
- `vite build` completes successfully, but local environments may still print a Wrangler log-directory permission warning depending on OS permissions. That warning has not blocked builds in this repo.
- [src/routeTree.gen.ts](/Users/nuri/dev/git/patentlens-ai/src/routeTree.gen.ts:1) is generated TanStack router output and may change when routes are regenerated.

## What is implemented now

- Hero section with product positioning
- Capability overview
- Workspace preview with sample patent analysis data
- Knowledge graph / ontology section
- Persona-oriented positioning for patent attorneys and R&D teams
- Footer and section navigation aligned to the current landing scope

## What is intentionally not implemented yet

- Authentication
- Patent search backend integration
- User onboarding flow
- Real report generation
- Real customer references, trust badges, or unsupported enterprise claims

## Product direction

The current messaging is centered on:

- explainable evidence
- logical reasoning
- ontology + reasoning based patent interpretation
- persona-aware analysis flows for different user types

These themes should stay aligned with the PRD as the product moves from landing page into actual workflows.
