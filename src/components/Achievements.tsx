import React from 'react';
import { motion } from 'motion/react';
import { ACHIEVEMENTS, DEVELOPER_PARTNERS } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import DeveloperMarquee from './DeveloperMarquee';

export const Achievements: React.FC = () => {
  return (
    <section id="timeline" className="py-14 md:py-16 bg-gradient-to-b from-[#0F0E0C] via-[#161410] to-[#0D0C0A] bg-architectural-lines relative overflow-hidden border-t border-b border-white/10">
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 bg-editorial-gold-grid opacity-20 pointer-events-none" />

      {/* Moving Particles Canvas */}
      <ParticleCanvas variant="dark" particleCount={35} />
      <div className="absolute bottom-10 right-10 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-gold/10 rounded-full blur-[170px] pointer-events-none max-w-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CHRONICLES OF DISTINCTION</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-text-white">
              Milestones, Awards & <br />
              <span className="italic gold-text-gradient">Developer Alliances</span>
            </h2>
          </div>
          <p className="text-text-muted text-sm max-w-md font-light leading-relaxed">
            Key milestones in building an international luxury real estate platform and creator ecosystem.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Year Marker on Left for Larger Screens */}
              <div className="md:absolute -left-32 top-0 text-xl font-serif-luxury font-bold text-gold mb-2 md:mb-0">
                {item.year}
              </div>

              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-2 border-gold group-hover:bg-gold transition-colors duration-300" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 hover:border-gold/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
                    {item.category}
                  </span>
                  <span className="text-xs text-text-muted font-mono">{item.partnerOrOrg}</span>
                </div>

                <h3 className="font-serif-luxury text-2xl text-text-white font-semibold mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-text-muted font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      {/* Developer Logo Alliances Bar */}
      <DeveloperMarquee />

    </div>
  </section>
);
};
