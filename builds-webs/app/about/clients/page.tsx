import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuditCta from "@/components/AuditCta";

export const metadata: Metadata = {
  title: "Our Clients | Businesses Powered by BuildsWebs",
  description:
    "Discover the diverse industries and local businesses BuildsWebs partners with across India: clinics, retail stores, coaching institutes, and professional services.",
  alternates: { canonical: "https://buildswebs.com/about/clients" },
  openGraph: {
    title: "Our Clients | BuildsWebs",
    description:
      "Explore how BuildsWebs partners with ambitious local businesses across India to drive qualified customer enquiries.",
    url: "https://buildswebs.com/about/clients",
    type: "website",
  },
};

const clientIndustries = [
  {
    sector: "Healthcare & Dental Clinics",
    challenge: "High competition from corporate hospital networks and online aggregators.",
    solution: "Geo-targeted Google Business Profile ranking and verified patient review workflows that establish clinic authority in their neighborhood.",
  },
  {
    sector: "Coaching Institutes & Academies",
    challenge: "Seasonal admission cycles requiring sudden influxes of qualified student enquiries.",
    solution: "High-intent Google Ads search campaigns and instant WhatsApp booking flows for free counseling sessions.",
  },
  {
    sector: "Retail Showrooms & Boutiques",
    challenge: "Driving in-person store visits and footfall against e-commerce giants.",
    solution: "Local Map Pack dominance, product catalogue integration, and click-to-directions Google Maps links.",
  },
  {
    sector: "Home Services & Contractors",
    challenge: "Spammy competitors and unreliable lead sources that charge per shared phone number.",
    solution: "Direct-to-consumer search campaigns where homeowners call and WhatsApp the business directly with zero middlemen.",
  },
  {
    sector: "Legal, Financial & Professional Firms",
    challenge: "Establishing immediate trust and credibility for high-ticket consultations.",
    solution: "Clean, lightning-fast professional websites combined with localized authority citations and thought leadership blogs.",
  },
  {
    sector: "E-commerce & Regional Brands",
    challenge: "Converting regional browsers into repeat online buyers.",
    solution: "Modern, high-converting digital storefronts with seamless UPI, Razorpay, and Cash on Delivery checkout flows.",
  },
];

export default function ClientsPage() {
  return (
    <div className="sp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Our Clients - BuildsWebs",
            url: "https://buildswebs.com/about/clients",
            description:
              "The industries and local enterprises partnering with BuildsWebs for digital growth.",
          }),
        }}
      />

      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Clients" },
            ]}
          />
          <h1>Our Clients</h1>
          <p className="lead">
            We partner with ambitious local business owners who take immense pride
            in their craft and are ready to capture the lion&apos;s share of customers
            searching in their city.
          </p>
          <div className="actions">
            <a
              className="btn"
              href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20discuss%20partnering%20with%20BuildsWebs%20for%20my%20business."
              target="_blank"
              rel="noopener"
            >
              Partner with us on WhatsApp
            </a>
            <Link className="btn alt" href="/about">
              Back to About overview
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>Key sectors we empower across India</h2>
          <p className="intro">
            Every vertical has unique customer search psychology. Here is how we tailor growth across the industries we serve:
          </p>

          <div className="list">
            {clientIndustries.map((item) => (
              <div className="item" key={item.sector}>
                <h3>{item.sector}</h3>
                <p>
                  <strong>The Challenge:</strong> {item.challenge}
                  <br />
                  <span style={{ display: "block", marginTop: "8px", color: "var(--text)" }}>
                    <strong>Our Strategy:</strong> {item.solution}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Who we work best with</h2>
          <div className="list">
            <div className="item">
              <h3>Quality-first operators</h3>
              <p>
                We work best with businesses that genuinely treat their customers well. The best local SEO in the world works 10x faster when combined with authentic 5-star service.
              </p>
            </div>
            <div className="item">
              <h3>Decisive owners looking for sustainable ROI</h3>
              <p>
                We love collaborating with founders, clinic heads, and business directors who value clear communication, speed of execution, and long-term asset building.
              </p>
            </div>
            <div className="item">
              <h3>Zero conflict of interest policy</h3>
              <p>
                To protect our clients, we never accept direct, immediate competitors within the exact same hyper-local micro-market. When you partner with BuildsWebs, our focus is exclusively on winning your territory.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AuditCta
        heading="Wondering if BuildsWebs is the right fit for your sector?"
        body="Reach out today for a candid consultation on your industry's local search volume and competition."
      />
    </div>
  );
}
