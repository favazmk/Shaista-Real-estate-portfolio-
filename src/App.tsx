import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { DeveloperPartnersSection } from './components/DeveloperPartnersSection';
import { CommunityGuidesSection } from './components/CommunityGuidesSection';
import { BuyingProcessSection } from './components/BuyingProcessSection';
import { InvestmentInsightsSection } from './components/InvestmentInsightsSection';
import { PersonalBrand } from './components/PersonalBrand';
import { Testimonials } from './components/Testimonials';
import { Achievements } from './components/Achievements';
import { VideoSection } from './components/VideoSection';
import { InstagramGallery } from './components/InstagramGallery';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingBar } from './components/FloatingBar';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExplore = () => {
    const el = document.getElementById('developer-partners');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#0B0B0B] text-[#F7F5F2] min-h-screen relative font-sans selection:bg-[#C8A96A] selection:text-[#0B0B0B] overflow-x-hidden">
      {/* Global Architectural Grid & Ambient Gold Spotlight Backdrops */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-luxury-grid opacity-60" />
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#C8A96A]/10 blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#C8A96A]/05 blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-[#C8A96A]/08 blur-[180px] pointer-events-none z-0" />

      {/* Custom Luxury Dual-Ring Cursor */}
      <CustomCursor />

      {/* Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          {/* Top Navbar */}
          <Navbar onBookClick={scrollToContact} />

          {/* Main Sections */}
          <main>
            <Hero onBookClick={scrollToContact} onExploreClick={scrollToExplore} />
            <About />
            <DeveloperPartnersSection onBookClick={scrollToContact} />
            <CommunityGuidesSection onBookClick={scrollToContact} />
            <BuyingProcessSection onBookClick={scrollToContact} />
            <InvestmentInsightsSection onBookClick={scrollToContact} />
            <PersonalBrand />
            <Testimonials />
            <Achievements />
            <VideoSection />
            <InstagramGallery />
            <FAQ />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating Sticky Conversion Bar */}
          <FloatingBar onBookClick={scrollToContact} />
        </>
      )}
    </div>
  );
}
