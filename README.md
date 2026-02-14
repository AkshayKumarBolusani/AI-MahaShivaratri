# AI MahaShivaratri 2026

World's First **5000+ AI Generated Telugu Shiva Songs** Movement.

A premium event website built with React, Vite, TailwindCSS, and Framer Motion. Divine, powerful, and futuristic design inspired by Shiva symbolism and Maha Shivaratri aesthetics.

## Tech Stack

- **React 18** + **Vite 5**
- **TailwindCSS** (custom cosmic/Shiva palette)
- **Framer Motion** (scroll animations, parallax, transitions)
- **Google Fonts**: Cinzel (headings), Poppins (body)

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for Production

```bash
npm run build
npm run preview
```

The build outputs to `dist/`. A postbuild step generates `dist/sitemap.xml` using `VERCEL_URL` or `SITE_URL` (if set).

## Deploy on Vercel

1. Push the repo to GitHub and import the project in [Vercel](https://vercel.com).
2. Vercel auto-detects **Vite** and uses:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
3. Optional env var: **`SITE_URL`** – set to your production URL (e.g. `https://yourdomain.com`) to fix sitemap and canonical URLs. If unset, postbuild uses `VERCEL_URL` (your `.vercel.app` URL).
4. After deploy, update `index.html` and `public/robots.txt` with your real domain if you use a custom domain.

## SEO

- **Meta:** title, description, keywords, canonical, theme-color, robots.
- **Open Graph** and **Twitter Card** tags for social previews.
- **JSON-LD:** `Event` and `WebSite` schemas for rich results.
- **robots.txt** in `public/` (copied to `dist/`).
- **sitemap.xml** generated at build time in `dist/`.
- Add a **1200×630 image** at `public/og-image.png` for OG/Twitter previews; update `og:image` and `twitter:image` in `index.html` to your full URL if needed.

## Design

- **Colors**: Cosmic blue (#0B0F2F), Shiva blue (#1E3A8A), Divine violet (#4C1D95), Sacred gold (#FFD700), cyan accent, fire-orange CTA
- **Effects**: Glassmorphism, glow, gradients, parallax hero, floating particles, cursor glow
- **Sections**: Hero, About, Vision, Numbers, How It Works, Why Historic, Final CTA, Footer

## License

For the AI MahaShivaratri event. Use with devotion.

**Om Namah Shivaya**
