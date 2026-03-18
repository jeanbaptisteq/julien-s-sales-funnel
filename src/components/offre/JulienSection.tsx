import { motion } from "framer-motion";
import profileImage from "@/assets/julien-presentation.jpg";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.84a4.83 4.83 0 0 1-1-.15z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 mx-auto" fill="currentColor">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.099 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.017 1.792-4.687 4.533-4.687 1.312 0 2.686.236 2.686.236v2.963h-1.514c-1.491 0-1.956.929-1.956 1.883v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.099 24 12.073z" />
  </svg>
);

const socials = [
  { platform: "TikTok", icon: <TikTokIcon />, followers: "455.2K" },
  { platform: "Instagram", icon: <InstagramIcon />, followers: "168K" },
  { platform: "YouTube", icon: <YouTubeIcon />, followers: "3.88K" },
  { platform: "Facebook", icon: <FacebookIcon />, followers: "302K" },
];

const JulienSection = () => (
  <section className="py-16 md:py-20 bg-card">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-12">
        Qui suis-je ?
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-8 max-w-4xl mx-auto mb-14">
        <img
          src={profileImage}
          alt="Professeur Julien"
          className="w-36 h-36 rounded-full object-cover shadow-lg border-4 border-primary/20 flex-shrink-0 mx-auto md:mx-0"
        />
        <div>
          <h3 className="text-2xl font-bold font-heading text-foreground mb-1">Julien Bouyer</h3>
          <div className="space-y-3 text-muted-foreground leading-relaxed">
            <p>
              Moi, c'est Julien. J'ai commencé à enseigner le français par hasard au Brésil en 2020. <strong className="text-foreground">Je sais ce que c'est d'apprendre une langue en partant de zéro</strong>, j'ai appris l'anglais, l'italien et le portugais.
            </p>
            <p>
              Diplômé d'un <strong className="text-foreground">DU en enseignement du FLE</strong> (Université de Grenoble), j'accompagne des centaines d'étudiants du monde entier. Ma méthode : recréer l'immersion chez toi, sans devoir vivre en France.
            </p>
            <p className="text-foreground font-medium italic">
              « Apprendre une langue, ça m'a permis de rencontrer la femme de ma vie. Et ça peut aussi t'ouvrir des portes que tu n'imagines même pas. »
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {socials.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6 rounded-2xl bg-background border border-border"
          >
            <div className="mb-2 text-foreground">{s.icon}</div>
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
