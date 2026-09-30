"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

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
    <main className="bg-[#f5f5f0] text-[#111311]">

      {/* HERO */}
      <section className="px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                Our services
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
              <h1 className="max-w-5xl text-5xl font-medium leading-[0.96] tracking-[-0.055em] md:text-7xl lg:text-[6.5rem]">
                Recruitment
                <br />
                solutions built
                <span className="text-black/30"> around you.</span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-black/55 md:text-lg">
                From permanent recruitment to flexible staffing and executive
                search, we provide talent solutions designed around your
                organisation&apos;s needs.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#111311] px-5 py-28 text-white md:px-8 md:py-40">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                What we offer
              </p>

              <p className="mt-6 max-w-xs text-sm leading-6 text-white/40">
                Flexible recruitment and workforce solutions designed to help
                businesses find, manage and retain the right talent.
              </p>
            </div>

            <div className="border-t border-white/10">

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
                  className="group grid gap-5 border-b border-white/10 py-9 md:grid-cols-[60px_1fr_1fr_auto] md:items-center md:gap-8"
                >
                  <span className="text-xs text-white/25">
                    {service.number}
                  </span>

                  <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {service.title}
                  </h2>

                  <p className="max-w-md text-sm leading-6 text-white/40">
                    {service.description}
                  </p>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black">
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

      {/* VALUE ADDED */}
      <section className="px-5 py-28 md:px-8 md:py-40">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                Value added services
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">
                More than
                <span className="text-black/30"> recruitment.</span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-7 text-black/50 md:text-lg">
                We support organisations throughout the recruitment journey,
                helping create a smoother experience from initial search to
                onboarding.
              </p>

              <div className="mt-12 border-t border-black/10">

                {valueAdded.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-5 border-b border-black/10 py-6"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10">
                      <Check size={15} strokeWidth={1.5} />
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
      <section className="relative overflow-hidden bg-[#dfe4db] px-5 py-28 md:px-8 md:py-36">

        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-black/10" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.25em] text-black/40">
            Let&apos;s work together
          </p>

          <h2 className="mt-7 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">
            Looking for the
            <br />
            <span className="text-black/30">right people?</span>
          </h2>

          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <p className="max-w-lg text-base leading-7 text-black/55 md:text-lg">
              Tell us what you need and our team will help you find the right
              talent solution for your organisation.
            </p>

            <a
              href="/contact"
              className="group flex w-fit items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:scale-[1.02]"
            >
              Hire talent

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>
        </div>
      </section>

    </main>
  );
}

export default Services