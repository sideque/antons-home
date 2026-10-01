"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#dfe4db] px-5 py-28 md:px-8 md:py-44"
    >
      {/* Decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-black/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-[240px] w-[240px] rounded-full border border-black/[0.07]"
      />

      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -bottom-52 -left-24 h-[520px] w-[520px] rounded-full border border-black/10"
      >
        {/* A single marker makes the slow rotation readable */}
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/40" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-black/40"
        >
          <span className="h-px w-8 bg-black/30" />
          Start a conversation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.1, ease }}
          className="mt-8 max-w-5xl text-[clamp(3rem,9vw,8rem)] font-medium leading-[0.92] tracking-[-0.065em]"
        >
          The right people
          <br />
          <span className="italic text-black/35">are out there.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="mt-12 flex flex-col justify-between gap-10 md:flex-row md:items-end"
        >
          <p className="max-w-lg text-base leading-7 text-black/55 md:text-lg">
            Tell us what you&apos;re building, and we&apos;ll help you find the
            people who can take it further.
          </p>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
            <Link
              href="/contact"
              className="text-sm text-black/55 underline-offset-4 transition-colors hover:text-black hover:underline"
            >
              Send an enquiry
            </Link>

            <a
              href="mailto:info@antons.ae"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition duration-300 hover:scale-[1.02]"
            >
              Talk to an expert
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}