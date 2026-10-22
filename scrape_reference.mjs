import fs from 'fs';

async function fetchSite() {
  console.log('Fetching https://puppy.instabizweb.com/ ...');
  try {
    const res = await fetch('https://puppy.instabizweb.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    console.log('Response status:', res.status, res.statusText);
    const html = await res.text();
    console.log('HTML length:', html.length);
    fs.writeFileSync('reference_home.html', html, 'utf8');

    // Extract links, images, titles, meta tags
    const links = [...html.matchAll(/href=["']([^"']+)["']/g)].map(m => m[1]);
    const imgs = [...html.matchAll(/src=["']([^"']+)["']/g)].map(m => m[1]);
    
    fs.writeFileSync('extracted_links.json', JSON.stringify({
      links: [...new Set(links)],
      images: [...new Set(imgs)]
    }, null, 2));

    console.log(`Found ${links.length} total hrefs, ${imgs.length} total srcs`);
  } catch (err) {
    console.error('Fetch error:', err);
  }
}

fetchSite();
