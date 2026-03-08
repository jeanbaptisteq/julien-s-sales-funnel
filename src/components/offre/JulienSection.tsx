import { motion } from "framer-motion";
import { Star } from "lucide-react";
import profileImage from "@/assets/profile-julien.jpg";

const socials = [
  { platform: "TikTok", icon: "🎵", followers: "455.2K", color: "text-foreground" },
  { platform: "Instagram", icon: "📸", followers: "168K", color: "text-foreground" },
  { platform: "YouTube", icon: "▶️", followers: "3.88K", color: "text-foreground" },
];

const JulienSection = () => (
  <section className="py-16 md:py-20 bg-card">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-12">
        Qui suis-je ?
      </h2>

      {/* Profile + Story */}
      <div className="flex flex-col md:flex-row items-start gap-8 max-w-4xl mx-auto mb-14">
        <img
          src={profileImage}
          alt="Professeur Julien"
          className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-primary/20 flex-shrink-0 mx-auto md:mx-0"
        />
        <div>
          <h3 className="text-2xl font-bold font-heading text-foreground mb-1">Julien Bouyer</h3>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}</div>
            <span className="text-xs text-muted-foreground">4.9/5 — Avis étudiants</span>
          </div>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              Moi, c'est Julien. J'ai commencé à enseigner le français un peu par hasard — au Brésil, en 2020, quand un avocat rencontré dans un Blablacar m'a demandé de lui donner des cours.
            </p>
            <p>
              Je n'avais aucune expérience. Mais j'avais quelque chose que beaucoup de profs n'ont pas : <strong className="text-foreground">je sais ce que c'est d'apprendre une langue en partant de zéro.</strong> J'ai appris l'anglais, l'italien et le portugais — chacun avec une méthode différente.
            </p>
            <p>
              Diplômé d'un <strong className="text-foreground">DU en enseignement du FLE</strong> (Université de Grenoble), j'accompagne aujourd'hui des centaines d'étudiants du monde entier. Ma méthode ? Recréer l'immersion chez toi — pour que tu vives le français au quotidien, sans avoir besoin de venir en France.
            </p>
            <p className="text-foreground font-medium italic">
              « Apprendre une langue, ça m'a permis de rencontrer la femme de ma vie. Et ça peut aussi t'ouvrir des portes que tu n'imagines même pas. »
            </p>
          </div>
        </div>
      </div>

      {/* Social Proof Cards */}
      <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
        {socials.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6 rounded-2xl bg-background border border-border"
          >
            <span className="text-4xl mb-2 block">{s.icon}</span>
            <span className="text-sm font-medium text-muted-foreground block mb-2">{s.platform}</span>
            <span className="text-2xl md:text-3xl font-bold font-heading text-accent block">{s.followers}</span>
            <span className="text-xs text-muted-foreground">followers</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default JulienSection;
