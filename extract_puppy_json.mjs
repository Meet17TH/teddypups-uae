import fs from 'fs';

const content = fs.readFileSync('rsc_chunks.txt', 'utf8');

// Unescape escaped quotes and newlines
const cleaned = content.replace(/\\"/g, '"').replace(/\\\\/g, '\\');

// Look for puppy records (they usually have slug, name, breed, gender, age, price, origin, etc.)
const slugMatches = [...cleaned.matchAll(/"slug":"([^"]+)"/g)].map(m => m[1]);
console.log('Unique slugs found in RSC:', [...new Set(slugMatches)]);

// Let's find objects that contain "slug"
const objRegex = /\{[^{}]*"slug":"([^"]+)"[^{}]*\}/g;
let match;
const records = [];
while ((match = objRegex.exec(cleaned)) !== null) {
  try {
    const obj = JSON.parse(match[0]);
    records.push(obj);
  } catch (e) {
    // try to slice broader
  }
}

console.log(`Parsed ${records.length} direct objects`);
if (records.length > 0) {
  console.log('Sample record:', records[0]);
}

// Let's search for larger puppy objects
fs.writeFileSync('sample_rsc_slice.txt', cleaned.slice(0, 15000));
