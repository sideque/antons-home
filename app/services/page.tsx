import type { Metadata } from "next";
import Services from "./Services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Services | Antons",
  description:
    "Explore Antons executive search, permanent recruitment, contract, interim, RPO and fractional CHRO solutions.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <Services />
      <Footer />
    </main>
  );
}