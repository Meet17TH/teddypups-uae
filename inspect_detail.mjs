import fs from 'fs';

// Let's inspect crawled_pages/puppies.html to get all puppy cards
const puppiesHtml = fs.readFileSync('crawled_pages/puppies.html', 'utf8');

// Also inspect a detail page
const maltipooHtml = fs.readFileSync('crawled_pages/puppies__maltipoo-max-male.html', 'utf8');

console.log('Maltipoo Max detail sample:');
// Search for headings, paragraphs, specs
const h1 = maltipooHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
console.log('Detail H1:', h1 ? h1[1].replace(/<[^>]+>/g, '').trim() : 'None');

// Find all text inside main
const mainMatch = maltipooHtml.match(/<main[\s\S]*?<\/main>/i);
if (mainMatch) {
  const mainText = mainMatch[0].replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  console.log('Detail Main Text snippet:', mainText.slice(0, 1000));
}

// Find images in detail page
const detailImages = [...maltipooHtml.matchAll(/src=["']([^"']+\.(?:jpg|jpeg|png|webp))["']/gi)].map(m => m[1]);
console.log('Detail images:', detailImages);

// Check if Next.js image URLs are used
const nextImages = [...maltipooHtml.matchAll(/url=([^&"']+)/gi)].map(m => decodeURIComponent(m[1]));
console.log('Next Image decoded URLs:', [...new Set(nextImages)]);
