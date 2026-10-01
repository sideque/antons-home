"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/#industries" },
  { label: "Insights", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const navVariants = {
  hidden: {
    y: -40,
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease,
      staggerChildren: 0.08,
      delayChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: {
    y: -10,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href.includes("#")) {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-8 md:py-5"
      >
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/80 px-4 shadow-sm backdrop-blur-xl md:px-5">

          {/* LOGO */}
          <motion.a
            href="/"
            variants={itemVariants}
            onClick={() => setOpen(false)}
            className="group flex h-full items-center"
          >
            <motion.img
              src="/images/Logo.webp"
              alt="Antons"
              className="h-[68px] w-[68px] object-contain"
              whileHover={{
                scale: 1.06,
                rotate: 1.5,
              }}
              transition={{
                duration: 0.35,
                ease,
              }}
            />
          </motion.a>

          {/* DESKTOP LINKS */}
          <motion.div
            variants={itemVariants}
            className="hidden items-center gap-7 lg:flex"
          >
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className={`group relative py-2 text-sm transition-colors duration-300 ${
                    active
                      ? "font-medium text-black"
                      : "text-black/55 hover:text-black"
                  }`}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.25 }}
                >
                  {link.label}

                  {/* Active / Hover indicator */}
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] rounded-full bg-black"
                    initial={false}
                    animate={{
                      width: active ? "100%" : "0%",
                      opacity: active ? 1 : 0,
                    }}
                    whileHover={{
                      width: "100%",
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.35,
                      ease,
                    }}
                  />
                </motion.a>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.a
            href="/contact"
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group hidden items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white md:flex"
          >
            Hire Talent

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.a>

          {/* MOBILE BUTTON */}
          <motion.button
            variants={itemVariants}
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.25 }}
                >
                  <X size={19} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  transition={{ duration: 0.25 }}
                >
                  <Menu size={19} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.96,
            }}
            transition={{
              duration: 0.4,
              ease,
            }}
            className="fixed inset-x-4 top-[100px] z-40 rounded-[2rem] border border-black/10 bg-white/95 p-5 shadow-xl backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col">
              {links.map((link, index) => {
                const active = isActive(link.href);

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                      ease,
                    }}
                    whileHover={{
                      x: 6,
                    }}
                    className={`relative border-b border-black/10 py-4 text-lg last:border-0 ${
                      active
                        ? "font-semibold text-black"
                        : "font-medium text-black/60"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {link.label}

                      <ArrowUpRight
                        size={17}
                        className={
                          active ? "opacity-100" : "opacity-30"
                        }
                      />
                    </span>

                    {/* Mobile active indicator */}
                    {active && (
                      <motion.span
                        layoutId="mobile-active"
                        className="absolute bottom-0 left-0 h-[2px] w-8 rounded-full bg-black"
                        transition={{
                          duration: 0.35,
                          ease,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}

              <motion.a
                href="/contact"
                onClick={() => setOpen(false)}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: links.length * 0.07,
                  duration: 0.5,
                  ease,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-black py-3.5 text-sm font-medium text-white"
              >
                Hire Talent
                <ArrowUpRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}