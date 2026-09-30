
import {Metadata} from "next";
import Blog from "./Blog";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Antons executive search, permanent recruitment, contract, interim, RPO and fractional CHRO solutions.",
};

export default function BlogsPage() {
  return <Blog />;
}