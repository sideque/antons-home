"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years of expertise" },
  { value: "25+", label: "Markets connected" },
  { value: "10+", label: "Industries served" },
  { value: "GCC", label: "Regional expertise" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-black/10 bg-[#111] px-5 py-8 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="px-5 py-4 first:pl-0 md:px-8"
          >
            <p className="text-3xl font-medium tracking-tight md:text-4xl">
              {stat.value}
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/40">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}