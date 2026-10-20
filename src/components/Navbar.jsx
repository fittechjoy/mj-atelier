
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Partner", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-black/20 px-6 py-6 text-[#f7f1e7] backdrop-blur-md md:px-12">
      {/* Logo */}
      <a href="#home" className="leading-none" aria-label="MJ Atelier home">
        <h1 className="font-serif text-3xl font-normal tracking-widest">
          MJ
        </h1>

        <p className="mt-1 text-xs uppercase tracking-[6px] text-[#C8A24C]">
          Atelier
        </p>
      </a>

      {/* Navigation links */}
      <ul className="hidden items-center gap-10 text-sm uppercase tracking-widest md:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="transition-colors duration-300 hover:text-[#C8A24C]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
