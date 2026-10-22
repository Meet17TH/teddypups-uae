'use client';

import React, { useState, useMemo } from 'react';
import { HelpCircle, Search, MessageCircle, X, Sparkles, Plus, Minus } from 'lucide-react';
import { FAQS } from '@/data/faqs';
import { BUSINESS_INFO, getWhatsAppUrl } from '@/data/navigation';

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'health', label: 'Health & Vetting' },
  { id: 'visit', label: 'Showroom Visits' },
  { id: 'delivery', label: 'Delivery & Timing' },
  { id: 'import', label: 'Import Journey' },
  { id: 'general', label: 'Breeds & Support' },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((f) => {
      if (selectedCategory !== 'all' && f.category !== selectedCategory) return false;
      if (search.trim() !== '') {
        const q = search.toLowerCase();
        return f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
      }
      return true;
    });
  }, [selectedCategory, search]);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey-soft text-toffee font-hand text-sm sm:text-base">
          <Sparkles className="w-4 h-4 text-toffee" />
          <span>sniff out a question — 9 notes on the board</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-cocoa">
          Questions & answers
        </h1>
        <p className="text-base sm:text-lg text-cocoa-soft max-w-xl mx-auto leading-relaxed font-sans">
          Can&apos;t find what you&apos;re looking for? Message us on WhatsApp — our team is available 24/7.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-lg mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cocoa-soft/50 pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search questions (e.g., vaccine, delivery, import)..."
          className="w-full pl-11 pr-10 py-3 rounded-full bg-white border border-honey-soft text-sm text-cocoa placeholder:text-cocoa-soft/50 focus:outline-none focus:ring-2 focus:ring-toffee shadow-sm transition"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-cocoa-soft/60 hover:text-cocoa"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                isSelected
                  ? 'bg-toffee text-milk shadow-sm'
                  : 'bg-white border border-honey-soft text-cocoa-soft hover:border-toffee hover:text-toffee'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-3xl bg-white border border-honey-soft/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-display font-bold text-lg text-cocoa hover:text-toffee transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-toffee text-milk' : 'bg-honey-soft/50 text-cocoa'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-cocoa-soft leading-relaxed font-sans border-t border-honey-soft/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 text-cocoa-soft">
            <p className="font-display text-lg">No matching questions found.</p>
            <p className="text-xs mt-1">Try another search term or ask us directly on WhatsApp.</p>
          </div>
        )}
      </div>

      {/* Ask Your Own Question Card */}
      <div className="rounded-3xl bg-cocoa text-milk p-8 sm:p-10 text-center space-y-4 shadow-xl">
        <span className="text-xs font-bold uppercase tracking-widest text-honey">
          Have an unlisted question?
        </span>
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-milk">
          Ask our puppy concierge directly
        </h3>
        <p className="text-sm text-milk/80 max-w-md mx-auto leading-relaxed">
          We are ready to provide photos, vaccination specifics, breed availability, or schedule your visit to Downtown Dubai.
        </p>
        <div className="pt-2">
          <a
            href={getWhatsAppUrl('Hello TeddyPups, I have a question about your puppies.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-honey text-cocoa font-bold text-sm tracking-wide uppercase hover:bg-honey-soft transition shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
