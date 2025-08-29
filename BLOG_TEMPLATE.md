# Blog Post Template

Copy this template to create new blog posts in `src/content/blog/your-post-name.md`:

```markdown
---
title: 'Your Post Title Here'
description: 'Brief description for SEO and social sharing previews'
pubDate: 'Aug 29 2024'
heroImage: '../../assets/your-image.jpg'  # Optional - remove if no image
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

## File Naming Convention

Use kebab-case for filenames:
- `my-awesome-post.md`
- `terminal-basics-guide.md` 
- `retro-computing-deep-dive.md`

## Workflow

1. Create new `.md` file in `src/content/blog/`
2. Add frontmatter and content
3. Add any images to `src/assets/`
4. The blog will automatically pick up new posts
5. Posts appear on `/blog` and are accessible via `/blog/your-post-name/`