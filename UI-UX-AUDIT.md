# UI/UX Audit — AI MahaShivaratri 2026

**Senior UI/UX Designer perspective**

---

## What’s working well

- **Visual identity** — Cosmic blue, gold, and violet are consistent and on-brand; typography (Cinzel + Poppins) is clear and readable.
- **Hierarchy** — Section labels (uppercase, gold), big headings, and body copy create a clear reading order.
- **Motion** — Scroll reveals and parallax add depth without feeling noisy; skeleton loading improves perceived performance.
- **Mobile** — Touch targets (e.g. 48px), single-column layout, and hidden scroll indicator avoid overlap issues.
- **Structure** — Sections are well separated; glass cards and borders keep content scannable.

---

## Recommendations

### 1. Navigation

| Issue | Recommendation |
|-------|----------------|
| "About Me" exists but isn’t in the nav | Add **About Me** to the nav so the section is discoverable. |
| Logo `href="#"` | Use `href="#"` with `onClick` scroll-to-top, or keep `#` and ensure it scrolls to top for consistency. |
| No active state | Optional: add a subtle indicator (e.g. underline or color) for the section in view (scroll spy). |

### 2. Accessibility

| Issue | Recommendation |
|-------|----------------|
| Focus states | Ensure all links and buttons have a **visible focus ring** (e.g. `focus-visible:ring-2 focus-visible:ring-gold`) for keyboard users. |
| Skip link | Add a **“Skip to main content”** link at the top so keyboard/screen-reader users can jump past the nav. |
| Contrast | Check gold/amber text on dark backgrounds (e.g. `text-gold/90`) against WCAG AA (4.5:1 for normal text). |

### 3. Footer

| Issue | Recommendation |
|-------|----------------|
| Social links use `href="#"` | Replace with real URLs when available, or style as disabled/placeholder and add `aria-disabled` so intent is clear. |
| Logo | Make the footer logo a link to the top of the page (same as header) for consistency. |

### 4. CTAs and external links

| Issue | Recommendation |
|-------|----------------|
| Register opens in new tab | Add a small **external-link icon** (e.g. ↗) so users expect to leave the site. |
| Two primary CTAs | Keeping Hero + Final CTA is fine; ensure both use the same Register URL and styling. |

### 5. Content and clarity

| Issue | Recommendation |
|-------|----------------|
| Event date | Consider showing **Maha Shivaratri 2026** (e.g. date) once prominently (hero or a thin strip) for quick scanning. |
| Timings | You already use “10AM–11AM IST” and “10PM–1AM IST”; keep that consistent everywhere. |

### 6. Polish

| Issue | Recommendation |
|-------|----------------|
| Nav link hover | A thin **underline or gold accent** on hover can make nav feel more responsive. |
| Card hovers | Numbers and Why Historic cards already have hover; keep that pattern for any new cards. |
| Loading | Hero image is above the fold; keep it eager. Lazy load and skeleton for below-fold content are already in place. |

---

## Priority summary

1. **High** — Add “About Me” to nav; add focus-visible styles; add skip link.
2. **Medium** — External-link icon on Register; footer logo links to top; optional scroll spy.
3. **Low** — Real social URLs when ready; explicit event date in one clear place.

---

*Audit date: Feb 2026*
