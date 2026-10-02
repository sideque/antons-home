"use client";

import { motion, MotionConfig, type Variants } from "framer-motion";

import {
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { useState, type FormEvent } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];


function ContactHero() {
  return (
    <section className="relative px-5 pb-24 pt-36 md:px-8 md:pb-32 md:pt-44">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
            className="flex flex-col justify-between"
          >
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#191919]/45">
              <span className="h-px w-8 bg-[#191919]/30" />
              Contact us
            </p>

            <div className="relative mt-14 h-40 w-40 md:mt-20 md:h-52 md:w-52">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full border border-[#191919]/[0.08]"
              />

              <img
                src="/images/Logo.webp"
                alt="Antons logo"
                className="relative h-full w-full object-contain"
              />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease }}
          >
            <h1 className="max-w-5xl text-[clamp(3rem,7.5vw,7rem)] font-medium leading-[0.92] tracking-[-0.065em]">
              Let&apos;s talk
              <br />
              about
              <span className="text-[#D45539]/70"> talent.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-[#191919]/55 md:text-lg">
              Whether you&apos;re looking to build your team, find your next
              opportunity or simply understand the market better, we&apos;d
              love to hear from you.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ============================ CONTACT INFO ============================ */

function ContactInfo() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "info@antons.ae",
      href: "mailto:info@antons.ae",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 4 589 6677",
      href: "tel:+97145896677",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, ease }}
      className="flex flex-col justify-between"
    >
      <div>
        <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#191919]/45">
          <span className="h-px w-8 bg-[#191919]/30" />
          Get in touch
        </p>

        <h2 className="mt-7 max-w-xl text-4xl font-medium leading-[0.98] tracking-[-0.05em] md:text-6xl">
          Let&apos;s create something
          <span className="text-[#F08043]"> meaningful.</span>
        </h2>

        <p className="mt-8 max-w-md text-sm leading-6 text-[#191919]/55">
          Tell us what you&apos;re looking for and one of our consultants will
          get back to you shortly.
        </p>
      </div>

      <div className="mt-14 space-y-6 md:mt-20">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              className="group flex w-fit items-center gap-4"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#191919]/10 bg-white">
                <Icon
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#F08043]"
                />
              </span>

              <span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#191919]/45">
                  {item.label}
                </span>

                <span className="mt-1 block text-sm text-[#191919] transition-colors group-hover:text-[#F08043]">
                  {item.value}
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ============================ CONTACT FORM ============================ */

const fields = [
  {
    id: "name",
    label: "Your name",
    type: "text",
    placeholder: "Enter your name",
    autoComplete: "name",
    required: true,
  },
  {
    id: "email",
    label: "Business email",
    type: "email",
    placeholder: "Enter your email",
    autoComplete: "email",
    required: true,
  },
  {
    id: "phone",
    label: "Phone number",
    type: "tel",
    placeholder: "Enter your phone number",
    autoComplete: "tel",
    required: false,
  },
  {
    id: "company",
    label: "Company name",
    type: "text",
    placeholder: "Enter your company",
    autoComplete: "organization",
    required: false,
  },
];

const services = [
  { value: "executive-search", label: "Executive Search" },
  { value: "permanent-recruitment", label: "Permanent Recruitment" },
  { value: "contract-interim", label: "Contract & Interim" },
  { value: "rpo", label: "RPO Solutions" },
  { value: "fractional-chro", label: "Fractional CHRO" },
  {
    value: "emiratization",
    label: "Emiratization & Saudization",
  },
];

const inputClass =
  "w-full rounded-xl border border-[#191919]/10 bg-white px-4 text-base text-[#191919] outline-none transition placeholder:text-[#191919]/30 focus:border-[#D45539]/60 focus:bg-white md:text-sm";

const labelClass = "mb-2 block text-xs text-[#191919]/55";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  /*
    Frontend-only: no backend exists yet, so the enquiry is handed to the
    visitor's email app, addressed to info@antons.ae. Swap this handler for a
    real API call when an endpoint is available.
  */

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const read = (key: string) =>
      String(data.get(key) ?? "").trim();

    const service =
      services.find((s) => s.value === read("service"))?.label ??
      "Not specified";

    const subject = `Enquiry from ${read("name")}${
      read("company") ? `, ${read("company")}` : ""
    }`;

    const body = [
      `Name: ${read("name")}`,
      `Business email: ${read("email")}`,
      `Phone: ${read("phone") || "-"}`,
      `Company: ${read("company") || "-"}`,
      `Required service: ${service}`,
      "",
      read("message"),
    ].join("\n");

    window.location.href = `mailto:info@antons.ae?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, ease }}
      className="rounded-[2rem] border border-[#191919]/10 bg-white p-6 sm:p-8 md:p-12"
    >
      <h3 className="text-3xl font-medium tracking-[-0.04em] md:text-4xl">
        Tell us what you need.
      </h3>

      <form onSubmit={handleSubmit} className="mt-10 space-y-5">

        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className={labelClass}>
                {field.label}
              </label>

              <input
                id={field.id}
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                required={field.required}
                className={`${inputClass} h-14`}
              />
            </div>
          ))}
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Required service
          </label>

          <div className="relative">
            <select
              id="service"
              name="service"
              defaultValue=""
              className={`${inputClass} h-14 cursor-pointer appearance-none pr-12 text-[#191919]/70`}
            >
              <option
                value=""
                disabled
                className="bg-white"
              >
                Select a service
              </option>

              {services.map((service) => (
                <option
                  key={service.value}
                  value={service.value}
                  className="bg-white"
                >
                  {service.label}
                </option>
              ))}
            </select>

            <ChevronDown
              size={17}
              strokeWidth={1.5}
              aria-hidden
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#F08043]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Tell us about your requirement
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="Tell us a little about your hiring requirement..."
            className={`${inputClass} resize-none py-4`}
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.99 }}
          transition={{ duration: 0.3, ease }}
          className="group flex w-full items-center justify-center gap-3 rounded-full border border-[#D45539] bg-white px-6 py-4 text-sm font-medium text-[#D45539]"
        >
          Send enquiry

          <Send
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
          />
        </motion.button>

        <p
          role="status"
          className="min-h-[1.5rem] text-xs leading-6 text-[#191919]/55"
        >
          {submitted
            ? "Your email app should open with your enquiry ready to send. If it doesn't, write to info@antons.ae."
            : ""}
        </p>

      </form>
    </motion.div>
  );
}

/* ============================ MAP VISUAL ============================ */

/*
  The street grid is drawn parallel to Sheikh Zayed Road (~26° off horizontal),
  then the Gulf is painted over it so the coast clips the streets naturally.
*/

const horizontals = Array.from(
  { length: 17 },
  (_, i) => 300 + (i - 8) * 60
);

const verticals = Array.from(
  { length: 25 },
  (_, i) => 600 + (i - 12) * 80
);

const fronds = [-165, -135, -105, -75, -45, -15];

const land = "#FFFFFF";
const sea = "#FFFFFF";
const sage = "240,128,67";

const coast =
  "M0 440 C 300 330 520 235 700 150 C 850 80 1000 90 1200 40";

function MapVisual() {
  return (
    <MotionConfig reducedMotion="user">
      <motion.figure
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-8% 0px" }}
        transition={{ duration: 1.2, ease }}
        aria-label="Stylised map of Dubai showing the Antons office at Al Moosa Tower 2, Dubai World Trade Centre 1"
        className="relative h-[340px] overflow-hidden rounded-[2rem] border border-[#191919]/10 bg-white md:h-[460px] lg:h-[520px]"
      >

        {/* Map artwork — slow breathing keeps it quietly alive */}
        <motion.div
          aria-hidden
          animate={{ scale: [1.03, 1.07, 1.03] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <svg
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid slice"
            className="h-full w-full"
            fill="none"
          >
            <rect
              width="1200"
              height="600"
              fill={land}
            />

            {/* Streets, aligned to the coast */}
            <g transform="rotate(-26 600 300)">
              {horizontals.map((y) => (
                <line
                  key={`h${y}`}
                  x1="-400"
                  x2="1600"
                  y1={y}
                  y2={y}
                  stroke={`rgba(240,128,67,0.06)`}
                />
              ))}

              {verticals.map((x) => (
                <line
                  key={`v${x}`}
                  x1={x}
                  x2={x}
                  y1="-300"
                  y2="900"
                  stroke={`rgba(240,128,67,0.06)`}
                />
              ))}

              {/* City blocks */}
              <g fill={`rgba(240,128,67,0.05)`}>
                <rect
                  x="250"
                  y="190"
                  width="100"
                  height="50"
                  rx="2"
                />

                <rect
                  x="700"
                  y="330"
                  width="120"
                  height="60"
                  rx="2"
                />

                <rect
                  x="860"
                  y="200"
                  width="80"
                  height="70"
                  rx="2"
                />

                <rect
                  x="300"
                  y="350"
                  width="110"
                  height="50"
                  rx="2"
                />

                <rect
                  x="480"
                  y="150"
                  width="90"
                  height="60"
                  rx="2"
                />
              </g>

              {/* Arterials */}
              {[200, 420, 780, 1000].map((x) => (
                <line
                  key={`a${x}`}
                  x1={x}
                  x2={x}
                  y1="-300"
                  y2="900"
                  stroke={`rgba(240,128,67,0.22)`}
                  strokeWidth="2.5"
                />
              ))}

              {[-86, -36, 64, 150].map((offset) => (
                <line
                  key={`p${offset}`}
                  x1="-400"
                  x2="1600"
                  y1={300 + offset}
                  y2={300 + offset}
                  stroke={`rgba(240,128,67,0.2)`}
                  strokeWidth={offset === 64 ? 2.5 : 1.5}
                />
              ))}

              {/* Interchanges */}
              <circle
                cx="420"
                cy="300"
                r="26"
                stroke={`rgba(240,128,67,0.3)`}
              />

              <circle
                cx="780"
                cy="300"
                r="20"
                stroke={`rgba(240,128,67,0.3)`}
              />

              {/* Trade Centre district */}
              <rect
                x="545"
                y="258"
                width="110"
                height="84"
                rx="3"
                fill={`rgba(240,128,67,0.07)`}
                stroke={`rgba(240,128,67,0.35)`}
              />

              {/* Sheikh Zayed Road */}
              <line
                x1="-400"
                x2="1600"
                y1="300"
                y2="300"
                stroke={`rgba(240,128,67,0.5)`}
                strokeWidth="5"
              />

              <motion.line
                x1="-400"
                x2="1600"
                y1="300"
                y2="300"
                stroke="rgba(240,128,67,0.75)"
                strokeWidth="1.5"
                strokeDasharray="3 45"
                animate={{ strokeDashoffset: [0, -96] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Traffic */}
              <motion.circle
                cy="300"
                r="3"
                fill="#F08043"
                animate={{ cx: [-300, 1500] }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.circle
                cy="300"
                r="2.5"
                fill={`rgba(240,128,67,0.8)`}
                animate={{ cx: [1500, -300] }}
                transition={{
                  duration: 22,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <text
                x="880"
                y="286"
                fill="rgba(240,128,67,0.3)"
                fontSize="13"
                letterSpacing="5"
              >
                SHEIKH ZAYED ROAD
              </text>
            </g>

            {/* Arabian Gulf */}
            <path
              d="M0 0 H1200 V40 C 1000 90 850 80 700 150 C 520 235 300 330 0 440 Z"
              fill={sea}
            />

            <path
              d={coast}
              stroke={`rgba(240,128,67,0.35)`}
              strokeWidth="1.2"
            />

            {/* Dubai Creek */}
            <path
              d="M870 82 C 900 150 960 190 1030 215 S 1120 270 1190 300"
              stroke={`rgba(240,128,67,0.3)`}
              strokeWidth="15"
              strokeLinecap="round"
            />

            <path
              d="M870 82 C 900 150 960 190 1030 215 S 1120 270 1190 300"
              stroke={sea}
              strokeWidth="13"
              strokeLinecap="round"
            />

            {/* Palm Jumeirah, abstracted */}
            <g
              stroke={`rgba(240,128,67,0.4)`}
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M228 348 L196 280" />

              {fronds.map((angle) => {
                const rad = (angle * Math.PI) / 180;

                return (
                  <line
                    key={angle}
                    x1="196"
                    y1="280"
                    x2={196 + 32 * Math.cos(rad)}
                    y2={280 + 32 * Math.sin(rad)}
                  />
                );
              })}

              <path
                d="M150 268 A 62 62 0 0 1 248 262"
                opacity="0.5"
              />
            </g>

            {/* Sea labels */}
            <text
              x="90"
              y="110"
              fill="rgba(240,128,67,0.18)"
              fontSize="20"
              fontStyle="italic"
              letterSpacing="6"
            >
              ARABIAN GULF
            </text>

            <text
              x="70"
              y="215"
              fill="rgba(240,128,67,0.25)"
              fontSize="12"
              letterSpacing="4"
            >
              PALM JUMEIRAH
            </text>

            <text
              x="1005"
              y="170"
              fill="rgba(240,128,67,0.25)"
              fontSize="12"
              letterSpacing="4"
            >
              DUBAI CREEK
            </text>
          </svg>
        </motion.div>

        {/* Title and compass */}
        <div className="pointer-events-none absolute left-6 top-6 md:left-9 md:top-9">
          <p className="text-4xl font-medium italic leading-none tracking-[-0.05em] text-[#191919] md:text-6xl">
            Dubai
          </p>

          <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[#191919]/45">
            25.23° N · 55.29° E
          </p>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute right-6 top-6 flex flex-col items-center gap-1 text-[10px] tracking-[0.2em] text-[#191919]/45 md:right-9 md:top-9"
        >
          N

          <span className="h-8 w-px bg-[#191919]/30" />
        </div>

        <p className="pointer-events-none absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.22em] text-[#191919]/45 md:bottom-9 md:right-9">
          Trade Centre district
        </p>

        {/* Marker */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-14 w-14 items-center justify-center">

            <motion.span
              aria-hidden
              animate={{
                scale: [1, 2.4],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute inset-0 rounded-full border border-[#D45539]/40"
            />

            <motion.span
              aria-hidden
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-[-14px] rounded-full border border-[#F08043]/50"
            />

            <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#D45539] bg-white text-[#D45539]">
              <MapPin size={22} strokeWidth={1.5} />
            </span>
          </div>
        </div>

        {/* Marker label */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 mt-12 -translate-x-1/2 md:ml-12 md:mt-0 md:-translate-y-1/2 md:translate-x-0">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              ease,
            }}
            className="whitespace-nowrap rounded-xl border border-[#191919]/10 bg-white px-4 py-3 text-center md:text-left"
          >
            <span className="block text-[11px] font-medium tracking-[0.3em] text-[#F08043]">
              ANTONS
            </span>

            <span className="mt-1 block text-sm text-[#191919]">
              Al Moosa Tower 2
            </span>

            <span className="block text-xs text-[#191919]/55">
              Dubai, UAE
            </span>
          </motion.div>
        </div>

      </motion.figure>
    </MotionConfig>
  );
}

/* ============================ LOCATION SECTION ============================ */

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Al+Moosa+Tower+2+Dubai";

function LocationSection() {
  return (
    <section className="bg-white px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease }}
          className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div>

            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-[#191919]/40">
              <span className="h-px w-8 bg-[#191919]/30" />
              Our location
            </p>

            <h2 className="mt-7 max-w-3xl text-[clamp(2.8rem,6vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.065em]">
              Based in
              <br />
              <span className="text-[#D45539]/70">
                Dubai.
              </span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-6 text-[#191919]/50">
              Al Moosa Tower 2, Dubai World Trade Centre 1, Dubai, UAE.
            </p>

          </div>

          <motion.a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease }}
            className="group flex w-fit items-center gap-3 rounded-full border border-[#191919] bg-white px-6 py-3.5 text-sm font-medium text-[#191919]"
          >
            Open in Maps

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
            />
          </motion.a>

        </motion.div>

        <div className="mt-14 md:mt-20">
          <MapVisual />
        </div>

      </div>
    </section>
  );
}


export default function Contact() {
  return (
    <main className="overflow-x-clip bg-[#FFFFFF] text-[#191919]">

      <ContactHero />

      <section className="bg-white px-5 py-28 text-[#191919] md:px-8 md:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <LocationSection />

    </main>
  );
}