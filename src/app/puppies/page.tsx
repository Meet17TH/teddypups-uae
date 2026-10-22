'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import PuppyCard from '@/components/PuppyCard';
import FilterBar from '@/components/FilterBar';
import { AVAILABLE_PUPPIES } from '@/data/puppies';
import { Sparkles, Frown } from 'lucide-react';

function PuppiesCatalogueContent() {
  const searchParams = useSearchParams();
  const initialOrigin = searchParams.get('origin') || 'all';
  const initialBreed = searchParams.get('breed') || 'all';

  const [origin, setOrigin] = useState(initialOrigin);
  const [breed, setBreed] = useState(initialBreed);
  const [search, setSearch] = useState('');

  // Filter puppies reactively
  const filteredPuppies = useMemo(() => {
    return AVAILABLE_PUPPIES.filter((p) => {
      // Origin filter
      if (origin === 'local' && p.origin !== 'In Dubai') return false;
      if (origin === 'imported' && p.origin !== 'Imported') return false;

      // Breed filter
      if (breed !== 'all') {
        const b = breed.toLowerCase();
        const matchesCategory = p.breedCategory === b;
        const matchesSlug = p.slug.toLowerCase().includes(b);
        const matchesBreed = p.breed.toLowerCase().includes(b);
        if (!matchesCategory && !matchesSlug && !matchesBreed) return false;
      }

      // Search query filter
      if (search.trim() !== '') {
        const query = search.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesBreed = p.breed.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        if (!matchesName && !matchesBreed && !matchesDesc) return false;
      }

      return true;
    });
  }, [origin, breed, search]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Page Title & Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-honey-soft/70 text-toffee font-bold text-xs uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real Puppies • Real Photos</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-cocoa">
          Available puppies
        </h1>
        <p className="text-sm sm:text-base text-cocoa-soft leading-relaxed font-sans">
          Browse our healthy, fully health-checked, vaccinated, and certified teacup and teddy bear puppies ready to join your family today.
        </p>
      </div>

      {/* Filter Component */}
      <FilterBar
        origin={origin}
        setOrigin={setOrigin}
        breed={breed}
        setBreed={setBreed}
        search={search}
        setSearch={setSearch}
        totalCount={filteredPuppies.length}
      />

      {/* Grid of Puppy Cards */}
      {filteredPuppies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPuppies.map((puppy, idx) => (
            <PuppyCard key={puppy.slug} puppy={puppy} priority={idx < 4} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-3xl bg-white border border-honey-soft p-12 text-center max-w-md mx-auto space-y-4 shadow-sm">
          <div className="w-14 h-14 rounded-full bg-honey-soft/50 text-cocoa-soft flex items-center justify-center mx-auto">
            <Frown className="w-7 h-7 text-toffee" />
          </div>
          <h3 className="font-display font-bold text-xl text-cocoa">No puppies found</h3>
          <p className="text-sm text-cocoa-soft">
            We couldn&apos;t find any puppies matching your current filters. Try resetting the filters or searching for another breed.
          </p>
          <button
            type="button"
            onClick={() => {
              setOrigin('all');
              setBreed('all');
              setSearch('');
            }}
            className="px-6 py-2.5 rounded-full bg-toffee text-milk text-xs font-bold uppercase tracking-wider hover:bg-toffee-deep transition"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function PuppiesPage() {
  return (
    <Suspense fallback={<div className="p-20 text-center font-display">Loading puppies...</div>}>
      <PuppiesCatalogueContent />
    </Suspense>
  );
}
