import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuditCta from "@/components/AuditCta";

export const metadata: Metadata = {
  title: "Our Mission | BuildsWebs",
  description:
    "Discover the mission driving BuildsWebs: empowering Indian local businesses and MSMEs with high-impact search rankings, transparent systems, and sustainable customer growth.",
  alternates: { canonical: "https://buildswebs.com/about/mission" },
  openGraph: {
    title: "Our Mission | BuildsWebs Digital Growth Agency",
    description:
      "To help every honest local business in India get found on Google, win local trust, and thrive without breaking the bank.",
    url: "https://buildswebs.com/about/mission",
    type: "website",
  },
};

export default function MissionPage() {
  return (
    <div className="sp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Our Mission - BuildsWebs",
            url: "https://buildswebs.com/about/mission",
            description:
              "The core mission of BuildsWebs: providing transparent, high-ROI local digital marketing for Indian businesses.",
          }),
        }}
      />

      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Mission" },
            ]}
          />
          <h1>Our Mission</h1>
          <p className="lead">
            To make modern digital growth transparent, accessible, and reliably
            profitable for Indian local businesses—giving them the search power to
            outperform large aggregator directories and dominate their immediate
            territory.
          </p>
          <div className="actions">
            <a
              className="btn"
              href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20discuss%20my%20business%20goals%20with%20BuildsWebs."
              target="_blank"
              rel="noopener"
            >
              Start a conversation on WhatsApp
            </a>
            <Link className="btn alt" href="/about">
              Back to About overview
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>What drives our mission every day</h2>
          <div className="list">
            <div className="item">
              <h3>Ending reliance on expensive middlemen</h3>
              <p>
                For years, local businesses in India paid exorbitant fees to yellow-page directories and listing aggregators only to receive shared, low-quality leads. Our mission is to build independent digital assets—your own website and Google Business Profile—so customers come straight to you.
              </p>
            </div>
            <div className="item">
              <h3>Democratizing local search dominance</h3>
              <p>
                You don&apos;t need a multi-crore marketing budget to be #1 in your locality. By implementing precise local SEO, genuine review acquisition, and fast mobile landing pages, we put local clinics, stores, and professionals ahead of national conglomerates.
              </p>
            </div>
            <div className="item">
              <h3>Turning curiosity into verified enquiries</h3>
              <p>
                Clicks don&apos;t pay the rent. Our mission is centered strictly on high-intent conversions: phone calls, WhatsApp messages, booking inquiries, and store visits that turn into repeat revenue for our partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Our promises to every partner</h2>
          <div className="list">
            <div className="item">
              <h3>Honest assessments only</h3>
              <p>
                If your business is not ready for paid ads or would benefit more from organic Google Maps optimization first, we tell you directly. We never recommend services you do not need.
              </p>
            </div>
            <div className="item">
              <h3>Ethical white-hat practices</h3>
              <p>
                Zero spam citations or shady techniques that risk getting your Google profile suspended. We build durable, long-term search equity that strengthens your brand year after year.
              </p>
            </div>
            <div className="item">
              <h3>Measurable financial ROI</h3>
              <p>
                Every monthly review is focused on cost-per-enquiry and revenue growth. Our success is directly tied to the expansion of your enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AuditCta
        heading="Ready to see what local search can do for your business?"
        body="Let us review your current Google position and show you where your biggest customer growth opportunities lie."
      />
    </div>
  );
}
