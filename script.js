document.addEventListener('DOMContentLoaded', () => {
    // ===========================================
    // 1. Gestion du menu burger
    // ===========================================
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // ===========================================
    // 2. Gestion du bouton "Lire plus" (Spécifique Page À propos)
    // ===========================================
    const texte = document.querySelector(".texte-complet");
    const button = document.querySelector(".btn-lire-plus");
    
    if (button && texte) {
        button.addEventListener("click", () => {
            texte.classList.toggle("open");

            button.textContent = texte.classList.contains("open")
                ? "Lire moins"
                : "Lire plus";
        });
    }

    // ===========================================
    // 3. Gestion du mode sombre et des Fireflies
    // ===========================================
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    // Cible les conteneurs qui doivent avoir des lucioles
    // (Ajouté .fireflies-container dans le HTML de l'index)
    const firefliesContainers = document.querySelectorAll('.fireflies-container'); 
    
    const FIREFLY_COUNT = 50; 

    // Fonction pour basculer le mode sombre
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        
        // Mettre à jour l'icône et le texte du bouton
        if (isDarkMode) {
            if (toggleButton) toggleButton.innerHTML = '<i class="fas fa-sun"></i> Mode Clair';
            localStorage.setItem('theme-site', 'dark'); // Changé le nom pour être global
            // Activer l'effet pour tous les conteneurs
            firefliesContainers.forEach(container => {
                 createFireflies(container);
                 container.classList.add('hover-active');
             });
        } else {
            if (toggleButton) toggleButton.innerHTML = '<i class="fas fa-moon"></i> Mode Sombre';
            localStorage.setItem('theme-site', 'light');
             // Désactiver l'effet
             firefliesContainers.forEach(container => {
                 container.classList.remove('hover-active');
             });
        }
    }

    // Gérer le clic du bouton Dark Mode
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleDarkMode);
    }

    // Charger le thème depuis localStorage
    const savedTheme = localStorage.getItem('theme-site');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        // Appliquer le mode sombre au démarrage
        body.classList.add('dark-mode');
        if (toggleButton) toggleButton.innerHTML = '<i class="fas fa-sun"></i> Mode Clair';
    } else {
        if (toggleButton) toggleButton.innerHTML = '<i class="fas fa-moon"></i> Mode Sombre';
    }

    // Fonction pour générer les lucioles
    function createFireflies(container) {
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

    // Logique d'activation au survol/chargement
    firefliesContainers.forEach(container => {
        // Activer l'effet au survol si en mode sombre
        container.addEventListener('mouseenter', () => {
            if (body.classList.contains('dark-mode')) {
                createFireflies(container);
                container.classList.add('hover-active');
            }
        });

        // Désactiver l'effet quand la souris quitte
        container.addEventListener('mouseleave', () => {
            container.classList.remove('hover-active');
        });
    });

    // Initialisation si le mode sombre est déjà actif au chargement
    if (body.classList.contains('dark-mode')) {
        firefliesContainers.forEach(container => {
            createFireflies(container);
            container.classList.add('hover-active');
        });
    }
});