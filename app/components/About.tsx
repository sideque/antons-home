"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cards = [
  {
    number: "01",
    title: "Market intelligence",
    text: "Live insight into salaries, supply and demand across GCC sectors.",
    tone: "bg-[#F08043] text-[#191919]",
    ring: "border-black/10",
    logo: "opacity-25",
    offset: "",
  },
  {
    number: "02",
    title: "Specialist expertise",
    text: "Consultants who know their sector and the people who shape it.",
    tone: "bg-[#191919] text-white",
    ring: "border-white/10",
    logo: "opacity-20",
    offset: "md:mt-14",
  },
  {
    number: "03",
    title: "Long-term partnerships",
    text: "Relationships built on trust, well beyond a single appointment.",
    tone: "bg-[#D45539] text-[#191919]",
    ring: "border-black/10",
    logo: "opacity-25",
    offset: "md:mt-28",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease }}
            className="flex flex-col justify-between"
          >
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#191919]/45">
              <span className="h-px w-8 bg-[#D45539]" />
              About Antons
            </p>

            <motion.img
              src="/images/Logo.webp"
              alt="Antons logo"
              animate={{ y: [0, -8, 0], rotate: [0, 1.5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="mt-14 h-40 w-40 object-contain opacity-90 md:mt-20 md:h-52 md:w-52 lg:h-64 lg:w-64"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease }}
          >
            <h2 className="max-w-5xl text-[clamp(2.6rem,5.5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.065em] text-[#191919]">
              Talent is more than a
              <span className="text-[#D45539]"> vacancy.</span>
              <br />
              It is the foundation of
              <span className="italic text-[#F08043]"> growth.</span>
            </h2>

            <p className="mt-9 max-w-2xl text-base leading-7 text-[#191919]/55 md:text-lg">
              Antons partners with businesses across the GCC to identify,
              attract and connect them with exceptional professionals. Our
              approach combines market understanding, specialist recruitment
              expertise and a focus on long-term relationships.
            </p>

            <a
              href="#services"
              className="group mt-9 inline-flex items-center gap-3 border-b border-[#191919] pb-2 text-sm font-medium text-[#191919]"
            >
              Discover our approach
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Value cards */}
        <ul className="mt-20 grid gap-4 md:mt-28 md:grid-cols-3 md:items-start">
          {cards.map((card, index) => (
            <motion.li
              key={card.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.9, delay: index * 0.12, ease }}
              whileHover={{ y: -6 }}
              className={`group relative min-h-[280px] overflow-hidden rounded-[2rem] p-7 md:min-h-[320px] ${card.tone} ${card.offset}`}
            >
              <div
                aria-hidden
                className={`absolute -right-16 -top-16 h-52 w-52 rounded-full border transition-transform duration-700 group-hover:scale-125 ${card.ring}`}
              />

              <div
                aria-hidden
                className={`absolute -right-6 -top-6 h-28 w-28 rounded-full border transition-transform duration-700 group-hover:scale-125 ${card.ring}`}
              />

              <img
                src="/images/Logo.webp"
                alt=""
                aria-hidden
                className={`absolute right-6 top-6 h-20 w-20 object-contain transition duration-500 group-hover:scale-110 ${card.logo}`}
              />

              <div className="relative flex min-h-[230px] flex-col justify-end md:min-h-[270px]">
                <span className="text-4xl font-light tracking-[-0.04em]">
                  {card.number}
                </span>

                <h3 className="mt-4 text-lg font-medium tracking-tight">
                  {card.title}
                </h3>

                <p className="mt-2 max-w-[17rem] text-sm leading-6 opacity-50">
                  {card.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}