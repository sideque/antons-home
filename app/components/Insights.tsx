"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    category: "Talent",
    date: "08 Sep 2026",
    title: "Building leadership teams for the next stage of growth",
    image: "/images/Logo.png",
  },
  {
    category: "GCC Insights",
    date: "26 Aug 2026",
    title: "What exceptional talent looks for in a growing market",
    image: "/images/Logo.png",
  },
  {
    category: "Executive Search",
    date: "14 Aug 2026",
    title: "Why the right leadership appointment matters",
    image: "/images/Logo.png",
  },
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="bg-[#f5f5f0] px-5 py-28 md:px-8 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-black/40">
              Insights
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">
              Ideas for
              <span className="text-black/30"> ambitious</span>
              <br />
              businesses.
            </h2>
          </div>

          <a
            href="#insights"
            className="group flex w-fit items-center gap-2 border-b border-black/20 pb-2 text-sm"
          >
            View all insights

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#dfe3da]">
            <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/5" />

                <div className="absolute bottom-5 left-5 rounded-full bg-white/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] backdrop-blur-md">
                  {article.category}
                </div>

                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/70 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={17} />
                </div>
              </div>

              <div className="mt-5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-black/35">
                  {article.date}
                </p>

                <h3 className="mt-3 text-xl font-medium leading-tight tracking-tight transition-colors group-hover:text-black/60">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm text-black/45">
                  Read article
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}