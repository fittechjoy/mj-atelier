
import heroVideo from "../assets/videos/hero-video.mp4";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[700px] h-screen items-center justify-center overflow-hidden bg-[#10110e] text-[#f7f1e7]"
    >
      {/* Background video — preserved */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support background video.
      </video>

      {/* Cinematic dark overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-black/55"
      />

      {/* Subtle gradient for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/45"
      />

      {/* Hero content */}
      <div className="mx-auto w-full max-w-[1500px] px-5 pb-4 pt-28 text-center sm:px-8 md:pt-32">
        <p className="mb-7 text-[10px] uppercase tracking-[0.55em] text-[#c6a66b] sm:mb-9 sm:text-xs sm:tracking-[0.7em]">
          MJ Atelier
        </p>

        <h1 className="mx-auto max-w-[1150px] font-serif text-[clamp(2.8rem,7.5vw,7.5rem)] font-normal uppercase leading-[0.98] tracking-[-0.035em]">
          <span className="block">Curating</span>
          <span className="block">Unforgettable</span>
          <span className="block">Experiences</span>
        </h1>

        <p className="mx-auto mt-8 text-sm leading-6 text-white/80 sm:mt-10 sm:text-base sm:leading-7">
          Every event is a journey.
          <br />
          Every detail tells a story.
        </p>

        <a
          href="#experiences"
          className="group mt-9 inline-flex min-h-12 items-center justify-center rounded-full border border-[#c6a66b] px-7 py-3 text-xs text-white transition-all duration-300 hover:bg-[#c6a66b] hover:text-[#10110e] sm:mt-11 sm:px-9 sm:text-sm"
        >
          Begin the Journey
          <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to discover MJ Atelier"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/65 transition-colors hover:text-[#c6a66b] sm:flex"
      >
        Discover
        <span className="h-8 w-px bg-[#c6a66b]/70" />
      </a>
    </section>
  );
}
