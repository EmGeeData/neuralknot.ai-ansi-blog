# Blog Post Template

Copy this template to create new blog posts in `src/content/blog/your-post-name.md`:

```markdown
---
title: 'Your Post Title Here'
description: 'Brief description for SEO and social sharing previews'
pubDate: 'Aug 29 2024'
heroImage: '../../assets/your-image.jpg'  # Optional - remove if no image
category: 'software-development'  # Optional - see categories below
tags: ['javascript', 'tutorial', 'web-dev']  # Optional - array of tags
featured: false  # Optional - highlight this post
draft: false     # Optional - hide from production

# 🚀 Enhanced SEO Fields (All Optional)
seo:
  metaTitle: 'Custom SEO Title (60 chars max)'
  metaDescription: 'Custom meta description for search engines (160 chars max)'
  keywords: ['seo', 'custom', 'keywords']
  ogImage: '/custom-social-image.jpg'
  ogImageAlt: 'Description of your social media image'
  author: 'Your Name'
  articleSection: 'Technology'
  canonical: 'https://yoursite.com/custom-canonical-url'
  noindex: false
  nofollow: false
---

# Your Post Title

Your introduction paragraph here...

## Section Heading

Your content using standard Markdown:

- Bullet points work
- **Bold text** and *italic text*
- `inline code` and code blocks:

```bash
echo "Code blocks are styled for the terminal theme"
```

> Blockquotes are styled with the purple accent

### Subsection

More content...

## Images

![Alt text](../../assets/your-image.jpg)
<!-- Images will automatically be responsive thanks to our JavaScript fix -->

## Conclusion

Wrap up your post...
```

## 📋 Available Categories

- `software-development` - Programming, frameworks, tools
- `cybersecurity` - Security research, vulnerabilities
- `artificial-intelligence` - AI/ML research and applications
- `hacking-culture` - Hacker culture, ethics, community
- `programming-tutorials` - Step-by-step coding guides
- `tech-analysis` - Industry analysis, reviews
- `tools-reviews` - Software/hardware reviews
- `industry-news` - Tech industry updates

## 🚀 Enhanced SEO Fields

Use the `seo` object for advanced SEO customization:

- **`metaTitle`**: Custom SEO title (max 60 characters)
- **`metaDescription`**: Custom meta description (max 160 characters)  
- **`keywords`**: Array of keywords for this post
- **`ogImage`**: Custom Open Graph/social media image
- **`ogImageAlt`**: Alt text for social media image
- **`author`**: Override default author name
- **`articleSection`**: Article section for structured data
- **`canonical`**: Custom canonical URL if needed
- **`noindex`**: Set to `true` to exclude from search engines
- **`nofollow`**: Set to `true` for nofollow directive

## 💡 SEO Tips

- Most posts work great with just title, description, and pubDate
- Use custom SEO fields only when you need specific optimization
- The system automatically generates social media cards and structured data
- Keywords are enhanced with site-wide BBS/tech themed terms

## File Naming Convention

Use kebab-case for filenames:
- `my-awesome-post.md`
- `terminal-basics-guide.md` 
- `retro-computing-deep-dive.md`
- `neural-network-analysis.md`

## Workflow

1. Create new `.md` file in `src/content/blog/`
2. Add frontmatter and content using the template above
3. Add any images to `src/assets/`
4. The blog will automatically pick up new posts
5. Posts appear on `/blog` and are accessible via `/blog/your-post-name/`
6. SEO metadata and structured data are generated automatically