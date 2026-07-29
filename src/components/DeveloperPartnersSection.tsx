import React from 'react';
import { motion } from 'motion/react';
import { DEVELOPER_PARTNERS, CLIENT_PROFILE } from '../data/portfolioData';
import { Building2, Sparkles, CheckCircle2, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

interface DeveloperPartnersSectionProps {
  onBookClick: () => void;
}

export const DeveloperPartnersSection: React.FC<DeveloperPartnersSectionProps> = ({ onBookClick }) => {
  return (
    <section id="developer-partners" className="py-28 bg-gradient-to-b from-[#0B0B0B] via-[#14120D] to-[#0B0B0B] bg-architectural-lines relative overflow-hidden border-t border-b border-white/10">
      {/* Background Subtle Grid & Gold Ambient Glows */}
      <div className="absolute inset-0 bg-editorial-gold-grid opacity-20 pointer-events-none" />

      {/* Moving Particles Canvas */}
      <ParticleCanvas variant="dark" particleCount={35} />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#C8A96A]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#C8A96A]/08 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96A] font-mono mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>DIRECT DEVELOPER ALLOCATIONS & OFF-PLAN ACCESS</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F7F5F2]">
              Official Master Developer <br />
              <span className="italic gold-text-gradient">Partnerships in Dubai</span>
            </h2>
          </div>
          <p className="text-[#9C9C9C] text-sm max-w-md font-light leading-relaxed">
            Gro Vision Real Estate LLC maintains direct developer relationships across Dubai's top master developers. Get VIP pre-launch access, priority unit allocations, and <strong className="text-[#C8A96A] font-normal">0% buyer commission</strong>.
          </p>
        </div>

        {/* Developer Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {DEVELOPER_PARTNERS.map((dev) => (
            <motion.div
              key={dev.id}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#C8A96A]/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Background Image & Gradient Overlay */}
              {dev.image && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-35 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-[#0B0B0B]/40" />
                </div>
              )}

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="px-4 py-2 rounded-xl bg-[#0B0B0B]/80 backdrop-blur-md border border-[#C8A96A]/40 text-[#C8A96A] font-serif-luxury text-lg font-bold tracking-widest shadow-lg">
                    {dev.logoText}
                  </div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#C8A96A] px-2.5 py-1 rounded-full bg-[#C8A96A]/15 border border-[#C8A96A]/30 backdrop-blur-md">
                    {dev.badge}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl text-[#F7F5F2] group-hover:text-[#C8A96A] transition-colors mb-2">
                  {dev.name}
                </h3>

                <p className="text-[11px] font-mono uppercase text-[#C8A96A] tracking-wider mb-3">
                  {dev.category} • {dev.featuredProjectsCount}+ Active Projects
                </p>

                <p className="text-xs text-[#C5C5C5] font-light leading-relaxed mb-6">
                  {dev.description}
                </p>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs text-[#F7F5F2] mb-6 p-2.5 rounded-lg bg-[#0B0B0B]/80 backdrop-blur-md border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-[#C8A96A] shrink-0" />
                  <span>0% Buyer Commission on Direct Off-Plan</span>
                </div>

                <a
                  href={`https://wa.me/971525970116?text=Hi%20Shaista,%20I%20am%20interested%20in%20off-plan%20projects%20from%20${encodeURIComponent(dev.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full text-xs font-mono uppercase font-bold text-[#0B0B0B] bg-gradient-to-r from-[#C8A96A] to-[#E5C378] hover:shadow-[0_0_25px_rgba(200,169,106,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire {dev.logoText} Launch</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="p-8 md:p-10 rounded-2xl glass-panel-gold border border-[#C8A96A]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#C8A96A] text-[#0B0B0B] flex items-center justify-center font-bold shrink-0">
              0%
            </div>
            <div>
              <h4 className="font-serif-luxury text-xl text-[#F7F5F2]">Zero Commission for Off-Plan Buyers</h4>
              <p className="text-xs text-[#9C9C9C] font-light mt-1">
                When you purchase off-plan properties through Shaista & Gro Vision Real Estate LLC, you pay zero agency commission fees. All commissions are covered directly by the developer.
              </p>
            </div>
          </div>

          <button
            onClick={onBookClick}
            className="px-8 py-4 rounded-full text-xs font-mono uppercase font-bold text-[#F7F5F2] border border-white/20 hover:border-[#C8A96A] transition-all shrink-0 flex items-center gap-2"
          >
            <span>Request Developer Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
