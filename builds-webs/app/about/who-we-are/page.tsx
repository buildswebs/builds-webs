import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuditCta from "@/components/AuditCta";

export const metadata: Metadata = {
  title: "Who We Are | BuildsWebs Digital Growth Agency",
  description:
    "Discover BuildsWebs: our story, core values, and how we help local business owners across India dominate Google search results and grow profitably.",
  alternates: { canonical: "https://buildswebs.com/about/who-we-are" },
  openGraph: {
    title: "Who We Are | BuildsWebs",
    description:
      "A specialized digital growth agency based in Greater Noida helping Indian businesses turn searches into paying customers.",
    url: "https://buildswebs.com/about/who-we-are",
    type: "website",
  },
};

export default function WhoWeArePage() {
  return (
    <div className="sp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Who We Are - BuildsWebs",
            url: "https://buildswebs.com/about/who-we-are",
            description:
              "BuildsWebs is a digital growth agency helping local service businesses, clinics, and retailers across India get found on Google.",
          }),
        }}
      />

      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Who We Are" },
            ]}
          />
          <h1>Who We Are</h1>
          <p className="lead">
            BuildsWebs is a boutique digital growth agency based in Greater Noida,
            Uttar Pradesh. We were founded on a simple principle: local businesses
            deserve genuine, transparent marketing that fills appointment books,
            drives customer phone calls, and increases revenue.
          </p>
          <div className="actions">
            <a
              className="btn"
              href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20BuildsWebs."
              target="_blank"
              rel="noopener"
            >
              Connect with us on WhatsApp
            </a>
            <Link className="btn alt" href="/about">
              Back to About overview
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>Our story & philosophy</h2>
          <div className="list">
            <div className="item">
              <h3>Born out of real local market needs</h3>
              <p>
                Too many agencies sell expensive, cookie-cutter packages filled with confusing buzzwords and zero accountability. BuildsWebs was launched to deliver direct, measurable results for doctors, coaching institutes, retail showrooms, and local service providers who need paying customers, not vanity traffic.
              </p>
            </div>
            <div className="item">
              <h3>Engineered for Indian search behavior</h3>
              <p>
                Indian consumers search differently. They check Google Maps, read recent reviews, compare distances, and almost always prefer to click straight to WhatsApp or call before booking. Every campaign and website we build is crafted around this exact buying journey.
              </p>
            </div>
            <div className="item">
              <h3>Boutique attention, senior expertise</h3>
              <p>
                We keep our active client roster focused so every project receives meticulous attention from senior marketers and developers—not delegated away to inexperienced interns.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2>Our core operating values</h2>
          <div className="list">
            <div className="item">
              <h3>Radical transparency</h3>
              <p>
                You always know where your money goes. We provide clear, plain-language reporting on real calls, enquiries, and ranking movements without obfuscation.
              </p>
            </div>
            <div className="item">
              <h3>No hostage contracts</h3>
              <p>
                We believe relationships should be maintained through consistent performance, not restrictive 12-month lock-ins. You own your domain, ad accounts, listings, and assets.
              </p>
            </div>
            <div className="item">
              <h3>Speed & precision</h3>
              <p>
                In competitive local markets, speed matters. We build clean, lightweight websites that load in milliseconds and launch aggressive local SEO campaigns that produce tangible traction quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AuditCta
        heading="Want to know how we can grow your business?"
        body="Get a free digital audit of your local search presence and competitors in your city."
      />
    </div>
  );
}
