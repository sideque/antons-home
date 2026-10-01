"use client";

import { motion, MotionConfig } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const headingLines = [
  { text: "Exceptional", className: "" },
  { text: "people.", className: "text-black/35" },
  { text: "Exceptional", className: "italic pr-[0.06em]" },
  { text: "businesses.", className: "" },
];

/* Meridian widths cycle through phases so the globe appears to turn */
const meridians = [
  [140, 70, 0, 70, 140],
  [70, 0, 70, 140, 70],
  [0, 70, 140, 70, 0],
];

const latitudes = [-90, -45, 0, 45, 90];

const hub = { x: 232, y: 202 }; // Dubai
const nodes = [
  { x: 112, y: 152, path: "M232 202 Q 160 120 112 152" },
  { x: 288, y: 130, path: "M232 202 Q 290 170 288 130" },
  { x: 150, y: 268, path: "M232 202 Q 200 270 150 268" },
  { x: 298, y: 264, path: "M232 202 Q 280 250 298 264" },
];

export default function Hero() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="page-texture relative min-h-[100svh] overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pt-36">
        {/* Background rings */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-48 top-20 h-[560px] w-[560px] rounded-full border border-black/[0.07]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 top-48 h-[360px] w-[360px] rounded-full border border-black/[0.07]"
        />

        <div className="relative mx-auto grid min-h-[calc(100svh-11rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.22em] text-black/55"
            >
              <span className="h-2 w-2 rounded-full bg-black" />
              <span>Executive Search</span>
              <span className="h-3 w-px bg-black/20" />
              <span>Talent Solutions</span>
              <span className="h-3 w-px bg-black/20" />
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
              className="mt-10 max-w-xl text-base leading-7 text-black/60 md:text-lg"
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
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:scale-[1.02]"
              >
                Find exceptional talent
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3.5 text-sm font-medium transition duration-300 hover:bg-white"
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
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-[#111311]">
              <svg
                viewBox="0 0 400 400"
                fill="none"
                role="img"
                aria-label="A network of connections radiating from Dubai across the region"
                className="absolute inset-0 h-full w-full"
              >
                {/* Slow orbit */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="172"
                  stroke="rgba(255,255,255,0.14)"
                  strokeDasharray="2 7"
                  style={{ transformOrigin: "200px 200px" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                />

                {/* Globe */}
                <circle cx="200" cy="200" r="140" stroke="rgba(255,255,255,0.2)" />

                {latitudes.map((offset) => {
                  const half = Math.sqrt(140 * 140 - offset * offset);
                  return (
                    <line
                      key={offset}
                      x1={200 - half}
                      x2={200 + half}
                      y1={200 + offset}
                      y2={200 + offset}
                      stroke="rgba(255,255,255,0.08)"
                    />
                  );
                })}

                {meridians.map((frames, index) => (
                  <motion.ellipse
                    key={index}
                    cx="200"
                    cy="200"
                    rx={frames[0]}
                    ry="140"
                    stroke="rgba(255,255,255,0.1)"
                    animate={{ rx: frames }}
                    transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                  />
                ))}

                {/* Connections */}
                {nodes.map((node, index) => (
                  <g key={index}>
                    <motion.path
                      d={node.path}
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="0.8"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 1.6,
                        delay: 1.2 + index * 0.3,
                        ease,
                      }}
                    />
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="2.5"
                      fill="rgba(255,255,255,0.7)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.2 + index * 0.3, duration: 0.6 }}
                    />
                  </g>
                ))}

                {/* Dubai hub */}
                <motion.circle
                  cx={hub.x}
                  cy={hub.y}
                  r="4"
                  stroke="white"
                  strokeWidth="0.8"
                  animate={{ r: [4, 20], opacity: [0.6, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeOut" }}
                />
                <circle cx={hub.x} cy={hub.y} r="4" fill="white" />
                <text
                  x={hub.x + 12}
                  y={hub.y - 10}
                  fill="rgba(255,255,255,0.6)"
                  fontSize="9"
                  letterSpacing="2"
                >
                  DUBAI
                </text>
              </svg>

              <p className="absolute left-7 top-7 text-[10px] uppercase tracking-[0.22em] text-white/40">
                Dubai, UAE
              </p>

              <p className="absolute bottom-7 left-7 max-w-[11rem] text-sm leading-5 text-white/65">
                Connecting talent
                <br />
                <span className="text-white/35">across the GCC</span>
              </p>
            </div>

            {/* Tag */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 right-4 rounded-2xl border border-black/10 bg-white px-5 py-4 md:-right-4"
            >
              <p className="text-2xl font-medium tracking-tight">GCC</p>
              <p className="text-xs text-black/45">Talent network</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <Link
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-7 left-8 hidden items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-black/40 transition-colors hover:text-black md:flex"
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