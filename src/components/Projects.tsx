import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

const projects = [
  {
    title: 'SuiviDiabète SN',
    period: '2024 – 2025',
    description: "Plateforme de suivi des patients diabétiques, projet de fin d'études. Développement du module de suivi des mesures glycémiques et de l'historique médical, système de prise de rendez-vous avec notifications, tableaux de bord d'indicateurs de santé, et gestion des accès par profil utilisateur.",
    tags: ['Java 21', 'Spring Boot', 'Spring Cloud', 'React', 'PostgreSQL', 'Docker', 'CI/CD'],
    featured: true,
    github: 'https://github.com/azizndoye68/plateforme-diabetique',
  },
  {
    title: 'Gestion des Notes Étudiants',
    period: '2022 – 2023',
    description: 'Projet académique en base de données avancée : implémentation de contraintes d\'intégrité, requêtes SQL avancées, procédures stockées et fonctions pour le calcul automatique des moyennes, triggers pour la validation des notes.',
    tags: ['PostgreSQL', 'SQL avancé', 'Triggers', 'Procédures stockées'],
    featured: false,
    github: 'https://github.com/azizndoye68',
  },
  {
    title: 'Site de Vente en Ligne',
    period: '2021 – 2022',
    description: 'Site de vente de produits de transformation : gestion du catalogue, des comptes clients, suivi des commandes et des ventes, gestion des stocks et de la disponibilité des produits.',
    tags: ['Java', 'Bases de données', 'Web'],
    featured: false,
    github: 'https://github.com/azizndoye68',
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
                  {project.featured && (
                    <span className="inline-block px-3 py-1 bg-blue-600/30 text-blue-300 text-xs font-medium rounded-full mb-3">
                      Projet de fin d'études
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{project.period}</p>
                </div>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-colors border border-slate-700 shrink-0">
                  <SiGithub size={16} />
                  Code
                  <ExternalLink size={14} />
                </a>
              </div>

              <p className="text-slate-300 leading-relaxed mb-5">{project.description}</p>

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