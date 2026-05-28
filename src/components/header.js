/**
 * Header Component
 * Reusable header with navigation, theme toggle, and mobile menu
 */

export function createHeader() {
  const header = document.createElement('header');
  header.className = 'header';
  header.id = 'header';
  
  header.innerHTML = `
    <div class="container">
      <a href="./index.html" class="logo" aria-label="seusitemelhor.com.br">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect width="36" height="36" rx="8" fill="var(--color-primary)"/>
          <path d="M18.5 10C14.5 10 12 12.5 12 15c0 3.5 4 4 6.5 5 2 .8 3.5 1.5 3.5 3.5 0 1.5-1.5 2.5-3.5 2.5-2.5 0-4-1.5-4.5-3.5" stroke="var(--color-accent)" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M18 8v2M18 26v2" stroke="var(--color-accent)" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span>seusitemelhor<span style="color: var(--color-accent)">.com.br</span></span>
      </a>

      <nav class="nav-desktop" aria-label="Navegação principal">
        <a href="./index.html" class="nav-link">Início</a>
        <a href="./portfolio.html" class="nav-link">Portfólio</a>
        <a href="./sobre.html" class="nav-link">Sobre</a>
        <a href="./contato.html" class="nav-link">Contato</a>
      </nav>

      <div class="nav-actions">
        <button class="theme-toggle" data-theme-toggle aria-label="Alternar tema claro/escuro">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <a href="#contato" class="btn btn-primary btn-sm nav-cta">Fale Conosco</a>
        <button class="mobile-menu-btn" aria-label="Abrir menu" aria-expanded="false">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </div>

    <!-- Mobile Nav -->
    <nav class="mobile-nav" aria-label="Menu móvel">
      <a href="./index.html" class="nav-link">Início</a>
      <a href="./portfolio.html" class="nav-link">Portfólio</a>
      <a href="./sobre.html" class="nav-link">Sobre</a>
      <a href="./contato.html" class="nav-link">Contato</a>
      <a href="#contato" class="btn btn-primary" style="margin-top: var(--space-4);">Fale Conosco</a>
    </nav>
  `;
  
  return header;
}

export function initHeader() {
  const header = document.getElementById('header');
  if (!header) return;
  
  // Header scroll behavior
  let lastScrollY = 0;
  let ticking = false;

  function updateHeader() {
    const scrollY = window.scrollY;

    if (scrollY > 100) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }

    // Hide header on scroll down, show on scroll up
    if (scrollY > lastScrollY && scrollY > 200) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
    }

    lastScrollY = scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });
}
