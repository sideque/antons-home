import { Metadata } from "next";
import {Careers} from "./Careers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Insights | Antons",
  description:
    "Explore Antons insights on talent, recruitment, leadership and the GCC market.",
};

export default function CareersPage() {
  return (
    <main>
      <Navbar />
      <Careers />
      <Footer />
    </main>
  )
}