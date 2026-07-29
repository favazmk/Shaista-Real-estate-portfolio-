import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CLIENT_PROFILE } from '../data/portfolioData';
import { MessageSquare, PhoneCall, Calendar, Sparkles, X } from 'lucide-react';

interface FloatingBarProps {
  onBookClick: () => void;
}

export const FloatingBar: React.FC<FloatingBarProps> = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:right-8 z-[90]">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* Floating Message Icon FAB Button */
          <motion.div
            key="fab-button"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
            className="relative"
          >
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open Advisory Chat"
              className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0B0B0B] border-2 border-[#C8A96A] shadow-[0_10px_25px_rgba(0,0,0,0.8)] hover:shadow-[0_0_25px_rgba(200,169,106,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              {/* WhatsApp / Message Icon Box */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#C8A96A] to-[#E5C378] text-[#0B0B0B]">
                <MessageSquare className="w-5 h-5 fill-[#0B0B0B]" />
              </div>

              {/* Subtle Green Dot Pulse Indicator */}
              <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#0B0B0B]"></span>
              </span>
            </button>
          </motion.div>
        ) : (
          /* Expanded Pulsing WhatsApp Action Bar */
          <motion.div
            key="expanded-bar"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-[calc(100vw-3rem)] sm:w-auto max-w-xl p-3.5 rounded-2xl glass-panel-gold border border-[#C8A96A]/60 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs font-mono"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#0B0B0B] border border-[#C8A96A] text-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#0B0B0B] transition-colors flex items-center justify-center shadow-lg z-10"
              aria-label="Close Floating Bar"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Profile Info Header */}
            <div className="flex items-center gap-2.5 pl-1.5 pr-2">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-[#C8A96A]/20 border border-[#C8A96A] flex items-center justify-center text-[#C8A96A] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                {/* Live Green Pulsing Indicator Dot */}
                <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-[#0B0B0B]"></span>
                </span>
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#F7F5F2] tracking-wide flex items-center gap-1.5">
                  <span>Shaista Fathima</span>
                </div>
                <div className="text-[9px] text-[#9C9C9C] font-mono flex items-center gap-1">
                  <span className="text-emerald-400 font-semibold">Online</span>
                  <span>•</span>
                  <span className="text-[#C8A96A]">Available Now</span>
                </div>
              </div>
            </div>

            {/* Actions Group */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end pt-1 sm:pt-0 border-t sm:border-t-0 border-white/10">
              {/* WhatsApp Button with Pulse Animation */}
              <motion.a
                href={CLIENT_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  scale: [1, 1.03, 1],
                  boxShadow: [
                    '0 0 0px rgba(200, 169, 106, 0.2)',
                    '0 0 20px rgba(200, 169, 106, 0.6)',
                    '0 0 0px rgba(200, 169, 106, 0.2)',
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#C8A96A] via-[#E5C378] to-[#C8A96A] text-[#0B0B0B] font-bold text-[11px] uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-900 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-950"></span>
                </span>
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Direct</span>
              </motion.a>

              <a
                href={`tel:${CLIENT_PROFILE.primaryWhatsapp.replace(/\s+/g, '')}`}
                className="py-2.5 px-3 rounded-xl bg-[#121212] border border-white/20 hover:border-[#C8A96A] text-[#F7F5F2] hover:text-[#C8A96A] transition-all flex items-center justify-center"
                title="Call Direct"
              >
                <PhoneCall className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  onBookClick();
                  setIsOpen(false);
                }}
                className="py-2.5 px-3.5 rounded-xl bg-[#121212] border border-[#C8A96A]/40 text-[#C8A96A] hover:bg-[#C8A96A] hover:text-[#0B0B0B] transition-all font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Book Call</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


