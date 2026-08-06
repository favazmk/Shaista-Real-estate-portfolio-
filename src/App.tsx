import React, { useState, useEffect, useRef } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SequenceHero } from './components/SequenceHero';
import { About } from './components/About';
import { DeveloperPartnersSection } from './components/DeveloperPartnersSection';
import { CommunityGuidesSection } from './components/CommunityGuidesSection';
import { InvestmentInsightsSection } from './components/InvestmentInsightsSection';
import { PersonalBrand } from './components/PersonalBrand';
import { Testimonials } from './components/Testimonials';
import { Achievements } from './components/Achievements';
import { VideoSection } from './components/VideoSection';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingBar } from './components/FloatingBar';
import { PillarsSection } from './components/PillarsSection';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const sequenceHeroRef = useRef<HTMLDivElement>(null);

  // Robust IntersectionObserver: observe the SequenceHero wrapper directly.
  // Navbar is HIDDEN whenever any part of SequenceHero is visible on screen.
  // Navbar is SHOWN only when SequenceHero is completely off-screen.
  useEffect(() => {
    if (loading) return;

    const target = sequenceHeroRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // isIntersecting = true means at least 1px of SequenceHero is visible
        // Navbar visible only when SequenceHero is NOT visible at all
        setIsNavbarVisible(!entry.isIntersecting);
      },
      { threshold: 0 } // fires at 0% visibility boundary
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [loading]);

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
    <div className="bg-primary text-text-white min-h-screen relative font-sans selection:bg-gold selection:text-primary">
      {/* Global Architectural Grid & Ambient Gold Spotlight Backdrops */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-luxury-grid opacity-60" />
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gold/05 blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-gold/08 blur-[180px]" />
      </div>

      {/* Custom Luxury Dual-Ring Cursor */}
      <CustomCursor />

      {/* Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          {/* Top Navbar */}
          <Navbar onBookClick={scrollToContact} isVisible={isNavbarVisible} />

          {/* Main Sections */}
          <main>
            <div ref={sequenceHeroRef}>
              <SequenceHero />
            </div>
            <About />
            <Hero onBookClick={scrollToContact} onExploreClick={scrollToExplore} />
            <PillarsSection />
            <DeveloperPartnersSection onBookClick={scrollToContact} />
            <CommunityGuidesSection onBookClick={scrollToContact} />
            <InvestmentInsightsSection onBookClick={scrollToContact} />
            <PersonalBrand />
            <Testimonials />
            <Achievements />
            <VideoSection />
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
