# Shaista Fathima — Luxury Real Estate Portfolio

A 100% static website. Plain HTML, one compiled CSS file, and one vanilla
JavaScript file. No build step, no Node.js, no framework.

## Deploying to Hostinger (or any shared host)

Upload the **entire contents** of this folder into `public_html/`. That's it —
there is nothing to build, install, or configure.

```
public_html/
├── index.html
├── favicon.svg
├── assets/
│   ├── css/style.css
│   └── js/main.js
├── images/
├── logos/
└── latest-hero-sequences/
```

Set the hosting type to **static / HTML**, not Node.js.

## Opening it locally

Double-click `index.html`. It runs correctly straight from the `file:///`
protocol — every path is relative, the script is a classic `<script defer>`
rather than an ES module, and no local asset is loaded through `fetch()`.

Two things need an internet connection (they are remote by design, exactly as
before): the Google Fonts stylesheet, the embedded Google Map, and the Unsplash
photography used for the developer-partner and community cards.

## Structure

| Path | Contents |
| --- | --- |
| `index.html` | Every section of the page, in order. Icons are inlined SVG. |
| `assets/css/style.css` | Compiled Tailwind utilities plus all custom styling. |
| `assets/js/main.js` | All behaviour, wrapped in an IIFE. |
| `images/` | Portraits, gallery photos, reel thumbnails, award video. |
| `logos/` | Developer marquee logos. |
| `latest-hero-sequences/` | The 260 frames of the scroll-scrubbed hero. |

## Editing

**Content and layout** — edit `index.html` directly.

**Behaviour** — edit `assets/js/main.js`. It is organised into numbered
sections (scroll reveals, particle canvas, custom cursor, preloader, navbar,
sequence hero, hero tilt, community guides, modals, testimonials, lightbox,
FAQ, contact form, floating bar).

**Styling** — `assets/css/style.css` is a compiled artifact. For small changes,
append plain CSS to the end of the file; it is ordinary CSS and needs no
tooling. Note that the Tailwind utility classes already in the markup are baked
into this file, so **adding a new Tailwind class name to the HTML will not do
anything** unless you also write the corresponding CSS yourself.

### One thing not to change

`assets/js/main.js` sets `document.body.style.overflow = 'unset'` on startup.
This is load-bearing: the stylesheet sets `overflow-x: hidden` on `body`, which
would otherwise make `body` a scroll container and silently break the
`position: sticky` pin that the 600vh hero sequence depends on.
