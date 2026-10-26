import type { Metadata } from "next";
import AuditCta from "@/components/AuditCta";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceLinks from "@/components/ServiceLinks";

export const metadata: Metadata = {
  title: "E-commerce Development",
  description:
    "E-commerce websites built for Indian customers. Online stores with Razorpay, UPI, GST-ready invoices and order management.",
  alternates: { canonical: "https://buildswebs.com/services/ecommerce-development" },
};

export default function EcommercePage() {
  return (
    <main className="sp">
      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "E-commerce development" }]} />
          <h1>E-commerce websites built for Indian customers</h1>
          <p className="lead">An online store has to be simple to browse, easy to pay on and easy for you to manage. We build stores with Indian payment options and order handling that fits how you work.</p>
          <div className="actions">
            <a className="btn" href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20E-commerce%20development%20for%20my%20business." target="_blank" rel="noopener">Ask about E-commerce development on WhatsApp</a>
            <a className="btn alt" href="/services">See all services</a>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>What is included</h2>
          <div className="list">
            {[
              { title: "Store setup", desc: "Products, categories, variants and pricing." },
              { title: "Payments", desc: "Integration with Indian gateways such as Razorpay, plus UPI and cards." },
              { title: "Shipping and tax", desc: "Delivery rules, GST-ready invoices and courier integration where available." },
              { title: "Order management", desc: "A dashboard to track orders, stock and customers." },
              { title: "Product SEO", desc: "Product and category pages written to be found in search." },
            ].map((i) => <div className="item" key={i.title}><h3>{i.title}</h3><p>{i.desc}</p></div>)}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Who this is for</h2>
          <p className="intro">Retailers, brands and local sellers who want to sell beyond their shop or add a second sales channel.</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Common questions</h2>
          <div className="list">
            <details><summary>Which platform do you use?</summary><p>We choose between a hosted platform and a custom build based on your needs, and we explain the trade-offs first.</p></details>
            <details><summary>Can I accept cash on delivery?</summary><p>Yes, if you want it. We can set up cash on delivery alongside online payments.</p></details>
            <details><summary>Can you move my products from another store?</summary><p>Usually yes. We can import products from a spreadsheet or your current platform.</p></details>
          </div>
        </div>
      </section>

      <AuditCta />
      <ServiceLinks exclude={["/services/ecommerce-development"]} />
    </main>
  );
}
