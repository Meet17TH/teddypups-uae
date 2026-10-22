import fs from 'fs';

const css0 = fs.readFileSync('reference_style_0.css', 'utf8');
const css1 = fs.readFileSync('reference_style_1.css', 'utf8');

console.log('--- CSS 0 ---');
console.log(css0.slice(0, 1000));

// Find root variables
const rootVars = css1.match(/:root\s*\{([^}]+)\}/);
if (rootVars) {
  console.log('--- ROOT VARS ---');
  console.log(rootVars[1]);
}

// Find font-family declarations
const fontFamilies = [...css1.matchAll(/font-family:[^;]+/g)].map(m => m[0]);
console.log('--- FONT FAMILIES ---');
console.log([...new Set(fontFamilies)]);

// Check for color keywords or custom themes
const customColors = [...css1.matchAll(/--[a-zA-Z0-9_-]+:[^;]+/g)].map(m => m[0]);
console.log('--- CSS VARIABLES ---');
console.log([...new Set(customColors)].slice(0, 30));
