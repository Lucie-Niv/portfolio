// ===========================================
// Gestion du menu burger
// ===========================================
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===========================================
// Gestion du mode sombre et des Fireflies
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    // MODIF IMPORTANTE : Utiliser querySelectorAll pour cibler TOUS les conteneurs
    const firefliesContainers = document.querySelectorAll('.project-section.fireflies-container'); 
    
    // MODIF : Augmentation du nombre de lucioles
    const FIREFLY_COUNT = 5; 

    // Fonction pour basculer le mode sombre
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        // Mettre à jour l'icône et le texte du bouton
        const isDarkMode = body.classList.contains('dark-mode');
        if (isDarkMode) {
            toggleButton.innerHTML = '<i class="fas fa-sun"></i> Mode Clair';
            localStorage.setItem('theme-audiovisuel', 'dark');
            // Activer l'effet pour tous les conteneurs au chargement si le mode sombre est actif
            firefliesContainers.forEach(container => {
                 createFireflies(container);
                 container.classList.add('hover-active');
             });
        } else {
            toggleButton.innerHTML = '<i class="fas fa-moon"></i> Mode Sombre';
            localStorage.setItem('theme-audiovisuel', 'light');
             // Désactiver l'effet si on passe en mode clair
             firefliesContainers.forEach(container => {
                 container.classList.remove('hover-active');
             });
        }
    }

    // Gérer le clic du bouton
    toggleButton.addEventListener('click', toggleDarkMode);

    // Charger le thème depuis localStorage
    const savedTheme = localStorage.getItem('theme-audiovisuel');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        // Appliquer le mode sombre au démarrage
        body.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="fas fa-sun"></i> Mode Clair';
    } else {
        toggleButton.innerHTML = '<i class="fas fa-moon"></i> Mode Sombre';
    }


// ===========================================
// Gestion de l'effet Vie Marine / Méduses
// ===========================================

    // 1. Fonction pour générer les lucioles DANS UN CONTENEUR SPÉCIFIQUE
    function createFireflies(container) {
        // Cibler l'élément .fireflies à l'intérieur de ce conteneur
        const firefliesElement = container.querySelector('.fireflies');
        
        if (firefliesElement && !firefliesElement.children.length) {
            for (let i = 0; i < FIREFLY_COUNT; i++) {
                const firefly = document.createElement('div');
                firefly.classList.add('firefly');
                // Position initiale aléatoire
                firefly.style.left = `${Math.random() * 100}%`;
                firefly.style.top = `${Math.random() * 100}%`;
                firefliesElement.appendChild(firefly);
            }
        }
    }

    // 2. Parcourir TOUS les conteneurs trouvés
    firefliesContainers.forEach(container => {
        
        // Activer l'effet au survol si en mode sombre
        container.addEventListener('mouseenter', () => {
            if (body.classList.contains('dark-mode')) {
                // Générer les lucioles UNIQUEMENT dans ce conteneur
                createFireflies(container);
                container.classList.add('hover-active');
            }
        });

        // Désactiver l'effet quand la souris quitte
        container.addEventListener('mouseleave', () => {
            container.classList.remove('hover-active');
        });
    });

    // 3. Initialisation de l'effet si le mode sombre est déjà actif au chargement
    if (body.classList.contains('dark-mode')) {
        firefliesContainers.forEach(container => {
            createFireflies(container);
            container.classList.add('hover-active');
        });
    }

});



// ===========================================
// Gestion du bouton "Lire la suite"
// ===========================================

function setupReadMore() {
    // Sélectionne tous les boutons "Lire la suite"
    const readMoreButtons = document.querySelectorAll('.read-more-button');

    readMoreButtons.forEach(button => {
        // Le paragraphe de description est le frère précédent dans le HTML
        const description = button.previousElementSibling; 

        // Fonction pour gérer le clic sur le bouton
        button.addEventListener('click', () => {
            // Bascule la classe 'expanded' sur le paragraphe
            const isExpanded = description.classList.toggle('expanded');
            
            if (isExpanded) {
                // Si le texte est déplié
                button.textContent = 'Lire moins';
            } else {
                // Si le texte est replié
                button.textContent = 'Lire la suite';
                 // BONUS : Faire défiler vers le haut pour voir le haut de la description
                const projectSection = button.closest('.project-section');
                if (projectSection) {
                    projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

// Appeler la fonction au chargement du contenu pour initialiser les boutons
document.addEventListener('DOMContentLoaded', setupReadMore);