import fs from 'fs';

const css = fs.readFileSync('reference_style_1.css', 'utf8');

const colorMatches = [...css.matchAll(/--color-([a-zA-Z0-9_-]+):\s*([^;]+);/g)];
console.log('Colors found:');
for (const m of colorMatches) {
  console.log(`--color-${m[1]}: ${m[2]}`);
}

const fontMatches = [...css.matchAll(/--font-([a-zA-Z0-9_-]+):\s*([^;]+);/g)];
console.log('\nFonts found:');
for (const m of fontMatches) {
  console.log(`--font-${m[1]}: ${m[2]}`);
}
