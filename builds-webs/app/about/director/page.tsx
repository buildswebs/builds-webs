import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuditCta from "@/components/AuditCta";

export const metadata: Metadata = {
  title: "Meet Our Director | Leadership at BuildsWebs",
  description:
    "Meet the Director of BuildsWebs. Learn about our leadership philosophy, hands-on digital growth approach, and commitment to measurable results for Indian businesses.",
  alternates: { canonical: "https://buildswebs.com/about/director" },
  openGraph: {
    title: "Meet Our Director | BuildsWebs",
    description:
      "Direct leadership, technical excellence, and transparent marketing for businesses across India.",
    url: "https://buildswebs.com/about/director",
    type: "profile",
  },
};

export default function DirectorPage() {
  return (
    <div className="sp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            name: "Director of BuildsWebs",
            url: "https://buildswebs.com/about/director",
            mainEntity: {
              "@type": "Person",
              name: "Director, BuildsWebs",
              jobTitle: "Founder & Managing Director",
              worksFor: {
                "@type": "Organization",
                name: "BuildsWebs",
                url: "https://buildswebs.com",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Greater Noida",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
            },
          }),
        }}
      />

      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Meet Our Director" },
            ]}
          />
          <h1>Meet Our Director</h1>
          <p className="lead">
            &ldquo;When a local business owner trusts us with their marketing, they
            are trusting us with their livelihood. That is why we refuse to treat
            clients like numbers on a spreadsheet.&rdquo;
          </p>
          <div className="actions">
            <a
              className="btn"
              href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20speak%20directly%20with%20the%20Director%20of%20BuildsWebs."
              target="_blank"
              rel="noopener"
            >
              Connect with our Director on WhatsApp
            </a>
            <Link className="btn alt" href="/about">
              Back to About overview
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>A message from leadership</h2>
          <div className="list">
            <div className="item">
              <h3>Why BuildsWebs exists</h3>
              <p>
                Having witnessed countless hardworking Indian business owners get burned by slick sales pitches and lackluster agencies that deliver nothing but automated PDF reports, our Director established BuildsWebs with an engineering-first, outcomes-driven mindset.
              </p>
            </div>
            <div className="item">
              <h3>Hands-on involvement in strategy</h3>
              <p>
                Unlike large corporate agencies where leadership disappears once the contract is signed, our Director stays actively involved in every major local SEO audit, campaign architecture, and technical milestone across our portfolio.
              </p>
            </div>
            <div className="item">
              <h3>Belief in long-term enterprise value</h3>
              <p>
                Short-term hacks and black-hat tricks are cheap and dangerous. We focus on building durable digital assets: high-authority local citations, fast Next.js websites, and genuine 5-star customer reviews that generate sustainable enquiries year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Leadership principles</h2>
          <div className="list">
            <div className="item">
              <h3>Honesty over immediate profit</h3>
              <p>
                If a prospect doesn&apos;t need our services or would get better ROI investing elsewhere, we say so plainly. We only take on clients we know we can tangibly help scale.
              </p>
            </div>
            <div className="item">
              <h3>Technical excellence</h3>
              <p>
                We do not settle for slow, bloated WordPress templates. We invest in cutting-edge web infrastructure, structured data schemas, and modern headless systems to give our clients an unbeatable technical edge.
              </p>
            </div>
            <div className="item">
              <h3>Accessibility</h3>
              <p>
                Our leadership is directly reachable. We pride ourselves on maintaining open WhatsApp communication channels where business owners can get clear answers to their strategic questions without delay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AuditCta
        heading="Discuss your strategic growth directly with our leadership"
        body="Reach out today to review your business goals and explore a tailored local search strategy."
      />
    </div>
  );
}
