import { Star } from "lucide-react";
import profileImage from "@/assets/profile-julien.jpg";

const JulienSection = () => (
  <section className="py-16 md:py-20 bg-card">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src={profileImage}
          alt="Professeur Julien"
          className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-primary/20"
        />
        <div>
          <h3 className="text-2xl font-bold font-heading text-foreground mb-1">Qui est Professeur Julien ?</h3>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}</div>
            <span className="text-xs text-muted-foreground">4.9/5 — Avis étudiants</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Professeur de français passionné, Julien accompagne chaque semaine des dizaines d'étudiants du monde entier
            dans leur progression vers le niveau B1/B2. Son approche mêle méthode structurée, pratique orale intensive
            et outils modernes comme l'IA et les flashcards.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default JulienSection;
