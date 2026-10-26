import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { PortableTextBlock } from "next-sanity";
import Breadcrumb from "@/components/Breadcrumb";
import AuditCta from "@/components/AuditCta";
import CustomPortableText from "@/components/CustomPortableText";
import { sanityFetch } from "@/sanity/lib/client";
import { POST_QUERY, POST_SLUGS_QUERY } from "@/sanity/lib/queries";
import { urlForImage, type SanityImageSource } from "@/sanity/lib/image";

interface Props {
  params: Promise<{ slug: string }>;
}

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  mainImage?: SanityImageSource & { alt?: string };
  body?: PortableTextBlock[];
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  category?: string;
  author?: {
    name?: string;
    image?: SanityImageSource;
  };
}

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const posts = await sanityFetch<{ slug: string }[]>({
      query: POST_SLUGS_QUERY,
      revalidate: 60,
    });
    return posts.map((post: { slug: string }) => ({ slug: post.slug }));
  } catch (err) {
    console.error("Error generating static params for blog:", err);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<BlogPost | null>({
    query: POST_QUERY,
    params: { slug },
  });

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const metaTitle = post.seoTitle || post.title;
  const metaDescription =
    post.seoDescription ||
    post.excerpt ||
    `Read ${post.title} on BuildsWebs blog.`;
  const keywords =
    post.seoKeywords && post.seoKeywords.length > 0
      ? post.seoKeywords
      : undefined;

  const ogImageUrl = urlForImage(post.mainImage)?.width(1200).height(630).url();
  const ogImages = ogImageUrl
    ? [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.mainImage?.alt || metaTitle,
        },
      ]
    : undefined;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords,
    alternates: {
      canonical: `https://buildswebs.com/blog/${slug}`,
    },
    openGraph: {
      title: `${metaTitle} | BuildsWebs`,
      description: metaDescription,
      url: `https://buildswebs.com/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: ogImages,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await sanityFetch<BlogPost | null>({
    query: POST_QUERY,
    params: { slug },
  });

  if (!post) {
    notFound();
  }

  const headline = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const postImageUrl = urlForImage(post.mainImage)?.width(1200).height(700).url();

  return (
    <article className="sp">
      {/* Schema.org BlogPosting metadata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline,
            description,
            keywords: post.seoKeywords?.join(", "),
            datePublished: post.publishedAt,
            url: `https://buildswebs.com/blog/${slug}`,
            image: postImageUrl || undefined,
            author: {
              "@type": "Person",
              name: post.author?.name || "BuildsWebs Team",
            },
            publisher: {
              "@type": "Organization",
              name: "BuildsWebs",
              url: "https://buildswebs.com",
            },
          }),
        }}
      />

      <div className="sp-hero">
        <div className="wrap" style={{ maxWidth: "800px" }}>
          <Breadcrumb
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <div
            style={{
              display: "flex",
              gap: "10px",
              fontSize: "14px",
              color: "var(--soft)",
              marginBottom: "12px",
            }}
          >
            {post.category && <span>{post.category}</span>}
            {post.category && post.publishedAt && <span>·</span>}
            {post.publishedAt && (
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
          </div>
          <h1>{post.title}</h1>
          {post.excerpt && <p className="lead">{post.excerpt}</p>}

          {post.author?.name && (
            <p style={{ marginTop: "16px", fontSize: "14px", color: "var(--soft)" }}>
              By <strong style={{ color: "var(--text)" }}>{post.author.name}</strong>
            </p>
          )}
        </div>
      </div>

      <section style={{ borderTop: "none", paddingTop: "0" }}>
        <div className="wrap" style={{ maxWidth: "800px" }}>
          {postImageUrl && (
            <div style={{ position: "relative", width: "100%", height: "420px", marginBottom: "40px", borderRadius: "8px", overflow: "hidden", border: "1px solid var(--line)" }}>
              <Image
                src={postImageUrl}
                alt={post.mainImage?.alt || post.title}
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          )}

          {post.body && (
            <div className="post-body">
              <CustomPortableText value={post.body} />
            </div>
          )}
        </div>
      </section>

      <AuditCta
        heading="Need help ranking your business on Google?"
        body="Ask for a free audit of your website, Google Business Profile, and local search rankings across your city."
      />
    </article>
  );
}
