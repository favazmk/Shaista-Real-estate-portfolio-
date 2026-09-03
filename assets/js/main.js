/* ==========================================================================
   Shaista Fathima — Luxury Real Estate Portfolio
   Vanilla JavaScript runtime (no frameworks, no modules, file:// safe)
   ========================================================================== */
(function () {
  'use strict';

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var clamp = function (v, a, b) { return v < a ? a : (v > b ? b : v); };

  var PREFERS_REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ======================================================================
     1. SCROLL REVEAL ENGINE  (replaces Framer Motion variants + whileInView)
     ====================================================================== */

  // Collect the "variant children" of a container: descend through plain
  // wrappers, stop at the first animated element on each branch. This mirrors
  // how Framer Motion propagates variants through non-motion elements.
  function collectVariantChildren(el, out) {
    var kids = el.children;
    for (var i = 0; i < kids.length; i++) {
      var c = kids[i];
      if (c.hasAttribute('data-rv')) out.push(c);
      else collectVariantChildren(c, out);
    }
    return out;
  }

  function playReveal(el, delay) {
    el.style.setProperty('--rv-delay', delay + 's');
    // Force a style flush so the transition actually runs from the initial state.
    void el.offsetWidth;
    el.classList.add('rv-in');
    // Once the reveal is over, strip the reveal machinery entirely so the
    // element falls back to its own Tailwind transitions (needed for hover).
    window.setTimeout(function () {
      el.removeAttribute('data-rv');
      el.classList.remove('rv-in');
      el.style.removeProperty('--rv-delay');
    }, (delay + 1.7) * 1000);
  }

  function staggerFrom(container, base) {
    var step = parseFloat(container.getAttribute('data-stagger') || '0');
    var lead = parseFloat(container.getAttribute('data-delay-children') || '0');
    var kids = collectVariantChildren(container, []);
    kids.forEach(function (kid, i) {
      var d = base + lead + i * step;
      playReveal(kid, d);
      if (kid.hasAttribute('data-stagger')) staggerFrom(kid, d);
    });
  }

  function initReveals() {
    $$('[data-rvroot]').forEach(function (root) {
      var amount = parseFloat(root.getAttribute('data-rvamount') || '0.1');
      var margin = root.getAttribute('data-rvmargin') || '0px 0px -10% 0px';
      var ownDelay = parseFloat(root.getAttribute('data-rvdelay') || '0');

      var fire = function () {
        playReveal(root, ownDelay);
        if (root.hasAttribute('data-stagger')) staggerFrom(root, ownDelay);
      };

      if (!('IntersectionObserver' in window)) { fire(); return; }

      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            io.disconnect();
            fire();
          }
        });
      }, { threshold: clamp(amount, 0, 1), rootMargin: margin });

      io.observe(root);
    });
  }

  /* ======================================================================
     2. SPRING HELPER (matches Framer Motion's spring physics)
     ====================================================================== */
  function Spring(stiffness, damping, mass, initial) {
    this.k = stiffness;
    this.c = damping;
    this.m = mass;
    this.value = initial || 0;
    this.target = initial || 0;
    this.velocity = 0;
  }
  Spring.prototype.step = function (dt) {
    // Semi-implicit Euler, sub-stepped for stability at high stiffness.
    var steps = Math.max(1, Math.min(8, Math.ceil(dt / 0.004)));
    var h = dt / steps;
    for (var i = 0; i < steps; i++) {
      var force = -this.k * (this.value - this.target) - this.c * this.velocity;
      this.velocity += (force / this.m) * h;
      this.value += this.velocity * h;
    }
    return this.value;
  };

  /* ======================================================================
     3. PARTICLE CANVAS  (ParticleCanvas.tsx)
     ====================================================================== */
  function initParticleCanvas(canvas) {
    var ctx = canvas.getContext('2d');
    if (!ctx) return;

    var variant = canvas.getAttribute('data-particles') || 'dark';
    var particleCount = parseInt(canvas.getAttribute('data-count') || '45', 10);
    var isLight = variant === 'light';
    var dotColor = isLight ? 'rgba(164, 131, 68, ' : 'rgba(200, 169, 106, ';

    var parent = canvas.parentElement;
    var width = canvas.width = (parent && parent.clientWidth) || window.innerWidth;
    var height = canvas.height = (parent && parent.clientHeight) || window.innerHeight;

    function handleResize() {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    }
    window.addEventListener('resize', handleResize);

    function Particle() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2.2 + 0.6;
      this.speedX = (Math.random() - 0.5) * 0.45;
      this.speedY = (Math.random() - 0.5) * 0.45;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.pulseSpeed = (Math.random() - 0.5) * 0.01;
    }
    Particle.prototype.update = function () {
      this.x += this.speedX;
      this.y += this.speedY;
      this.opacity += this.pulseSpeed;
      if (this.opacity > 0.75 || this.opacity < 0.15) this.pulseSpeed = -this.pulseSpeed;
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    };
    Particle.prototype.draw = function () {
      ctx.fillStyle = dotColor + this.opacity + ')';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    };

    var particles = [];
    for (var i = 0; i < particleCount; i++) particles.push(new Particle());

    (function animate() {
      ctx.clearRect(0, 0, width, height);

      var gradient = ctx.createRadialGradient(
        width * 0.6, height * 0.4, 80,
        width * 0.6, height * 0.4, Math.max(width, height) * 0.6
      );
      if (isLight) {
        gradient.addColorStop(0, 'rgba(200, 169, 106, 0.08)');
        gradient.addColorStop(1, 'rgba(250, 248, 245, 0)');
      } else {
        gradient.addColorStop(0, 'rgba(200, 169, 106, 0.07)');
        gradient.addColorStop(1, 'rgba(11, 11, 11, 0)');
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      for (var j = 0; j < particles.length; j++) { particles[j].update(); particles[j].draw(); }
      requestAnimationFrame(animate);
    })();
  }

  /* ======================================================================
     4. CUSTOM CURSOR  (CustomCursor.tsx)
     ====================================================================== */
  function initCustomCursor() {
    var ring = $('#cursor-ring');
    var dot = $('#cursor-dot');
    var label = $('#cursor-text');
    if (!ring || !dot) return;

    document.body.classList.add('custom-cursor-active');

    var mouse = { x: -100, y: -100 };
    var isHovered = false;
    var isPointer = false;

    window.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      var target = e.target;
      if (!target || !target.closest) return;

      var interactive = target.closest('a, button, input, select, textarea, [role="button"], .interactive-cursor');
      isPointer = !!interactive;

      var holder = target.closest('[data-cursor]');
      var customText = holder ? holder.getAttribute('data-cursor') : null;

      if (customText) {
        label.textContent = customText;
        label.style.display = '';
        isHovered = true;
      } else if (interactive) {
        label.textContent = '';
        label.style.display = 'none';
        isHovered = true;
      } else {
        label.textContent = '';
        label.style.display = 'none';
        isHovered = false;
      }
    });

    // Outer ring: spring { damping: 28, stiffness: 350, mass: 0.2 }
    var rx = new Spring(350, 28, 0.2, -100);
    var ry = new Spring(350, 28, 0.2, -100);
    var rSize = new Spring(350, 28, 0.2, 32);
    var rHover = new Spring(350, 28, 0.2, 0);

    // Inner dot: spring { damping: 40, stiffness: 600, mass: 0.1 }
    var dx = new Spring(600, 40, 0.1, -100);
    var dy = new Spring(600, 40, 0.1, -100);
    var dScale = new Spring(600, 40, 0.1, 1);

    var last = 0;
    (function loop(now) {
      var dt = last ? Math.min((now - last) / 1000, 0.064) : 0.016;
      last = now;

      var offset = isHovered ? 28 : 16;
      rx.target = mouse.x - offset;
      ry.target = mouse.y - offset;
      rSize.target = isHovered ? 56 : 32;
      rHover.target = isHovered ? 1 : 0;

      dx.target = mouse.x - 4;
      dy.target = mouse.y - 4;
      dScale.target = isPointer ? 0.5 : 1;

      rx.step(dt); ry.step(dt); rSize.step(dt); rHover.step(dt);
      dx.step(dt); dy.step(dt); dScale.step(dt);

      var t = clamp(rHover.value, 0, 1);
      ring.style.transform = 'translate(' + rx.value.toFixed(2) + 'px,' + ry.value.toFixed(2) + 'px)';
      ring.style.width = rSize.value.toFixed(2) + 'px';
      ring.style.height = rSize.value.toFixed(2) + 'px';
      ring.style.backgroundColor = 'rgba(147, 115, 50, ' + (0.05 + 0.10 * t).toFixed(3) + ')';
      ring.style.borderColor = 'rgba(147, 115, 50, ' + (0.6 + 0.3 * t).toFixed(3) + ')';

      dot.style.transform = 'translate(' + dx.value.toFixed(2) + 'px,' + dy.value.toFixed(2) + 'px) scale(' + dScale.value.toFixed(3) + ')';

      requestAnimationFrame(loop);
    })(0);
  }

  /* ======================================================================
     5. PRELOADER  (Preloader.tsx)
     ====================================================================== */
  function initPreloader(onComplete) {
    var el = $('#preloader');
    var pct = $('#preloader-pct');
    var bar = $('#preloader-bar');
    if (!el) { onComplete(); return; }

    var progress = 0;
    var timer = window.setInterval(function () {
      if (progress >= 100) {
        window.clearInterval(timer);
        window.setTimeout(function () {
          el.parentNode && el.parentNode.removeChild(el);
          onComplete();
        }, 600);
        return;
      }
      progress += 2;
      if (progress > 100) progress = 100;
      pct.textContent = progress + '%';
      bar.style.width = progress + '%';
    }, 25);
  }

  /* ======================================================================
     6. NAVBAR  (Navbar.tsx + App.tsx IntersectionObserver)
     ====================================================================== */
  function initNavbar() {
    var navbar = $('#navbar');
    var target = $('#sequence-hero-wrapper');
    var toggle = $('#mobile-menu-toggle');
    var menu = $('#mobile-menu');

    if (navbar && target && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        var visible = !entries[0].isIntersecting;
        navbar.classList.toggle('nav-visible', visible);
        navbar.classList.toggle('pointer-events-none', !visible);
      }, { threshold: 0 });
      io.observe(target);
    }

    if (toggle && menu) {
      var open = false;
      var iconClosed = $('[data-menu-icon="closed"]', toggle);
      var iconOpen = $('[data-menu-icon="open"]', toggle);

      var setOpen = function (next) {
        open = next;
        iconClosed.style.display = open ? 'none' : '';
        iconOpen.style.display = open ? '' : 'none';
        if (open) {
          menu.style.display = '';
          menu.style.height = '0px';
          menu.style.opacity = '0';
          void menu.offsetWidth;
          menu.style.transition = 'height .3s ease, opacity .3s ease';
          menu.style.height = menu.scrollHeight + 'px';
          menu.style.opacity = '1';
          window.setTimeout(function () { if (open) menu.style.height = 'auto'; }, 320);
        } else {
          menu.style.height = menu.scrollHeight + 'px';
          void menu.offsetWidth;
          menu.style.transition = 'height .3s ease, opacity .3s ease';
          menu.style.height = '0px';
          menu.style.opacity = '0';
          window.setTimeout(function () { if (!open) menu.style.display = 'none'; }, 320);
        }
      };

      toggle.addEventListener('click', function () { setOpen(!open); });
      $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });

      var cta = $('#mobile-menu-cta');
      if (cta) cta.addEventListener('click', function () { setOpen(false); scrollToId('contact'); });
    }
  }

  function scrollToId(id) {
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function initScrollButtons() {
    $$('[data-scroll-to]').forEach(function (el) {
      el.addEventListener('click', function () { scrollToId(el.getAttribute('data-scroll-to')); });
    });
    var top = $('#back-to-top');
    if (top) top.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  /* ======================================================================
     7. SEQUENCE HERO  (SequenceHero.tsx)
     ====================================================================== */
  var FRAME_COUNT = 260;

  function easeOutCustom(t) { return 1 - Math.pow(1 - t, 3); }

  function initSequenceHero() {
    var container = $('#sequence-hero');
    var canvas = $('#sequence-canvas');
    if (!container || !canvas) return;

    var context = canvas.getContext('2d', { alpha: false });
    var overlay = $('#sequence-overlay');
    var bottomBlend = $('#sequence-bottom-blend');
    var progressIndicator = $('#sequence-progress');
    var scenes = $$('[data-scene]');

    var images = [];
    var lastRenderedFrame = -1;
    var currentFrameFloat = 0;
    var targetFrameFloat = 0;
    // Tracks whether a frame has ever actually reached the canvas. The loop
    // retries until it has, so a slow first decode can't leave the hero blank.
    var hasPainted = false;

    function drawImageCover(ctx, img, canvasWidth, canvasHeight) {
      var imgRatio = img.naturalWidth / img.naturalHeight;
      var canvasRatio = canvasWidth / canvasHeight;
      var renderW = canvasWidth;
      var renderH = canvasHeight;
      var offsetX = 0;
      var offsetY = 0;

      if (canvasRatio > imgRatio) {
        renderH = canvasWidth / imgRatio;
        offsetY = (canvasHeight - renderH) / 2;
      } else {
        renderW = canvasHeight * imgRatio;
        offsetX = (canvasWidth - renderW) / 2;
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
    }

    function renderFrame(index) {
      if (!context) return false;

      var imgToDraw = null;
      if (images[index] && images[index].complete && images[index].naturalWidth > 0) {
        imgToDraw = images[index];
      } else {
        for (var i = index - 1; i >= 0; i--) {
          if (images[i] && images[i].complete && images[i].naturalWidth > 0) { imgToDraw = images[i]; break; }
        }
        if (!imgToDraw) {
          for (var k = index + 1; k < FRAME_COUNT; k++) {
            if (images[k] && images[k].complete && images[k].naturalWidth > 0) { imgToDraw = images[k]; break; }
          }
        }
      }
      if (!imgToDraw) return false;

      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var displayWidth = Math.floor(window.innerWidth * dpr);
      var displayHeight = Math.floor(window.innerHeight * dpr);

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      }

      drawImageCover(context, imgToDraw, displayWidth, displayHeight);
      return true;
    }

    // Preload all sequence frames. Uses new Image() (never fetch) so this works
    // over the file:// protocol without any CORS restriction.
    for (var i = 0; i < FRAME_COUNT; i++) {
      var img = new Image();
      img.src = './latest-hero-sequences/ezgif-frame-' + String(i + 1).padStart(3, '0') + '.webp';
      images.push(img);
    }

    images[0].onload = function () {
      if (!hasPainted) { lastRenderedFrame = 0; hasPainted = renderFrame(0); }
    };
    if (images[0].complete) { lastRenderedFrame = 0; hasPainted = renderFrame(0); }

    // Keep the canvas correctly sized when the viewport changes.
    window.addEventListener('resize', function () {
      if (lastRenderedFrame >= 0) renderFrame(lastRenderedFrame);
    });

    function updateScenes(progress) {
      scenes.forEach(function (el, idx) {
        var enterStart = idx * 0.20;
        var enterEnd = idx * 0.20 + 0.07;
        var exitStart = (idx + 1) * 0.20 - 0.03;
        var exitEnd = (idx + 1) * 0.20 + 0.06;

        if (progress < enterStart) {
          el.style.opacity = '0';
          el.style.transform = PREFERS_REDUCED_MOTION ? 'translateY(0px)' : 'translateY(35px) scale(0.93)';
          el.style.filter = PREFERS_REDUCED_MOTION ? 'none' : 'blur(10px)';
        } else if (progress >= enterStart && progress < enterEnd) {
          var t1 = easeOutCustom((progress - enterStart) / (enterEnd - enterStart));
          var y1 = PREFERS_REDUCED_MOTION ? 0 : 35 * (1 - t1);
          var s1 = PREFERS_REDUCED_MOTION ? 1 : 0.93 + 0.12 * t1;
          var b1 = PREFERS_REDUCED_MOTION ? 0 : 10 * (1 - t1);
          el.style.opacity = String(t1);
          el.style.transform = 'translateY(' + y1.toFixed(2) + 'px) scale(' + s1.toFixed(4) + ')';
          el.style.filter = PREFERS_REDUCED_MOTION ? 'none' : 'blur(' + b1.toFixed(2) + 'px)';
        } else if (progress >= enterEnd && progress < exitStart) {
          var t2 = (progress - enterEnd) / (exitStart - enterEnd);
          var y2 = PREFERS_REDUCED_MOTION ? 0 : -25 * t2;
          var s2 = PREFERS_REDUCED_MOTION ? 1 : 1.05 + 0.10 * t2;
          el.style.opacity = '1';
          el.style.transform = 'translateY(' + y2.toFixed(2) + 'px) scale(' + s2.toFixed(4) + ')';
          el.style.filter = 'blur(0px)';
        } else if (progress >= exitStart && progress <= exitEnd) {
          var t3 = (progress - exitStart) / (exitEnd - exitStart);
          var y3 = PREFERS_REDUCED_MOTION ? 0 : -25 - 40 * t3;
          var s3 = PREFERS_REDUCED_MOTION ? 1 : 1.15 + 0.10 * t3;
          var b3 = PREFERS_REDUCED_MOTION ? 0 : 6 * t3;
          el.style.opacity = String(1 - t3);
          el.style.transform = 'translateY(' + y3.toFixed(2) + 'px) scale(' + s3.toFixed(4) + ')';
          el.style.filter = PREFERS_REDUCED_MOTION ? 'none' : 'blur(' + b3.toFixed(2) + 'px)';
        } else {
          el.style.opacity = '0';
          el.style.transform = PREFERS_REDUCED_MOTION ? 'translateY(0px)' : 'translateY(-65px) scale(1.25)';
          el.style.filter = PREFERS_REDUCED_MOTION ? 'none' : 'blur(6px)';
        }
      });

      if (overlay) {
        overlay.style.opacity = progress >= 0.9
          ? String(0.45 - 0.25 * ((progress - 0.9) / 0.1))
          : '0.45';
      }

      if (progressIndicator) {
        progressIndicator.style.transform = 'scaleX(' + progress + ')';
      }
    }

    (function loop() {
      var rect = container.getBoundingClientRect();
      var viewportHeight = window.innerHeight;
      var scrubDistance = viewportHeight * 4.0;

      var progress = scrubDistance > 0 ? -rect.top / scrubDistance : 0;
      progress = clamp(progress, 0, 1);

      targetFrameFloat = progress * (FRAME_COUNT - 1);

      var diff = targetFrameFloat - currentFrameFloat;
      if (Math.abs(diff) < 0.001) currentFrameFloat = targetFrameFloat;
      else currentFrameFloat += diff * 0.16;

      var renderIndex = clamp(Math.round(currentFrameFloat), 0, FRAME_COUNT - 1);
      if (renderIndex !== lastRenderedFrame || !hasPainted) {
        lastRenderedFrame = renderIndex;
        if (renderFrame(renderIndex)) hasPainted = true;
      }

      updateScenes(progress);

      if (bottomBlend) {
        var blendOpacity = progress > 0.8
          ? 0.1 + 0.9 * Math.min(1, (progress - 0.8) / 0.2)
          : 0.1;
        bottomBlend.style.opacity = String(blendOpacity);
      }

      requestAnimationFrame(loop);
    })();
  }

  /* ======================================================================
     8. ABOUT — parallax heading  (About.tsx useScroll/useTransform)
     ====================================================================== */
  function initAboutParallax() {
    var section = $('#about');
    var text = $('#about-parallax-text');
    if (!section || !text) return;

    (function loop() {
      var rect = section.getBoundingClientRect();
      var vh = window.innerHeight;
      var span = vh + rect.height;
      var p = span > 0 ? clamp((vh - rect.top) / span, 0, 1) : 0;
      text.style.transform = 'translateY(' + (-140 * p).toFixed(2) + 'px)';
      requestAnimationFrame(loop);
    })();
  }

  /* ======================================================================
     9. HERO — 3D tilt + mount animation  (Hero.tsx)
     ====================================================================== */
  function initHero() {
    var left = $('#hero-left');
    var tilt = $('#hero-tilt');

    // initial={{opacity:0,y:20}} animate={{opacity:1,y:0}}
    if (left) {
      left.style.opacity = '0';
      left.style.transform = 'translateY(20px)';
      left.style.transition = 'opacity 1s cubic-bezier(.16,1,.3,1), transform 1s cubic-bezier(.16,1,.3,1)';
      requestAnimationFrame(function () {
        left.style.opacity = '1';
        left.style.transform = 'translateY(0)';
      });
    }

    if (!tilt) return;

    var mountY = 20;
    var mountOpacity = 0;
    tilt.style.opacity = '0';

    var start = null;
    var MOUNT_DELAY = 150;
    var MOUNT_DURATION = 1200;

    // cubic-bezier(0.16, 1, 0.3, 1) sampled numerically
    function bezier(t) {
      // Newton solve for x(t) = target, then evaluate y
      var x1 = 0.16, y1 = 1, x2 = 0.3, y2 = 1;
      var u = t;
      for (var i = 0; i < 6; i++) {
        var x = 3 * (1 - u) * (1 - u) * u * x1 + 3 * (1 - u) * u * u * x2 + u * u * u;
        var d = 3 * (1 - u) * (1 - u) * x1 + 6 * (1 - u) * u * (x2 - x1) + 3 * u * u * (1 - x2);
        if (Math.abs(d) < 1e-6) break;
        u -= (x - t) / d;
        u = clamp(u, 0, 1);
      }
      return 3 * (1 - u) * (1 - u) * u * y1 + 3 * (1 - u) * u * u * y2 + u * u * u;
    }

    var xPct = 0, yPct = 0;
    var sx = new Spring(300, 30, 1, 0);
    var sy = new Spring(300, 30, 1, 0);

    tilt.addEventListener('mousemove', function (e) {
      var rect = tilt.getBoundingClientRect();
      xPct = e.clientX - rect.left;
      yPct = e.clientY - rect.top;
      sx.target = clamp(xPct / rect.width - 0.5, -0.5, 0.5);
      sy.target = clamp(yPct / rect.height - 0.5, -0.5, 0.5);
    });
    tilt.addEventListener('mouseleave', function () { sx.target = 0; sy.target = 0; });

    var last = 0;
    (function loop(now) {
      if (start === null) start = now;
      var dt = last ? Math.min((now - last) / 1000, 0.064) : 0.016;
      last = now;

      var elapsed = now - start - MOUNT_DELAY;
      var mp = clamp(elapsed / MOUNT_DURATION, 0, 1);
      var eased = bezier(mp);
      mountY = 20 * (1 - eased);
      mountOpacity = eased;

      sx.step(dt);
      sy.step(dt);

      // useTransform maps [-0.5, 0.5] -> ["-12deg","12deg"] for rotateY
      // and [-0.5, 0.5] -> ["12deg","-12deg"] for rotateX
      var rotateY = clamp(sx.value, -0.5, 0.5) * 24;
      var rotateX = clamp(sy.value, -0.5, 0.5) * -24;

      tilt.style.opacity = String(mountOpacity);
      tilt.style.transform = 'translateY(' + mountY.toFixed(2) + 'px) rotateX(' + rotateX.toFixed(3) + 'deg) rotateY(' + rotateY.toFixed(3) + 'deg)';

      requestAnimationFrame(loop);
    })(0);
  }

  /* ======================================================================
     10. COMMUNITY GUIDES  (CommunityGuidesSection.tsx)
     ====================================================================== */
  var COMMUNITY_GUIDES = {
    'downtown-dubai': {
      name: 'Downtown Dubai',
      subtitle: 'The Centre of Now & Iconic Skyline Living',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
      avgYield: '6.8% – 7.5%',
      startingPrice: 'AED 2.2 Million',
      description: "Dubai's most prestiogus enclave featuring Burj Khalifa, Dubai Opera, and high-occupancy corporate rentals.",
      keyHighlights: ['High Short-Term Rental Demand', 'Direct Access to Dubai Mall', 'Strong Capital Appreciation']
    },
    'palm-jumeirah': {
      name: 'Palm Jumeirah',
      subtitle: 'World-Famous Waterfront Luxury',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
      avgYield: '6.2% – 7.0%',
      startingPrice: 'AED 3.8 Million',
      description: 'Global ultra-wealth sanctuary with private beaches, luxury penthouses, and world-class fine dining.',
      keyHighlights: ['Freehold Beachfront Ownership', 'High Global Investor Liquidity', 'Ultra-Prime Capital Growth']
    },
    'business-bay': {
      name: 'Business Bay',
      subtitle: 'Waterfront Canal & Financial Hub',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
      avgYield: '7.8% – 8.8%',
      startingPrice: 'AED 1.4 Million',
      description: 'Fast-growing commercial and residential sector along the Dubai Water Canal, ideal for high ROI investors.',
      keyHighlights: ['Exceptional Rental Yields', 'High Corporate Tenant Demand', 'Flexible Developer Payment Plans']
    },
    'dubai-hills': {
      name: 'Dubai Hills Estate',
      subtitle: 'Championship Golf & Family Sanctuary',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      avgYield: '6.5% – 7.2%',
      startingPrice: 'AED 2.0 Million',
      description: 'Master-planned green community anchored by an 18-hole golf course, top international schools, and Dubai Hills Mall.',
      keyHighlights: ['Family-Oriented Masterplan', 'Top Tier Schools & Healthcare', 'Golden Visa Entry Point']
    }
  };

  var CHECK_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big w-4 h-4 text-gold-alt shrink-0" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>';

  var SELECTED_TAB = 'bg-white border-gold-alt shadow-[0_0_20px_rgba(200,169,106,0.35)]'.split(' ');
  var IDLE_TAB = 'bg-white/70 border-gold/20 hover:border-gold-alt/50 hover:bg-white'.split(' ');

  function initCommunityGuides() {
    var tabs = $$('.guide-tab');
    if (!tabs.length) return;

    var panel = $('#guide-panel');
    var image = $('#guide-image');
    var yieldBadge = $('#guide-yield-badge');
    var priceBadge = $('#guide-price-badge');
    var name = $('#guide-name');
    var subtitle = $('#guide-subtitle');
    var description = $('#guide-description');
    var highlights = $('#guide-highlights');
    var whatsapp = $('#guide-whatsapp');
    var ctaName = $('#guide-cta-name');

    function select(id) {
      var guide = COMMUNITY_GUIDES[id];
      if (!guide) return;

      tabs.forEach(function (tab) {
        var on = tab.getAttribute('data-guide') === id;
        SELECTED_TAB.forEach(function (c) { tab.classList.toggle(c, on); });
        IDLE_TAB.forEach(function (c) { tab.classList.toggle(c, !on); });
      });

      image.src = guide.image;
      image.alt = guide.name;
      yieldBadge.textContent = guide.avgYield;
      priceBadge.textContent = guide.startingPrice;
      name.textContent = guide.name;
      subtitle.textContent = guide.subtitle;
      description.textContent = guide.description;
      ctaName.textContent = guide.name;
      whatsapp.href = 'https://wa.me/971525970116?text=Hi%20Shaista,%20I%20want%20to%20explore%20properties%20in%20' + encodeURIComponent(guide.name);

      highlights.innerHTML = guide.keyHighlights.map(function (h) {
        return '<div class="flex items-center gap-3 text-xs text-light-text p-3 rounded-xl bg-white/90 border border-gold/25 shadow-sm">' +
          CHECK_ICON + '<span>' + h + '</span></div>';
      }).join('');

      // Re-play the panel reveal, matching the keyed remount in React.
      $$('.guide-anim', panel).forEach(function (el, i) {
        el.classList.remove('guide-anim-in');
        el.style.transitionDelay = (0.1 + i * 0.15) + 's';
        void el.offsetWidth;
        el.classList.add('guide-anim-in');
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () { select(tab.getAttribute('data-guide')); });
    });

    // Show the default panel without animation on first paint.
    $$('.guide-anim', panel).forEach(function (el) { el.classList.add('guide-anim-in'); });
  }

  /* ======================================================================
     11. PERSONAL BRAND — reels  (PersonalBrand.tsx)
     ====================================================================== */
  function initReels() {
    // Direct external links handled natively in HTML
  }

  /* ======================================================================
     12. TESTIMONIALS — 3D swapping stack  (Testimonials.tsx)
     ====================================================================== */
  function initTestimonials() {
    var stack = $('#testimonial-stack');
    if (!stack) return;

    var cards = $$('.tst-card', stack);
    var activeIdx = 0;

    function paint() {
      cards.forEach(function (card, idx) {
        var isActive = idx === activeIdx;
        card.style.opacity = isActive ? '1' : '0.4';
        card.style.transform = isActive
          ? 'translateY(0px) scale(1) rotateX(0deg)'
          : 'translateY(45px) scale(0.92) rotateX(5deg)';
        card.style.zIndex = isActive ? '20' : '10';

        var panel = $('.tst-panel', card);
        panel.classList.toggle('shadow-[0_30px_60px_-15px_rgba(200,169,106,0.25)]', isActive);
        panel.classList.toggle('border-gold/50', isActive);
        panel.classList.toggle('shadow-none', !isActive);
        panel.classList.toggle('border-white/5', !isActive);
        panel.classList.toggle('bg-primary/80', !isActive);

        var quote = $('.tst-quote', card);
        quote.classList.toggle('text-gold/5', isActive);
        quote.classList.toggle('scale-110', isActive);
        quote.classList.toggle('rotate-0', isActive);
        quote.classList.toggle('text-white/5', !isActive);
        quote.classList.toggle('-rotate-12', !isActive);

        $$('.tst-star', card).forEach(function (star) {
          star.classList.toggle('fill-gold', isActive);
          star.classList.toggle('text-gold', isActive);
          star.classList.toggle('fill-text-muted', !isActive);
          star.classList.toggle('text-text-muted', !isActive);
        });

        var quoteText = $('.tst-quote-text', card);
        quoteText.classList.toggle('text-text-white', isActive);
        quoteText.classList.toggle('text-text-muted', !isActive);

        var avatar = $('.tst-avatar', card);
        avatar.classList.toggle('border-gold/40', isActive);
        avatar.classList.toggle('grayscale-0', isActive);
        avatar.classList.toggle('border-white/10', !isActive);
        avatar.classList.toggle('grayscale', !isActive);
        avatar.classList.toggle('opacity-70', !isActive);

        var nameEl = $('.tst-name', card);
        nameEl.classList.toggle('text-text-white', isActive);
        nameEl.classList.toggle('text-text-muted', !isActive);

        var badge = $('.tst-badge', card);
        badge.classList.toggle('text-gold', isActive);
        badge.classList.toggle('bg-gold/10', isActive);
        badge.classList.toggle('border-gold/20', isActive);
        badge.classList.toggle('text-text-muted', !isActive);
        badge.classList.toggle('bg-white/5', !isActive);
        badge.classList.toggle('border-white/10', !isActive);
      });
    }

    stack.addEventListener('click', function () {
      activeIdx = activeIdx === 0 ? 1 : 0;
      paint();
    });

    paint();
  }

  /* ======================================================================
     13. MEDIA GALLERY — lightbox  (MediaGallerySection.tsx)
     ====================================================================== */
  var ALL_MEDIA = [
    { type: 'image', src: './images/IMG_6875.JPG', title: 'Gift from Happy Client', category: 'Client Advisory' },
    { type: 'image', src: './images/IMG_6876.JPG', title: 'Dubai Real Estate Excellence', category: 'Event Highlight' },
    { type: 'video', src: './images/IMG_6879.MP4', title: 'Shaista Fathima — Real Estate Excellence Award', category: 'Award Recognition' },
    { type: 'image', src: './images/IMG_6877.JPG', title: 'CEO, Para John', category: 'Exclusive Briefing' },
    { type: 'image', src: './images/IMG_6878.JPG', title: 'CEO, Nesto Group', category: 'Brand Presence' },
    { type: 'image', src: './images/IMG_6880.JPG', title: 'Saudi Royal Family', category: 'Dubai Living' }
  ];

  function initLightbox() {
    var modal = $('#lightbox');
    if (!modal) return;

    var box = $('#lightbox-box');
    var mediaHost = $('#lightbox-media');
    var counter = $('#lightbox-counter');
    var titleEl = $('#lightbox-title');
    var categoryEl = $('#lightbox-category');
    var selectedIndex = null;

    function render() {
      var item = ALL_MEDIA[selectedIndex];
      counter.textContent = (selectedIndex + 1) + ' / ' + ALL_MEDIA.length;
      titleEl.textContent = item.title;
      categoryEl.textContent = item.category;

      mediaHost.innerHTML = item.type === 'video'
        ? '<video src="' + item.src + '" muted controls autoplay playsinline preload="metadata" class="w-full max-h-[80vh] object-contain rounded-2xl"></video>'
        : '<img src="' + item.src + '" alt="' + item.title + '" class="w-full max-h-[80vh] object-contain rounded-2xl" />';

      box.classList.remove('lb-in');
      void box.offsetWidth;
      box.classList.add('lb-in');
    }

    function open(index) {
      selectedIndex = index;
      modal.style.display = '';
      void modal.offsetWidth;
      modal.style.opacity = '1';
      render();
    }

    function hide() {
      modal.style.opacity = '0';
      window.setTimeout(function () {
        modal.style.display = 'none';
        mediaHost.innerHTML = '';
        selectedIndex = null;
      }, 300);
    }

    function prev() {
      if (selectedIndex === null) return;
      selectedIndex = (selectedIndex - 1 + ALL_MEDIA.length) % ALL_MEDIA.length;
      render();
    }
    function next() {
      if (selectedIndex === null) return;
      selectedIndex = (selectedIndex + 1) % ALL_MEDIA.length;
      render();
    }

    $$('[data-media]').forEach(function (card) {
      card.addEventListener('click', function () { open(parseInt(card.getAttribute('data-media'), 10)); });
    });

    $('#lightbox-close').addEventListener('click', function (e) { e.stopPropagation(); hide(); });
    $('#lightbox-prev').addEventListener('click', function (e) { e.stopPropagation(); prev(); });
    $('#lightbox-next').addEventListener('click', function (e) { e.stopPropagation(); next(); });
    $('#lightbox-prev-2').addEventListener('click', function (e) { e.stopPropagation(); prev(); });
    $('#lightbox-next-2').addEventListener('click', function (e) { e.stopPropagation(); next(); });
    box.addEventListener('click', function (e) { e.stopPropagation(); });
    modal.addEventListener('click', hide);

    window.addEventListener('keydown', function (e) {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') hide();
    });
  }

  /* ======================================================================
     14. FAQ ACCORDION  (FAQ.tsx)
     ====================================================================== */
  function initFAQ() {
    var toggles = $$('.faq-toggle');
    if (!toggles.length) return;

    var items = toggles.map(function (toggle) {
      return {
        toggle: toggle,
        chevron: toggle.querySelector('.faq-chevron'),
        panel: toggle.parentElement.querySelector('.faq-panel')
      };
    });

    function setOpen(item, open, animate) {
      item.chevron.classList.toggle('rotate-180', open);
      item.chevron.classList.toggle('text-gold', open);

      if (!animate) {
        item.panel.style.height = open ? 'auto' : '0px';
        item.panel.style.opacity = open ? '1' : '0';
        return;
      }

      if (open) {
        item.panel.style.height = '0px';
        item.panel.style.opacity = '0';
        void item.panel.offsetWidth;
        item.panel.style.height = item.panel.scrollHeight + 'px';
        item.panel.style.opacity = '1';
        window.setTimeout(function () {
          if (item.panel.style.opacity === '1') item.panel.style.height = 'auto';
        }, 310);
      } else {
        item.panel.style.height = item.panel.scrollHeight + 'px';
        void item.panel.offsetWidth;
        item.panel.style.height = '0px';
        item.panel.style.opacity = '0';
      }
    }

    var openIndex = 0;
    items.forEach(function (item, i) { setOpen(item, i === openIndex, false); });

    items.forEach(function (item, i) {
      item.toggle.addEventListener('click', function () {
        var wasOpen = openIndex === i;
        if (!wasOpen && openIndex !== null) setOpen(items[openIndex], false, true);
        openIndex = wasOpen ? null : i;
        setOpen(item, !wasOpen, true);
      });
    });
  }

  /* ======================================================================
     15. CONTACT FORM  (ContactSection.tsx)
     ====================================================================== */
  function initContactForm() {
    var form = $('#contact-form');
    var success = $('#contact-success');
    if (!form || !success) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var data = {
        fullName: form.elements.fullName.value,
        email: form.elements.email.value,
        interestCategory: form.elements.interestCategory.value,
        budgetRange: form.elements.budgetRange.value,
        preferredDate: form.elements.preferredDate.value,
        preferredTime: form.elements.preferredTime.value,
        notes: form.elements.notes.value
      };

      var lines = [
        '*DUBAI REAL ESTATE CONSULTATION REQUEST*',
        '----------------------------------------',
        '*Client Name:* ' + data.fullName,
        '*Email Address:* ' + data.email,
        '*Service Interest:* ' + data.interestCategory,
        '*Budget Range:* ' + data.budgetRange,
        data.preferredDate ? '*Preferred Date:* ' + data.preferredDate : null,
        '*Preferred Time:* ' + data.preferredTime,
        data.notes ? '*Investment Goals / Notes:* ' + data.notes : null,
        '----------------------------------------',
        '_Sent via Shaista Fathima Official Advisory Portfolio_'
      ].filter(Boolean).join('\n');

      window.open('https://wa.me/971525970116?text=' + encodeURIComponent(lines), '_blank');

      $('#success-name').textContent = data.fullName || 'Valued Client';
      $('#success-interest').textContent = data.interestCategory;
      $('#success-whatsapp').href = 'https://wa.me/971525970116?text=' + encodeURIComponent(
        'Hi Shaista, I just submitted a consultation request on your portfolio website:\n\n' +
        'Name: ' + data.fullName + '\n' +
        'Email: ' + data.email + '\n' +
        'Interest: ' + data.interestCategory + '\n' +
        'Budget: ' + data.budgetRange + '\n' +
        'Preferred Time: ' + data.preferredDate + ' @ ' + data.preferredTime + '\n' +
        'Notes: ' + data.notes
      );

      form.style.display = 'none';
      success.style.display = '';
      success.classList.add('contact-success-in');
    });

    $('#contact-reset').addEventListener('click', function () {
      success.style.display = 'none';
      success.classList.remove('contact-success-in');
      form.style.display = '';
    });
  }

  /* ======================================================================
     16. FLOATING BAR  (FloatingBar.tsx)
     ====================================================================== */
  function initFloatingBar() {
    var collapsed = $('#fab-collapsed');
    var expanded = $('#fab-expanded');
    if (!collapsed || !expanded) return;

    function show(open) {
      if (open) {
        collapsed.classList.remove('fab-in');
        window.setTimeout(function () {
          collapsed.style.display = 'none';
          expanded.style.display = '';
          void expanded.offsetWidth;
          expanded.classList.add('fab-in');
        }, 200);
      } else {
        expanded.classList.remove('fab-in');
        window.setTimeout(function () {
          expanded.style.display = 'none';
          collapsed.style.display = '';
          void collapsed.offsetWidth;
          collapsed.classList.add('fab-in');
        }, 240);
      }
    }

    collapsed.classList.add('fab-in');
    $('#fab-open').addEventListener('click', function () { show(true); });
    $('#fab-close').addEventListener('click', function () { show(false); });
    $('#fab-book').addEventListener('click', function () { show(false); scrollToId('contact'); });
  }

  /* ======================================================================
     BOOTSTRAP
     ====================================================================== */
  function boot() {
    // Viewport sticky safeguards: ensure html & body never create an unwanted
    // scroll container that breaks position: sticky on SequenceHero
    document.documentElement.style.overflowX = 'clip';
    document.documentElement.style.overflowY = 'visible';
    document.body.style.overflowX = 'clip';
    document.body.style.overflowY = 'visible';

    var year = $('#footer-year');
    if (year) year.textContent = String(new Date().getFullYear());

    initCustomCursor();

    initPreloader(function () {
      var site = $('#site');
      if (site) site.style.display = '';

      $$('canvas[data-particles]').forEach(initParticleCanvas);

      initNavbar();
      initScrollButtons();
      initSequenceHero();
      initAboutParallax();
      initHero();
      initCommunityGuides();
      initReels();
      initTestimonials();
      initLightbox();
      initFAQ();
      initContactForm();
      initFloatingBar();
      initReveals();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
