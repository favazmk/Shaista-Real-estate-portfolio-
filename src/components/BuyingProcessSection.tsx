import React from 'react';
import { motion } from 'motion/react';
import { BUYING_PROCESS, CLIENT_PROFILE } from '../data/portfolioData';
import { ShieldCheck, CheckCircle2, Target, Search, FileCheck, Award, MessageSquare } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

interface BuyingProcessSectionProps {
  onBookClick: () => void;
}

export const BuyingProcessSection: React.FC<BuyingProcessSectionProps> = ({ onBookClick }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-5 h-5 text-gold" />;
      case 'Search': return <Search className="w-5 h-5 text-gold" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-gold" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-gold" />;
      case 'Award': return <Award className="w-5 h-5 text-gold" />;
      default: return <CheckCircle2 className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <section id="buying-process" className="py-28 bg-gradient-to-b from-secondary via-[#1A1813] to-secondary bg-architectural-lines relative overflow-hidden border-t border-b border-white/10">
      {/* Background Architectural Texture & Light */}
      <div className="absolute inset-0 bg-editorial-gold-grid opacity-20 pointer-events-none" />

      {/* Moving Particles Canvas */}
      <ParticleCanvas variant="dark" particleCount={35} />
      <div className="absolute top-1/3 left-[-10%] w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-gold/08 rounded-full blur-[180px] pointer-events-none max-w-full" />
      <div className="absolute bottom-1/3 right-[-10%] w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-gold/08 rounded-full blur-[180px] pointer-events-none max-w-full" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 glass-panel-gold text-gold text-xs uppercase tracking-[0.2em] font-mono mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TRANSPARENT 5-STEP INVESTOR ROADMAP</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-text-white mb-4">
            How Global & NRI Investors <br />
            <span className="italic gold-text-gradient">Acquire Dubai Real Estate</span>
          </h2>
          <p className="text-text-muted text-sm font-light leading-relaxed">
            A seamless, fully transparent 5-step transaction methodology designed by Shaista Fathima and the Gro Vision team to protect your capital and eliminate overseas friction.
          </p>
        </div>

        {/* 5 Steps Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 relative">
          {BUYING_PROCESS.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-secondary border border-white/10 hover:border-gold/60 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                    {getStepIcon(step.iconName)}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold px-2.5 py-1 rounded-full bg-gold/10 border border-gold/20">
                    {step.duration}
                  </span>
                </div>

                <div className="text-3xl font-serif-luxury font-bold text-white/10 group-hover:text-gold/30 transition-colors mb-2">
                  0{step.stepNumber}
                </div>

                <h3 className="font-serif-luxury text-lg text-text-white group-hover:text-gold transition-colors mb-1">
                  {step.title}
                </h3>

                <p className="text-[10px] font-mono uppercase text-gold tracking-wider mb-3">
                  {step.subtitle}
                </p>

                <p className="text-xs text-text-muted font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="p-8 md:p-12 rounded-3xl glass-panel-gold border border-gold/40 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-text-white mb-2">
              Ready to Start Your Dubai Property Journey?
            </h3>
            <p className="text-xs text-text-muted font-light max-w-xl leading-relaxed">
              Connect directly with Shaista on WhatsApp for instant off-plan brochures, Golden Visa assessment, or a 1-on-1 private video strategy call.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <a
              href={CLIENT_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 rounded-full text-xs font-mono uppercase font-bold text-primary bg-gradient-to-r from-gold to-gold-light hover:shadow-[0_0_25px_rgba(200,169,106,0.4)] transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Shaista Directly</span>
            </a>

            <button
              onClick={onBookClick}
              className="py-4 px-8 rounded-full text-xs font-mono uppercase font-semibold text-text-white border border-white/20 hover:border-gold transition-all"
            >
              Schedule VIP Call
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
