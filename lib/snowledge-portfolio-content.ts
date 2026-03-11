/**
 * Contenu dédié à la page portfolio Snowledge (FR/EN).
 * Source : HISTORIQUE_MAIN_SNOWLEDGE.md + RECAP-SNOWLEDGE-PORTFOLIO.md
 */

export interface SnowledgeTimelinePhase {
  period: string;
  title: string;
  items: string[];
}

export interface SnowledgeContent {
  role: string;
  period: string;
  pitch: string;
  teamContext: {
    title: string;
    paragraphs: string[];
  };
  recognition: {
    title: string;
    paragraph: string;
  };
  statistics: {
    title: string;
    imagePath: string;
  };
  keyFigures: { label: string; value: string }[];
  timeline: SnowledgeTimelinePhase[];
  contributions: string[];
  stackSummary: string;
}

export const snowledgeContent: { fr: SnowledgeContent; en: SnowledgeContent } =
  {
    fr: {
      role: "Associé & Cofondateur",
      period: "Janvier 2025 — Aujourd'hui (création officielle mars 2025)",
      pitch:
        "Snowledge est une plateforme d'analyse de contenu multi-plateforme pilotée par l'IA. Elle collecte les contenus générés sur Discord, YouTube et WhatsApp, les normalise et les stocke de façon unifiée, puis les analyse via des modèles de langage (LLM) pour produire des synthèses, tendances, digests et analyses thématiques. Gestion des communautés, abonnements Stripe et droits d'accès (RBAC).",
      teamContext: {
        title: "Équipe & contexte",
        paragraphs: [
          "J'ai rencontré Léo dans le cadre de la formation Alyra. Ingénieur de formation, il m'a ensuite présenté Philippe, qui a endossé le rôle de CFO du projet avec un passé en banque d'affaires et en fusions-acquisitions (M&A).",
          "De mon côté, j'ai été responsable de l'ensemble du produit. À plusieurs reprises, nous avons fait appel à un développeur senior en prestation de service, Sébastien Gazeau, avec qui je me suis très bien entendu — nous sommes en train de finaliser le produit ensemble.",
        ],
      },
      recognition: {
        title: "Reconnaissance & accompagnement",
        paragraph:
          "Snowledge est incubée par Cube3 et Angers Technopole. Subventions et programmes : Bourse French Tech (BPI), Google for Startups, programme startup OVHcloud, Starknet, PL2I, programme Aquarium XRP Ledger.",
      },
      statistics: {
        title: "Statistiques & tableaux de bord",
        imagePath: "/images/projects/snowledge/snowledge-09.png",
      },
      keyFigures: [
        { label: "Commits sur main", value: "~1 630" },
        { label: "Période", value: "1 an" },
        {
          label: "Plateformes intégrées",
          value: "3 (Discord, YouTube, WhatsApp)",
        },
        { label: "Stack principale", value: "NestJS, Next.js 15, GCP" },
      ],
      timeline: [
        {
          period: "Janv. – Fév. 2025",
          title: "Genèse",
          items: [
            "Initialisation Next.js, Prisma, NextAuth.",
            "POC blockchain (StarkNet, IPFS), déprécié ensuite.",
            "UI : Header, Marketplace, profil, hub communautaire. Déploiement Vercel.",
          ],
        },
        {
          period: "Mars 2025",
          title: "Plateforme communautaire (POC)",
          items: [
            "Communautés : création, paramètres, membres, catégories.",
            "Contenu : posts (TinyMCE), contributions avec révision, votes, notifications (Firebase puis Pusher).",
            "Chat temps réel par communauté. Guards auth, loaders, responsive.",
          ],
        },
        {
          period: "Avril 2025",
          title: "Propositions, i18n, éditeur",
          items: [
            "Workflow propositions / votes, quorum. Remplacement TinyMCE par Blocknote.",
            "i18n (i18next FR/EN). CI/CD GitHub Actions, Dependabot, migrations Prisma.",
          ],
        },
        {
          period: "Mai 2025",
          title: "Monorepo, backend NestJS, produit v2",
          items: [
            "Turborepo : packages ui, dashboard, website. Backend NestJS (TypeORM, PostgreSQL), auth JWT, modules Community, User, Email.",
            "Création de communauté (formulaire complet, types d'adhésion, répartition revenus). Docker (dev + prod), déploiement OVH.",
          ],
        },
        {
          period: "Juin 2025",
          title: "Discord, analyse, déploiement",
          items: [
            "Discord : OAuth2, bot (commandes, salons vote/propositions), rôles, gestion canaux.",
            "Propositions/votes depuis le front et Discord, quorum, expiration auto.",
            "Analyzer (FastAPI → NestJS) dans le monorepo, MongoDB pour analyses, LLM (sentiment). Déploiement OVH staging/prod.",
          ],
        },
        {
          period: "Juil. – Août 2025",
          title: "Ressources, refacto, admin, collecte auto",
          items: [
            "Ressources (démo XRPL), refacto analyse (TypeScript), daemon Node (collecte Discord).",
            "Admin : dashboard prompts, historique analyses, édition JSON. Prompts migrés YAML → BDD.",
            "Daemon discord-harvester (Docker), collecte automatique. Refacto auth/session, forgot password.",
          ],
        },
        {
          period: "Sept. – Oct. 2025",
          title: "WhatsApp, YouTube, backend v3",
          items: [
            "WhatsApp : WWebJS, sessions, conversations ; puis Evolution API, webhooks, persistance sessions.",
            "YouTube : collecte, OAuth, collecte auto, notifications. Google Auth (OAuth).",
            "Backend v3 : architecture multi-plateforme unifiée (guide « ajouter une plateforme »). Analyse : support WhatsApp, global digest.",
          ],
        },
        {
          period: "Nov. – Déc. 2025",
          title: "GCP, design v2, analyses programmées",
          items: [
            "Migration GCP : Cloud Run (backend, harvester), Cloud Build, Secret Manager, PostgreSQL, VPC.",
            "Design v2 : Dashboard v3, Analysis Studio, résultats par type, gauges, analyses programmées (cron), global digest multi-périodes.",
            "Discord Explorer, export threads. Mise à jour Next.js (CVE), healthcheck /api/health.",
          ],
        },
        {
          period: "Janv. – Fév. 2026",
          title: "Stripe, RBAC, trial, reporting",
          items: [
            "Stripe : abonnements (Starter, Studio, Hub), lifetime, webhooks, factures, page abonnement.",
            "Auth : vérification email, TrialGuard (essai 14 j), RBAC lié aux plans Stripe.",
            "Reporting : rapport hebdo par email, rapport quotidien des logs (analyses, collectes). WhatsApp : migration Evolution API. Parrainage.",
          ],
        },
        {
          period: "En cours (develop)",
          title: "À venir sur main",
          items: [
            "Normalizer : module en job Cloud séparé, embeddings Vertex AI, curseur pour traiter l’historique complet.",
            "Global digest : langue des résumés configurable, sync à l’exécution manuelle, corrections i18n (analyses programmées, résultat).",
            "UI analyses : clic ligne → ouverture résultat, sidebar pour le détail, suppression depuis la liste.",
            "Préprod : protection par mot de passe ; Discord : permissions et scopes OAuth réduits au minimum.",
          ],
        },
      ],
      contributions: [
        "Conception et mise en œuvre d'une architecture backend plateforme-agnostique (Registry, contrôleurs génériques, daemon unifié, interfaces et classes de base) pour Discord, YouTube et WhatsApp.",
        "Intégration multi-plateforme : Discord (OAuth + bot), YouTube (Data API v3), WhatsApp (Evolution API, webhooks).",
        "Pipeline d'analyse IA : intégration LLM (OVH), gestion des tokens et modèles, prompts en base, analyses planifiées (dont global digest) et résolution de la langue.",
        "ETL et vectorisation : module Normalizer (MongoDB → format unifié, embeddings, PostgreSQL pgvector), job standalone ou via API.",
        "Sécurité et monétisation : auth JWT + OAuth, RBAC basé sur les plans Stripe, intégration Stripe (checkout, abonnements, webhooks).",
        "DevOps : CI/CD GCP (Cloud Build, Cloud Run), Secret Manager, VPC, Cloud Storage pour sessions WhatsApp, procédures et docs de déploiement.",
        "Frontend : application Next.js 15 (App Router, i18n), pages communauté, studio d'analyse, résultats, plan de communauté, paramètres, abonnement ; hooks RBAC et design aligné sur des specs Figma.",
        "Observabilité : module Reporting (rapport quotidien par email à partir des logs GCP), documentation centralisée et README par module.",
      ],
      stackSummary:
        "NestJS 11, Next.js 15, TypeScript 5.7, PostgreSQL (TypeORM), MongoDB (Mongoose), Stripe, OVH AI (LLM), Socket.io, GCP (Cloud Run, Cloud Build, Secret Manager, Cloud SQL, VPC, Cloud Storage), Discord API, YouTube Data API v3, Evolution API (WhatsApp).",
    },
    en: {
      role: "Associate & Co-founder",
      period: "January 2025 — Present (officially created March 2025)",
      pitch:
        "Snowledge is an AI-driven multi-platform content analysis platform. It collects content from Discord, YouTube and WhatsApp, normalises and stores it in a unified way, then analyses it via language models (LLM) to produce summaries, trends, digests and thematic analyses. Community management, Stripe subscriptions and access control (RBAC).",
      teamContext: {
        title: "Team & context",
        paragraphs: [
          "I met Léo through the Alyra training programme. An engineer by training, he then introduced me to Philippe, who took on the role of CFO for the project, drawing on his background in investment banking and M&A.",
          "On my side, I was responsible for the entire product. On several occasions we brought in a senior developer on a consulting basis, Sébastien Gazeau — we work very well together and are currently finishing the product with him.",
        ],
      },
      recognition: {
        title: "Recognition & support",
        paragraph:
          "Snowledge is incubated by Cube3 and Angers Technopole. Grants and programmes: French Tech Grant (BPI), Google for Startups, OVHcloud startup programme, Starknet, PL2I, Aquarium XRP Ledger programme.",
      },
      statistics: {
        title: "Statistics & dashboards",
        imagePath: "/images/projects/snowledge/snowledge-09.png",
      },
      keyFigures: [
        { label: "Commits on main", value: "~1,630" },
        { label: "Period", value: "1 year" },
        {
          label: "Integrated platforms",
          value: "3 (Discord, YouTube, WhatsApp)",
        },
        { label: "Core stack", value: "NestJS, Next.js 15, GCP" },
      ],
      timeline: [
        {
          period: "Jan – Feb 2025",
          title: "Genesis",
          items: [
            "Next.js, Prisma, NextAuth setup.",
            "Blockchain POC (StarkNet, IPFS), later deprecated.",
            "UI: Header, Marketplace, profile, community hub. Vercel deployment.",
          ],
        },
        {
          period: "March 2025",
          title: "Community platform (POC)",
          items: [
            "Communities: creation, settings, members, categories.",
            "Content: posts (TinyMCE), contributions with review, voting, notifications (Firebase then Pusher).",
            "Real-time chat per community. Auth guards, loaders, responsive.",
          ],
        },
        {
          period: "April 2025",
          title: "Proposals, i18n, editor",
          items: [
            "Proposals / voting workflow, quorum. TinyMCE replaced by Blocknote.",
            "i18n (i18next FR/EN). CI/CD GitHub Actions, Dependabot, Prisma migrations.",
          ],
        },
        {
          period: "May 2025",
          title: "Monorepo, NestJS backend, product v2",
          items: [
            "Turborepo: ui, dashboard, website packages. NestJS backend (TypeORM, PostgreSQL), JWT auth, Community, User, Email modules.",
            "Community creation (full form, membership types, revenue share). Docker (dev + prod), OVH deployment.",
          ],
        },
        {
          period: "June 2025",
          title: "Discord, analysis, deployment",
          items: [
            "Discord: OAuth2, bot (commands, vote/proposal channels), roles, channel management.",
            "Proposals/votes from front and Discord, quorum, auto-expiry.",
            "Analyzer (FastAPI → NestJS) in monorepo, MongoDB for analyses, LLM (sentiment). OVH staging/prod deployment.",
          ],
        },
        {
          period: "Jul – Aug 2025",
          title: "Resources, refacto, admin, auto-collect",
          items: [
            "Resources (XRPL demo), analysis refacto (TypeScript), Node daemon (Discord harvest).",
            "Admin: prompt dashboard, analysis history, JSON editing. Prompts migrated YAML → DB.",
            "discord-harvester daemon (Docker), automatic collection. Auth/session refacto, forgot password.",
          ],
        },
        {
          period: "Sep – Oct 2025",
          title: "WhatsApp, YouTube, backend v3",
          items: [
            "WhatsApp: WWebJS, sessions, conversations; then Evolution API, webhooks, session persistence.",
            "YouTube: collection, OAuth, auto-collect, notifications. Google Auth (OAuth).",
            "Backend v3: unified multi-platform architecture (guide “add a platform”). Analysis: WhatsApp support, global digest.",
          ],
        },
        {
          period: "Nov – Dec 2025",
          title: "GCP, design v2, scheduled analyses",
          items: [
            "GCP migration: Cloud Run (backend, harvester), Cloud Build, Secret Manager, PostgreSQL, VPC.",
            "Design v2: Dashboard v3, Analysis Studio, results by type, gauges, scheduled analyses (cron), multi-period global digest.",
            "Discord Explorer, thread export. Next.js update (CVE), /api/health healthcheck.",
          ],
        },
        {
          period: "Jan – Feb 2026",
          title: "Stripe, RBAC, trial, reporting",
          items: [
            "Stripe: subscriptions (Starter, Studio, Hub), lifetime, webhooks, invoices, subscription page.",
            "Auth: email verification, TrialGuard (14-day trial), RBAC tied to Stripe plans.",
            "Reporting: weekly email report, daily log report (analyses, collections). WhatsApp: Evolution API migration. Referral.",
          ],
        },
        {
          period: "In progress (develop)",
          title: "Coming to main",
          items: [
            "Normalizer: separate Cloud job module, Vertex AI embeddings, cursor for full history processing.",
            "Global digest: configurable summary language, sync on manual run, i18n fixes (scheduled analyses, result page).",
            "Analyses UI: row click opens result, sidebar for detail, delete from list.",
            "WhatsApp: manage/leave groups modal, analysis support (sentiment, active members).",
            "Preprod: password protection; Discord: OAuth scopes and permissions reduced to minimum.",
          ],
        },
      ],
      contributions: [
        "Designed and implemented a platform-agnostic backend architecture (Registry, generic controllers, unified daemon, interfaces and base classes) for Discord, YouTube and WhatsApp.",
        "Multi-platform integration: Discord (OAuth + bot), YouTube (Data API v3), WhatsApp (Evolution API, webhooks).",
        "AI analysis pipeline: LLM integration (OVH), token and model management, prompts in DB, scheduled analyses (including global digest) and language resolution.",
        "ETL and vectorisation: Normalizer module (MongoDB → unified format, embeddings, PostgreSQL pgvector), standalone job or via API.",
        "Security and monetisation: JWT + OAuth auth, RBAC based on Stripe plans, Stripe integration (checkout, subscriptions, webhooks).",
        "DevOps: GCP CI/CD (Cloud Build, Cloud Run), Secret Manager, VPC, Cloud Storage for WhatsApp sessions, deployment procedures and docs.",
        "Frontend: Next.js 15 app (App Router, i18n), community pages, analysis studio, results, community plan, settings, subscription; RBAC hooks and design aligned with Figma specs.",
        "Observability: Reporting module (daily email report from GCP logs), centralised documentation and README per module.",
      ],
      stackSummary:
        "NestJS 11, Next.js 15, TypeScript 5.7, PostgreSQL (TypeORM), MongoDB (Mongoose), Stripe, OVH AI (LLM), Socket.io, GCP (Cloud Run, Cloud Build, Secret Manager, Cloud SQL, VPC, Cloud Storage), Discord API, YouTube Data API v3, Evolution API (WhatsApp).",
    },
  };
