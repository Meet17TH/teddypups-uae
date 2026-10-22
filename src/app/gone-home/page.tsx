import React from 'react';
import Link from 'next/link';
import { Heart, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import TicketCard from '@/components/TicketCard';
import { TICKETS } from '@/data/tickets';
import { getWhatsAppUrl } from '@/data/navigation';

export const metadata = {
  title: 'Gone home | TeddyPups U.A.E.',
  description:
    'Every puppy here has already joined a loving family. Explore our gone home hall of fame and let us help you find your match.',
};

export default function GoneHomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-honey-soft text-toffee font-hand text-sm sm:text-base">
          <Heart className="w-4 h-4 fill-toffee" />
          <span>tickets home</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cocoa">
          Gone home
        </h1>
        <p className="text-base sm:text-lg text-cocoa-soft leading-relaxed font-sans">
          Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we&apos;ll help you find your match.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/puppies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-toffee text-milk text-xs font-bold uppercase tracking-wider hover:bg-toffee-deep transition shadow-sm"
          >
            <span>See available puppies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={getWhatsAppUrl('Hello TeddyPups, I saw a puppy in your Gone Home section and would love to find a similar one.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-milk border-2 border-honey hover:border-toffee text-cocoa text-xs font-semibold uppercase tracking-wider transition"
          >
            <MessageCircle className="w-4 h-4 text-toffee" />
            <span>Request a Match</span>
          </a>
        </div>
      </div>

      {/* Ticket Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {TICKETS.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>

      {/* Footer Banner */}
      <div className="rounded-3xl bg-honey-soft/30 border border-honey-soft p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
        <Sparkles className="w-8 h-8 text-toffee mx-auto" />
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-cocoa">
          Looking for a specific breed or color?
        </h3>
        <p className="text-sm text-cocoa-soft max-w-lg mx-auto">
          Through our international concierge network, we can source healthy, certified teacup puppies according to your exact preferences.
        </p>
        <div className="pt-2">
          <a
            href={getWhatsAppUrl('Hello TeddyPups, I would like to enquire about ordering a custom puppy.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-toffee text-milk font-bold text-xs uppercase tracking-wider hover:bg-toffee-deep transition shadow"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Speak with our Concierge</span>
          </a>
        </div>
      </div>
    </div>
  );
}
