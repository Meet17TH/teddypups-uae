'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Phone, Mail, MapPin, Heart, ArrowUpRight } from 'lucide-react';
import { FOOTER_EXPLORE_LINKS, BUSINESS_INFO, getWhatsAppUrl } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-cocoa text-milk pt-16 pb-12 border-t border-cocoa-soft/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner CTA section */}
        <div className="relative mb-16 rounded-3xl bg-cocoa-soft/40 border border-honey/20 p-8 sm:p-12 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-honey/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-block text-xs uppercase tracking-widest font-semibold text-honey mb-2 font-sans">
                Every puppy is family
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-milk">
                Ready to meet your new best friend?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-milk/80 leading-relaxed font-sans">
                Visit our Downtown Dubai showroom or speak with our concierge to reserve your dream teacup companion today.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/puppies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-honey text-cocoa font-bold text-sm tracking-wide uppercase hover:bg-honey-soft transition shadow-md"
              >
                <span>View puppies</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-toffee text-milk font-semibold text-sm tracking-wide uppercase hover:bg-toffee-deep transition shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-cocoa-soft/40">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image src="/brand/logo.png" alt="TeddyPups U.A.E." fill className="object-contain" />
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-milk tracking-tight">TeddyPups</span>
                <span className="block text-xs font-semibold text-honey tracking-widest uppercase">
                  U.A.E. • Dubai
                </span>
              </div>
            </Link>
            <p className="text-sm text-milk/70 leading-relaxed max-w-sm font-sans">
              Teddy bear and teacup puppies in Dubai. Meet local puppies in our Downtown Dubai showroom or bring home a rare miniature breed imported from certified ethical breeders worldwide.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-honey">
              <span className="px-3 py-1 rounded-full bg-honey/10 border border-honey/20">
                100% Health Certified
              </span>
              <span className="px-3 py-1 rounded-full bg-honey/10 border border-honey/20">
                24/7 Client Care
              </span>
            </div>
          </div>

          {/* Explore links */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-lg font-bold text-milk mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-milk/70 hover:text-honey transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Say hello / Contact info */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display text-lg font-bold text-milk mb-4">Say hello</h4>
            <div className="space-y-3 text-sm text-milk/80">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-honey transition group"
              >
                <MessageCircle className="w-5 h-5 text-honey mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-xs text-milk/50">WhatsApp Concierge</span>
                  <span className="font-medium">{BUSINESS_INFO.phoneFormatted}</span>
                </div>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneTel}`}
                className="flex items-start gap-3 hover:text-honey transition group"
              >
                <Phone className="w-5 h-5 text-honey mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-xs text-milk/50">Call us</span>
                  <span className="font-medium">{BUSINESS_INFO.phoneFormatted}</span>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-start gap-3 hover:text-honey transition group"
              >
                <Mail className="w-5 h-5 text-honey mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-xs text-milk/50">Email</span>
                  <span className="font-medium">{BUSINESS_INFO.email}</span>
                </div>
              </a>

              <div className="flex items-start gap-3 pt-1">
                <MapPin className="w-5 h-5 text-honey mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block text-xs text-milk/50">Showroom</span>
                  <span className="font-medium">{BUSINESS_INFO.address}</span>
                  <span className="block text-xs text-milk/50 mt-0.5">{BUSINESS_INFO.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-milk/50 gap-4">
          <p>© {new Date().getFullYear()} TeddyPups U.A.E. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-toffee fill-toffee" />
            <span>for puppy lovers in Dubai & worldwide</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
