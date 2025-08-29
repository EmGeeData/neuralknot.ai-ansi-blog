# NeuralKnot.ai BBS Blog - Content Creation Guide

## 🚀 Quick Start

To add new blog posts to your NeuralKnot.ai BBS terminal blog:

1. Create a new `.md` file in `src/content/blog/`
2. Use the template below
3. Write your content in Markdown
4. Run `npm run dev` to see it live

## 📝 Blog Post Template

Copy this template for new posts:

```markdown
---
title: 'Your Post Title Here'
description: 'Brief description for SEO and social media previews'
pubDate: 'Aug 29 2024'
heroImage: '../../assets/your-image.jpg'  # Optional - remove if no image
---

# Your Post Title

Your introduction paragraph here...

## Section Heading

Your content using standard Markdown:

- Bullet points work perfectly
- **Bold text** and *italic text*
- `inline code` for terminal commands
- Code blocks with syntax highlighting:

```bash
echo "This will look great in the terminal theme"
cd /your/directory
./run-script.sh
```

> Blockquotes are styled with the retro purple accent color

### Subsection

More content here...

## Images

![Alt text describing the image](../../assets/your-image.jpg)

Images are automatically responsive and properly centered.

## Links and References

[External links work](https://example.com) and fit the theme.

## Conclusion

Wrap up your research paper or tutorial...
```

## 📋 Frontmatter Fields

### Required Fields
- **`title`**: Your post title (appears in header and navigation)
- **`description`**: Brief summary for SEO and previews
- **`pubDate`**: Publication date in format `'MMM DD YYYY'` (e.g., 'Aug 29 2024')

### Optional Fields
- **`heroImage`**: Path to image in `src/assets/` folder
- **`updatedDate`**: Update date if you modify the post later

## 🎨 Content Guidelines for BBS Theme

Your blog has a retro terminal/BBS aesthetic. Content that fits well:

### 📡 Technical Topics
- Terminal and command-line tutorials
- Programming deep-dives and research
- Cybersecurity analysis and tools
- Network protocols and systems
- Retro computing and digital archaeology

### 🔬 Research Papers
- AI/ML research findings
- Systems analysis and performance
- Security vulnerability reports
- Protocol analysis and reverse engineering
- Technology retrospectives

### 💾 Style Guidelines
- Write in a technical, research-oriented tone
- Use code blocks liberally for commands and examples
- Include practical examples and implementations
- Reference sources and provide citations
- Use terminal/computing metaphors when appropriate

## 📁 File Organization

### File Naming
Use kebab-case (lowercase with dashes):
```
good-file-name.md
terminal-basics-guide.md
retro-computing-deep-dive.md
neural-network-analysis.md
```

### Directory Structure
```
src/
├── content/
│   └── blog/
│       ├── your-new-post.md       # Your blog posts here
│       ├── another-post.md
│       └── research-paper.md
├── assets/
│   ├── post-image-1.jpg          # Images for your posts
│   ├── diagram.png
│   └── screenshot.jpg
└── layouts/
    └── BlogPost.astro             # Layout (already configured)
```

## 🖼️ Working with Images

### Adding Images
1. Place images in `src/assets/` folder
2. Reference them in your Markdown:
   ```markdown
   ![Description](../../assets/your-image.jpg)
   ```
3. Images are automatically:
   - Optimized by Astro
   - Made responsive (80% width, centered)
   - Styled with terminal borders

### Image Guidelines
- Use descriptive alt text
- Prefer screenshots, diagrams, and technical illustrations
- Keep file sizes reasonable (< 2MB per image)
- Use `.jpg` for photos, `.png` for diagrams/screenshots

## ⚡ Development Workflow

### Local Development
```bash
# Start development server
npm run dev

# Your new posts will appear at:
# http://localhost:4321/blog/your-post-name/
```

### Building for Production
```bash
# Build the site
npm run build

# Preview built site
npm run preview
```

## 🎯 Content Ideas

### Research Papers
- "Analysis of Terminal Emulation Protocols"
- "Performance Benchmarking of CLI Tools" 
- "Security Analysis of Legacy BBS Systems"
- "Machine Learning for Text-Based Interfaces"

### Technical Tutorials
- "Advanced Shell Scripting Techniques"
- "Building Your Own Terminal Multiplexer"
- "Reverse Engineering Network Protocols"
- "Implementing Custom ASCII Art Renderers"

### Retrospectives
- "The Evolution of Bulletin Board Systems"
- "Terminal Computing: Past, Present, Future"
- "Digital Archaeology: Recovering Lost Code"
- "The Art of ASCII: Text-Based Graphics"

## 📡 Publishing Your Content

Once you create a new `.md` file:

1. **Automatic Detection**: Astro automatically detects new posts
2. **Blog Index**: Posts appear on `/blog` page
3. **Individual Pages**: Accessible at `/blog/your-post-name/`
4. **RSS Feed**: Automatically included in the site's RSS feed
5. **Terminal Styling**: All posts use the BBS terminal theme

## 🔧 Advanced Features

### Code Highlighting
Supports multiple languages:
```javascript
// JavaScript
function terminalGreeting() {
    console.log("Welcome to NeuralKnot BBS");
}
```

```python
# Python
def neural_network_analysis():
    print("Analyzing neural pathways...")
```

```rust
// Rust
fn main() {
    println!("System initialized");
}
```

### Mathematical Expressions
Use standard Markdown for math concepts, or HTML entities:
- Variables: `n`, `x₁`, `y²`
- Operations: `∑`, `∆`, `→`

### Terminal Commands
Style commands with code blocks:
```bash
# System analysis
top -p $(pgrep -f "neural")
netstat -tulpn | grep :8080
tail -f /var/log/system.log
```

## 🎨 Theme Colors Reference

Your terminal theme uses these colors:
- **Background**: Dark gruvbox tones
- **Text**: Light terminal green/white
- **Headings**: Terminal yellow
- **Links**: Cyan/aqua
- **Code**: Orange highlights
- **Borders**: Green terminal borders

Write content that embraces the retro computing aesthetic!

---

**Ready to publish your first post?** Create your `.md` file and start writing! 🚀