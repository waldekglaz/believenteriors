import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Believe Interiors — Fitted Furniture & Bespoke Joinery",
    template: "%s · Believe Interiors",
  },
  description:
    "Quality craftsmanship. Timeless design. Built around you. Made-to-measure fitted wardrobes, kitchens, studies and media walls, professionally installed.",
  openGraph: {
    title: "Believe Interiors",
    description: "Quality craftsmanship. Timeless design. Built around you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper text-umber">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
