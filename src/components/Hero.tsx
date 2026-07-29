import React from 'react';
import { motion } from 'motion/react';
import { CLIENT_PROFILE } from '../data/portfolioData';
import { Sparkles, ArrowDownRight, MessageSquare, CheckCircle2, Award } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#0B0B0B] bg-architectural-lines">
      {/* Editorial Dot Grid Overlay */}
      <div className="absolute inset-0 bg-editorial-gold-grid opacity-30 pointer-events-none" />

      {/* Interactive Particle & Lighting Canvas */}
      <ParticleCanvas variant="dark" particleCount={50} />

      {/* Radial Ambient Light Flares */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#C8A96A]/10 rounded-full blur-[140px] pointer-events-none animate-gold-glow" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Vertical Editorial Text Tag */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[9px] uppercase tracking-[0.6em] text-[#C8A96A]/50 hidden xl:block vertical-text rotate-180 pointer-events-none font-mono z-20">
        Gro Vision Real Estate LLC • Sheikh Zayed Rd, Dubai
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-140px)]">
          
          {/* Left Text & Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8A96A]/30 glass-panel-gold text-[#C8A96A] text-xs uppercase tracking-[0.2em] font-mono mb-6 w-fit"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{CLIENT_PROFILE.title}</span>
            </motion.div>

            {/* Massive Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal leading-[1.05] tracking-tight mb-6"
            >
              Helping Global Investors <br />
              <span className="italic font-light gold-text-gradient">Build Wealth in UAE</span>
            </motion.h1>

            {/* Subheadline & Bio */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-[#9C9C9C] text-base sm:text-lg max-w-2xl font-light leading-relaxed mb-8"
            >
              <strong className="text-[#F7F5F2] font-medium">{CLIENT_PROFILE.name}</strong> — {CLIENT_PROFILE.credential}. Specialized advisory for global overseas and NRI investors navigating off-plan, Golden Visa residency, and high-yield Dubai real estate assets.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a
                href={CLIENT_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="WhatsApp"
                className="px-8 py-4 rounded-full text-xs font-button uppercase tracking-widest font-bold text-[#0B0B0B] bg-gradient-to-r from-[#C8A96A] via-[#E5C378] to-[#C8A96A] hover:shadow-[0_0_35px_rgba(200,169,106,0.5)] transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-3 group"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Free Consultation (WhatsApp)</span>
                <ArrowDownRight className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-300 ml-1" />
              </a>

              <button
                onClick={onBookClick}
                data-cursor="Schedule"
                className="px-8 py-4 rounded-full text-xs font-button uppercase tracking-widest font-semibold text-[#F7F5F2] border border-white/15 hover:border-[#C8A96A] hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
              >
                <span>Schedule a Visit</span>
              </button>
            </motion.div>

            {/* Quick Metrics & Verified Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[#C8A96A] text-sm font-semibold mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>RERA Certified</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#9C9C9C] font-mono">
                  Licensed Advisor
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 text-[#F7F5F2] font-serif-luxury text-xl font-semibold mb-1">
                  <span>10.1k Verified</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#9C9C9C] font-mono">
                  Investor Community
                </span>
              </div>

              <div className="flex flex-col col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-[#F7F5F2] font-serif-luxury text-xl font-semibold mb-1">
                  <span>Gro Vision</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#9C9C9C] font-mono">
                  Real Estate LLC Co-Founder
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Luxury Hero Portrait Composition */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Gold Corner Accent Frame */}
            <div className="absolute -bottom-5 -right-5 w-28 h-28 border-b border-r border-[#C8A96A] opacity-40 pointer-events-none hidden sm:block z-0" />
            <div className="absolute -top-5 -left-5 w-28 h-28 border-t border-l border-[#C8A96A] opacity-40 pointer-events-none hidden sm:block z-0" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative w-full max-w-md lg:max-w-none aspect-[3/4] rounded-2xl overflow-hidden border border-[#C8A96A]/30 shadow-2xl shadow-black group"
            >
              <img
                src="/images/DSC02613.webp"
                alt="Shaista Fathima Ahmed Kabeer - Real Estate Advisor"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />

              {/* Gradient Vignette Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/40 via-transparent to-[#0B0B0B]/40" />

              {/* Subtle Gold Frame Lines */}
              <div className="absolute inset-4 border border-[#C8A96A]/20 rounded-xl pointer-events-none group-hover:border-[#C8A96A]/50 transition-colors duration-500" />

              {/* Floating Glass Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 right-6 glass-panel-gold p-4 rounded-xl flex items-center gap-3 border border-[#C8A96A]/40 shadow-xl"
              >
                <div className="w-10 h-10 rounded-full bg-[#C8A96A]/20 flex items-center justify-center text-[#C8A96A]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#F7F5F2]">RERA Certified</div>
                  <div className="text-[10px] uppercase text-[#C8A96A] tracking-wider font-mono">Dubai Property Advisor</div>
                </div>
              </motion.div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-6 inset-x-6 glass-panel p-5 rounded-xl border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-[#F7F5F2]">Shaista Fathima</div>
                  <div className="text-xs text-[#9C9C9C]">Co-Founder, Operations & Client Success</div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C8A96A]/10 border border-[#C8A96A]/30 text-[#C8A96A] text-[10px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] animate-ping" />
                  <span>Verified Advisor</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#9C9C9C] text-[10px] uppercase tracking-[0.3em]"
      >
        <span>DISCOVER SERVICES & VISA TIERS</span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-1.5 rounded-full bg-[#C8A96A]" />
        </div>
      </motion.div>
    </section>
  );
};
