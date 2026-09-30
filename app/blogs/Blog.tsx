"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";

const articles = [
  {
    category: "Talent",
    date: "08 Sep 2026",
    title: "Building leadership teams for the next stage of growth",
    description:
      "How organisations can build leadership teams capable of supporting sustainable growth.",
  },
  {
    category: "GCC Insights",
    date: "26 Aug 2026",
    title: "What exceptional talent looks for in a growing market",
    description:
      "Understanding what attracts high-performing professionals in today's competitive market.",
  },
  {
    category: "Executive Search",
    date: "14 Aug 2026",
    title: "Why the right leadership appointment matters",
    description:
      "The impact that a carefully considered senior appointment can have on an organisation.",
  },
  {
    category: "Recruitment",
    date: "02 Aug 2026",
    title: "Building stronger teams through specialist recruitment",
    description:
      "Why focused expertise can make a difference when hiring for critical positions.",
  },
  {
    category: "GCC Insights",
    date: "21 Jul 2026",
    title: "Navigating talent across the GCC",
    description:
      "A closer look at the changing talent landscape across the Gulf region.",
  },
  {
    category: "Leadership",
    date: "09 Jul 2026",
    title: "The qualities of exceptional business leaders",
    description:
      "Exploring the qualities organisations look for when appointing their next generation of leaders.",
  },
];


const Blog = () => {
   return (
    <main className="bg-[#f5f5f0] text-[#111311]">

      {/* HERO */}
      <section className="px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                Insights
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
                Ideas,
                <br />
                insights &
                <span className="text-black/30"> perspectives.</span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-black/55 md:text-lg">
                Perspectives on talent, leadership, recruitment and the
                evolving business landscape across the GCC.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="px-5 pb-28 md:px-8 md:pb-40">
        <div className="mx-auto max-w-7xl">

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group grid overflow-hidden rounded-[2.5rem] bg-[#111311] text-white lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative min-h-[420px] overflow-hidden bg-[#252a25]">

              <img
                src="/images/Logo2.png"
                alt=""
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 object-contain opacity-10 transition duration-700 group-hover:scale-110"
              />

              <div className="absolute left-7 top-7 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.18em] backdrop-blur-md">
                Featured insight
              </div>

              <div className="absolute bottom-7 left-7 text-sm text-white/40">
                Antons Insights
              </div>
            </div>

            <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">

              <div>
                <div className="flex items-center gap-3 text-xs text-white/35">
                  <span>Talent</span>
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  <span>08 Sep 2026</span>
                </div>

                <h2 className="mt-7 text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl">
                  Building leadership teams for the next stage of growth
                </h2>

                <p className="mt-7 text-sm leading-6 text-white/40 md:text-base">
                  How organisations can build leadership teams capable of
                  supporting sustainable growth.
                </p>
              </div>

              <a
                href="#"
                className="group mt-12 flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black"
              >
                Read article

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </div>
          </motion.article>

        </div>
      </section>

      {/* ARTICLES */}
      <section className="border-t border-black/10 px-5 py-28 md:px-8 md:py-40">
        <div className="mx-auto max-w-7xl">

          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                Latest insights
              </p>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] md:text-6xl">
                Explore our
                <span className="text-black/30"> thinking.</span>
              </h2>
            </div>
          </div>

          <div className="mt-16 grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3">

            {articles.slice(1).map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group"
              >

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#dfe4db]">

                  <img
                    src="/images/Logo.png"
                    alt=""
                    className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 object-contain opacity-20 transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-white/75 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] backdrop-blur-md">
                    {article.category}
                  </div>

                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/75 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={17} />
                  </div>

                </div>

                {/* Content */}
                <div className="mt-5">

                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-black/35">
                    <CalendarDays size={12} />
                    {article.date}
                  </div>

                  <h3 className="mt-3 text-xl font-medium leading-tight tracking-tight transition-colors group-hover:text-black/60">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/45">
                    {article.description}
                  </p>

                  <a
                    href="#"
                    className="group/link mt-5 inline-flex items-center gap-2 text-sm font-medium"
                  >
                    Read article

                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </a>

                </div>

              </motion.article>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#dfe4db] px-5 py-28 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs uppercase tracking-[0.25em] text-black/40">
            Stay informed
          </p>

          <h2 className="mt-7 max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">
            Better hiring
            <br />
            starts with
            <span className="text-black/30"> better insight.</span>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-black/55 md:text-lg">
            Explore perspectives from our team on talent, leadership and
            the changing world of recruitment.
          </p>

        </div>
      </section>

    </main>
  );
}

export default Blog