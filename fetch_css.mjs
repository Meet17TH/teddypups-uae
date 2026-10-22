import fs from 'fs';

async function fetchCss() {
  const cssUrls = [
    'https://puppy.instabizweb.com/_next/static/chunks/2gh-2btcjgkih.css',
    'https://puppy.instabizweb.com/_next/static/chunks/10jf32vdx50lp.css'
  ];

  for (let i = 0; i < cssUrls.length; i++) {
    const res = await fetch(cssUrls[i]);
    const css = await res.text();
    fs.writeFileSync(`reference_style_${i}.css`, css, 'utf8');
    console.log(`Saved reference_style_${i}.css (${css.length} chars)`);
  }
}

fetchCss();
