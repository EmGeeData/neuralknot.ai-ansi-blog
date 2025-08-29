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
- **15 Dynamic Color Themes** including Gruvbox variants, Catppuccin collection, Tokyo Night, classic terminal themes (green/amber), and modern themes
- **Perfect DOS VGA font** for authentic retro terminal feel
- **ANSI/ASCII art** prominently featured throughout
- **Terminal-style borders** using Unicode box-drawing characters (═, ║, ╔, ╗, etc.)
- **Scanline effects** and CRT monitor simulation
- **Blinking cursor** and retro animations
- **Dynamic Theme Switching** with dropdown selector and localStorage persistence
- **Enhanced SEO** with structured data and social media optimization

### Theme Elements
- Site name: **"NEURALKNOT.AI"** 
- Tagline: **"TECH TERMINAL"** (updated from AI Research Terminal to broader tech focus)
- BBS-style navigation with lettered options `[H]`, `[B]`, `[A]`, etc.
- Terminal status indicators (nodes active, hackers online, system stats)
- Multi-section layout: main menu, latest articles (up to 16), terminal stats, knowledge base, recent updates
- References to nodes, baud rates, FidoNet addressing (2:404/1337)
- Content covers: software development, hacking culture, AI developments, cybersecurity

## Architecture

### Content Management
- Blog posts stored in `src/content/blog/` as Markdown/MDX files
- Content schema defined in `src/content/config.ts` with enhanced SEO fields
- Categories: software-development, cybersecurity, artificial-intelligence, hacking-culture, programming-tutorials, tech-analysis, tools-reviews, industry-news
- Optional SEO overrides per post (custom meta titles, descriptions, OG images, keywords)
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
│   │   └── BaseHead.astro # Enhanced SEO metadata component
│   ├── config/            # 🆕 Configuration files
│   │   └── seo.ts         # Central SEO configuration and utilities
│   ├── content/
│   │   ├── blog/          # Tech blog posts covering dev/hacking/AI (Markdown/MDX)
│   │   └── config.ts      # Content schema with SEO fields
│   ├── layouts/           # Terminal-inspired page layouts
│   │   └── BlogPost.astro # Uses external CSS file for cleaner organization
│   ├── pages/             # Home, blog, about pages
│   ├── styles/
│   │   ├── themes/        # 15 color theme CSS files
│   │   │   ├── README.md  # Technical theme documentation
│   │   │   ├── classic-terminal-green.css  # 🆕 Monochrome green
│   │   │   └── classic-terminal-amber.css  # 🆕 Monochrome amber
│   │   ├── blog-post.css  # 🆕 Dedicated blog post styles
│   │   └── global.css     # Main stylesheet
│   └── consts.ts          # Site configuration & externalized content
└── CLAUDE.md              # This file - development guidance
```

### Configuration
- **Site constants** in `src/consts.ts` including:
  - Site title and description (updated to broader tech focus)
  - Footer configuration for all page types (home, blog, about, posts)
  - Recent updates, terminal status, and knowledge base (externalized for easy management)
  - Shared content like copyright, sysop names, system details
- **SEO configuration** in `src/config/seo.ts` including:
  - Site-wide SEO defaults with BBS/terminal themed keywords
  - Metadata generation utilities and structured data
  - Social media configurations (Twitter Cards, Open Graph)
  - Article and website structured data for better search visibility
- **Theme system** with 15 themes in `src/styles/themes/` and dynamic switching via `public/theme-switcher.js`
- **Content management** via Astro's content collections with enhanced SEO schema
- **CSS organization** with dedicated files for blog posts and cleaner component separation
- **Perfect DOS VGA font** loaded from Google Fonts for authentic terminal typography

## Key Features

### Dynamic Theme System
- **15 Built-in Themes**: Gruvbox variants, Catppuccin collection, Tokyo Night, classic terminal themes (green/amber), modern themes
- **Live Theme Switching**: Dropdown selector in page headers with instant preview
- **Persistent Preferences**: Themes saved to localStorage and restored on page load
- **Modular Architecture**: Each theme is a separate CSS file with consistent variable naming
- **Authentic Terminal Themes**: Classic Terminal Green and Amber for authentic monochrome experience

### Content Creation
- **Markdown Support**: Standard blog posts with frontmatter
- **MDX Integration**: Interactive content with JSX components
- **Image Optimization**: Responsive images with proper scaling and containers
- **BBS Styling**: All content styled with terminal aesthetics

### SEO & Social Media Optimization
- **Comprehensive Meta Tags**: Open Graph, Twitter Cards, structured data
- **Article-Specific SEO**: Publish dates, author info, article sections, tags
- **BBS-Themed Keywords**: Terminal computing, hacking culture, tech development
- **Social Media Ready**: Proper OG images, descriptions, and card types
- **Structured Data**: Article and website schemas for better search visibility
- **Per-Post SEO Overrides**: Optional custom meta titles, descriptions, keywords
- **Search Engine Optimization**: Canonical URLs, robots directives, sitemaps

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
  - Organize styles in dedicated files (e.g., `blog-post.css`) for better maintainability
  - Use global styles for markdown content that needs to override browser defaults
- **JavaScript**: Minimal JS for theme switching and terminal effects
- **SEO**: Use the central SEO configuration for consistent metadata
  - Leverage structured data for better search visibility
  - Override SEO fields per-post only when necessary
- **Images**: Ensure responsive behavior and proper containment
- **Accessibility**: Test all themes for contrast compliance

### Recent Improvements
- **Enhanced SEO System**: Comprehensive metadata, structured data, social media optimization
- **CSS Organization**: Separated blog post styles into dedicated file for cleaner architecture
- **Theme Expansion**: Added Classic Terminal Green and Amber themes for authentic monochrome experience
- **Content Externalization**: Moved dynamic content sections to consts.ts for easier management
- **Homepage Enhancement**: Expanded latest articles section to show up to 16 posts
- **Link Styling Consistency**: Fixed markdown content links to use theme colors across all pages

## Documentation
- **Complete documentation** available in `docs/` folder
- **Master index** at `docs/README.md` with organized navigation
- **Technical guides** for developers, content creators, and system administrators
- **Quick reference** materials for common tasks