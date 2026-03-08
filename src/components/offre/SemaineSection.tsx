const semaine = [
  { jour: "Lundi", activite: "Visionner la vidéo du module en cours", temps: "20 min" },
  { jour: "Mar–Jeu", activite: "Flashcards + exercices audio avec l'agent IA", temps: "10–20 min/j" },
  { jour: "Vendredi", activite: "Live avec Julien — pratique orale, Q&A", temps: "45–60 min" },
  { jour: "Weekend", activite: "Révisions libres + échanges communauté", temps: "Libre" },
];

const SemaineSection = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-4">
        Comment s'organise une <span className="text-accent">semaine type</span> ?
      </h2>
      <p className="text-muted-foreground text-center mb-12">Seulement 1 à 2h par semaine suffisent</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {semaine.map((s, i) => (
          <div key={i} className="bg-card rounded-xl p-5 border border-border text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">{s.jour}</span>
            <p className="text-sm text-foreground mt-2 mb-3">{s.activite}</p>
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">{s.temps}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SemaineSection;
