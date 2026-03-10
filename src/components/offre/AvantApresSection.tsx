import { motion } from "framer-motion";
import { CheckCircle, X, ArrowRight } from "lucide-react";

const points = [
  { avant: "Tu bloques quand tu parles à un natif", apres: "Tu comprends et tu réponds naturellement" },
  { avant: "Tu manques de confiance pour ouvrir la bouche", apres: "Tu parles sans peur de faire des erreurs" },
  { avant: "Tu ne sais pas comment progresser", apres: "Tu as une méthode claire et des habitudes solides" },
  { avant: "Tu es loin du niveau requis pour le DELF", apres: "Tu es prêt(e) à passer ton certificat" },
];

const AvantApresSection = () => (
  <section className="py-16 md:py-20 bg-foreground">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground text-center mb-4">
        Ce programme est fait pour <span className="text-accent">TOI</span> si…
      </h2>
      <p className="text-primary-foreground/60 text-center mb-12 max-w-2xl mx-auto">
        Voici ce que mes étudiants vivent avant et après le programme
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
                <span className="text-primary-foreground/70">{p.avant}</span>
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
                <span className="text-primary-foreground font-medium">{p.apres}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Profils */}
      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
        {profils.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
          >
            <span className="text-3xl mb-2 block">{item.emoji}</span>
            <p className="text-sm font-medium text-primary-foreground/80">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AvantApresSection;
