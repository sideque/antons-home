"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stats = [
  { value: 15, suffix: "+", label: "Years of expertise" },
  { value: 25, suffix: "+", label: "Markets connected" },
  { value: 10, suffix: "+", label: "Industries served" },
  { value: "GCC", suffix: "", label: "Regional expertise", italic: true },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Antons at a glance"
      className="border-y border-white/10 bg-[#111311] px-5 text-white md:px-8"
    >
      <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              ease,
            }}
            className="flex flex-col-reverse justify-end gap-3 border-white/10 py-9 pl-5 odd:pl-0 even:border-l md:border-l md:py-12 md:pl-8 md:odd:pl-8 md:first:border-l-0 md:first:pl-0 [&:nth-child(n+3)]:border-t md:[&:nth-child(n+3)]:border-t-0"
          >
            <dt className="text-[11px] uppercase tracking-[0.2em] text-white/40">
              {stat.label}
            </dt>

            <dd className="flex items-baseline text-[clamp(2.4rem,4.4vw,4rem)] font-light leading-none tracking-[-0.05em]">
              {typeof stat.value === "number" ? (
                <CountUp
                  from={0}
                  to={stat.value}
                  direction="up"
                  duration={1.8}
                  delay={index * 0.12}
                  className={stat.italic ? "italic" : ""}
                />
              ) : (
                <span className={stat.italic ? "italic" : ""}>
                  {stat.value}
                </span>
              )}

              <span className="text-white/35">{stat.suffix}</span>
            </dd>
          </motion.div>
        ))}
      </dl>
    </section>
  );
}