export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'health' | 'visit' | 'delivery' | 'import' | 'general';
}

export const FAQS: FAQItem[] = [
  {
    id: 'health-vaccinations',
    category: 'health',
    question: 'Are your puppies vaccinated and health-checked?',
    answer: 'Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family. We include full veterinary records and ISO microchip registration.'
  },
  {
    id: 'visit-before-deciding',
    category: 'visit',
    question: 'Can I meet a puppy before I decide?',
    answer: 'Yes! Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision. Our luxury showroom offers a calm, private environment for you and your family.'
  },
  {
    id: 'same-day-take-home',
    category: 'delivery',
    question: 'Can I take my puppy home the same day?',
    answer: 'Local puppies in our Dubai showroom are available immediately, so you can take your puppy home the same day. We provide a starter travel carrier and essential care guide upon collection.'
  },
  {
    id: 'import-puppies',
    category: 'import',
    question: 'Do you import puppies from abroad?',
    answer: 'Yes. Through our Order Upon Request service we source rare and premium teacup breeds from the most reputable, certified breeders across Europe, Korea, and beyond — and we handle the entire import for you.'
  },
  {
    id: 'import-travel',
    category: 'import',
    question: 'How does an imported puppy travel to Dubai?',
    answer: 'We manage every part of the import process, including health checks, climate-controlled flight travel arrangements, customs clearance, and official UAE Ministry of Climate Change & Environment (MOCCAE) documentation, so your puppy arrives happy, healthy, and stress-free.'
  },
  {
    id: 'photos-before-travel',
    category: 'import',
    question: 'Will I see photos and health details first?',
    answer: 'Yes. High-resolution photos, 4K video clips, and veterinary health certificates are shared before your puppy travels. Our team sends real photos and health updates directly to your WhatsApp.'
  },
  {
    id: 'delivery-options',
    category: 'delivery',
    question: 'Do you deliver?',
    answer: 'Yes. We provide white-glove climate-controlled delivery within Dubai and across all UAE emirates. Our trusted international cargo partners also deliver puppies safely to loving homes all around the world.'
  },
  {
    id: 'breeds-available',
    category: 'general',
    question: 'Which breeds do you usually have?',
    answer: 'We specialize in Maltipoos, Korean Teacup Poodles, Teacup Pomeranians, Cavapoos, and Shih Tzus. If you are seeking a specific rare color or pedigree, our bespoke concierge can source it through our global breeder network.'
  },
  {
    id: 'aftercare-support',
    category: 'general',
    question: 'Is there help after my puppy comes home?',
    answer: 'Absolutely. We offer dedicated 24/7 client care via WhatsApp to assist with feeding schedules, acclimatization, potty training tips, and vet recommendations during your puppy’s first year.'
  }
];
