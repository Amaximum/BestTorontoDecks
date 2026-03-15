import "./globals.css";
import type { Metadata } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const headingFont = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading"
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: {
    default: "Best Toronto Decks",
    template: "%s | Best Toronto Decks"
  },
  description:
    "Custom deck and fence builders in Toronto. Premium materials, modern design, and expert craftsmanship.",
  keywords: [
    "deck builder toronto",
    "fence builder toronto",
    "custom decks",
    "composite decking",
    "deck contractor"
  ],
  metadataBase: new URL("https://besttorontodecks.com"),
  openGraph: {
    title: "Best Toronto Decks",
    description:
      "Custom deck and fence builders in Toronto. Premium materials, modern design, and expert craftsmanship.",
    url: "https://besttorontodecks.com",
    siteName: "Best Toronto Decks",
    locale: "en_CA",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
