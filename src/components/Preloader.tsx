import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-primary text-text-white p-8 md:p-12 select-none"
      >
        {/* Top Monogram */}
        <div className="w-full flex justify-between items-center text-xs tracking-[0.3em] uppercase text-text-muted">
          <span>THE GRO VISION</span>
          <span>ESTATE ADVISORY</span>
        </div>

        {/* Center Logo / Monogram */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-20 h-20 rounded-full border border-gold/40 flex items-center justify-center mb-6 glass-panel-gold relative overflow-hidden"
          >
            <span className="font-cinzel text-2xl text-gold font-bold tracking-widest">SF</span>
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif-luxury text-3xl md:text-5xl tracking-wide gold-text-gradient mb-2"
          >
            SHAISTA FATHIMA
          </motion.h1>

          <p className="font-sans text-xs md:text-sm tracking-[0.25em] text-text-muted uppercase">
            Extraordinary Living & Investment Advisory
          </p>
        </div>

        {/* Bottom Progress Bar & Percentage */}
        <div className="w-full max-w-md flex flex-col items-center">
          <div className="w-full flex justify-between items-center text-xs font-mono text-text-muted mb-2">
            <span>CURATING LUXURY</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-[2px] bg-[#1A1A1A] rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-gold-light"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
