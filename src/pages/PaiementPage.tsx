import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { WhopCheckoutEmbed } from "@whop/checkout/react";

const PaiementPage = () => {
  const [checkoutLoaded, setCheckoutLoaded] = useState(false);

  useEffect(() => {
    // Check if Whop script loaded and rendered
    const timer = setTimeout(() => {
      const whopEl = document.querySelector(`[data-whop-checkout-plan-id="${WHOP_PLAN_ID}"] iframe`);
      if (whopEl) {
        setCheckoutLoaded(true);
      }
    }, 3000);

    // Re-trigger Whop scan
    if ((window as any).WhopCheckout) {
      (window as any).WhopCheckout.scan();
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-foreground text-primary-foreground text-center py-2.5 text-sm font-medium tracking-wide">
        🇫🇷 PROFESSEUR JULIEN — Finalise ton inscription
      </div>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
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
        <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm mb-8 min-h-[400px]">
          <div
            data-whop-checkout-plan-id={WHOP_PLAN_ID}
            data-whop-color-scheme="light"
            data-whop-color="#4B7BF5"
          ></div>

          {/* Fallback if Whop doesn't load (e.g. in preview) */}
          {!checkoutLoaded && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mb-4" />
              <p className="text-muted-foreground mb-4">Chargement du formulaire de paiement…</p>
              <p className="text-sm text-muted-foreground mb-6">
                Si le formulaire ne s'affiche pas, clique sur le bouton ci-dessous :
              </p>
              <a
                href={WHOP_FALLBACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg text-primary-foreground font-bold py-3 px-8 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Payer sur Whop <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
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
