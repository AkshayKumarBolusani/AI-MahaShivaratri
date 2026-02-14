/**
 * Post-build: generate sitemap.xml with correct base URL (Vercel or local).
 * Run after `vite build`. Sitemap is written to dist/sitemap.xml.
 */
import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const distPath = join(__dirname, '..', 'dist')

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.SITE_URL || 'https://ai-mahashivaratri.vercel.app'

const pages = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
]

const lastmod = new Date().toISOString().split('T')[0]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${baseUrl}${p.path ? `/${p.path}` : ''}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

try {
  if (existsSync(distPath)) {
    writeFileSync(join(distPath, 'sitemap.xml'), sitemap, 'utf8')
    console.log('Generated dist/sitemap.xml with base URL:', baseUrl)
  } else {
    console.warn('dist/ not found; sitemap not generated.')
  }
} catch (err) {
  console.warn('Postbuild sitemap warning:', err.message)
}
