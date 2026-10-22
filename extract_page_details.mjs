import fs from 'fs';

const pages = ['home', 'how-it-works', 'happy-families', 'faq', 'contact', 'gone-home'];
const result = {};

for (const p of pages) {
  const html = fs.readFileSync(`crawled_pages/${p}.html`, 'utf8');
  
  // Extract text within main
  const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
  let mainText = '';
  if (mainMatch) {
    mainText = mainMatch[0]
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
      .replace(/<[^>]+>/g, '\n')
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean)
      .join('\n');
  }
  
  result[p] = mainText;
}

fs.writeFileSync('page_text_extracted.json', JSON.stringify(result, null, 2), 'utf8');
console.log('Extracted main text for all pages!');
