"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const relatedArticles = [
  {
    date: "30 Mar 2024",
    category: "Business",
    title: "Laying Foundations: Setting Up Business in Dubai",
    href: "/blogs/articlefive",
    image: "/images/blogsImg/four.webp",
  },
  {
    date: "7 Jun 2024",
    category: "Fintech",
    title:
      "The Rise of Fintech in the UAE: A Land of Opportunity for Professionals",
    href: "/blogs/articlefour",
    image: "/images/blogsImg/three.webp",
  },
  {
    date: "2 Aug 2024",
    category: "Job Market",
    title: "UAE Job Market Update (August 2024)",
    href: "/blogs/articlethree",
    image: "/images/blogsImg/jobs.webp",
  },
];

export default function ArticleSixPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f4] text-[#111311]">
      {/* HERO */}
      <section className="px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mb-8"
          >
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-black/45 transition hover:text-black"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to Insights
            </Link>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="mb-6 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-black/45"
              >
                <span>Job Market</span>
                <span className="h-1 w-1 rounded-full bg-black/25" />
                <span>25 Mar 2024</span>
                <span className="h-1 w-1 rounded-full bg-black/25" />
                <span>5 mins read</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.18, ease }}
                className="max-w-5xl text-[clamp(2.7rem,6vw,6rem)] font-light leading-[0.95] tracking-[-0.055em]"
              >
                Navigating the Job Market in Dubai:
                <span className="block text-black/45">
                  An Overview for Newcomers (2024–2025)
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="max-w-lg text-base leading-7 text-black/55 lg:pb-2 lg:text-lg"
            >
              Dubai’s job market is a vibrant and dynamic landscape, offering
              opportunities across a wide range of sectors. As the city
              continues to grow, understanding the market is essential for
              newcomers looking to build their careers.
            </motion.p>
          </div>

          {/* FEATURED IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="relative mt-14 aspect-[16/8] overflow-hidden rounded-[2rem] bg-black/5 md:mt-20 md:rounded-[2.5rem]"
          >
            <Image
              src="/images/blogsImg/jobmarket.webp"
              alt="Dubai job market and professional opportunities"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            />
          </motion.div>
        </div>
      </section>

      {/* ARTICLE */}
      <article className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-3xl">
          {/* INTRO */}
          <motion.section
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xl font-normal leading-8 text-black/75 md:text-2xl md:leading-9">
              Dubai’s job market is a vibrant and dynamic landscape, offering a
              plethora of opportunities across various sectors. As we move into
              2024 and look towards 2025, the city’s economic growth continues
              to create opportunities for professionals from around the world.
            </p>

            <p className="mt-7 text-base leading-8 text-black/60 md:text-lg">
              For newcomers, understanding the market, identifying growing
              sectors and preparing for the expectations of employers can make
              the transition into Dubai’s professional environment much easier.
            </p>
          </motion.section>

          {/* SECTION 01 */}
          <ArticleSection
            number="01"
            title="Understanding Dubai’s Job Market"
          >
            <p>
              Dubai has developed into one of the region’s major business and
              employment hubs. Its diverse economy creates opportunities across
              technology, finance, healthcare, real estate, hospitality,
              construction and other professional sectors.
            </p>

            <p>
              For newcomers, this diversity means there are opportunities for
              professionals with different backgrounds and levels of
              experience. At the same time, the market can be competitive, so
              understanding where demand is strongest is an important first
              step.
            </p>
          </ArticleSection>

          {/* SECTION 02 */}
          <ArticleSection
            number="02"
            title="Key Sectors Offering Opportunities"
          >
            <p>
              Several industries continue to play an important role in Dubai’s
              employment landscape. Understanding these sectors can help
              newcomers focus their job search more effectively.
            </p>

            <h3>Information Technology</h3>

            <p>
              Dubai’s continued digital transformation is creating demand for
              technology professionals. Software development, data, cloud
              computing, cybersecurity and other technology-related skills are
              increasingly relevant across industries.
            </p>

            <h3>Finance and Banking</h3>

            <p>
              Dubai’s position as a financial centre creates opportunities
              across banking, accounting, investment, financial analysis and
              related professional services.
            </p>

            <h3>Healthcare</h3>

            <p>
              Healthcare remains an important area of employment as the city
              continues developing its healthcare infrastructure and services.
              Qualified healthcare professionals can find opportunities across
              hospitals, clinics and specialist services.
            </p>

            <h3>Real Estate and Construction</h3>

            <p>
              Dubai’s continued development creates opportunities across real
              estate, engineering, architecture, construction management and
              related functions.
            </p>

            <h3>Tourism and Hospitality</h3>

            <p>
              Tourism remains an important part of Dubai’s economy, creating
              employment opportunities across hotels, restaurants, travel,
              events and hospitality management.
            </p>
          </ArticleSection>

          {/* SECTION 03 */}
          <ArticleSection
            number="03"
            title="Preparing for the Dubai Job Market"
          >
            <p>
              Moving into a new job market requires preparation. Newcomers
              should make sure their professional profile clearly communicates
              their skills, experience and suitability for the roles they are
              targeting.
            </p>

            <ul>
              <li>Keep your CV current and professionally structured.</li>
              <li>
                Highlight skills and experience that are relevant to the role.
              </li>
              <li>
                Build a professional LinkedIn profile and online presence.
              </li>
              <li>
                Research companies and industries before applying.
              </li>
              <li>
                Build professional relationships through networking and
                industry events.
              </li>
            </ul>
          </ArticleSection>

          {/* SECTION 04 */}
          <ArticleSection
            number="04"
            title="Understanding Local Workplace Culture"
          >
            <p>
              Dubai is a highly multicultural business environment. Newcomers
              work alongside professionals from many different countries,
              backgrounds and cultures.
            </p>

            <p>
              Understanding professional etiquette, communication styles and
              cultural expectations can help newcomers integrate more
              effectively into the workplace.
            </p>

            <p>
              Strong communication, professionalism, adaptability and respect
              for different cultural backgrounds are valuable qualities in
              Dubai’s diverse working environment.
            </p>
          </ArticleSection>

          {/* SECTION 05 */}
          <ArticleSection
            number="05"
            title="Building Skills for Long-Term Career Growth"
          >
            <p>
              Dubai’s employment landscape continues to evolve alongside
              technology and changing business needs. Continuous learning can
              therefore play an important role in maintaining career
              competitiveness.
            </p>

            <p>
              Depending on the industry, professional certifications,
              technical skills, communication abilities and industry-specific
              knowledge can strengthen a candidate’s profile.
            </p>
          </ArticleSection>

          {/* SECTION 06 */}
          <ArticleSection
            number="06"
            title="Networking and Professional Connections"
          >
            <p>
              Networking can be an important part of navigating a new job
              market. Building genuine professional relationships can help
              newcomers understand industries, discover opportunities and gain
              insights from people already working in Dubai.
            </p>

            <p>
              Professional events, industry communities, LinkedIn and
              recruitment specialists can all provide useful ways to build
              connections.
            </p>
          </ArticleSection>

          {/* CONCLUSION */}
          <motion.section
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease }}
            className="mt-20 border-t border-black/10 pt-12"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
              Conclusion
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-[-0.04em] md:text-4xl">
              Building a career in Dubai starts with understanding the market.
            </h2>

            <p className="mt-7 text-base leading-8 text-black/60 md:text-lg">
              Dubai continues to offer opportunities across a diverse range of
              industries. For newcomers, understanding the market, preparing
              effectively, developing relevant skills and building professional
              connections can help create a stronger foundation for a career in
              the UAE.
            </p>
          </motion.section>
        </div>
      </article>

      {/* CTA */}
      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#111311] px-7 py-14 text-white md:rounded-[2.5rem] md:px-14 md:py-20"
        >
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                Antons Recruitment
              </p>

              <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.045em] md:text-6xl">
                Need help finding your next opportunity?
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Get in touch
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* RELATED */}
      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                More insights
              </p>

              <h2 className="mt-4 text-3xl font-light tracking-[-0.04em] md:text-5xl">
                Related Insights
              </h2>
            </div>

            <Link
              href="/blogs"
              className="hidden items-center gap-2 text-sm text-black/55 transition hover:text-black sm:flex"
            >
              View all
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease,
                }}
              >
                <Link href={article.href} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-black/5">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-black/35">
                      <span>{article.category}</span>
                      <span className="h-1 w-1 rounded-full bg-black/20" />
                      <span>{article.date}</span>
                    </div>

                    <h3 className="mt-3 text-xl font-light leading-snug tracking-[-0.025em] transition group-hover:text-black/60">
                      {article.title}
                    </h3>

                    <span className="mt-5 inline-flex items-center gap-2 text-xs text-black/45">
                      Read article
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ArticleSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease }}
      className="mt-20 border-t border-black/10 pt-10"
    >
      <div className="flex gap-5">
        <span className="pt-1 text-xs tracking-[0.15em] text-black/30">
          {number}
        </span>

        <div className="flex-1">
          <h2 className="text-3xl font-light tracking-[-0.04em] md:text-4xl">
            {title}
          </h2>

          <div className="article-content mt-7 text-base leading-8 text-black/60 md:text-lg">
            {children}
          </div>
        </div>
      </div>
    </motion.section>
  );
}