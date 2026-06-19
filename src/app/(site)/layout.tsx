import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Chrome for the public marketing site. The /test holding page lives outside
// this group, so it renders without the header and footer.
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
