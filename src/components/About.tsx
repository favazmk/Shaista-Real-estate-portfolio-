import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CLIENT_PROFILE } from '../data/portfolioData';
import { ShieldCheck, HeartHandshake, Award, SearchCheck, Sparkles } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { staggerContainer, fadeUpBlur, staggerViewport } from '../utils/animations';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Tracking for Background Text
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Background Text starts FULLY VISIBLE at top (0px) before scroll, then floats UPWARDS (-140px) and away
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "-140px"]);

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="py-16 md:py-20 bg-[#FAF8F5] bg-architectural-lines-light text-light-text relative overflow-hidden border-t border-b border-gold/20"
    >
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 bg-editorial-light-grid opacity-60 pointer-events-none" />
      <ParticleCanvas variant="light" particleCount={35} />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/15 rounded-full blur-[160px] pointer-events-none" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={staggerViewport}
        className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center"
      >
        
        {/* Eyebrow Tag */}
        <motion.div variants={fadeUpBlur} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/30 bg-white/80 text-gold-alt text-[11px] uppercase tracking-[0.25em] font-mono mb-6 shadow-sm relative z-20">
          <Sparkles className="w-3 h-3" />
          <span>ABOUT SHAISTA</span>
        </motion.div>

        {/* Center Hero Composite: 2-Line Heading Moving Upward BEHIND Her Image */}
        <div className="relative w-full max-w-4xl flex justify-center items-center my-2 select-none min-h-[340px] sm:min-h-[400px] md:min-h-[440px] pb-8 overflow-visible">
          
          {/* Main 2-Line Heading Positioned HALF BACK OF HER (z-0 Layer) — Positioned below eyebrow tag with zero overlap */}
          <motion.div 
            style={{ y: textY }}
            className="absolute inset-x-0 top-10 sm:top-12 z-0 flex flex-col items-center justify-center text-center pointer-events-none w-full px-4 sm:px-8"
          >
            <h2 className="font-serif-luxury text-[clamp(1.6rem,4vw,3.8rem)] font-bold leading-[1.08] text-[#1E1B15]/18 uppercase tracking-tight text-center max-w-full">
              <span className="block">Co-Founder &</span>
              <span className="block italic font-normal gold-text-gradient opacity-70">Property Advisor</span>
            </h2>
          </motion.div>

          {/* Shaista Cutout Portrait in CENTER (z-10 Layer) — Multi-layered 3D shadow */}
          <div className="relative z-10 w-[220px] sm:w-[290px] md:w-[350px] aspect-[3/4] flex items-end justify-center pt-4 origin-bottom">
            <img
              src="/images/DSC02802-cutout.webp"
              alt="Shaista Fathima - Co-Founder & Property Advisor"
              className="w-full h-full object-contain object-bottom filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.38)] drop-shadow-[0_10px_20px_rgba(180,140,60,0.25)] transition-transform duration-500 hover:scale-[1.01]"
            />

            {/* High Contrast Luxury Name Tag (100% Crisp & Fully Readable) */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full bg-[#181612] border border-gold-alt/70 shadow-[0_12px_28px_rgba(0,0,0,0.45)] backdrop-blur-xl text-[11px] font-mono tracking-widest uppercase whitespace-nowrap flex items-center gap-2.5 z-20">
              <span className="font-bold text-[#E6C670]">SHAISTA FATHIMA</span>
              <span className="text-gold-alt/40 font-normal">•</span>
              <span className="font-medium text-white/90">GRO VISION LLC</span>
            </div>
          </div>

        </div>

        {/* Subtitle Statement */}
        <motion.div variants={fadeUpBlur} className="max-w-2xl mx-auto mt-6 mb-8">
          <h3 className="font-serif-luxury text-xl sm:text-2xl text-light-text font-normal leading-snug">
            "Helping Global & NRI Investors Build Real Estate Wealth in Dubai."
          </h3>
        </motion.div>

        {/* Core Values Badges */}
        <motion.div variants={fadeUpBlur} className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-3xl w-full mb-12">
          {CLIENT_PROFILE.values.map((val, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-white/90 border border-gold/25 shadow-sm text-center">
              <div className="w-7 h-7 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-gold-alt mx-auto mb-1.5">
                {idx === 0 && <ShieldCheck className="w-3.5 h-3.5" />}
                {idx === 1 && <HeartHandshake className="w-3.5 h-3.5" />}
                {idx === 2 && <Award className="w-3.5 h-3.5" />}
              </div>
              <h4 className="text-xs font-semibold text-light-text mb-0.5">{val.title}</h4>
              <p className="text-[11px] text-light-text-muted leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* 5 Pillars Framework Section */}
        <motion.div variants={fadeUpBlur} className="w-full pt-10 border-t border-gold/25 relative overflow-hidden">
          
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-alt font-mono mb-1.5">
              <SearchCheck className="w-3.5 h-3.5" />
              <span>DUE DILIGENCE</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-light-text">
              5 Pillars of Property Evaluation
            </h3>
          </div>

          {/* Physical Architectural Pillar Cards Grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
            {CLIENT_PROFILE.dueDiligencePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpBlur}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative flex flex-col justify-between p-5 rounded-[18px] bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE0] border-2 border-gold/40 hover:border-gold-alt shadow-[0_6px_20px_rgba(200,169,106,0.12)] hover:shadow-[0_14px_30px_rgba(200,169,106,0.25)] transition-all duration-500 group min-h-[300px] overflow-hidden"
              >
                {/* Pillar Capital (Top Crown Accent) */}
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-gold via-yellow-200 to-gold shadow-sm" />

                {/* Fluted Column Shaft Lines (Vertical Architectural Pattern) */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_18px,rgba(200,169,106,0.05)_18px,rgba(200,169,106,0.05)_20px)] pointer-events-none" />

                {/* Pillar Header */}
                <div className="relative z-10 pt-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold-alt/40 flex items-center justify-center font-mono font-bold text-xs text-gold-alt shadow-sm">
                      0{idx + 1}
                    </div>
                    <span className="text-[8.5px] uppercase font-mono tracking-widest text-gold-alt/90 font-bold px-2 py-0.5 rounded-full bg-gold/10 border border-gold/30">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-serif-luxury text-base text-light-text font-bold mb-2 leading-snug group-hover:text-gold-alt transition-colors">
                    {pillar.title}
                  </h4>
                </div>

                {/* Pillar Body Content */}
                <div className="relative z-10 my-auto">
                  <p className="text-xs text-light-text-muted font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Pillar Base (Bottom Pedestal Plinth) */}
                <div className="relative z-10 pt-2.5 mt-3 border-t border-gold/25 flex items-center justify-between text-[9.5px] font-mono text-gold-alt font-semibold">
                  <span>EVALUATION METRIC</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-alt group-hover:scale-150 transition-transform" />
                </div>

                {/* Pillar Base (Bottom Plinth Accent) */}
                <div className="absolute bottom-0 inset-x-0 h-2 bg-gradient-to-r from-gold via-yellow-200 to-gold shadow-sm" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};
