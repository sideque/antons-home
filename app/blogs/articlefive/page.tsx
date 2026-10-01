"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function ArticleFivePage() {
  return (
    <main className="min-h-screen bg-white text-[#111311]">
      {/* HERO */}
      <section className="px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-7xl">
          {/* Meta */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-black/45"
          >
            <span className="font-medium text-black/70">Business</span>
            <span className="h-1 w-1 rounded-full bg-black/20" />
            <span>30 Mar 2024</span>
            <span className="h-1 w-1 rounded-full bg-black/20" />
            <span>8 mins read</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="mt-7 max-w-5xl text-[clamp(2.8rem,6vw,6.8rem)] font-light leading-[0.94] tracking-[-0.055em]"
          >
            Laying Foundations:
            <br />
            <span className="text-black/45">
              Setting Up Business in Dubai
            </span>
          </motion.h1>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mt-8 max-w-2xl text-base leading-7 text-black/55 md:text-lg md:leading-8"
          >
            Dubai has become a major destination for entrepreneurs looking to
            establish service businesses. Understanding the market,
            jurisdiction options, legal requirements and operational
            considerations is essential before beginning your business
            journey.
          </motion.p>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.35, ease }}
            className="relative mt-12 aspect-[16/8] w-full overflow-hidden rounded-[2rem] bg-[#eeeeeb] md:mt-16 md:rounded-[2.5rem]"
          >
            <Image
              src="/images/blogsImg/four.webp"
              alt="Setting up a business in Dubai"
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
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,760px)_1fr]">
            {/* Side label */}
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                  In this article
                </p>

                <div className="mt-5 space-y-3 text-sm text-black/45">
                  <a href="#market" className="block transition hover:text-black">
                    Understanding the Market
                  </a>
                  <a
                    href="#jurisdiction"
                    className="block transition hover:text-black"
                  >
                    Choosing the Right Jurisdiction
                  </a>
                  <a
                    href="#legal"
                    className="block transition hover:text-black"
                  >
                    Legal Requirements
                  </a>
                  <a
                    href="#financial"
                    className="block transition hover:text-black"
                  >
                    Financial Planning
                  </a>
                  <a
                    href="#networking"
                    className="block transition hover:text-black"
                  >
                    Networking
                  </a>
                  <a
                    href="#compliance"
                    className="block transition hover:text-black"
                  >
                    Staying Compliant
                  </a>
                  <a href="#steps" className="block transition hover:text-black">
                    Step-by-Step Guide
                  </a>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="min-w-0">
              {/* Introduction */}
              <motion.section
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease }}
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-black/35">
                  Introduction
                </p>

                <p className="mt-6 text-lg leading-8 text-black/70 md:text-xl md:leading-9">
                  Dubai, known for its economic vitality and strategic
                  location, has become a hub for entrepreneurs looking to
                  establish service businesses. As we approach 2024, the
                  landscape continues to evolve, offering new opportunities
                  and challenges.
                </p>

                <p className="mt-6 text-base leading-8 text-black/55 md:text-lg">
                  This article delves into the essential knowledge
                  entrepreneurs should arm themselves with before embarking on
                  their business journey in Dubai.
                </p>
              </motion.section>

              {/* Market */}
              <motion.section
                id="market"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease }}
                className="mt-20 border-t border-black/10 pt-12 md:mt-28 md:pt-16"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                  01
                </p>

                <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] md:text-5xl">
                  Understanding the Market
                </h2>

                <p className="mt-7 text-base leading-8 text-black/60 md:text-lg">
                  Before setting up a service business, it’s crucial to conduct
                  thorough market research. Understanding local demands,
                  competition, and customer preferences can shape your business
                  model.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60 md:text-lg">
                  For example, a digital marketing agency would need to assess
                  the online presence of potential clients and the level of
                  digital literacy in the region.
                </p>
              </motion.section>

              {/* Jurisdiction */}
              <motion.section
                id="jurisdiction"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease }}
                className="mt-20 border-t border-black/10 pt-12 md:mt-28 md:pt-16"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                  02
                </p>

                <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] md:text-5xl">
                  Choosing the Right Jurisdiction
                </h2>

                <p className="mt-7 text-base leading-8 text-black/60 md:text-lg">
                  Dubai offers various jurisdictions for setting up a business,
                  including free zones and mainland areas. Each has its
                  advantages, such as tax exemptions in free zones or more
                  flexibility in mainland locations.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60 md:text-lg">
                  For instance, a logistics company might benefit from the tax
                  advantages in Jebel Ali Free Zone due to its proximity to the
                  port.
                </p>

                {/* Mainland */}
                <div className="mt-12 rounded-[1.5rem] bg-[#f5f5f2] p-6 md:p-8">
                  <h3 className="text-2xl font-light tracking-[-0.03em]">
                    Mainland Company Setup
                  </h3>

                  <div className="mt-7 space-y-5">
                    <InfoItem
                      title="Business Ownership"
                      text="Mainland companies can be formed with a local sponsor (UAE national) holding at least 51% of the shares, although full foreign ownership is now possible in many sectors."
                    />

                    <InfoItem
                      title="Business Scope"
                      text="Offers the freedom to operate anywhere in the UAE and internationally without restrictions."
                    />

                    <InfoItem
                      title="Audit Requirements"
                      text="Annual audit reports are typically required to renew the trade license."
                    />

                    <InfoItem
                      title="Visas"
                      text="The number of visas is usually determined by the size of the office space rented."
                    />
                  </div>
                </div>

                {/* Free Zone */}
                <div className="mt-6 rounded-[1.5rem] border border-black/10 p-6 md:p-8">
                  <h3 className="text-2xl font-light tracking-[-0.03em]">
                    Free Zone Company Setup
                  </h3>

                  <div className="mt-7 space-y-5">
                    <InfoItem
                      title="Business Ownership"
                      text="Allows 100% foreign ownership without the need for a local sponsor."
                    />

                    <InfoItem
                      title="Business Scope"
                      text="Operations are generally limited to within the free zone and international markets. To operate on the mainland, a local distributor or agent is required."
                    />

                    <InfoItem
                      title="Audit Requirements"
                      text="Some free zones require annual audits, while others may not."
                    />

                    <InfoItem
                      title="Visas"
                      text="Often provide more flexibility in the number of visas available, depending on the free zone authority’s regulations."
                    />
                  </div>
                </div>

                {/* Offshore */}
                <div className="mt-6 rounded-[1.5rem] border border-black/10 p-6 md:p-8">
                  <h3 className="text-2xl font-light tracking-[-0.03em]">
                    Offshore Company Setup
                  </h3>

                  <div className="mt-7 space-y-5">
                    <InfoItem
                      title="Business Ownership"
                      text="100% foreign ownership is permitted."
                    />

                    <InfoItem
                      title="Business Scope"
                      text="Designed for international business activities outside the UAE; not permitted to conduct business within the UAE."
                    />

                    <InfoItem
                      title="Audit Requirements"
                      text="Typically, there are no audit requirements."
                    />

                    <InfoItem
                      title="Visas"
                      text="Offshore companies do not grant residency visas as they are non-resident entities."
                    />
                  </div>
                </div>

                {/* Key considerations */}
                <div className="mt-12">
                  <h3 className="text-2xl font-light tracking-[-0.03em]">
                    Key Considerations
                  </h3>

                  <div className="mt-6 space-y-4">
                    <Bullet text="Capital Requirements: Vary depending on the jurisdiction and type of business activity." />
                    <Bullet text="Privacy: Offshore jurisdictions often offer more privacy for shareholders and directors." />
                  </div>

                  <p className="mt-8 text-base leading-8 text-black/60 md:text-lg">
                    A consulting firm may choose a mainland setup if they wish
                    to contract directly with government entities or need a
                    broader operational scope within the UAE.
                  </p>

                  <p className="mt-5 text-base leading-8 text-black/60 md:text-lg">
                    A tech startup focusing on international clients might opt
                    for a free zone like Dubai Silicon Oasis, which is tailored
                    for technology businesses and offers benefits like 100%
                    ownership and tax exemptions.
                  </p>

                  <p className="mt-5 text-base leading-8 text-black/60 md:text-lg">
                    An investment holding company might go for an offshore
                    setup to take advantage of the privacy and no audit
                    requirements.
                  </p>

                  <p className="mt-5 text-base leading-8 text-black/60 md:text-lg">
                    When selecting a jurisdiction, consider your business’s
                    long-term goals, the nature of your services, and where your
                    primary client base will be located. It’s also advisable to
                    consult with a business setup consultancy to navigate the
                    complexities of company formation in Dubai.
                  </p>
                </div>
              </motion.section>

              {/* Legal */}
              <motion.section
                id="legal"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease }}
                className="mt-20 border-t border-black/10 pt-12 md:mt-28 md:pt-16"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                  03
                </p>

                <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] md:text-5xl">
                  Legal Requirements and Business Structure
                </h2>

                <p className="mt-7 text-base leading-8 text-black/60 md:text-lg">
                  Entrepreneurs must navigate the legalities of business setup,
                  from choosing the right legal entity to obtaining licenses.
                  Options include Free Zone Limited Liability Company (FZ LLC),
                  Free Zone Establishment (FZE), and more.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60 md:text-lg">
                  For example, a consultancy firm may opt for an FZE for its
                  simplicity and full ownership benefits.
                </p>

                <h3 className="mt-12 text-2xl font-light tracking-[-0.03em]">
                  Legal Requirements
                </h3>

                <div className="mt-7 space-y-4">
                  <Bullet text="Trade License: Obtain a trade license from the Department of Economic Development (DED), which is mandatory for conducting business activities in Dubai." />
                  <Bullet text="Memorandum of Association (MOA): Prepare an MOA, a legal document outlining the company’s objectives, share capital, and shareholder details. It must be notarized in the UAE." />
                  <Bullet text="Articles of Association (AOA): Draft an AOA to define the company’s internal rules, management structure, and shareholder rights." />
                  <Bullet text="Shareholders Agreement: Although not mandatory, it’s recommended for companies with multiple shareholders to outline rights and obligations." />
                  <Bullet text="Commercial Lease Agreement: Secure a commercial lease agreement, which is required to register a business with the DED." />
                  <Bullet text="Additional Approvals: Depending on the business activity, you may need approvals from external departments or specific regulatory bodies." />
                </div>

                <h3 className="mt-12 text-2xl font-light tracking-[-0.03em]">
                  Business Structure Options
                </h3>

                <div className="mt-7 space-y-4">
                  <Bullet text="Limited Liability Company (LLC): An LLC is a popular choice, allowing for a mix of foreign and local ownership, with at least 51% of shares held by a UAE national." />
                  <Bullet text="Free Zone Company: Ideal for 100% foreign ownership, tax exemptions, and operation within free zones, catering to specific industries." />
                  <Bullet text="Branch Office: A branch office serves as an extension of a foreign parent company, suitable for businesses looking to maintain full control over operations." />
                  <Bullet text="Representative Office: For market research and promotion without direct sales, a representative office is a non-trading entity." />
                  <Bullet text="Sole Proprietorship: Individuals may register as sole proprietors, particularly for professional services, with full ownership but also full liability." />
                  <Bullet text="Partnership Company: General or Limited Liability Partnerships are options on the mainland, involving two or more partners." />
                </div>

                <p className="mt-8 text-base leading-8 text-black/60 md:text-lg">
                  Each business structure has its own implications for
                  liability, taxation, and operational flexibility. It’s
                  crucial to align the choice of structure with your business
                  goals, market strategy, and the level of control you wish to
                  maintain.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60 md:text-lg">
                  For detailed guidance, including examples and step-by-step
                  processes, it’s advisable to consult with legal experts or
                  business setup consultants who specialize in the Dubai
                  market.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60 md:text-lg">
                  This elaboration on legal requirements and business
                  structures provides a foundational understanding for
                  entrepreneurs aiming to establish a service business in
                  Dubai. It’s important to carefully consider these aspects to
                  ensure a smooth setup process and compliance with local
                  regulations.
                </p>
              </motion.section>

              {/* Financial */}
              <motion.section
                id="financial"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease }}
                className="mt-20 border-t border-black/10 pt-12 md:mt-28 md:pt-16"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                  04
                </p>

                <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] md:text-5xl">
                  Financial Planning
                </h2>

                <p className="mt-7 text-base leading-8 text-black/60 md:text-lg">
                  A solid financial plan is the backbone of any successful
                  business. This includes budgeting for initial costs, ongoing
                  expenses, and potential revenue streams.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60 md:text-lg">
                  For example, a new restaurant would need to budget for
                  location rent, kitchen equipment, staff salaries, and
                  marketing.
                </p>
              </motion.section>

              {/* Networking */}
              <motion.section
                id="networking"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease }}
                className="mt-20 border-t border-black/10 pt-12 md:mt-28 md:pt-16"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                  05
                </p>

                <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] md:text-5xl">
                  Networking and Local Partnerships
                </h2>

                <p className="mt-7 text-base leading-8 text-black/60 md:text-lg">
                  Building a network and finding local partners can be
                  invaluable. Partnerships with local firms can provide
                  insights into the business culture and help navigate
                  regulatory requirements.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60 md:text-lg">
                  For example, a healthcare services provider might partner
                  with local clinics to offer specialized services.
                </p>
              </motion.section>

              {/* Culture */}
              <motion.section
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease }}
                className="mt-20 border-t border-black/10 pt-12 md:mt-28 md:pt-16"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                  06
                </p>

                <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] md:text-5xl">
                  Cultural Considerations
                </h2>

                <p className="mt-7 text-base leading-8 text-black/60 md:text-lg">
                  Understanding local customs and business etiquette is vital.
                  This includes negotiation practices, communication styles,
                  and legal formalities.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60 md:text-lg">
                  For example, a real estate agency must be aware of the
                  cultural nuances in property negotiations and ownership laws.
                </p>
              </motion.section>

              {/* Compliance */}
              <motion.section
                id="compliance"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease }}
                className="mt-20 border-t border-black/10 pt-12 md:mt-28 md:pt-16"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                  07
                </p>

                <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] md:text-5xl">
                  Staying Compliant
                </h2>

                <p className="mt-7 text-base leading-8 text-black/60 md:text-lg">
                  Regulatory compliance is non-negotiable. This includes
                  adhering to labor laws, safety regulations, and
                  industry-specific guidelines.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60 md:text-lg">
                  For example, an IT services company must comply with
                  cybersecurity regulations and data protection laws.
                </p>
              </motion.section>

              {/* Step-by-step */}
              <motion.section
                id="steps"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, ease }}
                className="mt-20 border-t border-black/10 pt-12 md:mt-28 md:pt-16"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                  08
                </p>

                <h2 className="mt-3 text-3xl font-light tracking-[-0.04em] md:text-5xl">
                  Step-by-step guide to set up business in Dubai
                </h2>

                <p className="mt-7 text-base leading-8 text-black/60 md:text-lg">
                  Setting up a business in Dubai involves several critical
                  steps, and having a step-by-step guide can be incredibly
                  helpful for entrepreneurs.
                </p>

                <div className="mt-10 space-y-4">
                  <Step
                    number="01"
                    title="Determine the Type of Legal Entity"
                    text="Decide whether your business will be a Free Zone Limited Liability Company (FZ LLC), Free Zone Establishment (FZE), Limited Liability Company (LLC), or a Sole Establishment. Each has its own benefits and legal implications."
                  />

                  <Step
                    number="02"
                    title="Choose a Trade Name"
                    text="Your trade name should reflect your business activities and comply with the UAE’s naming conventions."
                  />

                  <Step
                    number="03"
                    title="Choose an Office Space"
                    text="Select a location that suits your business needs, whether it’s in a free zone, mainland, or offshore."
                  />

                  <Step
                    number="04"
                    title="Apply for a Business License"
                    text="Depending on your business activity, apply for the appropriate license—commercial, industrial, or professional."
                  />

                  <Step
                    number="05"
                    title="Get Pre-approvals and Obtain Your License"
                    text="Complete any necessary pre-approvals, submit the required documents, and register your business in the UAE."
                  />
                </div>

                {/* Checklist */}
                <div className="mt-14 rounded-[1.5rem] bg-[#111311] p-7 text-white md:p-10">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                    Checklist
                  </p>

                  <h3 className="mt-3 text-2xl font-light md:text-3xl">
                    Company Formation Checklist
                  </h3>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {[
                      "Identify your business activity.",
                      "Select the appropriate legal form.",
                      "Register the trade name.",
                      "Apply for initial approval.",
                      "Draft a Memorandum of Association and local service agent agreement.",
                      "Select a business location.",
                      "Get additional government approvals.",
                      "Submit documents and pay fees.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 border-t border-white/10 pt-4"
                      >
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-white/50"
                        />

                        <span className="text-sm leading-6 text-white/65">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-10 text-base leading-8 text-black/60 md:text-lg">
                  For detailed examples and a comprehensive checklist, you can
                  explore resources provided by local business setup
                  consultants. They offer expert guidance and can help you
                  navigate the complexities of setting up a business in Dubai.
                  Websites like the Official Portal of the UAE Government and
                  Dubai Chamber of Commerce provide valuable information for
                  entrepreneurs.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60 md:text-lg">
                  Remember, while this guide provides a general overview, it’s
                  crucial to consult with local experts for personalized advice
                  tailored to your specific business needs.
                </p>

                <p className="mt-5 text-base leading-8 text-black/60 md:text-lg">
                  This guide aims to provide a clear roadmap for entrepreneurs
                  looking to establish a service business in Dubai, emphasizing
                  the importance of understanding legal requirements, choosing
                  the right jurisdiction, and adhering to the step-by-step
                  process for company formation.
                </p>
              </motion.section>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="px-5 pb-12 md:px-8 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="overflow-hidden rounded-[2rem] bg-[#111311] px-6 py-14 text-white md:rounded-[2.5rem] md:px-12 md:py-20"
          >
            <div className="max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                Need support?
              </p>

              <h2 className="mt-5 text-[clamp(2.4rem,5vw,5rem)] font-light leading-[0.95] tracking-[-0.05em]">
                Need help building
                <br />
                your next team?
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/45 md:text-base">
                Whether you are building a new business or expanding an
                existing team, Antons can help you connect with the right
                talent across the GCC.
              </p>

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Talk to our team

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PREVIOUS / NEXT */}
      <section className="border-t border-black/10 px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {/* Previous */}
          <Link
            href="/blogs/articlefour"
            className="group rounded-[1.5rem] border border-black/10 p-6 transition hover:bg-[#f6f6f3] md:p-8"
          >
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-black/35">
              <ArrowLeft size={14} />
              Previous article
            </div>

            <h3 className="mt-5 max-w-md text-2xl font-light leading-tight tracking-[-0.03em] md:text-3xl">
              The Rise of Fintech in the UAE: A Land of Opportunity for
              Professionals
            </h3>

            <div className="mt-7 flex items-center gap-2 text-sm text-black/50 transition group-hover:text-black">
              Read article
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
          </Link>

          {/* Next */}
          <Link
            href="/blogs/navigating-the-job-market-in-dubai-an-overview-for-newcomers-2024-2025"
            className="group rounded-[1.5rem] border border-black/10 p-6 transition hover:bg-[#f6f6f3] md:p-8"
          >
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-black/35">
              <span>Next article</span>
              <ArrowRight size={14} />
            </div>

            <h3 className="mt-5 max-w-md text-2xl font-light leading-tight tracking-[-0.03em] md:text-3xl">
              Navigating the Job Market in Dubai: An Overview for Newcomers
              (2024 – 2025)
            </h3>

            <div className="mt-7 flex items-center gap-2 text-sm text-black/50 transition group-hover:text-black">
              Read article
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------- */
/* Reusable inline helpers */
/* -------------------------------- */

function InfoItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-black/10 pt-4 first:border-t-0 first:pt-0">
      <p className="text-sm font-medium text-black/75">{title}</p>
      <p className="mt-2 text-sm leading-7 text-black/50">{text}</p>
    </div>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-black/30" />
      <p className="text-base leading-8 text-black/60 md:text-lg">{text}</p>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="grid gap-4 rounded-[1.5rem] border border-black/10 p-6 md:grid-cols-[70px_1fr] md:p-8">
      <span className="text-[11px] tracking-[0.15em] text-black/30">
        {number}
      </span>

      <div>
        <h3 className="text-xl font-medium tracking-[-0.02em]">{title}</h3>

        <p className="mt-3 text-sm leading-7 text-black/55 md:text-base">
          {text}
        </p>
      </div>
    </div>
  );
}