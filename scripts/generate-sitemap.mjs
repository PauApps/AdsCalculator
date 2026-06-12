import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://adsroicalc.com';
const DIST_DIR = './dist';
const TRANSLATIONS_FILE = './src/utils/blog-translations.json';

try {
  // Ensure the dist directory exists (it should, after astro build)
  if (!fs.existsSync(DIST_DIR)) {
    console.error(`Directory ${DIST_DIR} not found. Please run 'npm run build' first.`);
    process.exit(1);
  }

  // Load blog translations
  if (!fs.existsSync(TRANSLATIONS_FILE)) {
    console.error(`Translations file not found at ${TRANSLATIONS_FILE}.`);
    process.exit(1);
  }
  const blogTranslations = JSON.parse(fs.readFileSync(TRANSLATIONS_FILE, 'utf8'));

  const pages = [];

  // 1. Homepages (EN, ES, CA)
  const homeAlternates = [
    { lang: 'en', path: '/' },
    { lang: 'es', path: '/es' },
    { lang: 'ca', path: '/ca' },
    { lang: 'x-default', path: '/' }
  ];
  pages.push(
    { path: '/', priority: '1.0', alternates: homeAlternates },
    { path: '/es', priority: '1.0', alternates: homeAlternates },
    { path: '/ca', priority: '1.0', alternates: homeAlternates }
  );

  // 2. Blog Indexes (EN, ES, CA)
  const blogIndexAlternates = [
    { lang: 'en', path: '/blog' },
    { lang: 'es', path: '/es/blog' },
    { lang: 'ca', path: '/ca/blog' },
    { lang: 'x-default', path: '/blog' }
  ];
  pages.push(
    { path: '/blog', priority: '0.8', alternates: blogIndexAlternates },
    { path: '/es/blog', priority: '0.8', alternates: blogIndexAlternates },
    { path: '/ca/blog', priority: '0.8', alternates: blogIndexAlternates }
  );

  // 3. Contact Pages (EN, ES, CA)
  const contactAlternates = [
    { lang: 'en', path: '/contact' },
    { lang: 'es', path: '/es/contact' },
    { lang: 'ca', path: '/ca/contact' },
    { lang: 'x-default', path: '/contact' }
  ];
  pages.push(
    { path: '/contact', priority: '0.5', alternates: contactAlternates },
    { path: '/es/contact', priority: '0.5', alternates: contactAlternates },
    { path: '/ca/contact', priority: '0.5', alternates: contactAlternates }
  );

  // 4. Privacy Pages (EN, ES, CA)
  const privacyAlternates = [
    { lang: 'en', path: '/privacy' },
    { lang: 'es', path: '/es/privacy' },
    { lang: 'ca', path: '/ca/privacy' },
    { lang: 'x-default', path: '/privacy' }
  ];
  pages.push(
    { path: '/privacy', priority: '0.5', alternates: privacyAlternates },
    { path: '/es/privacy', priority: '0.5', alternates: privacyAlternates },
    { path: '/ca/privacy', priority: '0.5', alternates: privacyAlternates }
  );

  // 5. Cookies Pages (EN, ES, CA)
  const cookiesAlternates = [
    { lang: 'en', path: '/cookies' },
    { lang: 'es', path: '/es/cookies' },
    { lang: 'ca', path: '/ca/cookies' },
    { lang: 'x-default', path: '/cookies' }
  ];
  pages.push(
    { path: '/cookies', priority: '0.5', alternates: cookiesAlternates },
    { path: '/es/cookies', priority: '0.5', alternates: cookiesAlternates },
    { path: '/ca/cookies', priority: '0.5', alternates: cookiesAlternates }
  );

  // 6. Legal Pages (EN, ES, CA)
  const legalAlternates = [
    { lang: 'en', path: '/legal' },
    { lang: 'es', path: '/es/legal' },
    { lang: 'ca', path: '/ca/legal' },
    { lang: 'x-default', path: '/legal' }
  ];
  pages.push(
    { path: '/legal', priority: '0.5', alternates: legalAlternates },
    { path: '/es/legal', priority: '0.5', alternates: legalAlternates },
    { path: '/ca/legal', priority: '0.5', alternates: legalAlternates }
  );

  // 7. Blog Posts dynamically mapped from translations file
  for (const [key, group] of Object.entries(blogTranslations)) {
    const alternates = [];
    if (group.en) alternates.push({ lang: 'en', path: `/blog/${group.en}` });
    if (group.es) alternates.push({ lang: 'es', path: `/es/blog/${group.es}` });
    if (group.ca) alternates.push({ lang: 'ca', path: `/ca/blog/${group.ca}` });
    
    // Add x-default pointing to the English version
    if (group.en) {
      alternates.push({ lang: 'x-default', path: `/blog/${group.en}` });
    }

    if (group.en) {
      pages.push({ path: `/blog/${group.en}`, priority: '0.8', alternates });
    }
    if (group.es) {
      pages.push({ path: `/es/blog/${group.es}`, priority: '0.8', alternates });
    }
    if (group.ca) {
      pages.push({ path: `/ca/blog/${group.ca}`, priority: '0.8', alternates });
    }
  }

  // Generate sitemap XML content
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => {
    // Generate alternate links if available
    const alternates = page.alternates ? page.alternates.map(alt => {
      // Remove trailing slash for base site, but make sure root path translates to SITE_URL/
      const href = alt.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${alt.path}`;
      return `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${href}" />`;
    }).join('\n') : '';

    const locUrl = page.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${page.path}`;

    return `  <url>
    <loc>${locUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
${alternates ? alternates + '\n' : ''}  </url>`;
  }).join('\n')}
</urlset>`;

  // Write sitemap.xml to dist/
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml);
  console.log('✅ sitemap.xml generated successfully in dist/');

  // Generate robots.txt content allowing Googlebot and Mediapartners-Google
  const robotsTxt = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Mediapartners-Google
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

  // Write robots.txt to dist/
  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt);
  console.log('✅ robots.txt generated successfully in dist/');

} catch (err) {
  console.error('❌ Error generating sitemap:', err);
  process.exit(1);
}
