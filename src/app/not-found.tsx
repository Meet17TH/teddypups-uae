import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-honey-soft text-toffee font-display font-bold text-3xl">
        404
      </div>
      <h1 className="font-display font-bold text-3xl sm:text-4xl text-cocoa">
        Puppy not found
      </h1>
      <p className="text-cocoa-soft text-sm sm:text-base max-w-md mx-auto leading-relaxed">
        The page or puppy profile you are looking for may have moved or is no longer available.
      </p>
      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/puppies"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-toffee text-milk text-xs font-bold uppercase tracking-wider hover:bg-toffee-deep transition"
        >
          <span>Browse Available Puppies</span>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-milk border border-honey text-cocoa text-xs font-semibold uppercase tracking-wider hover:border-toffee transition"
        >
          <Home className="w-4 h-4 text-toffee" />
          <span>Go to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
