import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "seo",
      title: "SEO & Google Ranking",
    },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title (H1 Headline)",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug (URL)",
      group: "content",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      type: "reference",
      title: "Author",
      group: "content",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Main image",
      group: "content",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text (for Google Image SEO)",
        },
      ],
    }),
    defineField({
      name: "category",
      type: "reference",
      title: "Category",
      group: "content",
      to: { type: "category" },
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      group: "content",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "excerpt",
      type: "text",
      title: "Excerpt",
      group: "content",
      rows: 3,
      description: "Brief summary shown on blog card",
      validation: (Rule) => Rule.max(260),
    }),
    defineField({
      name: "body",
      type: "blockContent",
      title: "Body Content",
      group: "content",
    }),

    // ─── Dedicated SEO Fields ───────────────────────────────────────
    defineField({
      name: "seoTitle",
      type: "string",
      title: "SEO Meta Title",
      group: "seo",
      description:
        "The title shown in Google search results. Recommended: 50–60 characters. Leave blank to default to the blog title.",
      validation: (Rule) =>
        Rule.max(70).warning("Titles over 60–70 characters may get truncated by Google"),
    }),
    defineField({
      name: "seoDescription",
      type: "text",
      title: "SEO Meta Description",
      group: "seo",
      rows: 3,
      description:
        "The summary shown under your title in Google search results. Recommended: 140–160 characters. Leave blank to default to the excerpt.",
      validation: (Rule) =>
        Rule.max(160).warning("Descriptions over 160 characters may get truncated by Google"),
    }),
    defineField({
      name: "seoKeywords",
      type: "array",
      title: "Target Keywords",
      group: "seo",
      description: "Key search queries you want this blog to rank for (e.g. 'local seo greater noida')",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return {
        ...selection,
        subtitle: author && `by ${author}`,
      };
    },
  },
});
