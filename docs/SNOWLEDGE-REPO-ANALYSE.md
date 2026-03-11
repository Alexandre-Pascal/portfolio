# Analyse du repo Snowledge (gh) — éléments à intégrer au portfolio

**Repo :** https://github.com/Snowledge-eu/Snowledge  
**Description officielle :** « MVP Snowledge - Release commerciale Janvier 2026 »  
**Branche :** main — Dernier push : mars 2026

---

## 1. Structure du dépôt (ce que contient le repo)

### Racine
- **Monorepo** : Turborepo (`turbo.json`), workspaces `apps/*` et `packages/*`
- **Node** : >= 22.0.0, npm >= 11.0.0
- **Docker** : `docker-compose.yml`, `.dev`, `.preprod`, `.prod`
- **CI/CD** : `.github/workflows/` (ci.yml, deploy.yml, update-project-dates.yml), Dependabot
- **Docs à la racine** : `GUIDE_AJOUTER_NOUVELLE_PLATEFORME.md`, `COMPTE_RENDU_16-18_DEC_2025.md`
- **Infra** : `Makefile`, `infrastructure/` (gcp, vm)

### Apps
| App | Rôle |
|-----|------|
| `apps/backend` | API NestJS, daemon, migrations — Dockerfiles dev/prod/daemon |
| `apps/frontend` | Next.js (App Router, [locale], next-intl) |
| `apps/snowledge-v1` | Ancienne version (legacy) |

### Packages partagés
- `packages/ui` — composants partagés
- `packages/shadcn` — design system
- `packages/logger`, `packages/eslint-config`, `packages/jest-presets`, `packages/typescript-config`

### Backend (apps/backend/src)
**Modules métier** : admin, admin-db, analysis, auth, community, daemon, discord, email, google, learner, platform-core, platform, prompt, rbac, reporting, scheduled-analysis, stripe, task, user, whatsapp, youtube  
**Docs internes** : README dans admin-db, analysis/llm, daemon, discord, migrations, prompt, rbac, reporting, whatsapp, youtube + ARCHITECTURE.md, ARCHITECTURE_BACKEND.md, TESTS.md

### Base de données
- `database/migrations/` — SQL + scripts MongoDB (add-server-id, trial-ends-at, global-digest-sentiment, etc.)
- `database/init/` — scripts d’init

### Infrastructure
- `infrastructure/gcp/` : cloudbuild, docs (architecture, services, déploiement, surveillance, dépannage), scripts
- `infrastructure/vm/` : evolution-api (WhatsApp)

### Design & specs
- `design-info/` : ANALYSE_ET_PROMPT.md, SESSION_MANAGEMENT.md, specs sentiment/intent analysis, auth-checkauth-fix

### Scripts
- `scripts/stripe/` — outils Stripe

---

## 2. Ce qui peut être ajouté ou mis à jour dans le portfolio

### À ajouter / renforcer

1. **Lien vers le repo GitHub**  
   - Actuellement le projet Snowledge n’a pas de `repoUrl` (probablement volontaire car privé ou NDA).  
   - Si tu veux le montrer en lecture seule : **https://github.com/Snowledge-eu/Snowledge** (et ajouter `repoUrl` dans `data.ts` pour Snowledge).

2. **Sous-titre / description produit**  
   - Utiliser la description officielle du repo : **« MVP Snowledge - Release commerciale Janvier 2026 »**  
   - À intégrer dans la courte description du projet (ou en sous-titre sur la page détail Snowledge).

3. **Chiffres / preuves**  
   - **~1 630 commits** sur main (déjà dans le contenu).  
   - Possibilité d’ajouter : « Monorepo Turborepo, 3 apps (backend, frontend, legacy), 6 packages partagés » pour montrer l’envergure.

4. **Documentation et maintenabilité**  
   - **Guide « Ajouter une nouvelle plateforme »** : document structuré (étapes 1–12, ex. Instagram), montre l’architecture plateforme-agnostique.  
   - À mentionner dans la section « Ce que j’ai réalisé » ou dans un encart « Documentation » sur la page Snowledge (ex. : « Guide complet d’ajout de plateforme (Discord, YouTube, WhatsApp, extensible) »).

5. **Infrastructure et DevOps**  
   - **GCP** : Cloud Build, Cloud Run, docs (architecture, procédures, dépannage) dans `infrastructure/gcp/docs/`.  
   - **CI** : workflows (ci.yml, deploy.yml, mise à jour automatique des dates).  
   - À souligner dans la timeline ou les contributions : « Documentation infra (architecture GCP, procédures de déploiement, dépannage) ».

6. **Qualité et tests**  
   - Fichiers **TESTS.md**, **ARCHITECTURE.md**, **ARCHITECTURE_BACKEND.md** dans le backend.  
   - README par module (discord, youtube, whatsapp, analysis/llm, daemon, rbac, reporting, etc.).  
   - À mentionner : « Documentation technique par module (README) et notes d’architecture ».

7. **Design et produit**  
   - Dossier **design-info/** : specs d’analyse (sentiment, intent), gestion de session, correctifs documentés.  
   - Utile pour montrer le lien design / analyse / UX (une phrase dans la page détail ou dans « Ce que j’ai réalisé »).

8. **Stack technique (détails)**  
   - **Versions** : Next.js 15.2.6, Node >= 22, Turbo 2.5, NestJS (à vérifier dans apps/backend/package.json).  
   - **Packages** : Socket.io au niveau monorepo, packages partagés (ui, shadcn, logger, configs).  
   - Option : ajouter une ligne « Monorepo Turborepo, Next 15.2, Node 22+ » dans les chiffres ou la stack sur la page Snowledge.

9. **Comptes rendus et traçabilité**  
   - **COMPTE_RENDU_16-18_DEC_2025.md** : ex. de rapport de période (stats, branches fusionnées, travail par jour).  
   - Peut illustrer la rigueur (rapports de période, merge design-v2 / feat/integration-datas). Une phrase du type « Comptes rendus de développement par période » dans les contributions ou la doc.

10. **Lien « Voir l’app »**  
    - Déjà présent : **https://app.snowledge.eu**.  
    - Rien à changer si c’est bien l’URL de prod.

---

## 3. Résumé des actions possibles

| Action | Fichier / endroit | Priorité |
|--------|-------------------|----------|
| Ajouter la description « MVP - Release commerciale Janvier 2026 » | `data.ts` (description courte) ou `snowledge-portfolio-content.ts` (pitch/hero) | Moyenne |
| Mentionner le guide « Ajouter une nouvelle plateforme » | `snowledge-portfolio-content.ts` (contributions ou encart Doc) | Élevée |
| Mentionner la doc infra GCP (architecture, déploiement, dépannage) | `snowledge-portfolio-content.ts` (contributions) | Élevée |
| Ajouter « Monorepo, 3 apps, 6 packages » (ou équivalent) | `snowledge-portfolio-content.ts` (keyFigures ou stack) | Moyenne |
| Ajouter README par module + ARCHITECTURE / TESTS | `snowledge-portfolio-content.ts` (contributions) | Moyenne |
| Lien repo GitHub (si tu veux le rendre visible) | `data.ts` → `repoUrl` pour Snowledge | À décider |
| Versions précises (Next 15.2, Node 22) | `snowledge-portfolio-content.ts` (stackSummary) | Faible |
| Comptes rendus de développement | Une phrase dans contributions ou doc | Faible |

Souhaites-tu que j’applique directement certaines de ces modifications dans le portfolio (par ex. description MVP, guide nouvelle plateforme, doc GCP, monorepo) ?
