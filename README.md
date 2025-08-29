# NeuralKnot.ai BBS Terminal Blog

A retro-styled BBS (Bulletin Board System) terminal blog built with Astro, covering software development, hacking culture, AI developments, and all things tech. Features ANSI art aesthetics and multiple color themes with authentic 1980s-90s terminal styling.

## 🖥️ Features

- **BBS Terminal Aesthetic**: Authentic 1980s-90s terminal styling with CP437 encoding
- **ANSI Art Integration**: ASCII art headers and visual elements
- **15 Color Themes**: Including Gruvbox, Catppuccin, Tokyo Night, classic terminal themes, and more
- **Local Font Hosting**: Perfect DOS VGA font served locally for privacy and performance
- **Enhanced SEO**: Comprehensive metadata, structured data, social media optimization
- **Dynamic Theme Switching**: Live theme preview with localStorage persistence
- **Responsive Images**: Optimized image handling for all screen sizes
- **MDX Support**: Interactive content with Markdown + JSX
- **Fast Performance**: Built on Astro for optimal loading speeds
- **Centralized Configuration**: Easy content management through external config files
- **Comprehensive About Page**: Detailed system information with homepage styling

## 🎨 Available Themes

Switch between 15 carefully crafted color themes:

| Theme Family | Variants | Description |
|-------------|----------|-------------|
| **Gruvbox** | Dark, Light, Material Dark, Material Hard | Warm retro colors with excellent readability |
| **Catppuccin** | Latte, Frappé, Macchiato, Mocha | Soothing pastel themes from light to dark |
| **Tokyo Night** | Original, Storm | Urban neon-inspired dark themes |
| **Classic Terminal** | Green, Amber | Authentic monochrome terminal experience |
| **Modern** | Cyberpunk, Terminal Green, Dracula | Contemporary terminal and developer themes |

See [docs/THEME_SWITCHER.md](docs/THEME_SWITCHER.md) for switching instructions.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📁 Project Structure

```text
├── public/
│   ├── fonts/               # Perfect DOS VGA font files
│   ├── terminal.js         # ASCII art and terminal effects  
│   ├── theme-switcher.js   # Dynamic theme switching
│   └── favicon.ico
├── src/
│   ├── components/          # Reusable UI components
│   │   └── BaseHead.astro  # Enhanced SEO metadata component
│   ├── config/             # Configuration files
│   │   └── seo.ts          # Central SEO configuration
│   ├── content/
│   │   ├── blog/           # Blog posts (Markdown/MDX)
│   │   └── config.ts       # Content schema with SEO fields
│   ├── layouts/
│   │   ├── BaseLayout.astro # Main site layout
│   │   └── BlogPost.astro  # Blog post layout
│   ├── pages/              # Site pages and routing
│   └── styles/
│       ├── themes/         # 15 color theme files
│       ├── blog-post.css   # Dedicated blog post styles
│       └── global.css      # Main stylesheet
├── docs/                   # 📚 Complete documentation
│   ├── README.md          # Documentation index
│   ├── CONTENT_GUIDE.md   # Blog content creation guide
│   ├── MDX_GUIDE.md       # Interactive content guide
│   ├── THEME_SWITCHER.md  # Theme switching instructions
│   └── THEME_CREATION_GUIDE.md # Complete theme development guide
```

## ✍️ Creating Content

### Blog Posts

Create new `.md` or `.mdx` files in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description"
pubDate: "2024-01-01"
heroImage: "/blog-images/your-image.jpg"
---

Your content here...
```

See [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) for detailed instructions.

### Interactive Content

Use MDX for interactive elements:

```mdx
---
title: "Interactive Post"
description: "With JSX components"
pubDate: "2024-01-01"
---

import CustomComponent from '../components/CustomComponent.astro';

<CustomComponent />
```

See [docs/MDX_GUIDE.md](docs/MDX_GUIDE.md) for MDX-specific guidance.

## 🎯 Theme Customization

### Switching Themes

1. Open `src/styles/global.css`
2. Change the import line:
   ```css
   @import './themes/your-preferred-theme.css';
   ```
3. Save and refresh

### Creating Custom Themes

1. Copy an existing theme:
   ```bash
   cp src/styles/themes/gruvbox-dark.css src/styles/themes/my-theme.css
   ```
2. Modify the CSS variables in your new file
3. Import your theme in `global.css`

## 🔍 SEO & Social Media

The blog includes a comprehensive SEO system:

### Central SEO Configuration (`src/config/seo.ts`)
- **Site-wide defaults** with tech/BBS themed keywords
- **Metadata generation** utilities for consistent SEO
- **Structured data** for articles and website schema
- **Social media optimization** (Open Graph, Twitter Cards)

### Enhanced Content Schema
- **Optional SEO overrides** per blog post
- **Custom meta titles, descriptions, and keywords**
- **Article categorization** and tagging system
- **Social media image customization**

### Usage Example
```typescript
// In blog post frontmatter
seo: {
  metaTitle: "Custom SEO Title",
  metaDescription: "Custom description under 160 chars",
  keywords: ["custom", "keywords"],
  ogImage: "/custom-og-image.jpg"
}
```

## ⚙️ Site Configuration

The blog uses `src/consts.ts` for easy site customization:

### Site Constants
```typescript
SITE_TITLE = 'NeuralKnot.ai BBS - Terminal Access'
SITE_DESCRIPTION = 'Tech Terminal - Software Development, Hacking Culture, AI & Cybersecurity'
```

### Footer Configuration
- **Page-specific footers** for home, blog, about, and individual posts
- **Shared content** like copyright, sysop names, and system details
- **Easy customization** without editing template files

### Recent Updates
```typescript
RECENT_UPDATES = [
  '• Your update here',
  '• Another update',
  // Add more updates as needed
]
```

### Terminal Status & Knowledge Base
```typescript
TERMINAL_STATUS = {
  title: 'TERMINAL STATUS',
  stats: ['3 Nodes Active', '7 Hackers Online', '2,048 Total Users'],
}

KNOWLEDGE_BASE = {
  title: 'KNOWLEDGE BASE', 
  stats: ['1,337 Articles', '420 Tutorials', '69 Code Repos'],
}
```

Simply edit these arrays to update the homepage statistics sections.

## 🚀 Recent Improvements

### Performance & Privacy
- **Local Font Hosting**: Perfect DOS VGA font now served locally (78% smaller with WOFF2 format)
- **No External Dependencies**: Eliminated Google Fonts for better privacy and GDPR compliance
- **Optimized Loading**: Font preloading with modern `font-display: swap` strategy

### Content Management
- **Externalized Configuration**: Recent updates, terminal status, and knowledge base stats now managed through `src/consts.ts`
- **Enhanced SEO System**: Comprehensive SEO configuration with structured data and social media optimization
- **Improved Documentation**: Complete guides for content creation, theming, and configuration

### User Experience
- **Dynamic Theme Switching**: Live theme preview with persistent user preferences
- **Comprehensive About Page**: Detailed system information using consistent homepage styling
- **Better Content Organization**: Blog posts properly separated from static pages
- **Improved Accessibility**: Better semantic HTML structure and screen reader support

### Technical Enhancements
- **CSS Organization**: Dedicated stylesheets for different page types
- **Markdown Link Styling**: Fixed styling issues with blog post content links
- **Content Schema Validation**: Enhanced frontmatter schema with optional SEO fields
- **Modular Architecture**: Cleaner separation of concerns and easier maintenance

## 🛠️ Development Commands

| Command | Action |
|---------|--------|
| `pnpm dev` | Start development server at `localhost:4321` |
| `pnpm build` | Build production site to `./dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm astro check` | Run Astro diagnostics |

## 🎮 BBS Terminal Experience

This blog recreates the authentic feel of 1980s-90s Bulletin Board Systems:

- **CP437 Character Encoding**: Classic IBM PC character set
- **Perfect DOS VGA Font**: Pixel-perfect retro typography
- **Terminal UI Elements**: ASCII borders, headers, and navigation
- **ANSI Color Codes**: Authentic 16-color terminal palette
- **Vintage Aesthetics**: Scanlines, phosphor glow effects (optional)

## 📊 Performance

- **Lighthouse Score**: 100/100 performance
- **Static Generation**: Pre-built pages for fast loading
- **Optimized Images**: Automatic image compression and responsive sizing
- **Minimal JavaScript**: Fast, progressive enhancement

## 🔧 Technical Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: CSS with custom properties for theming
- **Typography**: Perfect DOS VGA webfont
- **Content**: Markdown/MDX with frontmatter
- **Build Tool**: Vite (included with Astro)
- **Package Manager**: pnpm

## 📝 License

This project is open source. Feel free to use it as a starting point for your own BBS-style blog.

## 🎯 About NeuralKnot.ai

This blog serves as a digital bulletin board exploring software development, hacking culture, AI developments, cybersecurity, programming tutorials, tech industry analysis, and the evolving intersection of artificial intelligence with traditional computing and development practices.

---

**Welcome to the neural network. Connection established. Enjoy your stay.** 🔌