import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Instagram, Share2, Globe, ExternalLink, Sparkles, MessageSquare } from 'lucide-react';
import { CLIENT_PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-primary text-text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Monogram & Profile Header */}
        <div className="pb-12 border-b border-white/10">
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-gold/50 flex items-center justify-center glass-panel-gold">
                <span className="font-cinzel text-sm text-gold font-bold">SF</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-xl tracking-wider text-text-white">
                  {CLIENT_PROFILE.name}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-gold">
                  {CLIENT_PROFILE.handle} • {CLIENT_PROFILE.companyHandle}
                </span>
              </div>
            </a>
            <p className="text-xs text-text-muted max-w-md font-light leading-relaxed">
              RERA Certified Property Advisor & Co-Founder at Gro Vision Real Estate LLC, Dubai, UAE. Helping Global Investors Build Wealth in UAE.
            </p>
          </div>
        </div>

        {/* Links & Socials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gold mb-4">
              PORTFOLIO SECTIONS
            </h4>
            <ul className="space-y-2 text-text-muted">
              <li><a href="#about" className="hover:text-text-white transition-colors">Biography & Leadership</a></li>
              <li><a href="#developer-partners" className="hover:text-text-white transition-colors">Developer Partners</a></li>
              <li><a href="#brand" className="hover:text-text-white transition-colors">Personal Brand & Content</a></li>
              <li><a href="#buying-process" className="hover:text-text-white transition-colors">5-Step Buying Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gold mb-4">
              GUIDES & INSIGHTS
            </h4>
            <ul className="space-y-2 text-text-muted">
              <li><a href="#community-guides" className="hover:text-text-white transition-colors">Dubai Community Enclaves</a></li>
              <li><a href="#investment-insights" className="hover:text-text-white transition-colors">NRI Tax & LRS Insights</a></li>
              <li><a href="#faq" className="hover:text-text-white transition-colors">Investor FAQ</a></li>
              <li><a href="#contact" className="hover:text-text-white transition-colors">Contact Advisory Desk</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-gold mb-4">
              VERIFIED CHANNELS
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href={CLIENT_PROFILE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-gold text-text-white hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLIENT_PROFILE.socials.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-gold text-text-white hover:text-gold transition-colors"
                aria-label="Threads"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={CLIENT_PROFILE.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-gold text-text-white hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={CLIENT_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-gold/20 border border-gold text-gold hover:bg-gold hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="p-4 rounded-full glass-panel-gold border border-gold/40 text-gold hover:bg-gold hover:text-primary transition-all duration-300 flex items-center justify-center"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
            <span className="text-[10px] text-text-muted font-mono mt-4 md:mt-0">
              BACK TO TOP
            </span>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] text-text-muted font-mono gap-4">
          <div>
            © {new Date().getFullYear()} Shaista Fathima | Gro Vision Real Estate LLC. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href={CLIENT_PROFILE.socials.companyWeb} target="_blank" rel="noopener noreferrer" className="hover:text-text-white flex items-center gap-1">
              <span>thegrovision.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <span>RERA Certified Property Advisor</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
