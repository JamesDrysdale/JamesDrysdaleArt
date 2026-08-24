import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

// Type-check frontmatter using a schema
// portfolios
const portfolios = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/data/portfolios",
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroImage: image(),
      additionalImages: z.array(image()).optional(),
      date: z.coerce.date(),
      order: z.number(),
      draft: z.boolean().optional(),
    }),
});

//paintings
const paintings = defineCollection({
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/paintings",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			portfolio: reference("portfolios"),
			heroImage: image(),
			alt: z.string(),
			description: z.string(),
			medium: z.string(),
			dimensions: z.string(),
			price: z.string().optional(),
			status: z.enum(["available", "sold", "not for sale"]),
			additionalImages: z.array(image()).optional(),
			order: z.number(),
			draft: z.boolean().optional(),
		}),
});

// testimonials
const testimonials = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/testimonials",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			testimonial: z.string(),
			image: image(),
			order: z.number(),
			// will be excluded from build if draft is "true"
			draft: z.boolean().optional(),
		}),
});

// other pages
const otherPages = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/otherPages",
	}),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			draft: z.boolean().optional(),
		}),
});

export const collections = {
	portfolios,
	paintings,
	testimonials,
	otherPages,
};
