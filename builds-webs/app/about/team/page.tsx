import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuditCta from "@/components/AuditCta";

export const metadata: Metadata = {
  title: "Our Team | BuildsWebs Experts & Growth Strategists",
  description:
    "Meet the skilled team behind BuildsWebs: local SEO specialists, Google Ads strategists, Next.js web engineers, and WhatsApp conversion architects.",
  alternates: { canonical: "https://buildswebs.com/about/team" },
  openGraph: {
    title: "Our Team | BuildsWebs",
    description:
      "A dedicated group of passionate local search specialists and web engineers committed to scaling your business.",
    url: "https://buildswebs.com/about/team",
    type: "website",
  },
};

const teamRoles = [
  {
    role: "Local SEO Strategists",
    focus: "Google Business Profile optimization, local citation architecture, geo-grid tracking, and organic map pack rankings.",
    impact: "Places your business right in front of high-intent customers searching 'near me' in your city.",
  },
  {
    role: "Google Ads & PPC Engineers",
    focus: "Hyper-localized search campaigns, negative keyword sculpting, call-only ad setups, and budget efficiency.",
    impact: "Generates instant, qualified inbound enquiries while protecting your ad spend from accidental or irrelevant clicks.",
  },
  {
    role: "Web & Performance Developers",
    focus: "Next.js, modern headless architectures, mobile-first responsiveness, and sub-second load times.",
    impact: "Ensures impatient mobile shoppers never bounce due to slow loading speeds or clunky page layouts.",
  },
  {
    role: "WhatsApp & Conversion Copywriters",
    focus: "Persuasive headline crafting, click-to-chat onboarding flows, and automated lead capture templates.",
    impact: "Turns casual website visitors into eager WhatsApp inquiries and scheduled bookings within moments.",
  },
];

export default function TeamPage() {
  return (
    <div className="sp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Our Team - BuildsWebs",
            url: "https://buildswebs.com/about/team",
            description:
              "The technical and growth marketing team driving results at BuildsWebs.",
          }),
        }}
      />

      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Our Team" },
            ]}
          />
          <h1>Our Team</h1>
          <p className="lead">
            Behind every top-ranked Google Business Profile and fast website is a
            dedicated team of specialists obsessed with data, technical precision,
            and real-world business results.
          </p>
          <div className="actions">
            <a
              className="btn"
              href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20connect%20with%20the%20BuildsWebs%20team."
              target="_blank"
              rel="noopener"
            >
              Connect with our team
            </a>
            <Link className="btn alt" href="/about">
              Back to About overview
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>Specialists, not generalists</h2>
          <p className="intro">
            We don&apos;t believe in one-size-fits-all digital marketing. Our team brings deep specialization across every pillar required to dominate local search.
          </p>

          <div className="list">
            {teamRoles.map((item) => (
              <div className="item" key={item.role}>
                <h3>{item.role}</h3>
                <p>
                  <strong>Focus:</strong> {item.focus}
                  <br />
                  <span style={{ display: "block", marginTop: "8px", color: "var(--text)" }}>
                    <strong>Client Outcome:</strong> {item.impact}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>How our team collaborates with you</h2>
          <div className="list">
            <div className="item">
              <h3>Direct channel access</h3>
              <p>
                No gatekeepers or layers of account managers. You communicate directly with the strategists and developers executing your campaigns via dedicated WhatsApp communication channels.
              </p>
            </div>
            <div className="item">
              <h3>Continuous education & algorithm monitoring</h3>
              <p>
                Google updates its local search algorithms hundreds of times a year. Our team analyzes search patent filings, algorithmic shifts, and local ranking factors daily to keep your listings ahead.
              </p>
            </div>
            <div className="item">
              <h3>Hands-on execution</h3>
              <p>
                From writing schema markup to auditing citation consistency across Indian directories, we do the heavy lifting so you can focus on serving your clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AuditCta
        heading="Put our experienced team in your corner"
        body="Schedule a quick strategy session to review your local search ranking potential."
      />
    </div>
  );
}
