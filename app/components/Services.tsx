"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Executive Search",
    description:
      "Identifying senior leaders and high-impact professionals for critical roles.",
  },
  {
    number: "02",
    title: "Permanent Recruitment",
    description:
      "Connecting organisations with specialist talent for long-term growth.",
  },
  {
    number: "03",
    title: "Contract & Interim",
    description:
      "Flexible talent solutions for changing business requirements and projects.",
  },
  {
    number: "04",
    title: "RPO Solutions",
    description:
      "Scalable recruitment support designed around your organisation.",
  },
  {
    number: "05",
    title: "Fractional CHRO",
    description:
      "Strategic people leadership and HR expertise when you need it most.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#111311] px-5 py-28 text-white md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/35">
              What we do
            </p>
  <img
    src="/images/Logo.png"
    alt="Antons"
    className="h-48 w-48 object-contain md:h-56 md:w-56 lg:h-64 lg:w-64"
  />
          </div>

          

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] md:text-6xl">
              Recruitment solutions
              <br />
              built around
              <span className="text-white/35"> your ambitions.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-white/45 md:text-lg">
              From executive appointments to flexible talent solutions,
              we help businesses build teams that create meaningful impact.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-20 border-t border-white/10">
          {services.map((service, index) => (
            <motion.a
              href="#contact"
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group relative grid grid-cols-[45px_1fr_auto] items-center gap-5 border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.035] md:grid-cols-[80px_1fr_1fr_auto] md:gap-8 md:py-9"
            >
              {/* Number */}
              <span className="text-xs text-white/30">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="text-2xl font-medium tracking-tight md:text-4xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-2 max-w-sm text-xs leading-5 text-white/35 sm:text-sm md:block">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              {/* Hover line */}
              <motion.div
                className="absolute bottom-0 left-0 h-px w-0 bg-white"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-md text-sm leading-6 text-white/35">
            Need a tailored talent strategy? Let's create a solution around
            your business.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Discuss your needs

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}