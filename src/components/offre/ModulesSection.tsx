import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const modules = [
  {
    num: "01",
    title: "Parler au quotidien en environnement francophone",
    level: "A2–B1 · Vie quotidienne",
    items: ["Techniques anti-blocage", "Parler logement, transport, santé", "Exprimer un besoin, demander de l'aide", "Flashcards de grammaire en contexte", "Live hebdo : mises en situation guidées"],
  },
  {
    num: "02",
    title: "S'intégrer au travail et dans les démarches",
    level: "B1 · Vie pro et administrative",
    items: ["Vocabulaire du travail", "Écrire emails et messages professionnels", "Comprendre formulaires et documents", "Flashcards thématiques", "Live hebdo : simulations d'entretiens et démarches"],
  },
  {
    num: "03",
    title: "Consolider ton niveau et valider ta progression",
    level: "B1–B2 · Intégration avancée",
    items: ["Grammaire avancée utile au quotidien", "Argumenter et gérer des échanges complexes", "2 examens blancs DELF en bonus", "Flashcards de révision", "Live hebdo : simulations de situations réelles"],
  },
];

const ModulesSection = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-4">
        Ce que tu auras pour <span className="text-accent">vivre l'immersion francophone</span>
      </h2>
      <div className="space-y-6">
        {modules.map((mod, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm"
          >
            <div className="flex items-start gap-6">
              <span className="text-5xl font-bold gradient-text font-heading">{mod.num}</span>
              <div className="flex-1">
                <h3 className="text-xl font-bold font-heading text-foreground mb-1">{mod.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{mod.level}</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {mod.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ModulesSection;
