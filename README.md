# Santiago Trigo - Portfolio

Personal portfolio website for Santiago Trigo, Frontend Developer specializing in React, TypeScript, and web performance.

## Tech Stack

- **Framework**: [Astro](https://astro.build) 5.15+
- **UI**: React 19.2+
- **Styling**: Tailwind CSS 3.4+
- **Content**: MDX for blog posts
- **TypeScript**: Strict mode enabled
- **Fonts**: Inter, Space Grotesk, JetBrains Mono

## Features

- 🌙 Dark mode with localStorage persistence
- ⚡ Performance optimized (static site generation)
- 📝 Blog with MDX support
- 🎨 Custom design system with Tailwind
- 📱 Responsive design
- ♿ Accessibility (keyboard navigation, aria-labels)

## Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Commands

| Command            | Action                                       |
| :----------------- | :------------------------------------------- |
| `npm run dev`      | Start dev server at `localhost:4321`         |
| `npm run build`    | Build production site to `./dist/`           |
| `npm run preview`  | Preview production build locally             |

## Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── components/
│   │   ├── layout/     # Layout components (Astro)
│   │   └── react/      # Interactive components (React)
│   ├── content/
│   │   └── blog/       # Blog posts (MDX)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Application routes
│   └── styles/         # Global styles
├── CLAUDE.md           # Claude Code guidance
└── tailwind.config.mjs # Tailwind configuration
```

## Theme System

The project implements dark mode through:

1. Inline script in [BaseLayout.astro](src/layouts/BaseLayout.astro) that prevents flash
2. React component [ThemeToggle.tsx](src/components/react/ThemeToggle.tsx) for toggling
3. Tailwind with `darkMode: 'class'`

## Deployment

The site is optimized for deployment on platforms like:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

```bash
npm run build
```

The generated site will be in `./dist/`

## License

© 2025 Santiago Trigo. All rights reserved.
