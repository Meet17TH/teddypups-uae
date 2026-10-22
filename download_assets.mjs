import fs from 'fs';
import path from 'path';

const mediaList = JSON.parse(fs.readFileSync('media_list.json', 'utf8'));

// Filter out .mp4 if we want to save bandwidth, or download lightweight ones. Let's download all images (.jpg, .jpeg, .png, .webp) and download video if small.
const imageAssets = mediaList.filter(url => !url.endsWith('.mp4'));
console.log(`Found ${imageAssets.length} image assets to download.`);

async function downloadAsset(url) {
  const localPath = path.join(process.cwd(), 'public', url.replace(/^\//, ''));
  if (fs.existsSync(localPath)) return;

  const dir = path.dirname(localPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  try {
    const fullUrl = `https://puppy.instabizweb.com${url}`;
    const res = await fetch(fullUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    if (res.ok) {
      const buf = await res.arrayBuffer();
      fs.writeFileSync(localPath, Buffer.from(buf));
      console.log(`Downloaded: ${url} (${buf.byteLength} bytes)`);
    } else {
      console.warn(`Failed (${res.status}): ${url}`);
    }
  } catch (err) {
    console.error(`Error downloading ${url}:`, err.message);
  }
}

async function run() {
  const BATCH_SIZE = 5;
  for (let i = 0; i < imageAssets.length; i += BATCH_SIZE) {
    const batch = imageAssets.slice(i, i + BATCH_SIZE);
    await Promise.all(batch.map(downloadAsset));
  }
  console.log('Finished downloading image assets!');
}

run();
