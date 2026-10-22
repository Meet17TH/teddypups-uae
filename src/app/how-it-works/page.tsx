'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Plane,
  ShieldCheck,
  HeartHandshake,
  Award,
  Truck,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { LOCAL_JOURNEY_STEPS, IMPORT_JOURNEY_STEPS, PROMISES } from '@/data/journey';
import { BUSINESS_INFO, getWhatsAppUrl } from '@/data/navigation';

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<'local' | 'import'>('local');

  const currentSteps = activeTab === 'local' ? LOCAL_JOURNEY_STEPS : IMPORT_JOURNEY_STEPS;

  return (
    <div className="space-y-16 sm:space-y-24 py-10 sm:py-16">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-toffee">
          Our Process
        </span>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cocoa">
          How it works
        </h1>
        <p className="text-base sm:text-lg text-cocoa-soft max-w-2xl mx-auto leading-relaxed font-sans">
          Whether you choose to visit us locally in Downtown Dubai or order a premium breed from overseas, TeddyPups is here to make your adoption experience seamless and joyful.
        </p>

        {/* Tab Switcher */}
        <div className="pt-4 flex items-center justify-center">
          <div className="p-1.5 rounded-full bg-honey-soft/40 border border-honey-soft inline-flex items-center gap-1 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('local')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeTab === 'local'
                  ? 'bg-toffee text-milk shadow-md'
                  : 'text-cocoa-soft hover:text-cocoa'
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>In Dubai — Meet in Person</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('import')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all ${
                activeTab === 'import'
                  ? 'bg-toffee text-milk shadow-md'
                  : 'text-cocoa-soft hover:text-cocoa'
              }`}
            >
              <Plane className="w-4 h-4" />
              <span>Imported — Order Upon Request</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Steps Journey Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-cocoa">
            {activeTab === 'local'
              ? 'Meet your puppy in person in Downtown Dubai'
              : 'Order your rare teacup puppy from certified international breeders'}
          </h2>
          <p className="text-sm text-cocoa-soft mt-1">
            {activeTab === 'local'
              ? 'Four simple steps to choose, bond, and welcome your new puppy home.'
              : 'Ethical sourcing, full veterinary screening, and stress-free flight delivery.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentSteps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-3xl bg-white border border-honey-soft/80 p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-honey-soft text-cocoa font-display font-bold text-lg flex items-center justify-center">
                    {step.step}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-toffee">
                    Step {step.step}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-cocoa group-hover:text-toffee transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-cocoa-soft leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DELIVERY & COLLECTION SECTION */}
      <section id="delivery" className="bg-honey-soft/20 py-16 sm:py-20 border-y border-honey-soft/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-toffee">
              Arrival & Transport
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cocoa mt-1">
              Delivery & collection
            </h2>
            <p className="text-sm sm:text-base text-cocoa-soft mt-2">
              Safe, certified, and temperature-controlled options designed for your puppy&apos;s maximum comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl bg-white p-8 border border-honey-soft shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-honey-soft/60 text-toffee flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-cocoa">
                Same-Day Showroom Collection
              </h3>
              <p className="text-sm text-cocoa-soft leading-relaxed">
                Step into our Downtown Dubai showroom, complete the adoption paperwork with our team, and carry your new companion home in an approved luxury pet carrier.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 border border-honey-soft shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-honey-soft/60 text-toffee flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-cocoa">
                White-Glove UAE Delivery
              </h3>
              <p className="text-sm text-cocoa-soft leading-relaxed">
                Can&apos;t make it to Downtown Dubai? Our dedicated climate-controlled pet chauffeur delivers straight to your villa or apartment in Dubai, Abu Dhabi, Sharjah, and all Emirates.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 border border-honey-soft shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-honey-soft/60 text-toffee flex items-center justify-center">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-cocoa">
                Safe International Cargo
              </h3>
              <p className="text-sm text-cocoa-soft leading-relaxed">
                For international adoptions, we partner with IATA-certified live animal carriers providing pressurized, temperature-regulated cargo cabins with airport veterinary reception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PREMIUM PUPPY PROMISE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-toffee">
            Peace of Mind
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cocoa mt-1">
            Our premium puppy promise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROMISES.map((promise) => (
            <div
              key={promise.id}
              className="rounded-3xl bg-white border border-honey-soft/80 p-6 shadow-sm space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-honey-soft/50 text-toffee flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-cocoa">{promise.title}</h3>
              <p className="text-xs sm:text-sm text-cocoa-soft leading-relaxed font-sans">
                {promise.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-cocoa">
          Have questions about the adoption journey?
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
            href={getWhatsAppUrl('Hello TeddyPups, I would like to learn more about how the adoption process works.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-milk border-2 border-honey text-cocoa text-sm font-semibold tracking-wide uppercase hover:border-toffee transition shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-toffee" />
            <span>Chat with Concierge</span>
          </a>
        </div>
      </section>
    </div>
  );
}
