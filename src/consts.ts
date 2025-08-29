// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "NeuralKnot.ai BBS - Terminal Access";
export const SITE_DESCRIPTION =
  "Tech Terminal - Software Development, Hacking Culture, AI & Cybersecurity";

// Footer Configuration
export const FOOTER_CONFIG = {
  // Main page footer
  home: {
    statusLine:
      "Connected at 56k baud • Session Time: 00:12:45 • Credits: 2,048",
    promptText: "Press any key to continue",
  },

  // Blog archive page footer
  blog: {
    statusLine: "Archive Access • Session Active • Browse Mode",
    promptText: "Select article to read",
  },

  // About page footer
  about: {
    statusLine: "System Information • User Profile Active",
    promptText: "Press ESC to return to main menu",
  },

  // Blog post footer
  post: {
    statusLine: "Article Access Complete • Session Active",
    promptText: "Ready for next command",
  },

  // Shared footer content
  common: {
    copyright: "NeuralKnot.ai BBS © 2024",
    sysop: "TechHacker",
    cosysop: "CodeWeaver",
    systemName: "GruvNet v2.0",
    fidonet: "FidoNet 2:404/1337",
  },
};

// Recent Updates Configuration
export const RECENT_UPDATES = [
  "• New cybersecurity tutorial series uploaded to the archive",
  "• Hacker tools discussion board now available",
  "• Python implementation examples added to code section",
  "• Weekly tech industry analysis starting this Sunday",
  "• AI development tools and frameworks now online",
];

// Terminal Status Configuration
export const TERMINAL_STATUS = {
  title: "SYSTEM STATUS",
  stats: ["8 Nodes Active", "16 Elite Users", "Uptime: 99.9%"],
};

// Knowledge Base Configuration
export const KNOWLEDGE_BASE = {
  title: "KNOWLEDGE BASE",
  stats: ["1,337 Articles", "512 Tutorials", "256 Code Repos"],
};
