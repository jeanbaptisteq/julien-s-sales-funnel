import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { WhopCheckoutEmbed } from "@whop/checkout/react";

const PaiementPage = () => {
  const [paymentMode, setPaymentMode] = useState<"one_time" | "split">("one_time");

  const oneTimePlanId = "plan_4URlY54jBzeTE";
  const splitPlanId = "plan_Uu9YJB5Kt6m1M";
  const selectedPlanId = paymentMode === "split" ? splitPlanId : oneTimePlanId;

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
        </div>

        <div className="bg-card rounded-2xl border border-border p-3 md:p-5 shadow-sm mb-6">
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => setPaymentMode("one_time")}
              className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                paymentMode === "one_time"
                  ? "border-primary bg-primary/5"
                  : "border-border bg-background hover:bg-muted/40"
              }`}
            >
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <div className="flex items-center gap-3">
                  <span className={`inline-block h-4 w-4 rounded-full border ${
                    paymentMode === "one_time" ? "border-primary bg-primary" : "border-muted-foreground/50"
                  }`} />
                  <span className="font-medium text-foreground">Paiement en 1 fois</span>
                </div>
                <span className="font-semibold text-foreground">397 €</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setPaymentMode("split")}
              className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                paymentMode === "split"
                  ? "border-primary bg-primary/5"
                  : "border-border bg-background hover:bg-muted/40"
              }`}
            >
              <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <div className="flex items-center gap-3">
                  <span className={`inline-block h-4 w-4 rounded-full border ${
                    paymentMode === "split" ? "border-primary bg-primary" : "border-muted-foreground/50"
                  }`} />
                  <span className="font-medium text-foreground">Paiement en 3 fois</span>
                </div>
                <span className="font-semibold text-foreground">3 × 139 € / mois</span>
              </div>
            </button>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Le paiement en plusieurs fois inclut des frais de fractionnement.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border p-2 sm:p-4 md:p-8 shadow-sm mb-8 min-h-[400px]">
          <WhopCheckoutEmbed
            key={selectedPlanId}
            planId={selectedPlanId}
            returnUrl="https://julien-wonder-tunnel.lovable.app/offre"
          />
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <ShieldCheck className="w-4 h-4" />
            Paiement 100% sécurisé · Garantie satisfait ou remboursé — 30 jours
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
