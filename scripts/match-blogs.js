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
      pubDate: data.pubDate || '',
      size: content.length
    };
  });
}

const esPosts = readDir(esDir);
const enPosts = readDir(enDir);
const caPosts = readDir(caDir);

console.log(`Loaded ${esPosts.length} ES posts, ${enPosts.length} EN posts, ${caPosts.length} CA posts.`);

const esByDate = {};
esPosts.forEach(p => {
  const dateStr = String(p.pubDate).trim();
  if (!esByDate[dateStr]) esByDate[dateStr] = [];
  esByDate[dateStr].push(p);
});

const enByDate = {};
enPosts.forEach(p => {
  const dateStr = String(p.pubDate).trim();
  if (!enByDate[dateStr]) enByDate[dateStr] = [];
  enByDate[dateStr].push(p);
});

const caByDate = {};
caPosts.forEach(p => {
  const dateStr = String(p.pubDate).trim();
  if (!caByDate[dateStr]) caByDate[dateStr] = [];
  caByDate[dateStr].push(p);
});

console.log('\n--- MATCHING BY DATE ---');
const dates = Array.from(new Set([...Object.keys(esByDate), ...Object.keys(enByDate), ...Object.keys(caByDate)])).sort();

dates.forEach(date => {
  const esList = esByDate[date] || [];
  const enList = enByDate[date] || [];
  const caList = caByDate[date] || [];

  console.log(`\nDate: ${date} (ES: ${esList.length}, EN: ${enList.length}, CA: ${caList.length})`);
  
  if (esList.length === 1 && enList.length === 1 && caList.length === 1) {
    console.log(`  Perfect Match!`);
    console.log(`    ES: ${esList[0].slug}`);
    console.log(`    EN: ${enList[0].slug}`);
    console.log(`    CA: ${caList[0].slug}`);
  } else {
    console.log('  ES posts:');
    esList.forEach(p => console.log(`    - ${p.slug} [${p.size} bytes] "${p.title}"`));
    console.log('  EN posts:');
    enList.forEach(p => console.log(`    - ${p.slug} [${p.size} bytes] "${p.title}"`));
    console.log('  CA posts:');
    caList.forEach(p => console.log(`    - ${p.slug} [${p.size} bytes] "${p.title}"`));
  }
});
