"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Cpu,
  Factory,
  Landmark,
  Plane,
  ShoppingBag,
  Truck,
} from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const industries = [
  { number: "01", name: "IT & Technology", icon: Cpu },
  { number: "02", name: "Wholesale & Retail", icon: ShoppingBag },
  { number: "03", name: "Accounting & Finance", icon: Landmark },
  { number: "04", name: "Real Estate & Development", icon: Building2 },
  { number: "05", name: "Supply Chain & Logistics", icon: Truck },
  { number: "06", name: "Manufacturing", icon: Factory },
  { number: "07", name: "Aviation & Aerospace", icon: Plane },
];

const tileClass =
  "group relative flex min-h-[170px] flex-col justify-between overflow-hidden border-b border-r border-[#191919]/10 p-5 outline-none sm:min-h-[210px] md:p-7";

const fillClass =
  "absolute inset-0 translate-y-full bg-[#191919] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-focus-visible:translate-y-0";

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-white px-5 py-28 md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="flex items-center gap-3 self-start text-[11px] uppercase tracking-[0.22em] text-[#191919]/50">
            <span className="h-px w-8 bg-[#191919]/40" />
            Industries
          </p>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-[clamp(2.6rem,5.5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.065em] text-[#191919]">
              Expertise that
              <br />
              understands your
              <span className="text-[#D45539]"> world.</span>
            </h2>

            <p className="max-w-xs text-sm leading-6 text-[#191919]/55">
              Specialist recruitment across sectors that shape the GCC economy
              and its future.
            </p>
          </div>
        </div>

        {/* Industry grid */}
        <div className="mt-16 grid grid-cols-2 border-l border-t border-[#191919]/10 md:mt-24 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.a
                href="#contact"
                key={industry.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.7, delay: (index % 4) * 0.06, ease }}
                className={tileClass}
              >
                <span aria-hidden className={fillClass} />

                <div className="relative flex items-start justify-between text-[#191919]/50 transition-colors duration-500 group-hover:text-white/60 group-focus-visible:text-white/60">
                  <Icon size={22} strokeWidth={1.3} />

                  <ArrowUpRight
                    size={18}
                    className="opacity-30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </div>

                <div className="relative transition-colors duration-500 group-hover:text-white group-focus-visible:text-white">
                  <span className="text-[10px] uppercase tracking-[0.18em] opacity-35">
                    {industry.number}
                  </span>

                  <h3 className="mt-2 text-lg font-medium leading-snug tracking-tight">
                    {industry.name}
                  </h3>
                </div>
              </motion.a>
            );
          })}

          {/* Closing tile keeps the grid balanced */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className={`${tileClass} bg-white/40`}
          >
            <span aria-hidden className={fillClass} />

            <div className="relative flex items-start justify-end text-[#191919]/50 transition-colors duration-500 group-hover:text-white/60 group-focus-visible:text-white/60">
              <ArrowUpRight
                size={18}
                className="opacity-30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
              />
            </div>

            <div className="relative transition-colors duration-500 group-hover:text-white group-focus-visible:text-white">
              <h3 className="text-lg font-medium leading-snug tracking-tight">
                Another sector?
                <span className="block italic text-[#D45539] transition-colors duration-500 group-hover:text-white/50">
                  Talk to us.
                </span>
              </h3>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}