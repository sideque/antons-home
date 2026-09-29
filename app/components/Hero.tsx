"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="page-texture relative min-h-screen overflow-hidden px-5 pb-10 pt-28 md:px-8 md:pt-36">
      
      {/* Background decoration */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-140px] top-20 h-[460px] w-[460px] rounded-full bg-[#d9dfd4]/70 blur-3xl"
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-150px)] max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-black" />

            <span className="text-xs font-medium uppercase tracking-[0.22em] text-black/55">
              Executive Search · Talent Solutions · GCC
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="max-w-5xl text-[clamp(2.8rem,7vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.07em]"
          >
            Exceptional
            <br />

            <span className="text-black/35">people.</span>

            <br />

            <span className="italic">Exceptional</span>
            <br />

            <span>businesses.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-xl text-base leading-7 text-black/60 md:text-lg"
          >
            We connect ambitious businesses across the GCC with exceptional
            talent through thoughtful search, deep market expertise and
            long-term partnerships.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.02]"
            >
              Find exceptional talent

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#services"
              className="rounded-full border border-black/15 bg-white/50 px-6 py-3.5 text-sm font-medium transition hover:bg-white"
            >
              Explore our expertise
            </a>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="relative mx-auto h-[380px] sm:h-[430px] lg:h-[480px] w-full max-w-[500px]"
        >
          {/* Main visual */}
          <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] bg-[#171917]">
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(190,205,180,0.16),transparent_35%)]" />

            {/* Globe */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15"
            >
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10" />
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />
              <div className="absolute left-[15%] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-white/10" />
            </motion.div>

            <Globe2
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/70"
              size={82}
              strokeWidth={0.7}
            />

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-7 left-7 rounded-2xl border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                Connecting talent
              </p>

              <p className="mt-1 text-sm font-medium text-white">
                Across the GCC
              </p>
            </motion.div>

            {/* Top badge */}
            <div className="absolute right-7 top-7 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">
              <span className="text-xs text-white/70">
                Dubai · UAE
              </span>
            </div>
          </div>

          {/* Number */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -right-4 rounded-2xl border border-black/10 bg-white px-5 py-4 shadow-xl"
          >
            <p className="text-2xl font-semibold tracking-tight">GCC</p>
            <p className="text-xs text-black/45">Talent network</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom indicator */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-black/40 md:flex"
      >
        <ArrowDown size={14} />
        Scroll to explore
      </motion.div>
    </section>
  );
}