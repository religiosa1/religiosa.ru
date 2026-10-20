import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { articleSchema } from "~/models/Article";
import { ingredientsSchema } from "~/models/Ingredient";

const recipeCollection = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/recipes" }),
	schema: z.object({
		title: z.string().min(1),
		originalTitle: z.string().optional(),
		recommended: z.array(z.string()).optional(),
		time: z.string(), // TODO regex
		waiting: z.string().optional(), //TODO regex
		ingredients: z.union([z.record(z.string(), z.array(ingredientsSchema)), z.array(ingredientsSchema)]),
		sources: z.array(z.string()).optional(),
	}),
});

function articlesCollection(dir: string) {
	return defineCollection({
		loader: glob({ pattern: "**/*.md", base: `./src/content/${dir}` }),
		schema: articleSchema,
	});
}

export const collections = {
	recipes: recipeCollection,
	electronics: articlesCollection("electronics"),
	polski: articlesCollection("polski"),
	programming: articlesCollection("programming"),
	woodworking: articlesCollection("woodworking"),
};
