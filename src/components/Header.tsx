'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle, Phone, MapPin } from 'lucide-react';
import { MAIN_NAV_ITEMS, BUSINESS_INFO, getWhatsAppUrl } from '@/data/navigation';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-milk/95 backdrop-blur-md shadow-sm border-b border-honey-soft/50 py-3'
            : 'bg-milk/80 backdrop-blur-sm py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-toffee rounded-lg"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/brand/logo.png"
                  alt="TeddyPups U.A.E. Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl sm:text-2xl text-cocoa tracking-tight leading-none">
                  TeddyPups
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-toffee uppercase mt-0.5">
                  U.A.E. • Dubai
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-toffee font-semibold bg-honey-soft/40'
                        : 'text-cocoa-soft hover:text-toffee hover:bg-honey-soft/20'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-1.5 px-1.5 py-0.5 text-[11px] font-bold bg-honey text-cocoa rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-milk bg-toffee hover:bg-toffee-deep transition-all duration-200 shadow-sm hover:shadow"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-cocoa hover:text-toffee hover:bg-honey-soft/30 transition-colors focus:outline-none focus:ring-2 focus:ring-toffee"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="fixed inset-0 bg-cocoa/40 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-out drawer */}
        <div
          className={`fixed inset-y-0 right-0 w-full max-w-xs bg-milk p-6 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-honey-soft">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="relative w-9 h-9">
                  <Image src="/brand/logo.png" alt="TeddyPups Logo" fill className="object-contain" />
                </div>
                <span className="font-display font-bold text-lg text-cocoa">TeddyPups U.A.E.</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full text-cocoa hover:bg-honey-soft/30"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links list */}
            <nav className="mt-6 flex flex-col gap-2">
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-honey-soft/60 text-toffee font-bold'
                        : 'text-cocoa-soft hover:bg-honey-soft/20 hover:text-toffee'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-xs font-bold bg-honey text-cocoa rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer footer info */}
          <div className="pt-6 border-t border-honey-soft space-y-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-toffee text-milk text-sm font-semibold tracking-wide uppercase shadow hover:bg-toffee-deep transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <div className="text-xs text-cocoa-soft/80 space-y-1.5 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-toffee flex-shrink-0" />
                <span>Downtown Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-toffee flex-shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
