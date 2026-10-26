import type { Metadata } from "next";
import AuditCta from "@/components/AuditCta";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceLinks from "@/components/ServiceLinks";

export const metadata: Metadata = {
  title: "Google Business Profile",
  description:
    "Google Business Profile setup and management for local businesses in India. Appear in map results, get calls and messages.",
  alternates: { canonical: "https://buildswebs.com/services/google-business-profile" },
};

export default function GbpPage() {
  return (
    <div className="sp">
      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Google Business Profile" }]} />
          <h1>Google Business Profile setup and management</h1>
          <p className="lead">Your Google Business Profile is what appears in map results when people search for you. We set it up, verify it and keep it active, so it shows accurate details and brings calls and messages.</p>
          <div className="actions">
            <a className="btn" href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Google%20Business%20Profile%20for%20my%20business." target="_blank" rel="noopener">Ask about Google Business Profile on WhatsApp</a>
            <a className="btn alt" href="/services">See all services</a>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>What is included</h2>
          <div className="list">
            {[
              { title: "Setup and verification", desc: "We create or claim your profile and complete Google's verification." },
              { title: "Categories and services", desc: "The right primary category, and your services listed accurately." },
              { title: "Photos and posts", desc: "Real photos and regular updates that show the business is active." },
              { title: "Reviews and questions", desc: "Replies to reviews and answers to common questions." },
              { title: "Monthly insights", desc: "We review calls, direction requests and website clicks, and act on them." },
            ].map((i) => <div className="item" key={i.title}><h3>{i.title}</h3><p>{i.desc}</p></div>)}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Who this is for</h2>
          <p className="intro">Businesses with a shop, clinic or office, and service businesses that travel to customers, who want to be found in map results.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Common questions</h2>
          <div className="list">
            <details><summary>Does Google charge for a business profile?</summary><p>No. The profile is free. You pay us for the setup and ongoing work, not for the listing.</p></details>
            <details><summary>What if my profile gets suspended?</summary><p>Suspensions usually come from guideline issues such as address or category problems. We find the cause and submit a reinstatement request, though the decision is Google&apos;s.</p></details>
            <details><summary>Can I have a profile without a shop?</summary><p>Yes. A service-area business can hide its address and list the areas it serves.</p></details>
          </div>
        </div>
      </section>

      <AuditCta />
      <ServiceLinks exclude={["/services/google-business-profile"]} />
    </div>
  );
}
