'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Sparkles, MessageCircle, ArrowRight, X, Quote } from 'lucide-react';
import { SPOTLIGHT_TESTIMONIAL, REVIEWS, HAPPY_MOMENTS, FamilyMoment } from '@/data/testimonials';
import { getWhatsAppUrl } from '@/data/navigation';

export default function HappyFamiliesPage() {
  const [activeMoment, setActiveMoment] = useState<FamilyMoment | null>(null);

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey-soft text-toffee font-hand text-sm sm:text-base">
          <Heart className="w-4 h-4 fill-toffee" />
          <span>our wall of happy endings</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cocoa">
          Happy families
        </h1>
        <p className="text-base sm:text-lg text-cocoa-soft max-w-2xl mx-auto leading-relaxed font-sans">
          Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our amazing clients after welcoming their furry friends.
        </p>
        <div className="pt-2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-honey text-cocoa font-bold text-xs uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>64 moments and counting</span>
          </span>
        </div>
      </div>

      {/* Spotlight Sarah M. Review */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-cocoa text-milk p-8 sm:p-12 lg:p-16 overflow-hidden shadow-xl">
          <Quote className="absolute -top-4 -right-4 w-36 h-36 text-cocoa-soft/30 -z-0 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-honey">
                Client Spotlight
              </span>
              <p className="font-display text-xl sm:text-2xl lg:text-3xl italic leading-relaxed text-milk">
                &ldquo;{SPOTLIGHT_TESTIMONIAL.quote}&rdquo;
              </p>
              <div className="pt-2">
                <p className="font-bold text-lg text-milk">{SPOTLIGHT_TESTIMONIAL.author}</p>
                <p className="text-xs text-honey font-semibold tracking-wider uppercase">
                  {SPOTLIGHT_TESTIMONIAL.location} • {SPOTLIGHT_TESTIMONIAL.puppyBreed} ({SPOTLIGHT_TESTIMONIAL.puppyName})
                </p>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-honey/40 shadow-lg">
                <Image
                  src={SPOTLIGHT_TESTIMONIAL.image || HAPPY_MOMENTS[0].image}
                  alt="Sarah M. with her Maltipoo puppy Lulu"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wall of Moments Photo Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold text-cocoa">
            Moments with our puppy parents
          </h2>
          <p className="text-sm text-cocoa-soft mt-1">
            Click on any photo to view client notes and full image.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HAPPY_MOMENTS.map((moment) => (
            <button
              key={moment.id}
              type="button"
              onClick={() => setActiveMoment(moment)}
              className="group relative aspect-square rounded-3xl overflow-hidden bg-white border border-honey-soft/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left focus:outline-none focus:ring-2 focus:ring-toffee"
            >
              <Image
                src={moment.image}
                alt={moment.caption}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/90 via-cocoa/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex items-end p-5">
                <div>
                  <span className="text-xs font-bold text-honey uppercase tracking-wider block">
                    {moment.breed || 'Teddy Pup'}
                  </span>
                  <span className="text-sm font-display font-medium text-milk leading-tight block mt-0.5">
                    {moment.caption}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-hand text-2xl sm:text-3xl text-cocoa-soft">
            every one of them was a Teddy Pup once ♥
          </p>
        </div>
      </section>

      {/* Additional Client Stories / Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.slice(1).map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl bg-white border border-honey-soft/80 p-8 shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-honey">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <p className="text-sm text-cocoa-soft leading-relaxed italic font-sans">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>
              <div className="pt-4 border-t border-honey-soft/60">
                <p className="font-bold text-cocoa text-sm">{rev.author}</p>
                <p className="text-xs text-toffee font-semibold">
                  {rev.location} • {rev.puppyBreed} ({rev.puppyName})
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-cocoa">
          Ready to welcome your own furry family member?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/puppies"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-toffee text-milk text-sm font-bold uppercase tracking-wide hover:bg-toffee-deep transition shadow-md"
          >
            <span>View Available Puppies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={getWhatsAppUrl('Hello TeddyPups, I would like to join your happy families!')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-milk border-2 border-honey text-cocoa text-sm font-semibold tracking-wide uppercase hover:border-toffee transition shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-toffee" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Lightbox Modal for Moments */}
      {activeMoment && (
        <div
          className="fixed inset-0 z-50 bg-cocoa/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setActiveMoment(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-milk/20 text-milk hover:bg-milk/30 transition z-50"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative aspect-square w-full">
              <Image src={activeMoment.image} alt={activeMoment.caption} fill className="object-cover" />
            </div>
            <div className="p-6 bg-milk space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-toffee">
                {activeMoment.breed || 'TeddyPups Family'}
              </span>
              <h3 className="font-display font-bold text-xl text-cocoa">{activeMoment.caption}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
