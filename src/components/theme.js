/**
 * Theme Manager
 * Handles dark/light mode toggle with system preference detection
 */

export class ThemeManager {
  constructor() {
    this.toggle = document.querySelector('[data-theme-toggle]');
    this.root = document.documentElement;
    this.currentTheme = this.getInitialTheme();
    
    this.init();
  }
  
  getInitialTheme() {
    // Check localStorage first
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  init() {
    this.applyTheme(this.currentTheme);
    this.updateToggleIcon();
    
    if (this.toggle) {
      this.toggle.addEventListener('click', () => this.toggleTheme());
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.currentTheme = e.matches ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        this.updateToggleIcon();
      }
    });
  }
  
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', this.currentTheme);
    this.applyTheme(this.currentTheme);
    this.updateToggleIcon();
  }
  
  applyTheme(theme) {
    this.root.setAttribute('data-theme', theme);
  }
  
  updateToggleIcon() {
    if (!this.toggle) return;
    
    this.toggle.setAttribute('aria-label', 'Alternar para modo ' + (this.currentTheme === 'dark' ? 'claro' : 'escuro'));
    
    if (this.currentTheme === 'dark') {
      this.toggle.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    } else {
      this.toggle.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  }
}
