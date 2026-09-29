"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Globe2,
    title: "GCC Market Expertise",
    text: "Deep understanding of regional markets, talent movements and business needs.",
  },
  {
    icon: Network,
    title: "Global Talent Network",
    text: "Access to a broad network of professionals across specialist functions and markets.",
  },
  {
    icon: Sparkles,
    title: "Specialist Expertise",
    text: "Industry-focused recruitment built around the realities of each sector.",
  },
  {
    icon: ShieldCheck,
    title: "Confidential Search",
    text: "A discreet and considered approach for sensitive and executive-level appointments.",
  },
];

export default function WhyAntons() {
  return (
    <section className="bg-[#f5f5f0] px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              Why Antons
            </p>

            <h2 className="mt-6 max-w-md text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">
              The right
              <br />
              talent changes
              <br />
              <span className="text-black/30">everything.</span>
            </h2>
          </motion.div>

          {/* Features */}
          <div className="grid border-t border-black/10 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group border-b border-black/10 p-7 md:p-9"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-8 text-xl font-medium tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-black/50">
                    {feature.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-black/10 pt-8"
        >
          <p className="max-w-4xl text-xl leading-8 tracking-tight text-black/65 md:text-3xl md:leading-[1.35]">
            We build relationships that go beyond a single placement —
            creating talent partnerships designed to support long-term
            business growth.
          </p>
        </motion.div>

      </div>
    </section>
  );
}