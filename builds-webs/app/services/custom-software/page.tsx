import type { Metadata } from "next";
import AuditCta from "@/components/AuditCta";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceLinks from "@/components/ServiceLinks";

export const metadata: Metadata = {
  title: "Custom Software",
  description:
    "Custom software built around how you work. Admin panels, dashboards, APIs and internal tools for Indian businesses.",
  alternates: { canonical: "https://buildswebs.com/services/custom-software" },
};

export default function CustomSoftwarePage() {
  return (
    <main className="sp">
      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Custom software" }]} />
          <h1>Custom software built around how you work</h1>
          <p className="lead">When an off-the-shelf tool does not fit the way you work, we build software around your process: admin panels, dashboards, APIs and internal tools.</p>
          <div className="actions">
            <a className="btn" href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Custom%20software%20for%20my%20business." target="_blank" rel="noopener">Ask about Custom software on WhatsApp</a>
            <a className="btn alt" href="/services">See all services</a>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>What is included</h2>
          <div className="list">
            {[
              { title: "Requirements", desc: "We write down what the software must do before we build it." },
              { title: "Web apps and admin panels", desc: "Role-based screens for your team and your customers." },
              { title: "APIs and integrations", desc: "Connect your software with payments, WhatsApp, CRMs and accounting tools." },
              { title: "Cloud hosting", desc: "Secure deployment with regular backups." },
              { title: "Support", desc: "Fixes and improvements after launch." },
            ].map((i) => <div className="item" key={i.title}><h3>{i.title}</h3><p>{i.desc}</p></div>)}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Who this is for</h2>
          <p className="intro">Businesses with manual processes, spreadsheets or scattered tools that slow the team down.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Common questions</h2>
          <div className="list">
            <details><summary>How much does custom software cost?</summary><p>It depends on scope. We give a written estimate after understanding your requirements, and we can start with a smaller first version.</p></details>
            <details><summary>Who owns the code?</summary><p>On full payment, you own the software made specifically for you, as set out in the agreement.</p></details>
            <details><summary>Can you improve software I already have?</summary><p>Often yes. We review it first and tell you whether to fix it or rebuild it.</p></details>
          </div>
        </div>
      </section>

      <AuditCta />
      <ServiceLinks exclude={["/services/custom-software"]} />
    </main>
  );
}
