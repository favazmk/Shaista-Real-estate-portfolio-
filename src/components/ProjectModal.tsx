import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { X, Bed, Bath, Maximize2, MapPin, Calendar, Building, CheckCircle2, Video, PhoneCall, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onBookClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onBookClick }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'gallery' | 'tour' | 'floorplan'>('gallery');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-2xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-6xl my-auto rounded-2xl bg-primary border border-gold/40 shadow-2xl overflow-hidden text-text-white"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/60 border border-white/20 text-text-white hover:text-gold hover:border-gold transition-colors"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header Bar */}
          <div className="p-6 md:p-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-gold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{project.category} • {project.developer}</span>
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-text-white">
                {project.title}
              </h2>
              <p className="text-xs text-text-muted flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>{project.location}</span>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs uppercase text-text-muted font-mono">Guide Valuation</div>
                <div className="font-serif-luxury text-3xl text-gold font-bold">
                  {project.price}
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onBookClick();
                }}
                className="px-6 py-3 rounded-full text-xs font-button uppercase tracking-widest font-bold text-primary bg-gradient-to-r from-gold to-gold-light hover:shadow-[0_0_20px_rgba(200,169,106,0.4)] transition-all"
              >
                Schedule Visit
              </button>
            </div>
          </div>

          {/* Media / View Switcher Tabs */}
          <div className="flex border-b border-white/10 bg-secondary px-6">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-5 py-3 text-xs uppercase tracking-widest font-mono border-b-2 transition-colors ${
                activeTab === 'gallery' ? 'border-gold text-gold' : 'border-transparent text-text-muted hover:text-text-white'
              }`}
            >
              Photo Gallery ({project.gallery.length})
            </button>
            <button
              onClick={() => setActiveTab('tour')}
              className={`px-5 py-3 text-xs uppercase tracking-widest font-mono border-b-2 transition-colors ${
                activeTab === 'tour' ? 'border-gold text-gold' : 'border-transparent text-text-muted hover:text-text-white'
              }`}
            >
              4K Cinematic Tour
            </button>
            <button
              onClick={() => setActiveTab('floorplan')}
              className={`px-5 py-3 text-xs uppercase tracking-widest font-mono border-b-2 transition-colors ${
                activeTab === 'floorplan' ? 'border-gold text-gold' : 'border-transparent text-text-muted hover:text-text-white'
              }`}
            >
              Architectural Floor Plans
            </button>
          </div>

          {/* Modal Main Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 max-h-[70vh] overflow-y-auto">
            
            {/* Left Column: Visual Media Display */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {activeTab === 'gallery' && (
                <>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={project.gallery[activeImageIndex] || project.featuredImage}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Thumbnails */}
                  <div className="flex items-center gap-3 overflow-x-auto pb-2">
                    {project.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-20 h-16 rounded-lg overflow-hidden border transition-all flex-shrink-0 ${
                          activeImageIndex === idx ? 'border-gold scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img loading="lazy" src={img} alt={`Gallery thumbnail ${idx + 1} for ${project.title}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </>
              )}

              {activeTab === 'tour' && (
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black flex items-center justify-center">
                  <video
                    src="https://assets.mixkit.co/videos/preview/mixkit-luxurious-hotel-room-interior-41589-large.mp4"
                    controls
                    autoPlay
                    loop
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {activeTab === 'floorplan' && (
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-secondary p-6 flex flex-col items-center justify-center text-center">
                  <Building className="w-12 h-12 text-gold mb-3" />
                  <h4 className="font-serif-luxury text-xl text-text-white">Architectural Schematic Layout</h4>
                  <p className="text-xs text-text-muted max-w-sm mt-1">
                    Detailed AutoCAD engineering floor plans and structural dimensions available upon signed NDA request.
                  </p>
                </div>
              )}

              {/* Specs Bar */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-secondary border border-white/5 text-center text-xs font-mono">
                <div>
                  <div className="text-text-muted">Bedrooms</div>
                  <div className="text-text-white font-bold text-sm mt-0.5">{project.bedrooms} Suites</div>
                </div>
                <div>
                  <div className="text-text-muted">Bathrooms</div>
                  <div className="text-text-white font-bold text-sm mt-0.5">{project.bathrooms} Baths</div>
                </div>
                <div>
                  <div className="text-text-muted">Built-Up Area</div>
                  <div className="text-text-white font-bold text-sm mt-0.5">{project.sqft}</div>
                </div>
              </div>
            </div>

            {/* Right Column: Overview, Amenities & Private Viewing Form */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="font-serif-luxury text-2xl text-text-white mb-3">Property Executive Overview</h3>
                <p className="text-xs text-text-muted leading-relaxed font-light mb-6">
                  {project.overview}
                </p>

                <h4 className="text-xs uppercase font-mono tracking-widest text-gold mb-3">
                  Signature Amenities & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {project.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Private Viewing Booking Box */}
              <div className="p-5 rounded-xl glass-panel-gold border border-gold/30 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-text-white">
                  <PhoneCall className="w-4 h-4 text-gold" />
                  <span>Request Private Viewing & Confidential Deck</span>
                </div>
                <p className="text-[11px] text-text-muted">
                  Connect directly with Simran Kaur's private client desk for off-market access.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    onBookClick();
                  }}
                  className="w-full py-3 rounded-lg text-xs font-button uppercase tracking-widest font-bold text-primary bg-gradient-to-r from-gold to-gold-light hover:shadow-[0_0_20px_rgba(200,169,106,0.4)] transition-all"
                >
                  Schedule Private Showing
                </button>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
