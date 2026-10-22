import fs from 'fs';

const text = fs.readFileSync('puppies_rsc_full.txt', 'utf8');

// Match href="/puppies/..." with aria-label
const regex = /href":"(\/puppies\/[^"]+)","className":"tp-sketch"[^}]*"aria-label":"([^"]+)"/g;
let m;
const puppies = [];
while ((m = regex.exec(text)) !== null) {
  puppies.push({
    href: m[1],
    slug: m[1].replace('/puppies/', ''),
    ariaLabel: m[2]
  });
}

console.log(`Found ${puppies.length} puppies from aria-labels:`);
console.log(puppies);
