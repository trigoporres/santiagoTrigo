# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Santiago Trigo, built with Astro 5, React 19, and Tailwind CSS. The site features a modern, minimal design with dark mode support.

## Tech Stack

- **Framework**: Astro 5.15+ with React integration
- **UI Framework**: React 19.2+
- **Styling**: Tailwind CSS 3.4+ with custom design tokens
- **TypeScript**: Strict mode enabled
- **Fonts**: Inter (sans), Space Grotesk (display), JetBrains Mono (mono)

## Development Commands

Run all commands from the project root:

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally

## Architecture

### Component Structure

The codebase follows a hybrid Astro + React architecture:

**Astro Components** (`.astro` files):
- Handle static content, layouts, and SSR
- Used for: layouts, page shells, and primarily static UI components
- Located in `src/layouts/` and `src/components/layout/`

**React Components** (`.tsx` files):
- Handle interactive client-side features
- Used for: interactive widgets requiring state management
- Located in `src/components/react/`
- Must use `client:load` directive in Astro files for hydration

### Key Files

- `src/layouts/BaseLayout.astro` - Root HTML layout with theme flash prevention script
- `src/components/layout/Header.astro` - Site navigation with responsive menu
- `src/components/react/ThemeToggle.tsx` - Client-side dark mode toggle with localStorage persistence
- `src/styles/global.css` - Global styles, imported in BaseLayout
- `tailwind.config.mjs` - Custom color scheme (brand, neutral) and font configuration

### Theme System

Dark mode implementation uses a multi-layered approach:

1. **Initial Load** (BaseLayout.astro): Inline script checks localStorage/system preference and sets `dark` class on `<html>` before render to prevent flash
2. **React Toggle** (ThemeToggle.tsx): Manages theme state and persists to localStorage
3. **Tailwind**: Uses `darkMode: 'class'` to style based on `.dark` class

When modifying theme logic, ensure changes are synchronized between the inline script and React component.

## Design System

### Colors

- **Brand**: `brand-{50-900}` - Primary accent (coral/red tones)
- **Neutral**: `neutral-{50-900}` - Grayscale palette
- Use semantic variants: `text-brand-500 dark:text-brand-400`

### Typography

- Display headings: `font-display` (Space Grotesk)
- Body text: `font-sans` (Inter)
- Code/technical: `font-mono` (JetBrains Mono)

### Fonts

Fonts are loaded via `@fontsource` packages in node_modules. No external CDN or font files in the project.

## Configuration

### TypeScript

- Extends `astro/tsconfigs/strict`
- JSX configured for React with `jsx: "react-jsx"`
- Excludes `dist/` directory

### Astro

Integrations enabled:
- `@astrojs/tailwind` - Tailwind CSS processing
- `@astrojs/react` - React component support

## Conventions

- Language: Spanish (`lang="es"` in HTML)
- Default meta description: "Frontend Developer. React, TypeScript, Performance."
- Navigation items defined in Header.astro: Blog, Projects, About
- Container pattern: `container mx-auto px-4 sm:px-6 lg:px-8`
