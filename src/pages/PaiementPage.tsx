import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { WhopCheckoutEmbed } from "@whop/checkout/react";

const PaiementPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link to="/offre" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" /> Retour à l'offre
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-2">
            Finalise ton inscription au programme
          </h1>
          <p className="text-muted-foreground">
            Programme Intégration France — <strong className="text-foreground">397 €</strong> ou 3 × 139 €
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm mb-8 min-h-[400px]">
          <WhopCheckoutEmbed
            planId="plan_GYvtakEDJ2pza"
            returnUrl="https://julien-wonder-tunnel.lovable.app/offre"
          />
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <ShieldCheck className="w-4 h-4" />
            Paiement 100% sécurisé · Garantie satisfait ou remboursé — 14 jours
          </div>
        </div>
      </div>

      <footer className="py-6 text-center text-xs text-muted-foreground">
        © 2026 Professeur Julien — Tous droits réservés
      </footer>
    </div>
  );
};

export default PaiementPage;
