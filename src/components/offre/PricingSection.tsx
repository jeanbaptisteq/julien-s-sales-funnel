import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => (
  <section className="py-16 md:py-20" id="pricing">
    <div className="container mx-auto px-4 max-w-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-3">
          Ton offre pour passer à l'action
        </h2>
        <p className="text-muted-foreground">
          Tu as vu la méthode, les résultats et l'accompagnement. Voici le programme complet.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl overflow-hidden shadow-lg"
      >
        <div className="gradient-hero-bg p-8 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground font-heading mb-2">Programme Intégration France</h3>
          <div className="text-5xl font-bold text-primary-foreground font-heading">397 €</div>
          <p className="text-primary-foreground/70 mt-2">ou 3 paiements de 139 €</p>
        </div>
        <div className="bg-card p-8">
          <ul className="space-y-3 mb-8">
            {[
              "4 modules vidéo orientés intégration + accès à vie",
              "1 appel live/semaine avec Julien",
              "Flashcards intelligentes",
              "Agent IA personnel",
              "Session 1:1 de 30 min avec Julien",
              "Communauté privée + corrections ciblées",
              "Bonus: 2 examens blancs DELF",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/paiement"
            className="w-full gradient-bg text-primary-foreground font-bold py-4 rounded-xl text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Je rejoins le programme d'intégration <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-center text-xs text-muted-foreground mt-4">
            🔒 Garantie satisfait ou remboursé — 14 jours
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
