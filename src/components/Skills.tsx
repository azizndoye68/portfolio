import { motion } from 'framer-motion'
import { Server, Layout, Database, Container, ShieldCheck, Code2 } from 'lucide-react'

const skillGroups = [
  {
    icon: Server,
    title: 'Backend',
    skills: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'Spring Cloud', 'API REST', 'RabbitMQ', 'Flyway'],
  },
  {
    icon: Layout,
    title: 'Frontend',
    skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'NgRx', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    icon: Database,
    title: 'Données',
    skills: ['PostgreSQL', 'MySQL', 'SQL avancé', 'Procédures stockées', 'Triggers'],
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité',
    skills: ['Spring Security', 'JWT & refresh token', 'Rôles et accès', 'BCrypt', 'CORS', 'Webhooks sécurisés'],
  },
  {
    icon: Container,
    title: 'DevOps & Qualité',
    skills: ['Docker', 'Docker Compose', 'Git / GitHub', 'CI/CD', 'JUnit', 'Mockito', 'Pact', 'Vercel', 'Render'],
  },
  {
    icon: Code2,
    title: 'Architecture & Méthode',
    skills: ['Microservices', 'OpenAPI / Contract-First', 'Swagger', 'Scrum', 'C'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-blue-400 font-medium mb-2 text-center">Compétences</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Ma stack technique</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Des outils que j'utilise dans mes projets : microservices et e-commerce en production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = group.icon
            return (
              <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Icon className="text-blue-400" size={22} />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-slate-700/50 text-slate-300 text-sm rounded-full border border-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}