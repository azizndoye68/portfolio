import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-blue-400 font-medium mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Discutons de votre projet</h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
            Je suis actuellement à la recherche d'opportunités. N'hésitez pas à me contacter si vous avez un poste, un projet, ou simplement une question.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <a href="mailto:azizndoye68@gmail.com" className="flex flex-col items-center gap-3 p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-colors">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <Mail className="text-blue-400" size={22} />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Email</p>
              <p className="text-slate-400 text-xs mt-1">azizndoye68@gmail.com</p>
            </div>
          </a>

          <a href="tel:+221773152007" className="flex flex-col items-center gap-3 p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-blue-500/50 transition-colors">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <Phone className="text-blue-400" size={22} />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Téléphone</p>
              <p className="text-slate-400 text-xs mt-1">+221 77 315 20 07</p>
            </div>
          </a>

          <div className="flex flex-col items-center gap-3 p-6 bg-slate-800/50 border border-slate-700 rounded-2xl">
            <div className="p-3 bg-blue-600/20 rounded-full">
              <MapPin className="text-blue-400" size={22} />
            </div>
            <div>
              <p className="text-white font-medium text-sm">Localisation</p>
              <p className="text-slate-400 text-xs mt-1">Ziguinchor, Sénégal</p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center justify-center gap-4">
          <a href="mailto:azizndoye68@gmail.com" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors">
            M'envoyer un email
          </a>
          <a href="https://github.com/azizndoye68" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors border border-slate-700">
            <SiGithub size={18} />
            GitHub
          </a>
        </motion.div>
      </div>

      <p className="text-center text-slate-600 text-sm mt-20">
        © 2026 Abdoul Aziz Ndoye. Construit avec React & Tailwind CSS.
      </p>
    </section>
  )
}