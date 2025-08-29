# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NeuralKnot.ai BBS Terminal Blog is a retro-styled tech blog built with Astro, recreating the authentic look and feel of 1980s-90s BBS (Bulletin Board System) terminals. Covering software development, hacking culture, AI developments, and all things tech with a focus on AI's evolving impact on the computing world. The project features a complete terminal aesthetic with ANSI art, retro computing culture, and dynamic theme switching capabilities.

## Development Commands

All commands use `pnpm` and are run from the project root:

- `pnpm dev` - Start development server at localhost:4321
- `pnpm build` - Build production site to ./dist/
- `pnpm preview` - Preview production build locally
- `pnpm astro ...` - Run Astro CLI commands (e.g., `pnpm astro check`)

## Design Philosophy

### BBS Terminal Aesthetic
- **13 Dynamic Color Themes** including Gruvbox, Catppuccin, Tokyo Night, and classic terminal themes
- **Perfect DOS VGA font** for authentic retro terminal feel
- **ANSI/ASCII art** prominently featured throughout
- **Terminal-style borders** using Unicode box-drawing characters (═, ║, ╔, ╗, etc.)
- **Scanline effects** and CRT monitor simulation
- **Blinking cursor** and retro animations
- **Dynamic Theme Switching** with dropdown selector and localStorage persistence

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
- Focus on software development, hacking culture, AI developments, cybersecurity, programming tutorials, tech industry analysis, and the intersection of AI with traditional computing

### Key Design Components
- **ASCII Art Integration** - Featured prominently on homepage
- **Terminal UI Elements** - Borders, menus, status boxes
- **Retro Typography** - Monospace fonts, terminal styling
- **Color Coding** - Different colored sections (yellow menus, green articles, etc.)
- **Interactive Elements** - Hover effects, terminal-style feedback

### File Structure
```
nk-ansi-blog/
├── docs/                   # 📚 Complete documentation
│   ├── README.md          # Documentation index
│   ├── CONTENT_GUIDE.md   # Blog content creation guide
│   ├── MDX_GUIDE.md       # Interactive content guide
│   ├── THEME_SWITCHER.md  # Theme switching instructions
│   └── THEME_CREATION_GUIDE.md # Complete theme development guide
├── public/
│   ├── fonts/             # Perfect DOS VGA font files
│   ├── terminal.js        # ASCII art and terminal effects
│   └── theme-switcher.js  # Dynamic theme switching system
├── src/
│   ├── components/        # BBS-style UI components
│   ├── content/blog/      # Tech blog posts covering dev/hacking/AI (Markdown/MDX)
│   ├── layouts/           # Terminal-inspired page layouts
│   ├── pages/             # Home, blog, about pages
│   ├── styles/
│   │   ├── themes/        # 13 color theme CSS files
│   │   │   └── README.md  # Technical theme documentation
│   │   └── global.css     # Main stylesheet
│   └── consts.ts          # Site configuration & footer content
└── CLAUDE.md              # This file - development guidance
```

### Configuration
- **Site constants** in `src/consts.ts` including footer configuration for all page types
- **Theme system** with 13 themes in `src/styles/themes/` and dynamic switching via `public/theme-switcher.js`
- **Content management** via Astro's content collections in `src/content/blog/`
- **Perfect DOS VGA font** loaded from Google Fonts for authentic terminal typography
- **Responsive images** with JavaScript-based solutions for blog posts

## Key Features

### Dynamic Theme System
- **13 Built-in Themes**: Gruvbox variants, Catppuccin collection, Tokyo Night, classic terminal themes
- **Live Theme Switching**: Dropdown selector in page headers with instant preview
- **Persistent Preferences**: Themes saved to localStorage and restored on page load
- **Modular Architecture**: Each theme is a separate CSS file with consistent variable naming

### Content Creation
- **Markdown Support**: Standard blog posts with frontmatter
- **MDX Integration**: Interactive content with JSX components
- **Image Optimization**: Responsive images with proper scaling and containers
- **BBS Styling**: All content styled with terminal aesthetics

### BBS Terminal Experience
- **ASCII Art Headers**: Generated terminal-style branding
- **Terminal UI Elements**: Borders, menus, status indicators
- **Retro Effects**: Scanlines, blinking cursors, CRT simulation
- **Authentic Typography**: Perfect DOS VGA font throughout

## Development Guidelines

### Theme Development
- Follow the guide in `docs/THEME_CREATION_GUIDE.md` for creating new themes
- All themes must define the complete set of CSS custom properties
- Test accessibility with contrast ratio tools
- Maintain the BBS/terminal aesthetic

### Content Guidelines
- Use `docs/CONTENT_GUIDE.md` for standard blog posts
- Use `docs/MDX_GUIDE.md` for interactive content
- Cover software development, hacking culture, AI developments, cybersecurity, programming tutorials, and tech industry analysis
- Focus on AI's impact on traditional computing and development practices
- Maintain consistent terminal styling and hacker/BBS culture aesthetic

### Code Standards
- **CSS**: Use CSS custom properties for theming, avoid hardcoded colors
- **JavaScript**: Minimal JS for theme switching and terminal effects
- **Images**: Ensure responsive behavior and proper containment
- **Accessibility**: Test all themes for contrast compliance

## Documentation
- **Complete documentation** available in `docs/` folder
- **Master index** at `docs/README.md` with organized navigation
- **Technical guides** for developers, content creators, and system administrators
- **Quick reference** materials for common tasks