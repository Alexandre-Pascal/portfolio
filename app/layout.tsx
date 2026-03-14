import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/context/LocaleContext";
import { LocaleKeyWrapper } from "@/components/LocaleKeyWrapper";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Développeur Full-Stack",
  description:
    "Portfolio professionnel — Formation, expériences, projets et compétences. Développeur full-stack React, Next.js & Node.js.",
  openGraph: {
    title: "Portfolio | Développeur Full-Stack",
    description:
      "Portfolio professionnel — Formation, expériences, projets et compétences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${dmSans.variable} font-sans antialiased bg-background text-foreground min-h-screen`}
      >
        <LocaleProvider>
          <Header />
          <main className="pt-16">
            <LocaleKeyWrapper>{children}</LocaleKeyWrapper>
          </main>
          <Footer />
          <ScrollToTop />
        </LocaleProvider>
      </body>
    </html>
  );
}
