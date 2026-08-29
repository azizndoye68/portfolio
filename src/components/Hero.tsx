import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-3xl">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-blue-400 font-medium mb-4 tracking-wide">
          Bonjour, je suis
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="text-5xl md:text-7xl font-bold text-white mb-4">
          Abdoul Aziz Ndoye
        </motion.h1>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          Développeur Fullstack
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Diplômé en Génie Logiciel de l'UASZ, je conçois des applications web complètes, du backend Spring Boot à l'interface React, avec une expertise en architecture microservices.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }} className="flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors">
            Voir mes projets
          </a>
          <a href="/CV Abdoul Aziz Ndoye.pdf" download className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors border border-slate-700">
            <Download size={18} />
            Télécharger le CV
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.7 }} className="flex items-center justify-center gap-6 mt-10">
          <a href="https://github.com/azizndoye68" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <SiGithub size={22} />
          </a>
          <a href="mailto:azizndoye68@gmail.com" className="text-slate-400 hover:text-white transition-colors">
            <Mail size={22} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500">
        <ArrowDown size={24} />
      </motion.div>
    </section>
  )
}