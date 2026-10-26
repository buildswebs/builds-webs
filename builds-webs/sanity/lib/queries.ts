import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage,
    "category": category->title,
    "author": author->name
  }
`;

export const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    mainImage,
    body,
    seoTitle,
    seoDescription,
    seoKeywords,
    "category": category->title,
    "author": {
      "name": author->name,
      "image": author->image
    }
  }
`;

export const POST_SLUGS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`;
