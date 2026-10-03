"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const metrics = [
  {
    number: "01",
    title: "Time-to-Hire",
    description:
      "The total number of days it takes to fill a position, from job listing to accepted offer.",
  },
  {
    number: "02",
    title: "Offer Acceptance Rate",
    description:
      "The percentage of job offers extended by your company that candidates officially accept.",
  },
  {
    number: "03",
    title: "Sourcing Channel Effectiveness",
    description:
      "How many successful hires come from each recruitment channel compared to the effort or cost invested.",
  },
  {
    number: "04",
    title: "Cost-per-Hire",
    description:
      "The total recruiting expenses averaged out per new employee hired.",
  },
  {
    number: "05",
    title: "Interview-to-Offer Ratio",
    description:
      "The number of interviews conducted for each successful job offer extended.",
  },
  {
    number: "06",
    title: "Candidate Quality Index",
    description:
      "A measure of how well new hires meet or exceed job performance expectations after joining.",
  },
  {
    number: "07",
    title: "Retention After One Year",
    description:
      "The percentage of new hires who remain with the company one year after their start date.",
  },
];

const strategies = [
  {
    number: "01",
    title: "Identify Bottlenecks and Delays",
    text: "Metrics like time-to-hire reveal actual stage-wise slowdowns in the overall staffing cycle. For example, if your time-to-hire is 45 days and the interview stage takes 20 of those days, you can focus on decreasing delays between interview stages and improving hiring decisions.",
  },
  {
    number: "02",
    title: "Hire Right, Not Quick",
    text: "Tracking candidate quality index and interview-to-offer ratios helps companies avoid simply hiring quickly. Instead, businesses can focus on finding talent that meets performance expectations and cultural fit, reducing costly turnover.",
  },
  {
    number: "03",
    title: "Optimise Budget Allocation",
    text: "Cost-per-hire metrics help decision-makers allocate recruitment budgets effectively, investing more in high-performing sourcing channels and reducing spend on unproductive ones.",
  },
  {
    number: "04",
    title: "Benchmark Against Competitors",
    text: "Metrics provide a clear performance baseline, allowing companies to understand how their recruitment compares with peers and identify areas for improvement.",
  },
  {
    number: "05",
    title: "Improve Hiring Manager Satisfaction",
    text: "Data on hiring velocity and retention after one year supports continuous refinement of recruitment strategies, leading to better engagement among hiring managers and long-term workforce stability.",
  },
  {
    number: "06",
    title: "Forecast and Plan Proactively",
    text: "Regular analysis of recruitment metrics gives companies greater visibility into hiring trends and challenges. Sourcing channel effectiveness, for example, can help predict which talent pools may shrink and allow recruitment strategies to be adjusted proactively.",
  },
];

export default function BlogArticleTwoPage() {
  return (
    <main className="min-h-screen bg-white text-[#191919]">

      {/* HERO */}
      <section className="bg-white px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-7xl">

          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link
              href="/blogs"
              className="group mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#F08043] transition-colors hover:text-[#D45539]"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />

              Back to insights
            </Link>
          </motion.div>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.2em]"
          >
            <span className="text-[#F08043]">Recruitment</span>

            <span className="h-1 w-1 rounded-full bg-[#F08043]" />

            <span className="text-[#191919]">05 Aug 2025</span>

            <span className="h-1 w-1 rounded-full bg-[#F08043]" />

            <span className="text-[#191919]">4 mins read</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease }}
            className="mt-6 max-w-6xl text-[clamp(3rem,6.5vw,7rem)] font-light leading-[0.92] tracking-[-0.06em] text-[#D45539]"
          >
            Why your competitors are hiring top talent faster and the
            recruitment metrics behind it!
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-8 max-w-3xl text-base leading-7 text-[#191919] md:text-lg md:leading-8"
          >
            In UAE&apos;s dynamic and fast-growing business environment, every
            company wants to land the best talent—fast. But why do some
            organisations consistently fill roles quicker than their
            counterparts?
          </motion.p>

          {/* Featured Image */}
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
              duration: 1,
              delay: 0.4,
              ease,
            }}
            className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[2rem] bg-white md:mt-16 md:rounded-[2.5rem]"
          >
            <Image
              src="/images/blogsImg/two.webp"
              alt="Recruitment metrics and hiring strategy in the UAE"
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
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[190px_minmax(0,760px)] lg:gap-20">

          {/* SIDE NAV */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">

              <p className="text-[10px] uppercase tracking-[0.2em] text-[#F08043]">
                In this article
              </p>

              <div className="mt-6 space-y-4">

                <a
                  href="#metrics"
                  className="block text-xs leading-5 text-[#191919] transition-colors hover:text-[#D45539]"
                >
                  Recruitment metrics
                </a>

                <a
                  href="#how-metrics-help"
                  className="block text-xs leading-5 text-[#191919] transition-colors hover:text-[#D45539]"
                >
                  How metrics help
                </a>

                <a
                  href="#why-antons"
                  className="block text-xs leading-5 text-[#191919] transition-colors hover:text-[#D45539]"
                >
                  Why Choose Antons?
                </a>

              </div>
            </div>
          </aside>

          {/* CONTENT */}
          <article className="min-w-0">

            {/* INTRODUCTION */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              className="mb-20"
            >
              <p className="text-lg leading-8 text-[#191919] md:text-xl md:leading-9">
                The answer lies not in luck, but in the strategic use of
                advanced recruitment metrics and in partnering with innovative,
                data-driven recruitment agencies like Antons.
              </p>

              <p className="mt-6 text-base leading-8 text-[#191919] md:text-lg md:leading-9">
                Staffing agencies such as Hays, Michael Page and Adecco Middle
                East regularly share market insights and trends, helping
                employers anticipate shifts in candidate behaviour and sector
                needs.
              </p>

              <p className="mt-6 text-base leading-8 text-[#191919] md:text-lg md:leading-9">
                However, what sets forward-thinking companies apart is how they
                use recruitment tracking metrics that are tied directly to
                their bottom line.
              </p>
            </motion.div>

            {/* METRICS */}
            <motion.section
              id="metrics"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease }}
              className="scroll-mt-32"
            >

              <div className="mb-7 flex items-center gap-4">
                <span className="text-xs font-medium tracking-[0.15em] text-[#F08043]">
                  01
                </span>

                <div className="h-px flex-1 bg-black/10" />
              </div>

              <h2 className="max-w-3xl text-3xl font-light leading-[1.05] tracking-[-0.04em] text-[#D45539] md:text-5xl">
                The recruitment metrics that matter
              </h2>

              <p className="mt-8 text-base leading-8 text-[#191919] md:text-lg md:leading-9">
                Metrics commonly examined by the fastest-growing UAE
                businesses include:
              </p>

              <div className="mt-10 space-y-8">

                {metrics.map((metric) => (
                  <motion.div
                    key={metric.number}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: Number(metric.number) * 0.03,
                      ease,
                    }}
                    className="bg-white"
                  >
                    <div className="flex items-start gap-5">

                      <span className="pt-1 text-xs tracking-[0.15em] text-[#F08043]">
                        {metric.number}
                      </span>

                      <div>
                        <h3 className="text-lg font-medium tracking-[-0.02em] text-[#D45539] md:text-xl">
                          {metric.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-[#191919] md:text-base">
                          {metric.description}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                ))}

              </div>

            </motion.section>

            {/* HOW METRICS HELP */}
            <motion.section
              id="how-metrics-help"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease }}
              className="mt-24 scroll-mt-32 md:mt-32"
            >

              <div className="mb-7 flex items-center gap-4">
                <span className="text-xs font-medium tracking-[0.15em] text-[#F08043]">
                  02
                </span>

                <div className="h-px flex-1 bg-black/10" />
              </div>

              <h2 className="max-w-3xl text-3xl font-light leading-[1.05] tracking-[-0.04em] text-[#D45539] md:text-5xl">
                How do these metrics help companies hire better and faster?
              </h2>

              <p className="mt-8 text-base leading-8 text-[#191919] md:text-lg md:leading-9">
                Knowing key recruitment metrics gives companies a powerful
                edge in hiring better and faster by transforming recruitment
                from guesswork into a more data-driven process.
              </p>

              <div className="mt-12 space-y-8">

                {strategies.map((strategy) => (
                  <motion.div
                    key={strategy.number}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.65, ease }}
                  >
                    <div className="flex gap-5">

                      <span className="mt-1 shrink-0 text-xs tracking-[0.15em] text-[#F08043]">
                        {strategy.number}
                      </span>

                      <div>
                        <h3 className="text-xl font-medium tracking-[-0.025em] text-[#D45539] md:text-2xl">
                          {strategy.title}
                        </h3>

                        <p className="mt-3 text-base leading-8 text-[#191919] md:text-lg md:leading-9">
                          {strategy.text}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                ))}

              </div>

            </motion.section>

            {/* COMPETITIVE ADVANTAGE */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease }}
              className="mt-24 md:mt-32"
            >

              <div className="bg-white">

                <p className="text-[10px] uppercase tracking-[0.2em] text-[#F08043]">
                  The Antons approach
                </p>

                <p className="mt-6 text-base leading-8 text-[#191919] md:text-lg md:leading-9">
                  With these insights, UAE companies partnering with
                  progressive recruitment agencies like Antons can gain
                  greater visibility into their hiring performance, improve
                  hiring cycles and make more strategic recruitment decisions.
                </p>

                <p className="mt-6 text-base leading-8 text-[#191919] md:text-lg md:leading-9">
                  This blend of metrics-driven hiring is increasingly important
                  for businesses looking to compete in today&apos;s
                  fast-moving UAE market.
                </p>

              </div>

            </motion.section>

            {/* WHY ANTONS */}
            <motion.section
              id="why-antons"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease }}
              className="mt-24 border-t border-black/10 pt-16 scroll-mt-32 md:mt-32 md:pt-20"
            >

              <p className="text-[10px] uppercase tracking-[0.2em] text-[#F08043]">
                Why Choose Antons?
              </p>

              <h2 className="mt-5 text-3xl font-light leading-tight tracking-[-0.04em] text-[#D45539] md:text-5xl">
                Recruitment built around data, clarity and strategy
              </h2>

              <div className="mt-8 space-y-6">

                <p className="text-base leading-8 text-[#191919] md:text-lg md:leading-9">
                  Unlike traditional staffing agencies, Antons is a recruitment
                  partner for the data-driven age. We don&apos;t just send CVs;
                  we help businesses understand where their recruitment
                  process excels and where it may be losing time or talent.
                </p>

                <p className="text-base leading-8 text-[#191919] md:text-lg md:leading-9">
                  Every Antons client receives customised analysis and
                  recommendations through end-to-end hiring solutions designed
                  around their business needs.
                </p>

                <p className="text-base leading-8 text-[#191919] md:text-lg md:leading-9">
                  Our mission is to help UAE companies not just fill roles, but
                  build recruitment strategies grounded in real-world metrics.
                </p>

              </div>

            </motion.section>

          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-5 pb-24 md:px-8 md:pb-32">

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
            margin: "-80px",
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="mx-auto max-w-7xl overflow-hidden bg-white px-0 py-14 md:py-20"
        >

          <div className="max-w-3xl">

            <p className="text-[10px] uppercase tracking-[0.2em] text-[#F08043]">
              Recruitment solutions
            </p>

            <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-[-0.045em] text-[#D45539] md:text-6xl">
              Ready to discover how fast and smart your hiring can be?
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#191919] md:text-base md:leading-8">
              Connect with Antons and discover how we can help you find the
              talent your business needs.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full border border-[#F08043] bg-[#F08043] px-6 py-3.5 text-sm font-medium text-[#191919] transition-all duration-300 hover:bg-[#D45539] hover:border-[#D45539]"
            >
              Talk to our team

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>

        </motion.div>

      </section>

      {/* NEXT ARTICLE / RELATED */}
      <section className="border-t border-black/10 bg-white px-5 py-20 md:px-8 md:py-28">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
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
              ease,
            }}
          >

            <p className="text-[10px] uppercase tracking-[0.2em] text-[#F08043]">
              Continue reading
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] text-[#D45539] md:text-5xl">
              More Insights
            </h2>

          </motion.div>

          <div className="mt-10">

            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 text-sm text-[#191919] transition-colors hover:text-[#D45539]"
            >
              View all insights

              <ArrowUpRight
                size={15}
                className="text-[#F08043] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}