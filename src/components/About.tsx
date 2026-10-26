import { motion } from "framer-motion";
import { GraduationCap, MapPin, Languages } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-blue-400 font-medium mb-2 text-center">À propos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Qui suis-je
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-10"
        >
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Titulaire d’un Master en Génie Logiciel de l’Université Assane Seck
            de Ziguinchor, je suis développeur Full Stack junior, passionné par
            la conception et le développement d’applications web robustes,
            évolutives et sécurisées. Je travaille principalement avec **Java,
            Spring Boot et les architectures microservices côté backend**, ainsi
            qu’avec **React et Angular côté frontend**. Je maîtrise également la
            conception d’API REST, la gestion de bases de données relationnelles
            avec PostgreSQL et MySQL, ainsi que les outils de développement
            comme Git et Docker. À travers mes projets, notamment une plateforme
            de suivi des patients diabétiques et une application e-commerce,
            j’ai développé une approche axée sur la qualité du code, la
            sécurité, les tests et la fiabilité des applications. Curieux,
            rigoureux et toujours désireux d’apprendre, je souhaite rejoindre
            une équipe dynamique pour contribuer à des projets concrets,
            approfondir mes compétences et concevoir des solutions numériques
            répondant à de réels besoins.{" "}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
            <div className="flex items-start gap-3">
              <GraduationCap
                className="text-blue-400 shrink-0 mt-1"
                size={22}
              />
              <div>
                <p className="text-white font-medium text-sm">Formation</p>
                <p className="text-slate-400 text-sm">
                  Master Génie Logiciel, UASZ
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-blue-400 shrink-0 mt-1" size={22} />
              <div>
                <p className="text-white font-medium text-sm">Localisation</p>
                <p className="text-slate-400 text-sm">Dakar, Sénégal</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Languages className="text-blue-400 shrink-0 mt-1" size={22} />
              <div>
                <p className="text-white font-medium text-sm">Langues</p>
                <p className="text-slate-400 text-sm">
                  Français (courant), Anglais (intermédiaire)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
