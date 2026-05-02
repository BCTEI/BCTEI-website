# مركز البنيان للتقنية والصناعات الهندسية

# Al-Bunyan Center for Technology and Engineering Industries (BCTEI)

> Official informational website for **Al-Bunyan Center for Technology and Engineering Industries**, under the Libyan Ministry of Defense — built with Next.js and deployed on **Libyan Spider** shared hosting via `my.libyanspider`.

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Page Sections](#-page-sections)
- [Local Development](#-local-development)
- [Production Build](#-production-build)
- [Deployment on Libyan Spider (my.libyanspider)](#-deployment-on-libyan-spider-mylibyanspider)
- [Environment & Configuration](#-environment--configuration)
- [Scripts Reference](#-scripts-reference)
- [License](#-license)

---

## 🏛️ Project Overview

This is the official **landing/informational website** for Al-Bunyan Center for Technology and Engineering Industries (BCTEI) — a center affiliated with the **Libyan Ministry of Defense**, located in **Misurata, Libya**.

The website is a fully **Arabic-language, RTL-first** single-page application presenting the center's identity, services, and contact information. It is built as a **static export** of a Next.js application for seamless deployment on shared hosting.

**Key characteristics:**

- 🌍 **Language:** Arabic (العربية) — RTL layout
- 🏗️ **Type:** Static single-page website (SPA)
- 📱 **Responsive:** Mobile-first, fully responsive across all screen sizes
- 🎨 **Font:** Cairo (Google Fonts) — supports Arabic & Latin scripts

---

## 🛠️ Technology Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | [Next.js](https://nextjs.org/) | 16.2.4 |
| **Language** | TypeScript | 5.7.3 |
| **UI Runtime** | React / React DOM | ^19 |
| **Styling** | Tailwind CSS v4 | ^4.2.0 |
| **Component Library** | [shadcn/ui](https://ui.shadcn.com/) (New York style) | latest |
| **Icons** | [Lucide React](https://lucide.dev/) | ^0.564.0 |
| **Forms** | React Hook Form + Zod | ^7.54.1 / ^3.24.1 |
| **Font** | Cairo (Google Fonts via next/font) | — |
| **Package Manager** | pnpm *(or bun)* | — |
| **Analytics** | Vercel Analytics | 1.6.1 |

### UI Primitives (Radix UI)

The project uses a complete set of **Radix UI** headless primitives including: Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu, Navigation Menu, Popover, Select, Tabs, Toast, Tooltip, and more — all styled through shadcn/ui.

---

## 📁 Project Structure

```
BCTEI-website/
│
├── app/                          # Next.js App Router root
│   ├── globals.css               # Global CSS (Tailwind base + animations)
│   ├── layout.tsx                # Root layout — sets lang="ar" dir="rtl", Cairo font
│   └── page.tsx                  # Homepage — assembles all page sections
│
├── components/                   # Application components
│   ├── header.tsx                # Sticky navigation header with mobile menu
│   ├── hero-section.tsx          # Hero / landing section with logo and CTA
│   ├── about-section.tsx         # About the center — mission, vision, values
│   ├── services-section.tsx      # Services grid (6 service cards)
│   ├── projects-section.tsx      # Stats banner + featured projects
│   ├── contact-section.tsx       # Contact form + contact info cards + map
│   ├── footer.tsx                # Site footer with links and copyright
│   ├── theme-provider.tsx        # next-themes provider wrapper
│   │
│   ├── icons/                    # Custom SVG icon components
│   │   ├── gear-icon.tsx         # Animated gear SVG (hero background)
│   │   └── circuit-lines.tsx     # Circuit board lines SVG (hero decoration)
│   │
│   └── ui/                       # shadcn/ui component library (57 components)
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── form.tsx
│       └── ...                   # All other Radix-backed UI primitives
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts             # Breakpoint detection hook
│   └── use-toast.ts              # Toast notification hook
│
├── lib/                          # Utility functions
│   └── utils.ts                  # cn() helper (clsx + tailwind-merge)
│
├── public/                       # Static assets (served at root URL)
│   ├── logo-full.png             # Full horizontal logo
│   ├── logo-circle.png           # Circular logo variant
│   ├── logo-icon.png             # Icon-only logo (header/footer)
│   ├── icon.svg                  # Browser tab icon (SVG)
│   ├── icon-dark-32x32.png       # Favicon (dark)
│   ├── icon-light-32x32.png      # Favicon (light)
│   └── apple-icon.png            # Apple touch icon
│
├── styles/
│   └── globals.css               # Additional global styles
│
├── components.json               # shadcn/ui CLI configuration
├── next.config.mjs               # Next.js config (unoptimized images, TS errors ignored)
├── tsconfig.json                 # TypeScript config (strict mode, @/* path alias)
├── postcss.config.mjs            # PostCSS config for Tailwind CSS v4
├── package.json                  # Dependencies and scripts
└── .gitignore                    # Ignores node_modules, .next, .vercel, .env*.local
```

---

## 📄 Page Sections

The single-page layout (`app/page.tsx`) is composed of these sections in order:

| # | Component | Anchor | Description |
|---|---|---|---|
| 1 | `Header` | — | Fixed sticky navbar with logo, desktop nav links, and responsive mobile hamburger menu |
| 2 | `HeroSection` | `#home` | Full-viewport hero with animated gear background, circuit line decorations, logo, and CTA buttons |
| 3 | `AboutSection` | `#about` | Circular logo with decorative animation, and mission / vision / values feature cards |
| 4 | `ServicesSection` | `#services` | 6-card grid: Engineering Manufacturing, Maintenance & Repair, Technical Solutions, Security Systems, Engineering Consulting, Modernization & Development |
| 5 | `ProjectsSection` | `#projects` | Key statistics banner + 3 featured project cards on a gradient dark background |
| 6 | `ContactSection` | `#contact` | Contact form (name, email, phone, subject, message) + 4 info cards (phone, email, address, hours) + map placeholder |
| 7 | `Footer` | — | Dark footer with logo, quick links column, contact info column, and copyright bar |

---

## 💻 Local Development

### Prerequisites

- **Node.js** ≥ 18.x
- **pnpm** (recommended) or **bun** or **npm**

### Setup

```bash
# 1. Clone the repository
git clone <repository-url>
cd BCTEI-website

# 2. Install dependencies
pnpm install
# or
bun install

# 3. Start the development server
pnpm dev
# or
bun dev
```

The app will be available at **<http://localhost:3000>**

---

## 🏗️ Production Build

Next.js is configured with `images: { unoptimized: true }` to support static/shared hosting. To generate the production output:

```bash
# Build for production
pnpm build

# Preview the production build locally
pnpm start
```

> **Note:** For static export deployment (e.g., shared hosting), you may need to add `output: 'export'` to `next.config.mjs` — see the deployment section below.

---

## 🚀 Deployment on Libyan Spider (`my.libyanspider`)

Libyan Spider shared hosting runs **Apache/cPanel** and serves static files. Follow these steps to deploy.

### Step 1 — Enable Static Export

Edit `next.config.mjs`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // ← Add this line
  trailingSlash: true,     // ← Recommended for cPanel compatibility
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,     // ← Required for static export
  },
}

export default nextConfig
```

### Step 2 — Build the Static Export

```bash
pnpm build
```

This generates an **`out/`** directory containing all static HTML, CSS, JS, and assets — ready for upload.

### Step 3 — Upload to Libyan Spider via cPanel File Manager

1. Log in to **`my.libyanspider`** → cPanel
2. Open **File Manager**
3. Navigate to **`public_html/`** (or your domain's document root)
4. **Upload** the entire contents of the `out/` folder into `public_html/`
   - You can zip `out/` first, upload the zip, then extract it in File Manager

   ```
   public_html/
   ├── index.html
   ├── _next/
   │   └── static/
   │       ├── css/
   │       └── chunks/
   └── [all other static assets]
   ```

### Step 4 — Configure `.htaccess` (Apache Rewrite Rules)

Create or update `public_html/.htaccess` to handle routing correctly:

```apache
Options -MultiViews
RewriteEngine On

# Handle trailing slashes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /$1/ [L,R=301]

# Serve index.html for directory requests
DirectoryIndex index.html

# Security headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Step 5 — Alternative Upload via FTP

If using an FTP client (e.g., FileZilla):

| Setting | Value |
|---|---|
| **Host** | your-domain.ly (or the FTP hostname from cPanel) |
| **Port** | 21 |
| **Protocol** | FTP or FTPS |
| **Username** | Your cPanel username |
| **Password** | Your cPanel password |
| **Remote directory** | `/public_html/` |

Upload all contents of `out/` into `/public_html/`.

### Step 6 — Verify Deployment

Visit your domain and confirm:

- [ ] Homepage loads correctly with Arabic RTL text
- [ ] Logo images display properly
- [ ] Navigation anchor links scroll smoothly
- [ ] Contact form renders (note: form submission requires a backend or third-party service)
- [ ] Mobile menu works on small screens
- [ ] Favicon appears in the browser tab

---

## ⚙️ Environment & Configuration

This project currently has **no environment variables** required for the static build. All content is hardcoded in components.

If you add dynamic features (e.g., contact form submission via API), create a `.env.local` file:

```env
# Example — not required for current static build
NEXT_PUBLIC_CONTACT_API_URL=https://your-api-endpoint.com
```

> `.env*.local` files are gitignored and must never be committed.

### Key Configuration Files

| File | Purpose |
|---|---|
| `next.config.mjs` | Next.js build settings — image optimization disabled, TS errors ignored in build |
| `tsconfig.json` | Strict TypeScript, `@/*` path alias maps to project root |
| `components.json` | shadcn/ui CLI config — New York style, neutral base color, CSS variables |
| `postcss.config.mjs` | PostCSS with `@tailwindcss/postcss` plugin for Tailwind v4 |
| `app/globals.css` | Tailwind directives, CSS custom properties (design tokens), and custom animations |

---

## 📜 Scripts Reference

| Script | Command | Description |
|---|---|---|
| **Development** | `pnpm dev` | Starts Next.js dev server at `localhost:3000` with hot reload |
| **Build** | `pnpm build` | Compiles and generates production output (or `out/` with static export) |
| **Start** | `pnpm start` | Serves the production build locally (not for static export) |
| **Lint** | `pnpm lint` | Runs ESLint across the project |

---

## 📦 Adding shadcn/ui Components

New UI components can be added using the shadcn/ui CLI:

```bash
# Example: add a new component
pnpm dlx shadcn@latest add [component-name]
```

Components are installed into `components/ui/`.

---

## 🗂️ Asset Guidelines

All static assets go in the `public/` directory and are referenced with a leading `/`:

```tsx
// ✅ Correct
<Image src="/logo-full.png" ... />

// ❌ Incorrect
<Image src="./public/logo-full.png" ... />
```

| Asset | Usage |
|---|---|
| `logo-full.png` | Hero section main logo |
| `logo-circle.png` | About section decorative logo |
| `logo-icon.png` | Header & footer compact logo |
| `icon.svg` | Browser favicon (SVG) |
| `apple-icon.png` | iOS home screen icon |

---

## 📄 License

MIT License — Copyright (c) 2026 BCTEI

See [LICENSE](./LICENSE) for full terms.

---

<div align="center">
  <sub>مركز البنيان للتقنية والصناعات الهندسية — وزارة الدفاع — مصراته، ليبيا</sub>
  <br/>
  <sub>Al-Bunyan Center for Technology and Engineering Industries — Ministry of Defense — Misurata, Libya</sub>
</div>
