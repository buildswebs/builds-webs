import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuditCta from "@/components/AuditCta";

export const metadata: Metadata = {
  title: "About Us | Digital Growth & Local SEO Agency in India",
  description:
    "Learn about BuildsWebs — a performance-driven digital growth agency in Greater Noida. We help local businesses, clinics, and shops rank first on Google across India.",
  alternates: { canonical: "https://buildswebs.com/about" },
  openGraph: {
    title: "About BuildsWebs | Local SEO & Digital Growth Agency",
    description:
      "We help local businesses across India dominate search results, get verified enquiries, and grow sustainably.",
    url: "https://buildswebs.com/about",
    type: "website",
  },
};

const aboutSections = [
  {
    href: "/about/who-we-are",
    title: "Who We Are",
    desc: "Our founding story, agency values, and why we focus on local business growth.",
  },
  {
    href: "/about/mission",
    title: "Our Mission",
    desc: "Making high-ROI digital marketing accessible, honest, and transparent for every Indian MSME.",
  },
  {
    href: "/about/vision",
    title: "Our Vision",
    desc: "To be India's most trusted partner for local search dominance and enquiry generation.",
  },
  {
    href: "/about/director",
    title: "Meet Our Director",
    desc: "Leadership, hands-on engineering mindset, and dedication to measurable client success.",
  },
  {
    href: "/about/team",
    title: "Our Team",
    desc: "Experienced SEO specialists, Google Ads engineers, full-stack developers, and content writers.",
  },
  {
    href: "/about/clients",
    title: "Our Clients",
    desc: "Doctors, retail stores, coaching institutes, and service companies we proudly partner with.",
  },
  {
    href: "/about/achievements",
    title: "Our Achievements",
    desc: "Milestones, Google top-3 rankings delivered, and thousands of monthly enquiries driven.",
  },
  {
    href: "/about/testimonials",
    title: "Testimonials",
    desc: "Unvarnished, verified feedback from real business owners who trust BuildsWebs.",
  },
  {
    href: "/about/articles",
    title: "Articles & Insights",
    desc: "Actionable guides on local SEO, Google Ads, and website conversion for Indian businesses.",
  },
];

export default function AboutPage() {
  return (
    <div className="sp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About BuildsWebs",
            url: "https://buildswebs.com/about",
            description:
              "BuildsWebs is a digital growth agency based in Greater Noida, Uttar Pradesh, helping local businesses across India get found on Google.",
            publisher: {
              "@type": "Organization",
              name: "BuildsWebs",
              url: "https://buildswebs.com",
              logo: "https://buildswebs.com/logo.png",
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
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
          <h1>About BuildsWebs</h1>
          <p className="lead">
            We are a performance-first digital growth agency based in Greater Noida,
            Uttar Pradesh. We build fast websites, optimize Google Business
            Profiles, and run laser-targeted search campaigns for ambitious
            businesses across India.
          </p>
          <div className="actions">
            <a
              className="btn"
              href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20working%20with%20BuildsWebs."
              target="_blank"
              rel="noopener"
            >
              Talk with our team on WhatsApp
            </a>
            <a className="btn alt" href="/services">
              Explore our services
            </a>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>Explore our agency</h2>
          <p className="intro">
            Get to know our leadership, mission, culture, and proven approach to
            scaling local revenue.
          </p>

          <div className="list">
            {aboutSections.map((item) => (
              <div className="item" key={item.href}>
                <h3>
                  <Link href={item.href}>{item.title}</Link>
                </h3>
                <p>
                  {item.desc}{" "}
                  <Link
                    href={item.href}
                    style={{
                      color: "var(--accent)",
                      fontWeight: 500,
                      textDecoration: "none",
                      display: "inline-block",
                      marginLeft: "6px",
                    }}
                  >
                    Read more →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Why businesses across India trust BuildsWebs</h2>
          <div className="list">
            <div className="item">
              <h3>No jargon, just phone calls & enquiries</h3>
              <p>
                We measure our worth by the enquiries, customer calls, and footfall we generate for your business—not vanity metrics like impressions or clicks that don&apos;t convert.
              </p>
            </div>
            <div className="item">
              <h3>Greater Noida based, nationwide reach</h3>
              <p>
                Headquartered in Greater Noida (NCR), our team understands the nuances of competitive urban markets as well as growing regional hubs across Uttar Pradesh, Delhi NCR, and nationwide.
              </p>
            </div>
            <div className="item">
              <h3>Transparent & honest agreements</h3>
              <p>
                No lock-in traps or hostage domains. You retain 100% ownership of your Google Business Profile, ad accounts, website code, and creative assets at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AuditCta
        heading="Ready to partner with an agency that cares about your bottom line?"
        body="Get in touch today for an honest, zero-obligation digital audit of your local search presence."
      />
    </div>
  );
}
