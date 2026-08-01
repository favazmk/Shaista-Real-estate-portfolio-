import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { staggerContainer, fadeUpBlur, staggerViewport } from '../utils/animations';

export const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <video
        ref={videoRef}
        src="https://assets.mixkit.co/videos/preview/mixkit-modern-city-buildings-and-skyscrapers-41588-large.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover filter brightness-75 contrast-110"
      />

      {/* Dark Luxury Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-black/40 to-primary" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80" />

      {/* Particle Canvas */}
      <ParticleCanvas variant="dark" particleCount={30} />

      {/* Center Typography & Controls Overlay */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={staggerViewport}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
      >
        <motion.div
          variants={fadeUpBlur}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 glass-panel-gold text-gold text-xs uppercase font-mono tracking-widest mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>CINEMATIC ARCHITECTURAL FILM</span>
        </motion.div>

        <motion.h2
          variants={fadeUpBlur}
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-normal text-text-white leading-tight mb-6"
        >
          Where Architecture <br />
          <span className="italic gold-text-gradient">Meets Emotional Resonance</span>
        </motion.h2>

        <motion.p variants={fadeUpBlur} className="text-text-muted text-sm sm:text-base max-w-xl font-light leading-relaxed mb-8">
          Step inside our 4K cinematic property tours produced exclusively for high-net-worth investors across the world.
        </motion.p>

        {/* Video Interactive Control Bar */}
        <motion.div variants={fadeUpBlur} className="flex items-center gap-4 glass-panel p-2 rounded-full border border-white/20">
          <button
            onClick={togglePlay}
            data-cursor="Play/Pause"
            className="p-3 rounded-full bg-gold text-primary hover:scale-105 transition-transform"
            aria-label="Toggle Video Playback"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <span className="text-xs font-mono uppercase text-text-white px-2">
            {isPlaying ? 'NOW PLAYING' : 'PAUSED'}
          </span>

          <button
            onClick={toggleMute}
            className="p-2.5 rounded-full text-text-white hover:text-gold transition-colors"
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
