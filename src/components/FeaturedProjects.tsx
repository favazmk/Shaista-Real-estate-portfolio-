import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'penthouses', label: 'Sky Penthouses' },
    { id: 'mansions', label: 'Architectural Mansions' },
    { id: 'waterfront', label: 'Waterfront Estates' },
    { id: 'commercial', label: 'Commercial High-Yield' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="properties" className="py-28 bg-gradient-to-b from-[#0B0B0B] via-[#12110E] to-[#0B0B0B] relative overflow-hidden border-t border-b border-white/5">
      {/* Background Architectural Grid & Lighting */}
      <div className="absolute inset-0 bg-luxury-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#C8A96A]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-10%] w-[500px] h-[500px] bg-[#C8A96A]/08 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96A] font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE PORTFOLIO OF DISTINCTION</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F7F5F2]">
              Featured Luxury <br />
              <span className="italic gold-text-gradient">Real Estate Collections</span>
            </h2>
          </div>
          <p className="text-[#9C9C9C] text-sm max-w-md font-light leading-relaxed">
            Curated ultra-luxury residences, off-market penthouses, and high-yield commercial assets represented by The Gro Vision.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-button uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#C8A96A] to-[#E5C378] text-[#0B0B0B] font-bold shadow-[0_0_20px_rgba(200,169,106,0.3)]'
                  : 'text-[#9C9C9C] hover:text-[#F7F5F2] hover:bg-white/5 border border-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Pinterest / Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                onClick={() => onSelectProject(project)}
                data-cursor="Inspect"
                className="group cursor-pointer rounded-2xl overflow-hidden bg-[#121212] border border-white/10 hover:border-[#C8A96A]/60 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(0,0,0,0.8)] relative"
              >
                {/* Image Container with Hover Zoom & Badge */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 glass-panel-gold px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest text-[#C8A96A] border border-[#C8A96A]/30">
                    {project.category}
                  </div>

                  {/* Index Number Circle Accent */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full border border-white/20 glass-panel flex items-center justify-center text-xs font-mono text-[#C8A96A]">
                    {String(filteredProjects.indexOf(project) + 1).padStart(2, '0')}
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-4 right-4 bg-[#0B0B0B]/90 backdrop-blur-md px-4 py-1.5 rounded-lg border border-white/10">
                    <span className="font-serif-luxury text-lg font-bold text-[#F7F5F2]">
                      {project.price}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#9C9C9C] font-light mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C8A96A]" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-serif-luxury text-2xl font-normal text-[#F7F5F2] group-hover:text-[#C8A96A] transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#9C9C9C] line-clamp-2 font-light leading-relaxed mb-6">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Specs Bar */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#9C9C9C] font-mono">
                    {project.bedrooms > 0 && (
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-3.5 h-3.5 text-[#C8A96A]" />
                        <span>{project.bedrooms} Beds</span>
                      </div>
                    )}
                    {project.bathrooms > 0 && (
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-3.5 h-3.5 text-[#C8A96A]" />
                        <span>{project.bathrooms} Baths</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-[#C8A96A]" />
                      <span>{project.sqft}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Gold Hover Border Accent */}
                <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
