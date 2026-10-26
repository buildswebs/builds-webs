import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuditCta from "@/components/AuditCta";

export const metadata: Metadata = {
  title: "Our Achievements & Track Record | BuildsWebs",
  description:
    "Explore the verifiable track record of BuildsWebs: Google Map Pack top-3 rankings delivered, thousands of customer calls generated, and 100% white-hat local SEO compliance.",
  alternates: { canonical: "https://buildswebs.com/about/achievements" },
  openGraph: {
    title: "Our Achievements | BuildsWebs",
    description:
      "Proven milestones in local search rankings, inbound phone enquiries, and revenue growth for Indian local businesses.",
    url: "https://buildswebs.com/about/achievements",
    type: "website",
  },
};

const keyMetrics = [
  {
    number: "Top 3",
    label: "Google Maps Rankings",
    desc: "Achieved for competitive local keywords ('dentist near me', 'interior designer', 'coaching classes') across target city zones.",
  },
  {
    number: "300%+",
    label: "Average Call Volume Increase",
    desc: "Measured increase in direct phone calls and WhatsApp enquiries within 90 days of full local optimization.",
  },
  {
    number: "100%",
    label: "White-Hat Compliance",
    desc: "Zero Google Business Profile penalties, suspensions, or black-hat algorithmic slapbacks across all managed campaigns.",
  },
  {
    number: "< 1.2s",
    label: "Average Website Load Speed",
    desc: "Sub-second mobile speed performance engineered through modern Next.js static and server rendering architectures.",
  },
];

export default function AchievementsPage() {
  return (
    <div className="sp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Our Achievements - BuildsWebs",
            url: "https://buildswebs.com/about/achievements",
            description:
              "Milestones, performance metrics, and search dominance track record achieved by BuildsWebs.",
          }),
        }}
      />

      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Achievements" },
            ]}
          />
          <h1>Our Achievements</h1>
          <p className="lead">
            We let hard data and customer enquiry metrics speak for themselves. Here
            is a transparent look at the measurable milestones we have achieved for
            businesses across India.
          </p>
          <div className="actions">
            <a
              className="btn"
              href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20achieve%20similar%20search%20rankings%20for%20my%20business."
              target="_blank"
              rel="noopener"
            >
              Get top-3 rankings on WhatsApp
            </a>
            <Link className="btn alt" href="/about">
              Back to About overview
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>Proven metrics that matter</h2>
          <div className="list">
            {keyMetrics.map((item) => (
              <div className="item" key={item.label}>
                <h3 style={{ fontSize: "28px", color: "var(--accent)" }}>
                  {item.number}
                  <span
                    style={{
                      display: "block",
                      fontSize: "18px",
                      color: "var(--text)",
                      marginTop: "4px",
                    }}
                  >
                    {item.label}
                  </span>
                </h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Key agency milestones</h2>
          <div className="list">
            <div className="item">
              <h3>Cracking high-density NCR & regional markets</h3>
              <p>
                Successfully elevating service businesses to the top of Google Maps in intensely competitive territories across Greater Noida, Noida, Delhi, Ghaziabad, and Gurugram against long-standing competitors.
              </p>
            </div>
            <div className="item">
              <h3>Eliminating lead waste with WhatsApp capture</h3>
              <p>
                Pioneered lightweight click-to-WhatsApp landing funnels for Indian local clients, replacing bulky contact forms that were suffering from 80%+ drop-off rates with immediate 1-tap conversations.
              </p>
            </div>
            <div className="item">
              <h3>Full-stack headless Next.js delivery</h3>
              <p>
                Transitioned away from sluggish, insecure legacy CMS setups to state-of-the-art Next.js and Sanity CMS platforms, giving our clients a permanent speed and SEO advantage over competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AuditCta
        heading="Ready to turn your local search presence into an achievement story?"
        body="Let us analyze your market and craft a customized roadmap to the top 3 on Google Maps."
      />
    </div>
  );
}
