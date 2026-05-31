/**
 * projet.js — Page détail d'un projet
 * Gère 4 types d'affichage :
 *   1. youtube  → lecteur vidéo intégré
 *   2. images.type = "carousel" → navigation flèches gauche/droite
 *   3. images.type = "gallery"  → grille style Instagram + lightbox
 *   4. mockup seul → image unique cliquable (lightbox / lien / pdf)
 */

document.addEventListener('DOMContentLoaded', () => {

  const params  = new URLSearchParams(window.location.search);
  const catKey  = params.get('cat');
  const projId  = params.get('id');

  const catData = PROJECTS_DATA[catKey];
  const projet  = catData && catData.projects.find(p => p.id === projId);

  // Bouton retour
  const btnRetour = document.getElementById('btn-retour');
  if (btnRetour && catKey) {
    btnRetour.href        = `categorie.html?cat=${catKey}`;
    btnRetour.textContent = '← Retour';
  }

  const content = document.getElementById('projet-content');
  if (!content) return;

  if (!projet) {
    content.innerHTML = `
      <div style="text-align:center;padding:80px 0;color:var(--text-muted);">
        <p style="font-size:3rem">🔍</p>
        <p>Projet introuvable.</p>
        <a href="projets.html" class="btn-primary" style="margin-top:16px;display:inline-flex;">← Retour aux projets</a>
      </div>`;
    return;
  }

  document.title = `${projet.title} — Lucie Nivinou`;

  /* ============================================================
     CONSTRUCTION DE L'APERÇU selon le type de données
  ============================================================ */

  function buildApercu() {

    // --- 1. Vidéo YouTube ---
    if (projet.youtube) {
      return `
        <div class="projet-apercu">
          <div class="video-wrapper">
            <iframe src="${projet.youtube}" title="${projet.title}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen loading="lazy"></iframe>
          </div>
        </div>`;
    }

    // --- 2. Carousel (images multiples, navigation flèche) ---
    if (projet.images && projet.images.type === 'carousel') {
      const srcs = projet.images.srcs;
      const slides = srcs.map((src, i) => `
        <div class="carousel-slide${i === 0 ? ' active' : ''}" data-index="${i}">
          <img src="${src}" alt="${projet.title} — image ${i + 1}" loading="${i === 0 ? 'eager' : 'lazy'}">
        </div>`).join('');

      const dots = srcs.map((_, i) =>
        `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-dot="${i}" aria-label="Image ${i + 1}"></button>`
      ).join('');

      return `
        <div class="projet-apercu carousel-apercu" id="carousel-wrap">
          <div class="carousel-track" id="carousel-track">${slides}</div>
          <button class="carousel-btn carousel-prev" id="carousel-prev" aria-label="Image précédente">
            <svg viewBox="0 0 24 24"><polyline points="15,18 9,12 15,6"/></svg>
          </button>
          <button class="carousel-btn carousel-next" id="carousel-next" aria-label="Image suivante">
            <svg viewBox="0 0 24 24"><polyline points="9,6 15,12 9,18"/></svg>
          </button>
          <div class="carousel-dots" id="carousel-dots">${dots}</div>
          <div class="carousel-counter" id="carousel-counter">1 / ${srcs.length}</div>
        </div>`;
    }

    // --- 3. Galerie grille (photos) ---
    if (projet.images && projet.images.type === 'gallery') {
      const imgs = projet.images.srcs.map((src, i) => `
        <button class="gallery-item" data-index="${i}" aria-label="Voir la photo ${i + 1}">
          <img src="${src}" alt="${projet.title} — photo ${i + 1}" loading="lazy">
        </button>`).join('');

      return `
        <div class="projet-apercu gallery-apercu">
          <div class="photo-gallery" id="photo-gallery">${imgs}</div>
        </div>`;
    }

    // --- 4. Image unique (mockup) ---
    if (projet.mockup) {
      const isLinkExt = projet.lien && projet.lien.startsWith('http');
      const isPDF     = projet.lien && !projet.lien.startsWith('http');
      let clickAttr   = '';
      if (isLinkExt) clickAttr = `data-lien="${projet.lien}"`;
      if (isPDF)     clickAttr = `data-pdf="${projet.lien}"`;

      return `
        <div class="projet-apercu is-clickable" id="apercu-img" ${clickAttr}>
          <img src="${projet.mockup}" alt="Aperçu du projet ${projet.title}" loading="eager">
        </div>`;
    }

    return `
      <div class="projet-apercu" style="padding:60px;text-align:center;color:var(--text-muted);">
        <p>Aucun aperçu disponible</p>
      </div>`;
  }

  /* ---- Tags & logiciels ---- */
  const tagsHTML = (projet.competences || [])
    .map(c => `<span class="tag">${c}</span>`).join('');

  const logicielsHTML = (projet.logiciels || [])
    .map(l => `
      <div class="logiciel-item">
        <img src="${l.src}" alt="${l.alt}" title="${l.alt}">
        <span>${l.alt}</span>
      </div>`).join('');

  /* ---- Injection HTML ---- */
  content.innerHTML = `
    <header class="projet-header">
      <h1 class="projet-title">${projet.title}</h1>
    </header>

    ${buildApercu()}

    <section class="projet-description-section">
      <div class="description-wrapper" style="position:relative">
        <div class="projet-description-text" id="desc-text">${escapeHTML(projet.description)}</div>
        <div class="description-fade" id="desc-fade"></div>
      </div>
      <button class="btn-lire-description" id="btn-desc">Lire plus ↓</button>
    </section>

    <div class="projet-info-grid">
      ${tagsHTML ? `
        <div class="info-block">
          <h3>Compétences mobilisées</h3>
          <div class="tags-group">${tagsHTML}</div>
        </div>` : ''}
      ${logicielsHTML ? `
        <div class="info-block">
          <h3>Logiciels utilisés</h3>
          <div class="logiciels-group">${logicielsHTML}</div>
        </div>` : ''}
    </div>
  `;

  // Pleine largeur si galerie photo
  if (projet.images && projet.images.type === 'gallery') {
    content.classList.add('has-gallery');
  }
  
  /* ============================================================
     CAROUSEL — logique JS
  ============================================================ */
  if (projet.images && projet.images.type === 'carousel') {
    const srcs    = projet.images.srcs;
    let current   = 0;

    const track   = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const counter = document.getElementById('carousel-counter');
    const dotsEl  = document.getElementById('carousel-dots');

    function goTo(index) {
      const slides = track.querySelectorAll('.carousel-slide');
      const dots   = dotsEl ? dotsEl.querySelectorAll('.carousel-dot') : [];

      slides[current].classList.remove('active');
      if (dots[current]) dots[current].classList.remove('active');

      current = (index + srcs.length) % srcs.length;

      slides[current].classList.add('active');
      if (dots[current]) dots[current].classList.add('active');
      if (counter) counter.textContent = `${current + 1} / ${srcs.length}`;
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

    // Dots
    if (dotsEl) {
      dotsEl.querySelectorAll('.carousel-dot').forEach(dot => {
        dot.addEventListener('click', () => goTo(parseInt(dot.dataset.dot)));
      });
    }

    // Swipe tactile
    let touchStartX = 0;
    const wrap = document.getElementById('carousel-wrap');
    if (wrap) {
      wrap.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
      wrap.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
      });
    }

    // Flèches clavier
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft')  goTo(current - 1);
      if (e.key === 'ArrowRight') goTo(current + 1);
    });
  }

  /* ============================================================
     GALERIE PHOTO — lightbox
  ============================================================ */
  if (projet.images && projet.images.type === 'gallery') {
    const srcs   = projet.images.srcs;
    let lbIndex  = 0;

    // Créer la lightbox
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.innerHTML = `
      <button class="lightbox-close" aria-label="Fermer">×</button>
      <button class="lightbox-nav lightbox-prev" aria-label="Photo précédente">
        <svg viewBox="0 0 24 24"><polyline points="15,18 9,12 15,6"/></svg>
      </button>
      <img src="" alt="" class="lightbox-img">
      <button class="lightbox-nav lightbox-next" aria-label="Photo suivante">
        <svg viewBox="0 0 24 24"><polyline points="9,6 15,12 9,18"/></svg>
      </button>
      <div class="lightbox-counter"></div>
    `;
    document.body.appendChild(lb);

    const lbImg     = lb.querySelector('.lightbox-img');
    const lbCounter = lb.querySelector('.lightbox-counter');

    function openLb(index) {
      lbIndex = (index + srcs.length) % srcs.length;
      lbImg.src = srcs[lbIndex];
      lbImg.alt = `${projet.title} — photo ${lbIndex + 1}`;
      if (lbCounter) lbCounter.textContent = `${lbIndex + 1} / ${srcs.length}`;
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLb() {
      lb.classList.remove('open');
      document.body.style.overflow = '';
    }

    lb.querySelector('.lightbox-close').addEventListener('click', closeLb);
    lb.querySelector('.lightbox-prev').addEventListener('click', () => openLb(lbIndex - 1));
    lb.querySelector('.lightbox-next').addEventListener('click', () => openLb(lbIndex + 1));
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape')     closeLb();
      if (e.key === 'ArrowLeft')  openLb(lbIndex - 1);
      if (e.key === 'ArrowRight') openLb(lbIndex + 1);
    });

    // Swipe tactile dans la lightbox
    let touchStartX = 0;
    lb.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) openLb(diff > 0 ? lbIndex + 1 : lbIndex - 1);
    });

    // Clic sur chaque item de la grille
    document.querySelectorAll('.gallery-item').forEach(btn => {
      btn.addEventListener('click', () => openLb(parseInt(btn.dataset.index)));
    });
  }

  /* ============================================================
     IMAGE UNIQUE cliquable
  ============================================================ */
  const apercuEl = document.getElementById('apercu-img');
  if (apercuEl) {
    const lienExt = apercuEl.dataset.lien;
    const pdfPath = apercuEl.dataset.pdf;

    if (lienExt) {
      apercuEl.addEventListener('click', () => window.open(lienExt, '_blank', 'noopener'));
      apercuEl.style.cursor = 'pointer';
    } else if (pdfPath) {
      apercuEl.addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = pdfPath;
        a.download = pdfPath.split('/').pop();
        a.click();
      });
      apercuEl.style.cursor = 'pointer';
    } else {
      // Lightbox image unique
      const img = apercuEl.querySelector('img');
      if (img) {
        const lb = document.createElement('div');
        lb.className = 'lightbox';
        lb.setAttribute('role', 'dialog');
        lb.setAttribute('aria-modal', 'true');
        lb.innerHTML = `<button class="lightbox-close" aria-label="Fermer">×</button><img src="" alt="" class="lightbox-img">`;
        document.body.appendChild(lb);

        const lbImg = lb.querySelector('.lightbox-img');
        apercuEl.addEventListener('click', () => {
          lbImg.src = img.src;
          lbImg.alt = img.alt;
          lb.classList.add('open');
          document.body.style.overflow = 'hidden';
        });
        const closeLb = () => { lb.classList.remove('open'); document.body.style.overflow = ''; };
        lb.querySelector('.lightbox-close').addEventListener('click', closeLb);
        lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLb(); });
      }
    }
  }

  /* ============================================================
     BOUTON LIRE PLUS / MOINS
  ============================================================ */
  const descText = document.getElementById('desc-text');
  const descFade = document.getElementById('desc-fade');
  const btnDesc  = document.getElementById('btn-desc');
  let descOpen   = false;

  if (btnDesc && descText) {
    requestAnimationFrame(() => {
      if (descText.scrollHeight <= 200) {
        btnDesc.style.display = 'none';
        if (descFade) descFade.style.display = 'none';
        descText.style.maxHeight = 'none';
      }
    });
    btnDesc.addEventListener('click', () => {
      descOpen = !descOpen;
      descText.classList.toggle('open', descOpen);
      if (descFade) descFade.classList.toggle('hidden', descOpen);
      btnDesc.textContent = descOpen ? 'Lire moins ↑' : 'Lire plus ↓';
    });
  }

  /* ---- Animation d'apparition ---- */
  content.style.opacity   = '0';
  content.style.transform = 'translateY(14px)';
  content.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    content.style.opacity   = '1';
    content.style.transform = 'translateY(0)';
  }));

});

function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
