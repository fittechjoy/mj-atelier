
const galleryItems = [
  {
    number: "01",
    title: "An Evening to Remember",
    category: "Social Experiences",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
    alt: "Elegant event tables arranged for a celebration",
    size: "large",
  },
  {
    number: "02",
    title: "Moments in Motion",
    category: "Brand Experiences",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=85",
    alt: "Live event with dramatic lighting and a lively audience",
    size: "small",
  },
  {
    number: "03",
    title: "A World of Culture",
    category: "Cultural Experiences",
    image:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=85",
    alt: "Crowd enjoying a live music performance",
    size: "small",
  },
  {
    number: "04",
    title: "Gathered with Purpose",
    category: "Corporate Experiences",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
    alt: "People gathered at a professional event",
    size: "large",
  },
  {
    number: "05",
    title: "The Art of Gathering",
    category: "Social Experiences",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=85",
    alt: "Beautifully styled table setting for an event",
    size: "small",
  },
  {
    number: "06",
    title: "Under the Lights",
    category: "Cultural Experiences",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=85",
    alt: "Atmospheric live music event with colourful lighting",
    size: "small",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-[#10110e] px-5 py-24 text-[#f7f1e7] sm:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Introduction */}
        <div className="mb-14 md:mb-20">
          <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-[#c6a66b] sm:text-xs">
            The Art of Experience
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-7xl">
              Moments worth
              <br />
              <span className="italic text-[#c6a66b]">
                remembering.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-white/65">
              Every gathering has a story. Explore the details, atmosphere,
              and little moments that make an experience unforgettable.
            </p>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-14">
          {galleryItems.map((item) => (
            <article key={item.number} className="group">
              <div
                className={`relative overflow-hidden bg-white/5 ${
                  item.size === "large"
                    ? "aspect-[5/4]"
                    : "aspect-[4/5]"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute left-5 top-5 text-[10px] tracking-[0.25em] text-white/90">
                  {item.number}
                </span>

                <div className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
                  <p className="mb-2 text-[9px] uppercase tracking-[0.3em] text-[#d9b875] sm:text-[10px]">
                    {item.category}
                  </p>

                  <h3 className="font-serif text-2xl sm:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-white/15 pt-7 md:mt-24">
          <p className="font-serif text-xl italic text-white/70 sm:text-2xl">
            Different stories. Beautifully brought to life.
          </p>
        </div>
      </div>
    </section>
  );
}
