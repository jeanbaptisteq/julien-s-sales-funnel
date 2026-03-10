const faqs = [
  { q: "Le programme est-il adapté aux débutants complets ?", a: "Oui. Le module 1 commence dès le niveau A1. Que tu démarres de zéro ou que tu aies quelques bases, le programme s'adapte à ton point de départ." },
  { q: "Est-ce que je peux suivre à mon propre rythme ?", a: "Toutes les vidéos sont en accès libre sur la plateforme, disponibles 24h/24. Seuls les lives hebdomadaires avec Julien ont un horaire fixe — et ils sont enregistrés si tu ne peux pas y assister." },
  { q: "À quoi sert l'agent IA ?", a: "L'agent IA t'aide à planifier ta semaine d'apprentissage, répondre à tes questions grammaticales, corriger tes phrases à l'écrit et suggérer des exercices selon ton niveau." },
  { q: "La session 1:1 avec Julien, c'est quand ?", a: "Cette session de 30 minutes a lieu dans les premiers jours après ton inscription. Elle sert à analyser ton niveau, comprendre tes objectifs et créer un plan d'action personnalisé." },
  { q: "Le programme prépare-t-il vraiment au DELF ?", a: "Oui, le module 3 est entièrement dédié à la préparation au DELF. Tu passes deux examens blancs complets avec corrections détaillées." },
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
