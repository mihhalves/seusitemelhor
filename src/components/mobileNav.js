/**
 * Mobile Navigation Component
 * Handles mobile menu toggle and interactions
 */

export class MobileNav {
  constructor() {
    this.menuBtn = document.querySelector('.mobile-menu-btn');
    this.mobileNav = document.querySelector('.mobile-nav');
    this.isOpen = false;
    
    if (this.menuBtn && this.mobileNav) {
      this.init();
    }
  }
  
  init() {
    this.menuBtn.addEventListener('click', () => this.toggle());
    
    // Close mobile nav when clicking a link
    this.mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => this.close());
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isOpen && !this.mobileNav.contains(e.target) && !this.menuBtn.contains(e.target)) {
        this.close();
      }
    });
  }
  
  toggle() {
    this.isOpen = !this.isOpen;
    this.update();
  }
  
  open() {
    this.isOpen = true;
    this.update();
  }
  
  close() {
    this.isOpen = false;
    this.update();
  }
  
  update() {
    this.mobileNav.classList.toggle('active', this.isOpen);
    this.menuBtn.setAttribute('aria-expanded', this.isOpen);
    
    // Toggle icon between hamburger and X
    if (this.isOpen) {
      this.menuBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
      this.mobileNav.setAttribute('aria-hidden', 'false');
    } else {
      this.menuBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
      this.mobileNav.setAttribute('aria-hidden', 'true');
    }
  }
}
