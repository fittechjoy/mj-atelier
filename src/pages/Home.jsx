import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Manifesto from "../sections/Manifesto";
import About from "../sections/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Manifesto />
      <About />
    </>
  );
}