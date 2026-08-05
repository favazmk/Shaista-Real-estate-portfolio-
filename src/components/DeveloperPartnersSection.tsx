import React from 'react';
import { motion } from 'motion/react';
import { DEVELOPER_PARTNERS } from '../data/portfolioData';
import { Building2, ShieldCheck, MessageSquare, ArrowRight } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { staggerContainer, fadeUpBlur, staggerViewport } from '../utils/animations';

interface DeveloperPartnersSectionProps {
  onBookClick: () => void;
}

export const DeveloperPartnersSection: React.FC<DeveloperPartnersSectionProps> = ({ onBookClick }) => {
  return (
    <section id="developer-partners" className="py-14 md:py-16 bg-gradient-to-b from-primary via-[#14120D] to-primary relative overflow-hidden border-t border-b border-white/10">
      <div className="absolute inset-0 bg-editorial-gold-grid opacity-20 pointer-events-none" />
      <ParticleCanvas variant="dark" particleCount={35} />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[180px] pointer-events-none" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={staggerViewport}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        
        {/* Section Header */}
        <motion.div variants={fadeUpBlur} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold font-mono mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>OFF-PLAN PARTNERSHIPS</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-text-white">
              Master Developer <br />
              <span className="italic gold-text-gradient">Partners in Dubai</span>
            </h2>
          </div>
          <p className="text-text-muted text-sm max-w-md font-light leading-relaxed">
            Direct access to Dubai's top master developers with VIP pre-launch allocations and <strong className="text-gold font-normal">0% buyer commission</strong>.
          </p>
        </motion.div>

        {/* Developer Partners Grid */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {DEVELOPER_PARTNERS.map((dev) => (
            <motion.div
              key={dev.id}
              variants={fadeUpBlur}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-secondary border border-white/10 hover:border-gold/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden min-h-[320px]"
            >
              {dev.image && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-45 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
                </div>
              )}

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="px-4 py-2 rounded-xl bg-primary/80 backdrop-blur-md border border-gold/40 text-gold font-serif-luxury text-lg font-bold tracking-widest shadow-lg">
                    {dev.logoText}
                  </div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-gold px-2.5 py-1 rounded-full bg-gold/15 border border-gold/30">
                    {dev.badge}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl text-text-white group-hover:text-gold transition-colors mb-2">
                  {dev.name}
                </h3>

                <p className="text-xs text-[#C5C5C5] font-light leading-relaxed mb-6">
                  {dev.description}
                </p>
              </div>

              <div className="relative z-10">
                <a
                  href={`https://wa.me/971525970116?text=Hi%20Shaista,%20I%20am%20interested%20in%20off-plan%20projects%20from%20${encodeURIComponent(dev.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full text-xs font-mono uppercase font-bold text-primary bg-gradient-to-r from-gold to-gold-light hover:shadow-[0_0_25px_rgba(200,169,106,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire {dev.logoText} Launch</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* VIP Access CTA Block */}
        <motion.div variants={fadeUpBlur} className="p-6 md:p-8 rounded-2xl glass-panel-gold border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gold text-primary flex items-center justify-center font-bold shrink-0">
              0%
            </div>
            <div>
              <h4 className="font-serif-luxury text-lg text-text-white">Zero Commission on Off-Plan Purchases</h4>
              <p className="text-xs text-text-muted font-light mt-0.5">
                All agency commissions are covered directly by the master developer.
              </p>
            </div>
          </div>

          <button
            onClick={onBookClick}
            className="px-6 py-3 rounded-full text-xs font-mono uppercase font-bold text-text-white border border-white/20 hover:border-gold transition-all shrink-0 flex items-center gap-2"
          >
            <span>Request Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
};
