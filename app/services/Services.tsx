"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 1.05 },
  show: { opacity: 1, scale: 1 },
};

const services = [
  {
    number: "01",
    title: "Permanent Recruitment",
    description:
      "Finding the right people for long-term growth through a focused search and rigorous selection process.",
  },
  {
    number: "02",
    title: "Temporary Staffing",
    description:
      "Flexible access to skilled professionals when changing workloads and business requirements demand it.",
  },
  {
    number: "03",
    title: "Emiratization",
    description:
      "Connecting talented Emiratis with opportunities while helping organisations achieve their national workforce goals.",
  },
  {
    number: "04",
    title: "Saudization",
    description:
      "Supporting organisations in identifying and placing qualified Saudi nationals across key positions.",
  },
  {
    number: "05",
    title: "C-level Hiring",
    description:
      "Executive search focused on identifying senior leaders who can shape strategy and drive organisational growth.",
  },
  {
    number: "06",
    title: "HR Payroll & Management",
    description:
      "Integrated HR and payroll support designed around accuracy, compliance and operational efficiency.",
  },
];

const valueAdded = [
  "Job postings and advertising",
  "Interviews and assessments",
  "Employee onboarding",
];

const Services = () => {
  return (
    <main className="overflow-x-hidden bg-[#FFFFFF] text-[#191919]">

      {/* HERO */}
      <section className="px-5 pb-16 pt-36 md:px-8 md:pb-20 md:pt-44">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#D45539]">
                Our services
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
              <h1 className="max-w-5xl text-5xl font-medium leading-[0.96] tracking-[-0.055em] md:text-7xl lg:text-[6.5rem]">
                Recruitment

                <br />

                solutions built

                <span className="text-[#D45539]/70">
                  {" "}around you.
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-[#191919]/55 md:text-lg">
                From permanent recruitment to flexible staffing and executive
                search, we provide talent solutions designed around your
                organisation&apos;s needs.
              </p>
            </motion.div>

          </div>

          {/* Large cinematic hero image */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={imageReveal}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="group relative mt-16 h-[300px] w-full overflow-hidden rounded-[2rem] bg-white md:mt-20 md:h-[560px]"
          >
            <img
              src="/images/serviceImg/teamMet.webp"
              alt="Antons consultants in an executive meeting discussing a talent search"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-5 py-24 text-[#191919] md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">

            <p className="text-xs uppercase tracking-[0.25em] text-[#F08043]">
              What we offer
            </p>

            <p className="max-w-md text-sm leading-6 text-[#191919]/55">
              Flexible recruitment and workforce solutions designed to help
              businesses find, manage and retain the right talent.
            </p>

          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">

            {/* Sticky visual panel */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageReveal}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-white lg:sticky lg:top-32"
            >
              <img
                src="/images/serviceImg/work.webp"
                alt="Antons recruitment consultants at work"
                className="h-full w-full object-cover opacity-90"
              />
            </motion.div>

            {/* Editorial service rows */}
            <div className="border-t border-[#191919]/10">

              {services.map((service, index) => (
                <motion.a
                  href="/contact"
                  key={service.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  className="group grid gap-4 border-b border-[#191919]/10 py-8 transition-colors hover:bg-white md:grid-cols-[50px_1fr_auto] md:items-center md:gap-6"
                >

                  <span className="text-xs text-[#F08043]/60">
                    {service.number}
                  </span>

                  <div>
                    <h2 className="text-xl font-medium tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                      {service.title}
                    </h2>

                    <p className="mt-2 max-w-md text-sm leading-6 text-[#191919]/55">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F08043]/40 text-[#F08043] transition-all duration-300 group-hover:border-[#D45539] group-hover:bg-white group-hover:text-[#D45539]">
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                </motion.a>
              ))}

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
          src="/images/serviceImg/build.webp"
          alt="Antons workforce solutions across the GCC"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#191919]/45" />

        <div className="absolute inset-0 flex items-end px-5 pb-10 md:items-center md:px-8 md:pb-0">
          <p className="inline-flex rounded-full bg-[#F08043] px-6 py-3 text-2xl font-medium tracking-[-0.03em] text-[#191919] md:text-4xl">
            Talent built around your business.
          </p>
        </div>
      </motion.section>

      {/* VALUE ADDED */}
      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">

            {/* Image first on mobile, left on desktop */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageReveal}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative order-1 aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-white lg:order-none"
            >
              <img
                src="/images/serviceImg/onboarding.webp"
                alt="Antons team supporting a client through onboarding"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>

            <div className="order-2 lg:order-none">

              <p className="text-xs uppercase tracking-[0.25em] text-[#D45539]">
                Value added services
              </p>

              <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">
                Best Recruitment

                <span className="text-[#D45539]/70">
                  {" "}Solutions In UAE.
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-base leading-7 text-[#191919]/50 md:text-lg">
                We support organisations throughout the recruitment journey,
                helping create a smoother experience from initial search to
                onboarding.
              </p>

              <div className="mt-12 border-t border-[#191919]/10">

                {valueAdded.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-5 border-b border-[#191919]/10 py-6"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D45539]/30 text-[#D45539]">
                      <Check
                        size={15}
                        strokeWidth={1.5}
                      />
                    </div>

                    <span className="text-lg font-medium tracking-tight">
                      {item}
                    </span>
                  </motion.div>
                ))}

              </div>

            </div>

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
            className="relative overflow-hidden rounded-[2rem] bg-white px-5 py-16 md:px-8 md:py-24"
          >

            <img
              src="/images/serviceImg/working.webp"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#191919]/55" />

            <div className="relative">

              <p className="text-xs uppercase tracking-[0.25em] text-[#F08043]">
                Let&apos;s work together
              </p>

              <h2 className="mt-7 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-[#191919] md:text-7xl">
                Looking for the

                <br />

                <span className="text-[#F08043]">
                  right people?
                </span>
              </h2>

              <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">

                <p className="max-w-lg text-base leading-7 text-[#191919]/70 md:text-lg">
                  Tell us what you need and our team will help you find the
                  right talent solution for your organisation.
                </p>

                <a
                  href="/contact"
                  className="group flex w-fit items-center gap-3 rounded-full border border-[#D45539] bg-white px-7 py-4 text-sm font-medium text-[#D45539] transition hover:scale-[1.02]"
                >
                  Hire talent

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

              </div>

            </div>

          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default Services;