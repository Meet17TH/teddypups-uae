'use client';

import React from 'react';
import { Search, X, SlidersHorizontal } from 'lucide-react';

interface FilterBarProps {
  origin: string;
  setOrigin: (val: string) => void;
  breed: string;
  setBreed: (val: string) => void;
  search: string;
  setSearch: (val: string) => void;
  totalCount: number;
}

const BREED_OPTIONS = [
  { label: 'All Breeds', value: 'all' },
  { label: 'Maltipoo', value: 'maltipoo' },
  { label: 'Pomeranian', value: 'pomeranian' },
  { label: 'Poodle', value: 'poodle' },
  { label: 'Cavapoo', value: 'cavapoo' },
  { label: 'Shih Tzu', value: 'shih-tzu' },
];

const ORIGIN_OPTIONS = [
  { label: 'All Origins', value: 'all' },
  { label: 'In Dubai Showroom', value: 'local' },
  { label: 'Imported for You', value: 'imported' },
];

export default function FilterBar({
  origin,
  setOrigin,
  breed,
  setBreed,
  search,
  setSearch,
  totalCount,
}: FilterBarProps) {
  const hasActiveFilters = origin !== 'all' || breed !== 'all' || search.trim() !== '';

  const clearAll = () => {
    setOrigin('all');
    setBreed('all');
    setSearch('');
  };

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-3xl p-4 sm:p-6 border border-honey-soft/80 shadow-sm space-y-4">
      {/* Top row: search & active counter */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cocoa-soft/50 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by puppy name or breed..."
            className="w-full pl-10 pr-9 py-2.5 rounded-full bg-milk border border-honey-soft text-sm text-cocoa placeholder:text-cocoa-soft/50 focus:outline-none focus:ring-2 focus:ring-toffee transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-cocoa-soft/60 hover:text-cocoa rounded-full"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Counter & clear filters */}
        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs sm:text-sm">
          <span className="font-semibold text-cocoa">
            {totalCount} {totalCount === 1 ? 'puppy' : 'puppies'} found
          </span>
          {hasActiveFilters && (
            <button
              onClick={clearAll}
              className="text-toffee hover:text-toffee-deep font-semibold underline underline-offset-2 flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter pills: Origin tabs */}
      <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-honey-soft/40">
        <span className="text-xs font-bold uppercase tracking-wider text-cocoa-soft/70 mr-1 flex items-center gap-1">
          <SlidersHorizontal className="w-3.5 h-3.5 text-toffee" />
          <span>Origin:</span>
        </span>
        {ORIGIN_OPTIONS.map((opt) => {
          const isSelected = origin === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => setOrigin(opt.value)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                isSelected
                  ? 'bg-toffee text-milk shadow-sm'
                  : 'bg-milk border border-honey-soft text-cocoa-soft hover:border-toffee hover:text-toffee'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Filter pills: Breed pills */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-cocoa-soft/70 mr-1">
          Breed:
        </span>
        {BREED_OPTIONS.map((opt) => {
          const isSelected = breed === opt.value;
          return (
            <button
              key={opt.value}
              onClick={() => setBreed(opt.value)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                isSelected
                  ? 'bg-honey text-cocoa shadow-sm'
                  : 'bg-milk border border-honey-soft text-cocoa-soft hover:border-honey hover:text-cocoa'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
