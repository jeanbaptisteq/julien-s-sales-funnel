import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

const PaiementPage = () => {
  useEffect(() => {
    // Whop script is loaded globally via index.html
    // Re-trigger scan for checkout embeds
    if ((window as any).WhopCheckout) {
      (window as any).WhopCheckout.scan();
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Topbar */}
      <div className="bg-foreground text-primary-foreground text-center py-2.5 text-sm font-medium tracking-wide">
        🇫🇷 PROFESSEUR JULIEN — Finalise ton inscription
      </div>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Back link */}
        <Link to="/offre" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" /> Retour à l'offre
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-2">
            Finalise ton inscription
          </h1>
          <p className="text-muted-foreground">
            Programme Complet — <strong className="text-foreground">397 €</strong> ou 3 × 139 €
          </p>
        </div>

        {/* Whop Embedded Checkout */}
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm mb-8">
          <div
            data-whop-checkout-plan-id="plan_GYvtakEDJ2pza"
            data-whop-color-scheme="light"
            data-whop-color="#4B7BF5"
          />
        </div>

        {/* Trust indicators */}
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
