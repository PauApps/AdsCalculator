import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://adsroicalc.com';
const DIST_DIR = './dist';

// Define the pages to include in the sitemap
const pages = [
  '',
  '/ca',
  '/blog',
  '/ca/blog',
  '/blog/que-es-el-roas',
  '/ca/blog/que-es-el-roas'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${SITE_URL}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === '' || page === '/ca' ? '1.0' : '0.8'}</priority>
    </url>`).join('')}
</urlset>`;

try {
  // Ensure the dist directory exists (it should, after astro build)
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`Directory ${DIST_DIR} not found. Please run 'npm run build' first.`);
    process.exit(1);
  }

  // Write sitemap.xml to dist
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemap);
  console.log('✅ sitemap.xml generated successfully in dist/');

  // Also write robots.txt in case it wasn't copied
  const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml`;
  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt);
  console.log('✅ robots.txt generated successfully in dist/');

} catch (err) {
  console.error('❌ Error generating sitemap:', err);
  process.exit(1);
}
