"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.05 },
  show: { opacity: 1, scale: 1 },
};

const values = [
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
];

export const AboutClient = () => {
  return (
    <main className="overflow-x-hidden bg-[#FFFFFF] text-[#191919]">

      {/* HERO */}
      <section className="px-5 pb-16 pt-36 md:px-8 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#D45539]">
                About Antons
              </p>

              <img
                src="/images/Logo.webp"
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
                <span className="text-[#F08043]"> heart </span>
                of
                <br />
                every
                <span className="italic"> great business.</span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-[#191919]/55 md:text-lg">
                Antons is a specialist recruitment partner connecting
                ambitious businesses across the GCC with exceptional
                professionals.
              </p>
            </motion.div>

          </div>

          {/* Large premium hero image */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={imageReveal}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="group relative mt-16 aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-white md:mt-20 md:rounded-[2.5rem]"
          >
            <img
              src="/images/aboutImg/conMeeting.webp"
              alt="Antons consultants meeting with a client in a modern GCC office"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </motion.div>

        </div>
      </section>

      {/* STORY */}
      <section className="border-t border-[#191919]/10 px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">

            {/* Image first on mobile, left on desktop */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageReveal}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative order-1 aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-white md:rounded-[2.5rem] lg:order-none"
            >
              <img
                src="/images/aboutImg/teamAss.webp"
                alt="Antons team discussing a search assignment"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>

            <div className="order-2 lg:order-none">
              <p className="text-xs uppercase tracking-[0.25em] text-[#D45539]">
                Our story
              </p>

              <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">
                Recruitment is about more than filling a position.
              </h2>

              <div className="mt-10 max-w-lg space-y-6 text-base leading-7 text-[#191919]/55 md:text-lg">
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
      <section className="bg-white px-5 py-24 text-[#191919] md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.25em] text-[#F08043]">
            What we believe
          </p>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16">

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageReveal}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-white md:rounded-[2.5rem]"
            >
              <img
                src="/images/aboutImg/marInt.webp"
                alt="Antons consultant reviewing market intelligence"
                className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>

            <div>
              <h2 className="max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">
                The right
                <span className="text-[#F08043]"> connection </span>
                creates
                <br />
                lasting
                <span className="italic"> impact.</span>
              </h2>

              <div className="mt-14 border-t border-[#191919]/10">

                {values.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.4 }}
                    variants={fadeUp}
                    transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
                    className="group grid gap-5 border-b border-[#191919]/10 py-8 transition-colors hover:bg-white md:grid-cols-[60px_1fr_1fr] md:gap-8"
                  >
                    <span className="text-xs text-[#D45539]">
                      {item.number}
                    </span>

                    <h3 className="text-xl font-medium">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-[#191919]/55">
                      {item.text}
                    </p>
                  </motion.div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VISUAL BREAK */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageReveal}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative h-[300px] w-full overflow-hidden md:h-[500px]"
      >
        <img
          src="/images/aboutImg/amb.webp"
          alt="Antons team connecting talent with ambitious businesses"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#191919]/35" />

        <div className="absolute inset-0 flex items-end px-5 pb-10 md:items-center md:px-8 md:pb-0">
          <p className="inline-flex items-center rounded-full bg-[#F08043] px-7 py-4 text-2xl font-medium tracking-[-0.03em] text-[#191919] md:text-4xl">
            Connecting talent with ambition.
          </p>
        </div>
      </motion.section>

      {/* APPROACH */}
      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#D45539]">
                Our approach
              </p>

              <h2 className="mt-6 max-w-lg text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">
                Thoughtful search.
                <br />
                Meaningful
                <span className="text-[#F08043]"> connections.</span>
              </h2>

              <p className="mt-8 max-w-md text-base leading-7 text-[#191919]/55 md:text-lg">
                Every search starts with understanding. We take the time to
                learn what makes your organisation unique, then combine
                market insight with a carefully considered search process.
              </p>

              <a
                href="/contact"
                className="group mt-9 inline-flex items-center gap-3 border-b border-[#191919] pb-2 text-sm font-medium"
              >
                Start a conversation

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageReveal}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-white md:rounded-[2.5rem]"
            >
              <img
                src="/images/aboutImg/search.webp"
                alt="Antons consultant preparing for a candidate search"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageReveal}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2rem] bg-white px-5 py-16 md:rounded-[2.5rem] md:px-8 md:py-24"
          >
            <img
              src="/images/aboutImg/rightPeoples.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#191919]/45" />

            <div className="relative">
              <p className="text-xs uppercase tracking-[0.25em] text-[#191919]/60">
                Let&apos;s connect
              </p>

              <h2 className="mt-7 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-[#191919] md:text-7xl">
                The right people
                <br />
                can change
                <span className="text-[#F08043]"> everything.</span>
              </h2>

              <a
                href="/contact"
                className="group mt-10 inline-flex items-center gap-3 rounded-full border border-[#F08043] bg-[#F08043] px-7 py-4 text-sm font-medium text-[#191919]"
              >
                Talk to Antons

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}