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
  categories?: ProjectCategory[]; // Filtre : web3, mobile, web-app, discord-bot, local-app
}

export type ProjectCategory =
  | "web3"
  | "mobile"
  | "web-app"
  | "discord-bot"
  | "local-app";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "web3",
  "mobile",
  "web-app",
  "discord-bot",
  "local-app",
];

export interface SkillCategory {
  name: string;
  items: { name: string; level?: string }[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: number;
  period?: string; // ex. "Octobre 2024 – Janvier 2025"
  url?: string;
  pdfUrl?: string;
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
      degree:
        "Baccalauréat général — Numérique et Sciences Informatique (NSI), Sciences de l'Ingénieur (SI)",
      institution: "Lycée polyvalent La Découverte",
      city: "Decazeville",
      startYear: 2018,
      endYear: 2021,
      mention: "Assez Bien",
    },
  ],
  experience: [
    {
      role: "Associé & Cofondateur",
      company: "Snowledge",
      startDate: "Janvier 2025",
      endDate: "Aujourd'hui",
      type: "Startup",
      points: [
        "Plateforme d'analyse de contenu multi-plateforme pilotée par l'IA (Discord, YouTube, WhatsApp).",
        "Architecture backend plateforme-agnostique, collecte unifiée, analyses LLM (digests, tendances), Stripe, RBAC, déploiement GCP.",
        "Stack : NestJS, Next.js 15, PostgreSQL, MongoDB, Cloud Run.",
      ],
    },
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
      slug: "snowledge",
      name: "Snowledge",
      description:
        "Associé & cofondateur depuis janvier 2025. Plateforme d'analyse de contenu multi-plateforme pilotée par l'IA : collecte Discord, YouTube, WhatsApp → stockage unifié → analyses LLM (synthèses, tendances, digests) → tableaux de bord et abonnements Stripe.",
      longDescription:
        "Snowledge est la startup que je cofonde depuis janvier 2025 (création officielle mars 2025). Plateforme SaaS permettant de collecter les contenus générés sur plusieurs canaux (Discord, YouTube, WhatsApp), de les normaliser et les stocker de façon unifiée, puis de les analyser via des modèles de langage (LLM) pour produire des synthèses, tendances, digests et analyses thématiques. Gestion des communautés, abonnements (Stripe), droits d'accès (RBAC), déploiement sur GCP (Cloud Run). En un an : architecture backend plateforme-agnostique, intégration des trois plateformes, pipeline d'analyse IA (OVH), ETL et vectorisation (pgvector), CI/CD et observabilité. Voir la page détail pour le déroulé complet.",
      technologies: [
        "NestJS",
        "Next.js 15",
        "TypeScript",
        "PostgreSQL",
        "MongoDB",
        "Stripe",
        "Google Cloud (Cloud Run, Cloud Build)",
        "Discord API",
        "YouTube Data API",
        "WhatsApp (Evolution API)",
        "LLM (OVH AI)",
        "Socket.io",
        "i18n",
      ],
      categories: ["web-app"],
      liveUrl: "https://app.snowledge.eu",
      image: "/images/projects/snowledge/snowledge-01.png",
      gallery: [
        {
          src: "/images/projects/snowledge/snowledge-01.png",
          caption: "Vue d'ensemble — Statistiques et aperçu général",
        },
        {
          src: "/images/projects/snowledge/snowledge-02.png",
          caption: "Résultat d'analyse — Synthèse et recommandations",
        },
        {
          src: "/images/projects/snowledge/snowledge-03.png",
          caption: "Studio d'analyse — Création et historique",
        },
        {
          src: "/images/projects/snowledge/snowledge-04.png",
          caption: "To-do list — Kanban",
        },
        {
          src: "/images/projects/snowledge/snowledge-05.png",
          caption: "Overview — Statistiques et sujets à explorer",
        },
        {
          src: "/images/projects/snowledge/snowledge-06.png",
          caption: "Dernières analyses — Liste et sous-résultats",
        },
        {
          src: "/images/projects/snowledge/snowledge-07.png",
          caption: "Admin — Inscrits et chiffres clés",
        },
        {
          src: "/images/projects/snowledge/snowledge-08.png",
          caption: "Configuration du plan communauté — Type de communauté",
        },
        {
          src: "/images/projects/snowledge/snowledge-10.png",
          caption:
            "Mes statistiques — KPIs, dynamique communautaire, répartition par plateforme",
        },
      ],
    },
    {
      slug: "intranet-ch-cahors",
      name: "Intranet CH Cahors",
      description:
        "Refonte de l'intranet hospitalier en CMS personnalisé : gestion de contenu, migration Joomla → PostgreSQL, rôles et permissions. Stage au Centre Hospitalier Jean Rougier.",
      categories: ["web-app"],
      longDescription:
        "Contexte — L'ancien intranet du Centre Hospitalier Jean Rougier (Cahors) reposait sur Joomla. Il fallait le remplacer par un CMS sur mesure, plus adapté aux besoins des équipes et plus simple à maintenir.\n\nObjectifs — Permettre à tout le monde de créer et gérer des pages, articles et contenus sans coder ; migrer les données existantes de MySQL (Joomla) vers PostgreSQL ; mettre en place une gestion des utilisateurs et des rôles avec permissions (accès selon les responsabilités : lecteur, éditeur, administrateur).\n\nMéthodologie — Gestion de projet avec Monday.com, maquettes et prototypes avec Figma, développement en sprints. Analyse de l'existant et recueil des besoins des utilisateurs avant la conception technique.\n\nDéveloppement — Menu de navigation dynamique selon les droits ; API REST pour les pages, articles et médias ; éditeur de contenu riche (TipTap) avec tables, listes, tâches, couleurs, liens et images, et collaboration temps réel (Yjs, Hocuspocus) ; gestion des fichiers, images et vidéos ; authentification JWT (jose, bcrypt) ; rôles et permissions en base (Prisma) ; déploiement et mise en production.\n\nStack technique — Next.js 14 (App Router), TypeScript, React, Prisma (ORM), PostgreSQL. UI : NextUI, Radix UI, Tailwind CSS, react-hook-form + Zod. Cache côté client : SWR. Tests : Jest + Testing Library. Structure : app/, components/, prisma/, middleware d'auth.\n\nRésultats — Interface CMS livrée avec page d'accueil, menu selon le profil, formulaire de connexion, espaces d'édition pour les pages et articles, gestion des médias. Un rapport de stage détaillé (PDF) décrit l'ensemble du projet.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Prisma",
        "PostgreSQL",
        "TipTap",
        "Tailwind",
      ],
      repoUrl: "https://github.com/Alexandre-Pascal/Intranet-CH-Cahors",
      image: "/images/projects/intranet-ch-cahors/intranet-gallery-01.png",
      reportUrl: "/documents/rapport-stage-ch-cahors.pdf",
      gallery: [
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-01.png",
          caption: "Page d'accueil (utilisateur connecté)",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-02.png",
          caption: "Menu de navigation",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-04.png",
          caption: "Formulaire de connexion",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-05.png",
          caption: "Interface d'édition de contenu",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-06.png",
          caption: "Gestion des médias et fichiers",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-07.png",
          caption: "Éditeur riche (TipTap)",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-08.png",
          caption: "Aperçu d'une page publiée",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-09.png",
          caption:
            "Interface d'administration — gestion des utilisateurs et rôles",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-10.png",
          caption:
            "Interface d'administration — création d'un rôle et permissions",
        },
      ],
    },
    {
      slug: "ladoree-web3",
      name: "Ladorée — Concept store blockchain",
      description:
        "Concept store (œuvres d'art, créations locales) avec NFT pour l'authenticité, token $LDR, marketplace et royalties. Indexation The Graph, paiements Stripe.",
      categories: ["web3", "web-app"],
      longDescription:
        "Ladorée est un concept store déjà existant proche de Toulouse. L’objectif du projet est d’offrir un marketplace simple pour mettre en vente et acheter des œuvres (art, créations locales), tout en intégrant des fonctionnalités rendues possibles par la blockchain.\n\nPour les créateurs : certification des œuvres par la boutique, mise en vente sur le marketplace avec les informations de l’œuvre (nom, description, type d’art, date, image). Chaque vente peut améliorer la réputation et la visibilité. À chaque revente d’une œuvre, une part des bénéfices revient automatiquement au créateur (royalties). Suivi des œuvres vendues et des transactions.\n\nPour les acheteurs : parcourir le marketplace, acheter des œuvres en euros (paiement Stripe). Chaque achat donne droit à un certificat d’authenticité (NFT) et à la traçabilité de l’œuvre. Possibilité de revendre une œuvre ; le créateur original reçoit alors une part. Le token LDR permet d’obtenir des réductions sur les frais (jusqu’à 10 % pour l’acheteur et 10 % pour le vendeur) et des avantages selon la quantité détenue (niveaux type bronze, or, etc.) ou en verrouillant des tokens (avantages type staking, réduction des frais de transaction).\n\nCôté technique : smart contracts sur Polygon (authenticité des œuvres, token de fidélité LDR, marketplace, gestion des utilisateurs et rôles), frontend Next.js, connexion portefeuille (Metamask, Rabby, etc.), paiements en euros via Stripe. Projet réalisé dans le cadre du carnet de projet et de la certification Alyra (RS6515).",
      technologies: [
        "Solidity",
        "Hardhat",
        "Next.js",
        "The Graph",
        "Stripe",
        "IPFS",
        "Wagmi",
      ],
      liveUrl: "https://ladoree-web3.vercel.app/",
      repoUrl: "https://github.com/Alexandre-Pascal/ladoree-web3",
      image: "/images/projects/ladoree-web3/ladoree-explore.png",
      videoUrl: "https://www.youtube.com/watch?v=cPwGIOdOi7A",
      videoPlaybackRate: 0.5,
      gallery: [
        {
          src: "/images/projects/ladoree-web3/ladoree-parcours.png",
          caption: "Parcours utilisateur — Créateur, Acheteur, LDR et NFT",
        },
        {
          src: "/images/projects/ladoree-web3/ladoree-explore.png",
          caption: "Page Explore — marketplace et œuvres",
        },
        {
          src: "/images/projects/ladoree-web3/ladoree-detail-oeuvre.png",
          caption: "Détail d'une œuvre — achat et NFT",
        },
        {
          src: "/images/projects/ladoree-web3/ladoree-dashboard.png",
          caption: "Profil utilisateur et tableau de bord LDR",
        },
        {
          src: "/images/projects/ladoree-web3/ladoree-mettre-en-vente.png",
          caption: "Mettre en vente une œuvre",
        },
        {
          src: "/images/projects/ladoree-web3/ladoree-architecture.png",
          caption: "Architecture décentralisée — Polygon, contrats, frontend",
        },
      ],
    },
    {
      slug: "blockchain-bank",
      name: "Blockchain Bank",
      description:
        "Mini-projet formation Alyra : dApp bancaire décentralisée sur Sepolia — dépôts, retraits, transferts via smart contracts. Déployée sur Vercel.",
      categories: ["web3"],
      longDescription:
        "Blockchain Bank est un système bancaire décentralisé construit sur la blockchain, permettant de gérer des fonds de manière sécurisée. Ce mini-projet de la formation Alyra illustre l'utilisation des smart contracts dans une application financière.\n\nUn smart contract unique gère les soldes, les dépôts et les retraits ; l'historique des opérations est enregistré sur la chaîne et affiché dans l'interface.\n\nFonctionnalités : suivi des soldes en temps réel ; dépôts et retraits sécurisés ; historique des transactions. Connexion via portefeuille (Metamask, Rabby) sur le réseau de test Sepolia. Déployé sur Vercel.",
      technologies: [
        "Solidity",
        "Next.js",
        "Ethers",
        "Wagmi",
        "Viem",
        "Ethereum",
      ],
      liveUrl: "https://blockchain-bank.vercel.app",
      repoUrl: "https://github.com/Alexandre-Pascal/blockchain-bank",
      image: "/images/projects/blockchain-bank/blockchain-bank-dashboard.png",
      gallery: [
        {
          src: "/images/projects/blockchain-bank/blockchain-bank-dashboard.png",
          caption:
            "Interface : solde, dépôt, retrait et historique des transactions (Sepolia)",
        },
        {
          src: "/images/projects/blockchain-bank/blockchain-bank-wallet.png",
          caption:
            "Confirmation de transaction dans le portefeuille (réseau Sepolia)",
        },
      ],
    },
    {
      slug: "arbirange",
      name: "ArbiRange",
      description:
        "Robo-advisor DeFi en cours de développement : Vault Uniswap V3 sur Arbitrum, dépôts/retraits en parts, rebalance automatisé par un bot. Projet personnel pour faciliter mes rendements.",
      longDescription:
        "ArbiRange est un robo-advisor DeFi qui gère automatiquement une position de liquidité Uniswap V3 sur Arbitrum au nom des déposants. Projet en cours de développement, que j'aimerais mettre en place pour faciliter mes rendements.\n\nEn bref : les utilisateurs déposent un actif (ex. USDC) dans un Vault ; un bot place et recentre régulièrement ces fonds dans une position LP Uniswap V3 (range) pour capter des frais et optimiser l'exposition au prix ; les utilisateurs peuvent retirer selon la valeur de leur part (shares, standard type ERC-4626). Le Vault est non-custodial : les fonds restent dans un contrat on-chain, le bot n'exécute que des opérations autorisées (rebalance, collecte de frais). Rôles distincts : Admin (pause, paramètres), Operator (bot), utilisateurs (dépôt, retrait).\n\nAvancement : les contrats (Vault, rebalance, collecte de frais), le bot (stratégie de range, rentabilité, kill switch) et le dashboard (dépôt, retrait, pause, événements) sont en place et testés en local. La CI/CD et la documentation (déploiement bot, checklist production) sont prêtes. Reste à faire : déploiement sur Arbitrum Sepolia puis Arbitrum One, configuration Admin/Operator, hébergement du bot en production et monitoring. Cible : Arbitrum One.",
      technologies: [
        "Solidity",
        "Foundry",
        "Next.js",
        "Uniswap V3",
        "Arbitrum",
        "TypeScript",
      ],
      categories: ["web3"],
      repoUrl: "https://github.com/Alexandre-Pascal/arbirange",
      image: "/images/projects/arbirange/arbirange-01.png",
      gallery: [
        {
          src: "/images/projects/arbirange/arbirange-01.png",
          caption:
            "Le dashboard pourrait ressembler à quelque chose comme ça (ex. ArbiRange Vault).",
        },
      ],
    },
    {
      slug: "liquidity-farming-tracker",
      name: "Liquidity Farming Tracker",
      description:
        "Suivi des positions de liquidité DeFi (Uniswap, Raydium, AAVE) multi-chaînes : pools, frais collectés, sorties, récapitulatif et statistiques de rendement.",
      longDescription:
        "L’application sert à suivre tes positions de liquidité DeFi (Uniswap, Raydium, AAVE) sur plusieurs blockchains (Ethereum, Arbitrum, Unichain, Base, Solana), à enregistrer les frais collectés et à calculer des rendements et des statistiques.\n\nGestion des pools : ajout d’un pool (paire, quantité investie $, range, plateforme, blockchain, date d’entrée) et liste des pools en cours.\n\nSortie et récapitulatif : clôture d’une position (date de sortie, montant récupéré, frais à la sortie) ; tableau récapitulatif de tous les pools (ouverts et fermés) avec frais cumulés et statut.\n\nFrais collectés : saisie des frais au fil du temps (par pool, date, montant $) pour suivre la performance sans fermer la position.\n\nHistorique des frais : tableau historique des frais et graphique d’évolution des frais cumulés par pool ; montant total investi (pools ouverts) et rendement annualisé global.\n\nStatistiques : répartitions par plateforme et par blockchain (montant investi, nombre de pools, frais cumulés) et rendement annualisé par plateforme.\n\nDonnées : pools.csv (un enregistrement par pool) et frais.csv (une ligne par saisie de frais). Installation : voir le repo (Python, Streamlit, pandas, matplotlib). Licence MIT.",
      technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "DeFi"],
      categories: ["local-app"],
      repoUrl: "https://github.com/Alexandre-Pascal/liquidity-farming-tracker",
      image:
        "/images/projects/liquidity-farming-tracker/farming-historique-frais.png",
      gallery: [
        {
          src: "/images/projects/liquidity-farming-tracker/farming-historique-frais.png",
          caption:
            "Historique des frais — tableau et évolution cumulée par pool",
        },
        {
          src: "/images/projects/liquidity-farming-tracker/farming-gestion-pools.png",
          caption: "Gestion des pools — ajout et liste des positions en cours",
        },
        {
          src: "/images/projects/liquidity-farming-tracker/farming-sortie-recap.png",
          caption:
            "Sortie et récapitulatif — clôture des positions et vue d’ensemble",
        },
        {
          src: "/images/projects/liquidity-farming-tracker/farming-frais-collectes.png",
          caption: "Frais collectés — saisie des frais au fil du temps",
        },
        {
          src: "/images/projects/liquidity-farming-tracker/farming-statistiques.png",
          caption:
            "Statistiques — frais et rendements par plateforme et blockchain",
        },
      ],
    },
    {
      slug: "chrono-meditation",
      name: "Chrono Méditation",
      description:
        "Chrono minimaliste pour la méditation : réglage une fois de la durée et de l'intervalle son (cloche), sans reconfigurer à chaque session. Fait pour un pote.",
      categories: ["mobile"],
      longDescription:
        "Mini projet développé pour un pote qui pratique la méditation et ne trouvait pas d'app qui lui convenait : soit trop compliquée, soit pas adaptée. L'idée : un chrono où on règle une fois la durée de la session et la fréquence d'un son (tous les X minutes), pour savoir quand changer de position ou passer à une autre étape, sans avoir à reparamétrer l'app à chaque fois.\n\nÀ quoi sert l'app : durée de la session (en minutes), conservée pour la prochaine session ; intervalle du son (un son de cloche tous les X minutes) pour se repérer sans ouvrir les yeux ni toucher au téléphone ; son de fin distinct quand la session est terminée ; Pause / Reprendre ; Reset (en pause) pour repartir du début avec les mêmes paramètres. Interface volontairement simple et épurée : pas de compte, pas de stats, pas de gamification. Juste le chrono, les deux champs et les boutons.\n\nComportement : décompte en temps réel ; son à chaque intervalle pendant la session ; son de fin + toast Android à la fin. Stack : Expo (SDK 54), React Native, expo-av pour les sons (cloche intervalle + cloche fin). Build APK Android. Usage personnel, sans fioritures.",
      technologies: ["React Native", "Expo", "TypeScript"],
      repoUrl: "https://github.com/Alexandre-Pascal/chrono-meditation",
      image: "/images/projects/chrono-meditation/chrono-02.png",
      gallery: [
        {
          src: "/images/projects/chrono-meditation/chrono-01.png",
          caption:
            "Écran principal — réglages durée et intervalle, bouton Commencer",
        },
        {
          src: "/images/projects/chrono-meditation/chrono-02.png",
          caption: "Session en cours — décompte et Pause",
        },
        {
          src: "/images/projects/chrono-meditation/chrono-03.png",
          caption: "En pause — Reprendre ou Reset",
        },
        {
          src: "/images/projects/chrono-meditation/chrono-04.png",
          caption: "Prêt à démarrer (0:00)",
        },
        {
          src: "/images/projects/chrono-meditation/chrono-05.png",
          caption: "Icône de l'app",
        },
      ],
    },
    {
      slug: "crypto-chart-bot-discord",
      name: "Crypto Chart Bot (Discord)",
      description:
        "Bot Discord pour générer des graphiques de prix crypto (Binance API). Commandes /chart, /chart_btc, /chart_eth, /chart_sol. Hébergé sur Koyeb (app.koyeb.com).",
      longDescription:
        "Bot Discord (CryptoChart APP) qui génère des graphiques de prix en temps réel pour plusieurs cryptomonnaies en s'appuyant sur l'API Binance. Idéal pour visualiser les tendances de marché directement dans un serveur Discord.\n\nFonctionnalités : commandes slash /chart (paramètres personnalisables : symbole ex. BTCUSDT, intervalle 1h/1d, limite de données), /chart_btc, /chart_eth, /chart_sol — graphiques sur 1 an (daily) pour Bitcoin, Ethereum et Solana. Chaque commande affiche le prix actuel de la crypto ainsi que le graphique. Exemple : /chart crypto:BTCUSDT interval:1d limit:365.\n\nStack : Node.js, discord.js (interactions et slash commands), axios (requêtes HTTP vers Binance), canvas (génération des graphiques). Hébergement : Koyeb (app.koyeb.com) ; possible aussi en local. Un lien d'invitation OAuth2 permet à quiconque d'ajouter le bot à son serveur Discord.",
      technologies: [
        "JavaScript",
        "Discord.js",
        "Axios",
        "Canvas",
        "API Binance",
      ],
      categories: ["discord-bot"],
      repoUrl: "https://github.com/Alexandre-Pascal/CryptoChartBot-Discord",
      liveUrl:
        "https://discord.com/oauth2/authorize?client_id=1301243281883009145&permissions=2147584000&integration_type=0&scope=bot",
      image: "/images/projects/crypto-chart-bot-discord/crypto-chart-01.png",
      gallery: [
        {
          src: "/images/projects/crypto-chart-bot-discord/crypto-chart-01.png",
          caption: "Identité visuelle du bot (avatar)",
        },
        {
          src: "/images/projects/crypto-chart-bot-discord/crypto-chart-02.png",
          caption: "Commande /chart_btc — prix actuel et graphique Bitcoin",
        },
        {
          src: "/images/projects/crypto-chart-bot-discord/crypto-chart-03.png",
          caption: "Réponse du bot avec graphique BTCUSDT",
        },
        {
          src: "/images/projects/crypto-chart-bot-discord/crypto-chart-04.png",
          caption: "Graphique 1 an (daily) et liste des commandes",
        },
        {
          src: "/images/projects/crypto-chart-bot-discord/crypto-chart-05.png",
          caption: "Profil du bot et lien d'ajout au serveur",
        },
      ],
    },
    {
      slug: "valpineta",
      name: "Valpineta",
      description:
        "Projet tutoré BUT 3e année : application mobile pour le refuge de Pineta et les randonneurs — cartes, tracés, points d'intérêt, mode hors-ligne.",
      categories: ["mobile"],
      longDescription:
        "Projet tutoré de troisième année de BUT Informatique à l'IUT de Bayonne, pour la commanditaire Marie Bruyère (son mari gère le refuge de Pineta). Équipe de cinq étudiants : Robin, Oier, Nicolas, Alexandre et Tom.\n\nContexte : la vallée de Pineta propose de nombreuses randonnées déjà présentes sur le site du refuge, mais celui-ci n'a pas de connexion internet. L'application doit permettre de suivre ces excursions hors-ligne — les données sont donc à télécharger avant d'arriver au refuge.\n\nFonctionnalités principales : consultation des excursions (fiches détail, dénivelé, description) ; carte avec itinéraires et points d'intérêt ; suivi en temps réel d'une excursion (chronomètre, altitude, distance parcourue, dénivelé) en premier plan ou en arrière-plan ; signalements (ajout de photos avec permissions appareil/galerie, validation des champs) ; pop-up à l'approche d'un signalement (≈ 30 m) pour indiquer « Présent », « Absent » (suppression du signalement) ou « Voir plus ».\n\nSynchronisation : montante (envoi des signalements et suppressions vers le serveur, store + cron en cas de connexion coupée) ; descendante (téléchargement de excursions.json et des fichiers GPX depuis l'API, fichier temporaire + vérification MD5 pour l'intégrité).\n\nEnvironnement : React Native + Expo (cross-platform, Expo Go pour le dev en temps réel, EAS pour les builds et la distribution App Store / Play Store). API WordPress : plugin PHP pour récupérer, sauvegarder et modifier les données ; Docker pour simuler l'environnement du site en dev. Arborescence basée sur le boilerplate Ignite (app : components, screens, models/stores, services, i18n, theme, utils ; assets ; tests). Outils : Trello, GitHub, Teams.\n\nStack : React Native (Expo), TypeScript, react-native-maps, MobX / MobX State Tree, Expo Location et File System, i18n-js. Tests unitaires (Jest) sur le store de synchronisation montante ; tests E2E Maestro. Tuiles de carte : dossier Tiles + tiles_struct.json dans src/assets/.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "react-native-maps",
        "MobX",
        "Jest",
      ],
      repoUrl: "https://github.com/Alexandre-Pascal/Valpineta",
      image: "/images/projects/valpineta/valpineta-01.png",
      videoUrl: "https://www.youtube.com/watch?v=FLKO3-5ikgQ",
      reportUrl: "/documents/presentation-valpineta-s6.pdf",
      gallery: [
        {
          src: "/images/projects/valpineta/valpineta-01.png",
          caption: "Logo Valpineta",
        },
        {
          src: "/images/projects/valpineta/valpineta-02.png",
          caption: "Carte avec itinéraires",
        },
        {
          src: "/images/projects/valpineta/valpineta-03.png",
          caption:
            "Fiche détail d'une excursion (Balcon de Pineta - Lac Marboré)",
        },
        {
          src: "/images/projects/valpineta/valpineta-04.png",
          caption: "Suivi en direct : carte et statistiques",
        },
        {
          src: "/images/projects/valpineta/valpineta-05.png",
          caption: "Résumé du parcours (description, dénivelé)",
        },
        {
          src: "/images/projects/valpineta/valpineta-06.png",
          caption: "Fin d'excursion — Félicitations",
        },
        {
          src: "/images/projects/valpineta/valpineta-07.png",
          caption: "Nouvel avertissement (signalement)",
        },
      ],
    },
  ],
  skills: [
    {
      name: "Langages & blockchain",
      items: [
        { name: "Solidity" },
        { name: "JavaScript" },
        { name: "C#" },
        { name: "C++" },
        { name: "SQL" },
      ],
    },
    {
      name: "Frameworks & outils web",
      items: [
        { name: "Next.js" },
        { name: "Node.js" },
        { name: "NestJS" },
        { name: "React" },
        { name: ".NET 7" },
        { name: "HTML / CSS" },
      ],
    },
    {
      name: "Bases de données & serveur",
      items: [
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "IIS" },
      ],
    },
    {
      name: "Cloud & hébergement",
      items: [
        { name: "Google Cloud Platform" },
        { name: "OVH" },
        { name: "Gestion de serveur non managé" },
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
        { name: "Anglais" },
        { name: "Espagnol" },
      ],
    },
  ],
  certifications: [
    {
      name: "RS6515 — Développer une application décentralisée avec les technologies blockchain",
      issuer: "Alyra (France Compétences)",
      year: 2025,
      period: "Octobre 2024 – Janvier 2025",
      url: "https://certificate.alyra.fr/check/86E51E2C872253705AE60A4512BA2068DCECBD80ECB4D017CCF1ECDBA15C50B5RFFUWDVFNU9UV0dNZUt6cW9VSDIrQmovRWRYZDBIMW94c1ZnWjAra2tsNlNUU3dm",
      pdfUrl: "/certificat-alyra.pdf",
    },
  ],
  contact: {
    email: "alexandre.pascal.ep@gmail.com",
    linkedin: "https://www.linkedin.com/in/alexandre-pascal-69a63524b/",
    github: "https://github.com/Alexandre-Pascal",
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
      description: "Application development: design, development, validation.",
    },
    {
      degree:
        "General Baccalaureate — Computer Science (NSI), Engineering Sciences (SI)",
      institution: "Lycée polyvalent La Découverte",
      city: "Decazeville",
      startYear: 2018,
      endYear: 2021,
      mention: "Good standing",
    },
  ],
  experience: [
    {
      role: "Associate & Co-founder",
      company: "Snowledge",
      startDate: "January 2025",
      endDate: "Present",
      type: "Startup",
      points: [
        "AI-driven multi-platform content analysis platform (Discord, YouTube, WhatsApp).",
        "Platform-agnostic backend architecture, unified collection, LLM analyses (digests, trends), Stripe, RBAC, GCP deployment.",
        "~1,630 commits on main in one year — stack: NestJS, Next.js 15, PostgreSQL, MongoDB, Cloud Run.",
      ],
    },
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
      slug: "snowledge",
      name: "Snowledge",
      description:
        "Associate & co-founder since January 2025. AI-driven multi-platform content analysis platform: Discord, YouTube, WhatsApp collection → unified storage → LLM analyses (summaries, trends, digests) → dashboards and Stripe subscriptions.",
      longDescription:
        "Snowledge is the startup I co-founded in January 2025 (officially created March 2025). SaaS platform that collects content from multiple channels (Discord, YouTube, WhatsApp), normalises and stores it in a unified way, then analyses it via language models (LLM) to produce summaries, trends, digests and thematic analyses. Community management, subscriptions (Stripe), access control (RBAC), deployment on GCP (Cloud Run). In one year: platform-agnostic backend architecture, integration of all three platforms, AI analysis pipeline (OVH), ETL and vectorisation (pgvector), CI/CD and observability. See the detail page for the full timeline.",
      technologies: [
        "NestJS",
        "Next.js 15",
        "TypeScript",
        "PostgreSQL",
        "MongoDB",
        "Stripe",
        "Google Cloud (Cloud Run, Cloud Build)",
        "Discord API",
        "YouTube Data API",
        "WhatsApp (Evolution API)",
        "LLM (OVH AI)",
        "Socket.io",
        "i18n",
      ],
      categories: ["web-app"],
      liveUrl: "https://app.snowledge.eu",
      image: "/images/projects/snowledge/snowledge-01.png",
      gallery: [
        {
          src: "/images/projects/snowledge/snowledge-01.png",
          caption: "Overview — Statistics and general summary",
        },
        {
          src: "/images/projects/snowledge/snowledge-02.png",
          caption: "Analysis result — Synthesis and recommendations",
        },
        {
          src: "/images/projects/snowledge/snowledge-03.png",
          caption: "Analysis Studio — Create and history",
        },
        {
          src: "/images/projects/snowledge/snowledge-04.png",
          caption: "To-do list — Kanban",
        },
        {
          src: "/images/projects/snowledge/snowledge-05.png",
          caption: "Overview — Stats and topics to explore",
        },
        {
          src: "/images/projects/snowledge/snowledge-06.png",
          caption: "Latest analyses — List and sub-results",
        },
        {
          src: "/images/projects/snowledge/snowledge-07.png",
          caption: "Admin — Registered users and key figures",
        },
        {
          src: "/images/projects/snowledge/snowledge-08.png",
          caption: "Community plan setup — Community type",
        },
        {
          src: "/images/projects/snowledge/snowledge-09.png",
          caption:
            "My statistics — KPIs, community dynamics, platform breakdown",
        },
      ],
    },
    {
      slug: "intranet-ch-cahors",
      name: "Intranet CH Cahors",
      description:
        "Hospital intranet overhaul into a custom CMS: content management, Joomla to PostgreSQL migration, roles and permissions. Internship at Centre Hospitalier Jean Rougier.",
      categories: ["web-app"],
      longDescription:
        "Context — The former intranet of Centre Hospitalier Jean Rougier (Cahors) was built on Joomla. It had to be replaced by a custom CMS, better suited to the teams' needs and easier to maintain.\n\nGoals — Enable anyone to create and manage pages, articles and content without coding; migrate existing data from MySQL (Joomla) to PostgreSQL; implement user and role management with permissions (access by responsibility: reader, editor, administrator).\n\nMethodology — Project management with Monday.com, mockups and prototypes with Figma, development in sprints. Analysis of the existing system and user needs before technical design.\n\nDevelopment — Dynamic navigation menu based on permissions; REST API for pages, articles and media; rich content editor (TipTap) with tables, lists, tasks, colours, links and images, and real-time collaboration (Yjs, Hocuspocus); file, image and video management; JWT authentication (jose, bcrypt); roles and permissions in the database (Prisma); deployment and production rollout.\n\nTech stack — Next.js 14 (App Router), TypeScript, React, Prisma (ORM), PostgreSQL. UI: NextUI, Radix UI, Tailwind CSS, react-hook-form + Zod. Client-side cache: SWR. Tests: Jest + Testing Library. Structure: app/, components/, prisma/, auth middleware.\n\nResults — CMS interface delivered with homepage, profile-based menu, login form, editing spaces for pages and articles, and media management. A detailed internship report (PDF) describes the full project.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Prisma",
        "PostgreSQL",
        "TipTap",
        "Tailwind",
      ],
      repoUrl: "https://github.com/Alexandre-Pascal/Intranet-CH-Cahors",
      image: "/images/projects/intranet-ch-cahors/intranet-gallery-01.png",
      reportUrl: "/documents/rapport-stage-ch-cahors.pdf",
      gallery: [
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-01.png",
          caption: "Homepage (logged-in user)",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-02.png",
          caption: "Navigation menu",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-04.png",
          caption: "Login form",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-05.png",
          caption: "Content editing interface",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-06.png",
          caption: "Media and file management",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-07.png",
          caption: "Rich editor (TipTap)",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-08.png",
          caption: "Published page preview",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-09.png",
          caption: "Admin interface — user and role management",
        },
        {
          src: "/images/projects/intranet-ch-cahors/intranet-gallery-10.png",
          caption: "Admin interface — role creation and permissions",
        },
      ],
    },
    {
      slug: "ladoree-web3",
      name: "Ladorée — Blockchain concept store",
      description:
        "Concept store (art, local creations) with NFT authenticity, $LDR token, marketplace and royalties. The Graph indexing, Stripe payments.",
      categories: ["web3", "web-app"],
      longDescription:
        "Ladorée is an existing concept store near Toulouse. The project aims to provide a simple marketplace to list and buy artworks (art, local creations), while integrating blockchain-based features.\n\nFor creators: certification of works by the store, listing on the marketplace with artwork details (name, description, art type, date, image). Each sale can improve reputation and visibility. On every resale of an artwork, a share of the proceeds goes automatically to the original creator (royalties). Tracking of sold works and transactions.\n\nFor buyers: browse the marketplace, purchase artworks in euros (Stripe). Each purchase grants an authenticity certificate (NFT) and traceability of the piece. Buyers can resell; the original creator then receives a share. The LDR token provides discounts on fees (up to 10% for buyer and 10% for seller) and benefits based on how much is held (e.g. bronze, gold tiers) or by locking tokens (staking-style benefits, lower transaction fees).\n\nOn the technical side: smart contracts on Polygon (artwork authenticity, LDR loyalty token, marketplace, user and role management), Next.js frontend, wallet connection (Metamask, Rabby, etc.), euro payments via Stripe. Project carried out as part of the Alyra certification (RS6515).",
      technologies: [
        "Solidity",
        "Hardhat",
        "Next.js",
        "The Graph",
        "Stripe",
        "IPFS",
        "Wagmi",
      ],
      liveUrl: "https://ladoree-web3.vercel.app/",
      repoUrl: "https://github.com/Alexandre-Pascal/ladoree-web3",
      image: "/images/projects/ladoree-web3/ladoree-explore.png",
      videoUrl: "https://www.youtube.com/watch?v=cPwGIOdOi7A",
      videoPlaybackRate: 0.5,
      gallery: [
        {
          src: "/images/projects/ladoree-web3/ladoree-parcours.png",
          caption: "User journey — Creator, Buyer, LDR and NFT",
        },
        {
          src: "/images/projects/ladoree-web3/ladoree-explore.png",
          caption: "Explore page — marketplace and artworks",
        },
        {
          src: "/images/projects/ladoree-web3/ladoree-detail-oeuvre.png",
          caption: "Artwork detail — purchase and NFT",
        },
        {
          src: "/images/projects/ladoree-web3/ladoree-dashboard.png",
          caption: "User profile and LDR dashboard",
        },
        {
          src: "/images/projects/ladoree-web3/ladoree-mettre-en-vente.png",
          caption: "List an artwork for sale",
        },
        {
          src: "/images/projects/ladoree-web3/ladoree-architecture.png",
          caption: "Decentralised architecture — Polygon, contracts, frontend",
        },
      ],
    },
    {
      slug: "blockchain-bank",
      name: "Blockchain Bank",
      description:
        "Alyra training mini-project: decentralised banking dApp on Sepolia — deposits, withdrawals, transfers via smart contracts. Deployed on Vercel.",
      categories: ["web3"],
      longDescription:
        "Blockchain Bank is a decentralised banking system built on blockchain, enabling users to manage funds securely. This mini-project from the Alyra training illustrates the use of smart contracts in a financial application.\n\nA single smart contract handles balances, deposits and withdrawals; the operation history is recorded on-chain and displayed in the interface.\n\nFeatures: real-time balance tracking; secure deposits and withdrawals; transaction history. Connect via wallet (Metamask, Rabby) on the Sepolia test network. Deployed on Vercel.",
      technologies: [
        "Solidity",
        "Next.js",
        "Ethers",
        "Wagmi",
        "Viem",
        "Ethereum",
      ],
      liveUrl: "https://blockchain-bank.vercel.app",
      repoUrl: "https://github.com/Alexandre-Pascal/blockchain-bank",
      image: "/images/projects/blockchain-bank/blockchain-bank-dashboard.png",
      gallery: [
        {
          src: "/images/projects/blockchain-bank/blockchain-bank-dashboard.png",
          caption:
            "Interface: balance, deposit, withdrawal and transaction history (Sepolia)",
        },
        {
          src: "/images/projects/blockchain-bank/blockchain-bank-wallet.png",
          caption: "Transaction confirmation in wallet (Sepolia network)",
        },
      ],
    },
    {
      slug: "arbirange",
      name: "ArbiRange",
      description:
        "DeFi robo-advisor in development: Uniswap V3 Vault on Arbitrum, deposit/withdraw in shares, rebalance automated by a bot. Personal project to facilitate my yields.",
      categories: ["web3"],
      longDescription:
        "ArbiRange is a DeFi robo-advisor that automatically manages a Uniswap V3 liquidity position on Arbitrum on behalf of depositors. Project in development, which I want to set up to facilitate my yields.\n\nIn short: users deposit an asset (e.g. USDC) into a Vault; a bot regularly places and recentres these funds in a Uniswap V3 LP position (range) to capture fees and optimise price exposure; users can withdraw according to the value of their share (shares, ERC-4626-style standard). The Vault is non-custodial: funds stay in an on-chain contract, the bot only executes authorised operations (rebalance, fee collection). Separate roles: Admin (pause, parameters), Operator (bot), users (deposit, withdraw).\n\nProgress: contracts (Vault, rebalance, fee collection), bot (range strategy, profitability, kill switch) and dashboard (deposit, withdraw, pause, events) are in place and tested locally. CI/CD and documentation (bot deployment, production checklist) are ready. Still to do: deploy on Arbitrum Sepolia then Arbitrum One, configure Admin/Operator, host the bot in production and set up monitoring. Target: Arbitrum One.",
      technologies: [
        "Solidity",
        "Foundry",
        "Next.js",
        "Uniswap V3",
        "Arbitrum",
        "TypeScript",
      ],
      repoUrl: "https://github.com/Alexandre-Pascal/arbirange",
      image: "/images/projects/arbirange/arbirange-01.png",
      gallery: [
        {
          src: "/images/projects/arbirange/arbirange-01.png",
          caption:
            "The dashboard might look something like this (e.g. ArbiRange Vault).",
        },
      ],
    },
    {
      slug: "liquidity-farming-tracker",
      name: "Liquidity Farming Tracker",
      description:
        "Track DeFi liquidity positions (Uniswap, Raydium, AAVE) across chains: pools, collected fees, exits, summary and yield statistics.",
      longDescription:
        "The app lets you track your DeFi liquidity positions (Uniswap, Raydium, AAVE) across multiple blockchains (Ethereum, Arbitrum, Unichain, Base, Solana), record collected fees and compute yields and statistics.\n\nPool management: add a pool (pair, invested amount $, range, platform, blockchain, entry date) and list current pools.\n\nExit and summary: close a position (exit date, amount recovered, fees at exit); summary table of all pools (open and closed) with cumulative fees and status.\n\nCollected fees: record fees over time (per pool, date, amount $) to track performance without closing the position.\n\nFee history: historical fee table and chart of cumulative fees per pool; total amount invested (open pools) and overall annualised yield.\n\nStatistics: breakdown by platform and blockchain (amount invested, number of pools, cumulative fees) and annualised yield per platform.\n\nData: pools.csv (one record per pool) and frais.csv (one row per fee entry). Installation: see repo (Python, Streamlit, pandas, matplotlib). MIT licence.",
      technologies: ["Python", "Streamlit", "Pandas", "Matplotlib", "DeFi"],
      categories: ["local-app"],
      repoUrl: "https://github.com/Alexandre-Pascal/liquidity-farming-tracker",
      image:
        "/images/projects/liquidity-farming-tracker/farming-historique-frais.png",
      gallery: [
        {
          src: "/images/projects/liquidity-farming-tracker/farming-historique-frais.png",
          caption: "Fee history — table and cumulative evolution per pool",
        },
        {
          src: "/images/projects/liquidity-farming-tracker/farming-gestion-pools.png",
          caption: "Pool management — add and list current positions",
        },
        {
          src: "/images/projects/liquidity-farming-tracker/farming-sortie-recap.png",
          caption: "Exit and summary — close positions and overview",
        },
        {
          src: "/images/projects/liquidity-farming-tracker/farming-frais-collectes.png",
          caption: "Collected fees — record fees over time",
        },
        {
          src: "/images/projects/liquidity-farming-tracker/farming-statistiques.png",
          caption: "Statistics — fees and yields by platform and blockchain",
        },
      ],
    },
    {
      slug: "chrono-meditation",
      name: "Chrono Méditation",
      description:
        "Minimalist meditation timer: set session length and sound interval (bell) once, no reconfig each time. Built for a friend.",
      categories: ["mobile"],
      longDescription:
        "Side project built for a friend who meditates and couldn't find a suitable app — either too complex or not suited to their practice. The idea: a timer where you set the session duration and how often a sound plays (every X minutes), so they know when to change position or move to the next step without having to reconfigure the app each time.\n\nWhat the app does: session duration (minutes), saved for the next session; sound interval (a bell every X minutes) to stay oriented without opening your eyes or touching the phone; a distinct end sound when the session is over; Pause / Resume; Reset (when paused) to start over with the same settings. Interface kept deliberately simple: no account, no stats, no gamification. Just the timer, the two fields and the buttons.\n\nBehaviour: real-time countdown; sound at each interval during the session; end sound + Android toast when done. Stack: Expo (SDK 54), React Native, expo-av for sounds (interval bell + end bell). Android APK build. Personal use, no frills.",
      technologies: ["React Native", "Expo", "TypeScript"],
      repoUrl: "https://github.com/Alexandre-Pascal/chrono-meditation",
      image: "/images/projects/chrono-meditation/chrono-01.png",
      gallery: [
        {
          src: "/images/projects/chrono-meditation/chrono-01.png",
          caption: "Main screen — duration and interval settings, Start button",
        },
        {
          src: "/images/projects/chrono-meditation/chrono-02.png",
          caption: "Session in progress — countdown and Pause",
        },
        {
          src: "/images/projects/chrono-meditation/chrono-03.png",
          caption: "Paused — Resume or Reset",
        },
        {
          src: "/images/projects/chrono-meditation/chrono-04.png",
          caption: "Ready to start (0:00)",
        },
        {
          src: "/images/projects/chrono-meditation/chrono-05.png",
          caption: "App icon",
        },
      ],
    },
    {
      slug: "crypto-chart-bot-discord",
      name: "Crypto Chart Bot (Discord)",
      description:
        "Discord bot to generate crypto price charts (Binance API). Commands /chart, /chart_btc, /chart_eth, /chart_sol. Hosted on Koyeb (app.koyeb.com).",
      categories: ["discord-bot"],
      longDescription:
        "Discord bot (CryptoChart APP) that generates real-time price charts for several cryptocurrencies using the Binance API. Designed to visualize market trends directly inside a Discord server.\n\nFeatures: slash commands /chart (custom options: symbol e.g. BTCUSDT, interval 1h/1d, data limit), /chart_btc, /chart_eth, /chart_sol — 1-year (daily) charts for Bitcoin, Ethereum, and Solana. Each command returns the current crypto price plus the chart. Example: /chart crypto:BTCUSDT interval:1d limit:365.\n\nStack: Node.js, discord.js (interactions and slash commands), axios (HTTP requests to Binance), canvas (chart generation). Hosting: Koyeb (app.koyeb.com); local deployment also possible. An OAuth2 invite link lets anyone add the bot to their Discord server.",
      technologies: [
        "JavaScript",
        "Discord.js",
        "Axios",
        "Canvas",
        "Binance API",
      ],
      repoUrl: "https://github.com/Alexandre-Pascal/CryptoChartBot-Discord",
      liveUrl:
        "https://discord.com/oauth2/authorize?client_id=1301243281883009145&permissions=2147584000&integration_type=0&scope=bot",
      image: "/images/projects/crypto-chart-bot-discord/crypto-chart-01.png",
      gallery: [
        {
          src: "/images/projects/crypto-chart-bot-discord/crypto-chart-01.png",
          caption: "Bot visual identity (avatar)",
        },
        {
          src: "/images/projects/crypto-chart-bot-discord/crypto-chart-02.png",
          caption: "Command /chart_btc — current price and Bitcoin chart",
        },
        {
          src: "/images/projects/crypto-chart-bot-discord/crypto-chart-03.png",
          caption: "Bot response with BTCUSDT chart",
        },
        {
          src: "/images/projects/crypto-chart-bot-discord/crypto-chart-04.png",
          caption: "1-year (daily) chart and command list",
        },
        {
          src: "/images/projects/crypto-chart-bot-discord/crypto-chart-05.png",
          caption: "Bot profile and server invite link",
        },
      ],
    },
    {
      slug: "valpineta",
      name: "Valpineta",
      description:
        "Third-year group project (BUT): mobile app for Refuge de Pineta and hikers — maps, trails, points of interest, offline mode.",
      categories: ["mobile"],
      longDescription:
        'Third-year group project in the Computer Science bachelor (BUT) at IUT Bayonne, for client Marie Bruyère (her husband runs Refuge de Pineta). Team of five students: Robin, Oier, Nicolas, Alexandre, and Tom.\n\nContext: the Pineta valley offers many hikes already listed on the refuge website, but the refuge has no internet connection. The app must allow following these excursions offline — data is downloaded before arriving at the refuge.\n\nMain features: browse excursions (detail sheets, elevation profile, description); map with trails and points of interest; real-time excursion tracking (timer, altitude, distance, elevation gain/loss) in foreground or background; reports (add photos with camera/library permissions, field validation); pop-up when nearing a report (≈ 30 m) to mark "Present", "Absent" (removes the report), or "See more".\n\nSync: upward (sending reports and deletions to the server, store + cron when connection is lost); downward (downloading excursions.json and GPX files from the API, temp file + MD5 check for integrity).\n\nEnvironment: React Native + Expo (cross-platform, Expo Go for live dev, EAS for builds and App Store / Play Store distribution). WordPress API: PHP plugin for fetching, saving, and updating data; Docker to mirror the site environment in dev. Codebase based on Ignite boilerplate (app: components, screens, models/stores, services, i18n, theme, utils; assets; tests). Tools: Trello, GitHub, Teams.\n\nStack: React Native (Expo), TypeScript, react-native-maps, MobX / MobX State Tree, Expo Location and File System, i18n-js. Unit tests (Jest) on the upward sync store; Maestro E2E tests. Map tiles: Tiles folder + tiles_struct.json in src/assets/.',
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "react-native-maps",
        "MobX",
        "Jest",
      ],
      repoUrl: "https://github.com/Alexandre-Pascal/Valpineta",
      image: "/images/projects/valpineta/valpineta-01.png",
      videoUrl: "https://www.youtube.com/watch?v=FLKO3-5ikgQ",
      reportUrl: "/documents/presentation-valpineta-s6.pdf",
      gallery: [
        {
          src: "/images/projects/valpineta/valpineta-01.png",
          caption: "Valpineta logo",
        },
        {
          src: "/images/projects/valpineta/valpineta-02.png",
          caption: "Map with trails",
        },
        {
          src: "/images/projects/valpineta/valpineta-03.png",
          caption: "Excursion detail (Balcon de Pineta - Lac Marboré)",
        },
        {
          src: "/images/projects/valpineta/valpineta-04.png",
          caption: "Live tracking: map and stats",
        },
        {
          src: "/images/projects/valpineta/valpineta-05.png",
          caption: "Route summary (description, elevation)",
        },
        {
          src: "/images/projects/valpineta/valpineta-06.png",
          caption: "Excursion completed — Congratulations",
        },
        {
          src: "/images/projects/valpineta/valpineta-07.png",
          caption: "New alert (report)",
        },
      ],
    },
  ],
  skills: [
    {
      name: "Languages & blockchain",
      items: [
        { name: "Solidity" },
        { name: "JavaScript" },
        { name: "C#" },
        { name: "C++" },
        { name: "SQL" },
      ],
    },
    {
      name: "Frameworks & web tools",
      items: [
        { name: "Next.js" },
        { name: "Node.js" },
        { name: "NestJS" },
        { name: "React" },
        { name: ".NET 7" },
        { name: "HTML / CSS" },
      ],
    },
    {
      name: "Databases & server",
      items: [
        { name: "PostgreSQL" },
        { name: "MongoDB" },
        { name: "IIS" },
      ],
    },
    {
      name: "Cloud & hosting",
      items: [
        { name: "Google Cloud Platform" },
        { name: "OVH" },
        { name: "Unmanaged server management" },
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
        { name: "English" },
        { name: "Spanish" },
      ],
    },
  ],
  certifications: [
    {
      name: "RS6515 — Develop a decentralised application with blockchain technologies",
      issuer: "Alyra (France Compétences)",
      year: 2025,
      period: "October 2024 – January 2025",
      url: "https://certificate.alyra.fr/check/86E51E2C872253705AE60A4512BA2068DCECBD80ECB4D017CCF1ECDBA15C50B5RFFUWDVFNU9UV0dNZUt6cW9VSDIrQmovRWRYZDBIMW94c1ZnWjAra2tsNlNUU3dm",
      pdfUrl: "/certificat-alyra.pdf",
    },
  ],
  contact: {
    email: "alexandre.pascal.ep@gmail.com",
    linkedin: "https://www.linkedin.com/in/alexandre-pascal-69a63524b/",
    github: "https://github.com/Alexandre-Pascal",
  },
};

// ——— API ———

export type DataLocale = "fr" | "en";

/** Ordre d'affichage des projets (1 = Snowledge, 2 = Ladorée, …) */
const PROJECT_DISPLAY_ORDER: string[] = [
  "snowledge",
  "ladoree-web3",
  "valpineta",
  "intranet-ch-cahors",
  "arbirange",
  "liquidity-farming-tracker",
  "crypto-chart-bot-discord",
  "chrono-meditation",
  "blockchain-bank",
];

export function getPortfolioData(locale: DataLocale): PortfolioData {
  const data = locale === "en" ? dataEn : dataFr;
  const projects = [...data.projects].sort(
    (a, b) =>
      PROJECT_DISPLAY_ORDER.indexOf(a.slug) -
      PROJECT_DISPLAY_ORDER.indexOf(b.slug),
  );
  return { ...data, projects };
}

export function getProjectBySlug(
  locale: DataLocale,
  slug: string,
): ProjectItem | null {
  const data = getPortfolioData(locale);
  return data.projects.find((p) => p.slug === slug) ?? null;
}

export function getAllProjectSlugs(): string[] {
  return PROJECT_DISPLAY_ORDER.filter((slug) =>
    dataFr.projects.some((p) => p.slug === slug),
  );
}

// Sections pour la navigation (ordre affiché)
export const sectionIds = [
  "hero",
  "about",
  "education",
  "certifications",
  "experience",
  "projects",
  "skills",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];
