import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const imgUrl = urlForImage(value)?.width(900).url();
      if (!imgUrl) {
        return null;
      }
      return (
        <figure style={{ margin: "32px 0" }}>
          <Image
            src={imgUrl}
            alt={value.alt || "Blog image"}
            width={900}
            height={500}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              border: "1px solid var(--line)",
            }}
          />
          {value.alt && (
            <figcaption
              style={{
                fontSize: "13px",
                color: "var(--soft)",
                marginTop: "8px",
                textAlign: "center",
              }}
            >
              {value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2
        style={{
          fontSize: "clamp(24px, 3vw, 32px)",
          marginTop: "48px",
          marginBottom: "16px",
          lineHeight: "1.25",
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          fontSize: "20px",
          marginTop: "36px",
          marginBottom: "12px",
          lineHeight: "1.35",
        }}
      >
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p
        style={{
          fontSize: "17px",
          lineHeight: "1.75",
          marginBottom: "20px",
          color: "var(--muted)",
        }}
      >
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "3px solid var(--accent)",
          paddingLeft: "20px",
          margin: "28px 0",
          fontStyle: "italic",
          color: "var(--text)",
        }}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value?.href?.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      const target = !value?.href?.startsWith("/") ? "_blank" : undefined;
      return (
        <Link
          href={value?.href || "#"}
          rel={rel}
          target={target}
          style={{
            color: "var(--accent)",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => (
      <strong style={{ color: "var(--text)", fontWeight: "600" }}>
        {children}
      </strong>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul
        style={{
          margin: "16px 0 24px 24px",
          lineHeight: "1.75",
          color: "var(--muted)",
        }}
      >
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        style={{
          margin: "16px 0 24px 24px",
          lineHeight: "1.75",
          color: "var(--muted)",
        }}
      >
        {children}
      </ol>
    ),
  },
};

export default function CustomPortableText({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return <PortableText value={value} components={components} />;
}
