export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-12 py-6 bg-black/20 backdrop-blur-md" >
     <div className="leading-none">
  <h1 className="text-3xl font-bold tracking-widest">
    MJ
  </h1>

  <p className="text-xs tracking-[6px] text-[#C8A24C] uppercase mt-1">
    Atelier
  </p>
</div>

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