import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About | Antons",
  description:
    "Learn about Antons and our approach to executive search, recruitment and talent solutions across the GCC.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutClient />
      <Footer />
    </main>
  )
}