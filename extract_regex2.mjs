import fs from 'fs';

const text = fs.readFileSync('puppies_rsc_full.txt', 'utf8');

const matches = [...text.matchAll(/href":"(\/puppies\/[^"]+)"([\s\S]{1,500}?)aria-label":"([^"]+)"/g)];
console.log(`Found ${matches.length} matches:`);
const list = matches.map(m => ({ href: m[1], aria: m[3] }));
console.log(list);
fs.writeFileSync('extracted_puppies_list.json', JSON.stringify(list, null, 2));
