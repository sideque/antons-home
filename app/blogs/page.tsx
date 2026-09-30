
import {Metadata} from "next";
import Blog from "./Blog";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Services | Antons",
  description:
    "Explore Antons executive search, permanent recruitment, contract, interim, RPO and fractional CHRO solutions.",
};

export default function BlogsPage() {
  return (
    <main>
      <Navbar />
      <Blog />
      <Footer />
    </main>
  )
}