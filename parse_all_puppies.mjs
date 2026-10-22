import fs from 'fs';

const puppiesHtml = fs.readFileSync('crawled_pages/puppies.html', 'utf8');

// The RSC chunks contain the list of puppies passed as props!
// Let's search for the list of puppy cards or objects.
const rscLines = [...puppiesHtml.matchAll(/self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)/g)].map(m => m[1]);
const fullText = rscLines.join('').replace(/\\"/g, '"').replace(/\\\\/g, '\\');

fs.writeFileSync('puppies_rsc_full.txt', fullText, 'utf8');
console.log('Saved puppies_rsc_full.txt, length:', fullText.length);

// Let's find patterns like {"id":..., "slug":..., "name":...} or similar
const puppyCardMatches = [...fullText.matchAll(/\{"id":"([^"]+)","slug":"([^"]+)","name":"([^"]+)"([\s\S]*?)\}/g)];
console.log(`Found ${puppyCardMatches.length} puppy cards via basic pattern`);

// Let's find all occurrences of "slug":"
const allSlugs = [...fullText.matchAll(/"slug":"([a-z0-9-]+)"/g)].map(m => m[1]);
console.log('Slugs:', [...new Set(allSlugs)]);
