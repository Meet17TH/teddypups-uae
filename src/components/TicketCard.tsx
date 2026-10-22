'use client';

import React from 'react';
import { Heart, Sparkles, Ticket } from 'lucide-react';
import { HomeTicket } from '@/data/tickets';

interface TicketCardProps {
  ticket: HomeTicket;
}

export default function TicketCard({ ticket }: TicketCardProps) {
  return (
    <div className="relative group bg-[#fffaf0] border border-honey/60 rounded-3xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Perforated side punch-out illusions */}
      <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-milk border border-honey/60" />
      <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-milk border border-honey/60" />

      {/* Top stub header */}
      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-toffee border-b border-dashed border-honey/50 pb-3 mb-3">
        <span className="flex items-center gap-1">
          <Ticket className="w-3.5 h-3.5" />
          <span>One Ticket Home</span>
        </span>
        <span className="font-mono text-cocoa-soft/60">{ticket.ticketNo}</span>
      </div>

      {/* Puppy info */}
      <div className="text-center py-2">
        <h3 className="font-display font-bold text-2xl text-cocoa tracking-tight group-hover:text-toffee transition-colors">
          {ticket.name}
        </h3>
        <p className="text-xs text-cocoa-soft font-medium mt-1">
          {ticket.breed}, {ticket.gender}
        </p>
      </div>

      {/* Destination stamp */}
      <div className="mt-3 pt-3 border-t border-dashed border-honey/50 flex items-center justify-between text-xs">
        <span className="text-cocoa-soft/70 font-semibold">{ticket.destination}</span>
        <span className="inline-flex items-center gap-1 font-bold text-toffee bg-honey-soft/50 px-2.5 py-0.5 rounded-full text-[11px]">
          <span>home</span>
          <Heart className="w-3 h-3 fill-toffee" />
        </span>
      </div>
    </div>
  );
}
