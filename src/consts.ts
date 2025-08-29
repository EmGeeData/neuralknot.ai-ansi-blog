// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'NeuralKnot.ai BBS - Terminal Access';
export const SITE_DESCRIPTION = 'AI Research Terminal - Untangling Complexity';

// Footer Configuration
export const FOOTER_CONFIG = {
  // Main page footer
  home: {
    statusLine: 'Connected at 56k baud • Session Time: 00:12:45 • Credits: 2,048',
    promptText: 'Press any key to continue',
  },
  
  // Blog archive page footer
  blog: {
    statusLine: 'Archive Access • Session Active • Browse Mode',
    promptText: 'Select paper to read',
  },
  
  // About page footer
  about: {
    statusLine: 'System Information • User Profile Active',
    promptText: 'Press ESC to return to main menu',
  },
  
  // Blog post footer
  post: {
    statusLine: 'Paper Access Complete • Session Active',
    promptText: 'Ready for next command',
  },
  
  // Shared footer content
  common: {
    copyright: 'NeuralKnot.ai BBS © 2024',
    sysop: 'AIResearcher',
    cosysop: 'DeepMind',
    systemName: 'GruvNet v2.0',
    fidonet: 'FidoNet 2:404/1337',
  },
};
