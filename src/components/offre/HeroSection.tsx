const HeroSection = () => (
  <div className="gradient-hero-bg relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
    </div>
    <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 max-w-4xl text-center">
      <div>
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
          🇫🇷 MÉTHODE D'INTÉGRATION
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 font-heading">
          Parle français pour <br /> <span className="text-accent">t'intégrer en France</span>
        </h1>
        <p className="text-xl text-primary-foreground/85 mb-2 max-w-2xl mx-auto">
          De A1/A2 à B1/B2, à ton rythme, avec un accompagnement oral concret
        </p>
        <p className="text-primary-foreground/70 mb-4">
          Avant ton arrivée ou déjà sur place: démarches, travail et vie sociale
        </p>
      </div>
    </div>
  </div>
);

export default HeroSection;
