/**
 * Scroll Reveal Component
 * Handles scroll-based animations with IntersectionObserver fallback
 */

export class ScrollReveal {
  constructor(options = {}) {
    this.options = {
      rootMargin: options.rootMargin || '0px 0px -60px 0px',
      threshold: options.threshold || 0.1,
      selector: options.selector || '.js-reveal'
    };
    
    this.supportsScrollTimeline = CSS.supports('animation-timeline', 'scroll()');
    
    if (!this.supportsScrollTimeline) {
      this.init();
    } else {
      this.makeVisible();
    }
  }
  
  init() {
    const elements = document.querySelectorAll(this.options.selector);
    
    if (elements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: this.options.rootMargin,
      threshold: this.options.threshold
    });
    
    elements.forEach(el => observer.observe(el));
  }
  
  makeVisible() {
    document.querySelectorAll(this.options.selector).forEach(el => {
      el.style.opacity = '1';
    });
  }
}
