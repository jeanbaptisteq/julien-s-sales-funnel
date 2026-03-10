import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FinalCtaSection = () => (
  <div className="py-12">
    <div className="container mx-auto px-4 text-center">
      <Link
        to="/paiement"
        className="inline-flex items-center gap-2 gradient-bg text-primary-foreground font-bold py-4 px-10 rounded-xl text-lg hover:opacity-90 transition-opacity"
      >
        Je rejoins le programme <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  </div>
);

export default FinalCtaSection;
