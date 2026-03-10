import { motion } from "framer-motion";
import { Video, Clock, Users, MessageCircle, Bot, FileText, Star, Award, Calendar } from "lucide-react";

const inclus = [
  { icon: Video, text: "4 modules vidéo complets" },
  { icon: Clock, text: "Accès à vie à la plateforme" },
  { icon: Users, text: "1 appel live avec Julien chaque semaine" },
  { icon: MessageCircle, text: "Groupe privé de la communauté" },
  { icon: Bot, text: "Agent IA personnel 24h/24" },
  { icon: FileText, text: "Corrections personnalisées" },
  { icon: Star, text: "Flashcards intelligentes par module" },
  { icon: Award, text: "2 examens blancs DELF corrigés" },
  { icon: Calendar, text: "Session 1:1 de 30 min avec Julien" },
];

const InclusSection = () => (
  <section className="py-16 md:py-20 bg-card">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-12">
        Tout ce qui est <span className="text-accent">inclus</span> dans ton programme
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {inclus.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative flex items-center gap-3 bg-background rounded-xl p-4 border border-border"
          >
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
              <item.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-sm font-medium text-foreground flex-1">{item.text}</span>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Tout est déjà prêt pour t'aider à progresser vite et t'intégrer durablement.
      </p>
    </div>
  </section>
);

export default InclusSection;
