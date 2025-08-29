# Color Theme System - Quick Guide

## 🎨 Your site now has a modular color theme system

The color variables have been extracted from `src/styles/global.css` into separate theme files in `src/styles/themes/`.

## 🔄 How to Switch Themes

**To change your site's color theme:**

1. **Open** `src/styles/global.css`
2. **Find this line** (around line 4):

   ```css
   @import "./themes/gruvbox-dark.css";
   ```

3. **Replace** with any of these themes:

   ```css
   @import "./themes/gruvbox-dark.css"; /* Default dark theme */
   @import "./themes/gruvbox-light.css"; /* Light theme */
   @import "./themes/cyberpunk.css"; /* Neon cyberpunk */
   @import "./themes/terminal-green.css"; /* Classic terminal */
   @import "./themes/dracula.css"; /* Popular dark theme */
   @import "./themes/catppuccin-latte.css"; /* Light pastels */
   @import "./themes/catppuccin-frappe.css"; /* Dark pastels */
   @import "./themes/catppuccin-macchiato.css"; /* Medium dark pastels */
   @import "./themes/catppuccin-mocha.css"; /* Darkest pastels */
   @import "./themes/tokyo-night.css"; /* Tokyo night theme */
   @import "./themes/tokyo-night-storm.css"; /* Tokyo night storm */
   ```

4. **Save** and refresh your browser

## 📁 Available Themes

| Theme                        | Description                                      |
| ---------------------------- | ------------------------------------------------ |
| **gruvbox-dark.css**         | Your current theme - warm, retro dark colors     |
| **gruvbox-light.css**        | Light version with cream background              |
| **cyberpunk.css**            | Neon colors on pure black background             |
| **terminal-green.css**       | Classic green-on-black terminal                  |
| **dracula.css**              | Popular dark theme with purple accents           |
| **catppuccin-latte.css**     | Light pastel theme with soft, warm colors        |
| **catppuccin-frappe.css**    | Dark pastel theme with gentle contrast           |
| **catppuccin-macchiato.css** | Medium dark with balanced pastel tones           |
| **catppuccin-mocha.css**     | Darkest variant with rich, cozy pastels          |
| **tokyo-night.css**          | Dark theme inspired by Tokyo's neon-lit streets  |
| **tokyo-night-storm.css**    | Tokyo Night with better contrast and readability |

## ✨ Creating Custom Themes

**To create your own theme:**

1. **Copy** an existing theme:

   ```bash
   cp src/styles/themes/gruvbox-dark.css src/styles/themes/my-theme.css
   ```

2. **Edit the colors** in your new file:

   ```css
   :root {
     --bg0: #your-background-color;
     --fg1: #your-text-color;
     --yellow: #your-heading-color;
     /* ... etc */
   }
   ```

3. **Switch to it** in `global.css`:

   ```css
   @import "./themes/my-theme.css";
   ```

## 🎯 Color Variables

Each theme uses the same variable names:

- **Backgrounds**: `--bg0` to `--bg4` (darkest to lightest)
- **Text**: `--fg0` to `--fg4` (brightest to dimmest)
- **Accents**: `--red`, `--green`, `--yellow`, `--blue`, `--purple`, `--aqua`, `--orange`
- **Dimmed**: `--red-dim`, `--green-dim`, etc.

## 🚀 Test Your Themes

After switching themes, check:

- Homepage at `http://localhost:4321/`
- Blog posts at `http://localhost:4321/blog/markdown-style-guide/`
- Make sure all colors look good together

## 📖 Full Documentation

See `src/styles/themes/README.md` for complete documentation including:

- Detailed theme descriptions
- Advanced features like dynamic switching
- Theme creation guidelines
- Accessibility considerations

---

**Your site's colors are now fully modular and easy to customize!** 🎨
