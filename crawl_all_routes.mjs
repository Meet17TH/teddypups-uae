import fs from 'fs';

const routes = [
  '/',
  '/puppies',
  '/happy-families',
  '/how-it-works',
  '/faq',
  '/contact',
  '/gone-home',
  '/puppies/maltipoo-max-male',
  '/puppies/korean-teacup-maltipoo-female',
  '/puppies/korean-teacup-poodle-female',
  '/puppies/copper-male',
  '/puppies/shitzu-female'
];

async function crawl() {
  if (!fs.existsSync('crawled_pages')) {
    fs.mkdirSync('crawled_pages');
  }

  for (const route of routes) {
    const filename = route === '/' ? 'home' : route.replace(/^\//, '').replace(/\//g, '__');
    console.log(`Fetching ${route} ...`);
    try {
      const res = await fetch(`https://puppy.instabizweb.com${route}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const html = await res.text();
      fs.writeFileSync(`crawled_pages/${filename}.html`, html, 'utf8');
      console.log(`Saved ${filename}.html (${html.length} bytes)`);
    } catch (e) {
      console.error(`Error fetching ${route}:`, e);
    }
  }
}

crawl();
