import fs from 'fs';

const html = fs.readFileSync('crawled_pages/home.html', 'utf8');
const nextDataMatch = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);

if (nextDataMatch) {
  console.log('Found __NEXT_DATA__ in home.html!');
  fs.writeFileSync('next_data_home.json', nextDataMatch[1], 'utf8');
} else {
  console.log('No __NEXT_DATA__ found (might be App Router / RSC or static). Checking for RSC payload...');
  const rscMatches = [...html.matchAll(/self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)/g)];
  console.log(`Found ${rscMatches.length} __next_f chunks`);
}

// Let's also check stylesheets
const cssLinks = [...html.matchAll(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["']/g)].map(m => m[1]);
console.log('CSS links:', cssLinks);
