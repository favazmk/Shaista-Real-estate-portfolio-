import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { CLIENT_PROFILE } from '../data/portfolioData';
import { ParticleCanvas } from './ParticleCanvas';
import { ArrowUpRight } from 'lucide-react';

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
      <div className="relative box-border max-w-[1440px] w-full mx-auto px-[clamp(20px,4vw,60px)] pt-[120px] md:pt-[140px] pb-[40px] grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_clamp(280px,32vw,440px)] gap-[clamp(28px,4vw,60px)] items-center my-auto">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col z-10"
        >
          <h1 className="font-serif-luxury font-normal text-[clamp(32px,4.5vw,58px)] leading-[1.12] tracking-[-0.01em] m-0 text-[#16150F] text-balance">
            Helping global investors<br />
            <span className="italic text-[#937332]">build wealth in the UAE</span>
          </h1>
          
          <p className="font-sans text-base md:text-lg font-light leading-relaxed text-[#4A4742] max-w-[520px] mt-[20px] text-balance">
            <span className="text-[#16150F] font-semibold">{CLIENT_PROFILE.name}</span> — Advisory on off-plan acquisition, Golden Visa residency, and high-yield Dubai real estate assets for overseas & NRI investors.
          </p>
          
          <div className="flex flex-wrap items-center gap-x-[24px] gap-y-[18px] mt-[28px]">
            <a 
              href={CLIENT_PROFILE.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-[32px] py-[16px] bg-[#16150F] text-[#F4F1EA] no-underline text-xs uppercase tracking-[0.24em] font-semibold transition-colors hover:bg-[#937332] shadow-md"
            >
              Free consultation
            </a>
            <button 
              onClick={onBookClick}
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.24em] font-semibold text-[#937332] no-underline border-b-2 border-[#937332]/40 pb-[4px] transition-colors hover:border-[#937332] group"
            >
              <span>Schedule a visit</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
          
          {/* Clean, Prominent Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-[36px] pt-[24px] border-t border-[#937332]/25 max-w-[520px]">
            <div>
              <div className="font-serif-luxury text-2xl sm:text-3xl text-[#16150F] font-bold">10.1k</div>
              <div className="font-sans text-xs text-[#757068] font-medium mt-1">Investor Community</div>
            </div>
            <div>
              <div className="font-serif-luxury text-xl sm:text-2xl text-[#16150F] font-bold">Off-Plan</div>
              <div className="font-sans text-xs text-[#757068] font-medium mt-1">& Golden Visa</div>
            </div>
            <div>
              <div className="font-serif-luxury text-xl sm:text-2xl text-[#16150F] font-bold">Co-Founder</div>
              <div className="font-sans text-xs text-[#757068] font-medium mt-1">Gro Vision LLC</div>
            </div>
          </div>
        </motion.div>

        {/* Right Portrait — Photo shifted upper inside frame on mobile, unchanged on laptop */}
        <div className="relative w-full max-w-[440px] h-[390px] sm:h-[clamp(340px,38vw,520px)] justify-self-center lg:justify-self-end z-10 mt-4 lg:mt-0" style={{ perspective: 1200 }}>
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
            <div className="absolute inset-0 translate-x-3 sm:translate-x-4 translate-y-3 sm:translate-y-4 border border-[#937332]/35 rounded-t-[180px] rounded-b-[2px] pointer-events-none" style={{ transform: "translateZ(-30px)" }} />
            <div className="relative w-full h-full rounded-t-[180px] rounded-b-[2px] overflow-hidden bg-[#E7E1D5]" style={{ transform: "translateZ(0px)" }}>
              <img 
                src="/images/DSC02696.webp" 
                alt="Shaista Fathima - Property Advisor" 
                decoding="async" 
                className="w-full h-full object-cover object-[50%_80%] sm:object-bottom scale-110 transition-all duration-700 origin-bottom"
              />
            </div>
            <div className="absolute -left-[1px] -bottom-[1px] bg-[#F4F1EA] border border-[#937332]/40 px-[16px] sm:px-[18px] py-[10px] sm:py-[12px] flex flex-col gap-[3px] shadow-xl" style={{ transform: "translateZ(40px)" }}>
              <span className="font-serif-luxury text-xs tracking-widest text-[#16150F] font-bold">SHAISTA FATHIMA</span>
              <span className="font-sans text-[10px] uppercase tracking-wider text-[#937332] font-semibold">Licensed RERA Advisor</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex flex-col items-center gap-[6px] pb-[20px] font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#8A857D] cursor-pointer z-10"
        onClick={onExploreClick}
      >
        <span>Explore Partners & Properties</span>
        <span className="block w-[1px] h-[20px] bg-gradient-to-b from-[#937332]/70 to-transparent" />
      </motion.div>
    </section>
  );
};
