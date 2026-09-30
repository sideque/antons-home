import { Metadata } from "next";
import {Careers} from "./Careers";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Explore Antons insights on talent, recruitment, leadership and the GCC market.",
};

export default function CareersPage() {
  return <Careers />;
}