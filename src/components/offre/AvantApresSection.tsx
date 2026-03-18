import { motion } from "framer-motion";
import { X } from "lucide-react";

const mythes = [
  "Vivre des années dans un pays francophone avant d'oser parler naturellement",
  "Étudier 2 heures par jour avec une pression constante pour progresser",
  "Utiliser uniquement des applis en pensant que ça suffit pour les vraies conversations",
];

const AvantApresSection = () => (
  <section className="py-16 md:py-20 bg-background">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-4">
        ON TE FAIT CROIRE QU'IL FAUT :
      </h2>
      <div className="max-w-3xl mx-auto mb-6 rounded-2xl border border-border bg-card p-6 md:p-8">
        <ul className="space-y-4">
          {mythes.map((m, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 text-foreground/85"
            >
              <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <span>{m}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
        Et c'est exactement ce qui te bloque pour t'immerger vite dans un quotidien francophone.
      </p>

      <div className="max-w-3xl mx-auto space-y-4 text-center">
        <div className="rounded-xl border border-primary/20 bg-primary/5 px-5 py-3">
          <p className="text-foreground font-semibold">
            La vérité ? <span className="font-normal text-muted-foreground">Rien de tout ça ne marche.</span>
          </p>
        </div>
        <div className="rounded-xl border border-accent/30 bg-accent/10 px-5 py-5">
          <p className="text-foreground">
            En 4 mois, tu suis un plan concret et personnalisé pour parler avec plus d'aisance dans ta vie francophone.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AvantApresSection;
