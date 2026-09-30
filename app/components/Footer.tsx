"use client";

import { ArrowUpRight } from "lucide-react";

const links = ["About", "Services", "Industries", "Insights", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#111311] px-5 pb-8 pt-16 text-white md:px-8 md:pt-20">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">

          <div>
            <div className="flex items-center gap-2">
               <img
                src="/images/Logo.png"
                alt="Antons"
                className="h-10 w-10 object-contain"
            />

              <span className="text-lg font-semibold tracking-tight">
                Ant<span className="text-white/40">ons</span>
              </span>
            </div>

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/35">
              Connecting exceptional talent with ambitious businesses
              across the GCC.
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="w-fit text-sm text-white/60 transition hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
              Get in touch
            </p>

            <a
              href="mailto:info@antons.ae"
              className="group mt-5 flex w-fit items-center gap-2 text-sm text-white/70"
            >
              info@antons.ae

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <p className="mt-4 text-sm leading-6 text-white/35">
              Dubai, United Arab Emirates
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[11px] text-white/25 md:flex-row">
          <p>© 2026 Antons. All rights reserved.</p>

          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}