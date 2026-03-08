import { motion } from "framer-motion";
import { Star } from "lucide-react";

const temoignages = [
  { nom: "Maria S.", pays: "🇧🇷 Brésil", texte: "Grâce à Julien, j'ai réussi mon TCF B2 du premier coup ! La méthode est claire et les lives sont incroyables.", note: 5 },
  { nom: "Ahmed K.", pays: "🇲🇦 Maroc", texte: "Je recommande à 100%. En 3 mois, je suis passé de A2 à B1. L'agent IA est un vrai plus pour s'entraîner tous les jours.", note: 5 },
  { nom: "Chen W.", pays: "🇨🇳 Chine", texte: "Le programme est très bien structuré. Les flashcards et les corrections personnalisées m'ont beaucoup aidé.", note: 5 },
];

const TemoignagesSection = () => (
  <section className="py-16 md:py-20 bg-foreground">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground text-center mb-4">
        Ils nous ont fait <span className="text-accent">CONFIANCE !</span>
      </h2>
      <p className="text-primary-foreground/60 text-center mb-12">Avis vérifiés de nos étudiants</p>
      <div className="grid md:grid-cols-3 gap-6">
        {temoignages.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-foreground font-bold text-sm">
                {t.nom[0]}
              </div>
              <div>
                <p className="font-bold text-primary-foreground text-sm">{t.nom}</p>
                <p className="text-primary-foreground/50 text-xs">{t.pays}</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(t.note)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">« {t.texte} »</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TemoignagesSection;
