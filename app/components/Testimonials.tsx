"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";

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

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) => (current + 1) % testimonials.length);
  };

  const previous = () => {
    setActive(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[active];

  return (
    <section className="bg-[#191b19] px-5 py-28 text-white md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/35">
              Client perspective
            </p>

            <h2 className="mt-5 max-w-2xl text-[clamp(2.8rem,5.5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.065em]">
              Partnerships that
              <br />
              create
              <span className="text-white/35"> impact.</span>
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              onClick={previous}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition hover:bg-white hover:text-black"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-20 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-[80px_1fr]"
        >
          <Quote
            size={42}
            strokeWidth={1}
            className="text-white/30"
          />

          <div>
            <blockquote className="max-w-5xl text-2xl font-light leading-[1.35] tracking-tight md:text-4xl">
              “{testimonial.quote}”
            </blockquote>

            <div className="mt-10">
              <p className="text-sm font-medium">{testimonial.name}</p>

              <p className="mt-1 text-sm text-white/40">
                {testimonial.role} · {testimonial.company}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`h-1 transition-all ${
                index === active
                  ? "w-10 bg-white"
                  : "w-5 bg-white/20"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}