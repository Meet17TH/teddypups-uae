import fs from 'fs';

const html = fs.readFileSync('crawled_pages/puppies__maltipoo-max-male.html', 'utf8');

// Search for the JSON object for Max
const rscLines = [...html.matchAll(/self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)/g)].map(m => m[1]);
const fullText = rscLines.join('').replace(/\\"/g, '"').replace(/\\\\/g, '\\');

fs.writeFileSync('max_rsc.txt', fullText, 'utf8');

// Let's search for "Max" in the text
const maxIdx = fullText.indexOf('"Max"');
console.log('Max index in RSC:', maxIdx);
if (maxIdx !== -1) {
  console.log('Context around Max:');
  console.log(fullText.slice(Math.max(0, maxIdx - 500), Math.min(fullText.length, maxIdx + 1500)));
}
