"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Plane,
  Building2,
  Cpu,
  Factory,
  Truck,
  ShoppingBag,
} from "lucide-react";

const industries = [
  {
    number: "01",
    name: "IT & Technology",
    icon: Cpu,
  },
  {
    number: "02",
    name: "Wholesale & Retail",
    icon: ShoppingBag,
  },
  {
    number: "03",
    name: "Accounting & Finance",
    icon: Building2,
  },
  {
    number: "04",
    name: "Real Estate & Development",
    icon: Building2,
  },
  {
    number: "05",
    name: "Supply Chain & Logistics",
    icon: Truck,
  },
  {
    number: "06",
    name: "Manufacturing",
    icon: Factory,
  },
  {
    number: "07",
    name: "Aviation & Aerospace",
    icon: Plane,
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-[#e1e4dc] px-5 py-28 md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              Industries
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1] tracking-[-0.045em] md:text-6xl">
              Expertise that
              <br />
              understands your
              <span className="text-black/35"> world.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/50">
            Specialist recruitment across sectors that shape the GCC economy
            and its future.
          </p>
        </div>

        {/* Industry grid */}
        <div className="mt-20 grid grid-cols-2 border-l border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.a
                href="#contact"
                key={industry.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="group relative flex min-h-[190px] flex-col justify-between border-b border-r border-black/10 p-6 transition-all duration-300 hover:bg-[#111311] hover:text-white md:p-7"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={21}
                    strokeWidth={1.4}
                    className="text-black/45 transition-colors group-hover:text-white/60"
                  />

                  <ArrowUpRight
                    size={18}
                    className="opacity-30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-black/30 group-hover:text-white/35">
                    {industry.number}
                  </span>

                  <h3 className="mt-2 text-lg font-medium tracking-tight">
                    {industry.name}
                  </h3>
                </div>
              </motion.a>
            );
          })}
        </div>

      </div>
    </section>
  );
}