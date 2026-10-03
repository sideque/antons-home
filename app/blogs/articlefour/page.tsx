"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
} from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const article = {
  category: "Fintech",
  title: "The Rise of Fintech in the UAE: A Land of Opportunity for Professionals",
  date: "7 Jun 2024",
  readTime: "3 mins read",

  // Change this path if your actual image filename is different
  image: "/images/blogsImg/three.webp",
};

const relatedArticles = [
  {
    category: "Job Market",
    date: "2 Aug 2024",
    title: "UAE Job Market Update (August 2024)",
    href: "/blogs/articlethree",
    image: "/images/blogsImg/artthree.webp",
  },
  {
    category: "Recruitment",
    date: "18 Sep 2025",
    title: "5 Recruitment Challenges Dubai Tech Employers Face in 2025",
    href: "/blogs/articleone",
    image: "/images/blogsImg/one.webp",
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

export default function FintechUAEArticle() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#191919]">
      {/* HERO */}
      <section className="px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-7xl">
          {/* Back to Insights */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link
              href="/blogs"
              className="group mb-12 inline-flex items-center gap-2 text-sm text-[#191919]/50 transition hover:text-[#D45539]"
            >
              <ArrowLeft
                size={15}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back to Insights
            </Link>
          </motion.div>

          <div className="max-w-5xl">
            {/* CATEGORY */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease,
              }}
            >
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#F08043]">
                {article.category}
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.18,
                ease,
              }}
              className="mt-6 max-w-5xl text-[clamp(2.8rem,6vw,6.5rem)] font-light leading-[0.95] tracking-[-0.055em]"
            >
              {article.title}
            </motion.h1>

            {/* META */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease,
              }}
              className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[#191919]/45"
            >
              <span className="flex items-center gap-2">
                <CalendarDays size={15} />
                {article.date}
              </span>

              <span className="h-1 w-1 rounded-full bg-[#F08043]" />

              <span className="flex items-center gap-2">
                <Clock3 size={15} />
                {article.readTime}
              </span>
            </motion.div>

            {/* INTRO */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease,
              }}
              className="mt-8 max-w-3xl text-lg leading-8 text-[#191919]/55 md:text-xl"
            >
              The United Arab Emirates (UAE) has rapidly become a global hub
              for financial technology, commonly known as fintech. This
              burgeoning sector offers a wealth of opportunities for
              professionals looking to innovate and excel in a dynamic
              environment.
            </motion.p>
          </div>

          {/* FEATURED IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.45,
              ease,
            }}
            className="relative mt-14 aspect-[16/8] overflow-hidden rounded-[2rem] bg-[#F08043] md:mt-20 md:rounded-[3rem]"
          >
            <Image
              src={article.image}
              alt="The Rise of Fintech in the UAE"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </motion.div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[180px_minmax(0,720px)_1fr]">
            {/* SIDE NAVIGATION */}
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#191919]/35">
                  In this article
                </p>

                <div className="mt-5 space-y-3 text-sm text-[#191919]/45">
                  <a
                    href="#introduction"
                    className="block transition hover:text-[#F08043]"
                  >
                    Introduction
                  </a>

                  <a
                    href="#fintech-jobs"
                    className="block transition hover:text-[#F08043]"
                  >
                    Fintech Jobs
                  </a>

                  <a
                    href="#leading-companies"
                    className="block transition hover:text-[#F08043]"
                  >
                    Leading Fintech Companies
                  </a>

                  <a
                    href="#future"
                    className="block transition hover:text-[#F08043]"
                  >
                    Future of Fintech
                  </a>
                </div>
              </div>
            </aside>

            {/* ARTICLE CONTENT */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-100px",
              }}
              variants={sectionVariants}
              className="max-w-3xl"
            >
              {/* INTRODUCTION */}
              <section
                id="introduction"
                className="scroll-mt-28"
              >
                <p className="text-lg leading-8 text-[#191919]/70 md:text-xl md:leading-9">
                  The United Arab Emirates (UAE) has rapidly become a global
                  hub for financial technology, commonly known as fintech.
                  This burgeoning sector offers a wealth of opportunities for
                  professionals looking to innovate and excel in a dynamic
                  environment.
                </p>

                <p className="mt-6 text-base leading-8 text-[#191919]/60 md:text-lg">
                  With its strategic location, supportive government policies,
                  and a thriving economy, the UAE is an attractive destination
                  for fintech talent and companies alike.
                </p>
              </section>

              {/* FINTECH JOBS */}
              <section
                id="fintech-jobs"
                className="mt-20 scroll-mt-28 md:mt-24"
              >
                <h2 className="text-3xl font-light tracking-[-0.03em] md:text-4xl">
                  Fintech Jobs in the UAE
                </h2>

                <div className="mt-8 space-y-6">
                  <p className="text-base leading-8 text-[#191919]/60 md:text-lg">
                    The fintech job market in the UAE is diverse and growing,
                    with roles ranging from backend developers to legal
                    counsels.
                  </p>

                  <p className="text-base leading-8 text-[#191919]/60 md:text-lg">
                    Companies are looking for professionals across technology,
                    finance, marketing, leadership, and legal functions.
                    Job seekers can find opportunities across the growing
                    fintech ecosystem in Dubai and the wider UAE.
                  </p>

                  <p className="text-base leading-8 text-[#191919]/60 md:text-lg">
                    Salaries in the fintech sector are competitive, reflecting
                    the high demand for skilled professionals.
                  </p>
                </div>

                {/* SALARY CARDS */}
                <div className="mt-10 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-[#F08043]/30 bg-[#F08043]/5 p-6">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#D45539]">
                      Example roles
                    </p>

                    <p className="mt-4 text-xl font-light">
                      Merchant Acquisition Specialists
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#191919]/50">
                      Sales and fintech professionals supporting digital
                      financial services.
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-[#D45539]/30 bg-[#D45539]/5 p-6">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#D45539]">
                      Example range
                    </p>

                    <p className="mt-4 text-3xl font-light tracking-[-0.03em]">
                      AED 7K–10K
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#191919]/50">
                      Monthly salary range mentioned in the original article
                      for selected roles.
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-base leading-8 text-[#191919]/60 md:text-lg">
                  Senior positions such as fintech software engineers and data
                  analysts can command higher salaries, reflecting the level
                  of expertise required in these roles.
                </p>
              </section>

              {/* LEADING COMPANIES */}
              <section
                id="leading-companies"
                className="mt-20 scroll-mt-28 md:mt-24"
              >
                <h2 className="text-3xl font-light tracking-[-0.03em] md:text-4xl">
                  Leading Fintech Companies in the UAE
                </h2>

                <p className="mt-8 text-base leading-8 text-[#191919]/60 md:text-lg">
                  The UAE is home to innovative fintech companies contributing
                  to the development of the financial technology ecosystem.
                </p>

                <div className="mt-10 space-y-4">
                  {/* TELR */}
                  <div className="rounded-[1.5rem] border border-[#F08043]/25 bg-[#F08043]/5 p-6 md:p-7">
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="text-xl font-medium">
                        Telr
                      </h3>

                      <span className="text-xs font-medium text-[#F08043]">
                        01
                      </span>
                    </div>

                    <p className="mt-3 text-base leading-7 text-[#191919]/55">
                      A payment gateway service provider that facilitates
                      cashless transactions and digitizes payment acceptance
                      methods.
                    </p>
                  </div>

                  {/* BITOASIS */}
                  <div className="rounded-[1.5rem] border border-[#D45539]/25 bg-[#D45539]/5 p-6 md:p-7">
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="text-xl font-medium">
                        BitOasis
                      </h3>

                      <span className="text-xs font-medium text-[#D45539]">
                        02
                      </span>
                    </div>

                    <p className="mt-3 text-base leading-7 text-[#191919]/55">
                      A cryptocurrency platform serving the MENA region and
                      providing infrastructure for digital asset trading.
                    </p>
                  </div>

                  {/* PYYPL */}
                  <div className="rounded-[1.5rem] border border-[#F08043]/25 bg-[#F08043]/5 p-6 md:p-7">
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="text-xl font-medium">
                        Pyypl
                      </h3>

                      <span className="text-xs font-medium text-[#F08043]">
                        03
                      </span>
                    </div>

                    <p className="mt-3 text-base leading-7 text-[#191919]/55">
                      A fintech company focused on financial inclusion and
                      providing financial services through smartphones.
                    </p>
                  </div>

                  {/* NYMCARD */}
                  <div className="rounded-[1.5rem] border border-[#D45539]/25 bg-[#D45539]/5 p-6 md:p-7">
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="text-xl font-medium">
                        Nymcard
                      </h3>

                      <span className="text-xs font-medium text-[#D45539]">
                        04
                      </span>
                    </div>

                    <p className="mt-3 text-base leading-7 text-[#191919]/55">
                      A modern issuer processor platform designed to simplify
                      financial services integration into applications.
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-base leading-8 text-[#191919]/60 md:text-lg">
                  Other major players mentioned in the article include Tabby,
                  YallaCompare, Beehive, Sarwa, and Shuaa Capital, offering
                  services ranging from mobile banking to investment platforms.
                </p>
              </section>

              {/* FUTURE */}
              <section
                id="future"
                className="mt-20 scroll-mt-28 md:mt-24"
              >
                <h2 className="text-3xl font-light tracking-[-0.03em] md:text-4xl">
                  The Future of Fintech in the UAE
                </h2>

                <div className="mt-8 space-y-6">
                  <p className="text-base leading-8 text-[#191919]/60 md:text-lg">
                    The future of fintech in the UAE looks bright, with the
                    government actively promoting the sector through
                    initiatives like the Dubai International Financial Centre
                    (DIFC) Fintech Hive.
                  </p>

                  <p className="text-base leading-8 text-[#191919]/60 md:text-lg">
                    The country&apos;s vision to become a leading global fintech
                    hub is supported by continued investment in infrastructure,
                    regulatory frameworks, and talent development.
                  </p>
                </div>
              </section>

              {/* CONCLUSION */}
              <section className="mt-20 border-t border-[#F08043]/30 pt-12 md:mt-24 md:pt-16">
                <p className="text-lg leading-8 text-[#191919]/70 md:text-xl md:leading-9">
                  For professionals eager to be at the forefront of financial
                  innovation, the UAE offers a landscape ripe with
                  possibilities.
                </p>

                <p className="mt-6 text-lg leading-8 text-[#191919]/70 md:text-xl md:leading-9">
                  Whether you&apos;re a developer, marketer, analyst, or
                  entrepreneur, the fintech sector in the UAE is a place where
                  you can build a rewarding career and contribute to the
                  transformation of the financial services industry.
                </p>
              </section>
            </motion.article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#D45539]/25 bg-[#D45539]/5 px-6 py-14 text-[#191919] md:rounded-[3rem] md:px-12 md:py-20"
        >
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#F08043]">
                Antons Recruitment
              </p>

              <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] md:text-6xl">
                Need help building your next team?
              </h2>
            </div>

            <Link
              href="/contact"
              className="group flex w-fit items-center gap-3 rounded-full bg-[#F08043] px-6 py-3.5 text-sm font-medium text-[#FFFFFF] transition hover:bg-[#D45539]"
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

      {/* RELATED INSIGHTS */}
      <section className="border-t border-[#191919]/10 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#D45539]">
                More from Antons
              </p>

              <h2 className="mt-4 text-3xl font-light tracking-[-0.03em] md:text-5xl">
                Related Insights
              </h2>
            </div>

            <Link
              href="/blogs"
              className="hidden items-center gap-2 text-sm text-[#191919]/50 transition hover:text-[#F08043] md:flex"
            >
              View all
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {relatedArticles.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease,
                }}
                className="group"
              >
                <Link href={item.href}>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-[#F08043]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-[#191919]/35">
                      <span>{item.category}</span>

                      <span className="h-1 w-1 rounded-full bg-[#F08043]" />

                      <span>{item.date}</span>
                    </div>

                    <h3 className="mt-3 max-w-xl text-xl font-light leading-snug tracking-[-0.02em] transition-colors group-hover:text-[#D45539] md:text-2xl">
                      {item.title}
                    </h3>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
                      Read article

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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