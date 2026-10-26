import type { Metadata } from "next";
import Link from "next/link";
import AuditCta from "@/components/AuditCta";

export const metadata: Metadata = {
  title: "Happy Clients",
  description:
    "Real feedback from real BuildsWebs clients — named, with their business and a link you can verify.",
  alternates: { canonical: "https://buildswebs.com/happy-clients" },
  robots: { index: false }, // Enable once real client stories are added
};

export default function HappyClientsPage() {
  return (
    <div className="sp">
      <div className="sp-hero">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> / Happy clients
          </nav>
          <h1>Client stories</h1>
          <p className="lead">
            We are a new agency, and we would rather show you nothing than
            something invented. Feedback appears here once a client agrees to
            share it, with their name, their business and a link you can check.
          </p>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>How we publish client feedback</h2>
          <div className="list">
            <div className="item">
              <h3>Real people only</h3>
              <p>Every story comes from a real client, named with their business and city. We do not write reviews, hire reviewers or use stock photos of people.</p>
            </div>
            <div className="item">
              <h3>Published with permission</h3>
              <p>A client reads and approves the words before they go live, and can ask us to take them down at any time.</p>
            </div>
            <div className="item">
              <h3>Easy to check</h3>
              <p>Where possible we link to the client&apos;s Google review or live website, so you can confirm it yourself.</p>
            </div>
            <div className="item">
              <h3>Results described plainly</h3>
              <p>We say what changed in plain words. We publish numbers only when the client can confirm them.</p>
            </div>
          </div>
        </div>
      </section>

      {/*
        ADD CLIENT STORIES HERE once a client has approved their words in writing.
        Remove the `robots: { index: false }` from metadata above and add this page to sitemap.xml.

        Example structure:
        <section>
          <div className="wrap">
            <h2>Client stories</h2>
            <div className="stories">
              <article className="story">
                <blockquote><p>The client's exact words.</p></blockquote>
                <p className="who"><strong>Client name</strong>, Business name, City</p>
                <p className="svc">Service: Local SEO</p>
                <p><a href="LINK-TO-THEIR-GOOGLE-REVIEW-OR-WEBSITE">Check this story</a></p>
              </article>
            </div>
          </div>
        </section>
      */}

      <AuditCta
        heading="Share your feedback or start with an audit"
        body="Already working with us? Send your feedback on WhatsApp and we will ask before we publish anything. New here? Start with a free digital audit of your online presence."
      />
    </div>
  );
}
