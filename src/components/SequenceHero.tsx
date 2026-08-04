import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  { 
    label: "DUBAI REAL ESTATE", 
    heading: "Every Great\nSkyline\nStarts With Vision", 
    align: "left" 
  },
  { 
    label: "FROM BLUEPRINT TO REALITY", 
    heading: "Watch\nTomorrow's\nLandmarks Rise", 
    align: "right" 
  },
  { 
    label: "INVEST WITH CONFIDENCE", 
    heading: "The Right\nAddress\nChanges Everything", 
    align: "left" 
  },
  { 
    label: "LUXURY LIVING", 
    heading: "Where\nArchitecture\nMeets Opportunity", 
    align: "right" 
  },
  { 
    label: "YOUR NEXT INVESTMENT", 
    heading: "Find Your Place\nIn Dubai's\nFuture Skyline", 
    align: "left-bottom" 
  }
];

export const SequenceHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressIndicatorRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const frameCount = 240;
    const currentFrame = (index: number) =>
      `/hero-sequence-new/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`;

    const images: HTMLImageElement[] = [];
    const seq = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      const img = images[Math.round(seq.frame)];
      if (img && img.complete && img.naturalWidth > 0) {
        if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
        }
        
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0);
      }
    };

    images[0].onload = render;
    if (images[0].complete) {
        render();
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smooth scrub
      }
    });

    // 1. Sequence Scrubbing
    tl.to(seq, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      duration: 1,
      onUpdate: render,
    }, 0);

    // 2. Scroll Progress Indicator (Right Side)
    if (progressIndicatorRef.current) {
      tl.fromTo(progressIndicatorRef.current, 
        { scaleY: 0 },
        { scaleY: 1, ease: 'none', duration: 1, transformOrigin: 'top center' },
        0
      );
    }

    // 3. Text Scenes Motion
    scenes.forEach((_, i) => {
      const sceneStart = i * 0.2;
      const sceneEnd = (i + 1) * 0.2;
      const transitionDuration = 0.04; // 4% of total scroll for fade in/out
      
      const el = textRefs.current[i];
      if (el) {
        // Initial state
        gsap.set(el, { opacity: 0, y: 35, filter: 'blur(8px)', scale: 1 });
        
        // Animate IN (Fade in, translate up, blur to sharp)
        tl.to(el, {
          opacity: 0.9,
          y: 0,
          filter: 'blur(0px)',
          duration: transitionDuration,
          ease: 'power2.out'
        }, sceneStart);
        
        if (i < scenes.length - 1) {
          // Animate OUT (all scenes except the last one)
          tl.to(el, {
            opacity: 0,
            y: -25,
            filter: 'blur(5px)',
            duration: transitionDuration,
            ease: 'power2.in'
          }, sceneEnd - transitionDuration);
        } else {
          // Scene 5 Final Hold
          // Increase opacity to 1, scale up slightly to 103% over the last 10% of scroll
          tl.to(el, {
            opacity: 1,
            scale: 1.03,
            duration: 0.1, 
            ease: 'power1.inOut'
          }, 0.9);
        }
      }
    });

    // 4. End Transition
    // Fade overlay slightly near the end of the scroll to seamless transition to next section
    if (overlayRef.current) {
      tl.to(overlayRef.current, {
        opacity: 0.2, // Fade from 0.45 down to 0.2
        ease: 'power2.inOut',
        duration: 0.1
      }, 0.9);
    }

    const handleResize = () => {
      render();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[500vh] bg-black z-10">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        
        {/* Cinematic Canvas Sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Subtle Dark Overlay (35-45% opacity) */}
        <div ref={overlayRef} className="absolute inset-0 bg-black/45 z-10 pointer-events-none transition-opacity duration-1000" />
        
        {/* Texts overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {scenes.map((scene, i) => {
            const isRight = scene.align === 'right';
            const isBottom = scene.align === 'left-bottom';
            
            return (
              <div 
                key={i} 
                ref={el => textRefs.current[i] = el}
                className={`absolute w-full max-w-[520px] px-6 md:px-0 ${
                  isRight 
                    ? 'right-[5%] md:right-[10%] text-right top-1/2 -translate-y-1/2' 
                    : isBottom
                      ? 'left-[5%] md:left-[10%] top-[60%] -translate-y-1/2'
                      : 'left-[5%] md:left-[10%] top-1/2 -translate-y-1/2'
                }`}
                style={{ textShadow: '0 8px 32px rgba(0,0,0,0.35)' }}
              >
                {/* Small Label */}
                <p className="uppercase tracking-[0.2em] text-[16px] md:text-[20px] font-medium mb-4 text-white/75">
                  {scene.label}
                </p>
                
                {/* Main Heading */}
                <h1 className="text-[3rem] md:text-[5rem] lg:text-[80px] font-serif-luxury font-bold leading-[1.05] text-white">
                  {scene.heading.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}<br />
                    </React.Fragment>
                  ))}
                </h1>
              </div>
            );
          })}
        </div>

        {/* Minimal Progress Indicator (Right Side) */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 h-[25vh] w-[2px] bg-white/20 z-20 hidden md:block rounded-full overflow-hidden pointer-events-none">
          <div ref={progressIndicatorRef} className="w-full h-full bg-white origin-top" />
        </div>

      </div>
    </section>
  );
};
