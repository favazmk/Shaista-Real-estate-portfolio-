import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLIENT_PROFILE, CONTENT_PILLARS, SOCIAL_REELS } from '../data/portfolioData';
import { SocialReel } from '../types';
import { Play, Eye, Heart, MessageCircle, Instagram, Sparkles, ExternalLink, X, CheckCircle2, Globe, Share2, Bookmark, Music } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

export const PersonalBrand: React.FC = () => {
  const [selectedReel, setSelectedReel] = useState<SocialReel | null>(null);
  const [viewMode, setViewMode] = useState<'embed' | 'app'>('embed');
  const [expandedCaptions, setExpandedCaptions] = useState<Record<string, boolean>>({});

  const toggleCaption = (id: string) => {
    setExpandedCaptions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="brand" className="py-28 bg-gradient-to-b from-[#0F0E0C] via-[#161410] to-[#0D0C0A] bg-architectural-lines relative overflow-hidden border-t border-b border-white/10">
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 bg-editorial-gold-grid opacity-20 pointer-events-none" />

      {/* Moving Particles Canvas */}
      <ParticleCanvas variant="dark" particleCount={35} />
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#C8A96A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96A] font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE PERSONAL BRAND & CONTENT PILLARS</span>
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F7F5F2]">
              {CLIENT_PROFILE.handle} <br />
              <span className="italic gold-text-gradient">Verified Instagram Creator</span>
            </h2>
          </div>

          {/* Verified Follower Stats Card */}
          <div className="flex items-center gap-6 glass-panel-gold p-4 rounded-2xl border border-[#C8A96A]/40">
            <div>
              <div className="flex items-center gap-1.5 text-2xl font-serif-luxury font-bold text-[#F7F5F2]">
                <span>10.1k</span>
                <CheckCircle2 className="w-5 h-5 text-[#C8A96A] fill-[#C8A96A]/20" />
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#C8A96A] font-mono">Verified Instagram</div>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-serif-luxury font-bold text-[#F7F5F2]">Gro Vision</div>
              <div className="text-[10px] uppercase tracking-widest text-[#C8A96A] font-mono">@grovisionrealestatellc</div>
            </div>
          </div>
        </div>

        {/* 3 Content Pillars from IG Highlights */}
        <div className="mb-20">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C8A96A] font-mono mb-4 text-center">
            CORE HIGHLIGHTS & CONTENT PILLARS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTENT_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="p-8 rounded-2xl bg-[#0B0B0B] border border-white/10 hover:border-[#C8A96A]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#C8A96A]/10 border border-[#C8A96A]/30 flex items-center justify-center text-[#C8A96A] mb-6">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-luxury text-2xl text-[#F7F5F2] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono uppercase text-[#C8A96A] tracking-wider mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-[#9C9C9C] font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {pillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-[#F7F5F2]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A96A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Instagram Reels Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-[#C8A96A] font-mono mb-2 flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#C8A96A]" />
                <span>OFFICIAL INSTAGRAM REELS (@desigirl.realtor)</span>
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-[#F7F5F2]">
                Real Estate Insights & Captions <span className="italic gold-text-gradient">Live Feed</span>
              </h3>
            </div>

            {/* View Mode Toggle Controls */}
            <div className="flex items-center gap-3">
              <div className="bg-[#121212] p-1 rounded-full border border-white/10 flex items-center">
                <button
                  onClick={() => setViewMode('embed')}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                    viewMode === 'embed'
                      ? 'bg-[#C8A96A] text-[#0B0B0B] font-bold'
                      : 'text-[#9C9C9C] hover:text-[#F7F5F2]'
                  }`}
                >
                  Live Official Embeds
                </button>
                <button
                  onClick={() => setViewMode('app')}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                    viewMode === 'app'
                      ? 'bg-[#C8A96A] text-[#0B0B0B] font-bold'
                      : 'text-[#9C9C9C] hover:text-[#F7F5F2]'
                  }`}
                >
                  Reel UI & Captions
                </button>
              </div>

              <a
                href="https://www.instagram.com/desigirl.realtor"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full text-xs font-mono uppercase text-[#F7F5F2] border border-[#C8A96A]/40 hover:border-[#C8A96A] flex items-center gap-2"
              >
                <Instagram className="w-3.5 h-3.5 text-[#C8A96A]" />
                <span>@desigirl.realtor</span>
              </a>
            </div>
          </div>

          {/* VIEW MODE 1: OFFICIAL LIVE EMBEDS GRID */}
          {viewMode === 'embed' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SOCIAL_REELS.map((reel) => (
                <div key={reel.id} className="flex flex-col h-full bg-[#0B0B0B] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                  {/* Real Instagram Embed iFrame */}
                  <div className="w-full h-[580px] bg-[#000]">
                    <iframe
                      src={reel.embedUrl}
                      title={reel.title}
                      className="w-full h-full border-0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  {/* Direct Link Footer */}
                  <div className="p-3 bg-[#121212] border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#9C9C9C] truncate max-w-[180px]">{reel.title}</span>
                    <a
                      href={reel.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-[#C8A96A] hover:underline flex items-center gap-1 shrink-0"
                    >
                      <span>Open Reel</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* VIEW MODE 2: INSTAGRAM REEL APP INTERFACE & REAL CAPTION CARDS */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SOCIAL_REELS.map((reel) => {
                const isExpanded = !!expandedCaptions[reel.id];
                return (
                  <motion.div
                    key={reel.id}
                    whileHover={{ y: -6 }}
                    className="group relative bg-[#090909] rounded-2xl overflow-hidden border border-white/10 hover:border-[#C8A96A]/60 transition-all duration-300 flex flex-col shadow-2xl"
                  >
                    {/* Top Instagram Profile Header */}
                    <div className="p-3 bg-[#121212] border-b border-white/10 flex items-center justify-between z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#FFB800] via-[#FF2E00] to-[#D800B9] p-[1.5px]">
                          <div className="w-full h-full rounded-full bg-black p-[1px]">
                            <img
                              src="/images/DSC02696.webp"
                              alt="Shaista Fathima"
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-bold text-[#F7F5F2]">desigirl.realtor</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0095F6] fill-current" />
                          </div>
                          <div className="text-[9px] font-mono text-[#9C9C9C]">Original Reel</div>
                        </div>
                      </div>

                      <a
                        href={reel.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-[#C8A96A] hover:text-[#0B0B0B] text-[10px] font-mono text-[#F7F5F2] font-semibold transition-all"
                      >
                        Follow
                      </a>
                    </div>

                    {/* Reel Video Container & Action Bar Overlay */}
                    <div className="relative aspect-[9/16] overflow-hidden bg-black">
                      <img
                        src={reel.thumbnail}
                        alt={reel.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                      {/* Play Action Center */}
                      <button
                        onClick={() => setSelectedReel(reel)}
                        className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                        aria-label={`Play ${reel.title}`}
                      >
                        <div className="w-14 h-14 rounded-full bg-[#C8A96A] text-[#0B0B0B] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform pl-1">
                          <Play className="w-6 h-6 fill-current" />
                        </div>
                      </button>

                      {/* Right Instagram Reel Action Buttons */}
                      <div className="absolute right-3 bottom-16 flex flex-col items-center gap-4 text-white z-10">
                        <button className="flex flex-col items-center gap-0.5 group/icon">
                          <div className="p-2 rounded-full bg-black/40 backdrop-blur-md group-hover/icon:text-[#FF3040]">
                            <Heart className="w-5 h-5 fill-current text-white/90" />
                          </div>
                          <span className="text-[10px] font-mono text-white/90">{reel.likes}</span>
                        </button>

                        <button className="flex flex-col items-center gap-0.5 group/icon">
                          <div className="p-2 rounded-full bg-black/40 backdrop-blur-md group-hover/icon:text-[#C8A96A]">
                            <MessageCircle className="w-5 h-5 text-white/90" />
                          </div>
                          <span className="text-[10px] font-mono text-white/90">{reel.comments}</span>
                        </button>

                        <button className="p-2 rounded-full bg-black/40 backdrop-blur-md hover:text-[#C8A96A]">
                          <Share2 className="w-5 h-5 text-white/90" />
                        </button>

                        <button className="p-2 rounded-full bg-black/40 backdrop-blur-md hover:text-[#C8A96A]">
                          <Bookmark className="w-5 h-5 text-white/90" />
                        </button>

                        {/* Spinning Audio Track Record */}
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#333] to-[#111] p-[1.5px] border border-white/20 animate-spin-slow flex items-center justify-center">
                          <Music className="w-3 h-3 text-[#C8A96A]" />
                        </div>
                      </div>

                      {/* Reel Bottom Caption Overlay */}
                      <div className="absolute bottom-0 inset-x-0 p-4 pr-14 text-left z-10">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="text-xs font-bold text-white">desigirl.realtor</span>
                          <CheckCircle2 className="w-3 h-3 text-[#0095F6] fill-current" />
                        </div>

                        {/* Caption Text */}
                        <p className={`text-[11px] text-white/90 font-light leading-snug transition-all ${isExpanded ? '' : 'line-clamp-2'}`}>
                          {reel.caption}
                        </p>
                        
                        <button
                          onClick={() => toggleCaption(reel.id)}
                          className="text-[10px] font-mono text-[#C8A96A] mt-1 hover:underline focus:outline-none"
                        >
                          {isExpanded ? "Show Less" : "more"}
                        </button>

                        {/* Audio Track Marquee Bar */}
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/80 mt-2 truncate">
                          <Music className="w-3 h-3 text-[#C8A96A] shrink-0" />
                          <span className="truncate">{reel.audioTrack || "Original Audio - desigirl.realtor"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-3 bg-[#121212] border-t border-white/10 flex items-center gap-2">
                      <button
                        onClick={() => setSelectedReel(reel)}
                        className="flex-1 py-2 rounded-xl bg-[#C8A96A] text-[#0B0B0B] text-[11px] font-mono font-bold uppercase hover:bg-[#E5C378] transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Watch Preview</span>
                      </button>

                      <a
                        href={reel.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/80 hover:text-[#C8A96A] transition-colors"
                        aria-label="Open Reel on Instagram"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* Reel Embed Lightbox Modal */}
        <AnimatePresence>
          {selectedReel && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-4xl bg-[#0B0B0B] rounded-2xl border border-[#C8A96A]/50 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
              >
                {/* Close Button Mobile/Desktop */}
                <button
                  onClick={() => setSelectedReel(null)}
                  className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/80 text-white hover:text-[#C8A96A] transition-colors border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Side: Live Instagram Embed / Video Player */}
                <div className="w-full md:w-1/2 aspect-[9/16] bg-black relative flex items-center justify-center min-h-[420px] max-h-[600px]">
                  <iframe
                    src={selectedReel.embedUrl}
                    title={selectedReel.title}
                    className="w-full h-full border-0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {/* Right Side: Real Caption & Account Details Panel */}
                <div className="w-full md:w-1/2 p-6 bg-[#121212] border-t md:border-t-0 md:border-l border-white/10 flex flex-col justify-between overflow-y-auto">
                  <div>
                    {/* Account Header */}
                    <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FFB800] via-[#FF2E00] to-[#D800B9] p-[2px]">
                        <div className="w-full h-full rounded-full bg-black p-[1px]">
                          <img
                            src="/images/DSC02696.webp"
                            alt="Shaista Fathima"
                            className="w-full h-full rounded-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-bold text-[#F7F5F2]">desigirl.realtor</span>
                          <CheckCircle2 className="w-4 h-4 text-[#0095F6] fill-current" />
                        </div>
                        <div className="text-xs text-[#9C9C9C] font-mono">Co-Founder • Gro Vision Real Estate LLC</div>
                      </div>
                    </div>

                    {/* Title & Real Caption */}
                    <div className="mb-6 space-y-3">
                      <h4 className="text-lg font-serif-luxury text-[#F7F5F2]">{selectedReel.title}</h4>
                      <p className="text-xs text-[#D1D1D1] font-light leading-relaxed whitespace-pre-line bg-black/40 p-4 rounded-xl border border-white/5">
                        {selectedReel.caption}
                      </p>
                    </div>

                    {/* Audio Track & Metrics */}
                    <div className="space-y-3 mb-6 bg-black/20 p-4 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between text-xs font-mono text-[#9C9C9C]">
                        <span>Views: <strong className="text-[#F7F5F2]">{selectedReel.views}</strong></span>
                        <span>Likes: <strong className="text-[#F7F5F2]">{selectedReel.likes}</strong></span>
                        <span>Comments: <strong className="text-[#F7F5F2]">{selectedReel.comments}</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#C8A96A] pt-2 border-t border-white/5">
                        <Music className="w-4 h-4" />
                        <span>{selectedReel.audioTrack || "Original Audio - desigirl.realtor"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Link Action */}
                  <a
                    href={selectedReel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-[#C8A96A] text-[#0B0B0B] text-xs font-mono font-bold uppercase hover:bg-[#E5C378] transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>View Official Reel on Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Official Social Channels Card */}
        <div className="p-8 md:p-12 rounded-2xl glass-panel border border-white/10 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C8A96A] font-mono">OFFICIAL DIGITAL CHANNELS</span>
            <h3 className="font-serif-luxury text-3xl text-[#F7F5F2] mt-2">Connect Directly with Shaista</h3>
            <p className="text-xs text-[#9C9C9C] mt-2 font-light">
              Follow Shaista Fathima (@desigirl.realtor) for daily Dubai property walkthroughs, market updates, and investment guides.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={CLIENT_PROFILE.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#121212] border border-[#C8A96A]/40 hover:border-[#C8A96A] text-xs font-mono uppercase text-[#F7F5F2] hover:text-[#C8A96A] transition-all flex items-center gap-2"
            >
              <Instagram className="w-4 h-4 text-[#C8A96A]" />
              <span>Instagram (@desigirl.realtor)</span>
            </a>

            <a
              href={CLIENT_PROFILE.socials.threads}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#121212] border border-white/10 hover:border-white/30 text-xs font-mono uppercase text-[#F7F5F2] transition-all flex items-center gap-2"
            >
              <Share2 className="w-4 h-4 text-[#C8A96A]" />
              <span>Threads</span>
            </a>

            <a
              href={CLIENT_PROFILE.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#121212] border border-white/10 hover:border-white/30 text-xs font-mono uppercase text-[#F7F5F2] transition-all flex items-center gap-2"
            >
              <Globe className="w-4 h-4 text-[#C8A96A]" />
              <span>Facebook</span>
            </a>

            <a
              href={CLIENT_PROFILE.socials.companyWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C8A96A] to-[#E5C378] text-[#0B0B0B] text-xs font-mono uppercase font-bold transition-all flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>thegrovision.com</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
