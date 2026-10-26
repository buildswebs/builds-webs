import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlForImage, type SanityImageSource } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical advice on local SEO, Google Ads and digital marketing for small businesses in India – from the BuildsWebs team in Greater Noida.",
  alternates: { canonical: "https://buildswebs.com/blog" },
};

export const revalidate = 60;

interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  mainImage?: SanityImageSource & { alt?: string };
  category?: string;
  author?: string;
}

export default async function BlogPage() {
  let posts: Post[] = [];

  try {
    posts = await sanityFetch<Post[]>({
      query: POSTS_QUERY,
      revalidate: 60,
    });
  } catch (error) {
    console.error("Error fetching posts from Sanity:", error);
    posts = [];
  }

  return (
    <section style={{ borderTop: "none", paddingTop: "72px" }}>
      <div className="wrap">
        <h1 style={{ fontSize: "clamp(32px,4.6vw,56px)", maxWidth: "24ch" }}>
          Practical advice on growing your local business online
        </h1>
        <p className="intro">
          Tips on local SEO, Google Ads, Google Business Profile and digital
          marketing for small businesses across India — from our team in Greater
          Noida.
        </p>

        {posts.length === 0 ? (
          <div
            style={{
              marginTop: "48px",
              padding: "40px 28px",
              borderRadius: "8px",
              border: "1px dashed var(--line)",
              maxWidth: "600px",
            }}
          >
            <h3 style={{ marginBottom: "8px" }}>No posts published yet</h3>
            <p style={{ color: "var(--muted)", marginBottom: "20px" }}>
              Posts written in your Sanity Studio will appear here automatically.
            </p>
            <Link href="/studio" className="btn" style={{ fontSize: "14px", padding: "10px 18px" }}>
              Open Sanity Studio →
            </Link>
          </div>
        ) : (
          <div
            style={{
              marginTop: "48px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "28px",
            }}
          >
            {posts.map((post) => (
              <article
                key={post._id}
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  background: "var(--surface)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.15s, transform 0.15s",
                }}
              >
                {(() => {
                  const imgUrl = urlForImage(post.mainImage)?.width(600).height(400).url();
                  if (!imgUrl) return null;
                  return (
                    <Link href={`/blog/${post.slug}`} style={{ display: "block", position: "relative", height: "200px" }}>
                      <Image
                        src={imgUrl}
                        alt={post.mainImage?.alt || post.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Link>
                  );
                })()}
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      fontSize: "13px",
                      color: "var(--soft)",
                      marginBottom: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {post.category && <span>{post.category}</span>}
                    {post.category && post.publishedAt && <span>·</span>}
                    {post.publishedAt && (
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    )}
                  </div>
                  <h3 style={{ marginBottom: "12px", fontSize: "20px" }}>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{ color: "var(--text)", textDecoration: "none" }}
                    >
                      {post.title}
                    </Link>
                  </h3>
                  {post.excerpt && (
                    <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: "1.6", flex: 1 }}>
                      {post.excerpt}
                    </p>
                  )}
                  <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--line)" }}>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        color: "var(--accent)",
                        fontSize: "14px",
                        fontWeight: "600",
                        textDecoration: "none",
                      }}
                    >
                      Read article →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
