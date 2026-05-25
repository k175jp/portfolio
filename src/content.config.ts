import { defineCollection } from "astro:content";
import { glob} from "astro/loaders";
import { z } from "zod";

const projects = defineCollection({
    loader: glob({base: "./src/content/projects", pattern: "*.md"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
        github: z.url().optional(),
    }),
});

export const collections = {
    projects: projects,
};