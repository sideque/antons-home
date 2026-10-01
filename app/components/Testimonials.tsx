"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const testimonials = [
  {
    quote:
      "Antons took the time to understand not just the role, but the culture and direction of our business. The quality of the shortlist was exceptional.",
    name: "James Mitchell",
    role: "Chief Operating Officer",
    company: "Global Technology Group",
  },
  {
    quote:
      "The process was thoughtful, transparent and highly professional from beginning to end. They understood exactly what we were looking for.",
    name: "Sarah Williams",
    role: "People Director",
    company: "Regional Investment Firm",
  },
  {
    quote:
      "What stood out was their understanding of the GCC market and their ability to connect us with highly relevant senior talent.",
    name: "Daniel Carter",
    role: "Managing Director",
    company: "International Services Group",
  },
];

const variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction * 28 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction * -28 }),
};

const pad = (value: number) => String(value).padStart(2, "0");

export default function Testimonials() {
  const [[active, direction], setState] = useState<[number, number]>([0, 0]);

  const step = (delta: number) =>
    setState(([current]) => [
      (current + delta + testimonials.length) % testimonials.length,
      delta,
    ]);

  const goTo = (index: number) =>
    setState(([current]) => [index, index > current ? 1 : -1]);

  const testimonial = testimonials[active];

  return (
    <section className="bg-[#191b19] px-5 py-28 text-white md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease }}
        >
          <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/35">
            <span className="h-px w-8 bg-white/25" />
            Client perspective
          </p>

          <h2 className="mt-7 max-w-2xl text-[clamp(2.6rem,5.5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.065em]">
            Partnerships that
            <br />
            create
            <span className="italic text-white/35"> impact.</span>
          </h2>
        </motion.div>

        {/* Body */}
        <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 md:mt-24 md:pt-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex items-start justify-between lg:flex-col lg:justify-between">
            <Quote
              size={40}
              strokeWidth={1}
              aria-hidden
              className="text-white/25"
            />

            <p className="text-xs tracking-[0.2em] text-white/35">
              <span className="text-white/80">{pad(active + 1)}</span>
              {" / "}
              {pad(testimonials.length)}
            </p>
          </div>

          <div>
            <div
              aria-live="polite"
              className="min-h-[22rem] md:min-h-[21rem]"
            >
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.figure
                  key={active}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease }}
                >
                  <blockquote className="max-w-4xl text-2xl font-light leading-[1.35] tracking-tight md:text-4xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <figcaption className="mt-10">
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-white/40">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-6 flex items-center justify-between gap-6">
              <div className="flex items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === active}
                    className="group flex h-11 items-center pr-2"
                  >
                    <span
                      className={`block h-px transition-all duration-500 ${
                        index === active
                          ? "w-12 bg-white"
                          : "w-6 bg-white/25 group-hover:bg-white/60"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <ArrowLeft size={17} />
                </button>

                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}