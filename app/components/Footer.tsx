"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/#industries" },
  { label: "Insights", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#191919] px-5 pb-8 pt-20 text-[#F08043] md:px-8 md:pt-28">
      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="grid gap-16 lg:grid-cols-[1.5fr_0.7fr_0.8fr]">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/Logo2.webp"
              alt="Antons"
              className="h-20 w-20 object-contain"
            />

            <p className="mt-7 max-w-md text-lg leading-8 tracking-tight text-[#F08043]/60 md:text-xl">
              Connecting exceptional talent with ambitious businesses
              across the GCC.
            </p>

            <a
              href="mailto:info@antons.ae"
              className="group mt-8 inline-flex items-center gap-2 border-b border-[#F08043]/30 pb-2 text-sm text-[#F08043]/80 transition hover:border-[#F08043] hover:text-[#F08043]"
            >
              info@antons.ae

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* EXPLORE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#D45539]">
              Explore
            </p>

            <nav className="mt-7 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-sm text-[#F08043]/70 transition hover:text-[#F08043]"
                >
                  <span>{link.label}</span>

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#D45539]">
              Visit us
            </p>

            <p className="mt-7 max-w-xs text-sm leading-6 text-[#F08043]/60">
              Dubai, United Arab Emirates
            </p>

            <p className="mt-6 text-[10px] uppercase tracking-[0.25em] text-[#D45539]">
              Connect
            </p>

            <div className="mt-4 flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group flex w-fit items-center gap-2 text-sm text-[#F08043]/70 transition hover:text-[#F08043]"
                >
                  {social.label}

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="mt-24 border-t border-[#F08043]/15" />

        {/* BOTTOM */}
        <div className="flex flex-col justify-between gap-5 pt-6 text-[10px] uppercase tracking-[0.15em] text-[#F08043]/50 md:flex-row md:items-center">
          <p>© 2026 Antons. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition hover:text-[#F08043]/80"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-[#F08043]/80"
            >
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}