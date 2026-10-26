import type { Metadata } from "next";
import AuditCta from "@/components/AuditCta";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceLinks from "@/components/ServiceLinks";

export const metadata: Metadata = {
  title: "WhatsApp Automation",
  description:
    "WhatsApp automation for local businesses in India. Set up quick replies, lead capture and follow-up so no enquiry goes unanswered.",
  alternates: { canonical: "https://buildswebs.com/services/whatsapp-automation" },
};

export default function WhatsappPage() {
  return (
    <div className="sp">
      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "WhatsApp automation" }]} />
          <h1>WhatsApp automation so no enquiry goes unanswered</h1>
          <p className="lead">Most local customers prefer to message first. We set up WhatsApp Business so enquiries get a quick reply, the right details are collected and nothing gets lost.</p>
          <div className="actions">
            <a className="btn" href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20WhatsApp%20automation%20for%20my%20business." target="_blank" rel="noopener">Ask about WhatsApp automation on WhatsApp</a>
            <a className="btn alt" href="/services">See all services</a>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>What is included</h2>
          <div className="list">
            {[
              { title: "Business profile", desc: "Name, description, hours, catalogue and a click-to-chat link." },
              { title: "Greetings and quick replies", desc: "Saved answers to common questions, with greeting and away messages." },
              { title: "Lead capture", desc: "Collect name, need and city before your team picks up." },
              { title: "Follow-up", desc: "Reminders and follow-up messages through the WhatsApp Business API where it suits." },
              { title: "Buttons and links", desc: "Open WhatsApp from your website, Google Business Profile and ads." },
            ].map((i) => <div className="item" key={i.title}><h3>{i.title}</h3><p>{i.desc}</p></div>)}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Who this is for</h2>
          <p className="intro">Clinics booking appointments, coaching institutes handling admissions, and shops or consultants who answer the same questions every day.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Common questions</h2>
          <div className="list">
            <details><summary>Do I need the WhatsApp Business API?</summary><p>Not always. The free WhatsApp Business app is enough for many small businesses. We suggest the API only when your volume needs it, and Meta charges its own messaging fees.</p></details>
            <details><summary>Is automated messaging allowed?</summary><p>Yes, within WhatsApp&apos;s rules. Customers must opt in to marketing messages, and we set this up properly.</p></details>
            <details><summary>Can it connect to my website?</summary><p>Yes. We add click-to-chat buttons and can send form details into WhatsApp.</p></details>
          </div>
        </div>
      </section>

      <AuditCta />
      <ServiceLinks exclude={["/services/whatsapp-automation"]} />
    </div>
  );
}
