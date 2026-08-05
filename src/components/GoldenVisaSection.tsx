import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GOLDEN_VISA_TIERS } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';
import { staggerContainer, fadeUpBlur, staggerViewport } from '../utils/animations';

interface GoldenVisaSectionProps {
  onBookClick: () => void;
}

export const GoldenVisaSection: React.FC<GoldenVisaSectionProps> = ({ onBookClick }) => {
  const [selectedTier, setSelectedTier] = useState<string>(GOLDEN_VISA_TIERS[0].id);

  const activeTierObj = GOLDEN_VISA_TIERS.find(t => t.id === selectedTier) || GOLDEN_VISA_TIERS[0];

  return (
    <section id="golden-visa" className="py-28 bg-gradient-to-b from-primary via-[#15130E] to-primary relative overflow-hidden border-t border-b border-white/10">
      <div className="absolute inset-0 bg-editorial-gold-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold/10 rounded-full blur-[200px] pointer-events-none" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={staggerViewport}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        
        {/* Section Header */}
        <motion.div variants={fadeUpBlur} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 glass-panel-gold text-gold text-xs uppercase tracking-[0.2em] font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>UAE GOLDEN VISA</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-text-white mb-4">
            Residency via <br />
            <span className="italic gold-text-gradient">Real Estate Investment</span>
          </h2>
          <p className="text-text-muted text-sm font-light leading-relaxed">
            Secure long-term 10-year UAE residency through qualifying property acquisitions. Complete end-to-end filing and processing.
          </p>
        </motion.div>

        {/* Visa Tiers Tab Selector */}
        <motion.div variants={fadeUpBlur} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {GOLDEN_VISA_TIERS.map((tier) => {
            const isSelected = tier.id === selectedTier;
            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden border ${
                  isSelected
                    ? 'bg-secondary border-gold shadow-[0_0_30px_rgba(200,169,106,0.2)]'
                    : 'bg-secondary/60 border-white/10 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                    {tier.duration}
                  </span>
                  {isSelected && (
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  )}
                </div>

                <h3 className="font-serif-luxury text-lg text-text-white font-semibold mb-1">
                  {tier.title}
                </h3>

                <p className="text-[11px] text-text-muted font-mono">
                  {tier.target}
                </p>
              </button>
            );
          })}
        </motion.div>

        {/* Selected Visa Tier Highlight Panel */}
        <motion.div variants={fadeUpBlur}>
          <motion.div
            key={activeTierObj.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 md:p-10 rounded-3xl glass-panel-gold border border-gold/40 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-serif-luxury text-gold font-bold">
                    {activeTierObj.duration}
                  </span>
                  <span className="text-xs uppercase font-mono tracking-widest text-text-white px-3 py-1 rounded-full bg-white/10">
                    {activeTierObj.target}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-text-white mb-3">
                  {activeTierObj.title}
                </h3>

                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed mb-6">
                  {activeTierObj.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {activeTierObj.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-text-white p-2.5 rounded-xl bg-primary/80 border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-primary border border-white/10">
                <div className="mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-3">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif-luxury text-lg text-text-white mb-1">
                    Instant Eligibility Check
                  </h4>
                  <p className="text-xs text-text-muted font-light leading-relaxed">
                    Send your property acquisition details for quick Golden Visa qualification review.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/971525970116?text=Hi%20Shaista,%20I%20want%20to%20check%20my%20eligibility%20for%20the%20${encodeURIComponent(activeTierObj.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-full text-xs font-mono uppercase font-bold text-primary bg-gradient-to-r from-gold to-gold-light hover:shadow-[0_0_25px_rgba(200,169,106,0.4)] transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Check Eligibility</span>
                  </a>

                  <button
                    onClick={onBookClick}
                    className="w-full py-3 rounded-full text-xs font-mono uppercase font-semibold text-text-white border border-white/20 hover:border-gold transition-all"
                  >
                    Schedule Advisory
                  </button>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};
