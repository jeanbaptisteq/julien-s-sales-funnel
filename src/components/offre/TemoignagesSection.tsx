import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const temoignages = [
  { nom: "Rafaela", pays: "🇧🇷", lecons: "16 leçons", texte: "Amazing class, comme d'habitude ! 🎉 I'm learning everything I need to feel more and more comfortable expressing myself in French. Julien supports me in all my endeavors!", note: 5 },
  { nom: "Sammi", pays: "🇺🇸", lecons: "161 leçons", texte: "Julien is so patient, kind, and helpful. I had so much fun practicing my French with him and felt I was able to learn new things in just an hour. I highly recommend Julien!", note: 5 },
  { nom: "Mohamed Taqi", pays: "🇲🇦", lecons: "2 leçons", texte: "J'ai eu un excellent cours avec Julien! On a parlé plein de sujets notamment nos passions le foot que je kiffe!! Franchement c'était amusant !! Julien il est super prof !", note: 5 },
  { nom: "Jeffrey Nagler", pays: "🇺🇸", lecons: "1 leçon", texte: "Julien was a fantastic teacher and he corrected every single error that I made which is very rare to find in a teacher. He is a laid back, super interesting guy and I would recommend him to anyone!!", note: 5 },
  { nom: "Grace O'Donnell", pays: "🇮🇪", lecons: "2 leçons", texte: "Chatting with Julien is so very easy. He is very easy going and has a lovely laid-back manner and a nice and firm way in correcting my French. I enjoy my lessons with Julien", note: 5 },
  { nom: "Moa", pays: "🇸🇪", lecons: "2 leçons", texte: "Julien est un prof très sympa. Premier cours hiper agréable et excellente suggestion de matériel pour mes devoirs. Je vous conseille vivement :)", note: 5 },
];

const CARDS_PER_VIEW = { mobile: 1, desktop: 3 };

const TemoignagesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % temoignages.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + temoignages.length) % temoignages.length);
  };

  const getVisibleCards = (count: number) => {
    const cards = [];
    for (let i = 0; i < count; i++) {
      cards.push(temoignages[(currentIndex + i) % temoignages.length]);
    }
    return cards;
  };

  return (
    <section className="py-16 md:py-20 bg-foreground">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground text-center mb-4">
          Ils m'ont fait <span className="text-accent">CONFIANCE !</span>
        </h2>
        <p className="text-primary-foreground/60 text-center mb-12">Avis vérifiés de mes étudiants</p>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:opacity-80 transition-opacity shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:opacity-80 transition-opacity shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Mobile: 1 card */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard t={temoignages[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop: 3 cards */}
          <div className="hidden md:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-3 gap-6"
              >
                {getVisibleCards(3).map((t, i) => (
                  <TestimonialCard key={`${currentIndex}-${i}`} t={t} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {temoignages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === currentIndex ? "bg-accent w-6" : "bg-primary-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ t }: { t: typeof temoignages[0] }) => (
  <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 h-full flex flex-col">
    <div className="flex items-center gap-3 mb-3">
      <span className="text-2xl">{t.pays}</span>
      <div className="flex-1">
        <p className="font-bold text-primary-foreground text-sm">{t.nom}</p>
        <p className="text-primary-foreground/50 text-xs">{t.lecons} en Français</p>
      </div>
    </div>
    <div className="flex gap-0.5 mb-3">
      {[...Array(t.note)].map((_, j) => (
        <Star key={j} className="w-4 h-4 fill-accent text-accent" />
      ))}
    </div>
    <p className="text-primary-foreground/80 text-sm leading-relaxed flex-1">« {t.texte} »</p>
  </div>
);

export default TemoignagesSection;
