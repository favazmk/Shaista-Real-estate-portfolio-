import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { CLIENT_PROFILE } from '../data/portfolioData';
import { ParticleCanvas } from './ParticleCanvas';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="top" className="relative box-border bg-[#F4F1EA] overflow-hidden min-h-screen flex flex-col justify-between">
      {/* Background Repeating Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ backgroundImage: 'repeating-linear-gradient(90deg,transparent,transparent 120px,rgba(147,115,50,.055) 120px,rgba(147,115,50,.055) 121px)' }} 
      />
      
      {/* Interactive Particle Canvas */}
      <ParticleCanvas variant="light" particleCount={40} />
      
      {/* Hero Frames */}
      <div className="absolute inset-[20px] border border-[#937332]/30 pointer-events-none hidden md:block" />
      <div className="absolute inset-[28px] border border-[#937332]/13 pointer-events-none hidden md:block" />

      {/* Main Grid Content — Scaled to fit screen height with top navbar clearance */}
      <div className="relative box-border max-w-[1440px] w-full mx-auto px-[clamp(20px,4vw,60px)] pt-[130px] md:pt-[150px] pb-[30px] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_clamp(240px,28vw,420px)] gap-[clamp(24px,4vw,60px)] items-center my-auto">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col z-10"
        >
          <div className="flex items-center gap-[12px] mb-[18px]">
            <span className="block w-2 h-2 bg-[#937332] rotate-45 flex-none" />
            <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-[#937332]">
              RERA Certified · Sheikh Zayed Rd, Dubai
            </span>
          </div>
          
          <h1 className="font-serif-luxury font-normal text-[clamp(30px,4.2vw,56px)] leading-[1.12] tracking-[-0.01em] m-0 text-[#16150F] text-balance">
            Helping global investors<br />
            <span className="italic text-[#937332]">build wealth in the UAE</span>
          </h1>
          
          <p className="font-sans text-[14.5px] font-light leading-[1.8] text-[#55524D] max-w-[440px] mt-[20px] text-balance">
            <span className="text-[#16150F] font-medium">{CLIENT_PROFILE.name}</span> — {CLIENT_PROFILE.credential}. Advisory on off-plan acquisition, Golden Visa residency and high-yield Dubai assets for overseas and NRI investors.
          </p>
          
          <div className="flex flex-wrap items-center gap-x-[24px] gap-y-[18px] mt-[28px]">
            <a 
              href={CLIENT_PROFILE.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-[30px] py-[15px] bg-[#16150F] text-[#F4F1EA] no-underline text-[10px] uppercase tracking-[0.24em] transition-colors hover:bg-[#937332]"
            >
              Free consultation
            </a>
            <button 
              onClick={onBookClick}
              className="text-[10px] uppercase tracking-[0.24em] text-[#937332] no-underline border-b border-[#937332]/40 pb-[4px] transition-colors hover:border-[#937332]"
            >
              Schedule a visit ↗
            </button>
          </div>
          
          <div className="mt-[34px] border-t border-[#937332]/25 max-w-[480px]">
            <div className="flex items-baseline justify-between gap-[20px] py-[10px] border-b border-[#937332]/13">
              <span className="font-mono text-[8px] uppercase tracking-[0.26em] text-[#8A857D]">Investor community</span>
              <span className="font-serif-luxury text-[20px] text-[#16150F]">10.1k verified</span>
            </div>
            <div className="flex items-baseline justify-between gap-[20px] py-[10px] border-b border-[#937332]/13">
              <span className="font-mono text-[8px] uppercase tracking-[0.26em] text-[#8A857D]">Advisory focus</span>
              <span className="font-serif-luxury text-[20px] text-[#16150F]">Off-plan & Golden Visa</span>
            </div>
            <div className="flex items-baseline justify-between gap-[20px] py-[10px]">
              <span className="font-mono text-[8px] uppercase tracking-[0.26em] text-[#8A857D]">Role</span>
              <span className="font-serif-luxury text-[20px] text-[#16150F]">Co-Founder, Gro Vision</span>
            </div>
          </div>
        </motion.div>

        {/* Right Portrait — Compact Screen-Fitting Height */}
        <div className="relative w-full max-w-[420px] h-[clamp(320px,36vw,500px)] justify-self-center lg:justify-self-end z-10" style={{ perspective: 1200 }}>
          <motion.div 
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="w-full h-full relative"
          >
            <div className="absolute left-[20px] top-[20px] w-full h-full border border-[#937332]/35 rounded-t-[180px] rounded-b-[2px] pointer-events-none" style={{ transform: "translateZ(-30px)" }} />
            <div className="relative w-full h-full rounded-t-[180px] rounded-b-[2px] overflow-hidden bg-[#E7E1D5]" style={{ transform: "translateZ(0px)" }}>
              <img 
                src="/images/DSC02696.webp" 
                alt="Shaista Fathima - Property Advisor" 
                decoding="async" 
                className="w-full h-full object-cover object-bottom scale-110 transition-all duration-700 origin-bottom"
              />
            </div>
            <div className="absolute -left-[1px] -bottom-[1px] bg-[#F4F1EA] border border-[#937332]/30 px-[16px] py-[11px] flex flex-col gap-[3px] shadow-xl" style={{ transform: "translateZ(40px)" }}>
              <span className="font-serif-luxury text-[11px] tracking-[0.18em] text-[#16150F]">SHAISTA FATHIMA</span>
              <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-[#937332]">Verified · RERA Advisor</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Features Bar */}
      <div className="relative box-border max-w-[1440px] mx-auto px-[clamp(20px,4vw,60px)] pb-[32px] grid grid-cols-2 md:grid-cols-4 gap-y-[14px] gap-x-[clamp(16px,2.5vw,36px)] font-mono text-[8px] uppercase tracking-[0.28em] text-[#8A857D] z-10">
        <span className="pt-[10px] border-t border-[#937332]/30 leading-[1.6]">Zero income, capital gains & property tax</span>
        <span className="pt-[10px] border-t border-[#937332]/30 leading-[1.6]">USD-pegged asset class</span>
        <span className="pt-[10px] border-t border-[#937332]/30 leading-[1.6]">7.5–9% gross rental yields</span>
        <span className="pt-[10px] border-t border-[#937332]/30 leading-[1.6]">DLD-supervised bank escrow</span>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex flex-col items-center gap-[6px] pb-[24px] font-mono text-[8px] uppercase tracking-[0.3em] text-[#8A857D] cursor-pointer z-10"
        onClick={onExploreClick}
      >
        <span>Discover services & visa tiers</span>
        <span className="block w-[1px] h-[20px] bg-gradient-to-b from-[#937332]/70 to-transparent" />
      </motion.div>
    </section>
  );
};
