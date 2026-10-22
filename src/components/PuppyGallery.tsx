'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Maximize2, X, ChevronLeft, ChevronRight, Video } from 'lucide-react';
import { PuppyMedia } from '@/data/puppies';

interface PuppyGalleryProps {
  media: PuppyMedia[];
  puppyName: string;
}

export default function PuppyGallery({ media, puppyName }: PuppyGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeMedia = media[selectedIndex] || media[0];

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, media.length]);

  if (!media || media.length === 0) {
    return (
      <div className="aspect-[4/5] rounded-3xl bg-honey-soft/30 flex items-center justify-center text-cocoa-soft">
        No images available
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main active viewer */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white border border-honey-soft shadow-lg group">
        {activeMedia.kind === 'video' ? (
          <div className="relative w-full h-full bg-black flex items-center justify-center">
            <video
              src={activeMedia.url}
              controls
              autoPlay
              playsInline
              loop
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <>
            <Image
              src={activeMedia.url}
              alt={activeMedia.alt || `${puppyName} photograph`}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out"
              style={{
                objectPosition: `${(activeMedia.focalX * 100).toFixed(1)}% ${(activeMedia.focalY * 100).toFixed(1)}%`,
              }}
            />

            {/* Click to zoom button */}
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-milk/80 backdrop-blur-md text-cocoa hover:bg-milk hover:text-toffee shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Open full screen image viewer"
            >
              <Maximize2 className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Gallery arrow navigation overlay */}
        {media.length > 1 && (
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 pointer-events-none">
            <button
              type="button"
              onClick={handlePrev}
              className="pointer-events-auto p-2 rounded-full bg-milk/80 backdrop-blur-md text-cocoa hover:bg-milk hover:text-toffee shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="pointer-events-auto p-2 rounded-full bg-milk/80 backdrop-blur-md text-cocoa hover:bg-milk hover:text-toffee shadow-md transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Counter pill */}
        <div className="absolute bottom-4 left-4 pointer-events-none">
          <span className="px-3 py-1 rounded-full bg-cocoa/75 text-milk text-xs font-semibold backdrop-blur-sm shadow">
            {selectedIndex + 1} / {media.length}
          </span>
        </div>
      </div>

      {/* Thumbnails list */}
      {media.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {media.map((item, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={item.id || idx}
                onClick={() => setSelectedIndex(idx)}
                className={`relative flex-shrink-0 w-20 h-24 rounded-2xl overflow-hidden border-2 transition-all ${
                  isSelected
                    ? 'border-toffee ring-2 ring-toffee/30 scale-105 shadow-md'
                    : 'border-honey-soft/80 opacity-70 hover:opacity-100 hover:border-honey'
                }`}
                aria-label={`View photo ${idx + 1}`}
              >
                <Image
                  src={item.url}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
                {item.kind === 'video' && (
                  <div className="absolute inset-0 bg-cocoa/40 flex items-center justify-center">
                    <Video className="w-4 h-4 text-honey" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-cocoa/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Full screen photo gallery"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-milk/10 text-milk hover:bg-milk/20 transition-all z-50"
            aria-label="Close full screen view"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox arrows */}
          {media.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-milk/10 text-milk hover:bg-milk/20 transition-all z-50"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-milk/10 text-milk hover:bg-milk/20 transition-all z-50"
                aria-label="Next photo"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </>
          )}

          {/* Lightbox media content */}
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center">
            {activeMedia.kind === 'video' ? (
              <video
                src={activeMedia.url}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
              />
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={activeMedia.url}
                  alt={activeMedia.alt || `${puppyName} photograph`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
