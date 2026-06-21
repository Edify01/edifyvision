import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Edify Consulting | Strategic Business Advisory",
  description:
    "Edify Consulting delivers strategic clarity, operational excellence, and leadership development to ambitious organisations. Results-driven advisory for those building to last.",
  keywords: "consulting, business strategy, advisory, leadership, edify consulting, edifyvision",
  openGraph: {
    title: "Edify Consulting",
    description: "Strategic clarity for ambitious organisations.",
    url: "https://edifyvision.com",
    siteName: "Edify Consulting",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
