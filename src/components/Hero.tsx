import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { CLIENT_PROFILE } from '../data/portfolioData';
import { ParticleCanvas } from './ParticleCanvas';
import DotField from './DotField';

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

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

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
    <section id="top" className="relative box-border bg-[#F4F1EA] overflow-hidden">
      {/* Background Repeating Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{ backgroundImage: 'repeating-linear-gradient(90deg,transparent,transparent 120px,rgba(147,115,50,.055) 120px,rgba(147,115,50,.055) 121px)' }} 
      />
      
      {/* Interactive Particle Canvas */}
      <ParticleCanvas variant="light" particleCount={40} />
      
      {/* React Bits DotField */}
      <div className="absolute inset-0 pointer-events-none opacity-100">
        <DotField
          dotRadius={2.5}
          dotSpacing={21}
          cursorRadius={550}
          cursorForce={0.15}
          bulgeStrength={58}
          gradientFrom="#efea73"
          gradientTo="#e3eb71"
          glowColor="rgba(255, 255, 255, 0.5)"
        />
      </div>
      
      {/* Hero Frames */}
      <div className="absolute inset-[26px] border border-[#937332]/30 pointer-events-none hidden md:block" />
      <div className="absolute inset-[34px] border border-[#937332]/13 pointer-events-none hidden md:block" />

      <div className="relative box-border max-w-[1440px] mx-auto px-[clamp(24px,4.9vw,70px)] pt-[120px] pb-[70px] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_clamp(240px,31vw,460px)] gap-[clamp(32px,5vw,80px)] items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col z-10"
        >
          <div className="flex items-center gap-[14px] mb-[28px]">
            <span className="block w-2 h-2 bg-[#937332] rotate-45 flex-none" />
            <span className="font-mono text-[9.5px] uppercase tracking-[0.34em] text-[#937332]">
              RERA Certified · Sheikh Zayed Rd, Dubai
            </span>
          </div>
          
          <h1 className="font-serif-luxury font-normal text-[clamp(38px,5.2vw,74px)] leading-[1.1] tracking-[-0.01em] m-0 text-[#16150F] text-balance">
            Helping global investors<br />
            <span className="italic text-[#937332]">build wealth in the UAE</span>
          </h1>
          
          <p className="font-sans text-[15.5px] font-light leading-[1.85] text-[#55524D] max-w-[450px] mt-[32px] text-balance">
            <span className="text-[#16150F] font-medium">{CLIENT_PROFILE.name}</span> — {CLIENT_PROFILE.credential}. Advisory on off-plan acquisition, Golden Visa residency and high-yield Dubai assets for overseas and NRI investors.
          </p>
          
          <div className="flex flex-wrap items-center gap-x-[30px] gap-y-[24px] mt-[38px]">
            <a 
              href={CLIENT_PROFILE.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-[34px] py-[18px] bg-[#16150F] text-[#F4F1EA] no-underline text-[10.5px] uppercase tracking-[0.24em] transition-colors hover:bg-[#937332]"
            >
              Free consultation
            </a>
            <button 
              onClick={onBookClick}
              className="text-[10.5px] uppercase tracking-[0.24em] text-[#937332] no-underline border-b border-[#937332]/40 pb-[5px] transition-colors hover:border-[#937332]"
            >
              Schedule a visit ↗
            </button>
          </div>
          
          <div className="mt-[52px] border-t border-[#937332]/25 max-w-[520px]">
            <div className="flex items-baseline justify-between gap-[24px] py-[14px] border-b border-[#937332]/13">
              <span className="font-mono text-[8.5px] uppercase tracking-[0.26em] text-[#8A857D]">Investor community</span>
              <span className="font-serif-luxury text-[23px] text-[#16150F]">10.1k verified</span>
            </div>
            <div className="flex items-baseline justify-between gap-[24px] py-[14px] border-b border-[#937332]/13">
              <span className="font-mono text-[8.5px] uppercase tracking-[0.26em] text-[#8A857D]">Advisory focus</span>
              <span className="font-serif-luxury text-[23px] text-[#16150F]">Off-plan & Golden Visa</span>
            </div>
            <div className="flex items-baseline justify-between gap-[24px] py-[14px]">
              <span className="font-mono text-[8.5px] uppercase tracking-[0.26em] text-[#8A857D]">Role</span>
              <span className="font-serif-luxury text-[23px] text-[#16150F]">Co-Founder, Gro Vision</span>
            </div>
          </div>
        </motion.div>

        {/* Right Portrait */}
        <div className="relative w-full max-w-[460px] h-[clamp(380px,43vw,620px)] justify-self-center lg:justify-self-end z-10" style={{ perspective: 1200 }}>
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
            <div className="absolute left-[24px] top-[24px] w-full h-full border border-[#937332]/35 rounded-t-[210px] rounded-b-[2px] pointer-events-none" style={{ transform: "translateZ(-30px)" }} />
            <div className="relative w-full h-full rounded-t-[210px] rounded-b-[2px] overflow-hidden bg-[#E7E1D5]" style={{ transform: "translateZ(0px)" }}>
              <img 
                src="/images/DSC02780.webp" 
                alt="Shaista Fathima Ahmed Kabeer" 
                decoding="async" 
                className="w-full h-full object-cover object-[50%_12%] sepia-[0.12] saturate-[0.72] contrast-[1.03]"
              />
            </div>
            <div className="absolute -left-[1px] -bottom-[1px] bg-[#F4F1EA] border border-[#937332]/30 px-[19px] py-[13px] flex flex-col gap-[4px] shadow-xl" style={{ transform: "translateZ(40px)" }}>
              <span className="font-serif-luxury text-[12px] tracking-[0.18em] text-[#16150F]">SHAISTA FATHIMA</span>
              <span className="font-mono text-[8.5px] uppercase tracking-[0.24em] text-[#937332]">Verified · RERA Advisor</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative box-border max-w-[1440px] mx-auto px-[clamp(24px,4.9vw,70px)] pb-[56px] grid grid-cols-2 md:grid-cols-4 gap-y-[18px] gap-x-[clamp(20px,3vw,44px)] font-mono text-[8.5px] uppercase tracking-[0.28em] text-[#8A857D] z-10">
        <span className="pt-[12px] border-t border-[#937332]/30 leading-[1.7]">Zero income, capital gains & property tax</span>
        <span className="pt-[12px] border-t border-[#937332]/30 leading-[1.7]">USD-pegged asset class</span>
        <span className="pt-[12px] border-t border-[#937332]/30 leading-[1.7]">7.5–9% gross rental yields</span>
        <span className="pt-[12px] border-t border-[#937332]/30 leading-[1.7]">DLD-supervised bank escrow</span>
      </div>

      <motion.div 
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex flex-col items-center gap-[9px] pb-[34px] font-mono text-[8px] uppercase tracking-[0.3em] text-[#8A857D] cursor-pointer z-10"
        onClick={onExploreClick}
      >
        <span>Discover services & visa tiers</span>
        <span className="block w-[1px] h-[26px] bg-gradient-to-b from-[#937332]/70 to-transparent" />
      </motion.div>
    </section>
  );
};

