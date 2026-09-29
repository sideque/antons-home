import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antons — Exceptional Talent. Exceptional Businesses.",
  description:
    "Antons connects ambitious businesses across the GCC with exceptional talent through executive search and specialist recruitment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}