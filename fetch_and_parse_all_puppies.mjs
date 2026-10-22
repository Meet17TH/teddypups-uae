import fs from 'fs';

const puppiesList = JSON.parse(fs.readFileSync('extracted_puppies_list.json', 'utf8'));

async function fetchPuppyDetails() {
  const allPuppies = [];

  for (const item of puppiesList) {
    const slug = item.href.replace('/puppies/', '');
    console.log(`Processing ${slug}...`);
    let html = '';
    const cachedFile = `crawled_pages/puppies__${slug}.html`;
    
    if (fs.existsSync(cachedFile)) {
      html = fs.readFileSync(cachedFile, 'utf8');
    } else {
      try {
        const res = await fetch(`https://puppy.instabizweb.com${item.href}`, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          }
        });
        html = await res.text();
        fs.writeFileSync(cachedFile, html, 'utf8');
      } catch (err) {
        console.error(`Error fetching ${slug}:`, err);
        continue;
      }
    }

    // Extract RSC chunks to get structured data
    const rscLines = [...html.matchAll(/self\.__next_f\.push\(\[1,"([\s\S]*?)"\]\)/g)].map(m => m[1]);
    const rscText = rscLines.join('').replace(/\\"/g, '"').replace(/\\\\/g, '\\');

    // Extract images/media
    const mediaMatches = [...rscText.matchAll(/\{"id":"([^"]+)","url":"([^"]+)","kind":"([^"]+)","width":(\d+),"height":(\d+),"alt":"([^"]*)","caption":"([^"]*)","focalX":([0-9.]+),"focalY":([0-9.]+),"color":"([^"]*)"(?:,"blurDataUrl":"([^"]*)")?(?:,"durationS":([0-9.]+))?(?:,"poster":(\{[^}]+\}))?/g)];
    
    const media = mediaMatches.map(m => ({
      id: m[1],
      url: m[2],
      kind: m[3],
      width: parseInt(m[4]),
      height: parseInt(m[5]),
      alt: m[6],
      caption: m[7],
      focalX: parseFloat(m[8]),
      focalY: parseFloat(m[9]),
      color: m[10],
      blurDataUrl: m[11] || null
    }));

    // Extract puppy name, breed, sex, age, origin, status, price, description
    // Let's parse details from HTML/RSC
    const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
    const title = titleMatch ? titleMatch[1].split('—')[0].trim() : slug;

    // Look for description in meta
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
    const description = descMatch ? descMatch[1] : '';

    // Check for origin, tags, badges in rscText
    const isImported = rscText.includes('"Imported"') || slug.includes('korean');
    const isLocal = rscText.includes('"In Dubai"') || rscText.includes('"Downtown Dubai"');

    allPuppies.push({
      slug,
      href: item.href,
      ariaLabel: item.aria,
      title,
      description,
      media,
      isImported,
      isLocal,
      status: item.aria.includes('gone home') ? 'gone-home' : 'available'
    });
  }

  fs.writeFileSync('all_puppies_extracted.json', JSON.stringify(allPuppies, null, 2), 'utf8');
  console.log(`Saved ${allPuppies.length} puppies to all_puppies_extracted.json`);
}

fetchPuppyDetails();
