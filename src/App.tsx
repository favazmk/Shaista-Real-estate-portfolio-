import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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

export default function App() {
  const [loading, setLoading] = useState(true);

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
    <div className="bg-primary text-text-white min-h-screen relative font-sans selection:bg-gold selection:text-primary overflow-x-hidden">
      {/* Global Architectural Grid & Ambient Gold Spotlight Backdrops */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-luxury-grid opacity-60" />
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gold/10 blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gold/05 blur-[160px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-gold/08 blur-[180px] pointer-events-none z-0" />

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
