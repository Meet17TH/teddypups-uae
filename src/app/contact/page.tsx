import React from 'react';
import Link from 'next/link';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import LetterForm from '@/components/LetterForm';
import { BUSINESS_INFO, getWhatsAppUrl } from '@/data/navigation';

export const metadata = {
  title: 'Visit & contact | TeddyPups U.A.E.',
  description:
    'Get in touch with TeddyPups in Downtown Dubai. Visit our showroom or send us a letter to enquire about our premium teacup and teddy bear puppies.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey-soft text-toffee font-hand text-sm sm:text-base">
          <Sparkles className="w-4 h-4 text-toffee" />
          <span>we&apos;d love to meet you</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cocoa">
          Get in touch with us
        </h1>
        <p className="text-base sm:text-lg text-cocoa-soft leading-relaxed font-sans">
          Have questions about our puppies or adoption process? Fill out the letter, and our team will get back to you promptly. Whether ready to adopt or just seeking info, we&apos;d love to hear from you!
        </p>
      </div>

      {/* Grid: Letter Form (left) + Contact Cards & Showroom (right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Authentic Interactive Letter Form */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-honey-soft/60">
            <h2 className="font-display font-bold text-2xl text-cocoa">
              Write a letter to TeddyPups
            </h2>
            <span className="text-xs font-semibold text-toffee bg-honey-soft/50 px-3 py-1 rounded-full">
              Downtown Dubai Post
            </span>
          </div>

          <LetterForm />
        </div>

        {/* Right Column: Direct Info & Downtown Dubai Showroom */}
        <div className="lg:col-span-5 space-y-8">
          {/* Quick Contact Cards */}
          <div className="rounded-3xl bg-white border border-honey-soft/80 p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="font-display font-bold text-xl text-cocoa border-b border-honey-soft/50 pb-3">
              Direct Channels
            </h3>

            <div className="space-y-4 text-sm">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-milk hover:bg-honey-soft/30 border border-honey-soft/50 transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-toffee text-milk flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-cocoa-soft/60 uppercase tracking-wider font-semibold">
                    WhatsApp (Fastest)
                  </span>
                  <span className="font-bold text-cocoa group-hover:text-toffee transition-colors">
                    {BUSINESS_INFO.phoneFormatted}
                  </span>
                  <span className="block text-xs text-emerald-700 font-medium mt-0.5">
                    ● Available 24/7 for puppy inquiries
                  </span>
                </div>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-milk hover:bg-honey-soft/30 border border-honey-soft/50 transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-honey text-cocoa flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-cocoa-soft/60 uppercase tracking-wider font-semibold">
                    Call us
                  </span>
                  <span className="font-bold text-cocoa group-hover:text-toffee transition-colors">
                    {BUSINESS_INFO.phoneFormatted}
                  </span>
                  <span className="block text-xs text-cocoa-soft/70 mt-0.5">Daily 10 AM – 10 PM</span>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-milk hover:bg-honey-soft/30 border border-honey-soft/50 transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-cocoa text-milk flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs text-cocoa-soft/60 uppercase tracking-wider font-semibold">
                    Email
                  </span>
                  <span className="font-bold text-cocoa group-hover:text-toffee transition-colors break-all">
                    {BUSINESS_INFO.email}
                  </span>
                  <span className="block text-xs text-cocoa-soft/70 mt-0.5">Formal enquiries & exports</span>
                </div>
              </a>
            </div>
          </div>

          {/* Showroom Visit Card */}
          <div className="rounded-3xl bg-cocoa text-milk p-6 sm:p-8 space-y-4 shadow-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-honey">
              Visit us in Downtown Dubai
            </span>
            <h3 className="font-display font-bold text-2xl text-milk">
              Experience the joy face-to-face
            </h3>
            <p className="text-sm text-milk/80 leading-relaxed font-sans">
              Step into our luxury showroom in Downtown Dubai and meet our locally available puppies in a relaxed, private setting.
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-milk/90 pt-2 border-t border-cocoa-soft/60">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-honey flex-shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-honey flex-shrink-0 mt-0.5" />
                <span>Opening Hours: {BUSINESS_INFO.hours}</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-honey text-cocoa text-xs font-bold uppercase tracking-wider hover:bg-honey-soft transition shadow"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
