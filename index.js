/**
 * index.js v2 — Animation hero fleurs + interactions page d'accueil
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ================================================
     HERO — Fleurs qui s'envolent
  ================================================ */
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H;
  let flowers = [];
  let animFrame;

  // Palette fleurs selon le thème
  function getPalette() {
    const dark = document.body.classList.contains('dark-mode');
    return dark
      ? ['#A78BFA', '#C4B5FD', '#E9D5FF', '#DDD6FE', '#818CF8']
      : ['#7C3AED', '#A78BFA', '#C084FC', '#E879F9', '#F0ABFC'];
  }

  // Formes SVG simplifiées : pétales comme chemins
  // On dessine des fleurs simples avec des cercles décalés
  class Flower {
    constructor() {
      this.reset(true);
    }

    reset(initial) {
      const palette = getPalette();
      this.x     = Math.random() * W;
      this.y     = initial ? Math.random() * H : H + 30;
      this.size  = 5 + Math.random() * 14;
      this.color = palette[Math.floor(Math.random() * palette.length)];
      this.alpha = 0;
      this.targetAlpha = 0.55 + Math.random() * 0.4;
      // Mouvement
      this.vx    = (Math.random() - 0.5) * 0.7;
      this.vy    = -(0.6 + Math.random() * 1.1);  // monte vers le haut
      this.rot   = Math.random() * Math.PI * 2;
      this.rotV  = (Math.random() - 0.5) * 0.04;
      // Durée de vie
      this.life  = initial ? Math.random() : 0;   // démarrage progressif
      this.maxLife = 180 + Math.random() * 180;    // frames
      this.frame = 0;
      // Pétales count (3-6)
      this.petals = 4 + Math.floor(Math.random() * 3);
    }

    update() {
      this.frame++;
      this.x   += this.vx;
      this.y   += this.vy;
      this.rot += this.rotV;
      // Légère oscillation horizontale
      this.x   += Math.sin(this.frame * 0.025) * 0.4;

      // Fade in
      if (this.frame < 40) {
        this.alpha = (this.frame / 40) * this.targetAlpha;
      }
      // Fade out en fin de vie
      if (this.frame > this.maxLife - 50) {
        this.alpha *= 0.95;
      }

      // Réinitialiser quand sortie de l'écran ou fin de vie
      if (this.y < -this.size * 3 || this.frame > this.maxLife) {
        this.reset(false);
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.globalAlpha = Math.max(0, this.alpha);

      const r = this.size / 2;
      const petalDist = r * 0.8;

      // Pétales
      for (let i = 0; i < this.petals; i++) {
        const angle = (i / this.petals) * Math.PI * 2;
        const px    = Math.cos(angle) * petalDist;
        const py    = Math.sin(angle) * petalDist;

        ctx.beginPath();
        ctx.ellipse(px, py, r * 0.75, r * 0.45, angle, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      // Centre
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.45, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.globalAlpha = Math.max(0, this.alpha * 0.7);
      ctx.fill();

      ctx.restore();
    }
  }

  function resize() {
    const hero = document.getElementById('hero');
    W = hero ? hero.offsetWidth  : window.innerWidth;
    H = hero ? hero.offsetHeight : window.innerHeight;
    canvas.width  = W;
    canvas.height = H;
  }

  function initFlowers() {
    const count = Math.min(38, Math.floor(W / 28));
    flowers = Array.from({ length: count }, () => new Flower());
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    flowers.forEach(f => { f.update(); f.draw(); });
    animFrame = requestAnimationFrame(animate);
  }

  resize();
  initFlowers();
  animate();

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animFrame);
    resize();
    initFlowers();
    animate();
  }, { passive: true });

  // Recréer avec les bonnes couleurs si le thème change
  const themeBtn = document.getElementById('btn-theme');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      // Petite pause puis re-init couleurs
      setTimeout(() => {
        flowers.forEach(f => {
          const palette = getPalette();
          f.color = palette[Math.floor(Math.random() * palette.length)];
        });
      }, 50);
    });
  }

  /* ================================================
     SCROLL — Hero → À propos
  ================================================ */
  const scrollLink = document.querySelector('.hero-scroll');
  if (scrollLink) {
    scrollLink.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById('apropos');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ================================================
     BOUTON LIRE PLUS (mobile/tablette seulement)
     Sur desktop le CSS affiche tout sans bouton.
  ================================================ */
  const btnLirePlus = document.getElementById('btn-lire-plus');
  const extraTexts  = document.querySelectorAll('.extra-text');

  if (btnLirePlus && extraTexts.length) {
    // Vérifier si on est en mobile (le bouton est visible selon CSS)
    function isMobile() {
      return window.innerWidth <= 768;
    }

    btnLirePlus.addEventListener('click', () => {
      const isOpen = btnLirePlus.getAttribute('aria-expanded') === 'true';
      const next   = !isOpen;

      extraTexts.forEach(el => el.classList.toggle('open', next));
      btnLirePlus.setAttribute('aria-expanded', String(next));
      btnLirePlus.innerHTML = next
        ? 'Lire moins <span class="lire-arrow" style="display:inline-block;transform:rotate(180deg)">↓</span>'
        : 'Lire plus <span class="lire-arrow">↓</span>';
    });
  }

  /* ================================================
     ANIMATIONS D'APPARITION AU SCROLL
  ================================================ */
  const fadeTargets = document.querySelectorAll(
    '.alternance-banner, .profil-grid, .comp-card, .outil-item, .opquast-card, .temoignage-card'
  );

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07 });

  fadeTargets.forEach((el, i) => {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(18px)';
    el.style.transition = `opacity 0.55s ease ${i * 0.04}s, transform 0.55s ease ${i * 0.04}s`;
    io.observe(el);
  });

});
