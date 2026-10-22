import fs from 'fs';

const pages = ['home', 'puppies', 'how-it-works', 'happy-families', 'faq', 'contact', 'gone-home'];
const allMedia = new Set();

for (const p of pages) {
  const html = fs.readFileSync(`crawled_pages/${p}.html`, 'utf8');
  const matches = [...html.matchAll(/(?:\/media\/[a-zA-Z0-9_\-\/.]+\.(?:webp|jpg|jpeg|png|mp4)|\/brand\/[a-zA-Z0-9_\-\/.]+\.(?:webp|jpg|jpeg|png|svg))/g)];
  for (const m of matches) {
    allMedia.add(m[0]);
  }
}

// Also check all detail pages
const files = fs.readdirSync('crawled_pages').filter(f => f.startsWith('puppies__'));
for (const f of files) {
  const html = fs.readFileSync(`crawled_pages/${f}`, 'utf8');
  const matches = [...html.matchAll(/(?:\/media\/[a-zA-Z0-9_\-\/.]+\.(?:webp|jpg|jpeg|png|mp4)|\/brand\/[a-zA-Z0-9_\-\/.]+\.(?:webp|jpg|jpeg|png|svg))/g)];
  for (const m of matches) {
    allMedia.add(m[0]);
  }
}

const mediaList = [...allMedia];
console.log(`Found ${mediaList.length} distinct media assets!`);
fs.writeFileSync('media_list.json', JSON.stringify(mediaList, null, 2));
console.log('Sample assets:', mediaList.slice(0, 15));
