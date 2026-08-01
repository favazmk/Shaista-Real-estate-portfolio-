import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REAL_SERVICES } from '../data/portfolioData';
import { Service } from '../types';
import {
  Home, TrendingUp, Key, Building2, Award, Landmark, ShieldCheck,
  CheckSquare, FileText, Briefcase, Wrench, Palette, Sparkles, CheckCircle2, ArrowRight, X, MessageSquare
} from 'lucide-react';
import { staggerContainer, fadeUpBlur, staggerViewport } from '../utils/animations';

interface ServicesProps {
  onBookClick: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onBookClick }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Core Advisory', 'Investment', 'Residency', 'Quality Assurance', 'Operations'];

  const filteredServices = activeCategory === 'All'
    ? REAL_SERVICES
    : REAL_SERVICES.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-5 h-5 text-gold" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-gold" />;
      case 'Key': return <Key className="w-5 h-5 text-gold" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-gold" />;
      case 'Award': return <Award className="w-5 h-5 text-gold" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-gold" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-gold" />;
      case 'CheckSquare': return <CheckSquare className="w-5 h-5 text-gold" />;
      case 'FileText': return <FileText className="w-5 h-5 text-gold" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-gold" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-gold" />;
      case 'Palette': return <Palette className="w-5 h-5 text-gold" />;
      default: return <Sparkles className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <section id="services" className="py-28 bg-gradient-to-b from-primary via-[#14120D] to-primary relative overflow-hidden border-t border-b border-white/10">
      {/* Background Radial Glow & Grid */}
      <div className="absolute inset-0 bg-luxury-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gold/08 rounded-full blur-[160px] pointer-events-none" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={staggerViewport}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
      >
        
        {/* Section Header */}
        <motion.div variants={fadeUpBlur} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>12 COMPLETE PROPERTY SOLUTIONS</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-text-white">
              Real Estate Services <br />
              <span className="italic gold-text-gradient">By Gro Vision LLC</span>
            </h2>
          </div>
          <p className="text-text-muted text-sm max-w-md font-light leading-relaxed">
            From off-plan purchasing and Golden Visa processing to technical snagging and interior design — comprehensive end-to-end support for Dubai property owners.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div variants={fadeUpBlur} className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 shrink-0 ${
                activeCategory === cat
                  ? 'bg-gold text-primary font-bold shadow-lg shadow-gold/20'
                  : 'bg-secondary border border-white/10 text-text-muted hover:text-text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* 12 Services Grid */}
        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUpBlur}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer p-6 rounded-2xl bg-secondary border border-white/10 hover:border-gold/60 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(200,169,106,0.12)] relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-gold px-2.5 py-1 rounded-full bg-gold/10 border border-gold/20">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl text-text-white group-hover:text-gold transition-colors mb-1">
                  {service.title}
                </h3>

                <p className="text-[11px] uppercase font-mono tracking-wider text-gold mb-3">
                  {service.tagline}
                </p>

                <p className="text-xs text-text-muted font-light leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="space-y-1.5 mb-4">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-text-white">
                      <CheckCircle2 className="w-3 h-3 text-gold shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider font-bold text-gold group-hover:text-gold-light transition-colors pt-3 border-t border-white/5">
                  <span>Enquire Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>

      {/* Service Detail Drawer / Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl p-8 rounded-2xl bg-primary border border-gold/50 shadow-2xl text-text-white"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white hover:text-gold"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-4">
                {getIcon(selectedService.iconName)}
              </div>

              <h3 className="font-serif-luxury text-2xl text-text-white mb-1">
                {selectedService.title}
              </h3>
              <p className="text-xs font-mono uppercase text-gold tracking-wider mb-4">
                {selectedService.tagline}
              </p>

              <p className="text-xs text-text-muted font-light leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <h4 className="text-xs uppercase font-mono tracking-widest text-gold mb-3">
                Key Features & Deliverables
              </h4>
              <div className="space-y-2 mb-8">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-text-white p-2 rounded-lg bg-secondary border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/971525970116?text=Hi%20Shaista,%20I%20am%20interested%20in%20${encodeURIComponent(selectedService.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-full text-xs font-mono uppercase font-bold text-primary bg-gradient-to-r from-gold to-gold-light flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setSelectedService(null);
                    onBookClick();
                  }}
                  className="py-3 px-4 rounded-full text-xs font-mono uppercase font-semibold text-text-white border border-white/20 hover:border-gold"
                >
                  Schedule Visit
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
