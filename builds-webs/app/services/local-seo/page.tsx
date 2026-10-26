import type { Metadata } from "next";
import AuditCta from "@/components/AuditCta";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceLinks from "@/components/ServiceLinks";

export const metadata: Metadata = {
  title: "Local SEO",
  description:
    "Local SEO for businesses that customers search for by area. We help you show up in Google's local results in any city in India.",
  alternates: { canonical: "https://buildswebs.com/services/local-seo" },
};

export default function LocalSeoPage() {
  return (
    <main className="sp">
      {/* Hero */}
      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Local SEO" },
            ]}
          />
          <h1>Local SEO for businesses that customers search for by area</h1>
          <p className="lead">
            When someone searches for a service near them, Google shows only a
            few businesses. Local SEO makes yours easier to find and easier to
            trust for those searches, in any city in India.
          </p>
          <div className="actions">
            <a
              className="btn"
              href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Local%20SEO%20for%20my%20business."
              target="_blank"
              rel="noopener"
            >
              Ask about Local SEO on WhatsApp
            </a>
            <a className="btn alt" href="/services">
              See all services
            </a>
          </div>
        </div>
      </div>

      {/* What's included */}
      <section>
        <div className="wrap">
          <h2>What is included</h2>
          <div className="list">
            {[
              { title: "Search research", desc: "We find the words and \u201cnear me\u201d searches your customers actually use in your area." },
              { title: "Page optimisation", desc: "Titles, headings and service pages written around those searches." },
              { title: "Listings and citations", desc: "Consistent name, address and phone details across directories such as Justdial and Sulekha." },
              { title: "Reviews", desc: "A simple process for asking happy customers for Google reviews." },
              { title: "Monthly review", desc: "We check which searches bring calls and messages, and adjust." },
            ].map((i) => (
              <div className="item" key={i.title}><h3>{i.title}</h3><p>{i.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section>
        <div className="wrap">
          <h2>Who this is for</h2>
          <p className="intro">Clinics, coaching institutes, real estate consultants, restaurants and other businesses whose customers search by area.</p>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="wrap">
          <h2>Common questions</h2>
          <div className="list">
            <details><summary>How long does local SEO take?</summary><p>Often a few months before results are clear. It depends on competition and where you start, so we do not promise a timeline or a ranking.</p></details>
            <details><summary>Do I need a website for local SEO?</summary><p>A website helps, but a well-kept Google Business Profile is the first step. We can do both.</p></details>
            <details><summary>Can you work with a business outside Greater Noida?</summary><p>Yes. We are based in Greater Noida and work with businesses in any city in India.</p></details>
          </div>
        </div>
      </section>

      <AuditCta />
      <ServiceLinks exclude={["/services/local-seo"]} />
    </main>
  );
}
