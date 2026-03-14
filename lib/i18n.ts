// Libellés de l’interface (boutons, titres de section, nav, etc.)

export const ui = {
  fr: {
    nav: {
      hero: "Accueil",
      about: "À propos",
      education: "Formation",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      viewPortfolio: "Voir le portfolio",
      contactMe: "Me contacter",
      downloadCv: "Télécharger mon CV",
    },
    sections: {
      about: "À propos",
      education: "Formation",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      certifications: "Certifications",
      certificationPdfLink: "Certificat (PDF)",
      contact: "Contact",
    },
    projectCategories: {
      all: "Tous",
      web3: "WEB3",
      mobile: "Mobile",
      "web-app": "Web App",
      "discord-bot": "Discord Bot",
      "local-app": "Locale App",
    },
    contact: {
      intro: "Une question ou un projet ? N'hésitez pas à me contacter.",
    },
    projectDetail: {
      backToProjects: "Retour aux projets",
      viewProject: "Voir le projet",
      snowledge: {
        keyFigures: "Chiffres clés",
        timeline: "Évolution du projet",
        myContributions: "Ce que j'ai réalisé",
        stack: "Stack technique",
      },
      sourceCode: "Code source",
      reportPdf: "Rapport de stage (PDF)",
      technologies: "Technologies",
      detail: "Détail du projet",
      gallery: "Galerie",
      demoVideo: "Vidéo de démonstration",
      playbackRateDefault: "Vitesse de lecture réglée à {rate}× par défaut.",
    },
    footer: {
      rights: "Tous droits réservés",
      contact: "Contact",
    },
    aria: {
      nav: "Navigation principale",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
    },
  },
  en: {
    nav: {
      hero: "Home",
      about: "About",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      viewPortfolio: "View portfolio",
      contactMe: "Contact me",
      downloadCv: "Download my CV",
    },
    sections: {
      about: "About",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      certifications: "Certifications",
      certificationPdfLink: "Certificate (PDF)",
      contact: "Contact",
    },
    projectCategories: {
      all: "All",
      web3: "WEB3",
      mobile: "Mobile",
      "web-app": "Web App",
      "discord-bot": "Discord Bot",
      "local-app": "Local App",
    },
    contact: {
      intro: "Have a question or a project? Feel free to get in touch.",
    },
    projectDetail: {
      backToProjects: "Back to projects",
      viewProject: "View project",
      snowledge: {
        keyFigures: "Key figures",
        timeline: "Project timeline",
        myContributions: "What I delivered",
        stack: "Tech stack",
      },
      sourceCode: "Source code",
      reportPdf: "Internship report (PDF)",
      technologies: "Technologies",
      detail: "Project detail",
      gallery: "Gallery",
      demoVideo: "Demo video",
      playbackRateDefault: "Playback speed set to {rate}× by default.",
    },
    footer: {
      rights: "All rights reserved",
      contact: "Contact",
    },
    aria: {
      nav: "Main navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
  },
} as const;

export type Locale = keyof typeof ui;

export function getUi(locale: Locale) {
  return ui[locale];
}
