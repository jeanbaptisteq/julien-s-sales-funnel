import julienLogo from "@/assets/julien-logo.png";

const TopBanner = () => (
  <header className="bg-white border-b border-border">
    <div className="container mx-auto px-4 py-0 flex justify-center">
      <img
        src={julienLogo}
        alt="Logo Julien"
        className="h-6 md:h-7 w-auto object-contain"
      />
    </div>
  </header>
);

export default TopBanner;
