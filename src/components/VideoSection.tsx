import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';

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
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/40 to-[#0B0B0B]" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80" />

      {/* Particle Canvas */}
      <ParticleCanvas variant="dark" particleCount={30} />

      {/* Center Typography & Controls Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C8A96A]/40 glass-panel-gold text-[#C8A96A] text-xs uppercase font-mono tracking-widest mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>CINEMATIC ARCHITECTURAL FILM</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-normal text-[#F7F5F2] leading-tight mb-6"
        >
          Where Architecture <br />
          <span className="italic gold-text-gradient">Meets Emotional Resonance</span>
        </motion.h2>

        <p className="text-[#9C9C9C] text-sm sm:text-base max-w-xl font-light leading-relaxed mb-8">
          Step inside our 4K cinematic property tours produced exclusively for high-net-worth investors across the world.
        </p>

        {/* Video Interactive Control Bar */}
        <div className="flex items-center gap-4 glass-panel p-2 rounded-full border border-white/20">
          <button
            onClick={togglePlay}
            data-cursor="Play/Pause"
            className="p-3 rounded-full bg-[#C8A96A] text-[#0B0B0B] hover:scale-105 transition-transform"
            aria-label="Toggle Video Playback"
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <span className="text-xs font-mono uppercase text-[#F7F5F2] px-2">
            {isPlaying ? 'NOW PLAYING' : 'PAUSED'}
          </span>

          <button
            onClick={toggleMute}
            className="p-2.5 rounded-full text-[#F7F5F2] hover:text-[#C8A96A] transition-colors"
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </section>
  );
};
