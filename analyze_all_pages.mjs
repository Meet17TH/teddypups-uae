import fs from 'fs';

const pages = ['home', 'how-it-works', 'happy-families', 'faq', 'contact', 'gone-home'];

for (const p of pages) {
  const html = fs.readFileSync(`crawled_pages/${p}.html`, 'utf8');
  console.log(`\n================== PAGE: ${p.toUpperCase()} ==================`);
  
  // Title
  const title = html.match(/<title>([^<]*)<\/title>/i);
  console.log('Title:', title ? title[1] : 'None');

  // H1, H2, H3
  const h1 = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  const h2 = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  const h3 = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  
  console.log('H1:', h1);
  console.log('H2:', h2);
  console.log('H3:', h3);
}
