# NeuralKnot.ai BBS - Color Theme System

## 🎨 Available Themes

This directory contains color themes for your BBS terminal blog. Each theme defines the same CSS custom properties with different color values.

### Theme Files

| Theme | File | Description |
|-------|------|-------------|
| **Gruvbox Dark** | `gruvbox-dark.css` | Default dark theme with warm, retro colors |
| **Gruvbox Light** | `gruvbox-light.css` | Light version of Gruvbox for daytime reading |
| **Gruvbox Material Dark** | `gruvbox-material-dark.css` | Softer contrast for extended coding sessions |
| **Gruvbox Material Hard** | `gruvbox-material-hard.css` | Higher contrast Material variant |
| **Cyberpunk** | `cyberpunk.css` | Neon colors for a cyberpunk aesthetic |
| **Terminal Green** | `terminal-green.css` | Classic green terminal on black |
| **Dracula** | `dracula.css` | Popular dark theme with purple accents |
| **Catppuccin Latte** | `catppuccin-latte.css` | Light pastel theme with warm tones |
| **Catppuccin Frappé** | `catppuccin-frappe.css` | Dark pastel theme with soft contrast |
| **Catppuccin Macchiato** | `catppuccin-macchiato.css` | Medium dark with balanced pastels |
| **Catppuccin Mocha** | `catppuccin-mocha.css` | Darkest pastel theme with rich colors |
| **Tokyo Night** | `tokyo-night.css` | Dark theme inspired by downtown Tokyo at night |
| **Tokyo Night Storm** | `tokyo-night-storm.css` | Lighter variant with more contrast |

## 🔄 Switching Themes

To change the site's color theme:

1. Open `src/styles/global.css`
2. Change the import line:
   ```css
   /* Change this line to switch themes */
   @import './themes/gruvbox-dark.css';
   ```
3. Replace with your desired theme:
   ```css
   @import './themes/cyberpunk.css';
   ```
4. Save and refresh your browser

## 🎯 Color Variables

Each theme defines these CSS custom properties:

### Background Colors
- `--bg0` - Primary background (darkest)
- `--bg1` - Secondary background  
- `--bg2` - Tertiary background
- `--bg3` - Interface elements
- `--bg4` - Lighter interface elements

### Foreground Colors  
- `--fg0` - Primary text (brightest)
- `--fg1` - Secondary text
- `--fg2` - Tertiary text  
- `--fg3` - Muted text
- `--fg4` - Dimmed text

### Accent Colors
- `--red` - Error states, alerts
- `--green` - Success, terminal borders
- `--yellow` - Headings, highlights
- `--blue` - Links, info states
- `--purple` - Quotes, special elements
- `--aqua` - Navigation, secondary links
- `--orange` - Code, emphasis

### Dimmed Variants
- `--red-dim` - Subdued red
- `--green-dim` - Subdued green  
- `--yellow-dim` - Subdued yellow
- `--blue-dim` - Subdued blue
- `--purple-dim` - Subdued purple
- `--aqua-dim` - Subdued aqua
- `--orange-dim` - Subdued orange

## ✨ Creating Custom Themes

To create your own theme:

1. **Copy an existing theme file**:
   ```bash
   cp src/styles/themes/gruvbox-dark.css src/styles/themes/my-theme.css
   ```

2. **Edit the colors** in your new file:
   ```css
   /* My Custom Theme */
   :root {
       /* Background colors */
       --bg0: #your-color;
       --bg1: #your-color;
       /* ... update all colors */
   }
   ```

3. **Switch to your theme** in `global.css`:
   ```css
   @import './themes/my-theme.css';
   ```

### Theme Design Tips

- **Contrast**: Ensure sufficient contrast between bg0 and fg0
- **Hierarchy**: Background colors should get progressively lighter (dark themes) or darker (light themes)
- **Accessibility**: Test with accessibility tools
- **Terminal Feel**: Keep colors suitable for a retro/terminal aesthetic
- **Consistency**: Use the accent colors consistently across the site

## 🎨 Theme Previews

### Gruvbox Dark (Default)
- **Vibe**: Warm, cozy, retro
- **Background**: Dark brown/gray tones
- **Accents**: Muted rainbow colors

### Gruvbox Light  
- **Vibe**: Clean, professional, readable
- **Background**: Cream/beige tones
- **Accents**: Darker versions of Gruvbox colors

### Cyberpunk
- **Vibe**: Futuristic, neon, high-tech
- **Background**: Pure black with purple tints
- **Accents**: Bright neon colors

### Terminal Green
- **Vibe**: Classic retro computing
- **Background**: Black/dark green
- **Accents**: Green and amber terminal colors

### Dracula
- **Vibe**: Dark, elegant, developer-friendly  
- **Background**: Dark purple-gray
- **Accents**: Bright pastel colors

### Catppuccin Latte
- **Vibe**: Light, soft, pastel elegance
- **Background**: Warm cream and light gray
- **Accents**: Muted pastel colors

### Catppuccin Frappé  
- **Vibe**: Dark pastels with gentle contrast
- **Background**: Medium dark blue-gray
- **Accents**: Soft pastel colors

### Catppuccin Macchiato
- **Vibe**: Balanced dark theme with warmth
- **Background**: Dark but not harsh
- **Accents**: Rich pastel tones

### Catppuccin Mocha
- **Vibe**: Deep, rich, cozy darkness
- **Background**: Very dark with subtle tints
- **Accents**: Vibrant but smooth pastels

### Tokyo Night
- **Vibe**: Urban nightlife, neon-lit streets
- **Background**: Deep blue-black like night sky
- **Accents**: Bright, saturated colors like city lights

### Tokyo Night Storm
- **Vibe**: Stormy night with better contrast
- **Background**: Slightly lighter than Tokyo Night
- **Accents**: Same vibrant colors with enhanced readability

## 🔧 Advanced Theme Features

### Dynamic Theme Switching

You can implement JavaScript-based theme switching:

```html
<script>
function switchTheme(themeName) {
    const themeLink = document.querySelector('link[href*="themes/"]');
    if (themeLink) {
        themeLink.href = `/src/styles/themes/${themeName}.css`;
    }
}
</script>
```

### Theme Persistence

Store theme preference in localStorage:

```javascript
// Save theme preference
localStorage.setItem('bbs-theme', 'cyberpunk');

// Load saved theme on page load
const savedTheme = localStorage.getItem('bbs-theme') || 'gruvbox-dark';
switchTheme(savedTheme);
```

### CSS Custom Property Animation

Smooth theme transitions:

```css
:root {
    transition: background-color 0.3s ease,
                color 0.3s ease;
}
```

## 🎮 Theme Testing

Test your themes across different content:

- Blog post pages (`/blog/markdown-style-guide/`)
- Blog index (`/blog`)
- Homepage (`/`)
- Different screen sizes
- Light and dark system preferences

## 🚀 Contributing Themes

Have a cool theme? Consider adding it to the collection:

1. Create your theme file
2. Add it to this README
3. Test it thoroughly
4. Share it with the community!

---

**Current Active Theme**: Check `src/styles/global.css` import statement