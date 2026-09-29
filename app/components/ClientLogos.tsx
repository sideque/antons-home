"use client";

import { motion } from "framer-motion";

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

export default function ClientLogos() {
  return (
    <section className="overflow-hidden border-y border-black/10 bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        <p className="text-center text-[10px] uppercase tracking-[0.25em] text-black/30">
          Trusted by ambitious organisations
        </p>

        <div className="relative mt-12 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max items-center"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex h-20 w-40 items-center justify-center border-r border-black/10 px-6 md:w-52"
              >
                <span className="text-lg font-semibold tracking-[0.18em] text-black/25">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}