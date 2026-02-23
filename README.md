# Wingxtra Official Website (Next.js + Sanity + Resend + Netlify)

This repository is the source of truth for the Wingxtra official website (**wingxtra.com**).

Goal: Rebuild the current Webflow site **page-for-page** and deploy on **Netlify**, with:
- **Next.js (App Router)** for the site
- **Sanity** for blog/news content (replaces Webflow CMS)
- **Resend** for form emails (Contact, Newsletter, Get Delivery)

## Reference pages (must match 1:1)

These pages are the canonical design + copy source:
- Home: https://wingxtra.webflow.io/
- Solutions: https://wingxtra.webflow.io/solutions
- Technology: https://wingxtra.webflow.io/technology
- About: https://wingxtra.webflow.io/about-us
- Contact: https://wingxtra.webflow.io/contact
- Blog list (Webflow CMS): https://wingxtra.webflow.io/cms/blog
- Get Delivery: https://wingxtra.webflow.io/get-delivery

> NOTE: In our rebuild, Webflow `/cms/blog` becomes `/news` and `/news/[slug]`.

---

## Tech stack

- Next.js (latest stable) + TypeScript + Tailwind
- Sanity Studio v4 (in-repo under `/sanity`)
- Resend (email provider for forms)
- Netlify hosting (supports major Next.js features via OpenNext adapter) :contentReference[oaicite:0]{index=0}

---

## Repo structure (target)


.
├─ app/ # Next.js App Router pages
├─ components/ # Reusable UI components
├─ lib/ # Sanity client, utilities, validation, etc.
├─ public/ # Static assets
├─ sanity/ # Sanity Studio + schemas
├─ netlify.toml # Netlify build configuration
├─ package.json
└─ README.md


---

## Prerequisites

- Node.js **20+** (required for Sanity Studio v4) :contentReference[oaicite:1]{index=1}
- Git + GitHub access
- Netlify account
- Sanity account/project
- Resend account + API key (and ideally a verified sending domain) :contentReference[oaicite:2]{index=2}

---

# ✅ Recommended workflow: Upstream-first (Codex works directly in GitHub)

This is the fastest + cleanest approach:
- GitHub repo is the source of truth
- Codex opens PRs
- Netlify auto-builds PR previews and deploys main

### 1) Create the repo
Create GitHub repo: `wingxtra-website`

### 2) Connect Netlify to the repo
Netlify → **Add new site → Import from Git → GitHub → wingxtra-website**

Do not worry about build settings yet (we’ll set them after scaffold).

---

# Codex Runbook (PR-by-PR prompts)

## Rules for Codex
- Work in **small PRs** (one PR per prompt below).
- Always keep routes stable: do not rename pages without updating links.
- Always keep copy + section order consistent with Webflow reference pages.
- Prefer reusable components to duplication.
- No “placeholder lorem ipsum” except where explicitly allowed.
- Every PR must include:
  - working routes
  - responsive layout
  - no runtime errors in console

---

## PR-1 — Scaffold Next.js + Tailwind + routes

**Codex prompt (copy/paste):**

Create a Next.js (latest stable) project using App Router + TypeScript + Tailwind in this repo.

Requirements:

App Router structure in /app

Shared layout with <Header/> and <Footer/>

Routes/pages:
/ (home)
/solutions
/technology
/about-us
/contact
/news
/news/[slug]
/get-delivery

Add a small design system:

container widths, typography scale, buttons, section spacing, responsive grids

Put placeholder headings only (no filler text) and ensure each page renders.
Open a PR.


Acceptance checklist:
- all routes load
- navigation links work
- mobile nav works

---

## PR-2 — Home page (match Webflow structure + copy)

**Codex prompt:**

Rebuild the Home page to match https://wingxtra.webflow.io/
 as closely as possible (structure + copy + section order).

Must include:

Hero headline and subcopy

"What you need, when you need it. Without the wait." section

Solutions section with tabs/cards: Restaurants, Convenience & Grocery, Healthcare

"It’s simpler than you imagine" section with 4 steps (01-04) and matching copy

Benefits section with 4 cards: Fast, Convenient, Eco friendly, Accessibility & Reach

News preview section (use temporary placeholder posts for now)

CTA blocks + footer consistent with site
Open PR.


---

## PR-3 — Solutions page (match Webflow)

**Codex prompt:**

Rebuild /solutions to match https://wingxtra.webflow.io/solutions
 as closely as possible.

Must include:

Hero heading + subheading

Benefit cards (3) with their copy

"Easy to use..." integration line

Vertical sections: Restaurants, Convenience & Grocery, Healthcare

Impact blocks including the "<20 mins" and "3 min 43 sec..." content
Open PR.


---

## PR-4 — Technology page (match Webflow)

**Codex prompt:**

Rebuild /technology to match https://wingxtra.webflow.io/technology
 as closely as possible.

Must include:

Specifications grid (speed, carrying capacity, range, altitude)

"Meet your delivery guy" section + copy

"Order experience" timeline with timestamps and matching text

Remote Operations + Operational Intelligence sections

FAQ section "You might be wondering." with the page questions/answers
Open PR.


---

## PR-5 — About page (match Webflow)

**Codex prompt:**

Rebuild /about-us to match https://wingxtra.webflow.io/about-us
 as closely as possible.

Must include:

H1 headline and the intro paragraph

Our mission section + copy

Our vision section + copy

Our values section + layout
Open PR.


---

## PR-6 — Contact page + footer newsletter UI (no backend yet)

**Codex prompt:**

Rebuild /contact to match https://wingxtra.webflow.io/contact
.

Must include:

Headline + support copy

Contact support form UI with fields: name, email, message

Footer sections and Newsletter form UI

Success/error UI states (wired later)
Open PR.


---

## PR-7 — Get Delivery page (match Webflow)

**Codex prompt:**

Rebuild /get-delivery to match https://wingxtra.webflow.io/get-delivery
.

Must include:

Hero + fastest delivery time badge and copy

"Drone delivery zones" with Kumasi, Accra, Nkawkaw

"How it works" steps and the partner references on the page

CTA block

FAQ section with the page questions/answers
Open PR.


---

# Sanity (Blog/News CMS)

We replace Webflow `/cms/blog` with:
- `/news` (list)
- `/news/[slug]` (detail)

## PR-8 — Add Sanity Studio + schemas + Next.js fetch

**Codex prompt:**

Add Sanity Studio in this repo under /sanity and connect it to the Next.js app.

Requirements:

Schemas: post, author, category
post fields: title, slug, excerpt, coverImage, publishedAt, author ref, categories, body (portable text), seo fields

Add Sanity client utilities in /lib/sanity/*

Implement /news page listing latest posts

Implement /news/[slug] rendering post

Add ISR revalidation (60 seconds) for /news and /news/[slug]

Add README docs: how to run studio and app locally
Open PR.


### Sanity environment variables
Create `.env.local` (not committed):


NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01

Optional (only if needed for drafts/private reads):

SANITY_API_READ_TOKEN=xxxx


Sanity Studio setup uses the Sanity CLI workflow (Node 20+). :contentReference[oaicite:3]{index=3}

---

# Forms (Resend)

We will send form submissions via Resend:
- Contact form: `/contact`
- Newsletter form: footer on all pages
- Optional: Get Delivery form (if there is a form on the page)

Resend Node SDK guide: :contentReference[oaicite:4]{index=4}

## PR-9 — Implement Resend + API routes + validation + anti-spam

**Codex prompt:**

Implement email sending with Resend for forms.

Requirements:

Add deps: resend, zod

Create POST endpoints:
/app/api/contact/route.ts
/app/api/newsletter/route.ts
/app/api/get-delivery/route.ts

Validate payloads with zod

Add honeypot field and basic rate limiting (simple per-IP in-memory ok initially)

Send email via Resend to RESEND_TO_EMAIL using RESEND_FROM_EMAIL

Wire forms to call these endpoints and show loading + success/error states
Open PR.


### Resend environment variables
Set in `.env.local` and Netlify:


RESEND_API_KEY=xxxx
RESEND_FROM_EMAIL="Wingxtra Website website@wingxtra.com
"
RESEND_TO_EMAIL=info@wingxtra.com


---

# Netlify Deployment

Netlify supports Next.js features via OpenNext adapter. :contentReference[oaicite:5]{index=5}

## PR-10 — Add Netlify config + deployment docs

**Codex prompt:**

Add netlify.toml and README deployment instructions.

Requirements:

Netlify build command: npm run build

Include @netlify/plugin-nextjs in netlify.toml

Document all required environment variables (Sanity + Resend)

Add caching headers for Next static assets
Open PR.


Example `netlify.toml` (Codex should create it, but this is the target idea):

[build]
command = "npm run build"

[[plugins]]
package = "@netlify/plugin-nextjs"


---

# Local development

## Install

npm install


## Run Next.js app

npm run dev


## Run Sanity Studio
From repo root:

cd sanity
npm install
npm run dev


---

# Definition of Done (“100% rebuild”)

The rebuild is considered complete when:
- All pages match the Webflow reference pages in:
  - section order
  - headings and copy
  - visible CTAs and navigation
- `/news` and `/news/[slug]` are driven by Sanity content
- Forms send emails successfully via Resend
- Site deploys on Netlify and works on production domain (wingxtra.com)
- Lighthouse is reasonable (no major layout shifts; images optimized)

---

# Troubleshooting

## Netlify build issues
- Ensure Node version in Netlify matches project needs (Node 20+ is safest).
- Ensure `@netlify/plugin-nextjs` is enabled via `netlify.toml`.
- Confirm env vars are set in Netlify UI.

## Resend email not sending
- Confirm domain/sender verification in Resend (From address must be valid/verified).
- Confirm RESEND_API_KEY is present in Netlify env vars.

## Sanity content not appearing
- Confirm project id/dataset/version env vars match the Sanity project.
- Confirm posts are published and have slugs.

---

# Optional improvements (post-launch)
- Add Sanity preview mode
- Add a webhook from Sanity → Netlify deploy hook (instant updates)
- Add basic analytics
- Add sitemap.xml + robots.txt
- Add OpenGraph images per page

## Local development (web app + Sanity Studio)

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create `.env.local` in the project root:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_STUDIO_PROJECT_ID=yourProjectId
SANITY_STUDIO_DATASET=production
```

### 3) Run the Next.js web app

```bash
npm run dev
```

- Web app runs at `http://localhost:3000`
- News list route: `http://localhost:3000/news`
- News detail route: `http://localhost:3000/news/[slug]`
- News pages use ISR with a 60-second revalidation window.

### 4) Run Sanity Studio

In a second terminal:

```bash
npm run sanity:dev
```

- Studio runs at `http://localhost:3333`
- Create `author`, `category`, and `post` documents in Studio.

## Form handling with Resend

The web app includes three forms with server-side submission via Next.js Route Handlers:

- `POST /api/contact` for `/contact`
- `POST /api/get-delivery` for `/get-delivery`
- `POST /api/newsletter` for the footer newsletter form

Each endpoint uses:
- Zod validation
- Honeypot spam field (`website`)
- In-memory IP-based rate limiting

Add these variables to `.env.local`:

```bash
RESEND_API_KEY=your_resend_api_key
FORM_TO_EMAIL=team@yourdomain.com
FORM_FROM_EMAIL="Wingxtra <no-reply@yourdomain.com>"
```
