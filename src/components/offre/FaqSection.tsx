const faqs = [
  { q: "Est-ce utile si je ne suis pas encore en France ?", a: "Oui, c'est justement prévu pour ça. Tu prépares les situations que tu vas vivre (logement, travail, démarches, échanges du quotidien) pour arriver plus confiant(e) et opérationnel(le)." },
  { q: "Est-ce que je peux suivre à mon propre rythme ?", a: "Oui. Les vidéos sont accessibles 24h/24. Les lives hebdomadaires avec Julien sont enregistrés, donc tu peux progresser même avec un agenda chargé." },
  { q: "À quoi sert l'agent IA ?", a: "L'agent IA t'aide à organiser ta semaine, t'entraîner sur des situations concrètes, corriger tes phrases et préparer tes conversations importantes." },
  { q: "Le programme prépare-t-il aussi au DELF ?", a: "Oui, le DELF reste un bonus de progression. Tu as des entraînements dédiés et deux examens blancs complets, sans perdre le focus principal: parler pour t'intégrer en France." },
];

const FaqSection = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-12">
        Questions fréquentes
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="bg-card rounded-xl border border-border group">
            <summary className="p-5 cursor-pointer font-medium text-foreground font-heading hover:text-primary transition-colors list-none flex items-center justify-between">
              {faq.q}
              <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl">+</span>
            </summary>
            <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{faq.a}</div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FaqSection;
