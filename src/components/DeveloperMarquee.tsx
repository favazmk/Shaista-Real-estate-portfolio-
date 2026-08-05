import React from 'react';

const DeveloperMarquee: React.FC = () => {
  const logos = [
    { src: '/logos/emaar_logo.webp', alt: 'Emaar' },
    { src: '/logos/nakheel_logo.webp', alt: 'Nakheel' },
    { src: '/logos/sobha_logo.webp', alt: 'Sobha' },
    { src: '/logos/damac_logo.webp', alt: 'DAMAC' },
    { src: '/logos/ellington_logo.webp', alt: 'Ellington' },
    { src: '/logos/meraas_logo.webp', alt: 'Meraas' },
    { src: '/logos/stregis_logo.webp', alt: 'St. Regis' },
    { src: '/logos/ritzcarlton_logo.webp', alt: 'Ritz-Carlton' },
  ];

  // Render Base Monochromatic Logos (for edges)
  const renderBaseLogos = () => (
    <>
      {logos.map((logo, index) => (
        <React.Fragment key={index}>
          <div className="logo-wrap">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-[34px] sm:h-[40px] md:h-[44px] w-auto max-w-[150px] object-contain opacity-40 grayscale brightness-150 transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover:brightness-110 hover:drop-shadow-[0_0_20px_rgba(200,169,106,0.5)] pointer-events-auto"
            />
          </div>
          <span className="dot-sep">●</span>
        </React.Fragment>
      ))}
    </>
  );

  // Render Spotlight Full Real Color Logos (for center reveal)
  const renderSpotlightLogos = () => (
    <>
      {logos.map((logo, index) => (
        <React.Fragment key={index}>
          <div className="logo-wrap">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-[34px] sm:h-[40px] md:h-[46px] w-auto max-w-[150px] object-contain opacity-100 grayscale-0 brightness-110 drop-shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-500 pointer-events-auto"
            />
          </div>
          <span className="dot-sep text-[#D4AF37]">●</span>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div className="marquee-section mt-20">
      <div className="tagline">Trusted by the region's finest developers & luxury hospitality brands</div>
      
      {/* Single Marquee Container */}
      <div className="marquee-container relative">
        
        {/* Base Layer: Monochromatic Grayscale Track */}
        <div className="marquee-track">
          {renderBaseLogos()}
          {renderBaseLogos()}
          {renderBaseLogos()}
        </div>

        {/* Center Spotlight Layer: Pixel-Perfect Overlaid Color Track with CSS Mask */}
        <div 
          className="marquee-track absolute inset-0 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, transparent 28%, black 44%, black 56%, transparent 72%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 28%, black 44%, black 56%, transparent 72%, transparent 100%)'
          }}
        >
          {renderSpotlightLogos()}
          {renderSpotlightLogos()}
          {renderSpotlightLogos()}
        </div>

      </div>

      <div className="subtle-line"></div>
    </div>
  );
};

export default DeveloperMarquee;
