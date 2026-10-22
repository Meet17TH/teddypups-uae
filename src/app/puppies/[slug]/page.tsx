import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ShieldCheck,
  CheckCircle2,
  Heart,
  MessageCircle,
  MapPin,
  Calendar,
  Sparkles,
  Plane,
  FileText,
  BadgeCheck,
  Share2,
  ArrowLeft,
  ChevronRight,
} from 'lucide-react';
import PuppyGallery from '@/components/PuppyGallery';
import PuppyCard from '@/components/PuppyCard';
import LetterForm from '@/components/LetterForm';
import { PUPPIES, AVAILABLE_PUPPIES, Puppy } from '@/data/puppies';
import { BUSINESS_INFO, getWhatsAppUrl } from '@/data/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PUPPIES.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const puppy = PUPPIES.find((p) => p.slug === params.slug);
  if (!puppy) return { title: 'Puppy Not Found | TeddyPups U.A.E.' };

  return {
    title: `${puppy.name} (${puppy.breed}) | TeddyPups U.A.E.`,
    description: puppy.description,
    openGraph: {
      title: `${puppy.name} — ${puppy.breed} in Dubai`,
      description: puppy.description,
      images: puppy.media[0] ? [puppy.media[0].url] : [],
    },
  };
}

export default function PuppyDetailPage({ params }: PageProps) {
  const puppy = PUPPIES.find((p) => p.slug === params.slug);
  if (!puppy) notFound();

  // Related puppies
  const relatedPuppies = AVAILABLE_PUPPIES.filter((p) => p.slug !== puppy.slug).slice(0, 3);

  const customWhatsAppMsg = `Hello TeddyPups, I'm interested in ${puppy.name} (${puppy.breed}, ${puppy.sex}, ${puppy.age}). Could you please share more details and availability?`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-cocoa-soft">
        <Link href="/puppies" className="hover:text-toffee transition">
          Available puppies
        </Link>
        <span aria-hidden="true" className="text-honey">
          /
        </span>
        <span aria-current="page" className="text-cocoa font-bold">
          {puppy.name}
        </span>
      </nav>

      {/* Chapter header */}
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-toffee">
        <span className="w-6 h-6 rounded-full bg-honey-soft text-cocoa flex items-center justify-center text-xs">
          1
        </span>
        <span className="font-hand text-base lowercase text-cocoa-soft">hello, it&apos;s me</span>
      </div>

      {/* Main Grid: Gallery + Key Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Image & Video Gallery */}
        <div className="lg:col-span-7">
          <PuppyGallery media={puppy.media} puppyName={puppy.name} />
        </div>

        {/* Right Column: Puppy Profile & Acquisition CTAs */}
        <div className="lg:col-span-5 space-y-6">
          {/* Header & Badges */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  puppy.origin === 'In Dubai'
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-honey/30 text-toffee'
                }`}
              >
                {puppy.origin}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-milk border border-honey-soft text-cocoa">
                {puppy.status === 'available' ? 'Available' : 'Gone Home'}
              </span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-cocoa tracking-tight">
              {puppy.name}
            </h1>
            <p className="text-base sm:text-lg text-cocoa-soft font-medium mt-1">
              {puppy.breed} • <span className="capitalize">{puppy.sex}</span> • {puppy.age}
            </p>
          </div>

          {/* Quick specs box */}
          <div className="rounded-3xl bg-white border border-honey-soft/80 p-5 sm:p-6 shadow-sm space-y-3 text-sm">
            <h3 className="font-display font-bold text-base text-cocoa border-b border-honey-soft/50 pb-2">
              Puppy Specifications
            </h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs sm:text-sm">
              <div>
                <span className="text-cocoa-soft/60 block text-[11px] uppercase tracking-wider font-semibold">
                  Breed
                </span>
                <span className="font-semibold text-cocoa">{puppy.specs.breed}</span>
              </div>
              <div>
                <span className="text-cocoa-soft/60 block text-[11px] uppercase tracking-wider font-semibold">
                  Gender
                </span>
                <span className="font-semibold text-cocoa">{puppy.specs.gender}</span>
              </div>
              <div>
                <span className="text-cocoa-soft/60 block text-[11px] uppercase tracking-wider font-semibold">
                  Age
                </span>
                <span className="font-semibold text-cocoa">{puppy.specs.age}</span>
              </div>
              <div>
                <span className="text-cocoa-soft/60 block text-[11px] uppercase tracking-wider font-semibold">
                  Est. Adult Size
                </span>
                <span className="font-semibold text-cocoa">{puppy.specs.sizeEst}</span>
              </div>
              <div>
                <span className="text-cocoa-soft/60 block text-[11px] uppercase tracking-wider font-semibold">
                  Location
                </span>
                <span className="font-semibold text-cocoa">{puppy.specs.location}</span>
              </div>
              <div>
                <span className="text-cocoa-soft/60 block text-[11px] uppercase tracking-wider font-semibold">
                  Health Record
                </span>
                <span className="font-semibold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Vaccinated & Chipped</span>
                </span>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-3 pt-2">
            <a
              href={getWhatsAppUrl(customWhatsAppMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-toffee text-milk font-bold text-sm tracking-wide uppercase hover:bg-toffee-deep transition shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Enquire for {puppy.name} on WhatsApp</span>
            </a>

            <a
              href="#letter-section"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-milk border-2 border-honey hover:border-toffee text-cocoa font-semibold text-xs tracking-wide uppercase transition"
            >
              <FileText className="w-4 h-4 text-toffee" />
              <span>Write Letter / Request Showroom Visit</span>
            </a>
          </div>

          {/* Health reassurance pill */}
          <div className="p-4 rounded-2xl bg-honey-soft/30 border border-honey-soft flex items-start gap-3 text-xs text-cocoa-soft">
            <ShieldCheck className="w-5 h-5 text-toffee flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-cocoa block">TeddyPups Health Guarantee</span>
              All puppies receive comprehensive health screening, deworming, vaccines, and official international pet passports.
            </div>
          </div>
        </div>
      </div>

      {/* Story & What's Included */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-honey-soft">
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-cocoa">
              About {puppy.name}
            </h2>
            <p className="mt-3 text-cocoa-soft leading-relaxed text-sm sm:text-base font-sans">
              {puppy.about}
            </p>
          </div>

          {/* Health checklist items */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-lg text-cocoa">
              Health & Care Certification
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {puppy.specs.health.map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-honey-soft/60">
                  <BadgeCheck className="w-4 h-4 text-toffee flex-shrink-0" />
                  <span className="text-cocoa-soft font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Adoption Package Box */}
        <div className="lg:col-span-5 rounded-3xl bg-white border border-honey-soft p-6 sm:p-8 space-y-4 shadow-sm">
          <h3 className="font-display font-bold text-xl text-cocoa">
            Included in Adoption
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-cocoa-soft">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-toffee flex-shrink-0" />
              <span>Official Veterinary Health Card & MOCCAE Stamp</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-toffee flex-shrink-0" />
              <span>International Microchip & ISO Certificate</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-toffee flex-shrink-0" />
              <span>Full age-appropriate vaccines & external/internal deworming</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-toffee flex-shrink-0" />
              <span>Premium travel carrier & starter puppy guidance pack</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-toffee flex-shrink-0" />
              <span>24/7 post-adoption care support via WhatsApp</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Interactive Letter Enquiry Form for this puppy */}
      <section id="letter-section" className="pt-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-toffee">
            Direct Enquiry
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-cocoa mt-1">
            Send a letter for {puppy.name}
          </h2>
          <p className="text-sm text-cocoa-soft mt-1">
            Complete the letter below and our team will get in touch with you promptly.
          </p>
        </div>
        <LetterForm initialPuppySlug={puppy.slug} />
      </section>

      {/* More puppies you might love */}
      {relatedPuppies.length > 0 && (
        <section className="pt-12 border-t border-honey-soft">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-cocoa">
              More puppies you might love
            </h2>
            <Link href="/puppies" className="text-sm font-bold text-toffee hover:underline">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPuppies.map((p) => (
              <PuppyCard key={p.slug} puppy={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
