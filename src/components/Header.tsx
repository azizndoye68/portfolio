import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Mail } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-white tracking-tight">
          Aziz<span className="text-blue-500">.</span>dev
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/azizndoye68" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">
            <SiGithub size={20} />
          </a>
          <a href="mailto:azizndoye68@gmail.com" className="text-slate-300 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="md:hidden bg-slate-900/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-blue-400 text-sm font-medium">
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}