"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Antons for executive search, recruitment and talent solutions across the GCC.",
};



export default function ContactPage() {
  return (
    <main className="bg-[#f5f5f0] text-[#111311]">

      {/* HERO */}
      <section className="px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

            {/* LEFT */}
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                Contact us
              </p>

              <img
                src="/images/Logo.png"
                alt="Antons"
                className="mt-16 h-40 w-40 object-contain md:h-52 md:w-52"
              />
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="max-w-5xl text-5xl font-medium leading-[0.96] tracking-[-0.055em] md:text-7xl lg:text-[6.5rem]">
                Let&apos;s talk
                <br />
                about
                <span className="text-black/30"> talent.</span>
              </h1>

              <p className="mt-10 max-w-2xl text-base leading-7 text-black/55 md:text-lg">
                Whether you&apos;re looking for exceptional talent or exploring
                your next career opportunity, we&apos;re here to help.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="bg-[#111311] px-5 py-28 text-white md:px-8 md:py-40">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

            {/* CONTACT DETAILS */}
            <div>

              <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                Get in touch
              </p>

              <h2 className="mt-6 max-w-md text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-5xl">
                Today&apos;s ideas need
                <span className="text-white/30"> today&apos;s resources.</span>
              </h2>

              <div className="mt-12 space-y-8">

                {/* PHONE */}
                <a
                  href="tel:+971521683827"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 transition group-hover:bg-white group-hover:text-black">
                    <Phone size={17} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                      Call us
                    </p>

                    <p className="mt-2 text-base text-white/75 transition group-hover:text-white">
                      +971 52 168 3827
                    </p>
                  </div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:info@antons.ae"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 transition group-hover:bg-white group-hover:text-black">
                    <Mail size={17} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                      Mail us
                    </p>

                    <p className="mt-2 text-base text-white/75 transition group-hover:text-white">
                      info@antons.ae
                    </p>
                  </div>
                </a>

                {/* LOCATION */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10">
                    <MapPin size={17} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/30">
                      Visit us
                    </p>

                    <p className="mt-2 max-w-xs text-base leading-6 text-white/75">
                      Al Moosa Tower 2,
                      <br />
                      Dubai World Trade Centre 1,
                      <br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-10"
            >

              <div className="mb-9">
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Get in touch
                </p>

                <h3 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
                  Tell us what you need.
                </h3>
              </div>

              <form className="space-y-5">

                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs text-white/40"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/30"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs text-white/40"
                  >
                    Business email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/30"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs text-white/40"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/30"
                  />
                </div>

                {/* COMPANY */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-xs text-white/40"
                  >
                    Company name
                  </label>

                  <input
                    id="company"
                    type="text"
                    placeholder="Enter your company"
                    className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/30"
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-xs text-white/40"
                  >
                    Required service
                  </label>

                  <select
                    id="service"
                    defaultValue=""
                    className="h-14 w-full rounded-xl border border-white/10 bg-[#191b19] px-4 text-sm text-white/70 outline-none focus:border-white/30"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="executive-search">
                      Executive Search
                    </option>
                    <option value="permanent-recruitment">
                      Permanent Recruitment
                    </option>
                    <option value="contract-interim">
                      Contract &amp; Interim
                    </option>
                    <option value="rpo">
                      RPO Solutions
                    </option>
                    <option value="fractional-chro">
                      Fractional CHRO
                    </option>
                    <option value="emiratization">
                      Emiratization &amp; Saudization
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs text-white/40"
                  >
                    Tell us about your requirement
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us a little about your hiring requirement..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white outline-none placeholder:text-white/20 transition focus:border-white/30"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  Send enquiry

                  <Send
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MAP / LOCATION */}
      <section className="bg-[#e1e4dc] px-5 py-28 md:px-8 md:py-36">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                Our location
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl">
                Based in
                <span className="text-black/30"> Dubai.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-black/50">
                Al Moosa Tower 2, Dubai World Trade Centre 1, Dubai, UAE.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Al+Moosa+Tower+2+Dubai"
              target="_blank"
              rel="noreferrer"
              className="group flex w-fit items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.02]"
            >
              Open in Maps

              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>

          <div className="mt-14 flex min-h-[280px] items-center justify-center overflow-hidden rounded-[2rem] bg-[#191b19]">

            <div className="text-center">

              <MapPin
                size={42}
                strokeWidth={1}
                className="mx-auto text-white/60"
              />

              <p className="mt-5 text-sm text-white/50">
                Dubai, United Arab Emirates
              </p>

              <p className="mt-2 text-xs text-white/25">
                Al Moosa Tower 2 · Dubai World Trade Centre 1
              </p>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}