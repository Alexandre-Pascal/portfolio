// Données du portfolio — à personnaliser selon le questionnaire (FR et EN)

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

export interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
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
    location: "Paris, France",
    tagline:
      "Développeur full-stack passionné par l'UX et les interfaces modernes",
  },
  professional: {
    title: "Développeur Full-Stack",
    subtitle: "React, Next.js & Node.js",
    about:
      "Passionné par la création d'applications web performantes et accessibles. Je m'appuie sur React et Next.js pour livrer des expériences utilisateur soignées, tout en gardant un œil sur la maintenabilité et le SEO. En recherche d'opportunités pour contribuer à des produits à impact.",
    goal: "En recherche d'un poste en développement full-stack ou front-end.",
  },
  education: [
    {
      degree: "Master Informatique",
      institution: "Université Paris-Saclay",
      city: "Orsay",
      startYear: 2022,
      endYear: 2024,
      mention: "Mention Bien",
      description:
        "Spécialisation systèmes et logiciels, projet de fin d'études en React/Node.",
    },
    {
      degree: "Licence Informatique",
      institution: "Université de Paris",
      city: "Paris",
      startYear: 2019,
      endYear: 2022,
      description:
        "Parcours généraliste avec options web et bases de données.",
    },
  ],
  experience: [
    {
      role: "Développeur Full-Stack (Alternance)",
      company: "Tech Startup",
      city: "Paris",
      startDate: "Sept. 2023",
      endDate: "Août 2024",
      type: "Alternance",
      points: [
        "Développement de fonctionnalités sur une application React/Next.js (dashboard, API).",
        "Mise en place de tests E2E et CI/CD sur Vercel.",
        "Participation aux revues de code et à l'amélioration de l'architecture front.",
      ],
    },
    {
      role: "Stage Développeur Web",
      company: "Agence Digital",
      city: "Lyon",
      startDate: "Mars 2022",
      endDate: "Juin 2022",
      type: "Stage",
      points: [
        "Refonte de plusieurs sites clients en React et intégration de maquettes.",
        "Optimisation des performances et du référencement (SEO).",
      ],
    },
  ],
  projects: [
    {
      name: "Plateforme de gestion de projets",
      description:
        "Application de gestion de tâches et de projets avec tableaux Kanban, authentification et temps réel.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/example/repo",
    },
    {
      name: "Dashboard analytics",
      description:
        "Tableau de bord de visualisation de données avec graphiques interactifs et export PDF.",
      technologies: ["React", "Recharts", "Node.js", "Express"],
      repoUrl: "https://github.com/example/repo2",
    },
    {
      name: "Site vitrine e-commerce",
      description:
        "Site e-commerce avec catalogue, panier et paiement Stripe (mode démo).",
      technologies: ["Next.js", "Stripe", "Tailwind", "Sanity CMS"],
      liveUrl: "https://example.com/shop",
    },
  ],
  skills: [
    {
      name: "Langages",
      items: [
        { name: "JavaScript / TypeScript", level: "Avancé" },
        { name: "HTML / CSS", level: "Avancé" },
      ],
    },
    {
      name: "Frameworks & librairies",
      items: [
        { name: "React", level: "Avancé" },
        { name: "Next.js", level: "Avancé" },
        { name: "Node.js / Express", level: "Intermédiaire" },
      ],
    },
    {
      name: "Outils & méthodes",
      items: [
        { name: "Git", level: "Avancé" },
        { name: "Tailwind CSS", level: "Avancé" },
        { name: "Figma", level: "Intermédiaire" },
        { name: "Agile / Scrum", level: "Intermédiaire" },
      ],
    },
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: 2024,
    },
    { name: "Formation RGPD", issuer: "CNIL", year: 2023 },
  ],
  contact: {
    email: "contact@example.com",
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
    otherLinks: [{ label: "CV (PDF)", url: "/cv.pdf" }],
  },
};

// ——— Contenu EN ———

const dataEn: PortfolioData = {
  personal: {
    name: "Alexandre Pascal",
    location: "Paris, France",
    tagline:
      "Full-stack developer passionate about UX and modern interfaces",
  },
  professional: {
    title: "Full-Stack Developer",
    subtitle: "React, Next.js & Node.js",
    about:
      "Passionate about building performant and accessible web applications. I use React and Next.js to deliver polished user experiences while keeping an eye on maintainability and SEO. Looking for opportunities to contribute to high-impact products.",
    goal: "Seeking a full-stack or front-end development position.",
  },
  education: [
    {
      degree: "Master's in Computer Science",
      institution: "Université Paris-Saclay",
      city: "Orsay",
      startYear: 2022,
      endYear: 2024,
      mention: "With honours",
      description:
        "Specialisation in systems and software, final-year project in React/Node.",
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Université de Paris",
      city: "Paris",
      startYear: 2019,
      endYear: 2022,
      description:
        "General track with web and database electives.",
    },
  ],
  experience: [
    {
      role: "Full-Stack Developer (Work-study)",
      company: "Tech Startup",
      city: "Paris",
      startDate: "Sept. 2023",
      endDate: "Aug. 2024",
      type: "Work-study",
      points: [
        "Developed features for a React/Next.js application (dashboard, API).",
        "Set up E2E tests and CI/CD on Vercel.",
        "Participated in code reviews and front-end architecture improvements.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Digital Agency",
      city: "Lyon",
      startDate: "Mar. 2022",
      endDate: "June 2022",
      type: "Internship",
      points: [
        "Overhaul of multiple client sites in React and design integration.",
        "Performance and SEO optimization.",
      ],
    },
  ],
  projects: [
    {
      name: "Project management platform",
      description:
        "Task and project management app with Kanban boards, auth and real-time updates.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/example/repo",
    },
    {
      name: "Analytics dashboard",
      description:
        "Data visualization dashboard with interactive charts and PDF export.",
      technologies: ["React", "Recharts", "Node.js", "Express"],
      repoUrl: "https://github.com/example/repo2",
    },
    {
      name: "E-commerce showcase",
      description:
        "E-commerce site with catalog, cart and Stripe checkout (demo mode).",
      technologies: ["Next.js", "Stripe", "Tailwind", "Sanity CMS"],
      liveUrl: "https://example.com/shop",
    },
  ],
  skills: [
    {
      name: "Languages",
      items: [
        { name: "JavaScript / TypeScript", level: "Advanced" },
        { name: "HTML / CSS", level: "Advanced" },
      ],
    },
    {
      name: "Frameworks & libraries",
      items: [
        { name: "React", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "Node.js / Express", level: "Intermediate" },
      ],
    },
    {
      name: "Tools & methods",
      items: [
        { name: "Git", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Figma", level: "Intermediate" },
        { name: "Agile / Scrum", level: "Intermediate" },
      ],
    },
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: 2024,
    },
    { name: "GDPR training", issuer: "CNIL", year: 2023 },
  ],
  contact: {
    email: "contact@example.com",
    linkedin: "https://linkedin.com/in/example",
    github: "https://github.com/example",
    otherLinks: [{ label: "Resume (PDF)", url: "/cv.pdf" }],
  },
};

// ——— API ———

export type DataLocale = "fr" | "en";

export function getPortfolioData(locale: DataLocale): PortfolioData {
  return locale === "en" ? dataEn : dataFr;
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
