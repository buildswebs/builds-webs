import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import AuditCta from "@/components/AuditCta";
import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Articles & Knowledge Hub | BuildsWebs",
  description:
    "Explore in-depth articles, actionable guides, and digital marketing insights written by the BuildsWebs team for local business owners in India.",
  alternates: { canonical: "https://buildswebs.com/about/articles" },
  openGraph: {
    title: "Articles & Growth Insights | BuildsWebs",
    description:
      "Actionable strategies on local SEO, Google Ads, and website conversions for ambitious Indian MSMEs.",
    url: "https://buildswebs.com/about/articles",
    type: "website",
  },
};

export const revalidate = 60;

interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  category?: string;
}

const coreTopics = [
  {
    topic: "Local SEO & Google Maps Ranking",
    desc: "How to claim, optimize, and rank your Google Business Profile in the top 3 map results for 'near me' searches.",
  },
  {
    topic: "Website Conversion & Speed",
    desc: "Why sub-second page load times and mobile-friendly design dramatically increase phone calls and WhatsApp enquiries.",
  },
  {
    topic: "Google Ads & PPC for Local Services",
    desc: "Strategies for generating instant customer calls without wasting money on negative or accidental clicks.",
  },
  {
    topic: "WhatsApp Business Automation",
    desc: "Setting up automated replies, lead capture forms, and follow-ups to close enquiries faster.",
  },
];

export default async function ArticlesPage() {
  let posts: Post[] = [];
  try {
    posts = await sanityFetch<Post[]>({
      query: POSTS_QUERY,
      revalidate: 60,
    });
  } catch (err) {
    console.error("Error fetching articles in /about/articles:", err);
    posts = [];
  }

  return (
    <div className="sp">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "BuildsWebs Articles & Insights",
            url: "https://buildswebs.com/about/articles",
            description:
              "Educational articles and digital marketing guides published by BuildsWebs.",
          }),
        }}
      />

      <div className="sp-hero">
        <div className="wrap">
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Articles" },
            ]}
          />
          <h1>Articles & Knowledge Hub</h1>
          <p className="lead">
            We publish actionable, practical insights on local search, web
            development, and conversion optimization to help Indian business
            owners make informed decisions.
          </p>
          <div className="actions">
            <Link className="btn" href="/blog">
              Browse all live blog posts
            </Link>
            <Link className="btn alt" href="/about">
              Back to About overview
            </Link>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>Core topics we demystify</h2>
          <div className="list">
            {coreTopics.map((item) => (
              <div className="item" key={item.topic}>
                <h3>{item.topic}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {posts.length > 0 && (
        <section>
          <div className="wrap">
            <h2>Latest published articles</h2>
            <div className="list">
              {posts.slice(0, 5).map((post) => (
                <div className="item" key={post._id}>
                  <h3>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p>
                    {post.excerpt}{" "}
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        color: "var(--accent)",
                        fontWeight: 500,
                        textDecoration: "none",
                        display: "inline-block",
                        marginLeft: "6px",
                      }}
                    >
                      Read full article →
                    </Link>
                  </p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px" }}>
              <Link href="/blog" className="btn alt">
                View all articles on the Blog →
              </Link>
            </div>
          </div>
        </section>
      )}

      <AuditCta
        heading="Have a question about ranking your local business?"
        body="Ask our team directly on WhatsApp or request a free digital audit of your website and listings."
      />
    </div>
  );
}
