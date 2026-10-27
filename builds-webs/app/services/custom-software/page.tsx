import type { Metadata } from "next";
import AuditCta from "@/components/AuditCta";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceLinks from "@/components/ServiceLinks";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Custom Software Engineering | Enterprise Web Apps & Internal Tools",
  description:
    "Bespoke software engineering built for your operations. Full-stack web apps, cloud-native SaaS, internal operations portals, REST/GraphQL APIs, and AI workflow automation.",
  alternates: { canonical: "https://buildswebs.com/services/custom-software" },
  openGraph: {
    title: "Custom Software Engineering Solutions | BuildsWebs",
    description:
      "Enterprise-grade web apps, cloud-native SaaS platforms, operations portals, and intelligent workflow automation built for Indian businesses.",
    url: "https://buildswebs.com/services/custom-software",
    type: "website",
  },
};

const SOFTWARE_SOLUTIONS = [
  {
    originalName: "Custom Web Development",
    tag: "Web Platforms",
    name: "Full-Stack Web App Engineering",
    desc: "Bespoke, high-performance web applications architected for intricate business logic, seamless user journeys, and enterprise reliability.",
    tech: ["Next.js", "TypeScript", "Node.js", "Tailored Architecture"],
  },
  {
    originalName: "Backend Integration",
    tag: "Core Infrastructure",
    name: "Microservices & Core Backend Architecture",
    desc: "Robust, distributed server architectures and high-throughput databases designed to sync legacy data, prevent bottlenecks, and scale smoothly.",
    tech: ["Node.js", "Python", "PostgreSQL", "Redis Sync"],
  },
  {
    originalName: "Cloud Applications",
    tag: "Scalable Cloud",
    name: "Cloud-Native SaaS Platforms",
    desc: "Multi-tenant, resilient cloud-first applications engineered with elastic infrastructure for maximum uptime, security, and global accessibility.",
    tech: ["AWS", "Docker", "Serverless", "Multi-Tenant"],
  },
  {
    originalName: "Secure App Solutions",
    tag: "Security & Compliance",
    name: "Enterprise-Grade App Security & Auth Systems",
    desc: "Zero-trust security layers featuring role-based access control (RBAC), multi-factor authentication (MFA), end-to-end encryption, and OWASP compliance.",
    tech: ["OAuth 2.0 / JWT", "RBAC", "E2E Encryption", "OWASP"],
  },
  {
    originalName: "Admin Panel Development",
    tag: "Operations Hub",
    name: "Internal Tools & Operations Portals",
    desc: "Custom back-office control centers and staff portals that replace chaotic spreadsheets, streamline approvals, and centralize company data.",
    tech: ["Role Permissions", "Real-Time Tables", "Audit Logs", "CRM Sync"],
  },
  {
    originalName: "Progressive Web Apps",
    tag: "Mobile-First",
    name: "Cross-Platform Hybrid Web Apps (PWAs)",
    desc: "Native-app performance delivered directly inside the mobile browser. Includes offline-first caching, push notifications, and instant home-screen installation.",
    tech: ["PWAs", "Service Workers", "Offline Mode", "Push Alerts"],
  },
  {
    originalName: "API Development",
    tag: "Integrations & APIs",
    name: "Headless REST & GraphQL API Infrastructure",
    desc: "High-speed, documented API gateways and webhooks connecting your software seamlessly with payment processors, CRMs, WhatsApp Business, and ERPs.",
    tech: ["REST & GraphQL", "Webhooks", "Razorpay / Stripe", "WhatsApp API"],
  },
  {
    originalName: "Data Analytics Tools",
    tag: "Intelligence",
    name: "Business Intelligence & Real-Time Analytics Hubs",
    desc: "Interactive executive KPI dashboards and automated analytics engines that turn fragmented business numbers into actionable, real-time growth decisions.",
    tech: ["Live Dashboards", "KPI Visualizers", "Automated Reports", "Data Pipelines"],
  },
  {
    originalName: "Automation Systems",
    tag: "Automation & AI",
    name: "Intelligent Workflow & AI Business Automation",
    desc: "Autonomous trigger-based pipelines and intelligent bots that eliminate repetitive manual data entry, qualify inbound leads, and sync systems 24/7.",
    tech: ["WhatsApp Bots", "Trigger Automations", "Lead Routing", "Custom Middleware"],
  },
];

export default function CustomSoftwarePage() {
  return (
    <main className="sp">
      {/* ── Page Hero ── */}
      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Custom software" },
            ]}
          />
          <h1>Custom software built around how you work</h1>
          <p className="lead">
            When off-the-shelf software falls short, we engineer tailor-made digital
            platforms: full-stack web apps, cloud-native tools, operations
            dashboards, and automated workflow pipelines.
          </p>
          <div className="actions">
            <a
              className="btn"
              href="https://wa.me/918287593102?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Custom%20software%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss Your Software Project on WhatsApp
            </a>
            <a className="btn alt" href="/services">
              See all services
            </a>
          </div>
        </div>
      </div>

      {/* ── 9 Applications We Engineer ── */}
      <section>
        <div className="wrap">
          <h2>Software Applications & Systems We Engineer</h2>
          <p className="intro">
            From modern cloud SaaS products to mission-critical internal portals,
            here are the specialized software solutions we design, build, and scale:
          </p>

          <div className={styles.appsGrid}>
            {SOFTWARE_SOLUTIONS.map((app) => (
              <div className={styles.appCard} key={app.name}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardTag}>{app.tag}</span>
                  <h3 className={styles.cardTitle}>{app.name}</h3>
                </div>
                <p className={styles.cardDesc}>{app.desc}</p>
                <div className={styles.cardFooter}>
                  {app.tech.map((t) => (
                    <span className={styles.techPill} key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who this is for ── */}
      <section>
        <div className="wrap">
          <h2>Who this is for</h2>
          <p className="intro">
            Founders, directors, and operational teams dealing with slow spreadsheets,
            disconnected systems, or scaling challenges that standard SaaS cannot solve.
          </p>
        </div>
      </section>

      {/* ── Engineering Approach ── */}
      <section>
        <div className="wrap">
          <h2>What is included in every build</h2>
          <div className="list">
            {[
              {
                title: "Requirements Architecture",
                desc: "We map out database schemas, user roles, edge cases, and sprint milestones before writing a line of code.",
              },
              {
                title: "Scalable Full-Stack Development",
                desc: "Clean, maintainable codebases built with modern stacks (Next.js, Node.js, PostgreSQL) designed for high concurrency.",
              },
              {
                title: "API Gateways & Payment Integrations",
                desc: "Flawless connections to payment systems (Razorpay, Stripe), WhatsApp Cloud API, CRMs, and accounting software.",
              },
              {
                title: "Cloud Deployment & Hardened Security",
                desc: "Automated CI/CD pipelines, SSL encryption, daily automated backups, and scalable cloud hosting configurations.",
              },
              {
                title: "Ongoing Maintenance & Feature Roadmap",
                desc: "Post-launch monitoring, performance tuning, and continuous enhancements as your business grows.",
              },
            ].map((i) => (
              <div className="item" key={i.title}>
                <h3>{i.title}</h3>
                <p>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section>
        <div className="wrap">
          <h2>Frequently asked questions</h2>
          <div className="list">
            <details>
              <summary>How much does custom software development cost?</summary>
              <p>
                Pricing depends on features, complexity, and integrations. We provide a
                detailed scope of work with transparent milestone pricing after an initial
                consultation, and we can start with an MVP (Minimum Viable Product).
              </p>
            </details>
            <details>
              <summary>Who owns the intellectual property and code?</summary>
              <p>
                You have 100% full intellectual property (IP) ownership of your custom code
                and data upon completion, as defined in our mutual agreement.
              </p>
            </details>
            <details>
              <summary>Can you modernize or rebuild software we already have?</summary>
              <p>
                Yes. We perform a thorough technical audit of your existing codebase,
                architecture, and database to recommend either strategic refactoring or a
                clean, modernized rewrite.
              </p>
            </details>
            <details>
              <summary>How do you handle data security and backups?</summary>
              <p>
                We implement role-based access control (RBAC), database encryption at rest
                and in transit, automated daily backups, and strict security headers adhering
                to industry standard OWASP practices.
              </p>
            </details>
          </div>
        </div>
      </section>

      <AuditCta />
      <ServiceLinks exclude={["/services/custom-software"]} />
    </main>
  );
}
