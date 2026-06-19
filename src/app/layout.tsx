import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { COMING_SOON } from "@/lib/config";
import ComingSoon from "@/components/ComingSoon";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = COMING_SOON
  ? {
      title: "Coming Soon · Believe Interiors",
      description:
        "Believe Interiors — bespoke fitted furniture. Something beautiful is on its way.",
      robots: { index: false, follow: false },
    }
  : {
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
      <body className="min-h-full bg-paper text-umber">
        {/* When the coming-soon gate is on, the holding page replaces every
            route (and renders without the site header/footer). */}
        {COMING_SOON ? <ComingSoon /> : children}
      </body>
    </html>
  );
}
