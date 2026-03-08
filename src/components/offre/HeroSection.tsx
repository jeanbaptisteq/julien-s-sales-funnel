import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <div className="gradient-hero-bg relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
    </div>
    <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 max-w-4xl text-center">
      <div>
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
          🇫🇷 NOUVELLE MÉTHODE — Plus efficace que jamais
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 font-heading">
          Parle Français <br />en <span className="text-accent">4 Modules</span>
        </h1>
        <p className="text-xl text-primary-foreground/85 mb-2 max-w-2xl mx-auto">
          De A1/A2 à B1/B2 — à ton rythme, avec un vrai accompagnement
        </p>
        <p className="text-primary-foreground/70 mb-4">
          Prépare ton certificat TEF/TCF et décroche ta vie en France
        </p>
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-accent text-lg">★</span>
            ))}
          </div>
          <span className="text-primary-foreground/70 text-sm">4.9/5 — Avis étudiants</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/paiement" className="bg-accent text-accent-foreground font-bold py-4 px-8 rounded-xl text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
            Rejoindre le programme — 397 € <ArrowRight className="w-5 h-5" />
          </Link>
          <span className="text-primary-foreground/60 text-sm">ou 3 × 139 €</span>
        </div>
      </div>
    </div>
  </div>
);

export default HeroSection;
