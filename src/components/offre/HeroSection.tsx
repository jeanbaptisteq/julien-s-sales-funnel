import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const HeroSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    const frame = iframeRef.current?.contentWindow;
    if (!frame) return;
    const nextMuted = !isMuted;
    frame.postMessage(JSON.stringify({ method: "setMuted", value: nextMuted }), "*");
    frame.postMessage(JSON.stringify({ method: "setVolume", value: nextMuted ? 0 : 1 }), "*");
    setIsMuted(nextMuted);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#cfeeff] to-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10 max-w-5xl text-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4 font-heading">
            Parle le français <br /> <span className="text-accent">de la vraie vie</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 font-semibold mb-4">
            En{" "}
            <span className="bg-cyan-200 text-black px-2 py-1 rounded-md">
              4 mois
            </span>
            , communique efficacement en français dans ta vie de tous les jours
          </p>
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl aspect-video">
              <iframe
                ref={iframeRef}
                src="https://player.vimeo.com/video/1174749372?autoplay=1&muted=1&autopause=0&controls=0&title=0&byline=0&portrait=0&badge=0&dnt=1&player_id=0&app_id=58479"
                className="absolute inset-0 h-full w-full"
                title="Video VSL (01)-original"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <button
                type="button"
                onClick={toggleSound}
                aria-label={isMuted ? "Activer le son" : "Couper le son"}
                className="absolute top-3 right-3 z-10 inline-flex items-center justify-center rounded-full bg-black/60 p-2 text-white hover:bg-black/75 transition-colors"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
