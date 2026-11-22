// Toutes les informations du portfolio sont centralisées ici.
// Modifie ce fichier pour mettre à jour le contenu du site.

// Nom de domaine du site (utilisé pour le SEO et les partages).
export const siteUrl = 'https://monportofolio.vercel.app'

export const profile = {
  name: 'Wenceslas AKOGNONGBE',
  initials: 'WA',
  title: 'Développeur Full Stack',
  bio: "Développeur Full Stack passionné, je crée des applications web modernes et performantes. J'aime transformer des idées en produits concrets et soignés.",
  location: 'Cotonou, Bénin',
  email: 'wenceslastoyin@gmail.com',
  phone: '0144012424',
  // Dépose ton CV ici : public/cv.pdf
  cvUrl: '/cv.pdf',
  // Dépose ta photo ici : public/avatar.jpg (sinon un avatar à initiales est affiché)
  photo: '',
}

export const skills = [
  { name: 'HTML / CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 70 },
  { name: 'C#', level: 65 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Git', level: 80 },
  { name: 'Figma', level: 70 },
  { name: 'MySQL', level: 75 },
]

export const projects = [
  {
    name: 'ESGIS LOCK',
    description:
      "Site de gestion de présence et de contrôle des étudiants : suivi des présences, contrôle d'accès et administration des données.",
    tech: ['React', 'Node.js', 'MySQL'],
    link: 'https://esgislock1.vercel.app',
    linkLabel: 'Voir le site',
  },
]

export const experiences = [
  {
    role: 'Développeur Full Stack — Freelance',
    period: "2023 – Aujourd'hui",
    place: 'Cotonou, Bénin',
    description:
      "Conception et développement d'applications web full-stack pour clients locaux : sites vitrines, plateformes de gestion et outils métiers. Développement front-end (React, Tailwind), API (Node.js) et bases de données (MySQL).",
  },
  {
    role: 'Développeur Web — Stage / Projet académique',
    period: '2022 – 2023',
    place: 'Cotonou, Bénin',
    description:
      "Participation au développement du projet ESGIS LOCK : gestion de présence et contrôle des étudiants. Interface React, logique back-end Node.js, gestion des données MySQL.",
  },
  {
    role: 'Développeur Web Junior',
    period: '2024 – 2025',
    place: 'Cotonou, Bénin',
    description:
      'Intégration de maquettes, développement de fonctionnalités front-end, correction de bugs et optimisation des performances.',
  },
]

export const education = [
  {
    degree: 'DT — Installation et Maintenance Informatique',
    school: 'LTP / PN',
    period: '2024 – 2025',
  },
]

export const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Contact', href: '#contact' },
]
