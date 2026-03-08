import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const PricingSection = () => (
  <section className="py-16 md:py-20" id="pricing">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-12">
        NOS OFFRES <span className="text-accent">EXCLUSIVES</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Standard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border overflow-hidden bg-card"
        >
          <div className="p-6 text-center border-b border-border">
            <h3 className="text-xl font-bold font-heading text-foreground mb-2">Programme Complet</h3>
            <div className="text-4xl font-bold text-foreground font-heading">397 €</div>
            <p className="text-muted-foreground text-sm mt-1">ou 3 paiements de 139 €</p>
          </div>
          <div className="p-6">
            <ul className="space-y-3 mb-6">
              {[
                "4 modules vidéo + accès à vie",
                "1 appel live/semaine avec Julien",
                "Flashcards intelligentes",
                "Agent IA personnel",
                "Communauté privée + corrections",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full gradient-bg text-primary-foreground font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Rejoindre — 397 € <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Premium */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl overflow-hidden shadow-lg relative"
        >
          <div className="absolute -top-0 left-0 right-0 bg-accent text-accent-foreground text-center text-xs font-bold py-1.5 uppercase tracking-wider">
            ⭐ Recommandé
          </div>
          <div className="gradient-hero-bg p-6 text-center pt-10">
            <h3 className="text-xl font-bold font-heading text-primary-foreground mb-2">Programme Premium</h3>
            <div className="flex items-center justify-center gap-3">
              <span className="text-primary-foreground/50 line-through text-2xl">597 €</span>
              <span className="text-5xl font-bold text-primary-foreground font-heading">497 €</span>
            </div>
            <p className="text-primary-foreground/70 text-sm mt-1">ou 3 paiements de 175 €</p>
            <span className="inline-block mt-2 bg-accent/20 border border-accent/30 text-accent text-xs font-bold px-3 py-1 rounded-full">
              Économie : -17%
            </span>
          </div>
          <div className="bg-card p-6">
            <ul className="space-y-3 mb-6">
              {[
                "Tout du Programme Complet",
                "Session 1:1 de 30 min avec Julien",
                "2 examens blancs TEF/TCF corrigés",
                "Corrections personnalisées illimitées",
                "Accès prioritaire aux lives",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className={i === 0 ? "font-bold" : ""}>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-accent text-accent-foreground font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Meilleur combo — 497 € <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-6">
        🔒 Paiements 100% sécurisés · Garantie satisfait ou remboursé — 14 jours
      </p>
    </div>
  </section>
);

export default PricingSection;
