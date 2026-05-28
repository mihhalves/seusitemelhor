/**
 * Counter Animation Component
 * Animates number counters when they come into view
 */

export class CounterAnimation {
  constructor(options = {}) {
    this.options = {
      selector: options.selector || '.stat-item h3',
      duration: options.duration || 1200,
      threshold: options.threshold || 0.5
    };
    
    this.init();
  }
  
  init() {
    const counters = document.querySelectorAll(this.options.selector);
    
    if (counters.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: this.options.threshold });
    
    counters.forEach(counter => observer.observe(counter));
  }
  
  animateCounter(element) {
    const text = element.textContent.trim();
    
    // Extract number and prefix/suffix (e.g., "+150+", "98%", "R$ 500")
    const match = text.match(/^([+]?[R$]*\s?)(\d+)(.*)$/);
    if (!match) return;
    
    const prefix = match[1];
    const targetNum = parseInt(match[2], 10);
    const suffix = match[3];
    
    let current = 0;
    const startTime = performance.now();
    
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    
    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / this.options.duration, 1);
      const eased = easeOutCubic(progress);
      
      current = Math.round(eased * targetNum);
      element.textContent = prefix + current + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    
    requestAnimationFrame(update);
  }
}
