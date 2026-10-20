
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#f7f1e7] px-5 py-24 text-[#10110e] sm:px-8 md:py-32"
    >
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2 lg:gap-24">
        {/* Contact introduction */}
        <div>
          <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-[#9b7940] sm:text-xs">
            Your Story Starts Here
          </p>

          <h2 className="max-w-xl font-serif text-5xl leading-tight sm:text-6xl md:text-7xl">
            Let's create
            <br />
            <span className="italic text-[#b38c45]">
              something
              <br />
              memorable.
            </span>
          </h2>

          <p className="mt-8 max-w-md text-sm leading-7 text-[#625f57]">
            Have an idea, a celebration, or a vision you want to bring to
            life? Tell us about it. We'd love to explore what's possible
            together.
          </p>

          <div className="mt-12 border-t border-[#d9d0c1] pt-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b7940]">
              Based in
            </p>
            <p className="mt-2 font-serif text-2xl">Nairobi, Kenya</p>
          </div>

          <p className="mt-8 text-xs leading-6 text-[#625f57]">
            Every remarkable experience begins with a conversation.
          </p>
        </div>

        {/* Enquiry form */}
        <div className="lg:pt-8">
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
            className="space-y-7"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-3 block text-[10px] uppercase tracking-[0.2em]"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="How should we address you?"
                required
                className="w-full border-0 border-b border-[#cfc5b5] bg-transparent py-4 text-sm outline-none transition-colors placeholder:text-[#9b978e] focus:border-[#b38c45]"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-3 block text-[10px] uppercase tracking-[0.2em]"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Where can we reach you?"
                required
                className="w-full border-0 border-b border-[#cfc5b5] bg-transparent py-4 text-sm outline-none transition-colors placeholder:text-[#9b978e] focus:border-[#b38c45]"
              />
            </div>

            <div>
              <label
                htmlFor="contact-experience"
                className="mb-3 block text-[10px] uppercase tracking-[0.2em]"
              >
                Type of Experience
              </label>
              <select
                id="contact-experience"
                name="experience"
                defaultValue=""
                required
                className="w-full border-0 border-b border-[#cfc5b5] bg-transparent py-4 text-sm outline-none transition-colors focus:border-[#b38c45]"
              >
                <option value="" disabled>
                  Select an experience
                </option>
                <option value="social">Social Experiences</option>
                <option value="brand">Brand Experiences</option>
                <option value="cultural">Cultural Experiences</option>
                <option value="corporate">Corporate Experiences</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-3 block text-[10px] uppercase tracking-[0.2em]"
              >
                Tell Us About Your Vision
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Tell us a little about what you have in mind..."
                required
                className="w-full resize-y border-0 border-b border-[#cfc5b5] bg-transparent py-4 text-sm outline-none transition-colors placeholder:text-[#9b978e] focus:border-[#b38c45]"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex min-h-14 w-full items-center justify-between bg-[#10110e] px-6 text-xs uppercase tracking-[0.2em] text-[#f7f1e7] transition-colors hover:bg-[#263b30] sm:w-auto sm:min-w-64"
            >
              Send an Enquiry
              <span className="ml-6 text-lg text-[#c6a66b] transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            
          </form>
        </div>
      </div>
    </section>
  );
}
