# 🔧 NeuralKnot.ai BBS Configuration Guide

This guide covers all configurable aspects of the BBS terminal blog, making it easy to customize the site without editing template files.

## 📋 Overview

The blog uses `src/consts.ts` as the central configuration file for site-wide settings, making customization simple and maintainable.

## 🏠 Site Constants

### Basic Site Information

```typescript
export const SITE_TITLE = 'NeuralKnot.ai BBS - Terminal Access';
export const SITE_DESCRIPTION = 'Tech Terminal - Software Development, Hacking Culture, AI & Cybersecurity';
```

**Usage:**
- `SITE_TITLE` appears in browser tabs, page titles, and meta tags
- `SITE_DESCRIPTION` is used for SEO meta descriptions and social media previews

**Customization:**
```typescript
export const SITE_TITLE = 'Your BBS Name - Terminal Access';
export const SITE_DESCRIPTION = 'Your custom description here';
```

## 📰 Recent Updates System

### Configuration

```typescript
export const RECENT_UPDATES = [
  '• New cybersecurity tutorial series uploaded to the archive',
  '• Hacker tools discussion board now available',
  '• Python implementation examples added to code section',
  '• Weekly tech industry analysis starting this Sunday',
  '• AI development tools and frameworks now online',
];
```

### Adding/Updating News Items

Simply edit the array in `src/consts.ts`:

```typescript
export const RECENT_UPDATES = [
  '• Your latest news item here',
  '• Another important update',
  '• New feature announcement',
  '• Tutorial series launch',
  '• Community milestone reached',
];
```

**Best Practices:**
- Start each item with `•` for consistency with BBS aesthetic
- Keep items concise (under 80 characters for best display)
- Order most recent items first
- Use present tense for ongoing items, past tense for completed ones
- Maintain the underground/hacker culture tone

## 🦶 Footer Configuration

The footer system supports different content for each page type while sharing common elements.

### Structure

```typescript
export const FOOTER_CONFIG = {
  // Page-specific footers
  home: { statusLine, promptText },
  blog: { statusLine, promptText },
  about: { statusLine, promptText },
  post: { statusLine, promptText },
  
  // Shared across all pages
  common: { copyright, sysop, cosysop, systemName, fidonet },
};
```

### Page-Specific Footers

**Home Page:**
```typescript
home: {
  statusLine: 'Connected at 56k baud • Session Time: 00:12:45 • Credits: 2,048',
  promptText: 'Press any key to continue',
},
```

**Blog Archive:**
```typescript
blog: {
  statusLine: 'Archive Access • Session Active • Browse Mode',
  promptText: 'Select article to read',
},
```

**About Page:**
```typescript
about: {
  statusLine: 'System Information • User Profile Active',
  promptText: 'Press ESC to return to main menu',
},
```

**Individual Blog Posts:**
```typescript
post: {
  statusLine: 'Article Access Complete • Session Active',
  promptText: 'Ready for next command',
},
```

### Shared Footer Content

```typescript
common: {
  copyright: 'NeuralKnot.ai BBS © 2024',
  sysop: 'TechHacker',
  cosysop: 'CodeWeaver',
  systemName: 'GruvNet v2.0',
  fidonet: 'FidoNet 2:404/1337',
},
```

**Customization Options:**

- **Copyright**: Update year and site name
- **SysOp Names**: Use authentic BBS-style handles
- **System Name**: Create your own BBS system name
- **FidoNet**: Maintain retro addressing or create custom network ID

### BBS Culture Guidelines

When customizing footer content, maintain authentic BBS culture:

- **SysOp Names**: Use handles like "CodeMaster", "CyberWizard", "TechGuru"
- **Status Lines**: Reference connection speeds, session time, credits
- **Prompt Text**: Use classic BBS prompts and commands
- **System Names**: Reference networking (Net, Grid, Link) or tech terms

## 🎨 Theme Integration

While themes are configured separately, some constants work with the theme system:

### Theme-Aware Content

The footer and status messages automatically adapt to theme colors through CSS variables:

```css
.footer {
  color: var(--fg3);
  border-top: double 3px var(--fg1);
}
```

This means your custom footer text will automatically work with all 13 available themes.

## 🔍 SEO Configuration

The blog includes a comprehensive SEO system for optimal search visibility and social media sharing.

### Central SEO Configuration (`src/config/seo.ts`)

**Site-wide SEO defaults:**
```typescript
export const SEO_CONFIG = {
  siteName: 'NeuralKnot.ai BBS',
  siteUrl: 'https://neuralknot.ai',
  defaultTitle: 'NeuralKnot.ai BBS - Terminal Access',
  defaultDescription: 'Tech Terminal - Software Development, Hacking Culture, AI & Cybersecurity',
  defaultKeywords: ['software development', 'hacking culture', 'cybersecurity', 'AI development'],
  defaultAuthor: 'NeuralKnot.ai',
  twitterHandle: '@neuralknot',
  defaultOgImage: '/og-default.jpg',
  themeColor: '#98971a',
};
```

**Customization:**
- Update URLs to match your domain
- Modify default descriptions and keywords
- Set social media handles
- Configure Open Graph images
- Adjust theme colors for mobile browsers

### Enhanced Content Schema

**Blog posts support optional SEO overrides:**
```markdown
---
title: 'Your Post Title'
description: 'Brief description'
pubDate: 'Aug 29 2024'

# Enhanced SEO (all optional)
seo:
  metaTitle: 'Custom SEO Title (60 chars max)'
  metaDescription: 'Custom meta description (160 chars max)'
  keywords: ['custom', 'keywords', 'here']
  ogImage: '/custom-social-image.jpg'
  ogImageAlt: 'Description of social image'
  author: 'Custom Author Name'
  canonical: 'https://yoursite.com/custom-url'
  noindex: false
  nofollow: false
---
```

**Field Guidelines:**
- **metaTitle**: Keep under 60 characters for search results
- **metaDescription**: 150-160 characters optimal for search snippets
- **keywords**: 3-8 relevant terms, no keyword stuffing
- **ogImage**: 1200x630px for optimal social media display
- **canonical**: Use for duplicate content or preferred URLs

### Structured Data

**Automatic generation for:**
- **Article Schema**: Blog posts get structured data for rich snippets
- **Website Schema**: Site-wide organization and navigation markup
- **BreadcrumbList**: Automatic breadcrumb navigation
- **Person Schema**: Author information and social profiles

**Benefits:**
- Enhanced search result appearance
- Better social media link previews
- Improved search engine understanding
- Featured snippet eligibility

### Social Media Optimization

**Open Graph Tags:**
- Dynamic title and description generation
- Automatic image optimization
- Site branding consistency
- Article-specific metadata

**Twitter Cards:**
- Summary card with large image
- Author attribution
- Site handle integration
- Custom card types per content

### BBS-Themed SEO Keywords

**Automatic keyword enhancement with:**
```typescript
const BBS_KEYWORDS = [
  'terminal computing', 'bulletin board system', 'retro computing',
  'hacker culture', 'command line', 'tech terminal', 'ANSI art',
  'vintage computing', 'system administration', 'cybersecurity'
];
```

These keywords are automatically merged with your custom keywords to maintain the BBS aesthetic in search results.

### SEO Configuration Workflow

1. **Set site defaults** in `src/config/seo.ts`
2. **Customize per post** using `seo` frontmatter fields (optional)
3. **Test with browser dev tools** to verify meta tags
4. **Validate structured data** with Google's Rich Results Test
5. **Check social previews** with Facebook Debugger or Twitter Card Validator

## 🔄 Dynamic Content Updates

### Homepage Sections

Several homepage sections pull from configuration:

**Articles Section:**
- Uses `SITE_DESCRIPTION` context
- Displays recent blog posts automatically
- Category labels from configuration

**Stats Boxes:**
- Terminal status (nodes, users online)
- Knowledge base stats (articles, tutorials, repos)
- All numbers can be customized in the template

**Recent Updates:**
- Pulls from `RECENT_UPDATES` array
- Updates automatically when array is modified
- No template editing required

## 📝 Configuration Workflow

### Making Changes

1. **Edit** `src/consts.ts` with your desired changes
2. **Save** the file
3. **Restart** development server if running (`pnpm dev`)
4. **Refresh** browser to see changes

### Testing Changes

- **Local Development**: Changes appear immediately
- **Production Build**: Run `pnpm build` to test
- **Multiple Pages**: Check home, blog, and individual posts
- **All Themes**: Test with different color themes

## 🛠️ Advanced Configuration

### Environment-Based Configuration

For different environments (development, staging, production):

```typescript
const isDevelopment = process.env.NODE_ENV === 'development';

export const SITE_TITLE = isDevelopment 
  ? 'NeuralKnot.ai BBS - DEV MODE'
  : 'NeuralKnot.ai BBS - Terminal Access';
```

### Conditional Content

```typescript
export const RECENT_UPDATES = [
  '• Latest production update',
  ...(isDevelopment ? ['• Development mode active'] : []),
];
```

### Custom Footer Functions

For more dynamic footer content:

```typescript
export const getFooterStatus = () => {
  const now = new Date();
  const sessionTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  
  return `Connected at 56k baud • Session Time: ${sessionTime} • Credits: 2,048`;
};
```

## 📊 Content Management

### Blog Metadata

Configure default values for blog posts:

```typescript
export const BLOG_DEFAULTS = {
  author: 'NeuralHacker',
  category: 'Tech',
  defaultImage: '/blog-images/default.jpg',
};
```

### Navigation Labels

Centralize navigation text:

```typescript
export const NAV_LABELS = {
  home: '[H] Home Terminal',
  blog: '[B] Blog Archives', 
  about: '[A] About System',
};
```

## 🎯 Best Practices

### Configuration Organization

- **Group related constants** together
- **Use descriptive names** for variables
- **Add comments** for complex configurations
- **Keep BBS aesthetic** in all text content

### Content Guidelines

- **Maintain consistency** across all footer messages
- **Use authentic terminology** (baud rates, session time, credits)
- **Keep text concise** for terminal display
- **Test on all page types** after changes

### Version Control

- **Commit configuration changes** separately from code changes
- **Document major changes** in commit messages
- **Test thoroughly** before deploying
- **Keep backups** of working configurations

## 📊 Homepage Statistics

### Terminal Status Configuration

```typescript
export const TERMINAL_STATUS = {
  title: 'TERMINAL STATUS',
  stats: [
    '3 Nodes Active',
    '7 Hackers Online', 
    '2,048 Total Users',
  ],
};
```

**Customization:**
- **Title**: Change the section header
- **Stats Array**: Add, remove, or modify status items
- **BBS Theme**: Use authentic terminal/network terminology

**Examples:**
```typescript
export const TERMINAL_STATUS = {
  title: 'SYSTEM STATUS',
  stats: [
    '5 Nodes Online',
    '12 Elite Users',
    '3,141 Total Logins',
    'Uptime: 99.9%',
  ],
};
```

### Knowledge Base Configuration  

```typescript
export const KNOWLEDGE_BASE = {
  title: 'KNOWLEDGE BASE',
  stats: [
    '1,337 Articles',
    '420 Tutorials', 
    '69 Code Repos',
  ],
};
```

**Customization:**
- **Title**: Rename the section (Archive, Database, Library, etc.)
- **Stats Array**: Update counts and categories
- **Categories**: Match your content types

**Examples:**
```typescript
export const KNOWLEDGE_BASE = {
  title: 'CODE ARCHIVE',
  stats: [
    '2,048 Scripts',
    '512 Exploits',
    '256 Tools',
    '128 Tutorials',
  ],
};
```

### Statistics Guidelines

**BBS Culture Numbers:**
- Use hacker culture references (1337, 420, 69, 2048)  
- Reference computing milestones (256, 512, 1024)
- Include network/system terminology
- Maintain the underground aesthetic

**Dynamic Content:**
For real-time stats, you can calculate values:

```typescript
export const getKnowledgeBaseStats = async () => {
  const posts = await getCollection('blog');
  return {
    title: 'KNOWLEDGE BASE',
    stats: [
      `${posts.length} Articles`,
      `${posts.filter(p => p.data.category === 'tutorial').length} Tutorials`,
      '69 Code Repos', // Static or from API
    ],
  };
};
```

## 🔍 Troubleshooting

### Common Issues

**Updates not appearing:**
- Restart development server
- Clear browser cache
- Check for syntax errors in `consts.ts`

**Footer not updating:**
- Verify imports in page templates
- Check for typos in constant names
- Ensure consistent formatting

**Theme conflicts:**
- Footer content should work with all themes
- Avoid hardcoded colors in configuration
- Test with multiple themes

## 📚 Related Documentation

- **[Main README](../README.md)** - Project overview and setup
- **[Theme Creation Guide](THEME_CREATION_GUIDE.md)** - Creating custom themes
- **[Content Guide](CONTENT_GUIDE.md)** - Managing blog content

---

**Configuration complete. System ready for customization.** 🔧