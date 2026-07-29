import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

export const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section id="testimonials" className="py-28 bg-[#F4F1EA] bg-architectural-lines-light text-[#1A1918] relative overflow-hidden border-t border-b border-[#C8A96A]/20">
      {/* Background Lighting & Dot Grid */}
      <div className="absolute inset-0 bg-editorial-light-grid opacity-60 pointer-events-none" />

      {/* Moving Particles Canvas */}
      <ParticleCanvas variant="light" particleCount={40} />

      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#C8A96A]/12 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#937332] font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TESTIMONIALS OF PRESTIGE</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1918]">
              Words From Ultra-High <br />
              <span className="italic text-[#937332]">Net Worth Clients</span>
            </h2>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              data-cursor="Previous"
              aria-label="Previous Testimonial"
              className="p-3 rounded-full border border-[#C8A96A]/30 hover:border-[#937332] text-[#1A1918] hover:text-[#937332] bg-white shadow-sm transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              data-cursor="Next"
              aria-label="Next Testimonial"
              className="p-3 rounded-full border border-[#C8A96A]/30 hover:border-[#937332] text-[#1A1918] hover:text-[#937332] bg-white shadow-sm transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Highlighted Interactive Testimonial Card */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-14 rounded-2xl glass-panel-light-gold border border-[#C8A96A]/40 shadow-xl relative mb-16"
        >
          <Quote className="absolute top-8 right-8 w-16 h-16 text-[#937332]/20 pointer-events-none" />

          {/* Star Rating */}
          <div className="flex items-center gap-1 mb-6">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#937332] text-[#937332]" />
            ))}
          </div>

          {/* Quote Text */}
          <blockquote className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-[#1A1918] font-normal leading-relaxed mb-8">
            "{current.quote}"
          </blockquote>

          {/* Client Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#C8A96A]/25">
            <div className="flex items-center gap-4">
              <img
                src={current.avatar}
                alt={current.name}
                referrerPolicy="no-referrer"
                className="w-14 h-14 rounded-full object-cover border border-[#C8A96A]/50 shadow-sm"
              />
              <div>
                <h4 className="font-serif-luxury text-xl font-semibold text-[#1A1918]">
                  {current.name}
                </h4>
                <p className="text-xs text-[#55524D] font-light">
                  {current.title}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:items-end">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#937332] font-mono font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Transaction: {current.propertyAcquired}</span>
              </div>
              <span className="text-[10px] text-[#55524D] uppercase tracking-wider font-mono mt-0.5">
                {current.transactionType}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Infinite Marquee Client Strip */}
        <div className="overflow-hidden relative py-4 border-t border-b border-[#C8A96A]/20">
          <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
            {TESTIMONIALS.concat(TESTIMONIALS).map((t, idx) => (
              <div key={idx} className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                <span className="font-serif-luxury text-lg text-[#1A1918] font-medium">{t.name}</span>
                <span className="text-xs text-[#937332] font-mono font-semibold">({t.propertyAcquired})</span>
                <span className="text-[#937332]">•</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
