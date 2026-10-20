
const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#10110e] px-5 text-[#f7f1e7] sm:px-8">
      <div className="mx-auto max-w-[1440px] py-16 md:py-20">
        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-2 md:items-start lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#home"
              aria-label="MJ Atelier home"
              className="inline-block"
            >
              <span className="block font-serif text-4xl tracking-wide">
                MJ
              </span>

              <span className="mt-2 block text-[9px] uppercase tracking-[0.55em] text-[#c6a66b]">
                Atelier
              </span>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
              The art of bringing people, ideas, and unforgettable
              experiences together.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#c6a66b]">
              Explore
            </p>

            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition-colors duration-300 hover:text-[#c6a66b]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact call to action */}
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#c6a66b]">
              Have Something in Mind?
            </p>

            <h2 className="max-w-xs font-serif text-3xl leading-snug">
              Let's make it unforgettable.
            </h2>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-3 border-b border-[#c6a66b] pb-2 text-xs uppercase tracking-[0.2em] transition-colors hover:text-[#c6a66b]"
            >
              Start a Conversation
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} MJ Atelier. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#c6a66b]"
          >
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
