'use client';

import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { AVAILABLE_PUPPIES } from '@/data/puppies';
import { BUSINESS_INFO } from '@/data/navigation';

interface LetterFormProps {
  initialPuppySlug?: string;
  onSuccess?: () => void;
}

export default function LetterForm({ initialPuppySlug, onSuccess }: LetterFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Dubai, UAE');
  const [selectedPuppy, setSelectedPuppy] = useState(initialPuppySlug || 'any');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [inquiryId, setInquiryId] = useState('');

  const puppyOptions = [
    { value: 'any', label: 'any puppy (not sure yet)' },
    ...AVAILABLE_PUPPIES.map((p) => ({
      value: p.slug,
      label: `${p.name} (${p.breed}, ${p.sex})`,
    })),
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      const generatedId = `TP-${Math.floor(100000 + Math.random() * 900000)}`;
      setInquiryId(generatedId);
      setStatus('submitted');
      if (onSuccess) onSuccess();
    }, 800);
  };

  const handleWhatsAppSend = () => {
    const puppyName =
      selectedPuppy === 'any'
        ? 'Any puppy (exploring options)'
        : AVAILABLE_PUPPIES.find((p) => p.slug === selectedPuppy)?.name || selectedPuppy;

    const text = `Dear TeddyPups,\nMy name is ${name || '[Your Name]'}.\nPhone: ${phone}\nEmail: ${email}\nLocation: ${location}\nI'm curious about: ${puppyName}\nMessage: ${message || 'I would like to inquire about this puppy.'}`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (status === 'submitted') {
    return (
      <div className="rounded-3xl bg-milk border-2 border-honey p-8 sm:p-12 text-center shadow-md animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-honey/20 text-toffee flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9 text-toffee" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-toffee">
          Letter Delivered • Demo Confirmation
        </span>
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-cocoa mt-2">
          Thank you, {name}!
        </h3>
        <p className="text-cocoa-soft text-sm sm:text-base max-w-md mx-auto mt-3 leading-relaxed">
          Your inquiry for{' '}
          <span className="font-semibold text-cocoa">
            {selectedPuppy === 'any'
              ? 'available puppies'
              : AVAILABLE_PUPPIES.find((p) => p.slug === selectedPuppy)?.name}
          </span>{' '}
          has been received (Reference ID: <span className="font-mono font-bold text-toffee">{inquiryId}</span>).
        </p>

        <div className="mt-6 p-4 rounded-2xl bg-honey-soft/30 border border-honey-soft text-xs text-cocoa-soft/90 max-w-md mx-auto text-left space-y-1">
          <p className="font-semibold text-cocoa">Client Service Next Steps:</p>
          <p>• Our Downtown Dubai showroom team typically responds within 15–30 minutes.</p>
          <p>• You may also expedite your request directly on WhatsApp with your inquiry ID.</p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleWhatsAppSend}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-toffee text-milk text-sm font-semibold tracking-wide uppercase hover:bg-toffee-deep transition shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Now on WhatsApp</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setStatus('idle');
              setName('');
              setMessage('');
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-honey-soft/50 text-cocoa text-sm font-semibold hover:bg-honey-soft transition"
          >
            Send Another Letter
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-3xl bg-[#fffcf5] border-2 border-honey-soft/80 p-6 sm:p-10 shadow-lg text-cocoa leading-relaxed font-sans"
    >
      {/* Decorative letter postage stamp in top right */}
      <div className="absolute top-6 right-6 hidden sm:flex flex-col items-center justify-center w-16 h-20 border-2 border-dashed border-toffee/40 rounded-lg bg-honey-soft/30 rotate-2 p-1 text-center pointer-events-none">
        <span className="text-[10px] font-bold text-toffee uppercase leading-none">TeddyPups</span>
        <span className="text-xs font-display font-bold text-cocoa mt-1">DUBAI</span>
        <span className="text-[9px] text-cocoa-soft mt-1">VIP POST</span>
      </div>

      <div className="space-y-6 text-base sm:text-lg">
        <p className="font-display italic text-cocoa font-bold text-xl sm:text-2xl">
          Dear TeddyPups,
        </p>

        {/* Name line */}
        <div className="flex flex-wrap items-baseline gap-2">
          <span>my name is</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="your full name"
            className="flex-1 min-w-[200px] border-b-2 border-honey focus:border-toffee bg-transparent px-2 py-1 text-toffee font-semibold outline-none transition-colors placeholder:text-cocoa-soft/40"
          />
          <span>, and you can reach me on</span>
        </div>

        {/* Phone & email line */}
        <div className="flex flex-wrap items-baseline gap-2">
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+971 50 123 4567"
            className="w-full sm:w-64 border-b-2 border-honey focus:border-toffee bg-transparent px-2 py-1 text-toffee font-semibold outline-none transition-colors placeholder:text-cocoa-soft/40"
          />
          <span>or by email at</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="flex-1 min-w-[220px] border-b-2 border-honey focus:border-toffee bg-transparent px-2 py-1 text-toffee font-semibold outline-none transition-colors placeholder:text-cocoa-soft/40"
          />
          <span>.</span>
        </div>

        {/* Location & Puppy selection line */}
        <div className="flex flex-wrap items-baseline gap-2">
          <span>I live in</span>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Downtown Dubai, UAE"
            className="w-full sm:w-48 border-b-2 border-honey focus:border-toffee bg-transparent px-2 py-1 text-toffee font-semibold outline-none transition-colors"
          />
          <span>, and I&apos;m curious about</span>
          <select
            value={selectedPuppy}
            onChange={(e) => setSelectedPuppy(e.target.value)}
            className="w-full sm:w-auto border-b-2 border-honey focus:border-toffee bg-milk px-3 py-1 text-toffee font-semibold rounded-lg outline-none cursor-pointer"
          >
            {puppyOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span>.</span>
        </div>

        {/* Message field */}
        <div className="space-y-2 pt-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-cocoa-soft/70">
            Your message (optional):
          </label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your home, questions on timing, or specific requests..."
            className="w-full rounded-2xl border-2 border-honey-soft/80 bg-white/70 p-3.5 text-sm text-cocoa placeholder:text-cocoa-soft/40 focus:border-toffee focus:outline-none transition-colors"
          />
        </div>

        {/* Sign-off */}
        <div className="pt-2">
          <p className="font-hand text-xl sm:text-2xl text-cocoa-soft">
            with love, a future puppy parent
          </p>
        </div>
      </div>

      {status === 'error' && (
        <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>Please provide your name, phone number, and email address to send your letter.</span>
        </div>
      )}

      {/* Action buttons */}
      <div className="mt-8 pt-6 border-t border-honey-soft/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-toffee text-milk font-bold text-sm tracking-wide uppercase hover:bg-toffee-deep transition shadow-md disabled:opacity-50"
        >
          <Send className="w-4 h-4" />
          <span>{status === 'submitting' ? 'Delivering letter...' : 'Post my letter'}</span>
        </button>

        <button
          type="button"
          onClick={handleWhatsAppSend}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 text-white font-semibold text-sm tracking-wide uppercase hover:bg-emerald-700 transition shadow"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Send via WhatsApp</span>
        </button>
      </div>
    </form>
  );
}
