import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/constants";
import { SkipNav } from "@/components/ui/skip-nav";
import { ThemeProvider } from "@/components/ui/theme-provider";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Salil Saurav"
  },
  description: SITE_DESCRIPTION,
  keywords: [
    SITE_NAME,
    "Full-Stack Developer",
    "Laravel Developer",
    "React Developer",
    "Node.js Developer",
    "WordPress Developer",
    "Gurugram"
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    title: SITE_TITLE,
    description:
      "Dark, interactive portfolio showcasing Laravel, React, Node.js, WordPress, APIs, and performance-focused engineering.",
    url: SITE_URL,
    siteName: `${SITE_NAME} Portfolio`,
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SkipNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
