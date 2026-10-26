import type { Metadata } from "next";
import Link from "next/link";
import AuditCta from "@/components/AuditCta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "BuildsWebs offers local SEO, Google Business Profile, Google Ads, website design, WhatsApp automation, e-commerce and custom software for Indian businesses.",
  alternates: { canonical: "https://buildswebs.com/services" },
};

const services = [
  {
    href: "/services/local-seo",
    label: "Local SEO",
    desc: "Pages and listings built around what people in your area actually search for.",
  },
  {
    href: "/services/google-business-profile",
    label: "Google Business Profile",
    desc: "Set up, verified and kept active, so you show in the map results.",
  },
  {
    href: "/services/google-ads",
    label: "Google Ads",
    desc: "Search campaigns aimed at enquiries, with a monthly spending cap that you set.",
  },
  {
    href: "/services/website-design",
    label: "Website design",
    desc: "Fast, mobile-first websites designed to get a visitor to call or message you.",
  },
  {
    href: "/services/whatsapp-automation",
    label: "WhatsApp automation",
    desc: "Quick replies, lead capture and follow-up on the number your customers already use.",
  },
  {
    href: "/services/ecommerce-development",
    label: "E-commerce development",
    desc: "Online stores with payments, product management and order handling.",
  },
  {
    href: "/services/custom-software",
    label: "Custom software",
    desc: "Admin panels, APIs, dashboards and internal tools built around how you work.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section style={{ borderTop: "none", paddingTop: "72px" }}>
        <div className="wrap">
          <h1 style={{ fontSize: "clamp(32px,4.6vw,56px)", maxWidth: "24ch" }}>
            Everything a local business needs to be found and to grow
          </h1>
          <p className="intro">
            We combine SEO, advertising and web design with WhatsApp follow-up
            into one clear plan — so you get more enquiries, not just a website.
          </p>
          <div className="list" style={{ marginTop: "40px" }}>
            {services.map((s) => (
              <div className="item" key={s.href}>
                <h2 style={{ fontSize: "18px", maxWidth: "none" }}>
                  <Link href={s.href}>{s.label}</Link>
                </h2>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AuditCta />
    </>
  );
}
