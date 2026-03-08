import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Users, Award, Star, ShieldCheck, ArrowRight, X } from "lucide-react";
import guideImage from "@/assets/guide-julien.png";
import profileImage from "@/assets/profile-julien.jpg";

const OptinPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      navigate("/offre");
    }
  };

  const benefits = [
    "Méthode claire pour passer de A1 à B2",
    "Accès à des exercices et flashcards gratuites",
    "Conseils exclusifs pour le TEF/TCF",
    "Plan d'action personnalisé selon ton niveau",
  ];

  const mythes = [
    "Il faut vivre en France pour apprendre le français",
    "Tu dois étudier 2h par jour minimum",
    "Les applications suffisent pour parler couramment",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Topbar */}
      <div className="bg-foreground text-primary-foreground text-center py-2.5 text-sm font-medium tracking-wide">
        🇫🇷 PROFESSEUR JULIEN — Cours de Français en Ligne
      </div>

      {/* Hero Section */}
      <div className="gradient-hero-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
                📥 GUIDE GRATUIT — Téléchargement immédiat
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 font-heading">
                Parle Français <br />
                <span className="text-accent">avec Confiance</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed">
                Télécharge ton guide gratuit et découvre la méthode pour progresser de A1 à B2 — à ton rythme, sans pression.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 text-primary-foreground/90"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-medium">{b}</span>
                  </motion.div>
                ))}
              </div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="glass-card rounded-2xl p-6 space-y-4 max-w-md"
              >
                <h3 className="text-foreground font-heading font-bold text-lg flex items-center gap-2">
                  📥 Reçois ton guide gratuit
                </h3>
                <input
                  type="text"
                  placeholder="Ton prénom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-base"
                />
                <input
                  type="email"
                  placeholder="Ton email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-base"
                />
                <button
                  type="submit"
                  className="w-full gradient-bg text-primary-foreground font-bold py-4 rounded-lg hover:opacity-90 transition-opacity text-lg flex items-center justify-center gap-2"
                >
                  Je veux mon guide gratuit <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Tes données sont protégées. Zéro spam.
                </p>
              </motion.form>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden md:flex justify-center"
            >
              <img src={guideImage} alt="Guide gratuit — Professeur Julien" className="max-w-md w-full drop-shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Myth Busting */}
      <section className="py-16 md:py-20 bg-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading text-center mb-4">
              ON TE FAIT CROIRE QU'IL FAUT :
            </h2>
            <div className="max-w-lg mx-auto mt-8 space-y-4">
              {mythes.map((m, i) => (
                <div key={i} className="flex items-center gap-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl px-5 py-4">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span className="text-primary-foreground/80">{m}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <p className="text-accent font-bold text-xl mb-6">La vérité ? <span className="text-primary-foreground font-normal">Rien de tout ça ne marche.</span></p>
              <div className="max-w-2xl mx-auto bg-accent/10 rounded-2xl p-8">
                <p className="text-primary-foreground text-lg leading-relaxed">
                  Avec Professeur Julien, tu suis une <strong className="text-accent">méthode structurée</strong>, avec un vrai <strong className="text-accent">accompagnement humain</strong>, et seulement <strong className="text-accent">1 à 2h par semaine</strong> suffisent pour passer de A1 à B2.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-4">
            Ce que tu trouveras dans le guide
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Un guide complet pour comprendre la méthode et commencer à progresser dès aujourd'hui
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: BookOpen, title: "4 Modules Structurés", desc: "Un parcours clair du A1 au B2, étape par étape", value: "Valeur 49€" },
              { icon: Users, title: "Communauté Active", desc: "Apprends avec un groupe motivé du monde entier", value: "Valeur 29€" },
              { icon: Award, title: "Préparation TEF/TCF", desc: "Conseils concrets pour passer ton certificat", value: "Valeur 39€" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center p-8 rounded-2xl bg-card shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <span className="absolute -top-3 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {item.value}
                </span>
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Julien profile */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <img
              src={profileImage}
              alt="Professeur Julien"
              className="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-primary/20"
            />
            <div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Qui est Julien ?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Professeur de français passionné, Julien accompagne chaque semaine des dizaines d'étudiants du monde entier.
                Sa méthode combine pratique orale intensive, accompagnement personnalisé et outils modernes.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}</div>
                <span className="text-sm text-muted-foreground">4.9/5 — Avis étudiants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-hero-bg py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading mb-4">
            Prêt(e) à commencer ?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Télécharge ton guide gratuit et fais le premier pas vers le français.
          </p>
          <a href="#top" className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold py-4 px-10 rounded-xl text-lg hover:opacity-90 transition-opacity">
            Je veux mon guide gratuit <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <footer className="py-6 text-center text-xs text-muted-foreground">
        © 2026 Professeur Julien — Tous droits réservés
      </footer>
    </div>
  );
};

export default OptinPage;
