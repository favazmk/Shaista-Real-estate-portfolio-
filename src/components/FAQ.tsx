import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/portfolioData';
import { ChevronDown, Sparkles, Search, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-28 bg-gradient-to-b from-[#0F0E0C] via-[#161410] to-[#0D0C0A] relative overflow-hidden border-t border-b border-white/10">
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 bg-editorial-gold-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A96A]/08 rounded-full blur-[180px] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C8A96A] font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENCY & CLARITY</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F7F5F2] mb-4">
            Frequently Asked <span className="italic gold-text-gradient">Questions</span>
          </h2>
          <p className="text-[#9C9C9C] text-sm max-w-md mx-auto font-light leading-relaxed">
            Essential insights regarding high-net-worth real estate acquisition, discretion, and portfolio advisory.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9C9C9C]" />
            <input
              type="text"
              placeholder="Search questions (e.g., off-market, golden visa)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-[#0B0B0B] border border-white/10 focus:border-[#C8A96A] text-xs text-[#F7F5F2] placeholder-[#9C9C9C] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-[#F7F5F2] hover:text-[#C8A96A] transition-colors"
                >
                  <span className="font-serif-luxury text-xl font-medium sm:text-2xl">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full border border-white/10 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#C8A96A]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-xs sm:text-sm text-[#9C9C9C] font-light leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
