import fs from 'fs';
import path from 'path';

function parseFrontMatter(content) {
  const lines = content.split('\n');
  const frontmatter = {};
  let inYaml = false;
  let bodyLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === '---') {
      if (!inYaml) {
        inYaml = true;
      } else {
        inYaml = false;
        bodyLines = lines.slice(i + 1);
        break;
      }
    } else if (inYaml) {
      const match = lines[i].match(/^([^:]+):(.*)$/);
      if (match) {
        const key = match[1].trim();
        let value = match[2].trim();
        if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        } else if (value.startsWith("'") && value.endsWith("'")) {
          value = value.slice(1, -1);
        }
        frontmatter[key] = value;
      }
    }
  }

  return { data: frontmatter, content: bodyLines.join('\n') };
}

const esDir = 'src/content/blog/es';
const enDir = 'src/content/blog/en';
const caDir = 'src/content/blog/ca';

function readDir(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.md')).map(file => {
    const filePath = path.join(dir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = parseFrontMatter(content);
    return {
      file,
      slug: file.replace('.md', ''),
      title: data.title || '',
      pubDate: String(data.pubDate || data.date || data.pubdate || '').trim(),
      size: content.length,
      content
    };
  });
}

const esPosts = readDir(esDir);
const enPosts = readDir(enDir);
const caPosts = readDir(caDir);

console.log(`Loaded: ES=${esPosts.length}, EN=${enPosts.length}, CA=${caPosts.length}`);

// Load existing hardcoded mappings first (these are the baseline 4 posts)
const baselineMappings = {
  "breakeven-roas": {
    "en": "breakeven-roas",
    "es": "roas-de-punto-de-equilibrio",
    "ca": "roas-de-punt-de-equilibri"
  },
  "performance-vs-growth": {
    "en": "performance-vs-growth",
    "es": "performance-vs-growth",
    "ca": "performance-vs-growth"
  },
  "roi-mistakes": {
    "en": "roi-mistakes",
    "es": "errores-roi-ads",
    "ca": "errors-roi-ads"
  },
  "what-is-roas": {
    "en": "what-is-roas",
    "es": "que-es-el-roas",
    "ca": "que-es-el-roas"
  }
};

const mappings = {};
const mappedES = new Set();
const mappedEN = new Set();
const mappedCA = new Set();

// 1. Add baseline mappings
Object.keys(baselineMappings).forEach(key => {
  const m = baselineMappings[key];
  mappings[m.es] = m;
  mappedES.add(m.es);
  mappedEN.add(m.en);
  mappedCA.add(m.ca);
});

// Helper to calculate string similarity (simple word overlap)
function wordOverlap(str1, str2) {
  const words1 = new Set(str1.toLowerCase().replace(/[^a-z0-9\s-]/g, '').split(/[\s-]+/));
  const words2 = new Set(str2.toLowerCase().replace(/[^a-z0-9\s-]/g, '').split(/[\s-]+/));
  let intersection = 0;
  words1.forEach(w => {
    if (words2.has(w)) intersection++;
  });
  return intersection;
}

// 2. Map the rest by date and similarity
esPosts.forEach(es => {
  if (mappedES.has(es.slug)) return; // Already mapped

  const date = es.pubDate;
  
  // Find candidates for EN and CA on the same date that are not yet mapped
  const enCandidates = enPosts.filter(p => p.pubDate === date && !mappedEN.has(p.slug));
  const caCandidates = caPosts.filter(p => p.pubDate === date && !mappedCA.has(p.slug));

  let chosenEN = null;
  let chosenCA = null;

  if (enCandidates.length === 1) {
    chosenEN = enCandidates[0];
  } else if (enCandidates.length > 1) {
    // Rank by slug similarity to the ES slug
    enCandidates.sort((a, b) => {
      const simA = wordOverlap(es.slug, a.slug);
      const simB = wordOverlap(es.slug, b.slug);
      if (simA !== simB) return simB - simA;
      return b.size - a.size; // fallback to size
    });
    chosenEN = enCandidates[0];
  }

  if (caCandidates.length === 1) {
    chosenCA = caCandidates[0];
  } else if (caCandidates.length > 1) {
    // Rank by slug similarity to the ES slug
    caCandidates.sort((a, b) => {
      const simA = wordOverlap(es.slug, a.slug);
      const simB = wordOverlap(es.slug, b.slug);
      if (simA !== simB) return simB - simA;
      return b.size - a.size;
    });
    chosenCA = caCandidates[0];
  }

  const key = es.slug;
  mappings[key] = {
    en: chosenEN ? chosenEN.slug : '',
    es: es.slug,
    ca: chosenCA ? chosenCA.slug : ''
  };

  mappedES.add(es.slug);
  if (chosenEN) mappedEN.add(chosenEN.slug);
  if (chosenCA) mappedCA.add(chosenCA.slug);
});

// Identify any missing or unmapped
const missingEN = esPosts.filter(p => !mappings[p.slug] || !mappings[p.slug].en);
const missingCA = esPosts.filter(p => !mappings[p.slug] || !mappings[p.slug].ca);

console.log(`\nMissing EN translations: ${missingEN.length}`);
missingEN.forEach(p => console.log(`  - ${p.pubDate}: ${p.slug}`));

console.log(`\nMissing CA translations: ${missingCA.length}`);
missingCA.forEach(p => console.log(`  - ${p.pubDate}: ${p.slug}`));

// Unmapped EN and CA files
const unmappedEN = enPosts.filter(p => !mappedEN.has(p.slug));
const unmappedCA = caPosts.filter(p => !mappedCA.has(p.slug));

console.log(`\nUnmapped EN files: ${unmappedEN.length}`);
unmappedEN.forEach(p => console.log(`  - ${p.file} (${p.size} bytes)`));

console.log(`\nUnmapped CA files: ${unmappedCA.length}`);
unmappedCA.forEach(p => console.log(`  - ${p.file} (${p.size} bytes)`));

// Save mappings to official file
fs.writeFileSync('src/utils/blog-translations.json', JSON.stringify(mappings, null, 2));
console.log('\nWrote official mappings to src/utils/blog-translations.json');
