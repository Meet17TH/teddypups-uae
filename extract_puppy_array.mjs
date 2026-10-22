import fs from 'fs';

const fullText = fs.readFileSync('puppies_rsc_full.txt', 'utf8');

// Look for maltipoo-max-male in fullText
const pos = fullText.indexOf('maltipoo-max-male');
console.log('Position of maltipoo-max-male:', pos);

// Let's print 1500 chars around pos
console.log('Snippet around maltipoo-max-male:');
console.log(fullText.slice(Math.max(0, pos - 200), Math.min(fullText.length, pos + 1500)));
