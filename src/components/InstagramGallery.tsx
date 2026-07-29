import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Instagram, Maximize2, X } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

export const InstagramGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryItems = [
    {
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      caption: "Sunset at Bel Air Hillside Compound 🌅 #LuxuryRealEstate",
      aspect: "aspect-[4/5]"
    },
    {
      url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
      caption: "Handing keys to our VIP tech founder client 🔑✨",
      aspect: "aspect-square"
    },
    {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      caption: "Sky Mansion Views in Financial Center 🏙️",
      aspect: "aspect-[3/4]"
    },
    {
      url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
      caption: "Keynote speaking on HNW Investment Strategies 🎤",
      aspect: "aspect-square"
    },
    {
      url: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
      caption: "Waterfront estate private yacht tour 🛥️",
      aspect: "aspect-[4/5]"
    },
    {
      url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
      caption: "Private client advisory over espresso ☕",
      aspect: "aspect-square"
    }
  ];

  return (
    <section className="py-28 bg-[#FAF8F5] bg-architectural-lines-light text-[#1A1918] relative overflow-hidden border-t border-b border-[#C8A96A]/20">
      {/* Background Decorative Gold Grid Glow */}
      <div className="absolute inset-0 bg-editorial-light-grid opacity-60 pointer-events-none" />

      {/* Moving Particles Canvas */}
      <ParticleCanvas variant="light" particleCount={40} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#937332] font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE CURATED LIFESTYLE JOURNAL</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1918]">
              Behind the Scenes <br />
              <span className="italic text-[#937332]">with Shaista Fathima</span>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/desigirl.realtor"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-xs font-button uppercase tracking-widest font-semibold text-[#1A1918] border border-[#937332]/40 hover:border-[#937332] bg-white shadow-sm hover:shadow-md flex items-center gap-2 w-fit transition-all"
          >
            <Instagram className="w-4 h-4 text-[#937332]" />
            <span>Follow @desigirl.realtor</span>
          </a>
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveImage(item.url)}
              data-cursor="Zoom"
              className="break-inside-avoid cursor-pointer relative rounded-2xl overflow-hidden border border-[#C8A96A]/30 hover:border-[#937332] transition-all group shadow-md hover:shadow-xl"
            >
              <img
                src={item.url}
                alt="Instagram Gallery"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <p className="text-xs text-white font-light">{item.caption}</p>
                <div className="flex items-center gap-1 text-[10px] text-[#E5C378] font-mono mt-2">
                  <Maximize2 className="w-3 h-3" />
                  <span>Click to expand</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-[#C8A96A]/50 shadow-2xl"
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-50 p-3 rounded-full bg-black/70 text-white hover:text-[#C8A96A]"
              >
                <X className="w-6 h-6" />
              </button>
              <img src={activeImage} alt="Expanded View" referrerPolicy="no-referrer" className="w-full h-full object-contain" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
