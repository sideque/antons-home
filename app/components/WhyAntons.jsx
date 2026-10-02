"use client";

import { motion } from "framer-motion";
import { Globe2, Network, ShieldCheck, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const features = [
  {
    icon: Globe2,
    title: "GCC Market Expertise",
    text: "Sector specialists with a deep understanding of the GCC market and the talent landscape across the region.",
  },
  {
    icon: Network,
    title: "Global Talent Network",
    text: "Connecting talent with opportunity across borders through a broad international recruitment network.",
  },
  {
    icon: Sparkles,
    title: "Sector Specialists",
    text: "Industry-focused recruitment expertise built around the realities and requirements of each sector.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential Search",
    text: "Discreet executive search combining market intelligence, executive assessment and targeted outreach.",
  },
];

export default function WhyAntons() {
  return (
    <section className="bg-white px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease }}
            className="self-start lg:sticky lg:top-32"
          >
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#191919]/40">
              <span className="h-px w-8 bg-[#F08043]" />
              Why Antons
            </p>

            <h2 className="mt-7 max-w-md text-[clamp(2.6rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.06em] text-[#191919]">
              The right
              <br />
              talent changes
              <br />
              <span className="italic text-[#D45539]">everything.</span>
            </h2>
          </motion.div>

          {/* Features: two staggered columns */}
          <div className="grid gap-x-12 md:grid-cols-2 lg:gap-x-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease }}
                  className={`group border-t border-[#191919]/10 pb-14 pt-8 ${
                    index % 2 === 1 ? "md:mt-20" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#191919]/10 text-[#191919] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#F08043] group-hover:text-[#191919]">
                      <Icon size={19} strokeWidth={1.5} />
                    </span>
                  </div>

                  <h3 className="mt-9 text-2xl font-medium tracking-[-0.03em] text-[#191919]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#191919]/50">
                    {feature.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease }}
          className="mt-12 grid gap-6 border-t border-[#191919]/10 pt-10 md:mt-20 lg:grid-cols-[0.75fr_1.25fr]"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#D45539]/70">
            Our approach
          </p>

          <p className="max-w-4xl text-xl leading-8 tracking-tight text-[#191919]/65 md:text-3xl md:leading-[1.35]">
            We go beyond filling positions — providing strategic guidance to
            help organisations align the right talent with their business
            goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}