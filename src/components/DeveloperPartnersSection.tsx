import React from 'react';
import { motion } from 'motion/react';
import { DEVELOPER_PARTNERS, CLIENT_PROFILE } from '../data/portfolioData';
import { Building2, Sparkles, CheckCircle2, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { staggerContainer, fadeUpBlur, staggerViewport } from '../utils/animations';

interface DeveloperPartnersSectionProps {
  onBookClick: () => void;
}

export const DeveloperPartnersSection: React.FC<DeveloperPartnersSectionProps> = ({ onBookClick }) => {
  return (
    <section id="developer-partners" className="py-28 bg-gradient-to-b from-primary via-[#14120D] to-primary bg-architectural-lines relative overflow-hidden border-t border-b border-white/10">
      {/* Background Subtle Grid & Gold Ambient Glows */}
      <div className="absolute inset-0 bg-editorial-gold-grid opacity-20 pointer-events-none" />

      {/* Moving Particles Canvas */}
      <ParticleCanvas variant="dark" particleCount={35} />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-gold/08 rounded-full blur-[160px] pointer-events-none" />

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
              <span>DIRECT DEVELOPER ALLOCATIONS & OFF-PLAN ACCESS</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-text-white">
              Official Master Developer <br />
              <span className="italic gold-text-gradient">Partnerships in Dubai</span>
            </h2>
          </div>
          <p className="text-text-muted text-sm max-w-md font-light leading-relaxed">
            Gro Vision Real Estate LLC maintains direct developer relationships across Dubai's top master developers. Get VIP pre-launch access, priority unit allocations, and <strong className="text-gold font-normal">0% buyer commission</strong>.
          </p>
        </motion.div>

        {/* Developer Partners Grid */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {DEVELOPER_PARTNERS.map((dev) => (
            <motion.div
              key={dev.id}
              variants={fadeUpBlur}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-secondary border border-white/10 hover:border-gold/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden min-h-[360px]"
            >
              {/* Background Image & Gradient Overlay */}
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
                  <span className="text-[9px] uppercase font-mono tracking-widest text-gold px-2.5 py-1 rounded-full bg-gold/15 border border-gold/30 backdrop-blur-md">
                    {dev.badge}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl text-text-white group-hover:text-gold transition-colors mb-2">
                  {dev.name}
                </h3>

                <p className="text-[11px] font-mono uppercase text-gold tracking-wider mb-3">
                  {dev.category} • {dev.featuredProjectsCount}+ Active Projects
                </p>

                <p className="text-xs text-[#C5C5C5] font-light leading-relaxed mb-6">
                  {dev.description}
                </p>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs text-text-white mb-6 p-2.5 rounded-lg bg-primary/80 backdrop-blur-md border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span>0% Buyer Commission on Direct Off-Plan</span>
                </div>

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
        <motion.div variants={fadeUpBlur} className="mt-10 p-8 md:p-10 rounded-2xl glass-panel-gold border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_40px_rgba(200,169,106,0.15)] relative overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold text-primary flex items-center justify-center font-bold shrink-0">
              0%
            </div>
            <div>
              <h4 className="font-serif-luxury text-xl text-text-white">Zero Commission for Off-Plan Buyers</h4>
              <p className="text-xs text-text-muted font-light mt-1">
                When you purchase off-plan properties through Shaista & Gro Vision Real Estate LLC, you pay zero agency commission fees. All commissions are covered directly by the developer.
              </p>
            </div>
          </div>

          <button
            onClick={onBookClick}
            className="px-8 py-4 rounded-full text-xs font-mono uppercase font-bold text-text-white border border-white/20 hover:border-gold transition-all shrink-0 flex items-center gap-2"
          >
            <span>Request Developer Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
};
