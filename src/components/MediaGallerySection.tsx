import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Play, X, ChevronLeft, ChevronRight, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { staggerContainer, fadeUpBlur, staggerViewport } from '../utils/animations';

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  category: string;
}

const ALL_MEDIA: MediaItem[] = [
  {
    id: 'img-1',
    type: 'image',
    src: '/images/IMG_6875.JPG',
    title: 'Luxury Property Showcase',
    category: 'Client Advisory'
  },
  {
    id: 'img-2',
    type: 'image',
    src: '/images/IMG_6876.JPG',
    title: 'Dubai Real Estate Excellence',
    category: 'Event Highlight'
  },
  {
    id: 'video-1',
    type: 'video',
    src: '/images/IMG_6879.MP4',
    title: 'Shaista Fathima — Real Estate Excellence Award',
    category: 'Award Recognition'
  },
  {
    id: 'img-3',
    type: 'image',
    src: '/images/IMG_6877.JPG',
    title: 'Private Investor Meetup',
    category: 'Exclusive Briefing'
  },
  {
    id: 'img-4',
    type: 'image',
    src: '/images/IMG_6878.JPG',
    title: 'Gro Vision Leadership',
    category: 'Brand Presence'
  },
  {
    id: 'img-5',
    type: 'image',
    src: '/images/IMG_6880.JPG',
    title: 'VIP Client Consultations',
    category: 'Dubai Living'
  }
];

const LEFT_PHOTOS = [ALL_MEDIA[0], ALL_MEDIA[1]];
const CENTER_MEDIA = [ALL_MEDIA[2], ALL_MEDIA[3]];
const RIGHT_PHOTOS = [ALL_MEDIA[4], ALL_MEDIA[5]];

export const MediaGallerySection: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const activeItem = selectedIndex !== null ? ALL_MEDIA[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + ALL_MEDIA.length) % ALL_MEDIA.length : 0));
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % ALL_MEDIA.length : 0));
  }, [selectedIndex]);

  // Keyboard controls (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  const renderMediaCard = (item: MediaItem) => {
    const isVideo = item.type === 'video';
    const globalIndex = ALL_MEDIA.findIndex((m) => m.id === item.id);

    return (
      <motion.div
        key={item.id}
        variants={fadeUpBlur}
        whileHover={{ y: -6, scale: 1.01 }}
        onClick={() => setSelectedIndex(globalIndex)}
        className={`relative rounded-2xl overflow-hidden glass-panel border transition-all duration-500 cursor-pointer group shadow-xl ${
          isVideo ? 'border-gold/50 hover:border-gold shadow-[0_0_30px_rgba(200,169,106,0.15)]' : 'border-white/10 hover:border-gold/60'
        }`}
      >
        {isVideo ? (
          <div className="relative w-full h-full min-h-[300px] max-h-[420px] bg-black overflow-hidden">
            <video
              src={item.src}
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Video Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-gold/50 text-[10px] font-mono text-gold uppercase tracking-widest">
              <VideoIcon className="w-3 h-3" />
              <span>{item.category}</span>
            </div>

            {/* Centered Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold/30 backdrop-blur-md border-2 border-gold flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-primary transition-all duration-300 shadow-[0_0_30px_rgba(200,169,106,0.6)]">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-current translate-x-0.5" />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full min-h-[220px] bg-black overflow-hidden aspect-[4/3]">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* Photo Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white/80 uppercase tracking-widest">
              <ImageIcon className="w-3 h-3 text-gold" />
              <span>{item.category}</span>
            </div>
          </div>
        )}

        {/* Bottom Details Overlay */}
        <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex flex-col justify-end">
          <h3 className="font-serif-luxury text-lg sm:text-xl text-text-white group-hover:text-gold transition-colors font-bold drop-shadow-md">
            {item.title}
          </h3>
          <span className="text-[10px] font-mono text-gold-light/80 uppercase tracking-wider mt-1 opacity-90">
            Click to View Fullscreen &rarr;
          </span>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="media-gallery" className="py-16 md:py-24 bg-[#0B0B0B] bg-architectural-lines text-text-white relative overflow-hidden border-t border-b border-white/10">
      {/* Background Lighting & Particles */}
      <div className="absolute inset-0 bg-editorial-gold-grid opacity-25 pointer-events-none" />
      <ParticleCanvas variant="dark" particleCount={30} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[700px] h-[340px] sm:h-[700px] bg-gold/10 rounded-full blur-[200px] pointer-events-none max-w-full" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={staggerViewport}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={fadeUpBlur} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/30 bg-gold/10 text-gold text-[11px] uppercase tracking-[0.25em] font-mono mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>EXCLUSIVE MEDIA & EVENTS</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-normal text-text-white">
            Life, Luxury & <span className="italic gold-text-gradient">Market Presence</span>
          </h2>
          <p className="text-text-muted text-sm font-light leading-relaxed mt-4">
            A curated showcase of Shaista Fathima's luxury real estate walk-throughs, high-net-worth investor advisories, and exclusive Dubai event highlights.
          </p>
        </motion.div>

        {/* Organized Symmetrical Gallery Layout */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left Column: 2 Stacked Photo Cards */}
          <div className="flex flex-col gap-6">
            {LEFT_PHOTOS.map((item) => renderMediaCard(item))}
          </div>

          {/* Center Column: Featured Centered Video + 1 Photo Card */}
          <div className="flex flex-col gap-6">
            {CENTER_MEDIA.map((item) => renderMediaCard(item))}
          </div>

          {/* Right Column: 2 Stacked Photo Cards */}
          <div className="flex flex-col gap-6">
            {RIGHT_PHOTOS.map((item) => renderMediaCard(item))}
          </div>
        </motion.div>
      </motion.div>

      {/* Lightbox Modal with Prev/Next Controls */}
      <AnimatePresence>
        {activeItem && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99900] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Top Bar: Close Button & Slide Counter */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-50 pointer-events-auto">
              <div className="px-4 py-1.5 rounded-full bg-black/70 border border-gold/30 text-gold text-xs font-mono tracking-widest">
                {selectedIndex + 1} / {ALL_MEDIA.length}
              </div>

              <button
                onClick={() => setSelectedIndex(null)}
                className="w-12 h-12 rounded-full border border-gold/40 bg-black/60 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300 shadow-lg"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Left Navigation Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gold/40 bg-black/70 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300 z-50 shadow-2xl"
              aria-label="Previous Item"
            >
              <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
            </button>

            {/* Right Navigation Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gold/40 bg-black/70 flex items-center justify-center text-gold hover:bg-gold hover:text-primary transition-all duration-300 z-50 shadow-2xl"
              aria-label="Next Item"
            >
              <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
            </button>

            {/* Modal Media Box */}
            <motion.div
              key={activeItem.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden glass-panel border border-gold/40 shadow-2xl flex items-center justify-center bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              {activeItem.type === 'video' ? (
                <video
                  src={activeItem.src}
                  muted
                  controls
                  autoPlay
                  playsInline
                  className="w-full max-h-[80vh] object-contain rounded-2xl"
                />
              ) : (
                <img
                  src={activeItem.src}
                  alt={activeItem.title}
                  className="w-full max-h-[80vh] object-contain rounded-2xl"
                />
              )}

              {/* Caption Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-black/80 backdrop-blur-md p-4 px-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-serif-luxury text-lg text-gold font-bold">{activeItem.title}</h4>
                  <span className="text-xs font-mono text-text-muted uppercase tracking-wider">{activeItem.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-full bg-white/10 text-white hover:bg-gold hover:text-primary transition-colors text-xs font-mono"
                    title="Previous"
                  >
                    &larr; Prev
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full bg-gold/20 text-gold hover:bg-gold hover:text-primary transition-colors text-xs font-mono font-bold"
                    title="Next"
                  >
                    Next &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
