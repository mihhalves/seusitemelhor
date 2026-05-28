/**
 * Smooth Scroll Component
 * Enables smooth scrolling for anchor links
 */

export class SmoothScroll {
  constructor(options = {}) {
    this.options = {
      behavior: options.behavior || 'smooth',
      block: options.block || 'start',
      selector: options.selector || 'a[href^="#"]'
    };
    
    this.init();
  }
  
  init() {
    document.querySelectorAll(this.options.selector).forEach(link => {
      link.addEventListener('click', (e) => this.handleScroll(e));
    });
  }
  
  handleScroll(e) {
    const href = e.currentTarget.getAttribute('href');
    
    // Skip if it's just "#" or empty
    if (!href || href === '#') return;
    
    const target = document.querySelector(href);
    
    if (target) {
      e.preventDefault();
      
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : this.options.behavior,
        block: this.options.block
      });
    }
  }
}
