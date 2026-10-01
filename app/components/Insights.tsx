"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Logo is used as the cover until real article images are available */
const articles = [
  {
    category: "Talent",
    date: "Latest insight",
    title: "Building leadership teams for the next stage of growth",
    image: "/images/Logo.webp",
    offset: "md:mt-0",
    ring: "-right-20 -top-20 h-64 w-64",
  },
  {
    category: "GCC Insights",
    date: "Latest insight",
    title: "What exceptional talent looks for in a growing market",
    image: "/images/Logo.webp",
    offset: "md:mt-14",
    ring: "-bottom-24 -left-16 h-72 w-72",
  },
  {
    category: "Executive Search",
    date: "Latest insight",
    title: "Why the right leadership appointment matters",
    image: "/images/Logo.webp",
    offset: "md:mt-0",
    ring: "-right-16 -bottom-20 h-64 w-64",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="bg-[#f5f5f0] px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease }}
          >
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-black/40">
              <span className="h-px w-8 bg-black/30" />
              Insights
            </p>

            <h2 className="mt-7 max-w-2xl text-[clamp(2.6rem,5.5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.065em]">
              Ideas for
              <span className="italic text-black/30"> ambitious</span>
              <br />
              businesses.
            </h2>
          </motion.div>

          <Link
            href="/blogs"
            className="group flex w-fit items-center gap-2 border-b border-black/20 pb-2 text-sm transition-colors hover:border-black"
          >
            View all insights
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Articles */}
        <div className="mt-16 grid gap-x-5 gap-y-14 md:mt-24 md:grid-cols-3 md:items-start">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6% 0px" }}
              transition={{ duration: 0.9, delay: index * 0.1, ease }}
              className={article.offset}
            >
              <Link href="/blogs" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#dfe4db] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5">
                  <div
                    aria-hidden
                    className={`absolute rounded-full border border-black/10 transition-transform duration-700 group-hover:scale-110 ${article.ring}`}
                  />

                  <img
                    src={article.image}
                    alt="Antons logo"
                    className="h-full w-full object-contain p-16 opacity-90 transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute bottom-5 left-5 rounded-full bg-white/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em]">
                    {article.category}
                  </span>

                  <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-black/35">
                    {article.date}
                  </p>

                  <h3 className="mt-3 text-xl font-medium leading-tight tracking-[-0.02em] transition-all duration-500 group-hover:translate-x-1 group-hover:text-black/60">
                    {article.title}
                  </h3>

                  <p className="mt-4 inline-flex items-center gap-2 text-sm text-black/45 transition-colors group-hover:text-black">
                    Read article
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}