import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Users, Award } from "lucide-react";
import guideImage from "@/assets/guide-julien.png";

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
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="gradient-hero-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-primary blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
                🇫🇷 Cours de français avec Julien
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 font-heading">
                Parle Français <br />
                <span className="text-accent">avec Confiance</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed">
                Télécharge ton guide gratuit et découvre la méthode pour progresser de A1 à B2 — à ton rythme.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                    className="flex items-center gap-3 text-primary-foreground/90"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{b}</span>
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
                <h3 className="text-foreground font-heading font-semibold text-lg">
                  📥 Reçois ton guide gratuit
                </h3>
                <input
                  type="text"
                  placeholder="Ton prénom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Ton email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="w-full gradient-bg text-primary-foreground font-semibold py-3.5 rounded-lg hover:opacity-90 transition-opacity text-lg"
                >
                  Je veux mon guide gratuit →
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  🔒 Tes données sont protégées. Zéro spam.
                </p>
              </motion.form>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden md:flex justify-center"
            >
              <img
                src={guideImage}
                alt="Professeur Julien - Cours de français"
                className="max-w-md w-full drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: BookOpen, title: "4 Modules Structurés", desc: "Un parcours clair du A1 au B2" },
            { icon: Users, title: "Communauté Active", desc: "Apprends avec un groupe motivé" },
            { icon: Award, title: "Préparation TEF/TCF", desc: "Passe ton certificat avec confiance" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-6 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptinPage;
