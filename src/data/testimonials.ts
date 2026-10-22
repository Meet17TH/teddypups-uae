export interface Testimonial {
  id: string;
  author: string;
  location: string;
  quote: string;
  puppyBreed: string;
  puppyName?: string;
  image?: string;
  date?: string;
}

export interface FamilyMoment {
  id: string;
  caption: string;
  image: string;
  breed?: string;
}

export const SPOTLIGHT_TESTIMONIAL: Testimonial = {
  id: 'sarah-m',
  author: 'Sarah M.',
  location: 'Dubai, UAE',
  quote: 'TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout the process gave us complete peace of mind.',
  puppyBreed: 'Maltipoo',
  puppyName: 'Lulu',
  image: '/media/UuJqjsRN-wKL/047b245604/b942a5_a1ead54bc6934e5ab953e98d4aa0312d-mv2.jpg'
};

export const REVIEWS: Testimonial[] = [
  SPOTLIGHT_TESTIMONIAL,
  {
    id: 'khalid-a',
    author: 'Khalid & Reem',
    location: 'Downtown Dubai',
    quote: 'Visiting the showroom in Downtown was such a warm experience. We fell in love with our Teacup Pomeranian immediately and were able to take him home that evening. The health guarantee and initial vet care made us feel completely secure.',
    puppyBreed: 'Teacup Pomeranian',
    puppyName: 'Ace'
  },
  {
    id: 'elena-v',
    author: 'Elena V.',
    location: 'Palm Jumeirah, Dubai',
    quote: 'The concierge service for imported puppies is second to none. We received regular video updates while our Korean Teacup Poodle was being prepped for flight. She arrived so calm and joyful!',
    puppyBreed: 'Korean Teacup Poodle',
    puppyName: 'Coco'
  },
  {
    id: 'marcus-t',
    author: 'Marcus & Family',
    location: 'Dubai Marina',
    quote: 'Our Cavapoo Copper has brought unmatched joy into our home. The team at TeddyPups checked in with us during the first weeks to make sure feeding and routine were going smoothly.',
    puppyBreed: 'Cavapoo',
    puppyName: 'Copper'
  }
];

export const HAPPY_MOMENTS: FamilyMoment[] = [
  {
    id: 'm1',
    caption: 'Lulu 🧸 with her new mummy ❤️',
    image: '/media/UuJqjsRN-wKL/047b245604/b942a5_a1ead54bc6934e5ab953e98d4aa0312d-mv2.jpg',
    breed: 'Maltipoo'
  },
  {
    id: 'm2',
    caption: 'Adorable Maltipoo baby 🧸❤️',
    image: '/media/CVsVLsnCV0L3/626d9c9855/27b888_522e394293a845bcae93adec46bf499c-mv2.jpg',
    breed: 'Maltipoo'
  },
  {
    id: 'm3',
    caption: 'My new teddy puppy 🥰🧸',
    image: '/media/Sg8iy_EOrJah/684699406d/27b888_3594e056bf964a7a839a1bd5ac0c859e-mv2.jpg',
    breed: 'Poodle'
  },
  {
    id: 'm4',
    caption: 'Our new puppies 🧸🥰🤗',
    image: '/media/2BoSaeBhLer8/05c9d02f5a/27b888_48694c17ac634f32b63bcd21052c10c3-mv2.jpg',
    breed: 'Pomeranian'
  },
  {
    id: 'm5',
    caption: 'New puppy 🧸😍',
    image: '/media/GyAYtgNRGHUw/379090aed6/27b888_3f1463156de645feb90bf306b2572b76-mv2.jpg',
    breed: 'Maltipoo'
  },
  {
    id: 'm6',
    caption: 'Gang of 3 😍🧸',
    image: '/media/NCnzIyNwzZiC/11eddf4e8e/27b888_f405d17027174cdfa4437b9b1d84eaa2-mv2.jpg',
    breed: 'Korean Teacup'
  },
  {
    id: 'm7',
    caption: 'So happy 😍😍',
    image: '/media/d9RWhCKfRHOc/c549944174/27b888_0ad908eb6ba745b7b3e1426338af1803-mv2.jpg',
    breed: 'Cavapoo'
  },
  {
    id: 'm8',
    caption: 'New pup 🤗💫',
    image: '/media/xaIi_2gMoj_N/27123a3e2c/27b888_3375199e717a4f6ca02e902672664e79-mv2.jpg',
    breed: 'Poodle'
  }
];
