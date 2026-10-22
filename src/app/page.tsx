import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Heart,
  Plane,
  Sparkles,
  MapPin,
  CheckCircle,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';
import PuppyCard from '@/components/PuppyCard';
import { AVAILABLE_PUPPIES } from '@/data/puppies';
import { FAQS } from '@/data/faqs';
import { SPOTLIGHT_TESTIMONIAL, HAPPY_MOMENTS } from '@/data/testimonials';
import { BUSINESS_INFO, getWhatsAppUrl } from '@/data/navigation';

export default function HomePage() {
  const featuredPuppies = AVAILABLE_PUPPIES.slice(0, 6);
  const previewFaqs = FAQS.slice(0, 4);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 lg:pb-20">
        {/* Soft background aura glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-honey-soft/40 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blush/30 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Chapter Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-honey-soft/60 border border-honey/30 text-cocoa font-hand text-sm sm:text-base">
                <Sparkles className="w-4 h-4 text-toffee" />
                <span>every puppy is family</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-cocoa leading-[1.08]">
                Premium teacup <br className="hidden sm:inline" />
                <span className="text-toffee italic">puppies</span> in Dubai
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-cocoa-soft max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Meet your new best friend in our Downtown Dubai showroom, or order a rare miniature breed imported from trusted, certified breeders worldwide.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/puppies"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-toffee text-milk text-sm font-bold tracking-wide uppercase hover:bg-toffee-deep transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>View available puppies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-milk border-2 border-honey hover:border-toffee text-cocoa text-sm font-semibold tracking-wide uppercase transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-toffee" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

              {/* Puppy quick-tags pill row */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs">
                <span className="font-bold text-cocoa-soft uppercase tracking-wider text-[11px] mr-1">
                  Popular:
                </span>
                {['Maltipoo', 'Korean Teacup', 'Toy Poodle', 'Cavapoo', 'Pomeranian'].map((tag) => (
                  <Link
                    key={tag}
                    href={`/puppies?breed=${tag.toLowerCase().replace(' ', '-')}`}
                    className="px-3 py-1 rounded-full bg-honey-soft/40 hover:bg-honey text-cocoa font-medium transition"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                {/* Decorative background framing */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-honey/30 via-toffee/10 to-sky/30 rounded-[2.5rem] blur-xl -z-10" />

                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-4 border-milk shadow-2xl bg-white">
                  <Image
                    src="/media/Z0ToauDx7Eve/5fffe4d022/b942a5_4b8cfb8204d24eadaf524332aba1dc15-mv2.webp"
                    alt="Max - Maltipoo puppy in Dubai"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />

                  {/* Floating badges on hero image */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-milk/95 backdrop-blur-md border border-honey-soft/80 shadow-lg space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-lg text-cocoa">Max</span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-honey text-cocoa">
                        Available
                      </span>
                    </div>
                    <p className="text-xs text-cocoa-soft font-medium">
                      Maltipoo boy • 3 months old • In Dubai Showroom
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[11px] text-toffee font-bold border-t border-honey-soft/50 mt-2">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Health Certified</span>
                      </span>
                      <Link href="/puppies/maltipoo-max-male" className="hover:underline flex items-center gap-0.5">
                        <span>Meet Max</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Floating location pill */}
                <div className="absolute -top-3 -right-3 sm:-right-5 px-4 py-2 rounded-2xl bg-cocoa text-milk shadow-xl border border-honey/30 flex items-center gap-2 text-xs font-semibold">
                  <MapPin className="w-4 h-4 text-honey" />
                  <span>Downtown Dubai Showroom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE PUPS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-honey-soft">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-toffee">
              Our Available Litter
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cocoa mt-1">
              Meet the pups
            </h2>
            <p className="text-sm sm:text-base text-cocoa-soft mt-1">
              Real puppies, real photos, looking for their families right now.
            </p>
          </div>
          <Link
            href="/puppies"
            className="inline-flex items-center gap-2 text-sm font-bold text-toffee hover:text-toffee-deep group"
          >
            <span>See all 15 available puppies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Puppy cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredPuppies.map((puppy) => (
            <PuppyCard key={puppy.slug} puppy={puppy} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/puppies"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-honey text-cocoa font-bold text-sm tracking-wide uppercase hover:bg-honey-soft transition shadow-md"
          >
            <span>Explore all available puppies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* TWO WAYS TO MEET YOUR PUPPY */}
      <section className="bg-honey-soft/20 py-16 sm:py-24 border-y border-honey-soft/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-toffee">
              Tailored Adoption Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cocoa mt-1">
              Two ways to meet your puppy
            </h2>
            <p className="text-sm sm:text-base text-cocoa-soft mt-2">
              Whether you prefer visiting in person today or commissioning a rare international champion bloodline, we provide complete transparency and care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: In Dubai Showroom */}
            <div className="relative rounded-3xl bg-white p-8 sm:p-10 border border-honey-soft shadow-md hover:shadow-xl transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-honey-soft/60 flex items-center justify-center text-toffee">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-toffee">
                    In our showroom
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-cocoa mt-1">
                    Puppies in Dubai
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-cocoa-soft leading-relaxed font-sans">
                  See them, love them, take them home. Come meet our locally available puppies in our Downtown Dubai showroom before you decide. Bond with them face-to-face and take them home the same day.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-cocoa-soft/90 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-toffee flex-shrink-0" />
                    <span>Immediate same-day take-home or local delivery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-toffee flex-shrink-0" />
                    <span>Complete veterinary health card & vaccinations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-toffee flex-shrink-0" />
                    <span>Walk-in or private appointments 7 days a week</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-honey-soft">
                <Link
                  href="/puppies?origin=local"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-toffee text-milk text-xs font-bold uppercase tracking-wider hover:bg-toffee-deep transition"
                >
                  <span>Meet local puppies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Imported for You */}
            <div className="relative rounded-3xl bg-cocoa text-milk p-8 sm:p-10 border border-cocoa-soft shadow-md hover:shadow-xl transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-honey/20 flex items-center justify-center text-honey">
                  <Plane className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-honey">
                    Order Upon Request
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-milk mt-1">
                    Imported for you
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-milk/80 leading-relaxed font-sans">
                  Exclusive Korean teacup puppies, delivered. Order from the world&apos;s most reputable certified breeders across South Korea and Europe, and let us handle all travel, quarantine, and import permits.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-milk/75 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-honey flex-shrink-0" />
                    <span>Rare Korean teacup sizes (1.5kg – 2.5kg adult weight)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-honey flex-shrink-0" />
                    <span>Weekly 4K video clips & growth milestones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-honey flex-shrink-0" />
                    <span>Safe temperature-controlled airline cargo & MOCCAE clearance</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-cocoa-soft">
                <Link
                  href="/puppies?origin=imported"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-honey text-cocoa text-xs font-bold uppercase tracking-wider hover:bg-honey-soft transition"
                >
                  <span>See imported puppies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOUR PUPPY JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-toffee">
            Simple & Transparent
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-cocoa mt-1">
            Your puppy journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: '1',
              title: 'Choose your breed',
              desc: 'Browse our real photographs and video reels, or consult our team to find the puppy that matches your lifestyle and preferences.',
            },
            {
              num: '2',
              title: 'Get photos & details',
              desc: 'Review veterinary health records, microchip certification, parent lineage, and receive real-time updates directly on WhatsApp.',
            },
            {
              num: '3',
              title: 'Secure & safe delivery',
              desc: 'Collect your puppy in Downtown Dubai, or enjoy our white-glove climate-controlled delivery straight to your doorstep.',
            },
          ].map((item) => (
            <div
              key={item.num}
              className="relative rounded-3xl bg-white p-8 border border-honey-soft/80 shadow-sm text-center sm:text-left space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-honey-soft/80 text-cocoa font-display font-bold text-xl flex items-center justify-center mx-auto sm:mx-0">
                {item.num}
              </div>
              <h3 className="font-display font-bold text-xl text-cocoa">{item.title}</h3>
              <p className="text-sm text-cocoa-soft leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPOTLIGHT TESTIMONIAL & HAPPY FAMILIES */}
      <section className="bg-cocoa text-milk py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Testimonial Quote */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-honey">
                Happy families & puppies
              </span>
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl italic font-normal text-milk leading-relaxed">
                &ldquo;{SPOTLIGHT_TESTIMONIAL.quote}&rdquo;
              </blockquote>
              <div className="pt-2">
                <p className="font-bold text-lg text-milk">{SPOTLIGHT_TESTIMONIAL.author}</p>
                <p className="text-xs text-honey font-semibold tracking-wider uppercase">
                  {SPOTLIGHT_TESTIMONIAL.location} • Adopted {SPOTLIGHT_TESTIMONIAL.puppyBreed} ({SPOTLIGHT_TESTIMONIAL.puppyName})
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="/happy-families"
                  className="inline-flex items-center gap-2 text-sm font-bold text-honey hover:text-honey-soft group"
                >
                  <span>Explore our wall of happy endings</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Photo Collage Preview */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {HAPPY_MOMENTS.slice(0, 4).map((m) => (
                <div
                  key={m.id}
                  className="relative aspect-square rounded-2xl overflow-hidden border border-cocoa-soft shadow-lg group"
                >
                  <Image
                    src={m.image}
                    alt={m.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa/80 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[11px] font-medium text-milk/90 leading-tight">
                      {m.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ PREVIEW SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-toffee">
            Everything you need to know
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-cocoa mt-1">
            Questions, answered
          </h2>
        </div>

        <div className="space-y-4">
          {previewFaqs.map((faq) => (
            <details
              key={faq.id}
              className="group rounded-2xl bg-white border border-honey-soft/80 p-5 shadow-sm open:shadow-md transition-all"
            >
              <summary className="flex items-center justify-between font-display font-bold text-lg text-cocoa cursor-pointer list-none select-none">
                <span>{faq.question}</span>
                <span className="text-toffee font-bold text-xl ml-4 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-cocoa-soft leading-relaxed font-sans pt-2 border-t border-honey-soft/40">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-toffee hover:underline"
          >
            <span>View all questions & answers</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
