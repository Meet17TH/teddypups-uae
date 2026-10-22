import fs from 'fs';
import path from 'path';

const rawPuppies = JSON.parse(fs.readFileSync('all_puppies_extracted.json', 'utf8'));

// Helper to determine breed category
function getBreedCategory(slug, breed) {
  const s = slug.toLowerCase();
  const b = breed.toLowerCase();
  if (s.includes('maltipoo') || b.includes('maltipoo')) return 'maltipoo';
  if (s.includes('pomeranian') || b.includes('pomeranian')) return 'pomeranian';
  if (s.includes('poodle') || b.includes('poodle')) return 'poodle';
  if (s.includes('cavapoo') || b.includes('cavapoo')) return 'cavapoo';
  if (s.includes('shitzu') || s.includes('shih-tzu') || b.includes('shih tzu') || b.includes('shitzu')) return 'shih-tzu';
  return 'other';
}

const washColors = [
  '#f2be6b', // honey
  '#bfddf5', // sky
  '#f9cdbf', // blush
  '#fbe3b4', // honey soft
  '#f2be6b',
  '#bfddf5'
];

const tilts = ['-0.8deg', '0.45deg', '-0.3deg', '0.6deg', '-0.5deg', '0.8deg'];

const enriched = rawPuppies.map((p, idx) => {
  // Parse aria label: e.g. "Max, Maltipoo, boy, 3 months, available"
  // or "Korean Teacup Maltipoo, girl, 2 months, available"
  const parts = p.ariaLabel.split(',').map(s => s.trim());
  let name = '';
  let breed = '';
  let sex = 'boy';
  let age = '2 months';

  if (parts.length >= 4) {
    if (parts[0] === 'Max' || parts[0] === 'Copper' || parts[0] === 'Ace' || parts[0] === 'Leo' || parts[0] === 'Mia' || parts[0] === 'Sadie') {
      name = parts[0];
      breed = parts[1];
      sex = parts[2];
      age = parts[3];
    } else {
      breed = parts[0];
      name = breed;
      sex = parts[1];
      age = parts[2];
    }
  } else {
    name = p.slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
    breed = name;
  }

  // Clean sex
  if (sex.includes('\\u0026') || sex.includes('&')) {
    sex = 'boy & girl';
  } else if (sex.includes('girl')) {
    sex = 'girl';
  } else {
    sex = 'boy';
  }

  const isImported = p.slug.includes('korean') || p.slug.includes('imported') || p.description.includes('imported') || idx < 6;
  const origin = isImported ? 'Imported' : 'In Dubai';
  const hasVideo = p.media.some(m => m.kind === 'video');

  const breedCategory = getBreedCategory(p.slug, breed);

  return {
    slug: p.slug,
    name: name,
    breed: breed,
    breedCategory,
    sex,
    age,
    origin,
    status: p.status,
    washColor: washColors[idx % washColors.length],
    tilt: tilts[idx % tilts.length],
    hasVideo,
    title: p.title,
    description: p.description || `Beautiful ${breed} puppy available at TeddyPups U.A.E.`,
    about: `Our adorable ${name} is a healthy, playful, and affectionate ${breed}. Raised with love, premium nutrition, and comprehensive veterinary care. Ready to bring endless warmth and happiness to their forever home.`,
    specs: {
      breed: breed,
      gender: sex === 'girl' ? 'Female' : sex === 'boy' ? 'Male' : 'Male & Female',
      age: age,
      color: p.slug.includes('copper') ? 'Copper Caramel' : p.slug.includes('blue') ? 'Blue Merle' : 'Cream / Apricot',
      origin: isImported ? 'Imported (Certified European / Korean Heritage)' : 'Local Dubai Showroom',
      location: isImported ? 'Available for Reserve & Express Delivery' : 'Downtown Dubai Showroom',
      health: [
        'Full Veterinary Health Check',
        'Age-appropriate Vaccinations Completed',
        'Internal & External Deworming Routine',
        'Official Veterinary Health Passport Included',
        'ISO International Microchip Implanted',
        'Health Guarantee & 24/7 Puppy Care Guidance'
      ],
      microchip: true,
      passport: true,
      vaccinated: true,
      sizeEst: breed.toLowerCase().includes('teacup') ? '1.5 - 2.5 kg (Teacup)' : '2.5 - 4.5 kg (Toy / Miniature)'
    },
    media: p.media
  };
});

const tsCode = `export interface PuppyMedia {
  id: string;
  url: string;
  kind: 'image' | 'video';
  width: number;
  height: number;
  alt: string;
  caption: string;
  focalX: number;
  focalY: number;
  color: string;
  blurDataUrl?: string | null;
}

export interface PuppySpecs {
  breed: string;
  gender: string;
  age: string;
  color: string;
  origin: string;
  location: string;
  health: string[];
  microchip: boolean;
  passport: boolean;
  vaccinated: boolean;
  sizeEst: string;
}

export interface Puppy {
  slug: string;
  name: string;
  breed: string;
  breedCategory: 'maltipoo' | 'pomeranian' | 'poodle' | 'cavapoo' | 'shih-tzu' | 'other';
  sex: 'boy' | 'girl' | 'boy & girl';
  age: string;
  origin: 'In Dubai' | 'Imported';
  status: 'available' | 'gone-home';
  washColor: string;
  tilt: string;
  hasVideo: boolean;
  title: string;
  description: string;
  about: string;
  specs: PuppySpecs;
  media: PuppyMedia[];
}

export const PUPPIES: Puppy[] = ${JSON.stringify(enriched, null, 2)};

export const AVAILABLE_PUPPIES = PUPPIES.filter(p => p.status === 'available');
export const GONE_HOME_PUPPIES = PUPPIES.filter(p => p.status === 'gone-home');
`;

const dir = path.join(process.cwd(), 'src', 'data');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'puppies.ts'), tsCode, 'utf8');
console.log('Successfully generated src/data/puppies.ts with', enriched.length, 'puppies!');
