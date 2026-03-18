import { Phone } from "lucide-react";

const FinalCtaSection = () => (
  <div className="py-12">
    <div className="container mx-auto px-4 text-center max-w-2xl">
      <p className="text-foreground font-bold text-xl md:text-2xl uppercase tracking-wide mb-2">
        Encore des interrogations ?
      </p>
      <p className="text-muted-foreground text-lg md:text-xl uppercase mb-6">
        Réserve un appel avec nous
      </p>
      <a
        href="https://calendly.com/bouyerjulien08/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex flex-col items-center justify-center gradient-bg text-primary-foreground font-bold py-4 px-10 rounded-xl text-lg hover:opacity-90 transition-opacity min-w-[320px]"
      >
        <span className="inline-flex items-center gap-2">
          Réserver un appel <Phone className="w-5 h-5" />
        </span>
        <span className="text-sm font-medium text-primary-foreground/85">
          Gratuit et sans engagement
        </span>
      </a>
    </div>
  </div>
);

export default FinalCtaSection;
