const routes = [
  '/',
  '/puppies',
  '/puppies/maltipoo-max-male',
  '/puppies/korean-teacup-maltipoo-female',
  '/how-it-works',
  '/happy-families',
  '/faq',
  '/contact',
  '/gone-home',
  '/brand/logo.png',
  '/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp'
];

async function testAll() {
  console.log('Testing local Next.js server on http://localhost:3000 ...\n');
  let allOk = true;

  for (const r of routes) {
    try {
      const url = `http://localhost:3000${r}`;
      const res = await fetch(url);
      const isOk = res.status === 200;
      if (!isOk) allOk = false;
      const buf = await res.arrayBuffer();
      console.log(`[${res.status} ${res.statusText}] ${r} (${buf.byteLength} bytes)`);
    } catch (e) {
      allOk = false;
      console.error(`[ERROR] ${r}: ${e.message}`);
    }
  }

  if (allOk) {
    console.log('\n>>> ALL 11 ROUTES & ASSETS RETURNED 200 OK! <<<');
  } else {
    console.log('\n>>> SOME ROUTES FAILED! <<<');
    process.exit(1);
  }
}

testAll();
