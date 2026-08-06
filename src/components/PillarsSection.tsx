import React from 'react';
import { motion } from 'motion/react';
import { CLIENT_PROFILE } from '../data/portfolioData';
import { 
  Building2, 
  Ruler, 
  Network, 
  Compass, 
  TrendingUp, 
  SearchCheck 
} from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { staggerContainer, fadeUpBlur, staggerViewport } from '../utils/animations';

const PILLAR_ICONS = [Building2, Ruler, Network, Compass, TrendingUp];
const PILLAR_TAGS = [
  "Track Record Audit",
  "Material Specification",
  "Metro & Infrastructure",
  "Prime Location Matrix",
  "Yield & Appreciation"
];

export const PillarsSection: React.FC = () => {
  return (
    <section 
      id="pillars" 
      className="py-16 md:py-24 bg-[#FAF8F5] text-light-text relative overflow-hidden border-t border-b border-gold/20"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-editorial-light-grid opacity-50 pointer-events-none" />
      <ParticleCanvas variant="light" particleCount={25} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[160px] pointer-events-none" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={staggerViewport}
        className="max-w-6xl mx-auto px-6 md:px-12 relative z-10"
      >
        {/* Simplified Clean Header */}
        <motion.div variants={fadeUpBlur} className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-white/80 text-gold-alt text-[11px] uppercase tracking-[0.2em] font-mono mb-3 shadow-sm">
            <SearchCheck className="w-3.5 h-3.5" />
            <span>DUE DILIGENCE</span>
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-light-text font-normal">
            5 Pillars of Property Evaluation
          </h3>
          <p className="text-xs sm:text-sm text-light-text-muted font-light mt-2.5 leading-relaxed">
            Every property is audited across five core evaluation criteria before client recommendation.
          </p>
        </motion.div>

        {/* Clean & Spacious 5 Pillars Grid */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
          {CLIENT_PROFILE.dueDiligencePillars.map((pillar, idx) => {
            const IconComponent = PILLAR_ICONS[idx % PILLAR_ICONS.length];
            const tag = PILLAR_TAGS[idx % PILLAR_TAGS.length];

            return (
              <motion.div
                key={idx}
                variants={fadeUpBlur}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative flex flex-col justify-between p-5 rounded-2xl bg-white/90 border border-gold/30 hover:border-gold-alt shadow-[0_4px_16px_rgba(200,169,106,0.1)] hover:shadow-[0_12px_32px_rgba(200,169,106,0.2)] transition-all duration-300 group min-h-[280px]"
              >
                {/* Top Header Row */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold-alt group-hover:bg-gold-alt group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xl font-bold text-gold-alt/40 group-hover:text-gold-alt transition-colors duration-300">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-serif-luxury text-base text-light-text font-bold mb-2 leading-snug group-hover:text-gold-alt transition-colors">
                    {pillar.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-light-text-muted font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Tag Badge */}
                <div className="pt-3 mt-4 border-t border-gold/15 flex items-center justify-between">
                  <span className="text-[9.5px] font-mono uppercase tracking-wider text-gold-alt font-semibold">
                    {tag}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-alt group-hover:scale-150 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </motion.div>
    </section>
  );
};
