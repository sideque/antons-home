"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Search,
  Upload,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";

const jobs = [
  {
    title: "Open Position",
    location: "United Arab Emirates",
    type: "Full-time",
  },
  {
    title: "Open Position",
    location: "United Arab Emirates",
    type: "Full-time",
  },
  {
    title: "Open Position",
    location: "United Arab Emirates",
    type: "Full-time",
  },
  {
    title: "Open Position",
    location: "United Arab Emirates",
    type: "Full-time",
  },
  {
    title: "Open Position",
    location: "United Arab Emirates",
    type: "Full-time",
  },
  {
    title: "Open Position",
    location: "United Arab Emirates",
    type: "Full-time",
  },
];

export const Careers = () => {
  return (
    <main className="bg-white text-[#191919]">

      {/* HERO */}
      <section className="bg-white px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#F08043]">
                Careers
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
              <h1 className="max-w-5xl text-5xl font-medium leading-[0.96] tracking-[-0.055em] text-[#191919] md:text-7xl lg:text-[6.5rem]">
                Build your
                <br />
                career with
                <span className="text-[#D45539]"> Antons.</span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-[#191919] md:text-lg">
                Join a team that connects exceptional people with ambitious
                organisations across the region.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="bg-white px-5 py-28 text-[#191919] md:px-8 md:py-40">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            {/* LEFT */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#F08043]">
                Opportunities
              </p>

              <h2 className="mt-6 max-w-md text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-[#191919] md:text-6xl">
                Find your
                <br />
                next
                <span className="text-[#D45539]"> opportunity.</span>
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-6 text-[#191919]">
                Explore current opportunities and discover where your
                experience could make an impact.
              </p>
            </div>

            {/* RIGHT */}
            <div>

              {/* SEARCH */}
              <div className="flex flex-col gap-3 border-b border-black/10 pb-8 md:flex-row">

                <div className="relative flex-1">
                  <Search
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F08043]"
                  />

                  <input
                    type="text"
                    placeholder="Search by keyword"
                    className="h-12 w-full rounded-full border border-black/10 bg-white pl-11 pr-5 text-sm text-[#191919] outline-none placeholder:text-[#F08043] focus:border-[#D45539]"
                  />
                </div>

                <button className="flex h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 text-sm text-[#191919] transition hover:border-[#D45539] hover:text-[#D45539]">
                  <MapPin size={16} />
                  Select location
                </button>

                <button className="flex h-12 items-center justify-center rounded-full border border-[#191919] bg-white px-6 text-sm font-medium text-[#191919] transition hover:border-[#D45539] hover:text-[#D45539]">
                  Search
                </button>

              </div>

              {/* JOB COUNT */}
              <div className="flex items-center justify-between border-b border-black/10 py-6">
                <p className="text-sm text-[#F08043]">
                  Open positions
                </p>

                <span className="text-2xl font-medium text-[#191919]">
                  06
                </span>
              </div>

              {/* JOBS */}
              {/* <div>

                {jobs.map((job, index) => (
                  <motion.a
                    href="https://www.careers-page.com/antons"
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    className="group grid gap-5 border-b border-black/10 py-7 md:grid-cols-[1fr_auto] md:items-center"
                  >

                    <div>

                      <h3 className="text-xl font-medium tracking-tight text-[#191919] md:text-2xl">
                        {job.title}
                      </h3>

                      <div className="mt-3 flex flex-wrap gap-4 text-xs text-[#F08043]">

                        <span className="flex items-center gap-2">
                          <MapPin size={13} />
                          {job.location}
                        </span>

                        <span className="flex items-center gap-2">
                          <BriefcaseBusiness size={13} />
                          {job.type}
                        </span>

                      </div>

                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 bg-white text-[#191919] transition-all duration-300 group-hover:border-[#D45539] group-hover:text-[#D45539]">
                      <ArrowUpRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>

                  </motion.a>
                ))}

              </div> */}

            </div>
          </div>
        </div>
      </section>

      {/* OPEN APPLICATION */}
      <section className="bg-white px-5 py-28 md:px-8 md:py-40">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#F08043]">
                Open application
              </p>

              <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-full border border-black/10 text-[#191919]">
                <Upload size={21} strokeWidth={1.4} />
              </div>
            </div>

            <div>

              <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-[#191919] md:text-6xl">
                Don&apos;t see the right
                <span className="text-[#D45539]"> opportunity?</span>
              </h2>

              <p className="mt-8 max-w-2xl text-base leading-7 text-[#191919] md:text-lg">
                We are always looking for bright minds and enthusiastic
                people from diverse backgrounds who want to be part of an
                outstanding team.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#191919] md:text-lg">
                Even if you don&apos;t find a suitable position below,
                you can still send us your resume and introduce yourself.
              </p>

              <a
                href="/" //careers/jobsearch
                rel="noreferrer"
                className="group mt-9 inline-flex items-center gap-3 rounded-full border border-[#191919] bg-white px-7 py-4 text-sm font-medium text-[#191919] transition hover:scale-[1.02] hover:border-[#D45539] hover:text-[#D45539]"
              >
                Upload your resume

                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-white px-5 py-28 md:px-8 md:py-36">

        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-black/10" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.25em] text-[#F08043]">
            Your next chapter
          </p>

          <h2 className="mt-7 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] text-[#191919] md:text-7xl">
            Great careers
            <br />
            start with
            <span className="text-[#D45539]"> great people.</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-[#191919] md:text-lg">
            Explore opportunities with Antons and take the next step in
            your career.
          </p>

        </div>
      </section>

    </main>
  );
}