"use client";

import { motion, MotionConfig } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const headingLines = [
  { text: "Exceptional", className: "" },
  { text: "people.", className: "text-[#D45539]" },
  { text: "Exceptional", className: "italic pr-[0.06em]" },
  { text: "businesses.", className: "" },
];

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="page-texture relative min-h-[100svh] overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pt-36">
        {/* Background rings */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-48 top-20 h-[560px] w-[560px] rounded-full border border-[#191919]/15"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-48 h-[360px] w-[360px] rounded-full border border-[#191919]/15"
        />

        <div className="relative mx-auto grid min-h-[calc(100svh-11rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#191919]/65"
            >
              <span className="h-2 w-2 rounded-full bg-[#191919]" />
              <span>Executive Search</span>
              <span className="h-3 w-px bg-[#191919]/30" />
              <span>Talent Solutions</span>
              <span className="h-3 w-px bg-[#191919]/30" />
              <span>GCC</span>
            </motion.div>

            <h1 className="max-w-5xl text-[clamp(2.9rem,6.4vw,6.75rem)] font-medium leading-[0.9] tracking-[-0.07em]">
              {headingLines.map((line, index) => (
                <span
                  key={index}
                  className="-mb-[0.08em] block overflow-hidden pb-[0.1em]"
                >
                  <motion.span
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.15 + index * 0.12,
                      ease,
                    }}
                    className={`block ${line.className}`}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease }}
              className="mt-10 max-w-xl text-base leading-7 text-[#191919]/70 md:text-lg"
            >
              We connect ambitious businesses across the GCC with exceptional
              talent through thoughtful search, deep market expertise and
              long-term partnerships.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#F08043] px-6 py-3.5 text-sm font-medium text-[#191919] transition duration-300 hover:scale-[1.02]"
              >
                Find exceptional talent
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-[#191919]/30 px-6 py-3.5 text-sm font-medium transition duration-300 hover:bg-[#191919]/10"
              >
                Explore our expertise
              </a>
            </motion.div>
          </div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
            className="relative mx-auto aspect-[4/4.3] w-full max-w-[500px] lg:mr-0 lg:justify-self-end"
          >
            <div className="group absolute inset-0 overflow-hidden rounded-[2rem] border border-[#191919]/10 bg-white">
              <Image
                src="/images/aboutImg/homeI.webp"
                alt="Antons consultants meeting with a client in a modern GCC office"
                fill
                priority
                sizes="(min-width: 1024px) 500px, (min-width: 640px) 500px, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Location chip */}
              <p className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-[#191919]/10 bg-white px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#191919]">
                <MapPin size={12} className="text-[#F08043]" />
                Dubai, UAE
              </p>
            </div>

            {/* Tag */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 right-4 rounded-2xl border border-[#D45539] bg-white px-5 py-4 md:-right-4"
            >
              <p className="text-2xl font-medium tracking-tight text-[#D45539]">
                GCC
              </p>
              <p className="text-xs text-[#191919]/70">Talent network</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <Link
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-7 left-8 hidden items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#191919]/60 transition-colors hover:text-[#191919] md:flex"
        >
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.span>
          Scroll
        </Link>
      </section>
    </MotionConfig>
  );
}