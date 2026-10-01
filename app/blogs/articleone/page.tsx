"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const sections = [
  {
    number: "01",
    title: "Dubai AI Talent Shortage and Global Competition",
    paragraphs: [
      "Dubai's rapid digital transformation has created significant demand for highly specialised technology professionals. AI engineers, data scientists and machine learning professionals are increasingly difficult to attract and retain as companies compete for a limited global talent pool.",
      "For employers, the challenge is not simply finding candidates with the right technical skills. Businesses also need to create an environment where highly skilled professionals can develop and see a long-term future within the organisation.",
    ],
    points: [
      "Launch internal training and upskilling programs",
      "Partner with universities and coding academies",
      "Leverage remote and hybrid work models",
    ],
  },
  {
    number: "02",
    title: "High Time-to-Hire Slows Down Recruitment",
    paragraphs: [
      "Long recruitment timelines can become a major obstacle for fast-growing technology companies. Strong candidates often have multiple opportunities available, meaning delays can result in businesses losing qualified talent to competitors.",
      "A structured recruitment process supported by technology and consistent communication can significantly improve the candidate experience while helping employers move faster.",
    ],
    points: [
      "Use AI-powered applicant tracking systems",
      "Build warm candidate pipelines before roles become urgent",
      "Improve recruiter and candidate communication",
    ],
  },
  {
    number: "03",
    title: "Cultural Fit and Retention in a Multicultural City",
    paragraphs: [
      "Dubai's workforce is exceptionally multicultural, bringing together professionals from a wide range of backgrounds and experiences. Finding candidates who can work effectively within a company's culture is therefore an important part of successful recruitment.",
      "Hiring should also consider long-term retention. Candidates are increasingly looking for organisations that offer meaningful career development, inclusive environments and clear opportunities for progression.",
    ],
    points: [
      "Use structured interviews",
      "Consider psychometric assessments where appropriate",
      "Build an inclusive corporate culture",
      "Provide clear long-term career growth opportunities",
    ],
  },
  {
    number: "04",
    title: "Emiratization and Regulatory Compliance",
    paragraphs: [
      "Emiratization continues to shape recruitment strategies for businesses operating in the UAE. Employers need to understand the relevant requirements while building sustainable approaches to developing and hiring Emirati talent.",
      "Organisations that establish relationships with local educational institutions and invest in early-career talent can create stronger long-term recruitment pipelines.",
    ],
    points: [
      "Build partnerships with local universities and schools",
      "Develop mentorship and internship programs",
      "Ensure recruitment strategies align with government regulations",
    ],
  },
  {
    number: "05",
    title: "Hybrid and Remote Work Expectations",
    paragraphs: [
      "Flexible working has become an important consideration for many technology professionals. Employers competing for specialist talent increasingly need to think carefully about how their workplace model supports productivity, collaboration and employee expectations.",
      "Successful hybrid teams require more than simply allowing employees to work remotely. Businesses need reliable technology, clear processes and a strong culture that keeps distributed teams connected.",
    ],
    points: [
      "Develop clear hybrid work policies",
      "Use reliable cloud collaboration tools",
      "Implement effective project management systems",
      "Maintain secure IT systems",
      "Build a strong remote team culture",
    ],
  },
];

export default function BlogArticlePage() {
  return (
    <main className="min-h-screen bg-white text-black">

      <section className="px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-7xl">

          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <Link
              href="/blogs"
              className="group mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-black/40 transition-colors hover:text-black"
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
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-black/40"
          >
            <span>Recruitment</span>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <span>18 Sep 2025</span>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <span>4 mins read</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease }}
            className="mt-6 max-w-6xl text-[clamp(3rem,6.5vw,7rem)] font-light leading-[0.92] tracking-[-0.06em]"
          >
            5 Recruitment Challenges Dubai Tech Employers Face in 2025
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-8 max-w-2xl text-base leading-7 text-black/55 md:text-lg md:leading-8"
          >
            The tech industry in Dubai is growing at record speed. From
            AI-driven solutions to cloud transformation, companies are racing
            to innovate—but hiring the right talent has become one of the
            biggest obstacles to growth.
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
            className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[2rem] bg-black/5 md:mt-16 md:rounded-[2.5rem]"
          >
            <Image
              src="/images/blogsImg/one.webp"
              alt="Recruitment challenges facing Dubai technology employers"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[190px_minmax(0,760px)] lg:gap-20">

          {/* Desktop article navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                In this article
              </p>

              <div className="mt-6 space-y-4">
                {sections.map((section) => (
                  <a
                    key={section.number}
                    href={`#section-${section.number}`}
                    className="block text-xs leading-5 text-black/40 transition-colors hover:text-black"
                  >
                    {section.number} — {section.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Article content */}
          <article className="min-w-0">

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              className="mb-20"
            >
              <p className="text-lg leading-8 text-black/65 md:text-xl md:leading-9">
                Recruiting IT professionals in Dubai is not just about filling
                roles; it&apos;s about competing in a global talent war while
                also meeting local labour requirements.
              </p>

              <p className="mt-6 text-base leading-8 text-black/55 md:text-lg md:leading-9">
                For technology employers, understanding the recruitment
                landscape is essential to building teams that can support
                sustainable growth.
              </p>

              <p className="mt-6 text-base leading-8 text-black/55 md:text-lg md:leading-9">
                Here are five of the key recruitment challenges Dubai tech
                employers are facing.
              </p>
            </motion.div>

            {/* Sections */}
            <div className="space-y-24 md:space-y-32">

              {sections.map((section) => (
                <motion.section
                  key={section.number}
                  id={`section-${section.number}`}
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
                    duration: 0.75,
                    ease,
                  }}
                  className="scroll-mt-32"
                >

                  {/* Number */}
                  <div className="mb-7 flex items-center gap-4">
                    <span className="text-xs font-medium tracking-[0.15em] text-black/30">
                      {section.number}
                    </span>

                    <div className="h-px flex-1 bg-black/10" />
                  </div>

                  {/* Heading */}
                  <h2 className="max-w-3xl text-3xl font-light leading-[1.05] tracking-[-0.04em] md:text-5xl">
                    {section.title}
                  </h2>

                  {/* Paragraphs */}
                  <div className="mt-8 space-y-6">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-8 text-black/60 md:text-lg md:leading-9"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Solution box */}
                  <div className="mt-9 rounded-[1.75rem] bg-[#111311] p-7 text-white md:p-9">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      What employers can do
                    </p>

                    <ul className="mt-6 space-y-4">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-4 text-sm leading-6 text-white/70 md:text-base"
                        >
                          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </motion.section>
              ))}

            </div>

            {/* =====================================================
                CONCLUSION
            ===================================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, ease }}
              className="mt-24 border-t border-black/10 pt-16 md:mt-32 md:pt-20"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                Conclusion
              </p>

              <h2 className="mt-5 text-3xl font-light leading-tight tracking-[-0.04em] md:text-5xl">
                Building stronger technology teams in Dubai
              </h2>

              <div className="mt-8 space-y-6">
                <p className="text-base leading-8 text-black/60 md:text-lg md:leading-9">
                  Dubai&apos;s technology sector continues to evolve rapidly.
                  Organisations facing AI talent shortages, lengthy hiring
                  processes, retention challenges, Emiratization requirements
                  and changing expectations around hybrid work need recruitment
                  strategies designed for the realities of today&apos;s market.
                </p>

                <p className="text-base leading-8 text-black/60 md:text-lg md:leading-9">
                  A thoughtful combination of strong recruitment processes,
                  technology, employee development and local market expertise
                  can help businesses build teams capable of supporting their
                  next stage of growth.
                </p>
              </div>
            </motion.section>

          </article>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

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
            margin: "-80px",
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#111311] px-7 py-14 text-white md:rounded-[2.5rem] md:px-14 md:py-20"
        >
          <div className="max-w-3xl">

            <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
              Recruitment solutions
            </p>

            <h2 className="mt-5 text-4xl font-light leading-[1.05] tracking-[-0.045em] md:text-6xl">
              Need help building your next team?
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
              Connect with Antons and discover how we can help you find the
              talent your business needs.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:bg-white/90"
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

      {/* =========================================================
          RELATED INSIGHTS
      ========================================================= */}

      <section className="border-t border-black/10 px-5 py-20 md:px-8 md:py-28">
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
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
              Continue reading
            </p>

            <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] md:text-5xl">
              Related Insights
            </h2>
          </motion.div>

          {/* Existing blog cards can be added here later */}

          <div className="mt-10">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 text-sm text-black/60 transition-colors hover:text-black"
            >
              View all insights

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}