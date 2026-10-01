"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
  {
    number: "06",
    title: "Emiratization & Saudization",
    description:
      "Tailored talent strategies aligned with Emiratization and Saudization requirements.",
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
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex flex-col justify-between">
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/35">
              <span className="h-px w-8 bg-white/25" />
              What we do
            </p>

            <motion.img
              src="/images/Logo.png"
              alt="Antons logo"
              animate={{ y: [0, -10, 0], rotate: [0, -1.5, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="mt-14 h-36 w-36 object-contain md:mt-20 md:h-48 md:w-48 lg:h-56 lg:w-56"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease }}
          >
            <h2 className="max-w-4xl text-[clamp(2.6rem,5.5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.065em]">
              Recruitment solutions
              <br />
              built around
              <span className="text-white/35"> your ambitions.</span>
            </h2>

            <p className="mt-9 max-w-2xl text-base leading-7 text-white/45 md:text-lg">
              From executive appointments to flexible talent solutions, we help
              businesses build teams that create meaningful impact.
            </p>
          </motion.div>
        </div>

        {/* Service menu */}
        <ul className="mt-20 border-t border-white/10 md:mt-28">
          {services.map((service, index) => (
            <motion.li
              key={service.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.8, delay: index * 0.07, ease }}
            >
              <Link
                href="/services"
                className="group relative grid grid-cols-[2.25rem_1fr_auto] items-start gap-4 border-b border-white/10 py-8 transition-[padding,background-color] duration-500 hover:bg-white/[0.03] md:grid-cols-[80px_1fr_1fr_auto] md:items-center md:gap-8 md:py-11 md:hover:px-5"
              >
                <span className="pt-2 text-xs text-white/30 md:pt-0">
                  {service.number}
                </span>

                <div className="md:contents">
                  <h3 className="text-2xl font-medium tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-1 md:text-4xl lg:text-[2.6rem]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/40 md:mt-0">
                    {service.description}
                  </p>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:rotate-12 group-hover:border-white group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight size={18} />
                </span>

                {/* Hover line */}
                <span
                  aria-hidden
                  className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-md text-sm leading-6 text-white/40">
            Need a tailored talent strategy? Let&apos;s create a solution around
            your business.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Discuss your needs
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}