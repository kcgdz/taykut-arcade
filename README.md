<div align="center">

# TAYKUT®
### Serious craft. Playful by nature.

An independent digital studio with an arcade soul.<br/>
Design, technology, and a little rebellion.

[Explore the code](src/App.tsx) · [Report an issue](https://github.com/kcgdz/taykut-arcade/issues)

---

</div>

A responsive studio portfolio that brings the energy of an arcade to a modern editorial layout. Acid yellow, oversized typography, and a handcrafted interactive arcade cabinet give the site its own personality.

### The experience

- **Interactive cabinet** — insert coins and watch your score grow.
- **Concept gallery** — three original visual explorations, clearly presented as studio concepts.
- **Studio capabilities** — design, development, and creative strategy.
- **Responsive navigation** — mobile menu, visible keyboard focus, and reduced-motion support.
- **Lightweight foundation** — a static frontend with no API keys or backend required.

### Run locally

Requires Node.js 22 or newer and npm.

```sh
npm install
npm run dev
```

Open the local address printed by Vite (default: `http://localhost:3000`).

### Production

```sh
npm run lint
npm run build
npm run preview
```

The production site is generated in `dist/`. Deploy that folder to your preferred static host. The included Vercel configuration supports direct deployment; relative asset paths also allow hosting under a subdirectory.

### Make it yours

Page content, navigation, and concept cards live in [`src/App.tsx`](src/App.tsx). The design system and responsive layouts live in [`src/index.css`](src/index.css). Update the title and search description in [`index.html`](index.html).

The gallery contains fictional concepts, not client claims. The contact button opens this repository’s issue composer; replace it with your preferred contact destination before using the site for a business. Typography loads Space Grotesk and Space Mono from Google Fonts, with system fallbacks.

### Built with

React 19 · TypeScript · Vite · Tailwind CSS 4 · Lucide

---

<div align="center">© TAYKUT · KEEP PLAYING.</div>
