export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F7F3EC] py-32 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}

        <div>

          <p className="uppercase tracking-[6px] text-[#C8A24C] mb-4">
            About MJ Atelier
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-[#121212]">
            We don't just create events.
            <br />
            <span className="text-[#C8A24C]">
              We create stories people remember.
            </span>
          </h2>

          <p className="mt-10 text-lg leading-9 text-gray-700">
            MJ Atelier is a creative experiences brand
            based in Nairobi, creating immersive events
            that celebrate culture, creativity and
            connection.

            Every detail is intentionally curated to
            transform ordinary gatherings into
            unforgettable moments.
          </p>

          <button className="mt-12 px-8 py-4 bg-[#121212] text-white rounded-full hover:bg-[#C8A24C] transition duration-500">
            Learn More
          </button>

        </div>

        {/* Right */}

        <div>

          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000"
            alt="Luxury Event"
            className="rounded-3xl shadow-2xl object-cover h-[650px] w-full"
          />

        </div>

      </div>
    </section>
  );
}