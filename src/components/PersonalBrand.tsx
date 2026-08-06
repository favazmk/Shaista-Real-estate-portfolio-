import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLIENT_PROFILE, SOCIAL_REELS } from '../data/portfolioData';
import { Instagram, X, Play } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardReveal = {
  hidden: { opacity: 0, y: 80, rotate: 2 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

interface CinematicReelCardProps {
  reel: any;
  isDimmed?: boolean;
  onClick: (reel: any) => void;
}

const CinematicReelCard: React.FC<CinematicReelCardProps> = ({ reel, isDimmed, onClick }) => {
  return (
    <motion.div
      variants={cardReveal}
      onClick={() => onClick(reel)}
      className="group relative cursor-pointer"
      style={{
        opacity: isDimmed ? 0.45 : 1,
        filter: isDimmed ? 'blur(2px)' : 'blur(0px)',
        transition: 'opacity 0.5s ease, filter 0.5s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease'
      }}
      whileHover={{ y: -12 }}
    >
      {/* Aspect Ratio Container */}
      <div className="w-full aspect-[9/16] rounded-[24px] overflow-hidden bg-[#090909] relative">
        
        {/* Thumbnail */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
          style={{ backgroundImage: `url(${reel.thumbnail})` }}
        />

        {/* Cinematic Overlays */}
        <div 
          className="absolute inset-0 z-10 transition-opacity duration-700 ease-out"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 100%)'
          }}
        />

        {/* Gold Border Fade In */}
        <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-[24px] z-30 transition-colors duration-700 pointer-events-none" />

        {/* Content Layer */}
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between text-[#F4F1EA]">
          
          {/* Top Bar */}
          <div className="flex justify-between items-start w-full min-h-[24px]">
            {reel.category && (
              <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-widest font-mono text-gold">
                {reel.category}
              </div>
            )}
            {reel.duration && (
              <div className="text-[11px] font-mono font-medium drop-shadow-md ml-auto">
                {reel.duration}
              </div>
            )}
          </div>

          {/* Center Play Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-[80px] h-[80px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-500">
              <Play className="w-8 h-8 text-white fill-white translate-x-[2px]" />
            </div>
          </div>

          {/* Bottom Info */}
          <div className="flex flex-col gap-2">
            {reel.title && (
              <h4 className="font-serif-luxury text-xl leading-tight">
                {reel.title}
              </h4>
            )}
            {(reel.views || reel.date) && (
              <div className="flex items-center gap-3 text-[10px] font-mono text-white/60 uppercase tracking-widest">
                {reel.views && <span>{reel.views}</span>}
                {(reel.views && reel.date) && <span className="w-1 h-1 rounded-full bg-gold/50" />}
                {reel.date && <span>{reel.date}</span>}
              </div>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

// ----------------------------------------------------------------------
// Main PersonalBrand Component
// ----------------------------------------------------------------------
export const PersonalBrand: React.FC = () => {
  const [activeModalReel, setActiveModalReel] = useState<any>(null);

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModalReel(null);
    };
    if (activeModalReel) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModalReel]);

  return (
    <>
      <section id="brand" className="py-14 md:py-16 bg-[#090909] relative overflow-hidden border-t border-b border-white/5">
        
        {/* Moving Particles Canvas for background depth */}
        <ParticleCanvas variant="dark" particleCount={25} />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          
          {/* Editorial Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
          >
            <div>
              <h2 className="font-serif-luxury text-3xl md:text-4xl text-[#F4F1EA] mb-3">
                Real Estate Insights
              </h2>
              <h3 className="font-serif-luxury text-3xl md:text-4xl text-gold italic mb-6">
                Luxury Property Stories from Dubai
              </h3>
              <p className="font-sans text-sm md:text-base text-white/60 font-light max-w-xl leading-relaxed">
                Short-form educational videos covering Dubai real estate, investment opportunities, Golden Visa updates, luxury communities and market insights.
              </p>
            </div>

            {/* Instagram Profile Action */}
            <div className="flex flex-col items-end gap-4">
              <a
                href="https://www.instagram.com/desigirl.realtor"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-gold to-yellow-200 p-[2px]">
                  <div className="w-full h-full bg-[#090909] rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-mono text-[#F4F1EA] mb-1">@desigirl.realtor</div>
                  <div className="text-[10px] uppercase tracking-widest text-gold font-bold">Follow</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Cinematic Reels Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SOCIAL_REELS.map((reel) => (
              <CinematicReelCard 
                key={reel.id} 
                reel={reel}
                onClick={setActiveModalReel}
              />
            ))}
          </motion.div>

        </div>
      </section>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {activeModalReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={() => setActiveModalReel(null)}
          >
            {/* Minimal Close Button */}
            <button 
              className="absolute top-8 right-8 w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors duration-300 z-50"
              onClick={() => setActiveModalReel(null)}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video Player */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[400px] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-[0_0_100px_rgba(212,175,55,0.15)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fallback to image if no valid raw MP4 is provided */}
              <div className="absolute inset-0 bg-cover bg-center opacity-40 blur-lg" style={{ backgroundImage: `url(${activeModalReel.thumbnail})` }} />
              <video 
                autoPlay 
                loop 
                controls
                playsInline
                className="w-full h-full object-cover relative z-10"
                src={activeModalReel.video.endsWith('.mp4') ? activeModalReel.video : "https://cdn.coverr.co/videos/coverr-a-beautiful-aerial-view-of-dubai-4422/1080p.mp4"} 
              />
              {/* Note: I added a high-quality placeholder Dubai video if the URL isn't an MP4 so the autoplay requirement functions nicely for the demo */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
