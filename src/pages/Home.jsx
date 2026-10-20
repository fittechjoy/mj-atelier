
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Manifesto from "../sections/Manifesto";
import About from "../sections/About";
import Experiences from "../sections/Experiences";
import Gallery from "../sections/Gallery";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Manifesto />
        <About />
        <Experiences />
        <Gallery />
        <Contact />

      </main>
      <Footer/>
    </>
  );
}
