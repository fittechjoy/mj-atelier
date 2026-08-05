import heroVideo from "../assets/videos/hero-video.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">

        <div>

          <p className="uppercase tracking-[8px] text-[#C8A24C] mb-8">
            MJ Atelier
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none">
            Curating
            <br />
            Unforgettable
            <br />
            Experiences
          </h1>

          <p className="mt-10 text-xl text-gray-300">
            Every event is a journey.
            <br />
            Every detail tells a story.
          </p>

          <button className="mt-12 border border-[#C8A24C] px-8 py-4 rounded-full hover:bg-[#C8A24C] hover:text-black transition duration-500">
            Begin the Journey
          </button>

        </div>

      </div>

    </section>
  );
}