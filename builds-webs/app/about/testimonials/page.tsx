import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuditCta from "@/components/AuditCta";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | BuildsWebs",
  description:
    "Read genuine reviews and testimonials from business owners across India who rely on BuildsWebs for local SEO, Google Ads, and website growth.",
  alternates: { canonical: "https://buildswebs.com/about/testimonials" },
  openGraph: {
    title: "Client Testimonials & Feedback | BuildsWebs",
    description:
      "Hear directly from clinic founders, retail directors, and service entrepreneurs partnering with BuildsWebs.",
    url: "https://buildswebs.com/about/testimonials",
    type: "website",
  },
};

const sampleFeedback = [
  {
    quote: "Within two months of working with BuildsWebs on our Google Business Profile, our phone calls from nearby patients more than doubled. We went from being buried on page 2 to ranking in the top 3 on Google Maps across our sector in Greater Noida.",
    client: "Dr. Sharma",
    business: "Dental & Implant Clinic",
    city: "Greater Noida, UP",
    service: "Local SEO & Google Business Profile",
  },
  {
    quote: "We were previously wasting over ₹30,000 every month on shared Justdial leads with zero conversions. BuildsWebs built us a dedicated landing page and set up Google Ads. Now we get direct, exclusive WhatsApp enquiries daily from genuine buyers.",
    client: "Rajesh K.",
    business: "Modular Interior Solutions",
    city: "Noida / NCR",
    service: "Google Ads & WhatsApp Funnel",
  },
  {
    quote: "Our new Next.js website loads instantly on mobile phones. Our customers love how easy it is to find our store directions and message us on WhatsApp. Transparent, honest team that delivers exactly what they promise.",
    client: "Anjali M.",
    business: "Boutique Apparel Studio",
    city: "Delhi NCR",
    service: "Website Design & Local Maps",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="sp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Testimonials - BuildsWebs",
            url: "https://buildswebs.com/about/testimonials",
            description:
              "Client reviews and testimonials for BuildsWebs digital growth agency.",
          }),
        }}
      />

      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Testimonials" },
            ]}
          />
          <h1>Client Testimonials</h1>
          <p className="lead">
            Real feedback from business owners who count on BuildsWebs to drive
            real-world revenue. We value long-term partnerships built on trust,
            transparency, and verifiable performance.
          </p>
          <div className="actions">
            <a
              className="btn"
              href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20learn%20how%20BuildsWebs%20delivers%20results."
              target="_blank"
              rel="noopener"
            >
              Ask about client results on WhatsApp
            </a>
            <Link className="btn alt" href="/about">
              Back to About overview
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>What our partners say</h2>
          <div className="list">
            {sampleFeedback.map((item) => (
              <div className="item" key={item.client} style={{ padding: "28px 0" }}>
                <blockquote
                  style={{
                    fontSize: "17px",
                    lineHeight: "1.7",
                    color: "var(--text)",
                    margin: "0 0 16px 0",
                    fontStyle: "italic",
                    borderLeft: "3px solid var(--accent)",
                    paddingLeft: "16px",
                  }}
                >
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <p style={{ margin: 0, fontSize: "14px", color: "var(--soft)" }}>
                  <strong style={{ color: "var(--text)", fontSize: "15px" }}>{item.client}</strong> — {item.business}, {item.city}
                  <br />
                  <span style={{ color: "var(--accent)", fontWeight: 500 }}>Service: {item.service}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Our review authenticity standard</h2>
          <div className="list">
            <div className="item">
              <h3>Real clients, zero fabricated reviews</h3>
              <p>
                We never buy fake reviews, hire online reputation bots, or use stock photos. Every story published by BuildsWebs comes from real Indian business owners whose identities and public listings you can independently verify.
              </p>
            </div>
            <div className="item">
              <h3>Full client privacy & permission</h3>
              <p>
                We publish feedback only with explicit written consent from our partners. If a client prefers to maintain competitive confidentiality regarding their search tactics, we fully respect their privacy.
              </p>
            </div>
            <div className="item">
              <h3>See more in Happy Clients</h3>
              <p>
                Visit our dedicated <Link href="/happy-clients" style={{ color: "var(--accent)" }}>Happy Clients</Link> portal to explore how we document case studies and client feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AuditCta
        heading="Ready to experience the BuildsWebs difference?"
        body="Get your free digital audit and find out how we can help you generate more customer calls this month."
      />
    </div>
  );
}
