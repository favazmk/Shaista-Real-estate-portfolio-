import React from 'react';
import { motion } from 'motion/react';
import { CLIENT_PROFILE } from '../data/portfolioData';
import { ShieldCheck, HeartHandshake, Award, SearchCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { staggerContainer, fadeUpBlur, scaleUp, staggerViewport } from '../utils/animations';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-light-bg bg-architectural-lines-light text-light-text relative overflow-hidden border-t border-b border-gold/20">
      {/* Editorial Dot & Architectural Grid Overlay */}
      <div className="absolute inset-0 bg-editorial-light-grid opacity-60 pointer-events-none" />

      {/* Moving Dots Canvas */}
      <ParticleCanvas variant="light" particleCount={40} />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-gold/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-gold/10 rounded-full blur-[160px] pointer-events-none" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={staggerViewport}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        
        {/* Section Header */}
        <motion.div variants={fadeUpBlur} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-alt font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE VISIONARY BEHIND GRO VISION</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-light-text">
              About <br />
              <span className="italic text-gold-alt">Shaista Fathima</span>
            </h2>
          </div>
          <p className="text-light-text-muted text-sm max-w-md font-light leading-relaxed">
            Co-Founder — Gro Vision Real Estate LLC • RERA Certified Property Advisor & Verified Instagram Creator (@desigirl.realtor).
          </p>
        </motion.div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Portrait with Editorial Frame */}
          <motion.div variants={scaleUp} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30 shadow-xl group">
              <img
                loading="lazy"
                src="/images/DSC02687.webp"
                alt="Shaista Fathima - Real Estate Advisor"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-light-text/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* Corner Luxury Badge */}
            <div className="absolute -bottom-6 -right-6 glass-panel-light-gold p-6 rounded-2xl border border-gold/50 shadow-xl max-w-[260px]">
              <div className="text-xl font-serif-luxury text-gold-alt font-bold">Gro Vision LLC</div>
              <div className="text-xs text-light-text font-semibold mt-1">Co-Founder, Operations & Client Success</div>
              <div className="text-[10px] text-[#6B665F] uppercase font-mono mt-0.5">Sheikh Zayed Rd, Dubai</div>
            </div>
          </motion.div>

          {/* Biography & Story */}
          <motion.div variants={fadeUpBlur} className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-light-text mb-6 font-normal leading-snug">
              "Helping Global & NRI Investors Build Real Estate Wealth in Dubai with Complete Peace of Mind."
            </h3>

            <div className="space-y-4 text-light-text-muted text-sm sm:text-base font-light leading-relaxed mb-8">
              <p>
                As Co-Founder at <strong className="text-light-text font-medium">Gro Vision Real Estate LLC</strong>, Shaista Fathima oversees daily operations, client success, and transaction execution. Together with Founder <strong className="text-light-text font-medium">Kabir Ahmed</strong> (Sales & Growth), Gro Vision delivers end-to-end property advisory in Dubai.
              </p>
              <p>
                With a strong online presence as <strong className="text-gold-alt font-medium">@desigirl.realtor</strong> (10.1k verified followers), Shaista connects overseas investors—including a large South Indian and Tamil-speaking NRI community—with verified Dubai off-plan opportunities, leasing management, and Golden Visa residency solutions.
              </p>
            </div>

            {/* Partner Box */}
            <div className="p-5 rounded-xl bg-white/90 border border-gold/30 shadow-sm mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-gold-alt font-mono mb-1">FOUNDERSHIP PARTNER</div>
                <div className="text-base font-semibold text-light-text">{CLIENT_PROFILE.partner.name}</div>
                <div className="text-xs text-light-text-muted">{CLIENT_PROFILE.partner.title} — {CLIENT_PROFILE.partner.description}</div>
              </div>
              <div className="px-4 py-2 rounded-full border border-gold-alt/40 text-gold-alt text-xs font-mono shrink-0 bg-light-bg">
                Joint Leadership
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CLIENT_PROFILE.values.map((val, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/90 border border-gold/25 hover:border-gold-alt transition-colors duration-300 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-gold/15 border border-gold/30 flex items-center justify-center text-gold-alt mb-2">
                    {idx === 0 && <ShieldCheck className="w-4 h-4" />}
                    {idx === 1 && <HeartHandshake className="w-4 h-4" />}
                    {idx === 2 && <Award className="w-4 h-4" />}
                  </div>
                  <h4 className="text-xs font-semibold text-light-text mb-1">{val.title}</h4>
                  <p className="text-[11px] text-light-text-muted leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Due Diligence Framework Section */}
        <motion.div variants={fadeUpBlur} className="mt-16 pt-16 border-t border-gold/25 relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-alt font-mono mb-2">
              <SearchCheck className="w-3.5 h-3.5" />
              <span>THE DUE DILIGENCE ANGLE</span>
            </div>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-light-text">
              5 Pillars of Property Evaluation
            </h3>
            <p className="text-xs text-light-text-muted mt-2 font-light">
              Every property recommended by Shaista Fathima undergoes rigorous multi-point verification before client presentation.
            </p>
          </div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CLIENT_PROFILE.dueDiligencePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpBlur}
                className="p-6 rounded-2xl neo-panel-light flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase text-gold-alt tracking-widest mb-3 font-bold">
                    PILLAR 0{idx + 1}
                  </div>
                  <h4 className="text-sm font-semibold text-light-text mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-light-text-muted font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gold/20 flex items-center gap-1.5 text-[10px] text-gold-alt font-mono">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Criterion</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
};

