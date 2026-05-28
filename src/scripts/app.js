/**
 * Main Application Entry Point
 * Initializes all components and modules
 */

import { ThemeManager } from './components/theme.js';
import { MobileNav } from './components/mobileNav.js';
import { ScrollReveal } from './components/scrollReveal.js';
import { CounterAnimation } from './components/counter.js';
import { SmoothScroll } from './components/smoothScroll.js';
import { initHeader } from './components/header.js';

class App {
  constructor() {
    this.components = {};
  }
  
  init() {
    // Initialize theme manager (must be first for proper rendering)
    this.components.theme = new ThemeManager();
    
    // Initialize navigation
    this.components.mobileNav = new MobileNav();
    
    // Initialize header scroll behavior
    initHeader();
    
    // Initialize animations
    this.components.scrollReveal = new ScrollReveal();
    this.components.counterAnimation = new CounterAnimation();
    this.components.smoothScroll = new SmoothScroll();
    
    // Log initialization
    console.log('✅ seusitemelhor.com.br initialized');
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
  });
} else {
  const app = new App();
  app.init();
}

export default App;
