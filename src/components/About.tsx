import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { CLIENT_PROFILE } from '../data/portfolioData';
import { ShieldCheck, HeartHandshake, Award, SearchCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

export const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={ref} className="py-28 bg-[#FAF8F5] bg-architectural-lines-light text-[#1A1918] relative overflow-hidden border-t border-b border-[#C8A96A]/20">
      {/* Editorial Dot & Architectural Grid Overlay */}
      <div className="absolute inset-0 bg-editorial-light-grid opacity-60 pointer-events-none" />

      {/* Moving Dots Canvas */}
      <ParticleCanvas variant="light" particleCount={40} />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-[#C8A96A]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-[#C8A96A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#937332] font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE VISIONARY BEHIND GRO VISION</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1918]">
              About <br />
              <span className="italic text-[#937332]">Shaista Fathima</span>
            </h2>
          </div>
          <p className="text-[#55524D] text-sm max-w-md font-light leading-relaxed">
            Co-Founder — Gro Vision Real Estate LLC • RERA Certified Property Advisor & Verified Instagram Creator (@desigirl.realtor).
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Portrait with Editorial Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#C8A96A]/30 shadow-xl group">
              <img
                src="/images/DSC02687.webp"
                alt="Shaista Fathima - Real Estate Advisor"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918]/60 via-transparent to-transparent opacity-60" />
            </div>

            {/* Corner Luxury Badge */}
            <div className="absolute -bottom-6 -right-6 glass-panel-light-gold p-6 rounded-2xl border border-[#C8A96A]/50 shadow-xl max-w-[260px]">
              <div className="text-xl font-serif-luxury text-[#937332] font-bold">Gro Vision LLC</div>
              <div className="text-xs text-[#1A1918] font-semibold mt-1">Co-Founder, Operations & Client Success</div>
              <div className="text-[10px] text-[#6B665F] uppercase font-mono mt-0.5">Sheikh Zayed Rd, Dubai</div>
            </div>
          </motion.div>

          {/* Biography & Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#1A1918] mb-6 font-normal leading-snug">
              "Helping Global & NRI Investors Build Real Estate Wealth in Dubai with Complete Peace of Mind."
            </h3>

            <div className="space-y-4 text-[#55524D] text-sm sm:text-base font-light leading-relaxed mb-8">
              <p>
                As Co-Founder at <strong className="text-[#1A1918] font-medium">Gro Vision Real Estate LLC</strong>, Shaista Fathima oversees daily operations, client success, and transaction execution. Together with Founder <strong className="text-[#1A1918] font-medium">Kabir Ahmed</strong> (Sales & Growth), Gro Vision delivers end-to-end property advisory in Dubai.
              </p>
              <p>
                With a strong online presence as <strong className="text-[#937332] font-medium">@desigirl.realtor</strong> (10.1k verified followers), Shaista connects overseas investors—including a large South Indian and Tamil-speaking NRI community—with verified Dubai off-plan opportunities, leasing management, and Golden Visa residency solutions.
              </p>
            </div>

            {/* Partner Box */}
            <div className="p-5 rounded-xl bg-white/90 border border-[#C8A96A]/30 shadow-sm mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#937332] font-mono mb-1">FOUNDERSHIP PARTNER</div>
                <div className="text-base font-semibold text-[#1A1918]">{CLIENT_PROFILE.partner.name}</div>
                <div className="text-xs text-[#55524D]">{CLIENT_PROFILE.partner.title} — {CLIENT_PROFILE.partner.description}</div>
              </div>
              <div className="px-4 py-2 rounded-full border border-[#937332]/40 text-[#937332] text-xs font-mono shrink-0 bg-[#F4F1EA]">
                Joint Leadership
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {CLIENT_PROFILE.values.map((val, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/90 border border-[#C8A96A]/25 hover:border-[#937332] transition-colors duration-300 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-[#C8A96A]/15 border border-[#C8A96A]/30 flex items-center justify-center text-[#937332] mb-2">
                    {idx === 0 && <ShieldCheck className="w-4 h-4" />}
                    {idx === 1 && <HeartHandshake className="w-4 h-4" />}
                    {idx === 2 && <Award className="w-4 h-4" />}
                  </div>
                  <h4 className="text-xs font-semibold text-[#1A1918] mb-1">{val.title}</h4>
                  <p className="text-[11px] text-[#55524D] leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Due Diligence Framework Section */}
        <div className="mt-16 pt-16 border-t border-[#C8A96A]/25">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#937332] font-mono mb-2">
              <SearchCheck className="w-3.5 h-3.5" />
              <span>THE DUE DILIGENCE ANGLE</span>
            </div>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#1A1918]">
              5 Pillars of Property Evaluation
            </h3>
            <p className="text-xs text-[#55524D] mt-2 font-light">
              Every property recommended by Shaista Fathima undergoes rigorous multi-point verification before client presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CLIENT_PROFILE.dueDiligencePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-panel-light border border-[#C8A96A]/30 hover:border-[#937332] transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#937332] tracking-widest mb-2 font-bold">
                    PILLAR 0{idx + 1}
                  </div>
                  <h4 className="text-sm font-semibold text-[#1A1918] mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#55524D] font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#C8A96A]/20 flex items-center gap-1.5 text-[10px] text-[#937332] font-mono">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified Criterion</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
