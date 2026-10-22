export interface JourneyStep {
  step: number;
  title: string;
  description: string;
  tag?: string;
}

export const LOCAL_JOURNEY_STEPS: JourneyStep[] = [
  {
    step: 1,
    title: 'Explore our puppies',
    description: 'Browse our curated collection to view currently available puppies in Dubai. Each listing includes real photographs, breed details, age, personality notes, and certified health documentation.',
    tag: 'Step 1'
  },
  {
    step: 2,
    title: 'Choose your puppy',
    description: 'Once you discover a puppy you love, open their profile to view high-resolution imagery and video reels. Connect with our concierge via WhatsApp to discuss any questions.',
    tag: 'Step 2'
  },
  {
    step: 3,
    title: 'Meet before you choose',
    description: 'Step into our boutique showroom in Downtown Dubai to hold, cuddle, and bond with your prospective companion face-to-face in a calm, welcoming environment.',
    tag: 'Step 3'
  },
  {
    step: 4,
    title: 'Pick-up or delivery',
    description: 'Take your puppy home the very same day, or let us arrange safe, air-conditioned delivery straight to your doorstep across Dubai and all other Emirates.',
    tag: 'Step 4'
  }
];

export const IMPORT_JOURNEY_STEPS: JourneyStep[] = [
  {
    step: 1,
    title: 'Consultation & breed selection',
    description: 'Tell us your dream companion — rare teacup sizes, coat coloration, gender, or pedigree. We guide you through available pairings from our elite international breeder network.',
    tag: 'Step 1'
  },
  {
    step: 2,
    title: 'Breeder verification & matching',
    description: 'We match you with ethically certified breeders in South Korea and Europe who uphold stringent standards for genetic health, living conditions, and early socialization.',
    tag: 'Step 2'
  },
  {
    step: 3,
    title: 'Real photos, 4K videos & vet checks',
    description: 'Receive weekly video clips, weight milestones, and veterinary health reports directly on WhatsApp before your puppy embarks on their journey.',
    tag: 'Step 3'
  },
  {
    step: 4,
    title: 'VIP travel & seamless Dubai arrival',
    description: 'We oversee climate-controlled airline travel, MOCCAE import permits, customs clearance, and veterinary airport reception for a joyful, stress-free reunion.',
    tag: 'Step 4'
  }
];

export const PROMISES = [
  {
    id: 'health',
    title: 'Comprehensive Health Guarantee',
    description: 'Every puppy is thoroughly checked by licensed veterinarians, vaccinated, dewormed, and microchipped with official ISO documentation.',
    icon: 'ShieldCheck'
  },
  {
    id: 'support',
    title: '24/7 Puppy Parent Guidance',
    description: 'Our care specialists remain on standby via WhatsApp around the clock to support you with feeding routines, settling in, and early training.',
    icon: 'HeartHandshake'
  },
  {
    id: 'ethical',
    title: 'Ethical & Certified Heritage',
    description: 'We work exclusively with certified responsible breeders who prioritize maternal health, genetics, and loving human socialization.',
    icon: 'Award'
  },
  {
    id: 'delivery',
    title: 'White-Glove Safe Delivery',
    description: 'Door-to-door temperature-controlled delivery throughout the UAE, plus certified international pet transport to global destinations.',
    icon: 'Plane'
  }
];
