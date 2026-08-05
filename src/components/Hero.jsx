export default function Hero() {
  return (
    <section className="relative h-screen bg-black flex items-center justify-center text-white">

      <div className="text-center">

        <p className="uppercase tracking-[8px] text-sm text-yellow-400">
          MJ Atelier
        </p>

        <h1 className="text-7xl md:text-9xl font-black uppercase leading-none mt-6">
          Curating
          <br />
          Unforgettable
          <br />
          Experiences
        </h1>

        <p className="mt-8 text-lg text-gray-300">
          Every event is a journey.
          <br />
          Every detail tells a story.
        </p>

        <button className="mt-12 border border-yellow-400 px-8 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition duration-500">
          Explore Experiences
        </button>

      </div>

    </section>
  );
}