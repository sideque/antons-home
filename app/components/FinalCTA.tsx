"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#dfe4db] px-5 py-28 md:px-8 md:py-40"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-black/10" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute -bottom-48 -left-20 h-[500px] w-[500px] rounded-full border border-black/10"
      />

      <div className="relative mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/40">
          Start a conversation
        </p>

        <h2 className="mt-7 max-w-5xl text-[clamp(3rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.055em] md:text-8xl">
          The right people
          <br />
          <span className="text-black/35">are out there.</span>
        </h2>

        <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <p className="max-w-lg text-base leading-7 text-black/55 md:text-lg">
            Tell us what you're building, and we'll help you find the
            people who can take it further.
          </p>

          <a
            href="mailto:info@antons.ae"
            className="group flex w-fit items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:scale-[1.02]"
          >
            Talk to an expert

            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}