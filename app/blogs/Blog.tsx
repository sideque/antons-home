"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    date: "18 Sep 2025",
    category: "Recruitment",
    title: "5 Recruitment Challenges Dubai Tech Employers Face in 2025",
    excerpt:
      "The tech industry in Dubai is growing rapidly. From AI-driven solutions to cloud transformation, companies are racing to innovate while hiring the right talent becomes increasingly challenging.",
    href: "https://antons.ae/blogs/5-recruitment-challenges-dubai-tech-employers-face-in-2025/",
    image: "/images/blogsImg/one.webp",
    imageAlt:
      "Technology team collaborating in a modern Dubai office during a hiring discussion",
  },
  {
    date: "05 Aug 2025",
    category: "Talent",
    title:
      "Why your competitors are hiring top talent faster and the recruitment metrics behind it!",
    excerpt:
      "In the UAE's dynamic business environment, some organisations consistently fill roles faster than others. Discover the recruitment metrics behind that difference.",
    href: "https://antons.ae/blogs/why-your-competitors-are-hiring-top-talent-faster/",
    image: "/images/blogsImg/two.webp",
    imageAlt: "Recruitment team reviewing hiring metrics on a dashboard",
  },
  {
    date: "02 Aug 2024",
    category: "GCC Insights",
    title: "UAE Job Market Update (August 2024)",
    excerpt:
      "An overview of the UAE job market and the sectors showing positive signs of growth, including continued demand for skilled technology professionals.",
    href: "https://antons.ae/blogs/uae-job-market-update-august-2024/",
    image: "/images/blogsImg/jobs.webp",
    imageAlt: "Dubai skyline representing the UAE business and job market",
  },
  {
    date: "07 Jun 2024",
    category: "GCC Insights",
    title: "The Rise of Fintech in the UAE: A Land of Opportunity for Professionals",
    excerpt:
      "The UAE has rapidly become a global hub for financial technology, creating new opportunities for professionals across the growing fintech ecosystem.",
    href: "https://antons.ae/blogs/the-rise-of-fintech-in-the-uae/",
    image: "/images/blogsImg/three.webp",
    imageAlt: "Financial professionals analysing fintech growth data",
  },
  {
    date: "30 Mar 2024",
    category: "Business",
    title: "Laying Foundations: Setting Up Business in Dubai",
    excerpt:
      "Dubai's strategic location and economic environment continue to attract entrepreneurs looking to establish and grow service businesses.",
    href: "https://antons.ae/blogs/laying-foundations-setting-up-business-in-dubai/",
    image: "/images/blogsImg/four.webp",
    imageAlt: "Entrepreneurs meeting to plan a new business setup in Dubai",
  },
  {
    date: "25 Mar 2024",
    category: "Careers",
    title:
      "Navigating the Job Market in Dubai: An Overview for Newcomers (2024 – 2025)",
    excerpt:
      "An overview of Dubai's dynamic job market, economic landscape and opportunities across different sectors for professionals entering the region.",
    href: "https://antons.ae/blogs/navigating-the-job-market-in-dubai/",
    image: "/images/blogsImg/five.webp",
    imageAlt: "Professional walking through a modern Dubai business district",
  },
];

const [featured, ...rest] = articles;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f5f0] text-[#111311]">
      {/* Hero */}
      <section className="px-5 pb-16 pt-40 md:px-8 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            {/* Left: eyebrow, headline, description */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                show: { transition: { staggerChildren: 0.09 } },
              }}
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-xs uppercase tracking-[0.22em] text-black/40"
              >
                Insights
              </motion.p>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-8 max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl"
              >
                Ideas for
                <br />
                <span className="text-black/30">ambitious</span> businesses.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mt-8 max-w-md text-base leading-7 text-black/55 md:text-lg"
              >
                Insights, perspectives and market intelligence on talent,
                recruitment and the changing business landscape across the
                UAE and GCC.
              </motion.p>
            </motion.div>

            {/* Right: premium visual composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="relative aspect-[4/3] w-full"
            >
              {/* soft circular accent shapes */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#8a998f]/15 blur-2xl md:h-56 md:w-56" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full border border-black/10" />

              {/* image plate */}
              <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-black/10 bg-[#e9e9e2]">
                <img
                  src="/images/blogsImg/dubaiTech.webp"
                  alt="Antons consultants advising a client in a modern Dubai boardroom"
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* logo mark, layered on top */}
              <div className="absolute bottom-6 left-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-black/10 bg-[#f5f5f0]/90 backdrop-blur-sm md:h-24 md:w-24">
                <img
                  src="/images/Logo.png"
                  alt="Antons"
                  className="h-10 w-10 object-contain opacity-80 md:h-12 md:w-12"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section className="px-5 pb-20 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <motion.a
            href={featured.href}
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="group grid gap-8 rounded-[28px] border border-black/10 p-4 transition-colors hover:bg-black/[0.02] md:grid-cols-[1.15fr_1fr] md:items-center md:gap-10 md:p-6"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-[#e9e9e2] md:aspect-[16/10]">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.04]" />
            </div>

            {/* Content */}
            <div className="px-2 md:px-4">
              <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-black/35">
                <span>{featured.category}</span>
                <span className="h-1 w-1 rounded-full bg-black/20" />
                <span>{featured.date}</span>
              </div>

              <h2 className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
                {featured.title}
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-6 text-black/50 md:text-base">
                {featured.excerpt}
              </p>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                <span>Read article</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Remaining articles — editorial grid */}
      <section className="px-5 pb-32 md:px-8 md:pb-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {rest.map((article, index) => (
              <motion.a
                key={article.title}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.55, ease: "easeOut", delay: (index % 2) * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-[26px] border border-black/10 bg-white/40 transition-colors hover:bg-white/70"
              >
                {/* faint sequence number */}
                <span className="pointer-events-none absolute right-5 top-4 text-3xl font-medium text-black/[0.06] md:text-4xl">
                  {String(index + 2).padStart(2, "0")}
                </span>

                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#e9e9e2]">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.04]" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-black/35">
                    <span>{article.category}</span>
                    <span className="h-1 w-1 rounded-full bg-black/20" />
                    <span>{article.date}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-medium leading-tight tracking-[-0.02em] md:text-2xl">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/45">
                    {article.excerpt}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium">
                    <span>Read article</span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}