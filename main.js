/**
 * main.js v2 — Portfolio Lucie Nivinou
 * Dark mode sans flash, icônes SVG, menu burger, lucioles, nav active.
 *
 * IMPORTANT : pour éliminer le flash blanc au chargement en dark mode,
 * ajouter dans le <head> de CHAQUE page HTML, AVANT les CSS :
 *   <script>
 *     if(localStorage.getItem('lucie-portfolio-theme')==='dark')
 *       document.documentElement.classList.add('pre-dark');
 *   </script>
 * Et dans global.css :
 *   html.pre-dark body, html.pre-dark { background: #0F0D1A !important; }
 */

// ---- Icônes SVG inline (plus modernes que les emojis) ----
const ICON_MOON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/></svg>`;
const ICON_SUN  = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;

document.addEventListener('DOMContentLoaded', () => {

  /* ================================================
     1. DARK MODE — persistant, sans flash
  ================================================ */
  const body        = document.body;
  const btnTheme    = document.getElementById('btn-theme');
  const STORAGE_KEY = 'lucie-portfolio-theme';

  function applyTheme(isDark, animate) {
    if (!animate) {
      body.style.transition = 'none';
      requestAnimationFrame(() => { body.style.transition = ''; });
    }
    if (isDark) {
      body.classList.add('dark-mode');
      if (btnTheme) {
        btnTheme.innerHTML = ICON_SUN;
        btnTheme.setAttribute('aria-label', 'Passer en mode clair');
        btnTheme.setAttribute('title', 'Mode clair');
      }
    } else {
      body.classList.remove('dark-mode');
      if (btnTheme) {
        btnTheme.innerHTML = ICON_MOON;
        btnTheme.setAttribute('aria-label', 'Passer en mode sombre');
        btnTheme.setAttribute('title', 'Mode sombre');
      }
    }
    // Mettre à jour la couleur meta-theme pour la barre navigateur mobile
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = isDark ? '#0F0D1A' : '#FAFAF9';
  }

  function toggleTheme() {
    const isDark = !body.classList.contains('dark-mode');
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    applyTheme(isDark, true);
    if (isDark) initFireflies();
  }

  // Appliquer sans animation au chargement
  const saved = localStorage.getItem(STORAGE_KEY);
  applyTheme(saved === 'dark', false);

  if (btnTheme) btnTheme.addEventListener('click', toggleTheme);

  /* ================================================
     2. MENU BURGER
  ================================================ */
  const burger     = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (e) => {
      if (!burger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ================================================
     3. LUCIOLES — discrètes, dark mode uniquement
  ================================================ */
  function initFireflies() {
    let container = document.querySelector('.fireflies-bg');
    if (!container) {
      container = document.createElement('div');
      container.className = 'fireflies-bg';
      container.setAttribute('aria-hidden', 'true');
      document.body.insertBefore(container, document.body.firstChild);
    }
    if (container.children.length > 0) return;

    const COUNT    = 24;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < COUNT; i++) {
      const ff = document.createElement('div');
      ff.className = 'firefly';
      ff.style.left = `${Math.random() * 100}%`;
      ff.style.top  = `${Math.random() * 100}%`;

      const moveDur  = 14 + Math.random() * 12;
      const flickDur = 2.5 + Math.random() * 3;
      const delay    = -(Math.random() * 20);
      ff.style.animationDuration = `${moveDur}s, ${flickDur}s`;
      ff.style.animationDelay   = `${delay}s, ${delay * 0.3}s`;

      const size = 1.5 + Math.random() * 1.5;
      ff.style.width  = `${size}px`;
      ff.style.height = `${size}px`;
      const alpha = 0.3 + Math.random() * 0.3;
      ff.style.boxShadow = `0 0 ${3 + size * 2}px ${size}px rgba(255,209,102,${alpha})`;

      fragment.appendChild(ff);
    }
    container.appendChild(fragment);
  }

  if (body.classList.contains('dark-mode')) initFireflies();

  /* ================================================
     4. NAV — lien actif
  ================================================ */
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = (link.getAttribute('href') || '').split('?')[0];
    if (href && currentFile === href) link.classList.add('active');
    // Catégorie et projet = on active "projets"
    if ((currentFile === 'categorie.html' || currentFile === 'projet.html') && href === 'projets.html') {
      link.classList.add('active');
    }
  });

  /* ================================================
     5. SCROLL — ombre header
  ================================================ */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 8 ? 'var(--shadow-md)' : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ================================================
     6. RETOUR EN HAUT — fix fonctionnement
  ================================================ */
  document.querySelectorAll('.back-to-top').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

});
