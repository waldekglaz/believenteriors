import { SITE_URL } from "@/lib/config";
import { contactInfo } from "@/lib/data";

/**
 * LocalBusiness structured data (JSON-LD) — helps Google show the business in
 * local / map results. Refine address, areaServed, openingHours and priceRange
 * once the client confirms their details.
 */
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Believe Interiors",
    description:
      "Bespoke fitted furniture — made-to-measure kitchens, wardrobes and joinery, designed and professionally installed.",
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image.png`,
    logo: `${SITE_URL}/icon.svg`,
    email: contactInfo.email,
    telephone: contactInfo.phone,
    priceRange: "££-£££",
    areaServed: { "@type": "Country", name: "United Kingdom" },
    sameAs: [contactInfo.instagramHref, contactInfo.facebookHref],
  };

  return (
    <script
      type="application/ld+json"
      // Inline JSON-LD; not user input, safe to stringify.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
