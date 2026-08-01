import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall, Sparkles } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryNavLinks = [
    { label: 'About', href: '#about' },
    { label: 'Developers', href: '#developer-partners' },
    { label: 'Communities', href: '#community-guides' },
    { label: 'NRI Insights', href: '#investment-insights' },
    { label: 'Media', href: '#brand' },
  ];

  const allNavLinks = [
    { label: 'About Shaista', href: '#about' },
    { label: 'Developer Partners', href: '#developer-partners' },
    { label: 'Community Guides', href: '#community-guides' },
    { label: 'Buying Roadmap', href: '#buying-process' },
    { label: 'NRI Insights & Tax', href: '#investment-insights' },
    { label: 'Personal Brand & Media', href: '#brand' },
    { label: 'Client Reviews', href: '#testimonials' },
    { label: 'Contact Advisory', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full ${
          scrolled
            ? 'top-4 max-w-5xl rounded-full py-3 bg-white/70 backdrop-blur-xl border border-black/10 shadow-lg shadow-black/5 px-6'
            : 'top-0 max-w-7xl py-6 bg-transparent px-6 md:px-12'
        }`}
      >
        <div className="w-full mx-auto flex items-center justify-between">
          {/* Brand Monogram & Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 border border-[#937332]/40 group-hover:border-[#937332] ${scrolled ? 'bg-white/50' : ''}`}>
              <span className="font-cinzel text-sm font-bold text-[#937332]">SF</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-lg tracking-wider font-semibold transition-colors duration-300 text-[#16150F] group-hover:text-[#937332]">
                SHAISTA FATHIMA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#55524D]">
                The Gro Vision
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs uppercase tracking-[0.16em] font-medium text-[#55524D]">
            {primaryNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-200 relative py-1 group whitespace-nowrap hover:text-[#937332]"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-[#937332]" />
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* VIP Consultation Magnetic CTA */}
            <button
              onClick={onBookClick}
              data-cursor="VIP Book"
              className={`hidden sm:flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full text-xs font-button uppercase tracking-widest font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shrink-0 ${
                scrolled 
                  ? 'text-primary bg-gradient-to-r from-gold to-gold-light hover:shadow-[0_0_25px_rgba(200,169,106,0.4)]'
                  : 'text-[#F4F1EA] bg-[#16150F] hover:bg-[#937332] border border-[#16150F] hover:border-[#937332]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>VIP Consult</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 transition-colors shrink-0 text-[#16150F] hover:text-[#937332]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-primary/95 backdrop-blur-2xl border-b border-[#262626] p-6 max-h-[calc(100vh-80px)] overflow-y-auto lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {allNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-widest text-text-white hover:text-gold py-3 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-gold text-[10px]">→</span>
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="mt-4 w-full py-3.5 rounded-full text-xs font-button uppercase tracking-widest font-bold text-primary bg-gradient-to-r from-gold to-gold-light shadow-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book VIP Consultation</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
