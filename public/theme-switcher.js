// Dynamic Theme Switcher for NeuralKnot.ai BBS
// Switches CSS theme files dynamically and persists selection

const THEMES = {
  'gruvbox-dark': 'Gruvbox Dark',
  'gruvbox-light': 'Gruvbox Light', 
  'gruvbox-material-dark': 'Gruvbox Material Dark',
  'gruvbox-material-hard': 'Gruvbox Material Hard',
  'cyberpunk': 'Cyberpunk',
  'terminal-green': 'Terminal Green',
  'dracula': 'Dracula',
  'catppuccin-latte': 'Catppuccin Latte',
  'catppuccin-frappe': 'Catppuccin Frappé',
  'catppuccin-macchiato': 'Catppuccin Macchiato',
  'catppuccin-mocha': 'Catppuccin Mocha',
  'tokyo-night': 'Tokyo Night',
  'tokyo-night-storm': 'Tokyo Night Storm'
};

// Get or create theme link element
function getThemeLink() {
  let themeLink = document.querySelector('link[data-theme-link]');
  if (!themeLink) {
    // Find existing theme import or create new one
    themeLink = document.querySelector('link[href*="/themes/"]') || 
               document.querySelector('style[data-theme-style]');
    
    if (!themeLink) {
      // Create new link element
      themeLink = document.createElement('link');
      themeLink.rel = 'stylesheet';
      themeLink.setAttribute('data-theme-link', 'true');
      document.head.appendChild(themeLink);
    } else if (themeLink.tagName === 'STYLE') {
      // Replace inline style with link
      const newLink = document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.setAttribute('data-theme-link', 'true');
      themeLink.parentNode.replaceChild(newLink, themeLink);
      themeLink = newLink;
    } else {
      themeLink.setAttribute('data-theme-link', 'true');
    }
  }
  return themeLink;
}

// Switch to a new theme
function switchTheme(themeName) {
  if (!THEMES[themeName]) {
    console.error(`Theme "${themeName}" not found`);
    return;
  }

  const themeLink = getThemeLink();
  const newHref = `/src/styles/themes/${themeName}.css`;
  
  // Add loading class to body for transition effect
  document.body.classList.add('theme-switching');
  
  // Create temporary link to preload theme
  const tempLink = document.createElement('link');
  tempLink.rel = 'stylesheet';
  tempLink.href = newHref;
  
  tempLink.onload = () => {
    // Switch to new theme
    themeLink.href = newHref;
    
    // Save preference
    localStorage.setItem('bbs-theme', themeName);
    
    // Update dropdown selection
    const dropdown = document.querySelector('#theme-selector');
    if (dropdown) {
      dropdown.value = themeName;
    }
    
    // Remove loading state
    setTimeout(() => {
      document.body.classList.remove('theme-switching');
      document.head.removeChild(tempLink);
    }, 100);
    
    console.log(`Switched to theme: ${THEMES[themeName]}`);
  };
  
  tempLink.onerror = () => {
    console.error(`Failed to load theme: ${themeName}`);
    document.body.classList.remove('theme-switching');
    document.head.removeChild(tempLink);
  };
  
  document.head.appendChild(tempLink);
}

// Get current theme from localStorage or default
function getCurrentTheme() {
  const saved = localStorage.getItem('bbs-theme');
  if (saved && THEMES[saved]) {
    return saved;
  }
  
  // Try to detect current theme from existing link
  const currentLink = document.querySelector('link[href*="/themes/"]');
  if (currentLink) {
    const href = currentLink.href;
    for (const [key, name] of Object.entries(THEMES)) {
      if (href.includes(`${key}.css`)) {
        return key;
      }
    }
  }
  
  return 'terminal-green'; // Default theme
}

// Initialize theme system
function initThemeSystem() {
  // Load saved theme
  const currentTheme = getCurrentTheme();
  
  // Apply theme if different from current
  const themeLink = getThemeLink();
  const expectedHref = `/src/styles/themes/${currentTheme}.css`;
  
  if (!themeLink.href || !themeLink.href.includes(`${currentTheme}.css`)) {
    switchTheme(currentTheme);
  }
  
  console.log(`Theme system initialized. Current theme: ${THEMES[currentTheme]}`);
}

// Create theme selector dropdown
function createThemeSelector() {
  const selector = document.createElement('select');
  selector.id = 'theme-selector';
  selector.className = 'theme-selector';
  
  // Add default option
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = '── THEME SELECT ──';
  defaultOption.disabled = true;
  selector.appendChild(defaultOption);
  
  // Add theme options
  for (const [key, name] of Object.entries(THEMES)) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = name;
    selector.appendChild(option);
  }
  
  // Set current selection
  selector.value = getCurrentTheme();
  
  // Handle theme changes
  selector.addEventListener('change', (e) => {
    if (e.target.value) {
      switchTheme(e.target.value);
    }
  });
  
  return selector;
}

// Add CSS for theme selector
function addThemeSelectorStyles() {
  if (document.querySelector('#theme-selector-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'theme-selector-styles';
  style.textContent = `
    .theme-selector {
      background: var(--bg0);
      color: var(--fg1);
      border: 2px solid var(--purple);
      padding: 0.3em 0.5em;
      font-family: 'Perfect DOS VGA', 'Courier New', monospace;
      font-size: 0.8em;
      margin-left: 1em;
      cursor: pointer;
      transition: all 0.1s;
    }
    
    .theme-selector:hover {
      background: var(--purple);
      color: var(--bg0);
    }
    
    .theme-selector:focus {
      outline: 2px solid var(--yellow);
      outline-offset: 2px;
    }
    
    .theme-selector option {
      background: var(--bg0);
      color: var(--fg1);
      border: none;
    }
    
    body.theme-switching {
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    .theme-selector-container {
      display: inline-flex;
      align-items: center;
      gap: 0.5em;
    }
    
    .theme-selector-label {
      color: var(--purple);
      font-size: 0.8em;
    }
  `;
  
  document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initThemeSystem();
  addThemeSelectorStyles();
});

// Export functions for use in components
window.ThemeSwitcher = {
  switchTheme,
  getCurrentTheme,
  createThemeSelector,
  THEMES
};