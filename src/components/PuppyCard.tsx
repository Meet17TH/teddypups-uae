'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Video, Heart, Sparkles, MapPin, Globe } from 'lucide-react';
import { Puppy } from '@/data/puppies';

interface PuppyCardProps {
  puppy: Puppy;
  priority?: boolean;
}

export default function PuppyCard({ puppy, priority = false }: PuppyCardProps) {
  // Primary photo
  const primaryMedia = puppy.media.find((m) => m.kind === 'image') || puppy.media[0];
  const photoUrl = primaryMedia ? primaryMedia.url : '/brand/logo.png';
  const photoAlt = primaryMedia ? primaryMedia.alt || `${puppy.name}, ${puppy.breed}` : puppy.name;

  const isAvailable = puppy.status === 'available';

  return (
    <article className="group relative">
      <Link
        href={`/puppies/${puppy.slug}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-toffee rounded-3xl"
        aria-label={`${puppy.name}, ${puppy.breed}, ${puppy.sex}, ${puppy.age}, ${puppy.status}`}
      >
        {/* Card outer container with slight rotation */}
        <div
          className="relative transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-xl rounded-3xl p-3 sm:p-4 bg-white border border-honey-soft/80 shadow-sm"
          style={{
            transform: `rotate(${puppy.tilt || '0deg'})`,
          }}
        >
          {/* Wash background aura */}
          <div
            className="absolute inset-2 -z-10 rounded-3xl opacity-30 transition-opacity duration-300 group-hover:opacity-60 blur-sm"
            style={{ backgroundColor: puppy.washColor || '#f2be6b' }}
          />

          {/* Photo frame */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-cocoa-soft/10">
            <Image
              src={photoUrl}
              alt={photoAlt}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={priority}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              style={{
                objectPosition: primaryMedia
                  ? `${(primaryMedia.focalX * 100).toFixed(1)}% ${(primaryMedia.focalY * 100).toFixed(1)}%`
                  : '50% 50%',
              }}
            />

            {/* Badges on top of image */}
            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-start justify-between gap-1.5 pointer-events-none">
              {/* Origin badge */}
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm backdrop-blur-md ${
                  puppy.origin === 'In Dubai'
                    ? 'bg-milk/95 text-cocoa'
                    : 'bg-cocoa/90 text-honey'
                }`}
              >
                {puppy.origin === 'In Dubai' ? (
                  <>
                    <MapPin className="w-3 h-3 text-toffee" />
                    <span>In Dubai</span>
                  </>
                ) : (
                  <>
                    <Globe className="w-3 h-3 text-honey" />
                    <span>Imported</span>
                  </>
                )}
              </span>

              {/* Video badge if available */}
              {puppy.hasVideo && (
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold bg-cocoa/80 text-milk backdrop-blur-md shadow-sm">
                  <Video className="w-3 h-3 text-honey" />
                  <span className="hidden xs:inline">Video</span>
                </span>
              )}
            </div>

            {/* Status ribbon at bottom if gone home */}
            {!isAvailable && (
              <div className="absolute inset-0 bg-cocoa/50 backdrop-blur-[2px] flex items-center justify-center p-4">
                <span className="px-4 py-1.5 rounded-full bg-honey text-cocoa font-display font-bold text-sm tracking-wide uppercase shadow-lg">
                  Gone Home ♥
                </span>
              </div>
            )}
          </div>

          {/* Details footer */}
          <div className="mt-3.5 px-1 pb-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display font-bold text-lg sm:text-xl text-cocoa tracking-tight group-hover:text-toffee transition-colors line-clamp-1">
                {puppy.name}
              </h3>
              {isAvailable && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-emerald-100 text-emerald-800">
                  Available
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-cocoa-soft/90 font-medium mt-1">
              <span>{puppy.breed}</span>
              <span className="mx-1 text-honey">•</span>
              <span className="capitalize">{puppy.sex}</span>
              <span className="mx-1 text-honey">•</span>
              <span>{puppy.age}</span>
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
