import type { Metadata } from "next";
import AuditCta from "@/components/AuditCta";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceLinks from "@/components/ServiceLinks";

export const metadata: Metadata = {
  title: "Google Ads",
  description:
    "Google Ads management for local businesses in India. Search campaigns aimed at calls and messages, with a monthly budget cap you control.",
  alternates: { canonical: "https://buildswebs.com/services/google-ads" },
};

export default function GoogleAdsPage() {
  return (
    <main className="sp">
      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Google Ads" }]} />
          <h1>Google Ads that aim for calls and messages</h1>
          <p className="lead">Google Ads puts your business in front of people who are searching right now. We set up search campaigns aimed at calls and messages, with a monthly budget cap that you control.</p>
          <div className="actions">
            <a className="btn" href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Google%20Ads%20for%20my%20business." target="_blank" rel="noopener">Ask about Google Ads on WhatsApp</a>
            <a className="btn alt" href="/services">See all services</a>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>What is included</h2>
          <div className="list">
            {[
              { title: "Account and tracking", desc: "Your own Google Ads account, with call and WhatsApp tracking so we know what works." },
              { title: "Keywords and ads", desc: "Campaigns built around high-intent searches, with plain and specific ad text." },
              { title: "Location targeting", desc: "Ads shown only in the areas you serve." },
              { title: "Landing page review", desc: "We check the page visitors land on, so clicks turn into enquiries." },
              { title: "Monthly reports", desc: "Clear reports on spend, clicks and enquiries." },
            ].map((i) => <div className="item" key={i.title}><h3>{i.title}</h3><p>{i.desc}</p></div>)}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Who this is for</h2>
          <p className="intro">Businesses that want enquiries sooner than SEO alone can bring, and can set a steady monthly ad budget.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Common questions</h2>
          <div className="list">
            <details><summary>How much should I spend on ads?</summary><p>Enough to collect useful data over several weeks. A very small budget rarely shows clear results, and we will tell you honestly if yours is too small.</p></details>
            <details><summary>Do I pay Google or you?</summary><p>You pay Google directly from your own account for ad spend. Our management fee is separate.</p></details>
            <details><summary>Will ads guarantee enquiries?</summary><p>No. Results depend on competition, budget, your offer and your website. We track results and adjust as we learn.</p></details>
          </div>
        </div>
      </section>

      <AuditCta />
      <ServiceLinks exclude={["/services/google-ads"]} />
    </main>
  );
}
