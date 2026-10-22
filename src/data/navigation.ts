export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Puppies', href: '/puppies', badge: '15' },
  { label: 'Happy families', href: '/happy-families' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Visit & contact', href: '/contact' }
];

export const FOOTER_EXPLORE_LINKS: NavItem[] = [
  { label: 'Available puppies', href: '/puppies' },
  { label: 'Gone home', href: '/gone-home' },
  { label: 'Happy families', href: '/happy-families' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Delivery & collection', href: '/how-it-works#delivery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Visit & contact', href: '/contact' }
];

export const BUSINESS_INFO = {
  brandName: 'TeddyPups U.A.E.',
  tagline: 'Premium teacup & teddy bear puppies in Dubai',
  phone: '+971 54 167 6733',
  phoneFormatted: '+971 54 167 6733',
  phoneTel: '+971541676733',
  email: 'teddypupsadmin@gmail.com',
  address: 'Downtown Dubai, United Arab Emirates',
  mapsUrl: 'https://maps.google.com/?q=Downtown+Dubai+United+Arab+Emirates',
  whatsappNumber: '971541676733',
  whatsappDefaultMsg: "Hello TeddyPups, I'm interested in learning more about your available puppies.",
  hours: 'Daily 10:00 AM – 10:00 PM'
};

export function getWhatsAppUrl(customMsg?: string): string {
  const msg = encodeURIComponent(customMsg || BUSINESS_INFO.whatsappDefaultMsg);
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${msg}`;
}
