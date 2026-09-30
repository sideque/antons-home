"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  MessageCircle,
  UserCheck,
  Users,
  CheckCircle2,
} from "lucide-react";

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

export default function Process() {
  return (
    <section className="bg-[#f5f5f0] px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              Our process
            </p>

            <h2 className="mt-6 max-w-md text-[clamp(2.8rem,5.5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.065em]">
              A thoughtful
              <br />
              approach to
              <span className="text-black/30"> talent.</span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-6 text-black/50">
              From the first conversation to the final appointment, every
              stage is built around clarity, quality and partnership.
            </p>
          </div>

          <div className="border-t border-black/10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group grid grid-cols-[45px_1fr_auto] gap-4 border-b border-black/10 py-8 transition-all duration-300 hover:px-2 md:grid-cols-[65px_1fr_45px] md:gap-7 md:py-9"
                >
                  <span className="pt-1 text-xs text-black/30">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-black/50">
                      {step.description}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:scale-105">
                    <Icon size={17} strokeWidth={1.5} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-black/30">
          <span className="h-px w-12 bg-black/20" />
          Built around your business
        </div>
      </div>
    </section>
  );
}