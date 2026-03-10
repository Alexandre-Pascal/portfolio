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
    },
    sections: {
      about: "À propos",
      education: "Formation",
      experience: "Expérience",
      projects: "Projets",
      skills: "Compétences",
      certifications: "Certifications",
      contact: "Contact",
    },
    contact: {
      intro: "Une question ou un projet ? N'hésitez pas à me contacter.",
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
    },
    sections: {
      about: "About",
      education: "Education",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      certifications: "Certifications",
      contact: "Contact",
    },
    contact: {
      intro: "Have a question or a project? Feel free to get in touch.",
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
