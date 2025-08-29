# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NeuralKnot.ai is an AI research blog built with Astro, designed to recreate the aesthetic and feel of 1980s-90s BBS (Bulletin Board System) terminals. The project embraces ANSI art, retro computing culture, and the underground hacker/demoscene aesthetic from the early computing era.

## Development Commands

All commands use `pnpm` and are run from the project root:

- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview production build locally
- `pnpm astro ...` - Run Astro CLI commands (e.g., `pnpm astro check`)

## Design Philosophy

### BBS Terminal Aesthetic
- **Gruvbox Dark color scheme** with terminal-inspired colors
- **Perfect DOS VGA font** for authentic retro terminal feel
- **ANSI/ASCII art** prominently featured throughout
- **Terminal-style borders** using Unicode box-drawing characters (═, ║, ╔, ╗, etc.)
- **Scanline effects** and CRT monitor simulation
- **Blinking cursor** and retro animations

### Theme Elements
- Site name: **"NEURALKNOT.AI"** 
- Tagline: **"AI RESEARCH TERMINAL"**
- BBS-style navigation with lettered options `[A]`, `[T]`, `[N]`, etc.
- Terminal status indicators (connection speed, session time, credits)
- Multi-section layout: main menu, latest research, terminal stats, recent updates
- References to nodes, baud rates, FidoNet addressing

## Architecture

### Content Management
- Blog posts stored in `src/content/blog/` as Markdown/MDX files
- Content schema defined in `src/content.config.ts`
- Focus on AI research, tutorials, ethics, and deep learning content

### Key Design Components
- **ASCII Art Integration** - Featured prominently on homepage
- **Terminal UI Elements** - Borders, menus, status boxes
- **Retro Typography** - Monospace fonts, terminal styling
- **Color Coding** - Different colored sections (yellow menus, green articles, etc.)
- **Interactive Elements** - Hover effects, terminal-style feedback

### File Structure
```
src/
├── components/     # BBS-style UI components
├── content/        # AI research blog posts
├── layouts/        # Terminal-inspired page layouts
├── pages/          # Home, blog, about pages
├── styles/         # Gruvbox + terminal CSS
└── consts.ts       # Site configuration
```

### Configuration
- Site branding in `src/consts.ts` (NeuralKnot.ai theme)
- Astro config includes MDX and sitemap integrations
- Perfect DOS VGA font loaded from Google Fonts