import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuditCta from "@/components/AuditCta";

export const metadata: Metadata = {
  title: "Our Vision | BuildsWebs",
  description:
    "Read the vision of BuildsWebs: to become India's leading digital catalyst for local business dominance, modern search integration, and customer acquisition.",
  alternates: { canonical: "https://buildswebs.com/about/vision" },
  openGraph: {
    title: "Our Vision | BuildsWebs Digital Growth Agency",
    description:
      "Empowering local businesses across Indian cities to become the #1 trusted choice in their communities through digital excellence.",
    url: "https://buildswebs.com/about/vision",
    type: "website",
  },
};

export default function VisionPage() {
  return (
    <div className="sp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Our Vision - BuildsWebs",
            url: "https://buildswebs.com/about/vision",
            description:
              "The strategic vision of BuildsWebs: leading localized digital transformation for Indian enterprises.",
          }),
        }}
      />

      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Vision" },
            ]}
          />
          <h1>Our Vision</h1>
          <p className="lead">
            To build a digital landscape in India where every hardworking local
            service, clinic, and independent business possesses the digital strength
            and reputation to stand proudly as the first choice in their community.
          </p>
          <div className="actions">
            <a
              className="btn"
              href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20partner%20with%20BuildsWebs."
              target="_blank"
              rel="noopener"
            >
              Discuss your growth on WhatsApp
            </a>
            <Link className="btn alt" href="/about">
              Back to About overview
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>The future we are actively creating</h2>
          <div className="list">
            <div className="item">
              <h3>Empowering Tier 1, 2, and 3 Indian cities</h3>
              <p>
                As 5G smartphones and regional internet adoption skyrocket across Noida, Greater Noida, Lucknow, Jaipur, Patna, and beyond, local search intent is exploding. Our vision is to ensure regional Indian businesses capture this local demand before external corporate chains do.
              </p>
            </div>
            <div className="item">
              <h3>Seamless Google-to-WhatsApp commerce</h3>
              <p>
                We envision a friction-free ecosystem where nearby customers search on Google, read authentic reviews, verify credibility on a blazing-fast website, and connect directly on WhatsApp in under 30 seconds.
              </p>
            </div>
            <div className="item">
              <h3>Setting the benchmark for agency integrity</h3>
              <p>
                We aim to redefine how digital agencies operate in India: eliminating misleading retainers, banishing fake metric reporting, and pioneering performance-oriented partnerships that clients celebrate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Our milestones for 2026–2030</h2>
          <div className="list">
            <div className="item">
              <h3>1,000+ local market leaders created</h3>
              <p>Helping over 1,000 independent doctors, retailers, and service providers achieve top-3 visibility on Google Maps across their target service zones.</p>
            </div>
            <div className="item">
              <h3>100% white-hat reputation preservation</h3>
              <p>Ensuring our clients enjoy uncompromised, long-term search dominance with zero black-hat penalties or risky shortcuts.</p>
            </div>
            <div className="item">
              <h3>Next-generation local tech stack</h3>
              <p>Continuously innovating with headless web architectures, lightning-fast Next.js engineering, and intelligent WhatsApp automation workflows.</p>
            </div>
          </div>
        </div>
      </section>

      <AuditCta
        heading="Share our vision of local business excellence?"
        body="Let us help you claim your rightful spot at the top of local search results."
      />
    </div>
  );
}
