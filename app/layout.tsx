import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://salilsaurav.free.nf"),
  title: {
    default: "Salil Saurav | Full-Stack Developer",
    template: "%s | Salil Saurav"
  },
  description:
    "Portfolio of Salil Saurav, a full-stack developer specializing in Laravel, React, Node.js, WordPress, APIs, and scalable web applications.",
  keywords: [
    "Salil Saurav",
    "Full-Stack Developer",
    "Laravel Developer",
    "React Developer",
    "Node.js Developer",
    "WordPress Developer",
    "Gurugram"
  ],
  authors: [{ name: "Salil Saurav" }],
  creator: "Salil Saurav",
  openGraph: {
    title: "Salil Saurav | Full-Stack Developer",
    description:
      "Dark, interactive portfolio showcasing Laravel, React, Node.js, WordPress, APIs, and performance-focused engineering.",
    url: "https://salilsaurav.free.nf",
    siteName: "Salil Saurav Portfolio",
    locale: "en_IN",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
