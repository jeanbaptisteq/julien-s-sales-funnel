import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

const avantApres = [
  { avant: "Tu bloques quand tu parles à un natif", apres: "Tu comprends les natifs et tu réponds naturellement" },
  { avant: "Tu manques de confiance pour ouvrir la bouche", apres: "Tu parles sans avoir peur de faire des erreurs" },
  { avant: "Tu ne sais pas comment progresser seul(e)", apres: "Tu as une méthode claire et des habitudes solides" },
  { avant: "Tu es loin du niveau requis pour le TEF/TCF", apres: "Tu es prêt(e) à passer ton certificat avec confiance" },
];

const AvantApresSection = () => (
  <section className="py-16 md:py-20 bg-foreground">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground text-center mb-4">
        Eux l'ont fait ! <span className="text-accent">ET TOI ?</span>
      </h2>
      <p className="text-primary-foreground/70 text-center mb-12 max-w-2xl mx-auto">
        Ce programme est fait pour toi si tu te reconnais dans la colonne « Avant »
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {avantApres.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6"
          >
            <div className="flex items-start gap-3 mb-3">
              <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <p className="text-primary-foreground/60 line-through">{item.avant}</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <p className="font-semibold text-primary-foreground">{item.apres}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
        {[
          { emoji: "🏠", text: "Tu veux vivre ou travailler en France" },
          { emoji: "📄", text: "Tu dois passer un certificat TEF ou TCF" },
          { emoji: "⏰", text: "Tu n'as que 1 à 2h par semaine" },
        ].map((item, i) => (
          <div key={i} className="text-center p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
            <span className="text-3xl mb-2 block">{item.emoji}</span>
            <p className="text-sm font-medium text-primary-foreground/80">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AvantApresSection;
