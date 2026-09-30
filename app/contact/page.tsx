import { Metadata } from "next";
import Contact  from "./Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact | Antons",
  description:
    "Contact Antons for executive search, recruitment and talent solutions across the GCC.",
};



export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <Contact />
      <Footer />
    </main>
  )
}