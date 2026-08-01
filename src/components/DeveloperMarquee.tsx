import React from 'react';

const DeveloperMarquee: React.FC = () => {
  const logos = [
    { src: 'https://kimi-web-img.moonshot.cn/img/vectorseek.com/263acbc6c1babb47f4a4136dfa858606c5b70913.png', alt: 'Emaar' },
    { src: 'https://kimi-web-img.moonshot.cn/img/www.binayah.com/18fd9d8178b23f7b11ffa9cfbfb8bfcd6badcce1.jpg', alt: 'Nakheel' },
    { src: 'https://kimi-web-img.moonshot.cn/img/www.hbeliteproperties.com/507abb0143884972d2097326d899545fe4f10eaf.png', alt: 'Sobha' },
    { src: 'https://kimi-web-img.moonshot.cn/img/www.binayah.com/9745a2de71575cc15e42c96c1f43274678708201.jpg', alt: 'DAMAC' },
    { src: 'https://kimi-web-img.moonshot.cn/img/pxpzkvfebefdrmjzckhs.supabase.co/4fd5bad2c241a25ba8e2f6803539e2896e0f8972.png', alt: 'Ellington' },
    { src: 'https://kimi-web-img.moonshot.cn/img/centralpark.kestates.ae/723ae9d63c627f4ec623e0cbce1fb92f35a2ce2f.png', alt: 'Meraas' }
  ];

  // Render the group 3 times for a seamless infinite loop
  const renderLogos = () => (
    <>
      {logos.map((logo, index) => (
        <React.Fragment key={index}>
          <div className="logo-wrap">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-[34px] w-auto max-w-[140px] object-contain opacity-45 grayscale brightness-125 transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover:brightness-110 hover:drop-shadow-[0_0_20px_rgba(200,169,106,0.45)] pointer-events-auto"
            />
          </div>
          <span className="dot-sep">●</span>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div className="marquee-section mt-20">
      <div className="tagline">Trusted by the region's finest</div>
      
      <div className="marquee-container">
        <div className="marquee-track">
          {renderLogos()}
          {renderLogos()}
          {renderLogos()}
        </div>
      </div>
      <div className="subtle-line"></div>
    </div>
  );
};

export default DeveloperMarquee;
