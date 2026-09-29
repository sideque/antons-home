import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import TrustStrip from "@/app/components/TrustStrip";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import WhyAntons from "@/app/components/WhyAntons";
import Industries from "@/app/components/Industries";
import Process from "@/app/components/Process";
import ClientLogos from "@/app/components/ClientLogos";
import Testimonials from "@/app/components/Testimonials";
import Insights from "@/app/components/Insights";
import FinalCTA from "@/app/components/FinalCTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f0] text-[#111]">
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <WhyAntons />
      <Industries />
      <Process />
      <ClientLogos />
      <Testimonials />
      <Insights />
      <FinalCTA />
      <Footer />
    </main>
  );
}