import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

export const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleSwap = () => {
    setActiveIdx((prev) => (prev === 0 ? 1 : 0));
  };
  
  return (
    <section id="testimonials" ref={containerRef} className="py-32 bg-primary text-text-white relative overflow-hidden border-t border-b border-white/5">
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 bg-luxury-grid opacity-30 pointer-events-none" />
      <ParticleCanvas variant="dark" particleCount={30} />
      
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] ambient-glow-gold rounded-full opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] ambient-glow-subtle rounded-full opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Sticky Header */}
        <div className="lg:w-1/3">
          <div className="lg:sticky top-40 z-20">
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold font-mono mb-6">
              <span className="w-8 h-[1px] bg-gold"></span>
              <span>The Inner Circle</span>
            </div>
            
            <h2 className="font-serif-luxury text-5xl lg:text-6xl font-normal text-text-white leading-[1.1] mb-6">
              Words From <br />
              <span className="italic text-gold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-light">
                Visionary Clients
              </span>
            </h2>
            
            <p className="text-text-muted text-sm leading-relaxed max-w-sm mb-12">
              Discretion, precision, and unparalleled access. Discover what it means to build a legacy with Shaista Fathima.
            </p>
          </div>
        </div>

        {/* Right Column: 3D Swapping Stack */}
        <div className="lg:w-2/3 relative h-[650px] sm:h-[550px] lg:h-[600px] w-full mt-8 lg:mt-0 cursor-pointer group perspective-1000" onClick={handleSwap}>
          {TESTIMONIALS.map((current, idx) => {
            const isActive = idx === activeIdx;
            
            return (
              <motion.div
                key={current.id}
                initial={false}
                animate={{ 
                  opacity: isActive ? 1 : 0.4,
                  y: isActive ? 0 : 45,
                  scale: isActive ? 1 : 0.92,
                  zIndex: isActive ? 20 : 10,
                  rotateX: isActive ? 0 : 5
                }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                className="absolute inset-x-0 top-0 mx-auto w-full origin-bottom"
              >
                <div className={`p-8 md:p-14 rounded-2xl glass-panel-gold relative overflow-hidden transition-all duration-700 ${isActive ? 'shadow-[0_30px_60px_-15px_rgba(200,169,106,0.25)] border-gold/50' : 'shadow-none border-white/5 bg-primary/80'} transform-gpu`}>
                  
                  {/* Huge decorative quote */}
                  <Quote className={`absolute -top-6 -right-6 w-48 h-48 pointer-events-none transform transition-all duration-700 ${isActive ? 'text-gold/5 scale-110 rotate-0' : 'text-white/5 -rotate-12'}`} />
                  
                  {/* Star Rating */}
                  <div className="flex items-center gap-1.5 mb-8 relative z-10">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${isActive ? 'fill-gold text-gold' : 'fill-text-muted text-text-muted'}`} />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <blockquote className={`font-serif-luxury text-xl md:text-3xl font-normal leading-loose mb-12 relative z-10 ${isActive ? 'text-text-white' : 'text-text-muted'}`}>
                    "{current.quote}"
                  </blockquote>

                  {/* Client Info Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/10 relative z-10">
                    <div className="flex items-center gap-5">
                      <img
                        src={current.avatar}
                        alt={current.name}
                        referrerPolicy="no-referrer"
                        className={`w-16 h-16 rounded-full object-cover border shadow-lg transition-all duration-500 ${isActive ? 'border-gold/40 grayscale-0' : 'border-white/10 grayscale opacity-70'}`}
                      />
                      <div>
                        <h4 className={`font-serif-luxury text-xl tracking-wide mb-1 ${isActive ? 'text-text-white' : 'text-text-muted'}`}>
                          {current.name}
                        </h4>
                        <p className="text-xs text-text-muted font-light tracking-wide uppercase">
                          {current.title}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end">
                      <div className={`inline-flex items-center gap-2 text-xs font-mono font-medium px-3 py-1.5 rounded-full border mb-2 transition-colors ${isActive ? 'text-gold bg-gold/10 border-gold/20' : 'text-text-muted bg-white/5 border-white/10'}`}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{current.propertyAcquired}</span>
                      </div>
                      <span className="text-[10px] text-text-muted/70 uppercase tracking-widest font-mono">
                        {current.transactionType}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
          
          {/* Subtle click prompt */}
          <motion.div 
            className="absolute -bottom-12 md:-bottom-8 left-1/2 -translate-x-1/2 text-gold-alt text-[10px] uppercase tracking-[0.3em] font-mono opacity-60 flex items-center gap-2 pointer-events-none"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Click to swap cards
          </motion.div>
        </div>
      </div>
    </section>
  );
};
