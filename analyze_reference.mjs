import fs from 'fs';

const html = fs.readFileSync('reference_home.html', 'utf8');

// Title
const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
console.log('TITLE:', titleMatch ? titleMatch[1] : 'No title');

// Meta description
const metaDesc = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
console.log('META DESC:', metaDesc ? metaDesc[1] : 'No meta desc');

// Internal links
const links = [...html.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
const internalLinks = links.filter(l => 
  l.startsWith('/') || 
  l.includes('puppy.instabizweb.com') ||
  (!l.startsWith('http') && !l.startsWith('#') && !l.startsWith('mailto:') && !l.startsWith('tel:') && !l.startsWith('javascript:'))
);
console.log('UNIQUE INTERNAL LINKS:');
console.log([...new Set(internalLinks)]);

// All nav items / headers
const navMatch = html.match(/<nav[\s\S]*?<\/nav>/gi);
console.log('NAV COUNT:', navMatch ? navMatch.length : 0);
if (navMatch) {
  navMatch.forEach((n, i) => {
    console.log(`--- NAV ${i + 1} ---`);
    console.log(n.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 500));
  });
}

// Headings
const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
const h3s = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());

console.log('H1s:', h1s);
console.log('H2s:', h2s);
console.log('H3s:', h3s);

// Check for phone, email, address, logo
const emails = [...html.matchAll(/mailto:([^\s"'>]+)/gi)].map(m => m[1]);
const phones = [...html.matchAll(/tel:([^\s"'>]+)/gi)].map(m => m[1]);
console.log('Emails:', [...new Set(emails)]);
console.log('Phones:', [...new Set(phones)]);

// Check stylesheet fonts
const googleFonts = [...html.matchAll(/href=["'](https:\/\/fonts\.googleapis\.com\/[^"']+)["']/g)].map(m => m[1]);
console.log('Google Fonts:', googleFonts);
