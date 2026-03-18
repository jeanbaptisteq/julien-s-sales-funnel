import { useRef, useState, type SyntheticEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import lisianaVideo from "@/assets/testimonial-lisiana-bresil.mp4";
import jonVideo from "@/assets/testimonial-jon-angleterre.mp4";
import charlieVideo from "@/assets/testimonial-charlie-perou.mp4";
import { trackEvent } from "@/lib/analytics";

const videos = [
  { name: "Jonathan", src: jonVideo },
  { name: "Charlie", src: charlieVideo },
  { name: "Lisiana", src: lisianaVideo },
];

const TrackedTestimonialVideo = ({
  name,
  src,
  index,
}: {
  name: string;
  src: string;
  index: number;
}) => {
  const progressMarks = useRef(new Set<number>());

  const handlePlay = () => {
    trackEvent("testimonial_play", {
      event_category: "video",
      event_label: name,
      testimonial_name: name,
      testimonial_index: index + 1,
    });
  };

  const handlePause = () => {
    trackEvent("testimonial_pause", {
      event_category: "video",
      event_label: name,
      testimonial_name: name,
      testimonial_index: index + 1,
    });
  };

  const handleEnded = () => {
    trackEvent("testimonial_complete", {
      event_category: "video",
      event_label: name,
      testimonial_name: name,
      testimonial_index: index + 1,
      progress: 100,
    });
  };

  const handleTimeUpdate = (event: SyntheticEvent<HTMLVideoElement>) => {
    const videoEl = event.currentTarget;
    if (!videoEl.duration || Number.isNaN(videoEl.duration)) return;

    const percent = Math.round((videoEl.currentTime / videoEl.duration) * 100);
    for (const mark of [25, 50, 75, 100]) {
      if (percent >= mark && !progressMarks.current.has(mark)) {
        progressMarks.current.add(mark);
        trackEvent("testimonial_progress", {
          event_category: "video",
          event_label: name,
          testimonial_name: name,
          testimonial_index: index + 1,
          progress: mark,
        });
      }
    }
  };

  return (
    <video
      key={src}
      className="w-full rounded-2xl aspect-[9/16] bg-black object-cover"
      controls
      playsInline
      preload="metadata"
      onPlay={handlePlay}
      onPause={handlePause}
      onEnded={handleEnded}
      onTimeUpdate={handleTimeUpdate}
    >
      <source src={src} type="video/mp4" />
      Ton navigateur ne supporte pas la lecture vidéo.
    </video>
  );
};

const TemoignagesSection = () => {
  const [mobileIndex, setMobileIndex] = useState(0);

  const prev = () => {
    setMobileIndex((current) => (current - 1 + videos.length) % videos.length);
  };

  const next = () => {
    setMobileIndex((current) => (current + 1) % videos.length);
  };

  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-14">
          Ils m'ont fait <span className="text-accent">CONFIANCE !</span>
        </h2>

        <div className="md:hidden">
          <div className="relative">
            <article className="rounded-3xl p-3 border-2 border-[#9cd8ff] bg-white shadow-[0_10px_30px_rgba(56,189,248,0.18)]">
              <TrackedTestimonialVideo
                src={videos[mobileIndex].src}
                name={videos[mobileIndex].name}
                index={mobileIndex}
              />
              <p className="mt-4 text-center text-xl font-extrabold tracking-wide text-[#1e88e5]">
                {videos[mobileIndex].name}
              </p>
            </article>

            <button
              type="button"
              onClick={prev}
              aria-label="Témoignage précédent"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-800 shadow-md hover:bg-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Témoignage suivant"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-800 shadow-md hover:bg-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6">
          {videos.map((video) => (
            <article
              key={video.src}
              className="rounded-3xl p-3 md:p-4 border-2 border-[#9cd8ff] bg-white shadow-[0_10px_30px_rgba(56,189,248,0.18)]"
            >
          <TrackedTestimonialVideo name={video.name} src={video.src} index={i} />
              <p className="mt-4 text-center text-xl font-extrabold tracking-wide text-[#1e88e5]">
                {video.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemoignagesSection;
