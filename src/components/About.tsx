import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { CLIENT_PROFILE } from '../data/portfolioData';
import { ShieldCheck, HeartHandshake, Award, Sparkles } from 'lucide-react';
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
      className="relative z-20 -mt-[100vh] pt-14 pb-16 md:pt-18 md:pb-20 bg-[#FAF8F5] bg-architectural-lines-light text-light-text border-b border-gold/20"
    >
      {/* Smooth Gradient Blend Leading Edge (matches hero bottom blend) */}
      <div className="absolute -top-32 sm:-top-48 inset-x-0 h-32 sm:h-48 bg-gradient-to-b from-transparent via-[#FAF8F5]/80 to-[#FAF8F5] pointer-events-none z-30" />
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
        <div className="relative w-full max-w-5xl flex justify-center items-center my-2 select-none min-h-[380px] sm:min-h-[460px] md:min-h-[550px] pb-8 overflow-visible">
          
          {/* Main 2-Line Heading Positioned HALF BACK OF HER (z-0 Layer) — Positioned below eyebrow tag with zero overlap */}
          <motion.div 
            style={{ y: textY }}
            className="absolute inset-x-0 top-6 sm:top-8 md:top-10 z-0 flex flex-col items-center justify-center text-center pointer-events-none w-full px-2 sm:px-8"
          >
            <h2 className="font-serif-luxury text-[clamp(1.6rem,5.5vw,5.6rem)] font-bold leading-[1.05] text-[#1E1B15]/18 uppercase tracking-tight text-center max-w-full">
              <span className="block">Co-Founder &</span>
              <span className="inline-block italic font-normal gold-text-gradient opacity-70 pr-2 sm:pr-6 overflow-visible">Property Advisor</span>
            </h2>
          </motion.div>

          {/* Shaista Cutout Portrait in CENTER (z-10 Layer) — Multi-layered 3D shadow */}
          <div className="relative z-10 w-[240px] sm:w-[350px] md:w-[440px] lg:w-[490px] aspect-[3/4] flex items-end justify-center pt-4 origin-bottom">
            <img
              src="/images/DSC02802-cutout.webp"
              alt="Shaista Fathima - Co-Founder & Property Advisor"
              className="w-full h-full object-contain object-bottom filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.38)] drop-shadow-[0_10px_20px_rgba(180,140,60,0.25)] transition-transform duration-500 hover:scale-[1.01]"
            />

            {/* High Contrast Luxury Name Tag (100% Crisp & Fully Readable) */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#181612] border border-gold-alt/70 shadow-[0_12px_28px_rgba(0,0,0,0.45)] backdrop-blur-xl text-[10px] sm:text-[11px] font-mono tracking-widest uppercase whitespace-nowrap flex items-center gap-1.5 sm:gap-2.5 z-20 max-w-[calc(100vw-32px)]">
              <span className="font-bold text-[#E6C670]">SHAISTA FATHIMA</span>
              <span className="text-gold-alt/40 font-normal">•</span>
              <span className="font-medium text-white/90">GRO VISION LLC</span>
            </div>
          </div>

        </div>

        {/* Clean Single-Line Executive Statement */}
        <motion.div variants={fadeUpBlur} className="max-w-4xl lg:max-w-5xl mx-auto mt-6 mb-10 px-2 text-center">
          <p className="font-serif-luxury text-base sm:text-lg md:text-xl lg:text-[23px] text-light-text font-normal leading-snug whitespace-normal sm:whitespace-nowrap tracking-tight">
            "Connecting Discerning Global Investors to High-Yield Dubai Real Estate & Golden Visa Residencies."
          </p>
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


      </motion.div>
    </section>
  );
};
