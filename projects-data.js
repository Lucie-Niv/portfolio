/**
 * projects-data.js
 * Base de données centralisée de tous les projets du portfolio.
 *
 * TYPES D'AFFICHAGE SELON LES CHAMPS :
 *
 *  youtube        → lecteur vidéo intégré
 *  images.type = "carousel"  → flèches gauche/droite (ex: publications Instagram)
 *  images.type = "gallery"   → grille style Instagram (ex: shootings photo)
 *  mockup seul    → image unique cliquable (lightbox / lien externe / pdf)
 */

const PROJECTS_DATA = {

  /* ============================================================
     GRAPHISME
  ============================================================ */
  graphisme: {
    label: "Graphisme",
    icon: "✦",
    color: "#9B5DE5",
    projects: [
      {
        id: "fete-de-l-enfance",
        title: "La Fête de l'enfance — Montfermeil",
        year: 2026,
        mockup: "img/affiche_fete_enfance-.webp",
        description: `Durant mon stage de fin de 2e année à la mairie de Montfermeil (93370), j'ai eu l'occasion de réaliser une affiche afin de mettre en avant l'évènement de la Fête de l'Enfance, organisée chaque année par la ville.\n\n Le thème de l'évènement était "Les musiques du monde". \n J'ai ainsi réalisé un moodboard afin de rassembler mes idées, et dessiné un croquis des éléments que je souhaitais intégrer sur le visuel.\n\n Les points importants étaient de mettre en avant le thème, ainsi que le spectacle des enfants, tout en m'assurant que les informations clés, comme la date et le lieu, étaient également bien visibles pour que l'œil soit directement attiré dessus.\n Ce point a représenté la plus grande difficulté pour moi. Assurer un joli équilibre entre le texte très présent et le visuel.\n\n Il y a ainsi eu 10 versions, de plus en plus améliorées, jusqu'à atteindre la version finale, validée par la mairie.\n\n Pour composer les éléments visuels, j'ai travaillé sur Illustrator et Photoshop, avec des images et fichiers .eps sélectionnés sur la banque d'image Freepik (renommée maintenant Magnific).\n\n Le point d'attention principal a été de bien convertir les images en mode CMJN, avec la bonne résolution d'impression de 300 ppp.\n\n Une des contraintes était de réutiliser 2 des personnages de l'affiche de l'année précédente. Afin de pouvoir également en ajouter d'autres, j'ai utilisé une intelligence artificielle pour en générer de nouveau, en essayant de garder au mieux le style de dessin des 2 personnages de base.\n\n Enfin, j'ai exporté le projet final avec les bons paramètres d'impression (fonds perdus et traits de coupe).\n\n J'ai ensuite travaillé sur les déclinaisons : bâches de 3m, 5m, flyers, muppy, etc.\n\n Je suis très satisfaite du résultat, d'autant plus que j'ai eu la chance d'être assez libre sur le choix de la direction artistique du projet !\n\n Cela m'a donc permis de : \n● Réfléchir à une direction artistique complète,\n● Travailler en autonomie et savoir rebondir selon les contraintes et demandes d'ajustement,\n● Améliorer ma maîtrise d'Illustrator et Photoshop.`,
        competences: ["Créativité", "Design graphique", "Illustrator"],
        logiciels: [
          { src: "img/illustrator.png", alt: "Illustrator" },
          { src: "img/photoshop.webp",  alt: "Photoshop" },
          { src: "img/indesign.webp",   alt: "Indesign" }
        ]
      },
      {
        id: "campagne-bordeaux",
        title: "Campagne de communication — Bordeaux",
        year: 2025,
        mockup: "img/campagne_com.webp",
        description: `Je vous présente ici un projet purement créatif ! Une campagne de communication institutionnelle afin de promouvoir un événement dans une ville de France.\n\nMon groupe et moi — constitué de 3 personnes — avons choisi la ville de Bordeaux, pour sa beauté, son histoire mais surtout pour le vin ! Nous avions 2 mois (d'octobre à fin novembre 2025) pour réaliser : logo, affiches en portrait et paysage, bannières web et maquettes responsives de la page d'accueil du site.\n\nPour le thème de l'événement, l'idée d'une dégustation de vin m'est venue assez naturellement, mais nous voulions quelque chose d'un peu plus spécifique. C'est pourquoi notre idée finale a été : une dégustation de vin à l'aveugle sur le Pont de Pierre.\n\nAvec cette piste nous avons réalisé un moodboard et défini une direction artistique. Nous nous sommes ensuite répartis les éléments à réaliser.\n\nJ'ai ainsi créé une première version de l'affiche dans les deux formats, puis les maquettes de la page d'accueil. Photoshop et Figma ont été les deux logiciels principaux que j'ai utilisés pour ce travail. Nous avons aussi utilisé InDesign pour respecter les paramètres d'impression des affiches notamment avec les fonds perdus.\n\nJ'ai rassemblé tous les éléments du projet dans un dossier PDF avec sommaire interactif.\n\nCe projet m'a ainsi permis de :\n● Faire preuve d'une grande créativité afin d'imaginer puis designer les éléments de cette campagne,\n● Approfondir mes compétences sur Photoshop,\n● Approfondir ma maîtrise de Figma notamment avec les animations appliquées pour notre carte interactive,\n● Maîtriser les paramètres d'exportation pour le print et les fichiers Figma.`,
        competences: ["Créativité", "Travail d'équipe", "Design graphique", "Maquettes de page web", "Exportation et formats optimisés"],
        logiciels: [
          { src: "img/photoshop.webp", alt: "Adobe Photoshop" },
          { src: "img/figma.png",      alt: "Figma" },
          { src: "img/indesign.webp",  alt: "InDesign" }
        ],
        lien: "Campagne_Lucie_Idrissa_Anh_comp+lien actif+lien page.pdf"
      },
      {
        id: "jpo",
        title: "Journée portes ouvertes — IUT",
        year: 2026,
        mockup: "img/mockup_affiche_JPO.webp",
        description: `Ce projet a été pour mon groupe et moi l'occasion de faire preuve d'une belle créativité.\n\nEn effet l'objectif était de mettre en avant notre formation à l'occasion de la Journée Portes Ouvertes, le BUT Métiers du Multimédia et de l'Internet, son aspect pluridisciplinaire et surtout, les 2 parcours qui la composent : La création numérique et le développement web.\n\nLe point crucial était de mettre particulièrement en avant le parcours développement web, jugé trop peu présent dans les créations des années précédentes.\n\nAinsi mes 2 camarades et moi avions 3 semaines de février 2026 pour trouver une façon esthétique et moderne de mettre en avant le côté programmation de notre école.\n\nNotre travail d'inspiration et de moodboard a été ce qui nous a pris le plus de temps, afin de bien cibler ce que nous souhaitions faire. Nous sommes donc partis sur cette idée de QR code dominant avec ces lignes de code colorées, accompagné d'une écriture moderne autour de l'affiche.\n\nNous avons également repensé le logo de la formation MMI et réalisé les maquettes d'une application dédiée aux étudiants, pour notamment visualiser leur emploi du temps et les actualités de leur université.\n\nPhotoshop et Figma ont été les deux logiciels principaux que j'ai utilisés pour ce travail.\nJ'ai également utilisé InDesign pour respecter les paramètres d'impression des affiches notamment avec les fonds perdus et traits de coupe.\n\nTous les éléments du projet sont rassemblés dans un dossier PDF avec sommaire interactif. Je vous laisse la curiosité d'aller y jeter un œil !\n\nCe projet m'a ainsi permis de : \n● Faire preuve d'une belle créativité afin de réaliser un visuel moderne et soigné,\n● Approfondir mes compétences sur Photoshop et Figma,\n● Maîtriser les paramètres d'exportation pour le print et les fichiers Figma.`,
        competences: ["Créativité", "Design graphique"],
        logiciels: [
          { src: "img/illustrator.png", alt: "Illustrator" },
          { src: "img/indesign.webp",   alt: "Indesign" },
          { src: "img/photoshop.webp",  alt: "Photoshop" }
        ],
        lien: "dossier_JPO.pdf"
      },
      {
        id: "publications-chab",
        title: "Publications Instagram — Chab'Livraison",
        year: 2025,
        // CAROUSEL : navigation image par image avec flèches
        images: {
          type: "carousel",
          srcs: [
            "img/Publication_octobre_rose_V2.webp",
            "img/publi-octobre-rose.webp",
            "img/publi-f\u00e9ri\u00e9.webp",
            "img/publi-automne.webp",
            "img/publi-this-or-that.webp",
            "img/publi-recrutement.webp"
          ]
        },
        description: `Je vous présente ici des créations graphiques réalisées durant mon stage de 3 mois dans l'entreprise de livraison de repas locale Chab'Livraison, à Douvaine (74140), de juillet à octobre 2025.\n\nUne de mes plus grosses missions a été de créer une grande série de publications pour alimenter le compte Instagram de l'entreprise sur plusieurs mois, et de mettre en avant leurs services, les restaurants partenaires, les promotions, etc.\n\nPour créer du contenu, j'ai mis en place un calendrier de publication basé en particulier sur le calendrier des marronniers et ainsi pouvoir établir des mises en ligne régulières.\n\nMêlant créativité, efficacité, rigueur et adaptation, j'ai créé les publications sur Canva, en respectant la direction artistique et l'image de marque de l'entreprise, afin de proposer une belle page Instagram qui donne envie de commander !\n\nCette mission m'a appris à :\n● Analyser et comprendre la direction artistique d'une entreprise,\n● Faire preuve d'une grande adaptabilité et créativité,\n● Être autonome.`,
        competences: ["Design graphique", "Créativité", "Rigueur", "Adaptabilité", "Autonomie", "Organisation et planification"],
        logiciels: [
          { src: "img/canva.png", alt: "Canva" }
        ]
      }
    ]
  },

  /* ============================================================
     AUDIOVISUEL
  ============================================================ */
  audiovisuel: {
    label: "Audiovisuel",
    icon: "▶",
    color: "#F15BB5",
    projects: [
      {
        id: "court-metrage-portail",
        title: "Court-métrage — Le Portail des saveurs",
        year: 2025,
        mockup: "img/court-metrage.webp",
        youtube: "https://www.youtube.com/embed/CfbVzti3LF8",
        description: `Le portail des saveurs : LE gros projet audiovisuel de ma deuxième année de BUT MMI.\n\nDe septembre à décembre 2025, nous avions 4 mois pour imaginer, story-boarder, tourner et monter un court-métrage d'une minute trente. Il devait être composé d'une partie réelle et d'une partie imaginaire tournée sur fond vert pour s'incruster dans l'image de notre choix.\n\nPar groupe de 4, nous avons eu une longue phase de recherche et de réflexion sur notre scénario. Nous avons décidé de faire une incrustation dans plusieurs scènes de Charlie et la Chocolaterie, un film iconique de notre enfance.\n\nAprès l'étape du scénario, nous avons créé le storyboard de notre histoire, en identifiant les lieux de tournage et les types de plans nécessaires.\n\nNous avons rencontré quelques difficultés pour trouver une supérette, le lieu principal de tournage pour notre partie réelle. Toutefois, un petit Carrefour Contact à Claye-Souilly nous a gentiment donné son accord.\n\nLa deuxième partie du tournage s'est passée sur fond vert dans notre IUT. Nous avons utilisé un Osmo pour filmer.\n\nLa dernière étape du projet a été le montage individuel du court-métrage. Grâce à mes cours, j'ai appris à utiliser l'effet Keylight, Couleur Lumetri, Screen Matte, l'ajout d'un masque pour la transition et d'un calque pour l'ombre sur After Effects, pour m'incruster dans les scènes de Charlie et la Chocolaterie de façon la plus réaliste possible.\n\nJ'ai ensuite enregistré ma voix pour superposer des voix off en français dans la partie réelle et en anglais dans la partie imaginaire. J'ai pensé le texte sous la forme d'un poème afin de donner une dimension plus cinématographique au rendu.\n\nCe projet m'a permis de :\n● Apprendre à utiliser un Osmo,\n● Apprendre les paramètres After Effects pour l'incrustation fond vert,\n● Approfondir ma maîtrise de Reaper pour les bandes sonores,\n● Revoir les types de plans pour le storyboard,\n● Maîtriser et optimiser les paramètres d'exportation audio et vidéo.`,
        competences: ["Rédaction", "Tournage vidéo avec stabilisateur Osmo", "Travail d'équipe", "Traveling", "Fond vert", "Montage vidéo", "Exportation optimisée"],
        logiciels: [
          { src: "img/premierProp.png", alt: "Adobe Premiere Pro" },
          { src: "img/afterEffect.png", alt: "After Effects" },
          { src: "img/audition.png",    alt: "Audition" }
        ]
      },
      {
        id: "interview-goubert",
        title: "Interview — M. Guillaume Goubert, directeur de La Croix",
        year: 2025,
        mockup: "img/interview.webp",
        youtube: "https://www.youtube.com/embed/34wE9t_SvTg",
        description: `Quel projet passionnant ! Ma toute première interview sur le thème de la presse écrite !\n\nL'objectif était d'interviewer un journaliste sur son métier, sa vie, et avoir son avis sur l'évolution de la presse écrite. Ce projet était découpé en trois phases : la recherche, le tournage puis le montage, réparties sur 5 mois, de septembre 2024 à janvier 2025.\n\nEn groupe de 5 étudiants, nous avons contacté de nombreuses personnes travaillant dans la presse écrite afin de pouvoir les interviewer. Ce fut un travail ardu et nous avons été confrontés à un désistement de dernière minute. Toutefois, nous avons ensuite eu l'honneur de rencontrer M. Goubert, directeur du journal La Croix, qui a accepté de tourner avec nous.\n\nNous avons ainsi élaboré une vingtaine de questions.\n\nPuis le jour du tournage est arrivé (le 05/12/24). Armés de notre caméra, de nos lumières, micros et trépied, nous avons installé le matériel chez lui. Chacun de nous avait un rôle précis. Pour ma part, je posais les questions et menais la conversation.\n\nUne fois le tournage terminé, nous avons chacun monté notre interview en autonomie sur Premiere Pro. Il a ainsi fallu condenser quarante minutes d'interview en six minutes de vidéo.\n\nCe projet m'a permis de :\n● Développer mes compétences en rédaction,\n● Maîtriser l'usage du matériel de tournage (caméra, micro, lumières) sur des plans fixes,\n● Maîtriser l'usage de Premiere Pro et les paramètres d'exportation numérique,\n● Mettre à l'épreuve mon organisation pour le respect des délais.`,
        competences: ["Rédaction", "Respect des délais", "Travail d'équipe", "Organisation", "Tournage vidéo en plans fixes", "Montage vidéo", "Exportation optimisée"],
        logiciels: [
          { src: "img/premierProp.png", alt: "Adobe Premiere Pro" },
          { src: "img/audition.png",    alt: "Audition" }
        ]
      }
    ]
  },

  /* ============================================================
     PHOTOGRAPHIE — galeries grille style Instagram
  ============================================================ */
  photographie: {
    label: "Photographie",
    icon: "◎",
    color: "#00BBF9",
    projects: [
      {
        id: "dossier1",
        title: "Paris ensoleillé",
        year: 2025,
        mockup: "img/paris.webp",
        images: {
          type: "gallery",
          srcs: [
            "img/photographies/paris/1.webp",
            "img/photographies/paris/2.webp",
            "img/photographies/paris/2b.webp",
            "img/photographies/paris/3.webp",
            "img/photographies/paris/4.webp",
            "img/photographies/paris/5.webp",
            "img/photographies/paris/6.webp"
          ]
        },
        competences: ["Photographie", "Cadrage", "Retouche photo"],
        logiciels: [
          { src: "img/lightroom.webp", alt: "Lightroom" }
        ]
      },
      {
        id: "dossier2",
        title: "La montagne en noir et blanc",
        year: 2025,
        mockup: "img/montagne.webp",
        images: {
          type: "gallery",
          srcs: [
            "img/photographies/montagne/1.webp",
            "img/photographies/montagne/2.webp",
            "img/photographies/montagne/3.webp",
            "img/photographies/montagne/4.webp"
          ]
        },
        competences: ["Photographie", "Cadrage", "Retouche photo"],
        logiciels: [
          { src: "img/lightroom.webp", alt: "Lightroom" }
        ]
      },
      {
        id: "dossier3",
        title: "Les Sables",
        year: 2025,
        mockup: "img/les-sables.webp",
        images: {
          type: "gallery",
          srcs: [
            "img/photographies/les-sables/1.webp",
            "img/photographies/les-sables/2.webp",
            "img/photographies/les-sables/3.webp",
            "img/photographies/les-sables/4.webp",
            "img/photographies/les-sables/5.webp"
          ]
        },
        competences: ["Photographie", "Cadrage", "Retouche photo"],
        logiciels: [
          { src: "img/lightroom.webp", alt: "Lightroom" }
        ]
      },
      {
        id: "dossier4",
        title: "Force animale",
        year: 2025,
        mockup: "img/animaux.webp",
        images: {
          type: "gallery",
          srcs: [
            "img/photographies/animaux/1.webp",
            "img/photographies/animaux/2.webp",
            "img/photographies/animaux/3.webp",
            "img/photographies/animaux/4.webp",
            "img/photographies/animaux/5.webp"
          ]
        },
        competences: ["Photographie", "Cadrage", "Retouche photo"],
        logiciels: [
          { src: "img/lightroom.webp", alt: "Lightroom" },
          { src: "img/photoshop.webp", alt: "Photoshop" }
        ]
      },
      {
        id: "dossier5",
        title: "Japon en lumière",
        year: 2025,
        mockup: "img/japon-lumiere.webp",
        images: {
          type: "gallery",
          srcs: [
            "img/photographies/japon-lumiere/1.webp",
            "img/photographies/japon-lumiere/2.webp",
            "img/photographies/japon-lumiere/3.webp",
            "img/photographies/japon-lumiere/4.webp",
            "img/photographies/japon-lumiere/5.webp",
            "img/photographies/japon-lumiere/6.webp"
          ]
        },
        competences: ["Photographie", "Cadrage", "Retouche photo"],
        logiciels: [
          { src: "img/lightroom.webp", alt: "Lightroom" }
        ]
      }
    ]
  },

  /* ============================================================
     DÉVELOPPEMENT
  ============================================================ */
  developpement: {
    label: "Développement",
    icon: "{ }",
    color: "#00F5D4",
    projects: [
      {
        id: "nutriway",
        title: "Nutriway",
        year: 2025,
        mockup: "img/nutriway.webp",
        lien: "https://hnutriway.fr/",
        description: `Vous arrivez ici sur le résultat d'un des plus gros projets de développement de ma deuxième année de BUT MMI : Nutriway.\n\nIl rassemble recherche et design UX/UI ainsi que développement back et front-end. Par groupe de 4, l'objectif était de mettre en place un concept unique autour du thème "À table" sur une période d'octobre à janvier 2026.\n\nNous avons débuté la recherche UX avec benchmark, réalisation d'interviews, conception d'un persona, idéation, etc. et avons imaginé le concept suivant : Nutriway, un site qui permet à l'utilisateur de choisir un objectif de santé atteignable grâce à l'alimentation et de lui proposer un programme de repas sur mesure, basé sur ses données personnelles.\n\nNous avons ainsi réalisé un moodboard puis les wireframes et prototypes de notre site en version mobile et desktop sur Figma, ainsi que des tests utilisateurs pour relever les points de blocage. Enfin, nous sommes passés à la partie UI en réalisant les maquettes finales.\n\nEn tant que cheffe de projet, la partie gestion de projet a représenté une part importante de la création de Nutriway. Nous avons élaboré un product backlog pour définir, entre autres, les fonctionnalités développées ou non, ainsi qu'un planning de suivi des tâches.\n\nPour l'étape de développement, je me suis occupée du développement back du site avec un camarade. J'ai utilisé l'IA ChatGPT pour générer 10 objectifs puis 12 recettes par objectif avant de les intégrer dans la base de données avec tous les champs nécessaires.\n\nLa sécurité a été un point important de notre projet, en particulier pour hasher les mots de passe dans la base de données ou pour rendre certaines pages accessibles seulement si l'utilisateur est connecté.\n\nPour finir, j'ai réalisé le dimensionnement du site, et nous avons acheté un nom de domaine chez Ionos et hébergé notre site sur O2switch.\n\nCe projet m'a ainsi permis de :\n● Comprendre et mettre en place une démarche de recherche UX/UI complète,\n● Réaliser des prototypes et maquettes Figma très aboutis,\n● Concevoir un product backlog,\n● Approfondir mes compétences en PHP (formulaire, système de session, favoris, back-office),\n● Réaliser le dimensionnement d'un site,\n● Expliquer de manière claire et synthétique mon travail devant un jury.`,
        competences: ["Gestion de projet", "Recherche UX/UI", "PHP", "Base de données", "Droit du numérique", "Hébergement", "Expression orale"],
        logiciels: [
          { src: "img/html.png",     alt: "HTML" },
          { src: "img/php.png",      alt: "PHP" },
          { src: "img/notion.png",   alt: "Notion" },
          { src: "img/github.png",   alt: "Github" },
          { src: "img/figma.png",    alt: "Figma" },
          { src: "img/vscode.png",   alt: "VSCode" },
          { src: "img/chatgpt.png",  alt: "ChatGPT" }
        ]
      },
      {
        id: "disnyz",
        title: "Disnyz — Les plus grandes recettes des films Disney",
        year: 2025,
        mockup: "img/disnyz.webp",
        lien: "https://hayrunnisacar.github.io/disnyz/",
        description: `Voici un projet très ambitieux. Dataviz avait pour objectif de montrer l'évolution de quelque chose à travers des données. Mon groupe et moi (3 personnes) avons décidé d'explorer le monde de Disney, univers qui a marqué notre enfance, afin de mettre en avant les plus grosses recettes des films et films d'animation Disney.\n\nNous avons ainsi rebaptisé notre projet Disnyz, prononcé /disniz/.\n\nNous n'avions que très peu de temps pour réaliser ce site one page (d'octobre à novembre 2025), mais surtout, avec mon groupe je me suis fixé l'objectif de terminer le code avant les vacances (dernière semaine d'octobre). C'est pourquoi nous avons eu : 4 jours pour définir toutes les sources et données, 4 jours pour réaliser les maquettes, et enfin, 10 jours pour coder le site en HTML, CSS, JavaScript.\n\nPour recenser les données nous avons utilisé le site Wikidata Multisearch et stocké les 648 films dans un tableau Excel. Nous l'avons ensuite exporté en fichier .CSV puis .JSON.\n\nJ'ai ensuite réalisé ma partie des maquettes sur Figma. Nous avons décidé de proposer un site totalement en anglais pour avoir plus de cohérence avec les données récupérées.\n\nEnfin, je suis passée à l'étape du code ! Pour développer les deux graphiques radiaux, j'ai passé des heures pour comprendre le fonctionnement des balises <path>, faire des calculs de coordonnées, etc. Finalement j'ai utilisé une fonction javascript que j'ai adaptée pour calculer le pourcentage des tours de cercle en fonction des recettes des 15 premiers films.\n\nCe projet m'a permis :\n● D'apprendre à utiliser un Github partagé,\n● D'approfondir mon apprentissage de JavaScript, en particulier les balises <path> et les fonctions,\n● De mettre en application mes connaissances sur le droit du numérique,\n● D'améliorer ma maîtrise de l'anglais.`,
        competences: ["Javascript", "HTML / CSS", "Anglais", "Droit du numérique", "Développement front"],
        logiciels: [
          { src: "img/javascript.png", alt: "JavaScript" },
          { src: "img/html.png",       alt: "HTML" },
          { src: "img/css.png",        alt: "CSS" },
          { src: "img/github.png",     alt: "Github" },
          { src: "img/figma.png",      alt: "Figma" },
          { src: "img/vscode.png",     alt: "VSCode" },
          { src: "img/chatgpt.png",    alt: "ChatGPT" }
        ]
      },
      {
        id: "webinventory",
        title: "Web Inventory — Les expressions françaises",
        year: 2024,
        mockup: "img/webinventory.webp",
        lien: "https://webinventory.nivinou.projetsmmichamps.fr/",
        description: `Web Inventory… Un des plus gros projets de ma première année de BUT MMI ! Beaucoup plus abouti et réussi que mon premier site web, j'en suis très fière.\n\nDe janvier à juin 2025, l'objectif était de coder un site interactif connecté à une base de données pour répertorier des éléments. J'ai choisi de développer un site sur les expressions françaises.\n\nTout d'abord, ce projet m'a demandé un gros travail de recensement des expressions. Il m'a fallu trouver la signification, la traduction anglaise, le siècle d'apparition et le contexte historique d'une cinquantaine d'expressions. J'ai donc travaillé avec un tableau sur Notion.\n\nEnsuite j'ai créé la base de données sur PhpMyAdmin. Puis je suis passée au code HTML, CSS, JavaScript, PHP. J'ai utilisé Github pour sauvegarder mon travail.\n\nLe code fut une étape laborieuse, mais j'ai tout de même réussi à obtenir le résultat que je souhaitais, en particulier pour le système de favoris sur chaque expression. J'ai également créé une session administrateur afin de pouvoir choisir d'intégrer ou non les expressions proposées par les utilisateurs.\n\nUne autre étape importante était la conformité de mon code et de mon site aux règles Opquast : appliquer les bonnes pratiques qui rendent un site plus fiable, inclusif, performant et respectueux de ses utilisateurs.\n\nCe projet m'a permis de :\n● Comprendre comment fonctionne une base de données sur PhpMyAdmin,\n● M'améliorer grandement en HTML, CSS, JavaScript et PHP,\n● Maîtriser l'utilisation de Github,\n● Travailler sur ma gestion du temps et de mon organisation,\n● Maîtriser l'hébergement et la mise en ligne d'un site web.`,
        competences: ["Créativité", "Organisation", "Autonomie", "Conception base de données", "Développement front"],
        logiciels: [
          { src: "img/php.png",        alt: "PHP" },
          { src: "img/html.png",       alt: "HTML" },
          { src: "img/css.png",        alt: "CSS" },
          { src: "img/javascript.png", alt: "JavaScript" },
          { src: "img/github.png",     alt: "Github" },
          { src: "img/notion.png",     alt: "Notion" },
          { src: "img/vscode.png",     alt: "VSCode" },
          { src: "img/chatgpt.png",    alt: "ChatGPT" }
        ]
      }
    ]
  },

  /* ============================================================
     UX / UI
  ============================================================ */
  uxui: {
    label: "UX / UI",
    icon: "◈",
    color: "#FEE440",
    projects: [
      {
        id: "uxui-placeholder",
        title: "Projets UX/UI — À venir",
        year: 2025,
        mockup: "img/meduse.png",
        description: `Cette section sera bientôt complétée avec mes projets de design UX/UI, wireframes et prototypes.`,
        competences: ["UX Research", "Wireframing", "Prototypage", "Tests utilisateurs"],
        logiciels: [
          { src: "img/figma.png", alt: "Figma" }
        ]
      }
    ]
  }

};