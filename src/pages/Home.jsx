
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Manifesto from "../sections/Manifesto";
import About from "../sections/About";
import Experiences from "../sections/Experiences";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Manifesto />
        <About />
        <Experiences />
      </main>
    </>
  );
}
