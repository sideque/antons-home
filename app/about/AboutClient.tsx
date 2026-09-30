"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const AboutClient = () => {
  return (
    <main className="bg-[#f5f5f0] text-[#111311]">

      {/* HERO */}
      <section className="px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                About Antons
              </p>

              <img
                src="/images/Logo.png"
                alt="Antons"
                className="mt-16 h-40 w-40 object-contain md:h-52 md:w-52"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="max-w-5xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] md:text-7xl lg:text-[6.5rem]">
                People are at the
                <span className="text-black/30"> heart </span>
                of
                <br />
                every
                <span className="italic"> great business.</span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-black/55 md:text-lg">
                Antons is a specialist recruitment partner connecting
                ambitious businesses across the GCC with exceptional
                professionals.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-t border-black/10 px-5 py-28 md:px-8 md:py-40">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              Our story
            </p>

            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">
                Recruitment is about more than filling a position.
              </h2>

              <div className="mt-10 max-w-3xl space-y-6 text-base leading-7 text-black/55 md:text-lg">
                <p>
                  It is about understanding businesses, people and the
                  ambitions that connect them.
                </p>

                <p>
                  We work closely with organisations to understand their
                  culture, challenges and goals before identifying the
                  professionals who can make a meaningful difference.
                </p>

                <p>
                  Our approach combines market knowledge, specialist
                  recruitment expertise and relationships built for the
                  long term.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#111311] px-5 py-28 text-white md:px-8 md:py-40">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                What we believe
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">
                The right
                <span className="text-white/30"> connection </span>
                creates
                <br />
                lasting
                <span className="italic"> impact.</span>
              </h2>

              <div className="mt-16 border-t border-white/10">

                {[
                  {
                    number: "01",
                    title: "Market intelligence",
                    text: "Understanding the market allows us to identify opportunities and talent with greater precision.",
                  },
                  {
                    number: "02",
                    title: "Specialist expertise",
                    text: "Our focused approach allows us to understand the industries, functions and people we work with.",
                  },
                  {
                    number: "03",
                    title: "Long-term partnerships",
                    text: "We focus on relationships that continue beyond a single placement.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="grid gap-5 border-b border-white/10 py-8 md:grid-cols-[60px_1fr_1fr] md:gap-8"
                  >
                    <span className="text-xs text-white/30">
                      {item.number}
                    </span>

                    <h3 className="text-xl font-medium">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-white/40">
                      {item.text}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="px-5 py-28 md:px-8 md:py-40">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <p className="text-xs uppercase tracking-[0.25em] text-black/40">
              Our approach
            </p>

            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">
                Thoughtful search.
                <br />
                Meaningful
                <span className="text-black/30"> connections.</span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-7 text-black/55 md:text-lg">
                Every search starts with understanding. We take the time to
                learn what makes your organisation unique, then combine
                market insight with a carefully considered search process.
              </p>

              <a
                href="/contact"
                className="group mt-9 inline-flex items-center gap-3 border-b border-black pb-2 text-sm font-medium"
              >
                Start a conversation

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#dfe4db] px-5 py-28 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.25em] text-black/40">
            Let's connect
          </p>

          <h2 className="mt-7 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">
            The right people
            <br />
            can change
            <span className="text-black/30"> everything.</span>
          </h2>

          <a
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white"
          >
            Talk to Antons

            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </div>
      </section>

    </main>
  );
}
