import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://buildswebs.com"),
  title: {
    default:
      "BuildsWebs | Local SEO, Google Ads and Websites for Local Businesses in India",
    template: "%s | BuildsWebs",
  },
  description:
    "BuildsWebs is a digital growth agency in Greater Noida. We help local businesses across India appear first when nearby customers search. Ask for a free audit.",
  openGraph: {
    title: "BuildsWebs | Digital growth agency",
    description:
      "We help local businesses across India get found on Google and turn searches into enquiries.",
    url: "https://buildswebs.com/",
    type: "website",
  },
  alternates: {
    canonical: "https://buildswebs.com/",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "BuildsWebs",
              url: "https://buildswebs.com/",
              telephone: "+91-8287593102",
              areaServed: "IN",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Greater Noida",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
