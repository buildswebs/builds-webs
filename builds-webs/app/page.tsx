import type { Metadata } from "next";
import Link from "next/link";
import AuditCta from "@/components/AuditCta";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title:
    "BuildsWebs | Local SEO, Google Ads and Websites for Local Businesses in India",
  description:
    "BuildsWebs is a digital growth agency in Greater Noida. We help local businesses across India appear first when nearby customers search. Ask for a free audit.",
  alternates: { canonical: "https://buildswebs.com/" },
};

const WA_AUDIT =
  "https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20a%20free%20digital%20audit%20for%20my%20business.";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <h1>
              We get local businesses found on Google, then turn those searches
              into enquiries.
            </h1>
            <p className="lead">
              BuildsWebs is a digital growth agency in Greater Noida. We work
              with businesses across India on local SEO, Google Business Profile,
              Google Ads, websites and WhatsApp follow-up, so customers searching
              near you find you first.
            </p>
            <div className="actions">
              <a className="btn" href={WA_AUDIT} target="_blank" rel="noopener">
                Get a free audit on WhatsApp
              </a>
              <Link className="btn alt" href="/services">
                See what we do
              </Link>
            </div>
          </div>

          <div className={styles.heroViz}>
            <div
              className={styles.serp}
              role="img"
              aria-label="Illustration of a local search results page where one business appears on page 3"
            >
              <div className={styles.serpQ}>dentist near me</div>
              <div className={styles.serpRow}>
                Clinic A<span>Page 1, first result</span>
              </div>
              <div className={styles.serpRow}>
                Clinic B<span>Page 1, second result</span>
              </div>
              <div className={`${styles.serpRow} ${styles.serpYou}`}>
                Your clinic<span>Page 3</span>
              </div>
            </div>
            <p className={styles.serpCap}>Illustration only. Not real search data.</p>
          </div>
        </div>
      </div>

      {/* ── Approach ── */}
      <section id="approach">
        <div className="wrap">
          <h2>A website is not the goal. More enquiries are.</h2>
          <p className="intro">
            Most agencies sell a website or an app and hand it over at launch. We
            start from the result you need and work backwards.
          </p>
          <div className={styles.two}>
            <div className={styles.twoCol}>
              <h3>What most agencies sell</h3>
              <p>
                A website or an app, delivered on a date. After launch, getting
                customers to it is your problem.
              </p>
            </div>
            <div className={styles.twoColUs}>
              <h3>What we do</h3>
              <p>
                We look at how customers in your area search, fix what keeps you
                from appearing, and keep checking whether enquiries are actually
                coming in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services">
        <div className="wrap">
          <h2>What we do</h2>
          <div className="list">
            {[
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
            ].map((svc) => (
              <div className="item" key={svc.href}>
                <h3>
                  <Link href={svc.href}>{svc.label}</Link>
                </h3>
                <p>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process">
        <div className="wrap">
          <h2>How we work</h2>
          <ol className="steps">
            {[
              {
                n: 1,
                title: "Audit",
                desc: "We review your Google Business Profile, website and the searches your customers use.",
                hasLine: true,
              },
              {
                n: 2,
                title: "Plan",
                desc: "You get a written list of fixes, ordered by what is likely to bring the most enquiries.",
                hasLine: true,
              },
              {
                n: 3,
                title: "Build",
                desc: "We fix listings, pages and ads, and set up WhatsApp so enquiries reach you quickly.",
                hasLine: true,
              },
              {
                n: 4,
                title: "Review",
                desc: "We go through the enquiries with you each month and change what is not working.",
                hasLine: false,
              },
            ].map((step) => (
              <li key={step.n}>
                <div className="rail">
                  <span className="step-num">{step.n}</span>
                  {step.hasLine && <i className="step-line" aria-hidden="true" />}
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section>
        <div className="wrap">
          <h2>Built for businesses that customers search for by area</h2>
          <ul className="tags">
            <li>Clinics</li>
            <li>Coaching institutes</li>
            <li>Real estate consultants</li>
            <li>Restaurants</li>
            <li>Small and local businesses</li>
          </ul>
          <p className="intro">
            Based in Greater Noida, serving businesses in any city in India. No
            one can promise a ranking, and we will not. What we do promise is a
            clear, written list of what is holding your business back.
          </p>
        </div>
      </section>

      {/* ── Audit CTA ── */}
      <AuditCta />
    </>
  );
}
