import { motion } from 'framer-motion'
import { ExternalLink, Check } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

// Renseigne `demo` avec l'URL Vercel de DIAAYMA pour afficher le bouton "Démo".
const projects = [
  {
    title: 'DIAAYMA — boutique en ligne',
    badge: 'En production',
    period: '2026',
    summary:
      "Plateforme e-commerce complète : catalogue, panier, commandes et paiement mobile Wave / Orange Money, avec espace d'administration. Déployée en ligne (frontend Vercel, API Render).",
    highlights: [
      'Paiement Wave et Orange Money via UniTech Pay, confirmé par webhook serveur-à-serveur (le retour navigateur seul ne valide pas la commande)',
      'Authentification JWT (accès 15 min, renouvellement 30 jours) et rôles Client, Admin, Super Admin',
      'Suivi de commande : Payée → En préparation → Expédiée → Livrée, avec transitions de statut contrôlées',
      'Verrou pessimiste sur le stock, limitation des tentatives de connexion, protection du dernier Super Admin',
      'Téléversement des photos produits vers Cloudinary (5 Mo max), réinitialisation du mot de passe par e-mail',
      'Migrations Flyway, API documentée avec Swagger / OpenAPI, déploiement Docker sur Render',
    ],
    tags: ['Java 21', 'Spring Boot', 'Spring Security', 'JPA', 'Flyway', 'PostgreSQL', 'Angular', 'TypeScript', 'NgRx', 'Cloudinary', 'Docker', 'Vercel', 'Render'],
    featured: true,
    github: 'https://github.com/azizndoye68/ecommerce',
    demo: '',
  },
  {
    title: 'SuiviDiabète SN',
    badge: "Projet de fin d'études",
    period: '2024 – 2025',
    summary:
      "Plateforme de suivi des patients diabétiques en architecture microservices : 9 services indépendants (6 métiers, 3 techniques), développés en méthode Scrum. Mémoire de Master de 109 pages.",
    highlights: [
      'Mes réalisations : suivi glycémique, dossier médical, rendez-vous, notifications, tableaux de bord et gestion des accès par rôle',
      'Sécurité avec Spring Security et JWT, passerelle API, découverte de services et configuration centralisée (Spring Cloud)',
      'Communication asynchrone entre services avec RabbitMQ',
      'API conçues en Contract-First (OpenAPI), tests de contrats avec Pact',
      'Tests unitaires et d\'intégration (JUnit, Mockito, MockMvc), conteneurisation avec Docker Compose, CI/CD',
    ],
    tags: ['Java', 'Spring Boot', 'Spring Cloud', 'RabbitMQ', 'React', 'PostgreSQL', 'Docker', 'OpenAPI', 'Pact', 'CI/CD'],
    featured: true,
    github: 'https://github.com/azizndoye68/plateforme-diabetique',
    demo: '',
  },
  {
    title: 'Gestion des Notes Étudiants',
    badge: 'Projet académique',
    period: '2022 – 2023',
    summary:
      'Base de données relationnelle avec contraintes d\'intégrité, requêtes SQL avancées, procédures stockées, fonctions et triggers pour le calcul automatique des moyennes et la validation des notes.',
    highlights: [],
    tags: ['PostgreSQL', 'SQL avancé', 'Triggers', 'Procédures stockées'],
    featured: false,
    github: 'https://github.com/azizndoye68',
    demo: '',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-blue-400 font-medium mb-2 text-center">Projets</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Ce que j'ai construit</h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className={`rounded-2xl p-8 border transition-colors ${project.featured ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/20 border-blue-500/40' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'}`}>
              <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-600/30 text-blue-300 text-xs font-medium rounded-full mb-3">
                    {project.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{project.period}</p>
                </div>
                <div className="flex gap-3 shrink-0">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors">
                      Démo
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors border border-slate-700">
                    <SiGithub size={16} />
                    Code
                  </a>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-5">{project.summary}</p>

              {project.highlights.length > 0 && (
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                      <Check size={16} className="text-blue-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-800/70 text-slate-300 text-xs rounded-full border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}