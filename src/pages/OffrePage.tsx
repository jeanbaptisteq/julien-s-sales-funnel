import HeroSection from "@/components/offre/HeroSection";
import AvantApresSection from "@/components/offre/AvantApresSection";
import ModulesSection from "@/components/offre/ModulesSection";
import InclusSection from "@/components/offre/InclusSection";

import PricingSection from "@/components/offre/PricingSection";
import GarantieSection from "@/components/offre/GarantieSection";
import TemoignagesSection from "@/components/offre/TemoignagesSection";
import JulienSection from "@/components/offre/JulienSection";
import FaqSection from "@/components/offre/FaqSection";
import FinalCtaSection from "@/components/offre/FinalCtaSection";

const OffrePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-foreground text-primary-foreground text-center py-2.5 text-sm font-medium tracking-wide">
        🇫🇷 PROFESSEUR JULIEN — Programme Complet de Français
      </div>

      <HeroSection />
      <AvantApresSection />
      <ModulesSection />
      <InclusSection />
      <GarantieSection />
      <SemaineSection />
      <TemoignagesSection />
      <PricingSection />
      <JulienSection />
      <FaqSection />
      <FinalCtaSection />

      <footer className="py-6 text-center text-xs text-muted-foreground">
        © 2026 Professeur Julien — Tous droits réservés
      </footer>
    </div>
  );
};

export default OffrePage;
