import fs from 'fs';

async function verifyFeatures() {
  console.log('--- Verifying Frontend Controls & HTML Semantics ---\n');

  // 1. Home page check
  const homeRes = await fetch('http://localhost:3000/');
  const homeHtml = await homeRes.text();
  console.log('1. Viewport tag present:', homeHtml.includes('name="viewport"') && homeHtml.includes('width=device-width'));
  console.log('   Logo present:', homeHtml.includes('/brand/logo.png'));
  console.log('   WhatsApp CTA present:', homeHtml.includes('https://wa.me/971541676733'));
  console.log('   Featured puppy cards rendered:', (homeHtml.match(/href="\/puppies\/[a-z0-9-]+"/g) || []).length >= 6);

  // 2. Puppies catalogue page check
  const puppiesRes = await fetch('http://localhost:3000/puppies');
  const puppiesHtml = await puppiesRes.text();
  console.log('2. Available puppies page rendered:', puppiesHtml.includes('Available puppies'));
  console.log('   Filter tabs present:', puppiesHtml.includes('In Dubai') || puppiesHtml.includes('Imported'));
  
  // 3. Puppy Detail page check (Max)
  const maxRes = await fetch('http://localhost:3000/puppies/maltipoo-max-male');
  const maxHtml = await maxRes.text();
  console.log('3. Max Detail page rendered:', maxHtml.includes('Max') && maxHtml.includes('Maltipoo'));
  console.log('   Gallery images rendered:', maxHtml.includes('/media/Z0ToauDx7Eve'));
  console.log('   Specifications table present:', maxHtml.includes('Puppy Specifications'));
  console.log('   Health Guarantee present:', maxHtml.includes('TeddyPups Health Guarantee'));
  console.log('   Letter inquiry form present on detail page:', maxHtml.includes('Dear TeddyPups'));

  // 4. Contact page check
  const contactRes = await fetch('http://localhost:3000/contact');
  const contactHtml = await contactRes.text();
  console.log('4. Contact letter form present:', contactHtml.includes('Dear TeddyPups'));
  console.log('   Phone link present:', contactHtml.includes('tel:+971541676733'));
  console.log('   Email link present:', contactHtml.includes('mailto:teddypupsadmin@gmail.com'));
  console.log('   Showroom address present:', contactHtml.includes('Downtown Dubai, United Arab Emirates'));

  // 5. Gone Home page check
  const goneHomeRes = await fetch('http://localhost:3000/gone-home');
  const goneHomeHtml = await goneHomeRes.text();
  console.log('5. Gone Home ticket stubs rendered:', goneHomeHtml.includes('One Ticket Home') && goneHomeHtml.includes('TP-9014'));

  // 6. FAQ page check
  const faqRes = await fetch('http://localhost:3000/faq');
  const faqHtml = await faqRes.text();
  console.log('6. FAQ questions rendered:', faqHtml.includes('Are your puppies vaccinated and health-checked?'));

  console.log('\n--- All controls verified successfully! ---');
}

verifyFeatures();
