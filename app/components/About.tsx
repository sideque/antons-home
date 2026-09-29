"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const cards = [
  {
    number: "01",
    title: "Market intelligence",
    image: "/images/market.png",
  },
  {
    number: "02",
    title: "Specialist expertise",
    image: "/images/expertise.png",
  },
  {
    number: "03",
    title: "Long-term partnerships",
    image: "/images/partnerships.png",
  },
];

  return (
    <section
      id="about"
      className="bg-[#f5f5f0] px-5 py-28 md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
           <div className="flex flex-col justify-between">
            <p className="text-xs uppercase tracking-[0.25em] text-black/45">
              About Antons
            </p>

              <img
                src="/images/Logo.png"
                alt="Antons"
                className="h-48 w-48 object-contain opacity-90 lg:h-64 lg:w-64"
              />
          </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-5xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Talent is more than a
              <span className="text-black/35"> vacancy.</span>
              <br />
              It is the foundation of
              <span className="italic"> growth.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-black/55 md:text-lg">
              Antons partners with businesses across the GCC to identify,
              attract and connect them with exceptional professionals.
              Our approach combines market understanding, specialist
              recruitment expertise and a focus on long-term relationships.
            </p>

            <a
              href="#services"
              className="group mt-8 inline-flex items-center gap-3 border-b border-black pb-2 text-sm font-medium"
            >
              Discover our approach

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Visual blocks */}
        <div className="mt-24 grid gap-4 md:grid-cols-3">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-[#dfe4db] p-7"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-black/10" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#dfe4db] p-7">
              <img
                src="/images/Logo.png"
                alt=""
                className="absolute right-6 top-6 h-16 w-16 object-contain opacity-30"
              />

              <div className="relative flex min-h-[220px] flex-col justify-end">
                <span className="text-4xl font-light">01</span>

                <h3 className="mt-3 text-sm font-medium">
                  Market intelligence
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-[#191b19] p-7 text-white"
          >
            <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-white/10" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#171a18] p-7 text-white">
              <img
                src="/images/Logo2.png"
                alt=""
                className="absolute right-6 top-6 h-16 w-16 object-contain opacity-20"
              />

              <div className="relative flex min-h-[220px] flex-col justify-end">
                <span className="text-4xl font-light">02</span>

                <h3 className="mt-3 text-sm font-medium">
                  Specialist expertise
                </h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative min-h-[280px] overflow-hidden rounded-[2rem] bg-[#e8e5dc] p-7"
          >
            <div className="absolute bottom-[-50px] right-[-30px] h-52 w-52 rounded-full border border-black/10" />

            <div className="relative overflow-hidden rounded-[2rem] bg-[#e8e5dc] p-7">
                <img
                  src="/images/Logo.png"
                  alt=""
                  className="absolute right-6 top-6 h-16 w-16 object-contain opacity-25"
                />

                <div className="relative flex min-h-[220px] flex-col justify-end">
                  <span className="text-4xl font-light">03</span>

                  <h3 className="mt-3 text-sm font-medium">
                    Long-term partnerships
                  </h3>
                </div>
              </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}