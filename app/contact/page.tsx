import { Metadata } from "next";
import Contact  from "./Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Antons for executive search, recruitment and talent solutions across the GCC.",
};



export default function ContactPage() {
  return <Contact />;
}