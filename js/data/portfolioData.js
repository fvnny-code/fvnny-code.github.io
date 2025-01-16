export const portfolioData = [
  {
    title: "FishEye",
    media: "./img/slides/projetFishEye/accueil.png",
    type: "image",
    description:
      "Création d'un site accessible pour une plateforme de photographes.",
    hashtags: ["#Accessibility", "#DesignPatterns", "#Javascript"],
    githubLink: "https://github.com/fvnny-code/Front-End-Fisheye",
    liveLink: "https://fvnny-code.github.io/Front-End-Fisheye/",
    modalContent: {
      steps: [
        "Intégration des pages statiques",
        "Gestion de la navigation entre les pages du site",
        "Création des composants : Modale de contact et lightbox",
        "Gestion des likes",
        "Système de tri des médias",
      ],
      technologies: [
        { name: "HTML5", icon: "fa-html5" },
        { name: "CSS3", icon: "fa-css3" },
        { name: "JavaScript", icon: "fa-js" },
      ],
    },
  },
  {
    title: "ArgentBank",
    media: "./img/slides/projetArgentBank/Accueil.png",
    type: "image",
    description:
      "Utilisation d'une API pour un compte utilisateur bancaire avec React.",
    hashtags: ["#React", "#Vitejs", "#NodeJs", "#Swagger"],
    githubLink: "https://github.com/fvnny-code/ArgentBank",
    modalContent: {
      steps: [
        "Implémentation du système d'authentification",
        "Intégration de la page de profil avec les informations relatives aux comptes bancaires",
        "Modélisation des transactions avec des endpoints d'API",
      ],
      technologies: [
        { name: "React", icon: "fa-react" },
        { name: "Node.js", icon: "fa-node" },
        { name: "MongoDB", image: "./img/icons/mongoDB_icon_.png" },
        { name: "Vitejs", image: "./img/icons/vitejs-pngrepo-com.png" },
      ],
    },
  },
  {
    title: "Billed",
    media: "./img/slides/projetBilled/Accueil.png",
    type: "image",
    description:
      "Fiabilisation et amélioration du parcours employé d'une application destinée aux équipes de ressources humaines",
    hashtags: ["#Javascript", "#Jest", "#Gherkin", "#ChromeDebugger"],
    githubLink: "https://github.com/fvnny-code/P9-Billed-app-FR-Front",
    modalContent: {
      steps: [
        "Debug avec Chrome Debugger",
        "Rédaction et implémentation de tests unitaires",
        "Elaboration d'un plan de tests end-to-end",
      ],
      technologies: [
        { name: "Javascript", icon: "fa-js" },
        { name: "Chrome", icon: "fa-chrome" },
      ],
    },
  },
  {
    title: "LearnAtHome",
    media: "./img/slides/projetLearn@home/02-Desktop Dashboard.png",
    type: "image",
    description:
      "Définition des besoins pour une application de soutien scolaire en adoptant une méthode Agile.",
    hashtags: ["#Notion", "#Figma", "#UseCase", "#Agile"],
    githubLink: "https://github.com/fvnny-code/P10-Learn-Home",
    modalContent: {
      steps: [
        "Identification des besoins de l'application à partir d'un cahier des charges",
        "Création de la maquette version desktop et mobile",
        "Modéliser une solution technique avec un diagramme de cas d'usage",
      ],
      technologies: [
        { name: "Figma", icon: "fa-figma" },
        { name: "Notion", image: "./img/icons/Notion-logo.png" },
        { name: "Drawio", image: "./img/icons/draw-io-logo.png" },
      ],
    },
  },
  {
    title: "HRNet",
    media: "./img/slides/projetHRnet/accueil.png",
    type: "image",
    description:
      "Optimisation des performances d'une application de gestion RH.",
    hashtags: [
      "#JQuery",
      "#React",
      "#Typescript",
      "#Vitejs",
      "#npm",
      "#Audit",
      "#GoogleLightHouse",
    ],
    githubLink: "https://github.com/fvnny-code/HRNet",
    liveLink: "https://hr-net-phi.vercel.app/",
    auditLink:
      "https://www.canva.com/design/DAFzwS7z8ck/Mx5aQD0KevVW3_jmaFsw0A/view?utm_content=DAFzwS7z8ck&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbedb1e4a10", // Lien vers l'audit
    modalContent: {
      steps: [
        "Refonte de l'application en React",
        "Conversion d'un plugin jQuery en librairie de composant React",
        "Audit de la page (google-lighthouse)",
      ],
      technologies: [
        { name: "React", icon: "fa-react" },
        { name: "Npn", icon: "fa-npm" },
        { name: "Typescript", image: "./img/icons/typescript-svgrepo-com.svg" },
        { name: "Vitejs", image: "./img/icons/vitejs-pngrepo-com.png" },
        {
          name: "Google LightHouse",
          image: "./img/icons/google-lighthouse.png",
        },
      ],
    },
  },
  {
    title: "Kaza",
    media: "./img/videos/kasa-video.mov",
    type: "video",
    description: "Création d'une application web de location immobilière",
    hashtags: ["#mobileFirst", "#Front-end", "#React"],
    githubLink: "https://github.com/fvnny-code/Kasa/tree/main/kasa",
    modalContent: {
      steps: [
        "Initialisation du projet avec Create React App",
        "Ajout de React Router",
        "Création du router et des différentes pages de l’application",
        "Gestion des erreurs avec redirection vers la page d'erreur",
      ],
      technologies: [
        { name: "React", icon: "fa-react" },
        { name: "Chrome", icon: "fa-css3" },
      ],
    },
  },
  {
    title: "Groupomania",
    media: "./img/videos/Groupomania-2.mp4",
    type: "video",
    description: "Création d'une application web de location immobilière",
    hashtags: ["#mobileFirst", "#Front-end", "#React"],
    githubLink: "https://github.com/fvnny-code/CodeccoFanny_7_21012022d",
    modalContent: {
      steps: [
        "Création de la base de données MySQL avec phpMyAdmin",
        "Initialisation du projet : installation et démarrage du serveur, et implémentation de la connexion à la base de données",
        "Construction du parcours utilisateur de l'API",
        "Implémentation des middlewares de l'API (auth. et multer)",
        "Construction du parcours des publications de l'API",
        "Installation de Vue-cli et initialisation de l'application : Container global et gestion du style dans App.vue",
        "Mise en place du routeur des pages",
        "Architecture du projet : Création des pages et des composants, avec gestion des scripts associés",
      ],
      technologies: [
        { name: "Html", icon: "fa-html5" },
        { name: "CSS", icon: "fa-css3" },
        { name: "Sass", icon: "fa-sass" },
        { name: "Vuejs", icon: "fa-vuejs" },
        { name: "NodeJs", icon: "fa-node" },
        { name: "MySQL", image: "./img/icons/mysql_icon_.png" },
      ],
    },
  },
  {
    title: "Hot Takes",
    media: "./img/slides/projet5/Hot-Takes-accueil.png",
    type: "image",
    description:
      "Implémentation du back-end pour un site d'avis de sauces piquantes, pour le compte d'une marque de condiments. Construction d'une API rest avec NodeJs.",
    hashtags: ["#back-end", "#Javascript", "#NodeJs", "MongoDB"],
    githubLink: "https://github.com/fvnny-code/CodeccoFanny_6_10112021",
    modalContent: {
      steps: [
        "Initialisation du projet (installation et démarrage du serveur)",
        "Construction du parcours utilisateur de l'API (avec un controller et un router)",
        "Implémentation des middlewares auth.js et multer.js",
        "Construction du parcours sauce de l'API",
      ],
      technologies: [
        { name: "Javascript", icon: "fa-js" },
        { name: "NodeJs", icon: "fa-node" },
        { name: "MongoDB", image: "./img/icons/mongoDB_icon_.png" },
      ],
    },
  },
  {
    title: "Orinounours",
    media: "./img/slides/projet4/Orinoco-accueil-1.png",
    type: "image",
    description:
      "Récupération des données de l'API avec la methode fetch Javascript et gestion du panier d'achats avec localStorage. Mise en place du front-end et des plans de tests pour un site e-commerce.",
    hashtags: ["#e-commerce", "#Javascript"],
    githubLink: "https://github.com/fvnny-code/CodeccoFanny_5_20082021",
    testsLink:
      "https://github.com/fvnny-code/CodeccoFanny_5_20082021/blob/main/%5BOC%5D%20Projet%205%20ORINOCO%20-%20plan%20de%20test.pdf", // Lien vers les tests
    modalContent: {
      steps: [
        "Création d'une maquette des pages web",
        "Implémentation de l'affichage des pages (traitement des requêtes vers l'API, récupération du localStorage dans le panier d'achat, confirmation de commande)",
        "Rédaction du plan de tests"
      ],
      technologies: [
        { name: "Html", icon: "fa-html5" },
        { name: "CSS", icon: "fa-css3" },
        { name: "Javascript", icon: "fa-js" },
        { name: "NodeJs", icon: "fa-node" },
      ],
    },
  },
  {
    title: "Oh My Food",
    media: "./img/videos/OhMyFood.mov",
    type: "video",
    description:
      "Intégration de maquette et dynamisation des pages d'un site web gastronomique, avec des effets graphiques CSS avancés sur les composants.",
    hashtags: ["#mobileFirst", "#Sass"],
    githubLink: "https://github.com/fvnny-code/CodeccoFanny_3_23062021",
    liveLink: "https://fvnny-code.github.io/CodeccoFanny_3_23062021/",
    modalContent: {
      steps: [
        "Mise en place de la structure HTML, selon la notation BEM",
        "Insertion du contenu textuel",
        "Implémentation des feuilles de styles avec Sass",
        "Création des animations complexes (loader, effets de couleurs sur les composants, apparitions, translsations...)",
        "Contrôle et correction du code avec le validateur W3C"
      ],
      technologies: [
        { name: "Html", icon: "fa-html5" },
        { name: "CSS", icon: "fa-css3" },
        { name: "Sass", icon: "fa-sass" },
      ],
    },
  },
];
