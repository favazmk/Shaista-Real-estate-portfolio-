import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REAL_SERVICES } from '../data/portfolioData';
import { Service } from '../types';
import {
  Home, TrendingUp, Key, Building2, Award, Landmark, ShieldCheck,
  CheckSquare, FileText, Briefcase, Wrench, Palette, Sparkles, CheckCircle2, ArrowRight, X, MessageSquare
} from 'lucide-react';

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
      case 'Home': return <Home className="w-5 h-5 text-[#C8A96A]" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#C8A96A]" />;
      case 'Key': return <Key className="w-5 h-5 text-[#C8A96A]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#C8A96A]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#C8A96A]" />;
      case 'Landmark': return <Landmark className="w-5 h-5 text-[#C8A96A]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#C8A96A]" />;
      case 'CheckSquare': return <CheckSquare className="w-5 h-5 text-[#C8A96A]" />;
      case 'FileText': return <FileText className="w-5 h-5 text-[#C8A96A]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#C8A96A]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#C8A96A]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#C8A96A]" />;
      default: return <Sparkles className="w-5 h-5 text-[#C8A96A]" />;
    }
  };

  return (
    <section id="services" className="py-28 bg-gradient-to-b from-[#0B0B0B] via-[#14120D] to-[#0B0B0B] relative overflow-hidden border-t border-b border-white/10">
      {/* Background Radial Glow & Grid */}
      <div className="absolute inset-0 bg-luxury-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#C8A96A]/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#C8A96A]/08 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96A] font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>12 COMPLETE PROPERTY SOLUTIONS</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F7F5F2]">
              Real Estate Services <br />
              <span className="italic gold-text-gradient">By Gro Vision LLC</span>
            </h2>
          </div>
          <p className="text-[#9C9C9C] text-sm max-w-md font-light leading-relaxed">
            From off-plan purchasing and Golden Visa processing to technical snagging and interior design — comprehensive end-to-end support for Dubai property owners.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 shrink-0 ${
                activeCategory === cat
                  ? 'bg-[#C8A96A] text-[#0B0B0B] font-bold shadow-lg shadow-[#C8A96A]/20'
                  : 'bg-[#121212] border border-white/10 text-[#9C9C9C] hover:text-[#F7F5F2] hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#C8A96A]/60 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(200,169,106,0.12)] relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#C8A96A]/10 border border-[#C8A96A]/30 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-[9px] uppercase font-mono tracking-widest text-[#C8A96A] px-2.5 py-1 rounded-full bg-[#C8A96A]/10 border border-[#C8A96A]/20">
                    {service.category}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl text-[#F7F5F2] group-hover:text-[#C8A96A] transition-colors mb-1">
                  {service.title}
                </h3>

                <p className="text-[11px] uppercase font-mono tracking-wider text-[#C8A96A] mb-3">
                  {service.tagline}
                </p>

                <p className="text-xs text-[#9C9C9C] font-light leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="space-y-1.5 mb-4">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-[#F7F5F2]">
                      <CheckCircle2 className="w-3 h-3 text-[#C8A96A] shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider font-bold text-[#C8A96A] group-hover:text-[#E5C378] transition-colors pt-3 border-t border-white/5">
                  <span>Enquire Service</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Detail Drawer / Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl p-8 rounded-2xl bg-[#0B0B0B] border border-[#C8A96A]/50 shadow-2xl text-[#F7F5F2]"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-white hover:text-[#C8A96A]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-xl bg-[#C8A96A]/10 border border-[#C8A96A]/30 flex items-center justify-center mb-4">
                {getIcon(selectedService.iconName)}
              </div>

              <h3 className="font-serif-luxury text-2xl text-[#F7F5F2] mb-1">
                {selectedService.title}
              </h3>
              <p className="text-xs font-mono uppercase text-[#C8A96A] tracking-wider mb-4">
                {selectedService.tagline}
              </p>

              <p className="text-xs text-[#9C9C9C] font-light leading-relaxed mb-6">
                {selectedService.description}
              </p>

              <h4 className="text-xs uppercase font-mono tracking-widest text-[#C8A96A] mb-3">
                Key Features & Deliverables
              </h4>
              <div className="space-y-2 mb-8">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#F7F5F2] p-2 rounded-lg bg-[#121212] border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-[#C8A96A] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`https://wa.me/971525970116?text=Hi%20Shaista,%20I%20am%20interested%20in%20${encodeURIComponent(selectedService.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-full text-xs font-mono uppercase font-bold text-[#0B0B0B] bg-gradient-to-r from-[#C8A96A] to-[#E5C378] flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </a>

                <button
                  onClick={() => {
                    setSelectedService(null);
                    onBookClick();
                  }}
                  className="py-3 px-4 rounded-full text-xs font-mono uppercase font-semibold text-[#F7F5F2] border border-white/20 hover:border-[#C8A96A]"
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
