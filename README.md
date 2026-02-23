# wingxtra-website
Wingxtra Official Website

Next.js + Sanity + Netlify

This repository contains the official Wingxtra website (wingxtra.com) rebuilt from Webflow into a fully owned, modern web stack.

It replaces the previous Webflow site and provides:

Full code ownership

CMS-driven blog/news

Secure form handling

Predictable hosting costs

Easy future integration with Wingxtra Cloud, Fleet APIs, and Delivery services

🔧 Tech Stack
Frontend

Next.js (App Router) – React framework

TypeScript

Tailwind CSS

CMS

Sanity – for News / Blog content

Forms & Email

Next.js Route Handlers

Resend – email delivery

Hosting

Netlify – production hosting & CI/CD

GitHub – source of truth

🌐 Domains
Service	Domain	Hosting
Official website	wingxtra.com	Netlify
(future) Cloud GCS UI	gcs.wingxtra.com	Netlify
APIs	api.wingxtra.com, fleet.wingxtra.com	Render / backend hosts

⚠️ This repo only hosts the official website (wingxtra.com).

📁 Repository Structure
wingxtra-website/
├─ app/                    # Next.js App Router pages
│  ├─ api/                 # Form endpoints (contact, newsletter, get-delivery)
│  ├─ news/                # Blog list + blog detail pages
│  ├─ solutions/
│  ├─ technology/
│  ├─ about-us/
│  ├─ contact/
│  ├─ get-delivery/
│  └─ layout.tsx
│
├─ components/             # Reusable UI components
├─ lib/                    # Utilities (Sanity client, helpers)
├─ public/                 # Static assets (images, icons)
├─ sanity/                 # Sanity Studio + schemas
├─ netlify.toml            # Netlify configuration
├─ package.json
└─ README.md
🚀 Getting Started (Local Development)
1. Clone the repository
git clone https://github.com/Wingxtra-Aerospace/wingxtra-website.git
cd wingxtra-website
2. Install dependencies
npm install
3. Create environment variables

Create a file called .env.local in the root:

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01

# Resend (Forms)
RESEND_API_KEY=your_resend_key
RESEND_FROM_EMAIL=website@wingxtra.com
RESEND_TO_EMAIL=info@wingxtra.com

⚠️ Never commit .env.local

4. Run the website
npm run dev

Open:
👉 http://localhost:3000

📰 Sanity CMS (Blog / News)
What Sanity is used for

News

Blog posts

Articles published on /news

Start Sanity Studio locally
cd sanity
npm install
npm run dev

Open:
👉 http://localhost:3333

Content Types

post

author

category

When a post is published:

It appears on /news

It is statically regenerated automatically (ISR)

✉️ Forms & Email (Resend)

Forms implemented:

Contact (/contact)

Get Delivery (/get-delivery)

Newsletter (footer)

How it works

Form submits to a Next.js API route

Input is validated with Zod

Spam protection (honeypot + basic rate limiting)

Email sent via Resend

User sees success/error message

API Routes
POST /api/contact
POST /api/get-delivery
POST /api/newsletter

No Netlify Forms are used (avoids metered limits).

🌍 Netlify Deployment
Initial setup

Netlify → Add new site

Import from GitHub

Select wingxtra-website

Build settings

Build command: npm run build

Publish directory: handled automatically by Netlify (Next.js)

Environment variables (Netlify UI)

Add all variables from .env.local into:

Site settings → Environment variables
Custom domain

Add:

wingxtra.com

www.wingxtra.com

Netlify will provide DNS records to add at your domain registrar.

🔁 CI/CD Workflow

main branch = production

Every push triggers:

Build

Preview deploy

Production deploy (if main)

Recommended workflow:

git checkout -b feature/update-copy
git commit -m "Update homepage copy"
git push origin feature/update-copy

→ Open PR → Preview → Merge

🔐 Security Notes

HTTPS enforced by Netlify

No server-side secrets exposed to the client

Strict CORS handled on backend APIs (not in this repo)

Forms protected against basic spam

🧭 SEO & Performance

Page-level metadata via Next.js

next/image used everywhere

Static rendering + ISR for speed

Lighthouse-friendly by default

🧱 Why This Architecture

This setup ensures:

No vendor lock-in (unlike Webflow)

Clean separation of concerns

Easy future integration with:

Wingxtra Cloud GCS

Fleet APIs

Delivery dashboards

Predictable hosting cost

🔮 Future Enhancements (Optional)

Add Careers CMS collection

Add Investor / Media pages

Add Analytics (Plausible / GA)

Add Cloudflare WAF in front of Netlify

Migrate hosting to Vercel if app complexity increases

🧑‍💻 Maintainers

Wingxtra Aerospace
Engineering & Product Team
