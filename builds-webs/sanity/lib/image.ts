import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "../env";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export type SanityImageSource = Parameters<
  ReturnType<typeof createImageUrlBuilder>["image"]
>[0];

export const urlForImage = (
  source:
    | SanityImageSource
    | { asset?: unknown; _ref?: unknown }
    | null
    | undefined
) => {
  if (!source) return null;
  // If it's an object with no asset reference, cannot resolve URL
  if (typeof source === "object" && !("asset" in source) && !("_ref" in source)) {
    return null;
  }
  try {
    return imageBuilder.image(source as SanityImageSource).auto("format").fit("max");
  } catch {
    return null;
  }
};
