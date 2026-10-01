"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  MessageCircle,
  Search,
  UserCheck,
  Users,
} from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding your business, culture, goals and exact talent requirement.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Search",
    description:
      "Our specialists identify relevant talent through focused market research and our network.",
    icon: Search,
  },
  {
    number: "03",
    title: "Assess",
    description:
      "Candidates are carefully evaluated against the role, experience and organisational fit.",
    icon: UserCheck,
  },
  {
    number: "04",
    title: "Shortlist",
    description:
      "We present a focused shortlist of candidates aligned with your requirements.",
    icon: Users,
  },
  {
    number: "05",
    title: "Hire",
    description:
      "We support the final stages and help create a smooth transition into the organisation.",
    icon: CheckCircle2,
  },
];

/* Each step steps in a little further, and its title gets a little darker */
const indents = [
  "md:ml-0",
  "md:ml-[4%]",
  "md:ml-[8%]",
  "md:ml-[12%]",
  "md:ml-[16%]",
];

const tones = [
  "text-black/40",
  "text-black/50",
  "text-black/65",
  "text-black/80",
  "text-black",
];

export default function Process() {
  return (
    <section className="bg-[#f5f5f0] px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease }}
            className="self-start lg:sticky lg:top-32"
          >
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-black/40">
              <span className="h-px w-8 bg-black/30" />
              Our process
            </p>

            <h2 className="mt-7 max-w-md text-[clamp(2.6rem,5.5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.065em]">
              A thoughtful
              <br />
              approach to
              <span className="italic text-black/30"> talent.</span>
            </h2>

            <p className="mt-8 max-w-sm text-sm leading-6 text-black/50">
              From the first conversation to the final appointment, every stage
              is built around clarity, quality and partnership.
            </p>
          </motion.div>

          {/* Steps */}
          <ol>
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-6% 0px" }}
                  transition={{ duration: 0.8, delay: index * 0.07, ease }}
                  className={`group grid grid-cols-[2.25rem_1fr_auto] gap-4 border-t border-black/10 py-8 last:border-b md:grid-cols-[4rem_1fr_auto] md:gap-8 md:py-11 ${indents[index]}`}
                >
                  <span className="pt-2 text-xs text-black/30">
                    {step.number}
                  </span>

                  <div>
                    <h3
                      className={`text-3xl font-medium tracking-[-0.045em] transition-transform duration-500 group-hover:translate-x-1 md:text-5xl ${tones[index]}`}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-md text-sm leading-6 text-black/50">
                      {step.description}
                    </p>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black/60 transition-all duration-500 group-hover:scale-105 group-hover:bg-black group-hover:text-white">
                    <Icon size={17} strokeWidth={1.5} />
                  </span>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* Closing line */}
        <div className="mt-16 flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-black/35">
          <span className="h-px w-12 bg-black/20" />
          Built around your business
        </div>
      </div>
    </section>
  );
}