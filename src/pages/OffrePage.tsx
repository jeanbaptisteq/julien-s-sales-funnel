import { motion } from "framer-motion";
import { CheckCircle, X, Video, Users, Bot, CreditCard, Clock, Star, MessageCircle, FileText, Award, Calendar } from "lucide-react";
import profileImage from "@/assets/profile-julien.jpg";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-4 max-w-5xl">{children}</div>
  </section>
);

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">{children}</h2>
    {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const OffrePage = () => {
  const avantApres = [
    { avant: "Tu bloques quand tu parles à un natif", apres: "Tu comprends les natifs et tu réponds naturellement" },
    { avant: "Tu manques de confiance pour ouvrir la bouche", apres: "Tu parles sans avoir peur de faire des erreurs" },
    { avant: "Tu ne sais pas comment progresser seul(e)", apres: "Tu as une méthode claire et des habitudes solides" },
    { avant: "Tu es loin du niveau requis pour le TEF/TCF", apres: "Tu es prêt(e) à passer ton certificat avec confiance" },
  ];

  const modules = [
    {
      num: "01",
      title: "Parler avec confiance",
      level: "A2–B1 · Expression orale",
      items: ["Techniques anti-blocage", "Grammaire en contexte", "Exprimer ses opinions, argumenter", "Flashcards de grammaire", "Live hebdo : débats guidés"],
    },
    {
      num: "02",
      title: "Le français professionnel",
      level: "B1 · Milieu professionnel",
      items: ["Vocabulaire du travail", "Écrire un email, lettre formelle", "Documents officiels", "Flashcards thématiques", "Live hebdo : simulations"],
    },
    {
      num: "03",
      title: "Préparation TEF / TCF",
      level: "B1–B2 · Certification",
      items: ["Grammaire avancée", "Stratégies par épreuve", "2 examens blancs complets", "Flashcards de révision", "Live hebdo : simulation d'examen"],
    },
  ];

  const inclus = [
    { icon: Video, text: "4 modules vidéo complets" },
    { icon: Clock, text: "Accès à vie à la plateforme" },
    { icon: Users, text: "1 appel live avec Julien chaque semaine" },
    { icon: MessageCircle, text: "Groupe privé de la communauté" },
    { icon: Bot, text: "Agent IA personnel 24h/24" },
    { icon: FileText, text: "Corrections personnalisées" },
    { icon: Star, text: "Flashcards intelligentes par module" },
    { icon: Award, text: "2 examens blancs TEF/TCF corrigés" },
    { icon: Calendar, text: "Session 1:1 de 30 min avec Julien" },
  ];

  const faqs = [
    { q: "Le programme est-il adapté aux débutants complets ?", a: "Oui. Le module 1 commence dès le niveau A1. Que tu démarres de zéro ou que tu aies quelques bases, le programme s'adapte à ton point de départ." },
    { q: "Est-ce que je peux suivre à mon propre rythme ?", a: "Toutes les vidéos sont en accès libre sur la plateforme, disponibles 24h/24. Seuls les lives hebdomadaires avec Julien ont un horaire fixe — et ils sont enregistrés si tu ne peux pas y assister." },
    { q: "À quoi sert l'agent IA ?", a: "L'agent IA t'aide à planifier ta semaine d'apprentissage, répondre à tes questions grammaticales, corriger tes phrases à l'écrit et suggérer des exercices selon ton niveau." },
    { q: "La session 1:1 avec Julien, c'est quand ?", a: "Cette session de 30 minutes a lieu dans les premiers jours après ton inscription. Elle sert à analyser ton niveau, comprendre tes objectifs et créer un plan d'action personnalisé." },
    { q: "Le programme prépare-t-il vraiment au TEF/TCF ?", a: "Oui, le module 4 est entièrement dédié à la préparation aux certifications. Tu passes deux examens blancs complets avec corrections détaillées." },
  ];

  const semaine = [
    { jour: "Lundi", activite: "Visionner la vidéo du module en cours", temps: "20 min" },
    { jour: "Mar–Jeu", activite: "Flashcards + exercices audio avec l'agent IA", temps: "10–20 min/j" },
    { jour: "Vendredi", activite: "Live avec Julien — pratique orale, Q&A", temps: "45–60 min" },
    { jour: "Weekend", activite: "Révisions libres + échanges communauté", temps: "Libre" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="gradient-hero-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
              🇫🇷 Programme complet de français
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 font-heading">
              Parle Français <br />en <span className="text-accent">4 Modules</span>
            </h1>
            <p className="text-xl text-primary-foreground/85 mb-4 max-w-2xl mx-auto">
              De A1/A2 à B1/B2 — à ton rythme, avec un vrai accompagnement
            </p>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Prépare ton certificat TEF/TCF et décroche ta vie en France
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#pricing" className="gradient-bg bg-accent text-foreground font-bold py-4 px-8 rounded-xl text-lg hover:opacity-90 transition-opacity inline-block" style={{ background: 'hsl(192, 91%, 56%)' }}>
                Rejoindre le programme — 397 €
              </a>
              <span className="text-primary-foreground/60 text-sm">ou 3 × 139 €</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Avant / Après */}
      <Section>
        <SectionTitle subtitle="Ce programme est fait pour toi si tu te reconnais dans la colonne « Avant »">
          Pour qui est ce programme ?
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {avantApres.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-start gap-3 mb-3">
                <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">{item.avant}</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="font-medium text-foreground">{item.apres}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
          {[
            { emoji: "🏠", text: "Tu veux vivre ou travailler en France" },
            { emoji: "📄", text: "Tu dois passer un certificat TEF ou TCF" },
            { emoji: "⏰", text: "Tu n'as que 1 à 2h par semaine" },
          ].map((item, i) => (
            <div key={i} className="text-center p-4 rounded-xl bg-secondary">
              <span className="text-3xl mb-2 block">{item.emoji}</span>
              <p className="text-sm font-medium text-secondary-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Modules */}
      <Section className="bg-card">
        <SectionTitle subtitle="Chaque module contient des vidéos + un live hebdomadaire avec Julien">
          Les 4 modules du programme
        </SectionTitle>
        <div className="space-y-6">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <div className="flex items-start gap-6">
                <span className="text-5xl font-bold gradient-text font-heading">{mod.num}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-heading text-foreground mb-1">{mod.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{mod.level}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {mod.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Ce qui est inclus */}
      <Section>
        <SectionTitle>Ce qui est inclus dans ton programme</SectionTitle>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {inclus.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm"
            >
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Semaine type */}
      <Section className="bg-card">
        <SectionTitle subtitle="Seulement 1 à 2h par semaine suffisent">
          Comment s'organise une semaine type ?
        </SectionTitle>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {semaine.map((s, i) => (
            <div key={i} className="bg-background rounded-xl p-5 border border-border text-center">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{s.jour}</span>
              <p className="text-sm text-foreground mt-2 mb-3">{s.activite}</p>
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">{s.temps}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <div id="pricing" className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-lg"
          >
            <div className="gradient-hero-bg p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground font-heading mb-2">Programme Complet</h3>
              <div className="text-5xl font-bold text-primary-foreground font-heading">397 €</div>
              <p className="text-primary-foreground/70 mt-2">ou 3 paiements de 139 €</p>
            </div>
            <div className="bg-card p-8">
              <ul className="space-y-3 mb-8">
                {[
                  "4 modules vidéo + accès à vie",
                  "1 appel live/semaine avec Julien",
                  "Flashcards intelligentes",
                  "Agent IA personnel",
                  "Session 1:1 de 30 min avec Julien",
                  "Communauté privée + corrections",
                  "2 examens blancs TEF/TCF",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full gradient-bg text-primary-foreground font-bold py-4 rounded-xl text-lg hover:opacity-90 transition-opacity">
                Rejoindre le programme →
              </button>
              <p className="text-center text-xs text-muted-foreground mt-4">
                🔒 Garantie satisfait ou remboursé — 14 jours
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Julien */}
      <Section className="bg-card">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img
            src={profileImage}
            alt="Professeur Julien"
            className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-primary/20"
          />
          <div>
            <h3 className="text-2xl font-bold font-heading text-foreground mb-3">Professeur Julien</h3>
            <p className="text-muted-foreground leading-relaxed">
              Professeur de français passionné, Julien accompagne chaque semaine des dizaines d'étudiants du monde entier 
              dans leur progression vers le niveau B1/B2. Son approche mêle méthode structurée, pratique orale intensive 
              et outils modernes comme l'IA et les flashcards.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionTitle>Questions fréquentes</SectionTitle>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="bg-card rounded-xl border border-border group">
              <summary className="p-5 cursor-pointer font-medium text-foreground font-heading hover:text-primary transition-colors list-none flex items-center justify-between">
                {faq.q}
                <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl">+</span>
              </summary>
              <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <div className="gradient-hero-bg py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading mb-4">
            Prêt(e) à passer au niveau supérieur ?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Rejoins le programme et commence à parler français avec confiance.
          </p>
          <a href="#pricing" className="inline-block font-bold py-4 px-10 rounded-xl text-lg hover:opacity-90 transition-opacity text-foreground" style={{ background: 'hsl(192, 91%, 56%)' }}>
            Je rejoins le programme — 397 € →
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 Professeur Julien — Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default OffrePage;
