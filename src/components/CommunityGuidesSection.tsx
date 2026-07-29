import React, { useState } from 'react';
import { motion } from 'motion/react';
import { COMMUNITY_GUIDES } from '../data/portfolioData';
import { CommunityGuide } from '../types';
import { MapPin, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

interface CommunityGuidesSectionProps {
  onBookClick: () => void;
}

export const CommunityGuidesSection: React.FC<CommunityGuidesSectionProps> = ({ onBookClick }) => {
  const [activeGuide, setActiveGuide] = useState<CommunityGuide>(COMMUNITY_GUIDES[0]);

  return (
    <section id="community-guides" className="py-28 bg-[#F5F2EC] bg-architectural-lines-light text-[#1A1918] relative overflow-hidden border-t border-b border-[#C8A96A]/20">
      {/* Background Lighting & Dot Grid */}
      <div className="absolute inset-0 bg-editorial-light-grid opacity-60 pointer-events-none" />

      {/* Moving Particles Canvas */}
      <ParticleCanvas variant="light" particleCount={40} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C8A96A]/12 rounded-full blur-[200px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8A96A]/30 bg-white/80 text-[#937332] text-xs uppercase tracking-[0.2em] font-mono mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5" />
            <span>PRIME DUBAI NEIGHBORHOOD INSIGHTS</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1918] mb-4">
            Master Community <br />
            <span className="italic text-[#937332]">Yield & Area Guides</span>
          </h2>
          <p className="text-[#55524D] text-sm font-light leading-relaxed">
            Data-backed insights into Dubai's most liquid real estate enclaves. Shaista Fathima analyzes rental yield potential, capital growth trajectory, and tenant demand across top communities.
          </p>
        </div>

        {/* Community Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {COMMUNITY_GUIDES.map((guide) => {
            const isSelected = guide.id === activeGuide.id;
            return (
              <button
                key={guide.id}
                onClick={() => setActiveGuide(guide)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden border ${
                  isSelected
                    ? 'bg-white border-[#937332] shadow-[0_0_20px_rgba(200,169,106,0.3)]'
                    : 'bg-white/60 border-[#C8A96A]/20 hover:border-[#937332]/50'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-[#937332] tracking-wider mb-1 font-bold">
                  {guide.avgYield}
                </div>
                <h3 className="font-serif-luxury text-lg text-[#1A1918] font-semibold truncate">
                  {guide.name}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Selected Guide Focus Display */}
        <motion.div
          key={activeGuide.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 rounded-3xl glass-panel-light-gold border border-[#C8A96A]/40 shadow-lg"
        >
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#C8A96A]/30 shadow-xl">
            <img
              src={activeGuide.image}
              alt={activeGuide.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono">
              <span className="px-3 py-1.5 rounded-full bg-white/90 text-[#937332] border border-[#C8A96A]/40 font-bold shadow-sm">
                Avg Yield: {activeGuide.avgYield}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#1A1918]/80 text-[#FAF8F5] border border-white/20">
                Starting: {activeGuide.startingPrice}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#937332] tracking-widest mb-2 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LOCATION HIGHLIGHT</span>
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#1A1918] mb-2">
                {activeGuide.name}
              </h3>
              <p className="text-xs font-mono uppercase text-[#937332] tracking-wider mb-4 font-semibold">
                {activeGuide.subtitle}
              </p>
              <p className="text-sm text-[#55524D] font-light leading-relaxed">
                {activeGuide.description}
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-xs uppercase font-mono text-[#937332] tracking-wider font-bold">
                Investment Advantages
              </div>
              {activeGuide.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-[#1A1918] p-3 rounded-xl bg-white/90 border border-[#C8A96A]/25 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#937332] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#C8A96A]/25">
              <a
                href={`https://wa.me/971525970116?text=Hi%20Shaista,%20I%20want%20to%20explore%20properties%20in%20${encodeURIComponent(activeGuide.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 rounded-full text-xs font-mono uppercase font-bold text-[#1A1918] bg-gradient-to-r from-[#C8A96A] via-[#E5C378] to-[#C8A96A] hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Explore {activeGuide.name}</span>
              </a>

              <button
                onClick={onBookClick}
                className="py-3.5 px-6 rounded-full text-xs font-mono uppercase font-semibold text-[#1A1918] border border-[#937332] hover:bg-[#937332]/10 transition-all"
              >
                Request Area Report
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
