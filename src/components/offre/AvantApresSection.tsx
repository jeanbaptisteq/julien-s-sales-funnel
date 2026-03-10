import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

const points = [
  { avant: "Tu bloques face aux natifs dans les échanges du quotidien", apres: "Tu comprends mieux et tu réponds plus naturellement" },
  { avant: "Tu stresses pour un appel, un rendez-vous ou une démarche", apres: "Tu oses parler dans des situations réelles sans paniquer" },
  { avant: "Tu ne sais pas quoi travailler pour vraiment t'intégrer", apres: "Tu suis un plan clair avec des habitudes utiles chaque semaine" },
  { avant: "Tu repousses logement, papiers ou opportunités pro par peur du français", apres: "Tu avances dans tes démarches et ta vie pro avec plus d'assurance" },
];

const AvantApresSection = () => (
  <section className="py-16 md:py-20 bg-background">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-4">
        Ce programme est fait pour <span className="text-accent">TOI</span> si…
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Voici ce que mes étudiants vivent avant et après le programme d'intégration
      </p>

      {/* Two columns: Avant / Après */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Avant */}
        <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
          <h3 className="text-center font-heading font-bold text-lg text-destructive mb-6 uppercase tracking-wider">
            ❌ Avant le programme
          </h3>
          <ul className="space-y-4">
            {points.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{p.avant}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Après */}
        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6">
          <h3 className="text-center font-heading font-bold text-lg text-accent mb-6 uppercase tracking-wider">
            ✅ Après le programme
          </h3>
          <ul className="space-y-4">
            {points.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-medium">{p.apres}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  </section>
);

export default AvantApresSection;
