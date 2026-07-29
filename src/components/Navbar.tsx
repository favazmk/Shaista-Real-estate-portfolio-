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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#0B0B0B]/85 backdrop-blur-xl border-b border-[#262626]/60 shadow-2xl shadow-black/80'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Monogram & Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-[#C8A96A]/40 flex items-center justify-center glass-panel-gold group-hover:border-[#C8A96A] transition-colors duration-300">
              <span className="font-cinzel text-sm text-[#C8A96A] font-bold">SF</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-lg tracking-wider font-semibold text-[#F7F5F2] group-hover:text-[#C8A96A] transition-colors duration-300">
                SHAISTA FATHIMA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#9C9C9C]">
                The Gro Vision
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs uppercase tracking-[0.16em] font-medium text-[#9C9C9C]">
            {primaryNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#C8A96A] transition-colors duration-200 relative py-1 group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C8A96A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* VIP Consultation Magnetic CTA */}
            <button
              onClick={onBookClick}
              data-cursor="VIP Book"
              className="hidden sm:flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full text-xs font-button uppercase tracking-widest font-semibold text-[#0B0B0B] bg-gradient-to-r from-[#C8A96A] to-[#E5C378] hover:shadow-[0_0_25px_rgba(200,169,106,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>VIP Consult</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F7F5F2] hover:text-[#C8A96A] transition-colors shrink-0"
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
            className="fixed inset-x-0 top-[72px] z-40 bg-[#0B0B0B]/95 backdrop-blur-2xl border-b border-[#262626] p-6 max-h-[calc(100vh-80px)] overflow-y-auto lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {allNavLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs uppercase tracking-widest text-[#F7F5F2] hover:text-[#C8A96A] py-3 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[#C8A96A] text-[10px]">→</span>
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="mt-4 w-full py-3.5 rounded-full text-xs font-button uppercase tracking-widest font-bold text-[#0B0B0B] bg-gradient-to-r from-[#C8A96A] to-[#E5C378] shadow-lg flex items-center justify-center gap-2"
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
