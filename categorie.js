/**
 * categorie.js — Page liste de projets d'une catégorie
 * Lit le paramètre ?cat= dans l'URL et génère les cartes de projets.
 */

document.addEventListener('DOMContentLoaded', () => {

  // Labels descriptions par catégorie
  const CAT_DESCRIPTIONS = {
    graphisme:    'Identités visuelles, campagnes de communication, publications réseaux sociaux',
    audiovisuel:  'Courts-métrages, interviews, tournage et montage vidéo',
    photographie: 'Reportages, portraits, retouche photo',
    developpement:'Sites web, bases de données, développement front & back-end',
    uxui:         'Wireframes, maquettes, prototypes et tests utilisateurs'
  };

  // Récupérer la catégorie depuis l'URL
  const params  = new URLSearchParams(window.location.search);
  const catKey  = params.get('cat');

  const catData = PROJECTS_DATA[catKey];

  // Mettre à jour le titre de la page
  if (catData) {
    document.title = `${catData.label} — Lucie Nivinou`;

    const titleEl    = document.getElementById('cat-title');
    const subtitleEl = document.getElementById('cat-subtitle');
    const iconEl     = document.getElementById('cat-icon');

    if (titleEl)    titleEl.textContent    = catData.label;
    if (subtitleEl) subtitleEl.textContent = CAT_DESCRIPTIONS[catKey] || '';
    if (iconEl) {
      iconEl.textContent = catData.icon;
      iconEl.style.color = catData.color;
      iconEl.style.background = catData.color + '22';
    }
  } else {
    const titleEl = document.getElementById('cat-title');
    if (titleEl) titleEl.textContent = 'Catégorie introuvable';
  }

  // Générer les cartes de projets
  const liste = document.getElementById('projets-liste');
  if (!liste) return;

  if (!catData || !catData.projects || catData.projects.length === 0) {
    liste.innerHTML = `
      <div class="empty-state">
        <span style="font-size:3rem">📂</span>
        <p>Aucun projet dans cette catégorie pour le moment.<br>Revenez bientôt !</p>
      </div>
    `;
    return;
  }

  // Ratio portrait uniquement pour la catégorie photographie
  const isPhoto = catKey === 'photographie';

  // Les projets sont déjà triés du plus récent au plus ancien dans le fichier de données
  catData.projects.forEach((projet, index) => {
    const card = document.createElement('a');
    card.href      = `projet.html?cat=${catKey}&id=${projet.id}`;
    card.className = 'projet-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('aria-label', `${projet.title}, ${projet.year}`);

    // Vignette : mockup ou premier élément du carousel/galerie
    const vignette = projet.mockup
      || (projet.images && projet.images.srcs && projet.images.srcs[0])
      || null;

    // Contenu de la carte
    card.innerHTML = `
      <div class="projet-card-img${isPhoto ? ' photo-ratio' : ''}">
        ${vignette
          ? `<img src="${vignette}" alt="Aperçu du projet ${projet.title}" loading="lazy">`
          : `<div class="img-placeholder">${catData.icon}</div>`
        }
      </div>
      <div class="projet-card-info">
        <span class="projet-card-year">${projet.year}</span>
        <p class="projet-card-title">${projet.title}</p>
      </div>
    `;

    // Animation d'apparition décalée
    card.style.opacity    = '0';
    card.style.transform  = 'translateY(20px)';
    card.style.transition = `opacity 0.4s ease ${index * 0.07}s, transform 0.4s ease ${index * 0.07}s`;

    liste.appendChild(card);

    // Déclencher l'animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        card.style.opacity   = '1';
        card.style.transform = 'translateY(0)';
      });
    });
  });

});