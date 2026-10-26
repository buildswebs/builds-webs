import type { Metadata } from "next";
import AuditCta from "@/components/AuditCta";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceLinks from "@/components/ServiceLinks";

export const metadata: Metadata = {
  title: "Website Design",
  description:
    "Fast, mobile-first website design for local businesses in India. Designed to turn visitors into calls and messages.",
  alternates: { canonical: "https://buildswebs.com/services/website-design" },
};

export default function WebsiteDesignPage() {
  return (
    <main className="sp">
      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Website design" }]} />
          <h1>Website design that turns visitors into enquiries</h1>
          <p className="lead">A website should make it easy for a visitor to call or message you. We design fast, mobile-first websites with a clear page for each service and a structure that search engines can read.</p>
          <div className="actions">
            <a className="btn" href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Website%20design%20for%20my%20business." target="_blank" rel="noopener">Ask about Website design on WhatsApp</a>
            <a className="btn alt" href="/services">See all services</a>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>What is included</h2>
          <div className="list">
            {[
              { title: "Planning and structure", desc: "One page for each service, with a clear way to enquire." },
              { title: "Design", desc: "Clear layouts made around your business and your customers." },
              { title: "Mobile and speed", desc: "Built to load quickly on phones and average connections." },
              { title: "On-page SEO", desc: "Titles, headings, descriptions and structured data built in." },
              { title: "Handover", desc: "A short guide so you can make simple updates yourself." },
            ].map((i) => <div className="item" key={i.title}><h3>{i.title}</h3><p>{i.desc}</p></div>)}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Who this is for</h2>
          <p className="intro">New businesses without a website, and established ones whose site is slow, hard to use on a phone or not bringing enquiries.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Common questions</h2>
          <div className="list">
            <details><summary>How long does a website take?</summary><p>It depends on the size. A small business site usually takes a few weeks, and we agree a timeline before we start.</p></details>
            <details><summary>Will I own the website?</summary><p>Yes. On full payment you own the final design and content made for you, as set out in our terms.</p></details>
            <details><summary>Can you handle hosting and the domain?</summary><p>Yes. We can advise on hosting and set up your domain in your own name, so you stay in control.</p></details>
          </div>
        </div>
      </section>

      <AuditCta />
      <ServiceLinks exclude={["/services/website-design"]} />
    </main>
  );
}
