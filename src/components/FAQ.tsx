import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/portfolioData';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { staggerContainer, fadeUpBlur, staggerViewport } from '../utils/animations';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS;

  return (
    <section className="py-28 bg-gradient-to-b from-[#0F0E0C] via-[#161410] to-[#0D0C0A] relative overflow-hidden border-t border-b border-white/10">
      {/* Background Lighting & Grid */}
      <div className="absolute inset-0 bg-editorial-gold-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/08 rounded-full blur-[180px] pointer-events-none" />
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={staggerViewport}
        className="max-w-5xl mx-auto px-6 md:px-12 relative z-10"
      >
        
        {/* Section Header */}
        <motion.div variants={fadeUpBlur} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENCY & CLARITY</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal text-text-white mb-4">
            Frequently Asked <span className="italic gold-text-gradient">Questions</span>
          </h2>
          <p className="text-text-muted text-sm max-w-md mx-auto font-light leading-relaxed">
            Essential insights regarding high-net-worth real estate acquisition, discretion, and portfolio advisory.
          </p>

        </motion.div>

        {/* Accordion List */}
        <motion.div variants={staggerContainer} className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                variants={fadeUpBlur}
                className="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-text-white hover:text-gold transition-colors"
                >
                  <span className="font-serif-luxury text-xl font-medium sm:text-2xl">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full border border-white/10 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : ''}`}>
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
                      <div className="px-6 pb-6 text-xs sm:text-sm text-text-muted font-light leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </motion.div>
    </section>
  );
};
