"use client";

import { motion, useReducedMotion } from "framer-motion";

/* Placeholder organisation names — swap for real logos when available */
const clients = [
  "NOVA",
  "ORBIT",
  "VERTEX",
  "NEXA",
  "MERIDIAN",
  "ALTURA",
  "CRESCENT",
  "SUMMIT",
];

function LogoSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {clients.map((client) => (
        <div
          key={client}
          className="flex h-20 w-44 shrink-0 items-center justify-center border-r border-black/10 px-6 md:w-56"
        >
          <span className="text-lg font-medium tracking-[0.22em] text-black/25">
            {client}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ClientLogos() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Trusted by ambitious organisations"
      className="overflow-hidden border-y border-black/10 bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-black/35">
          <span className="h-px w-8 bg-black/25" />
          Trusted by ambitious organisations
        </p>
      </div>

      <div className="mt-10 overflow-hidden border-y border-black/10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:mt-12">
        {/* Two identical sets, shifting by exactly one set = seamless loop */}
        <motion.div
          animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex w-max items-center"
        >
          <LogoSet />
          <LogoSet hidden />
        </motion.div>
      </div>
    </section>
  );
}