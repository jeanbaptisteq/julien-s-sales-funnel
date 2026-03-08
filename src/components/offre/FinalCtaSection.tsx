import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCtaSection = () => (
  <div className="gradient-hero-bg py-16">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading mb-4">
        Prêt(e) à passer au niveau supérieur ?
      </h2>
      <p className="text-primary-foreground/80 mb-8">
        Rejoins le programme et commence à parler français avec confiance.
      </p>
      <Link
        to="/paiement"
        className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold py-4 px-10 rounded-xl text-lg hover:opacity-90 transition-opacity"
      >
        Je rejoins le programme — 397 € <ArrowRight className="w-5 h-5" />
      </Link>
      <p className="text-primary-foreground/50 text-xs mt-4">
        🔒 Garantie satisfait ou remboursé — 14 jours
      </p>
    </div>
  </div>
);

export default FinalCtaSection;
