import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://antons-home.vercel.app"),

  title: {
    default: "Antons | Executive Search & Talent Solutions",
    template: "%s | Antons",
  },

  description:
    "Antons connects ambitious businesses across the GCC with exceptional talent through executive search, recruitment and specialist talent solutions.",

  keywords: [
    "Antons",
    "Executive Search",
    "Talent Solutions",
    "Recruitment",
    "GCC Recruitment",
    "Dubai Recruitment",
    "UAE Recruitment",
    "Executive Recruitment Dubai",
  ],

  authors: [{ name: "Antons" }],
  creator: "Antons",

  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://antons-home.vercel.app",
    siteName: "Antons",
    title: "Antons | Executive Search & Talent Solutions",
    description:
      "Connecting exceptional talent with ambitious businesses across the GCC.",
    images: [
      {
        url: "/images/Logo.png",
        width: 800,
        height: 800,
        alt: "Antons",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Antons | Executive Search & Talent Solutions",
    description:
      "Connecting exceptional talent with ambitious businesses across the GCC.",
    images: ["/images/Logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/images/Logo.png",
  },
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