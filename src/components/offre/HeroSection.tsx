import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Player from "@vimeo/player";
import { trackEvent } from "@/lib/analytics";

const HeroSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);
  const progressMarks = useRef(new Set<number>());
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const player = new Player(iframe);
    playerRef.current = player;
    progressMarks.current = new Set();

    const onPlay = () => {
      trackEvent("vsl_play", {
        event_category: "video",
        event_label: "vimeo_vsl",
        video_id: "1174749372",
        video_title: "Video VSL (01)-original",
      });
    };

    const onPause = () => {
      trackEvent("vsl_pause", {
        event_category: "video",
        event_label: "vimeo_vsl",
        video_id: "1174749372",
        video_title: "Video VSL (01)-original",
      });
    };

    const onEnded = () => {
      trackEvent("vsl_complete", {
        event_category: "video",
        event_label: "vimeo_vsl",
        video_id: "1174749372",
        video_title: "Video VSL (01)-original",
        progress: 100,
      });
    };

    const onTimeUpdate = async (data: { percent?: number; seconds?: number; duration?: number }) => {
      const percent = data.percent ? Math.round(data.percent * 100) : 0;
      for (const mark of [25, 50, 75, 100]) {
        if (percent >= mark && !progressMarks.current.has(mark)) {
          progressMarks.current.add(mark);
          trackEvent("vsl_progress", {
            event_category: "video",
            event_label: `vimeo_vsl_${mark}`,
            video_id: "1174749372",
            video_title: "Video VSL (01)-original",
            progress: mark,
            seconds_watched: Math.round(data.seconds ?? 0),
            duration: Math.round(data.duration ?? 0),
          });
        }
      }
    };

    const onLoaded = () => {
      trackEvent("vsl_loaded", {
        event_category: "video",
        event_label: "vimeo_vsl",
        video_id: "1174749372",
        video_title: "Video VSL (01)-original",
      });
    };

    player.on("play", onPlay);
    player.on("pause", onPause);
    player.on("ended", onEnded);
    player.on("timeupdate", onTimeUpdate);
    player.on("loaded", onLoaded);

    return () => {
      player.off("play", onPlay);
      player.off("pause", onPause);
      player.off("ended", onEnded);
      player.off("timeupdate", onTimeUpdate);
      player.off("loaded", onLoaded);
      player.destroy().catch(() => {});
      playerRef.current = null;
      progressMarks.current = new Set();
    };
  }, []);

  const toggleSound = () => {
    const nextMuted = !isMuted;
    const player = playerRef.current;
    if (player) {
      player.setMuted(nextMuted).catch(() => {});
      player.setVolume(nextMuted ? 0 : 1).catch(() => {});
    }
    trackEvent("vsl_sound_toggle", {
      event_category: "video",
      event_label: nextMuted ? "mute" : "unmute",
      video_id: "1174749372",
      video_title: "Video VSL (01)-original",
      muted: nextMuted,
    });
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
