import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const modules = [
  {
    num: "01",
    title: "Parler avec confiance",
    level: "A2–B1 · Expression orale",
    value: "Valeur 149€",
    items: ["Techniques anti-blocage", "Grammaire en contexte", "Exprimer ses opinions, argumenter", "Flashcards de grammaire", "Live hebdo : débats guidés"],
  },
  {
    num: "02",
    title: "Le français professionnel",
    level: "B1 · Milieu professionnel",
    value: "Valeur 149€",
    items: ["Vocabulaire du travail", "Écrire un email, lettre formelle", "Documents officiels", "Flashcards thématiques", "Live hebdo : simulations"],
  },
  {
    num: "03",
    title: "Préparation TEF / TCF",
    level: "B1–B2 · Certification",
    value: "Valeur 199€",
    items: ["Grammaire avancée", "Stratégies par épreuve", "2 examens blancs complets", "Flashcards de révision", "Live hebdo : simulation d'examen"],
  },
];

const ModulesSection = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-4">
        Ce que tu auras en rejoignant le <span className="text-accent">Programme</span>
      </h2>
      <p className="text-muted-foreground text-center mb-12">Chaque module contient des vidéos + un live hebdomadaire avec Julien</p>
      <div className="space-y-6">
        {modules.map((mod, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-card rounded-2xl p-8 border border-border shadow-sm"
          >
            <span className="absolute -top-3 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
              {mod.value}
            </span>
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
      <div className="mt-8 text-center">
        <div className="inline-block bg-secondary border border-border rounded-xl px-6 py-3">
          <p className="text-sm text-foreground">
            <strong>Valeur cumulée réelle :</strong>{" "}
            <span className="text-accent font-bold text-lg line-through decoration-destructive">497€</span>
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ModulesSection;
