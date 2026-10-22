import fs from 'fs';

const data = JSON.parse(fs.readFileSync('page_text_extracted.json', 'utf8'));

for (const [page, text] of Object.entries(data)) {
  console.log(`\n=================== ${page.toUpperCase()} ===================`);
  console.log(text.slice(0, 1500));
}
