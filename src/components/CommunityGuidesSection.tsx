import React, { useState } from 'react';
import { motion } from 'motion/react';
import { COMMUNITY_GUIDES } from '../data/portfolioData';
import { CommunityGuide } from '../types';
import { MapPin, CheckCircle2, MessageSquare, Sparkles, FileText } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { staggerContainer, fadeUpBlur, staggerViewport } from '../utils/animations';

interface CommunityGuidesSectionProps {
  onBookClick: () => void;
}

export const CommunityGuidesSection: React.FC<CommunityGuidesSectionProps> = ({ onBookClick }) => {
  const [activeGuide, setActiveGuide] = useState<CommunityGuide>(COMMUNITY_GUIDES[0]);

  return (
    <section id="community-guides" className="py-14 md:py-16 bg-[#F5F2EC] bg-architectural-lines-light text-light-text relative overflow-hidden border-t border-b border-gold/20">
      <div className="absolute inset-0 bg-editorial-light-grid opacity-60 pointer-events-none" />
      <ParticleCanvas variant="light" particleCount={40} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/12 rounded-full blur-[200px] pointer-events-none" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={staggerViewport}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        
        {/* Header */}
        <motion.div variants={fadeUpBlur} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-white/80 text-gold-alt text-xs uppercase tracking-[0.2em] font-mono mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5" />
            <span>PRIME DUBAI NEIGHBORHOOD INSIGHTS</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-light-text mb-4">
            Yield & Area Guides
          </h2>
          <p className="text-light-text-muted text-sm font-light leading-relaxed">
            Data-backed insights into Dubai's most liquid real estate enclaves. Rental yield potential, capital growth trajectory, and tenant demand across top communities.
          </p>
        </motion.div>

        {/* Community Tabs with Subtitles & Prices */}
        <motion.div variants={fadeUpBlur} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {COMMUNITY_GUIDES.map((guide) => {
            const isSelected = guide.id === activeGuide.id;
            return (
              <button
                key={guide.id}
                onClick={() => setActiveGuide(guide)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden border ${
                  isSelected
                    ? 'bg-white border-gold-alt shadow-[0_0_20px_rgba(200,169,106,0.35)]'
                    : 'bg-white/70 border-gold/20 hover:border-gold-alt/50 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-gold-alt tracking-wider font-bold px-2 py-0.5 rounded bg-gold/10">
                    Yield: {guide.avgYield}
                  </span>
                  <span className="text-[10px] font-mono text-light-text-muted">
                    {guide.startingPrice}
                  </span>
                </div>
                <h3 className="font-serif-luxury text-lg text-light-text font-semibold mb-1">
                  {guide.name}
                </h3>
                <p className="text-xs text-light-text-muted font-light truncate">
                  {guide.subtitle}
                </p>
              </button>
            );
          })}
        </motion.div>

        {/* Selected Guide Focus Display */}
        <motion.div variants={fadeUpBlur}>
          <motion.div
            key={activeGuide.id}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 rounded-3xl glass-panel-light-gold border border-gold/40 shadow-lg"
          >
            <motion.div variants={fadeUpBlur} className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold/30 shadow-xl">
              <img
                src={activeGuide.image}
                alt={activeGuide.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-light-text/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono">
                <span className="px-3 py-1.5 rounded-full bg-white/90 text-gold-alt border border-gold/40 font-bold shadow-sm">
                  Avg Yield: {activeGuide.avgYield}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-light-text/80 text-[#FAF8F5] border border-white/20">
                  Starting: {activeGuide.startingPrice}
                </span>
              </div>
            </motion.div>

            <motion.div variants={fadeUpBlur} className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-gold-alt tracking-widest mb-2 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>LOCATION HIGHLIGHT</span>
                </div>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl text-light-text mb-1">
                  {activeGuide.name}
                </h3>
                <p className="text-xs font-mono uppercase text-gold-alt tracking-wider mb-4 font-semibold">
                  {activeGuide.subtitle}
                </p>
                <p className="text-sm text-light-text-muted font-light leading-relaxed">
                  {activeGuide.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-xs uppercase font-mono text-gold-alt tracking-wider font-bold">
                  Investment Advantages
                </div>
                {activeGuide.keyHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-light-text p-3 rounded-xl bg-white/90 border border-gold/25 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-gold-alt shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gold/25">
                <a
                  href={`https://wa.me/971525970116?text=Hi%20Shaista,%20I%20want%20to%20explore%20properties%20in%20${encodeURIComponent(activeGuide.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 rounded-full text-xs font-mono uppercase font-bold text-light-text bg-gradient-to-r from-gold via-gold-light to-gold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Explore {activeGuide.name}</span>
                </a>

                <button
                  onClick={onBookClick}
                  className="py-3.5 px-6 rounded-full text-xs font-mono uppercase font-semibold text-light-text border border-gold/40 hover:border-gold-alt transition-all flex items-center justify-center gap-2 bg-white/80"
                >
                  <FileText className="w-4 h-4 text-gold-alt" />
                  <span>Request Area Report</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};
