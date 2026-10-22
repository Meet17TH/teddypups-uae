import fs from 'fs';

const html = fs.readFileSync('crawled_pages/puppies.html', 'utf8');

// Let's inspect the cards in puppies.html
// Looking for puppy card elements, links, titles, images, badges
console.log('HTML length of puppies.html:', html.length);

// Let's write a script that parses the HTML using regex or standard DOM
const links = [...html.matchAll(/href=["'](\/puppies\/[^"']+)["']/g)].map(m => m[1]);
console.log('Puppy detail links on puppies page:', [...new Set(links)]);

// Look for image urls
const images = [...html.matchAll(/src=["'](\/_next\/image\?[^"']+|https:\/\/[^"']+\.(?:jpg|jpeg|png|webp|svg))["']/g)].map(m => m[1]);
console.log('Found', images.length, 'images on puppies page');

// Let's check sections and text in puppies.html
// Check for JSON embedded in the HTML or RSC chunks
const rscLines = [...html.matchAll(/self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)/g)].map(m => m[1]);
console.log(`Found ${rscLines.length} RSC chunks.`);

fs.writeFileSync('rsc_chunks.txt', rscLines.join('\n---\n'));
