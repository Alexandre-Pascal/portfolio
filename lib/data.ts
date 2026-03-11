// Données du portfolio — Alexandre Pascal (extraction CV)

export interface PersonalInfo {
  name: string;
  location?: string;
  tagline: string;
  image?: string;
}

export interface ProfessionalInfo {
  title: string;
  subtitle: string;
  about: string;
  goal?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  city?: string;
  startYear: number;
  endYear: number;
  mention?: string;
  description?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  city?: string;
  startDate: string;
  endDate: string;
  type: string;
  points: string[];
}

export interface ProjectGalleryImage {
  src: string;
  caption: string;
}

export interface ProjectItem {
  slug: string;
  name: string;
  description: string;
  longDescription?: string; // Contenu détaillé (ex. extrait README) pour la page projet
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  reportUrl?: string; // Lien vers rapport de stage / doc (PDF)
  gallery?: ProjectGalleryImage[]; // Images avec légendes pour la page détail
  videoUrl?: string; // URL YouTube de démo (ex. https://www.youtube.com/watch?v=xxx)
  videoPlaybackRate?: number; // Vitesse de lecture par défaut (ex. 0.5)
}

export interface SkillCategory {
  name: string;
  items: { name: string; level?: string }[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: number;
  url?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  otherLinks?: { label: string; url: string }[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  professional: ProfessionalInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  certifications: CertificationItem[];
  contact: ContactInfo;
}

// ——— Contenu FR ———

const dataFr: PortfolioData = {
  personal: {
    name: "Alexandre Pascal",
    location: "Cahors, France",
    tagline:
      "Développeur blockchain : smart contracts, applications décentralisées et web.",
    image: "/images/profile.png",
  },
  professional: {
    title: "Développeur Blockchain",
    subtitle: "Solidity, React, Next.js",
    about:
      "Avec un BUT en informatique et une vraie passion pour la blockchain, je recherche un poste de développeur dans ce domaine. Lors de mes stages, j'ai contribué à l'analyse des besoins utilisateurs et au développement de solutions techniques. Sérieux et autonome, je suis prêt à mettre mes compétences au service de votre équipe dès janvier 2025.",
    goal: "Recherche un poste de développeur blockchain, disponible dès janvier 2025.",
  },
  education: [
    {
      degree: "BUT Informatique",
      institution:
        "Université de Pau et des Pays de l'Adour — IUT de Bayonne et du Pays Basque",
      city: "Anglet",
      startYear: 2021,
      endYear: 2024,
      description:
        "Réalisation d'applications : conception, développement, validation.",
    },
    {
      degree: "Baccalauréat général — Numérique et Sciences Informatique (NSI), Sciences de l'Ingénieur (SI)",
      institution: "Lycée polyvalent La Découverte",
      city: "Decazeville",
      startYear: 2018,
      endYear: 2021,
      mention: "Assez Bien",
    },
  ],
  experience: [
    {
      role: "Stagiaire développeur",
      company: "Centre Hospitalier Jean Rougier",
      city: "Cahors",
      startDate: "Mars 2024",
      endDate: "Juillet 2024",
      type: "Stage",
      points: [
        "Refonte de l'intranet de l'hôpital de Cahors.",
        "Objectif : permettre aux utilisateurs d'ajouter, modifier et supprimer des informations sans avoir à coder.",
        "Stack : React, Next.js, PostgreSQL.",
      ],
    },
    {
      role: "Stagiaire développeur",
      company: "EDICAD",
      city: "Cahors",
      startDate: "Avril 2023",
      endDate: "Juillet 2023",
      type: "Stage",
      points: [
        "Production du code côté client et serveur pour réaliser l'interface web d'une application telle que maquettée par les designers.",
        "Stack : C#, HTML, CSS, IIS, Blazor, .NET 7.",
      ],
    },
  ],
  projects: [
    {
      slug: "intranet-ch-cahors",
      name: "Intranet CH Cahors",
      description:
        "Refonte de l'intranet hospitalier en CMS personnalisé : gestion de contenu, migration Joomla → PostgreSQL, rôles et permissions. Stage au Centre Hospitalier Jean Rougier.",
      longDescription:
        "Contexte — L'ancien intranet du Centre Hospitalier Jean Rougier (Cahors) reposait sur Joomla. Il fallait le remplacer par un CMS sur mesure, plus adapté aux besoins des équipes et plus simple à maintenir.\n\nObjectifs — Permettre à tout le monde de créer et gérer des pages, articles et contenus sans coder ; migrer les données existantes de MySQL (Joomla) vers PostgreSQL ; mettre en place une gestion des utilisateurs et des rôles avec permissions (accès selon les responsabilités : lecteur, éditeur, administrateur).\n\nMéthodologie — Gestion de projet avec Monday.com, maquettes et prototypes avec Figma, développement en sprints. Analyse de l'existant et recueil des besoins des utilisateurs avant la conception technique.\n\nDéveloppement — Menu de navigation dynamique selon les droits ; API REST pour les pages, articles et médias ; éditeur de contenu riche (TipTap) avec tables, listes, tâches, couleurs, liens et images, et collaboration temps réel (Yjs, Hocuspocus) ; gestion des fichiers, images et vidéos ; authentification JWT (jose, bcrypt) ; rôles et permissions en base (Prisma) ; déploiement et mise en production.\n\nStack technique — Next.js 14 (App Router), TypeScript, React, Prisma (ORM), PostgreSQL. UI : NextUI, Radix UI, Tailwind CSS, react-hook-form + Zod. Cache côté client : SWR. Tests : Jest + Testing Library. Structure : app/, components/, prisma/, middleware d'auth.\n\nRésultats — Interface CMS livrée avec page d'accueil, menu selon le profil, formulaire de connexion, espaces d'édition pour les pages et articles, gestion des médias. Un rapport de stage détaillé (PDF) décrit l'ensemble du projet.",
      technologies: ["Next.js", "TypeScript", "React", "Prisma", "PostgreSQL", "TipTap", "Tailwind"],
      repoUrl: "https://github.com/Alexandre-Pascal/Intranet-CH-Cahors",
      image: "/images/projects/intranet-ch-cahors/intranet-gallery-01.png",
      reportUrl: "/documents/rapport-stage-ch-cahors.pdf",
      gallery: [
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-01.png", caption: "Page d'accueil (utilisateur connecté)" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-02.png", caption: "Menu de navigation" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-04.png", caption: "Formulaire de connexion" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-05.png", caption: "Interface d'édition de contenu" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-06.png", caption: "Gestion des médias et fichiers" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-07.png", caption: "Éditeur riche (TipTap)" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-08.png", caption: "Aperçu d'une page publiée" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-09.png", caption: "Interface d'administration — gestion des utilisateurs et rôles" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-10.png", caption: "Interface d'administration — création d'un rôle et permissions" },
      ],
    },
    {
      slug: "ladoree-web3",
      name: "Ladorée — Concept store blockchain",
      description:
        "Concept store (œuvres d'art, créations locales) avec NFT pour l'authenticité, token $LDR, marketplace et royalties. Indexation The Graph, paiements Stripe.",
      longDescription:
        "Ladorée est un concept store déjà existant proche de Toulouse. L’objectif du projet est d’offrir un marketplace simple pour mettre en vente et acheter des œuvres (art, créations locales), tout en intégrant des fonctionnalités rendues possibles par la blockchain.\n\nPour les créateurs : certification des œuvres par la boutique, mise en vente sur le marketplace avec les informations de l’œuvre (nom, description, type d’art, date, image). Chaque vente peut améliorer la réputation et la visibilité. À chaque revente d’une œuvre, une part des bénéfices revient automatiquement au créateur (royalties). Suivi des œuvres vendues et des transactions.\n\nPour les acheteurs : parcourir le marketplace, acheter des œuvres en euros (paiement Stripe). Chaque achat donne droit à un certificat d’authenticité (NFT) et à la traçabilité de l’œuvre. Possibilité de revendre une œuvre ; le créateur original reçoit alors une part. Le token LDR permet d’obtenir des réductions sur les frais (jusqu’à 10 % pour l’acheteur et 10 % pour le vendeur) et des avantages selon la quantité détenue (niveaux type bronze, or, etc.) ou en verrouillant des tokens (avantages type staking, réduction des frais de transaction).\n\nCôté technique : smart contracts sur Polygon (authenticité des œuvres, token de fidélité LDR, marketplace, gestion des utilisateurs et rôles), frontend Next.js, connexion portefeuille (Metamask, Rabby, etc.), paiements en euros via Stripe. Projet réalisé dans le cadre du carnet de projet et de la certification Alyra (RS6515).",
      technologies: ["Solidity", "Hardhat", "Next.js", "The Graph", "Stripe", "IPFS", "Wagmi"],
      liveUrl: "https://ladoree-web3.vercel.app/",
      repoUrl: "https://github.com/Alexandre-Pascal/ladoree-web3",
      image: "/images/projects/ladoree-web3/ladoree-explore.png",
      videoUrl: "https://www.youtube.com/watch?v=cPwGIOdOi7A",
      videoPlaybackRate: 0.5,
      gallery: [
        { src: "/images/projects/ladoree-web3/ladoree-parcours.png", caption: "Parcours utilisateur — Créateur, Acheteur, LDR et NFT" },
        { src: "/images/projects/ladoree-web3/ladoree-explore.png", caption: "Page Explore — marketplace et œuvres" },
        { src: "/images/projects/ladoree-web3/ladoree-detail-oeuvre.png", caption: "Détail d'une œuvre — achat et NFT" },
        { src: "/images/projects/ladoree-web3/ladoree-dashboard.png", caption: "Profil utilisateur et tableau de bord LDR" },
        { src: "/images/projects/ladoree-web3/ladoree-mettre-en-vente.png", caption: "Mettre en vente une œuvre" },
        { src: "/images/projects/ladoree-web3/ladoree-architecture.png", caption: "Architecture décentralisée — Polygon, contrats, frontend" },
      ],
    },
    {
      slug: "blockchain-bank",
      name: "Blockchain Bank",
      description:
        "Mini-projet formation Alyra : dApp bancaire décentralisée sur Sepolia — dépôts, retraits, transferts via smart contracts. Déployée sur Vercel.",
      longDescription:
        "Blockchain Bank est un système bancaire décentralisé construit sur la blockchain, permettant de gérer des fonds de manière sécurisée. Ce mini-projet de la formation Alyra illustre l'utilisation des smart contracts dans une application financière.\n\nUn smart contract unique gère les soldes, les dépôts et les retraits ; l'historique des opérations est enregistré sur la chaîne et affiché dans l'interface.\n\nFonctionnalités : suivi des soldes en temps réel ; dépôts et retraits sécurisés ; historique des transactions. Connexion via portefeuille (Metamask, Rabby) sur le réseau de test Sepolia. Déployé sur Vercel.",
      technologies: ["Solidity", "Next.js", "Ethers", "Wagmi", "Viem", "Ethereum"],
      liveUrl: "https://blockchain-bank.vercel.app",
      repoUrl: "https://github.com/Alexandre-Pascal/blockchain-bank",
      image: "/images/projects/blockchain-bank/blockchain-bank-dashboard.png",
      gallery: [
        { src: "/images/projects/blockchain-bank/blockchain-bank-dashboard.png", caption: "Interface : solde, dépôt, retrait et historique des transactions (Sepolia)" },
        { src: "/images/projects/blockchain-bank/blockchain-bank-wallet.png", caption: "Confirmation de transaction dans le portefeuille (réseau Sepolia)" },
      ],
    },
    {
      slug: "arbirange",
      name: "ArbiRange",
      description:
        "Robo-advisor DeFi en cours de développement : Vault Uniswap V3 sur Arbitrum, dépôts/retraits en parts, rebalance automatisé par un bot. Projet personnel pour faciliter mes rendements.",
      longDescription:
        "ArbiRange est un robo-advisor DeFi qui gère automatiquement une position de liquidité Uniswap V3 sur Arbitrum au nom des déposants. Projet en cours de développement, que j'aimerais mettre en place pour faciliter mes rendements.\n\nEn bref : les utilisateurs déposent un actif (ex. USDC) dans un Vault ; un bot place et recentre régulièrement ces fonds dans une position LP Uniswap V3 (range) pour capter des frais et optimiser l'exposition au prix ; les utilisateurs peuvent retirer selon la valeur de leur part (shares, standard type ERC-4626). Le Vault est non-custodial : les fonds restent dans un contrat on-chain, le bot n'exécute que des opérations autorisées (rebalance, collecte de frais). Rôles distincts : Admin (pause, paramètres), Operator (bot), utilisateurs (dépôt, retrait).\n\nAvancement : les contrats (Vault, rebalance, collecte de frais), le bot (stratégie de range, rentabilité, kill switch) et le dashboard (dépôt, retrait, pause, événements) sont en place et testés en local. La CI/CD et la documentation (déploiement bot, checklist production) sont prêtes. Reste à faire : déploiement sur Arbitrum Sepolia puis Arbitrum One, configuration Admin/Operator, hébergement du bot en production et monitoring. Cible : Arbitrum One.",
      technologies: ["Solidity", "Foundry", "Next.js", "Uniswap V3", "Arbitrum", "TypeScript"],
      repoUrl: "https://github.com/Alexandre-Pascal/arbirange",
    },
    {
      slug: "liquidity-farming-tracker",
      name: "Liquidity Farming Tracker",
      description:
        "Suivi des positions de liquidité DeFi (Uniswap, Raydium, AAVE) multi-chaînes : pools, frais collectés, sorties, récapitulatif et statistiques de rendement.",
      longDescription:
        "L’application sert à suivre tes positions de liquidité DeFi (Uniswap, Raydium, AAVE) sur plusieurs blockchains (Ethereum, Arbitrum, Unichain, Base, Solana), à enregistrer les frais collectés et à calculer des rendements et des statistiques.\n\nGestion des pools : ajout d’un pool (paire, quantité investie $, range, plateforme, blockchain, date d’entrée) et liste des pools en cours.\n\nSortie et récapitulatif : clôture d’une position (date de sortie, montant récupéré, frais à la sortie) ; tableau récapitulatif de tous les pools (ouverts et fermés) avec frais cumulés et statut.\n\nFrais collectés : saisie des frais au fil du temps (par pool, date, montant $) pour suivre la performance sans fermer la position.\n\nHistorique des frais : tableau historique des frais et graphique d’évolution des frais cumulés par pool ; montant total investi (pools ouverts) et rendement annualisé global.\n\nStatistiques : répartitions par plateforme et par blockchain (montant investi, nombre de pools, frais cumulés) et rendement annualisé par plateforme.\n\nDonnées : pools.csv (un enregistrement par pool) et frais.csv (une ligne par saisie de frais). Installation : voir le repo (Python, Streamlit, pandas, matplotlib). Licence MIT.",
      technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "DeFi"],
      repoUrl: "https://github.com/Alexandre-Pascal/liquidity-farming-tracker",
      image: "/images/projects/liquidity-farming-tracker/farming-historique-frais.png",
      gallery: [
        { src: "/images/projects/liquidity-farming-tracker/farming-historique-frais.png", caption: "Historique des frais — tableau et évolution cumulée par pool" },
        { src: "/images/projects/liquidity-farming-tracker/farming-gestion-pools.png", caption: "Gestion des pools — ajout et liste des positions en cours" },
        { src: "/images/projects/liquidity-farming-tracker/farming-sortie-recap.png", caption: "Sortie et récapitulatif — clôture des positions et vue d’ensemble" },
        { src: "/images/projects/liquidity-farming-tracker/farming-frais-collectes.png", caption: "Frais collectés — saisie des frais au fil du temps" },
        { src: "/images/projects/liquidity-farming-tracker/farming-statistiques.png", caption: "Statistiques — frais et rendements par plateforme et blockchain" },
      ],
    },
    {
      slug: "chrono-meditation",
      name: "Chrono Méditation",
      description:
        "Chronomètre de méditation avec durées et intervalles sonores personnalisables. Sons distincts pour les intervalles et la fin de session.",
      longDescription:
        "Application mobile de chronomètre conçue pour accompagner les séances de méditation, sans avoir à reconfigurer le minuteur à chaque utilisation. Interface simple, épurée et minimaliste.\n\nFonctionnalités : chronomètre personnalisable avec durée prédéfinie ; décompte silencieux pour une immersion totale ; option de redémarrage rapide pour enchaîner les sessions ; sons distincts pour les intervalles et la fin de session (expo-av, react-native-sound).\n\nDisponible en APK (Android). Développée avec Expo et React Native (expo-router, expo-av, Slider, TypeScript). Utilisation : régler la durée, lancer le chronomètre et méditer sans regarder l'écran.",
      technologies: ["React Native", "Expo", "TypeScript"],
      repoUrl: "https://github.com/Alexandre-Pascal/chrono-meditation",
    },
    {
      slug: "crypto-chart-bot-discord",
      name: "Crypto Chart Bot (Discord)",
      description:
        "Bot Discord pour générer des graphiques de prix crypto (Binance API). Commandes /chart, /chart_btc, /chart_eth, /chart_sol. Déployé sur Render.",
      longDescription:
        "Bot Discord qui génère des graphiques de prix pour différentes cryptomonnaies en utilisant l'API Binance. Fournit des graphiques pour Bitcoin, Ethereum, Solana et d'autres paires selon les commandes.\n\nCommandes slash : /chart (options : crypto ex. BTCUSDT, intervalle ex. 1h/1d, limite) ; /chart_btc, /chart_eth, /chart_sol — graphiques sur 1 an, daily. Chaque commande affiche aussi le prix actuel de la crypto. Exemple : /chart crypto:BTCUSDT interval:1d limit:365.\n\nDépendances : discord.js (interactions Discord), axios (requêtes API Binance), canvas (création des graphiques). Déploiement : Render (service web, variables d'environnement BOT_TOKEN). Un lien d'invitation permet d'ajouter le bot à n'importe quel serveur Discord. Un fichier GUIDE.md détaille l'installation et la configuration (Discord Developer Portal, permissions, déploiement local).",
      technologies: ["JavaScript", "Discord.js", "Axios", "Canvas", "API Binance"],
      repoUrl: "https://github.com/Alexandre-Pascal/CryptoChartBot-Discord",
    },
    {
      slug: "interface-web-edicad",
      name: "Interface web — EDICAD",
      description:
        "Développement de l'interface web d'une application métier à partir des maquettes designers (client et serveur). Stage EDICAD.",
      longDescription:
        "Production du code côté client et serveur pour réaliser l'interface web d'une application telle que maquettée par les designers. Stack : C#, HTML, CSS, IIS, Blazor, .NET 7. Stage réalisé à EDICAD (Cahors).",
      technologies: ["C#", "Blazor", ".NET 7", "HTML", "CSS", "IIS"],
    },
    {
      slug: "valpineta",
      name: "Valpineta",
      description:
        "Projet tutoré BUT 3e année : application mobile pour le refuge de Pineta et les randonneurs — cartes, tracés, points d'intérêt, mode hors-ligne.",
      longDescription:
        "Projet tutoré de troisième (et dernière) année de BUT Informatique à l'IUT de Bayonne. Équipe de cinq étudiants. Partenaire : le refuge de Pineta (valpineta.eu).\n\nBesoin : une application mobile pour que les randonneurs aient accès aux tracés et aux cartes, et puissent placer des points d'intérêt (belle vue, arbre bloquant le chemin, etc.) lors d'une balade. Contrainte forte : l'application doit fonctionner hors-ligne (pas de connexion en montagne).\n\nStructure du dépôt : Documentation (doc utile au projet) ; src (code de l'application) ; api-wp (backend) ; archives. Tuiles de carte : dossier Tiles + tiles_struct.json à placer dans src/assets/. Tests unitaires et d'intégration (Jest), tests E2E Maestro. Stack : React Native (Expo), TypeScript, react-native-maps (cartographie), MobX / MobX State Tree (état), Expo Location et File System (localisation et stockage), i18n-js (multilingue). Build iOS/Android (EAS), APK release possible.",
      technologies: ["React Native", "Expo", "TypeScript", "react-native-maps", "MobX", "Jest"],
      repoUrl: "https://github.com/Alexandre-Pascal/Valpineta",
    },
  ],
  skills: [
    {
      name: "Langages & blockchain",
      items: [
        { name: "Solidity", level: "En formation" },
        { name: "JavaScript", level: "Intermédiaire" },
        { name: "C#", level: "Intermédiaire" },
        { name: "C++", level: "Intermédiaire" },
        { name: "SQL", level: "Intermédiaire" },
      ],
    },
    {
      name: "Frameworks & outils web",
      items: [
        { name: "Next.js", level: "Intermédiaire" },
        { name: "React", level: "Intermédiaire" },
        { name: "Blazor", level: "Intermédiaire" },
        { name: ".NET 7", level: "Intermédiaire" },
        { name: "HTML / CSS", level: "Intermédiaire" },
      ],
    },
    {
      name: "Bases de données & serveur",
      items: [
        { name: "PostgreSQL", level: "Intermédiaire" },
        { name: "IIS", level: "Intermédiaire" },
      ],
    },
    {
      name: "Compétences transversales",
      items: [
        { name: "Méthodes agiles" },
        { name: "Veille technologique" },
        { name: "Adaptabilité" },
        { name: "Gestion de projet" },
        { name: "Analyse des besoins clients" },
      ],
    },
    {
      name: "Langues",
      items: [
        { name: "Anglais", level: "Courant" },
        { name: "Espagnol", level: "Intermédiaire" },
      ],
    },
  ],
  certifications: [
    {
      name: "RS6515 — Développer une application décentralisée avec les technologies blockchain",
      issuer: "Alyra (France Compétences)",
      year: 2025,
      url: "https://certificate.alyra.fr/check/86E51E2C872253705AE60A4512BA2068DCECBD80ECB4D017CCF1ECDBA15C50B5RFFUWDVFNU9UV0dNZUt6cW9VSDIrQmovRWRYZDBIMW94c1ZnWjAra2tsNlNUU3dm",
    },
  ],
  contact: {
    email: "alexandre.pascal.ep@gmail.com",
    linkedin: "https://www.linkedin.com/in/alexandre-pascal-69a63524b/",
    github: "https://github.com/Alexandre-Pascal",
    otherLinks: [{ label: "Certificat Alyra (PDF)", url: "/certificat-alyra.pdf" }],
  },
};

// ——— Contenu EN ———

const dataEn: PortfolioData = {
  personal: {
    name: "Alexandre Pascal",
    location: "Cahors, France",
    tagline:
      "Blockchain developer: smart contracts, decentralised applications and web.",
  },
  professional: {
    title: "Blockchain Developer",
    subtitle: "Solidity, React, Next.js",
    about:
      "With a bachelor's degree in computer science and a real passion for blockchain, I am looking for a developer position in this field. During my internships, I contributed to user needs analysis and the development of technical solutions. Reliable and autonomous, I am ready to put my skills at the service of your team from January 2025.",
    goal: "Seeking a blockchain developer position, available from January 2025.",
  },
  education: [
    {
      degree: "Bachelor's in Computer Science (BUT)",
      institution:
        "Université de Pau et des Pays de l'Adour — IUT de Bayonne et du Pays Basque",
      city: "Anglet",
      startYear: 2021,
      endYear: 2024,
      description:
        "Application development: design, development, validation.",
    },
    {
      degree: "General Baccalaureate — Computer Science (NSI), Engineering Sciences (SI)",
      institution: "Lycée polyvalent La Découverte",
      city: "Decazeville",
      startYear: 2018,
      endYear: 2021,
      mention: "Good standing",
    },
  ],
  experience: [
    {
      role: "Developer Intern",
      company: "Centre Hospitalier Jean Rougier",
      city: "Cahors",
      startDate: "March 2024",
      endDate: "July 2024",
      type: "Internship",
      points: [
        "Overhaul of the Cahors hospital intranet.",
        "Goal: enable users to add, edit and delete content without coding.",
        "Stack: React, Next.js, PostgreSQL.",
      ],
    },
    {
      role: "Developer Intern",
      company: "EDICAD",
      city: "Cahors",
      startDate: "April 2023",
      endDate: "July 2023",
      type: "Internship",
      points: [
        "Developed client- and server-side code for a web application interface as designed by the design team.",
        "Stack: C#, HTML, CSS, IIS, Blazor, .NET 7.",
      ],
    },
  ],
  projects: [
    {
      slug: "intranet-ch-cahors",
      name: "Intranet CH Cahors",
      description:
        "Hospital intranet overhaul into a custom CMS: content management, Joomla to PostgreSQL migration, roles and permissions. Internship at Centre Hospitalier Jean Rougier.",
      longDescription:
        "Context — The former intranet of Centre Hospitalier Jean Rougier (Cahors) was built on Joomla. It had to be replaced by a custom CMS, better suited to the teams' needs and easier to maintain.\n\nGoals — Enable anyone to create and manage pages, articles and content without coding; migrate existing data from MySQL (Joomla) to PostgreSQL; implement user and role management with permissions (access by responsibility: reader, editor, administrator).\n\nMethodology — Project management with Monday.com, mockups and prototypes with Figma, development in sprints. Analysis of the existing system and user needs before technical design.\n\nDevelopment — Dynamic navigation menu based on permissions; REST API for pages, articles and media; rich content editor (TipTap) with tables, lists, tasks, colours, links and images, and real-time collaboration (Yjs, Hocuspocus); file, image and video management; JWT authentication (jose, bcrypt); roles and permissions in the database (Prisma); deployment and production rollout.\n\nTech stack — Next.js 14 (App Router), TypeScript, React, Prisma (ORM), PostgreSQL. UI: NextUI, Radix UI, Tailwind CSS, react-hook-form + Zod. Client-side cache: SWR. Tests: Jest + Testing Library. Structure: app/, components/, prisma/, auth middleware.\n\nResults — CMS interface delivered with homepage, profile-based menu, login form, editing spaces for pages and articles, and media management. A detailed internship report (PDF) describes the full project.",
      technologies: ["Next.js", "TypeScript", "React", "Prisma", "PostgreSQL", "TipTap", "Tailwind"],
      repoUrl: "https://github.com/Alexandre-Pascal/Intranet-CH-Cahors",
      image: "/images/projects/intranet-ch-cahors/intranet-gallery-01.png",
      reportUrl: "/documents/rapport-stage-ch-cahors.pdf",
      gallery: [
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-01.png", caption: "Homepage (logged-in user)" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-02.png", caption: "Navigation menu" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-04.png", caption: "Login form" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-05.png", caption: "Content editing interface" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-06.png", caption: "Media and file management" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-07.png", caption: "Rich editor (TipTap)" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-08.png", caption: "Published page preview" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-09.png", caption: "Admin interface — user and role management" },
        { src: "/images/projects/intranet-ch-cahors/intranet-gallery-10.png", caption: "Admin interface — role creation and permissions" },
      ],
    },
    {
      slug: "ladoree-web3",
      name: "Ladorée — Blockchain concept store",
      description:
        "Concept store (art, local creations) with NFT authenticity, $LDR token, marketplace and royalties. The Graph indexing, Stripe payments.",
      longDescription:
        "Ladorée is an existing concept store near Toulouse. The project aims to provide a simple marketplace to list and buy artworks (art, local creations), while integrating blockchain-based features.\n\nFor creators: certification of works by the store, listing on the marketplace with artwork details (name, description, art type, date, image). Each sale can improve reputation and visibility. On every resale of an artwork, a share of the proceeds goes automatically to the original creator (royalties). Tracking of sold works and transactions.\n\nFor buyers: browse the marketplace, purchase artworks in euros (Stripe). Each purchase grants an authenticity certificate (NFT) and traceability of the piece. Buyers can resell; the original creator then receives a share. The LDR token provides discounts on fees (up to 10% for buyer and 10% for seller) and benefits based on how much is held (e.g. bronze, gold tiers) or by locking tokens (staking-style benefits, lower transaction fees).\n\nOn the technical side: smart contracts on Polygon (artwork authenticity, LDR loyalty token, marketplace, user and role management), Next.js frontend, wallet connection (Metamask, Rabby, etc.), euro payments via Stripe. Project carried out as part of the Alyra certification (RS6515).",
      technologies: ["Solidity", "Hardhat", "Next.js", "The Graph", "Stripe", "IPFS", "Wagmi"],
      liveUrl: "https://ladoree-web3.vercel.app/",
      repoUrl: "https://github.com/Alexandre-Pascal/ladoree-web3",
      image: "/images/projects/ladoree-web3/ladoree-explore.png",
      videoUrl: "https://www.youtube.com/watch?v=cPwGIOdOi7A",
      videoPlaybackRate: 0.5,
      gallery: [
        { src: "/images/projects/ladoree-web3/ladoree-parcours.png", caption: "User journey — Creator, Buyer, LDR and NFT" },
        { src: "/images/projects/ladoree-web3/ladoree-explore.png", caption: "Explore page — marketplace and artworks" },
        { src: "/images/projects/ladoree-web3/ladoree-detail-oeuvre.png", caption: "Artwork detail — purchase and NFT" },
        { src: "/images/projects/ladoree-web3/ladoree-dashboard.png", caption: "User profile and LDR dashboard" },
        { src: "/images/projects/ladoree-web3/ladoree-mettre-en-vente.png", caption: "List an artwork for sale" },
        { src: "/images/projects/ladoree-web3/ladoree-architecture.png", caption: "Decentralised architecture — Polygon, contracts, frontend" },
      ],
    },
    {
      slug: "blockchain-bank",
      name: "Blockchain Bank",
      description:
        "Alyra training mini-project: decentralised banking dApp on Sepolia — deposits, withdrawals, transfers via smart contracts. Deployed on Vercel.",
      longDescription:
        "Blockchain Bank is a decentralised banking system built on blockchain, enabling users to manage funds securely. This mini-project from the Alyra training illustrates the use of smart contracts in a financial application.\n\nA single smart contract handles balances, deposits and withdrawals; the operation history is recorded on-chain and displayed in the interface.\n\nFeatures: real-time balance tracking; secure deposits and withdrawals; transaction history. Connect via wallet (Metamask, Rabby) on the Sepolia test network. Deployed on Vercel.",
      technologies: ["Solidity", "Next.js", "Ethers", "Wagmi", "Viem", "Ethereum"],
      liveUrl: "https://blockchain-bank.vercel.app",
      repoUrl: "https://github.com/Alexandre-Pascal/blockchain-bank",
      image: "/images/projects/blockchain-bank/blockchain-bank-dashboard.png",
      gallery: [
        { src: "/images/projects/blockchain-bank/blockchain-bank-dashboard.png", caption: "Interface: balance, deposit, withdrawal and transaction history (Sepolia)" },
        { src: "/images/projects/blockchain-bank/blockchain-bank-wallet.png", caption: "Transaction confirmation in wallet (Sepolia network)" },
      ],
    },
    {
      slug: "arbirange",
      name: "ArbiRange",
      description:
        "DeFi robo-advisor in development: Uniswap V3 Vault on Arbitrum, deposit/withdraw in shares, rebalance automated by a bot. Personal project to facilitate my yields.",
      longDescription:
        "ArbiRange is a DeFi robo-advisor that automatically manages a Uniswap V3 liquidity position on Arbitrum on behalf of depositors. Project in development, which I want to set up to facilitate my yields.\n\nIn short: users deposit an asset (e.g. USDC) into a Vault; a bot regularly places and recentres these funds in a Uniswap V3 LP position (range) to capture fees and optimise price exposure; users can withdraw according to the value of their share (shares, ERC-4626-style standard). The Vault is non-custodial: funds stay in an on-chain contract, the bot only executes authorised operations (rebalance, fee collection). Separate roles: Admin (pause, parameters), Operator (bot), users (deposit, withdraw).\n\nProgress: contracts (Vault, rebalance, fee collection), bot (range strategy, profitability, kill switch) and dashboard (deposit, withdraw, pause, events) are in place and tested locally. CI/CD and documentation (bot deployment, production checklist) are ready. Still to do: deploy on Arbitrum Sepolia then Arbitrum One, configure Admin/Operator, host the bot in production and set up monitoring. Target: Arbitrum One.",
      technologies: ["Solidity", "Foundry", "Next.js", "Uniswap V3", "Arbitrum", "TypeScript"],
      repoUrl: "https://github.com/Alexandre-Pascal/arbirange",
    },
    {
      slug: "liquidity-farming-tracker",
      name: "Liquidity Farming Tracker",
      description:
        "Track DeFi liquidity positions (Uniswap, Raydium, AAVE) across chains: pools, collected fees, exits, summary and yield statistics.",
      longDescription:
        "The app lets you track your DeFi liquidity positions (Uniswap, Raydium, AAVE) across multiple blockchains (Ethereum, Arbitrum, Unichain, Base, Solana), record collected fees and compute yields and statistics.\n\nPool management: add a pool (pair, invested amount $, range, platform, blockchain, entry date) and list current pools.\n\nExit and summary: close a position (exit date, amount recovered, fees at exit); summary table of all pools (open and closed) with cumulative fees and status.\n\nCollected fees: record fees over time (per pool, date, amount $) to track performance without closing the position.\n\nFee history: historical fee table and chart of cumulative fees per pool; total amount invested (open pools) and overall annualised yield.\n\nStatistics: breakdown by platform and blockchain (amount invested, number of pools, cumulative fees) and annualised yield per platform.\n\nData: pools.csv (one record per pool) and frais.csv (one row per fee entry). Installation: see repo (Python, Streamlit, pandas, matplotlib). MIT licence.",
      technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "DeFi"],
      repoUrl: "https://github.com/Alexandre-Pascal/liquidity-farming-tracker",
      image: "/images/projects/liquidity-farming-tracker/farming-historique-frais.png",
      gallery: [
        { src: "/images/projects/liquidity-farming-tracker/farming-historique-frais.png", caption: "Fee history — table and cumulative evolution per pool" },
        { src: "/images/projects/liquidity-farming-tracker/farming-gestion-pools.png", caption: "Pool management — add and list current positions" },
        { src: "/images/projects/liquidity-farming-tracker/farming-sortie-recap.png", caption: "Exit and summary — close positions and overview" },
        { src: "/images/projects/liquidity-farming-tracker/farming-frais-collectes.png", caption: "Collected fees — record fees over time" },
        { src: "/images/projects/liquidity-farming-tracker/farming-statistiques.png", caption: "Statistics — fees and yields by platform and blockchain" },
      ],
    },
    {
      slug: "chrono-meditation",
      name: "Meditation Chrono",
      description:
        "Meditation timer with customisable session length and sound intervals. Distinct sounds for intervals and session end.",
      longDescription:
        "Mobile meditation timer app designed to support meditation sessions without having to reconfigure the timer each time. Simple, clean, minimal interface.\n\nFeatures: customisable timer with preset duration; silent countdown for full immersion; quick restart option to chain sessions; distinct sounds for intervals and session end (expo-av, react-native-sound).\n\nAvailable as APK (Android). Built with Expo and React Native (expo-router, expo-av, Slider, TypeScript). Usage: set duration, start the timer and meditate without looking at the screen.",
      technologies: ["React Native", "Expo", "TypeScript"],
      repoUrl: "https://github.com/Alexandre-Pascal/chrono-meditation",
    },
    {
      slug: "crypto-chart-bot-discord",
      name: "Crypto Chart Bot (Discord)",
      description:
        "Discord bot to generate crypto price charts (Binance API). Commands /chart, /chart_btc, /chart_eth, /chart_sol. Deployed on Render.",
      longDescription:
        "Discord bot that generates price charts for various cryptocurrencies using the Binance API. Provides charts for Bitcoin, Ethereum, Solana and other pairs depending on commands.\n\nSlash commands: /chart (options: crypto e.g. BTCUSDT, interval e.g. 1h/1d, limit); /chart_btc, /chart_eth, /chart_sol — charts over 1 year, daily. Each command also displays the current price of the crypto. Example: /chart crypto:BTCUSDT interval:1d limit:365.\n\nDependencies: discord.js (Discord interactions), axios (Binance API requests), canvas (chart creation). Deployment: Render (web service, BOT_TOKEN environment variable). An invite link allows adding the bot to any Discord server. A GUIDE.md file details installation and configuration (Discord Developer Portal, permissions, local deployment).",
      technologies: ["JavaScript", "Discord.js", "Axios", "Canvas", "Binance API"],
      repoUrl: "https://github.com/Alexandre-Pascal/CryptoChartBot-Discord",
    },
    {
      slug: "interface-web-edicad",
      name: "Web interface — EDICAD",
      description:
        "Business application web interface from designer mockups (client and server). EDICAD internship.",
      longDescription:
        "Client- and server-side code to build the web interface of a business application as designed by the design team. Stack: C#, HTML, CSS, IIS, Blazor, .NET 7. Internship at EDICAD (Cahors).",
      technologies: ["C#", "Blazor", ".NET 7", "HTML", "CSS", "IIS"],
    },
    {
      slug: "valpineta",
      name: "Valpineta",
      description:
        "Third-year group project (BUT): mobile app for Refuge de Pineta and hikers — maps, trails, points of interest, offline mode.",
      longDescription:
        "Third and final year group project in the Computer Science bachelor (BUT) at IUT Bayonne. Team of five students. Partner: Refuge de Pineta (valpineta.eu).\n\nNeed: a mobile app so hikers can access trails and maps, and place points of interest (scenic view, blocked path, etc.) during a hike. Key constraint: the app must work offline (no connection in the mountains).\n\nRepository structure: Documentation (project documentation); src (application code); api-wp (backend); archives. Map tiles: Tiles folder + tiles_struct.json to be placed in src/assets/. Unit and integration tests (Jest), Maestro E2E tests. Stack: React Native (Expo), TypeScript, react-native-maps (mapping), MobX / MobX State Tree (state), Expo Location and File System (location and storage), i18n-js (multilingual). iOS/Android build (EAS), release APK available.",
      technologies: ["React Native", "Expo", "TypeScript", "react-native-maps", "MobX", "Jest"],
      repoUrl: "https://github.com/Alexandre-Pascal/Valpineta",
    },
  ],
  skills: [
    {
      name: "Languages & blockchain",
      items: [
        { name: "Solidity", level: "In training" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "C#", level: "Intermediate" },
        { name: "C++", level: "Intermediate" },
        { name: "SQL", level: "Intermediate" },
      ],
    },
    {
      name: "Frameworks & web tools",
      items: [
        { name: "Next.js", level: "Intermediate" },
        { name: "React", level: "Intermediate" },
        { name: "Blazor", level: "Intermediate" },
        { name: ".NET 7", level: "Intermediate" },
        { name: "HTML / CSS", level: "Intermediate" },
      ],
    },
    {
      name: "Databases & server",
      items: [
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "IIS", level: "Intermediate" },
      ],
    },
    {
      name: "Transversal skills",
      items: [
        { name: "Agile methods" },
        { name: "Tech watch" },
        { name: "Adaptability" },
        { name: "Project management" },
        { name: "Client needs analysis" },
      ],
    },
    {
      name: "Languages",
      items: [
        { name: "English", level: "Fluent" },
        { name: "Spanish", level: "Intermediate" },
      ],
    },
  ],
  certifications: [
    {
      name: "RS6515 — Develop a decentralised application with blockchain technologies",
      issuer: "Alyra (France Compétences)",
      year: 2025,
      url: "https://certificate.alyra.fr/check/86E51E2C872253705AE60A4512BA2068DCECBD80ECB4D017CCF1ECDBA15C50B5RFFUWDVFNU9UV0dNZUt6cW9VSDIrQmovRWRYZDBIMW94c1ZnWjAra2tsNlNUU3dm",
    },
  ],
  contact: {
    email: "alexandre.pascal.ep@gmail.com",
    linkedin: "https://www.linkedin.com/in/alexandre-pascal-69a63524b/",
    github: "https://github.com/Alexandre-Pascal",
    otherLinks: [{ label: "Alyra Certificate (PDF)", url: "/certificat-alyra.pdf" }],
  },
};

// ——— API ———

export type DataLocale = "fr" | "en";

export function getPortfolioData(locale: DataLocale): PortfolioData {
  return locale === "en" ? dataEn : dataFr;
}

export function getProjectBySlug(locale: DataLocale, slug: string): ProjectItem | null {
  const data = getPortfolioData(locale);
  return data.projects.find((p) => p.slug === slug) ?? null;
}

export function getAllProjectSlugs(): string[] {
  return dataFr.projects.map((p) => p.slug);
}

// Sections pour la navigation (ordre affiché)
export const sectionIds = [
  "hero",
  "about",
  "education",
  "experience",
  "projects",
  "skills",
  "certifications",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];
