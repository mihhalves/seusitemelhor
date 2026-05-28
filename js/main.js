/**
 * Premium Site JavaScript
 * Funcionalidades sofisticadas e interativas
 */

// ========================================
// INICIALIZAÇÃO
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileNav();
  initScrollAnimations();
  initSmoothScroll();
  initCounterAnimation();
  initParallax();
  initFormValidation();
});

// ========================================
// HEADER SCROLL EFFECT
// ========================================

function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Adiciona classe scrolled quando rola para baixo
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }, { passive: true });
}

// ========================================
// MOBILE NAVIGATION
// ========================================

function initMobileNav() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.mobile-nav .nav-link');

  if (!mobileMenuBtn || !mobileNav) return;

  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('active');
    
    mobileNav.classList.toggle('active');
    mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
    
    // Animação do ícone
    mobileMenuBtn.classList.toggle('open');
  });

  // Fecha menu ao clicar em link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.classList.remove('open');
    });
  });

  // Fecha menu ao clicar fora
  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
      mobileNav.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
      mobileMenuBtn.classList.remove('open');
    }
  });
}

// ========================================
// SCROLL ANIMATIONS (Intersection Observer)
// ========================================

function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  if (revealElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

// ========================================
// SMOOTH SCROLL PARA LINKS INTERNOS
// ========================================

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// COUNTER ANIMATION PARA STATS
// ========================================

function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-item h3');
  
  if (counters.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const animateCounter = (counter) => {
    const text = counter.textContent;
    const hasPlus = text.includes('+');
    const hasDays = text.includes('dias');
    const hasPercent = text.includes('%');
    
    // Extrai número
    const match = text.match(/[\d.]+/);
    if (!match) return;
    
    const target = parseFloat(match[0]);
    const duration = 2000; // 2 segundos
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += step;
      
      if (current < target) {
        let displayValue = Math.floor(current);
        
        if (hasPlus) displayValue += '+';
        else if (hasDays) displayValue += ' dias';
        else if (hasPercent) displayValue += '%';
        
        counter.textContent = displayValue;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = text;
      }
    };

    updateCounter();
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

// ========================================
// PARALLAX EFFECT SIMPLES
// ========================================

function initParallax() {
  const parallaxElements = document.querySelectorAll('.parallax');
  
  if (parallaxElements.length === 0) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.pageYOffset;

        parallaxElements.forEach(el => {
          const speed = el.dataset.speed || 0.5;
          const yPos = -(scrollY * speed);
          el.style.transform = `translateY(${yPos}px)`;
        });

        ticking = false;
      });

      ticking = true;
    }
  }, { passive: true });
}

// ========================================
// FORM VALIDATION
// ========================================

function initFormValidation() {
  const forms = document.querySelectorAll('.contact-form');

  forms.forEach(form => {
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          validateField(input);
        }
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      inputs.forEach(input => {
        if (!validateField(input)) {
          isValid = false;
        }
      });

      if (isValid) {
        // Simula envio
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
          const originalText = submitBtn.textContent;
          submitBtn.textContent = 'Enviando...';
          submitBtn.disabled = true;

          setTimeout(() => {
            submitBtn.textContent = 'Mensagem Enviada!';
            submitBtn.style.background = 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)';
            
            setTimeout(() => {
              form.reset();
              submitBtn.textContent = originalText;
              submitBtn.disabled = false;
              submitBtn.style.background = '';
            }, 3000);
          }, 1500);
        }
      }
    });
  });
}

function validateField(field) {
  const value = field.value.trim();
  const type = field.type;
  const isRequired = field.hasAttribute('required');

  if (isRequired && !value) {
    showError(field, 'Este campo é obrigatório');
    return false;
  }

  if (type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showError(field, 'Digite um email válido');
      return false;
    }
  }

  if (type === 'tel' && value) {
    const phoneRegex = /^[\d\s\-\(\)]+$/;
    if (!phoneRegex.test(value)) {
      showError(field, 'Digite um telefone válido');
      return false;
    }
  }

  clearError(field);
  return true;
}

function showError(field, message) {
  field.classList.add('error');
  field.style.borderColor = '#ef4444';
  
  let errorEl = field.parentElement.querySelector('.error-message');
  if (!errorEl) {
    errorEl = document.createElement('span');
    errorEl.className = 'error-message';
    errorEl.style.cssText = 'color: #ef4444; font-size: 0.85rem; margin-top: 4px; display: block;';
    field.parentElement.appendChild(errorEl);
  }
  errorEl.textContent = message;
}

function clearError(field) {
  field.classList.remove('error');
  field.style.borderColor = '';
  
  const errorEl = field.parentElement.querySelector('.error-message');
  if (errorEl) {
    errorEl.remove();
  }
}

// ========================================
// THEME TOGGLE (CLARO/ESCURO)
// ========================================

function initThemeToggle() {
  const themeToggle = document.querySelector('[data-theme-toggle]');
  if (!themeToggle) return;

  // Verifica preferência salva ou do sistema
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// ========================================
// UTILITÁRIOS
// ========================================

// Debounce para performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle para scroll
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Exporta funções para uso global se necessário
window.premiumSite = {
  validateField,
  debounce,
  throttle
};
