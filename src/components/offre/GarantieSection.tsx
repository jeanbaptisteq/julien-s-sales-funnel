import { ShieldCheck } from "lucide-react";

const GarantieSection = () => (
  <section className="py-12 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="flex flex-col md:flex-row items-center gap-6 bg-foreground border border-primary-foreground/10 rounded-2xl p-8">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
          <ShieldCheck className="w-8 h-8 text-accent" />
        </div>
        <div className="text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
            <h3 className="text-xl font-bold font-heading text-primary-foreground">Garantie</h3>
            <span
              className="text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase border border-slate-200 shadow-sm"
              style={{ backgroundColor: "#ffffff" }}
            >
              Satisfait ou remboursé
            </span>
          </div>
          <p className="text-primary-foreground/70 text-sm">
            Si après 14 jours tu n'es pas satisfait du programme, on te rembourse intégralement. Sans condition, sans justification.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default GarantieSection;
