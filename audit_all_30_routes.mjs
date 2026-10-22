import fs from 'fs';

const ALL_30_ROUTES = [
  '/',
  '/puppies',
  '/how-it-works',
  '/happy-families',
  '/faq',
  '/contact',
  '/gone-home',
  '/non-existent-page-404-test',
  // All 20 puppy routes
  '/puppies/maltipoo-max-male',
  '/puppies/korean-teacup-maltipoo-female',
  '/puppies/korean-teacup-poodle-female',
  '/puppies/maltipoo-cavapoo-male',
  '/puppies/toy-poodle-male-female',
  '/puppies/maltipoo-female-2',
  '/puppies/pomeranian-female',
  '/puppies/copper-male',
  '/puppies/shitzu-female',
  '/puppies/shitzu-male',
  '/puppies/maltipoo-female-1',
  '/puppies/maltipoo-female',
  '/puppies/korean-teacup-pomeranian-1',
  '/puppies/korean-teacup-pomeranian',
  '/puppies/korean-teacup-pomeranian-male',
  '/puppies/pomeranian-ace-boy',
  '/puppies/poodle-leo-male',
  '/puppies/maltipoo-mia-girl',
  '/puppies/maltipoo-sadie-girl',
  '/puppies/blue-marle-pomeranian'
];

async function audit() {
  const PORT = process.env.PORT || 3000;
  console.log(`Starting audit against http://localhost:${PORT} ...\n`);
  const results = [];
  let successCount = 0;
  let failureCount = 0;

  for (const r of ALL_30_ROUTES) {
    const is404Test = r.includes('404-test');
    const url = `http://localhost:${PORT}${r}`;
    try {
      const res = await fetch(url);
      const html = await res.text();
      
      const expectedStatus = is404Test ? 404 : 200;
      const statusOk = res.status === expectedStatus;

      // Check title
      const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : 'No title tag found';

      // Check content size
      const size = Buffer.byteLength(html, 'utf8');

      if (statusOk && size > 500) {
        successCount++;
        console.log(`✅ [${res.status}] ${r.padEnd(42)} (${size} bytes) - Title: "${title.slice(0, 45)}"`);
        results.push({ route: r, status: res.status, size, title, success: true });
      } else {
        failureCount++;
        console.error(`❌ [${res.status}] ${r} (Expected: ${expectedStatus}, Got: ${res.status}, Size: ${size})`);
        results.push({ route: r, status: res.status, size, title, success: false });
      }
    } catch (err) {
      failureCount++;
      console.error(`❌ [ERR] ${r}: ${err.message}`);
      results.push({ route: r, error: err.message, success: false });
    }
  }

  console.log(`\n========================================`);
  console.log(`AUDIT COMPLETE: ${successCount} PASSED, ${failureCount} FAILED`);
  console.log(`========================================\n`);

  fs.writeFileSync('audit_route_results.json', JSON.stringify({ results, successCount, failureCount }, null, 2));

  if (failureCount > 0) {
    process.exit(1);
  }
}

audit();
