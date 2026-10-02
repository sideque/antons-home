"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  Search,
  Upload,
} from "lucide-react";
import { useMemo, useState } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const jobs = [
  {
    title: "Rental Sales Executive – Generators & Pumps",
    location: "Dubai, United Arab Emirates",
    category: "Sales",
  },
  {
    title: "Cloud Platform Manager",
    location: "Dubai, United Arab Emirates",
    category: "Technology",
  },
  {
    title: "IT Risk & Compliance Manager",
    location: "Dubai, United Arab Emirates",
    category: "Technology",
  },
  {
    title: "Digital Banking Solutions Architect",
    location: "Dubai, United Arab Emirates",
    category: "Technology",
  },
  {
    title: "Solution Architect",
    location: "Dubai, United Arab Emirates",
    category: "Technology",
  },
  {
    title: "Project Manager",
    location: "Dubai, United Arab Emirates",
    category: "Management",
  },
  {
    title: "Penetration Tester",
    location: "Dubai, United Arab Emirates",
    category: "Cybersecurity",
  },
  {
    title: "Python FastAPI Developer",
    location: "Dubai, United Arab Emirates",
    category: "Technology",
  },
  {
    title: "Business Development Executive",
    location: "Dubai, United Arab Emirates",
    category: "Sales",
  },
];

const categories = ["All", "Technology", "Sales", "Management", "Cybersecurity"];

export default function CareersPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || job.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main className="bg-white text-[#191919]">
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-24 pt-40 md:px-8 md:pb-32 md:pt-48">
        {/* Decorative circles */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#D45539]/10"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 top-0 h-[250px] w-[250px] rounded-full border border-[#F08043]/15"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease }}
            >
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#191919]/45">
                <span className="h-px w-8 bg-[#D45539]/60" />
                Careers
              </p>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease }}
            >
              <h1 className="max-w-5xl text-[clamp(3.2rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.07em]">
                Find work that
                <br />
                <span className="italic text-[#D45539]">
                  moves you forward.
                </span>
              </h1>

              <p className="mt-9 max-w-xl text-base leading-7 text-[#191919]/55 md:text-lg">
                Explore opportunities with organisations building the future
                across the GCC. Find your next challenge, make an impact and
                grow your career.
              </p>
            </motion.div>
          </div>

          {/* Hero bottom */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="mt-20 flex flex-col justify-between gap-6 border-t border-[#191919]/10 pt-6 md:flex-row md:items-center"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/40">
              Opportunities across the GCC
            </p>

            <a
              href="#openings"
              className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-[#D45539]"
            >
              View open positions
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-[#191919]/10 px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, ease }}
            className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#191919]/40"
          >
            <span className="h-px w-8 bg-[#F08043]" />
            Your next chapter
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease }}
          >
            <h2 className="max-w-4xl text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.94] tracking-[-0.06em]">
              Exceptional opportunities
              <span className="italic text-[#D45539]"> start here.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[#191919]/55 md:text-lg">
              We connect talented professionals with ambitious organisations
              across a wide range of sectors. Whether you're looking for your
              next leadership opportunity or the next step in your specialist
              career, explore the roles currently available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OPENINGS */}
      <section
        id="openings"
        className="scroll-mt-24 px-5 py-28 md:px-8 md:py-40"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease }}
            className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <div>
              <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#191919]/40">
                <span className="h-px w-8 bg-[#D45539]" />
                Opportunities
              </p>

              <h2 className="mt-7 text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.065em]">
                Our
                <span className="italic text-[#D45539]"> openings.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#191919]/50">
              Explore our current opportunities and find a role that matches
              your experience and ambitions.
            </p>
          </motion.div>

          {/* Search */}
          <div className="mt-16 border-y border-[#191919]/10 py-5 md:mt-24">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-md">
                <Search
                  size={17}
                  strokeWidth={1.5}
                  className="absolute left-0 top-1/2 -translate-y-1/2 text-[#191919]/35"
                />

                <input
                  type="text"
                  placeholder="Search opportunities"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className="w-full border-0 bg-transparent py-3 pl-8 pr-4 text-sm text-[#191919] outline-none placeholder:text-[#191919]/35"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-full border px-4 py-2 text-xs transition-all duration-300 ${
                      category === item
                        ? "border-[#D45539] bg-[#D45539] text-white"
                        : "border-[#191919]/15 text-[#191919]/55 hover:border-[#D45539]/50 hover:text-[#D45539]"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Count */}
          <div className="mt-8 flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#191919]/35">
              {filteredJobs.length}{" "}
              {filteredJobs.length === 1 ? "Position" : "Positions"}
            </p>

            <p className="text-[10px] uppercase tracking-[0.2em] text-[#191919]/35">
              Dubai · UAE
            </p>
          </div>

          {/* Job list */}
          <div className="mt-6 border-t border-[#191919]/10">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.a
                  key={job.title}
                  href="https://www.careers-page.com/antons"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5% 0px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.05,
                    ease,
                  }}
                  className="group relative grid gap-6 border-b border-[#191919]/10 py-8 transition-all duration-500 hover:bg-[#F08043]/5 md:grid-cols-[70px_1fr_auto] md:items-center md:gap-8 md:px-5"
                >
                  {/* Number */}
                  <span className="text-xs tracking-[0.1em] text-[#D45539]/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Job */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[10px] uppercase tracking-[0.16em] text-[#D45539]">
                        {job.category}
                      </span>
                    </div>

                    <h3 className="mt-2 max-w-3xl text-xl font-medium tracking-[-0.025em] transition-transform duration-500 group-hover:translate-x-1 md:text-2xl">
                      {job.title}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-sm text-[#191919]/45">
                      <MapPin size={14} strokeWidth={1.5} />
                      {job.location}
                    </div>
                  </div>

                  {/* Apply */}
                  <span className="flex w-fit items-center gap-3 rounded-full border border-[#191919]/15 px-5 py-3 text-sm text-[#191919] transition-all duration-300 group-hover:border-[#D45539] group-hover:bg-[#D45539] group-hover:text-white">
                    Apply
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>

                  {/* Hover line */}
                  <span
                    aria-hidden
                    className="absolute bottom-[-1px] left-0 h-px w-full origin-left scale-x-0 bg-[#D45539] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  />
                </motion.a>
              ))
            ) : (
              <div className="py-20 text-center">
                <BriefcaseBusiness
                  size={32}
                  strokeWidth={1}
                  className="mx-auto text-[#191919]/25"
                />

                <p className="mt-5 text-lg font-medium">
                  No positions found.
                </p>

                <p className="mt-2 text-sm text-[#191919]/45">
                  Try another search or category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* RESUME CTA */}
      <section className="border-t border-[#191919]/10 px-5 py-28 md:px-8 md:py-40">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease }}
            className="relative overflow-hidden rounded-[2rem] border border-[#191919]/10 bg-[#F08043]/10 p-8 md:p-14 lg:p-20"
          >
            {/* Decoration */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#D45539]/15"
            />

            <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[#D45539]">
                  <Upload size={14} />
                  Open application
                </p>

                <h2 className="mt-7 max-w-4xl text-[clamp(2.7rem,6vw,6rem)] font-medium leading-[0.92] tracking-[-0.065em]">
                  Don&apos;t see the
                  <br />
                  <span className="italic text-[#D45539]">
                    right opportunity?
                  </span>
                </h2>

                <p className="mt-8 max-w-xl text-base leading-7 text-[#191919]/55 md:text-lg">
                  We are always interested in hearing from talented and
                  enthusiastic people. Send us your CV and we may be able to
                  connect you with a future opportunity.
                </p>
              </div>

              <a
                href="https://www.careers-page.com/antons"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#D45539] px-7 py-4 text-sm font-medium text-white transition duration-300 hover:scale-[1.02] hover:bg-[#191919]"
              >
                Upload your resume
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL LINE */}
      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto flex max-w-7xl items-center gap-4 text-[11px] uppercase tracking-[0.2em] text-[#191919]/30">
          <span className="h-px w-12 bg-[#191919]/15" />
          Your next opportunity could start here
        </div>
      </section>
    </main>
  );
}