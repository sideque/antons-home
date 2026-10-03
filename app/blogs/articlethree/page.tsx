"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Clock3, CalendarDays } from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const article = {
  category: "Job Market",
  title: "UAE Job Market Update (August 2024)",
  date: "2 Aug 2024",
  readTime: "2 mins read",
  image: "/images/blogsImg/artthree.webp",
};

const relatedArticles = [
  {
    category: "Recruitment",
    date: "18 Sep 2025",
    title: "5 Recruitment Challenges Dubai Tech Employers Face in 2025",
    href: "/blogs/articleone",
    image: "/images/blogsImg/one.webp",
  },
  {
    category: "Recruitment",
    date: "2025",
    title:
      "Why Your Competitors Are Hiring Top Talent Faster and the Recruitment Metrics Behind It",
    href: "/blogs/articletwo",
    image: "/images/blogsImg/two.webp",
  },
];

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

export default function UAEJobMarketArticle() {
  return (
    <main className="min-h-screen bg-white text-[#191919]">

      {/* HERO */}
      <section className="bg-white px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">

          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link
              href="/blogs"
              className="group mb-12 inline-flex items-center gap-2 text-sm text-[#F08043] transition hover:text-[#D45539]"
            >
              <ArrowLeft
                size={15}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Insights
            </Link>
          </motion.div>

          <div className="max-w-5xl">

            {/* Category */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="mb-6"
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#F08043]">
                {article.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease }}
              className="max-w-5xl text-[clamp(2.8rem,6vw,6.5rem)] font-light leading-[0.95] tracking-[-0.055em] text-[#D45539]"
            >
              {article.title}
            </motion.h1>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[#191919]"
            >
              <span className="flex items-center gap-2">
                <CalendarDays size={15} className="text-[#F08043]" />
                {article.date}
              </span>

              <span className="h-1 w-1 rounded-full bg-[#F08043]" />

              <span className="flex items-center gap-2">
                <Clock3 size={15} className="text-[#F08043]" />
                {article.readTime}
              </span>
            </motion.div>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease }}
              className="mt-8 max-w-2xl text-lg leading-8 text-[#191919] md:text-xl"
            >
              As we step into August, the UAE job market is showing positive
              signs of recovery. Here&apos;s what you need to know.
            </motion.p>
          </div>

          {/* FEATURED IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="relative mt-14 aspect-[16/8] overflow-hidden rounded-[2rem] bg-white md:mt-20 md:rounded-[3rem]"
          >
            <Image
              src={article.image}
              alt="UAE Job Market Update"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </motion.div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="bg-white px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[180px_minmax(0,720px)_1fr]">

            {/* SIDE META */}
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#F08043]">
                  In this article
                </p>

                <div className="mt-5 space-y-3 text-sm text-[#191919]">
                  <a
                    href="#it-sector"
                    className="block transition hover:text-[#D45539]"
                  >
                    IT Sector
                  </a>

                  <a
                    href="#banking-finance"
                    className="block transition hover:text-[#D45539]"
                  >
                    Banking & Finance
                  </a>

                  <a
                    href="#real-estate"
                    className="block transition hover:text-[#D45539]"
                  >
                    Real Estate & Construction
                  </a>

                  <a
                    href="#energy"
                    className="block transition hover:text-[#D45539]"
                  >
                    Oil & Gas & Renewable Energy
                  </a>

                  <a
                    href="#tourism"
                    className="block transition hover:text-[#D45539]"
                  >
                    Tourism & Hospitality
                  </a>
                </div>
              </div>
            </aside>

            {/* CONTENT */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionVariants}
              className="max-w-3xl"
            >
              <p className="text-lg leading-8 text-[#191919] md:text-xl md:leading-9">
                As we step into August, the UAE job market is showing positive
                signs of recovery. Here&apos;s what you need to know:
              </p>

              {/* IT */}
              <section id="it-sector" className="mt-16 scroll-mt-28 md:mt-20">
                <h2 className="text-3xl font-light tracking-[-0.03em] text-[#D45539] md:text-4xl">
                  IT Sector
                </h2>

                <div className="mt-8 space-y-8">

                  <div>
                    <h3 className="text-xl font-medium text-[#F08043]">
                      Software Developers
                    </h3>

                    <p className="mt-3 text-base leading-8 text-[#191919]">
                      Demand for software developers, especially those skilled
                      in languages like Python, Java, and JavaScript, remains
                      high. Companies are looking for full-stack developers,
                      mobile app developers, and cloud specialists.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#F08043]">
                      Cybersecurity Professionals
                    </h3>

                    <p className="mt-3 text-base leading-8 text-[#191919]">
                      With the increasing reliance on digital infrastructure,
                      cybersecurity experts are in demand. Roles include
                      ethical hackers, security analysts, and network security
                      specialists.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#F08043]">
                      Data Scientists and Analysts
                    </h3>

                    <p className="mt-3 text-base leading-8 text-[#191919]">
                      Organizations seek professionals who can analyze and
                      interpret data to drive business decisions.
                    </p>
                  </div>

                </div>
              </section>

              {/* BANKING */}
              <section
                id="banking-finance"
                className="mt-20 scroll-mt-28 md:mt-24"
              >
                <h2 className="text-3xl font-light tracking-[-0.03em] text-[#D45539] md:text-4xl">
                  Banking and Finance
                </h2>

                <div className="mt-8 space-y-8">

                  <div>
                    <h3 className="text-xl font-medium text-[#F08043]">
                      Financial Analysts
                    </h3>

                    <p className="mt-3 text-base leading-8 text-[#191919]">
                      These professionals analyze financial data, assess
                      investment opportunities, and provide recommendations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#F08043]">
                      Risk Managers
                    </h3>

                    <p className="mt-3 text-base leading-8 text-[#191919]">
                      Given the dynamic economic environment, risk management
                      experts are crucial.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#F08043]">
                      Fintech Specialists
                    </h3>

                    <p className="mt-3 text-base leading-8 text-[#191919]">
                      The fintech sector is growing, creating opportunities for
                      professionals with expertise in blockchain, digital
                      payments, and financial technology.
                    </p>
                  </div>

                </div>
              </section>

              {/* REAL ESTATE */}
              <section
                id="real-estate"
                className="mt-20 scroll-mt-28 md:mt-24"
              >
                <h2 className="text-3xl font-light tracking-[-0.03em] text-[#D45539] md:text-4xl">
                  Real Estate and Construction
                </h2>

                <div className="mt-8 space-y-8">

                  <div>
                    <h3 className="text-xl font-medium text-[#F08043]">
                      Project Managers
                    </h3>

                    <p className="mt-3 text-base leading-8 text-[#191919]">
                      Construction projects continue to thrive, requiring
                      skilled project managers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#F08043]">
                      Architects and Engineers
                    </h3>

                    <p className="mt-3 text-base leading-8 text-[#191919]">
                      Architects, civil engineers, and structural engineers are
                      sought after for real estate development and
                      infrastructure projects.
                    </p>
                  </div>

                </div>
              </section>

              {/* ENERGY */}
              <section
                id="energy"
                className="mt-20 scroll-mt-28 md:mt-24"
              >
                <h2 className="text-3xl font-light tracking-[-0.03em] text-[#D45539] md:text-4xl">
                  Oil and Gas and Renewable Energy
                </h2>

                <div className="mt-8 space-y-8">

                  <div>
                    <h3 className="text-xl font-medium text-[#F08043]">
                      Petroleum Engineers
                    </h3>

                    <p className="mt-3 text-base leading-8 text-[#191919]">
                      Despite the shift toward renewable energy, the oil and
                      gas industry still needs petroleum engineers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#F08043]">
                      Renewable Energy Specialists
                    </h3>

                    <p className="mt-3 text-base leading-8 text-[#191919]">
                      Solar, wind, and other renewable energy sources are
                      gaining prominence. Experts in these fields are valuable.
                    </p>
                  </div>

                </div>
              </section>

              {/* TOURISM */}
              <section
                id="tourism"
                className="mt-20 scroll-mt-28 md:mt-24"
              >
                <h2 className="text-3xl font-light tracking-[-0.03em] text-[#D45539] md:text-4xl">
                  Tourism and Hospitality
                </h2>

                <div className="mt-8 space-y-8">

                  <div>
                    <h3 className="text-xl font-medium text-[#F08043]">
                      Hotel Managers
                    </h3>

                    <p className="mt-3 text-base leading-8 text-[#191919]">
                      As tourism rebounds, hotels need experienced managers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#F08043]">
                      Event Planners
                    </h3>

                    <p className="mt-3 text-base leading-8 text-[#191919]">
                      With events resuming, event planners are in demand.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#F08043]">
                      Tour Guides
                    </h3>

                    <p className="mt-3 text-base leading-8 text-[#191919]">
                      Opportunities are available for those who can provide
                      unique experiences to tourists.
                    </p>
                  </div>

                </div>
              </section>

              {/* CONCLUSION */}
              <section className="mt-20 border-t border-black/10 pt-12 md:mt-24 md:pt-16">
                <p className="text-lg leading-8 text-[#191919] md:text-xl md:leading-9">
                  Remember, staying updated on industry trends, networking, and
                  tailoring your applications are essential. Also, consider
                  exploring remote work options and freelance opportunities.
                </p>

                <p className="mt-6 text-lg leading-8 text-[#191919] md:text-xl md:leading-9">
                  If you have any specific roles in mind, feel free to ask!
                </p>
              </section>
            </motion.article>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 pb-24 md:px-8 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-7xl overflow-hidden bg-white px-0 py-14 md:py-20"
        >
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#F08043]">
                Antons Recruitment
              </p>

              <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] text-[#D45539] md:text-6xl">
                Need help building your next team?
              </h2>
            </div>

            <Link
              href="/contact"
              className="group flex w-fit items-center gap-3 rounded-full border border-[#F08043] bg-[#F08043] px-6 py-3.5 text-sm font-medium text-[#191919] transition hover:border-[#D45539] hover:bg-[#D45539]"
            >
              Talk to our team

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>
        </motion.div>
      </section>

      {/* RELATED ARTICLES */}
      <section className="border-t border-black/10 bg-white px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#F08043]">
                More from Antons
              </p>

              <h2 className="mt-4 text-3xl font-light tracking-[-0.03em] text-[#D45539] md:text-5xl">
                Related Insights
              </h2>
            </div>

            <Link
              href="/blogs"
              className="hidden items-center gap-2 text-sm text-[#191919] transition hover:text-[#D45539] md:flex"
            >
              View all
              <ArrowUpRight size={15} className="text-[#F08043]" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {relatedArticles.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease,
                }}
                className="group"
              >
                <Link href={item.href}>

                  <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[#F08043]">
                      <span>{item.category}</span>
                      <span className="h-1 w-1 rounded-full bg-[#F08043]" />
                      <span className="text-[#191919]">{item.date}</span>
                    </div>

                    <h3 className="mt-3 max-w-xl text-xl font-light leading-snug tracking-[-0.02em] text-[#D45539] transition-colors group-hover:text-[#F08043] md:text-2xl">
                      {item.title}
                    </h3>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#191919]">
                      Read article
                      <ArrowUpRight
                        size={15}
                        className="text-[#F08043] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>

                </Link>
              </motion.article>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}