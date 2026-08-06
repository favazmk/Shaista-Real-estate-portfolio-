import React, { useEffect, useRef, useCallback } from 'react';

// Original Cinematic Hero Scenes & Typography
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
    align: "center" 
  }
];

const FRAME_COUNT = 260;

// Custom smooth easing curve matching cubic-bezier(.22, 1, .36, 1)
const easeOutCustom = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

export const SequenceHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressIndicatorRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const bottomBlendRef = useRef<HTMLDivElement>(null);
  
  const lastRenderedFrame = useRef<number>(-1);
  const currentFrameFloat = useRef<number>(0);
  const targetFrameFloat = useRef<number>(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const rafIdRef = useRef<number>(0);

  // High performance center-aligned aspect-ratio cover renderer (crops top and bottom evenly)
  const drawImageCover = useCallback((ctx: CanvasRenderingContext2D, img: HTMLImageElement, canvasWidth: number, canvasHeight: number) => {
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvasWidth / canvasHeight;
    let renderW = canvasWidth;
    let renderH = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderH = canvasWidth / imgRatio;
      offsetY = (canvasHeight - renderH) / 2; // Centered vertically (equal top & bottom crop)
    } else {
      renderW = canvasHeight * imgRatio;
      offsetX = (canvasWidth - renderW) / 2; // Centered horizontally (equal left & right crop)
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  }, []);

  // Memoized frame renderer with nearest-neighbor loaded frame fallback
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { alpha: false });
    if (!canvas || !context) return;

    let imgToDraw: HTMLImageElement | null = null;
    if (imagesRef.current[index]?.complete && imagesRef.current[index].naturalWidth > 0) {
      imgToDraw = imagesRef.current[index];
    } else {
      // Search backward
      for (let i = index - 1; i >= 0; i--) {
        if (imagesRef.current[i]?.complete && imagesRef.current[i].naturalWidth > 0) {
          imgToDraw = imagesRef.current[i];
          break;
        }
      }
      // Search forward if none found backward
      if (!imgToDraw) {
        for (let i = index + 1; i < FRAME_COUNT; i++) {
          if (imagesRef.current[i]?.complete && imagesRef.current[i].naturalWidth > 0) {
            imgToDraw = imagesRef.current[i];
            break;
          }
        }
      }
    }

    if (!imgToDraw) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = Math.floor(window.innerWidth * dpr);
    const displayHeight = Math.floor(window.innerHeight * dpr);

    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
      canvas.width = displayWidth;
      canvas.height = displayHeight;
    }

    drawImageCover(context, imgToDraw, displayWidth, displayHeight);
  }, [drawImageCover]);

  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Preload all 260 sequence frames
    const images: HTMLImageElement[] = [];
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/latest-hero-sequences/ezgif-frame-${(i + 1).toString().padStart(3, '0')}.webp`;
      images.push(img);
    }
    imagesRef.current = images;

    // Initial render
    images[0].onload = () => {
      if (lastRenderedFrame.current === -1) {
        lastRenderedFrame.current = 0;
        renderFrame(0);
      }
    };
    if (images[0].complete) {
      lastRenderedFrame.current = 0;
      renderFrame(0);
    }

    // Continuous Overlapping Text Transition Update
    const updateScenes = (progress: number) => {
      scenes.forEach((_, i) => {
        const el = textRefs.current[i];
        if (!el) return;

        const enterStart = i * 0.20;
        const enterEnd = i * 0.20 + 0.07;
        const exitStart = (i + 1) * 0.20 - 0.03;
        const exitEnd = (i + 1) * 0.20 + 0.06;

        if (progress < enterStart) {
          el.style.opacity = '0';
          el.style.transform = prefersReducedMotion ? 'translateY(0px)' : 'translateY(35px) scale(0.93)';
          el.style.filter = prefersReducedMotion ? 'none' : 'blur(10px)';
        } else if (progress >= enterStart && progress < enterEnd) {
          const t = easeOutCustom((progress - enterStart) / (enterEnd - enterStart));
          const y = prefersReducedMotion ? 0 : 35 * (1 - t);
          const scale = prefersReducedMotion ? 1 : 0.93 + 0.12 * t;
          const opacity = t;
          const blur = prefersReducedMotion ? 0 : 10 * (1 - t);
          el.style.opacity = String(opacity);
          el.style.transform = `translateY(${y.toFixed(2)}px) scale(${scale.toFixed(4)})`;
          el.style.filter = prefersReducedMotion ? 'none' : `blur(${blur.toFixed(2)}px)`;
        } else if (progress >= enterEnd && progress < exitStart) {
          const t = (progress - enterEnd) / (exitStart - enterEnd);
          const y = prefersReducedMotion ? 0 : -25 * t;
          const scale = prefersReducedMotion ? 1 : 1.05 + 0.10 * t;
          el.style.opacity = '1';
          el.style.transform = `translateY(${y.toFixed(2)}px) scale(${scale.toFixed(4)})`;
          el.style.filter = 'blur(0px)';
        } else if (progress >= exitStart && progress <= exitEnd) {
          const t = (progress - exitStart) / (exitEnd - exitStart);
          const y = prefersReducedMotion ? 0 : -25 - 40 * t;
          const scale = prefersReducedMotion ? 1 : 1.15 + 0.10 * t;
          const opacity = 1 - t;
          const blur = prefersReducedMotion ? 0 : 6 * t;
          el.style.opacity = String(opacity);
          el.style.transform = `translateY(${y.toFixed(2)}px) scale(${scale.toFixed(4)})`;
          el.style.filter = prefersReducedMotion ? 'none' : `blur(${blur.toFixed(2)}px)`;
        } else {
          el.style.opacity = '0';
          el.style.transform = prefersReducedMotion ? 'translateY(0px)' : 'translateY(-65px) scale(1.25)';
          el.style.filter = prefersReducedMotion ? 'none' : 'blur(6px)';
        }
      });

      if (overlayRef.current) {
        overlayRef.current.style.opacity = progress >= 0.9
          ? String(0.45 - 0.25 * ((progress - 0.9) / 0.1))
          : '0.45';
      }

      // Smooth Gold Progress Bar Scale Update
      if (progressIndicatorRef.current) {
        progressIndicatorRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    // Continuous 60-120fps Animation Loop
    const loop = () => {
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        // Scrub sequence animation across the first 400vh, leaving 100vh for full sequence reveal and 100vh for About stacking
        const scrubDistance = viewportHeight * 4;
        
        let progress = scrubDistance > 0 ? -rect.top / scrubDistance : 0;
        progress = Math.max(0, Math.min(1, progress));

        targetFrameFloat.current = progress * (FRAME_COUNT - 1);

        // Smooth Lerp interpolation
        const diff = targetFrameFloat.current - currentFrameFloat.current;
        if (Math.abs(diff) < 0.001) {
          currentFrameFloat.current = targetFrameFloat.current;
        } else {
          currentFrameFloat.current += diff * 0.16;
        }

        const renderIndex = Math.max(0, Math.min(FRAME_COUNT - 1, Math.round(currentFrameFloat.current)));

        if (renderIndex !== lastRenderedFrame.current) {
          lastRenderedFrame.current = renderIndex;
          renderFrame(renderIndex);
        }

        updateScenes(progress);

        // Keep bottom gradient blend minimal (opacity 0.1) during scenes 1-4.
        // Ramp up smoothly to full opacity at the end of the sequence (progress > 0.75) for stacking.
        if (bottomBlendRef.current) {
          const blendOpacity = progress > 0.75 
            ? 0.1 + 0.9 * Math.min(1, (progress - 0.75) / 0.2) 
            : 0.1;
          bottomBlendRef.current.style.opacity = String(blendOpacity);
        }
      }

      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafIdRef.current);
    };
  }, [renderFrame]);

  return (
    <section ref={containerRef} className="relative w-full h-[600vh] bg-black z-0 overflow-hidden">
      <div ref={stickyRef} className="sticky top-0 w-full h-screen h-[100dvh] overflow-hidden z-0">
        
        {/* Cinematic Canvas Sequence */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        
        {/* Subtle Dark Overlay */}
        <div ref={overlayRef} className="absolute inset-0 bg-black/45 z-10 pointer-events-none" />
        
        {/* Top Vignette Gradient for Navbar Legibility */}
        <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-15 pointer-events-none" />

        {/* Bottom Light Fade Gradient matching the next section (#FAF8F5) — minimal during sequence, expands at end */}
        <div 
          ref={bottomBlendRef}
          className="absolute bottom-0 inset-x-0 h-28 sm:h-40 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-15 pointer-events-none transition-opacity duration-150" 
        />

        {/* Hero Scenes Overlay — Mobile-Optimized Positioning (Below Navbar at top-[115px]) & Unchanged Desktop Layout */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {scenes.map((scene, i) => {
            const isLeft = scene.align === 'left';
            const isRight = scene.align === 'right';

            return (
              <div 
                key={i} 
                ref={el => textRefs.current[i] = el}
                className={`absolute inset-x-0 sm:inset-x-auto top-[115px] sm:top-[14%] md:top-[18%] px-5 sm:px-0 text-center ${
                  isLeft 
                    ? 'sm:left-[8%] md:left-[10%] sm:text-left max-w-full sm:max-w-[520px]' 
                    : isRight
                      ? 'sm:right-[8%] md:right-[10%] sm:text-right max-w-full sm:max-w-[520px]'
                      : 'sm:left-1/2 sm:-translate-x-1/2 sm:text-center max-w-full sm:max-w-[850px]'
                }`}
                style={{ 
                  opacity: 0,
                  transform: 'translateY(30px)',
                  filter: 'blur(10px)',
                  willChange: 'opacity, transform, filter'
                }}
              >
                <p className="uppercase tracking-[0.22em] text-[10px] sm:text-[14px] md:text-[18px] font-semibold mb-2 sm:mb-3 text-white/85 drop-shadow-md">
                  {scene.label}
                </p>
                <h1 
                  className="text-[1.65rem] sm:text-[2.25rem] md:text-[3.5rem] lg:text-[60px] font-serif-luxury font-bold leading-[1.2] sm:leading-[1.12] md:leading-[1.08] text-white"
                  style={{ textShadow: '0 6px 28px rgba(0,0,0,0.85)' }}
                >
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

        {/* Clean, Simple & Noticeable Horizontal Gold Progress Bar */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-[200px] sm:w-[300px] md:w-[380px] h-[3px] bg-white/20 rounded-full overflow-hidden z-20 pointer-events-none select-none shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          <div 
            ref={progressIndicatorRef} 
            className="w-full h-full bg-gradient-to-r from-[#937332] via-[#D4AF37] to-[#F4E8C1] origin-left transition-transform duration-75 ease-out shadow-[0_0_12px_rgba(212,175,55,0.7)]" 
            style={{ transform: 'scaleX(0)' }} 
          />
        </div>

      </div>
    </section>
  );
};
