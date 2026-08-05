export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-6 text-white">
      <h1 className="text-2xl font-bold tracking-widest">
        MJ Atelier
      </h1>

      <ul className="hidden md:flex gap-10 text-sm uppercase tracking-widest">
        <li className="cursor-pointer hover:text-yellow-400 transition">
          About
        </li>

        <li className="cursor-pointer hover:text-yellow-400 transition">
          Experiences
        </li>

        <li className="cursor-pointer hover:text-yellow-400 transition">
          Gallery
        </li>

        <li className="cursor-pointer hover:text-yellow-400 transition">
          Partner
        </li>

        <li className="cursor-pointer hover:text-yellow-400 transition">
          Contact
        </li>
      </ul>
    </nav>
  );
}