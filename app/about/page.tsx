import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description: 
  "Learn about Antons and our approach to executive search, recruitment and talent solutions across the GCC.",
};

export default function AboutPage() {
    return <AboutClient />;
}