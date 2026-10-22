import fs from 'fs';

const data = JSON.parse(fs.readFileSync('all_puppies_extracted.json', 'utf8'));
console.log('Sample puppy 0:');
console.log(JSON.stringify(data[0], null, 2));

console.log('Sample puppy 1:');
console.log(JSON.stringify(data[1], null, 2));
