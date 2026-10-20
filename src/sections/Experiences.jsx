
const experiences = [
  {
    number: "01",
    category: "Social Experiences",
    description:
      "Intimate gatherings, milestone celebrations, and unforgettable moments shared together.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85",
    alt: "Elegant celebration with beautifully arranged event tables",
  },
  {
    number: "02",
    category: "Brand Experiences",
    description:
      "Creative activations and immersive brand moments that bring ideas to life.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
    alt: "Live event with atmospheric lighting and a vibrant audience",
  },
  {
    number: "03",
    category: "Cultural Experiences",
    description:
      "Discover cultures, music, flavours, and destinations through immersive journeys.",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85",
    alt: "Music event filled with energy and colourful stage lighting",
  },
  {
    number: "04",
    category: "Corporate Experiences",
    description:
      "Thoughtfully curated gatherings designed to connect people and inspire possibilities.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85",
    alt: "Professionally arranged corporate event and conference",
  },
];

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="bg-[#f7f1e7] px-5 py-24 text-[#10110e] sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Section introduction */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-[#9b7940] sm:text-xs">
              What We Create
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">
              Experiences,
              <br />
              <span className="italic">Beyond the Expected.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#55534d]">
            Different worlds. Different stories. One purpose, to create
            experiences that stay with you long after the moment has passed.
          </p>
        </div>

        {/* Experience cards */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          {experiences.map((experience) => (
            <article key={experience.number} className="group">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e6dfd2]">
                <img
                  src={experience.image}
                  alt={experience.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute left-5 top-5 text-xs tracking-[0.2em] text-white">
                  {experience.number}
                </span>

                <span
                  aria-hidden="true"
                  className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-white transition-all duration-300 group-hover:border-[#c6a66b] group-hover:bg-[#c6a66b] group-hover:text-[#10110e]"
                >
                  ↗
                </span>
              </div>

              <div className="flex flex-col gap-3 pt-6 sm:pt-7">
                <h3 className="font-serif text-2xl sm:text-3xl">
                  {experience.category}
                </h3>

                <p className="max-w-lg text-sm leading-7 text-[#625f57]">
                  {experience.description}
                </p>

                <div className="mt-2 h-px w-full bg-[#d9d0c1]" />
              </div>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-20 border-t border-[#d9d0c1] pt-8 md:mt-28 md:flex md:items-center md:justify-between">
          <p className="font-serif text-xl italic text-[#55534d] sm:text-2xl">
            Every experience begins with an idea.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] transition-colors hover:text-[#9b7940] md:mt-0"
          >
            Create With Us <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
