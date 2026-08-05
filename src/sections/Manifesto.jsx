import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="bg-black text-white py-40 px-8">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <p className="uppercase tracking-[8px] text-[#C8A24C] mb-8">
          Our Manifesto
        </p>

        <h2 className="text-5xl md:text-7xl leading-tight font-bold">

          We believe the best experiences
          aren't attended.

          <br />
          <br />

          <span className="text-[#C8A24C]">

            They're remembered.

          </span>

        </h2>

      </motion.div>

    </section>
  );
}