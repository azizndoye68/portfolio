import { motion } from 'framer-motion'
import { Code2, Database, Wrench, Layers } from 'lucide-react'

const skillGroups = [
  {
    icon: Code2,
    title: 'Langages',
    skills: ['C', 'Java', 'JavaScript'],
  },
  {
    icon: Layers,
    title: 'Frameworks',
    skills: ['Spring Boot', 'React', 'Angular', 'Bootstrap'],
  },
  {
    icon: Database,
    title: 'Bases de données',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    icon: Wrench,
    title: 'Outils & Pratiques',
    skills: ['Git', 'GitHub', 'Docker', 'Microservices', 'API REST', 'CI/CD', 'Scrum'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-blue-400 font-medium mb-2 text-center">Compétences</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Ma stack technique</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = group.icon
            return (
              <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors">
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