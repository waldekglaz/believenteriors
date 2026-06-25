import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

// Chrome for the public marketing site. The /test holding page lives outside
// this group, so it renders without the header and footer.
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-col">
      <StructuredData />
      <a
        href="#main"
        className="sr-only z-[200] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:uppercase focus:tracking-[0.1em] focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
