import { defineCollection, z } from "astro:content";

const workexperience = defineCollection({
    schema: z.object({
        title: z.string(),
        company: z.string(),
        description: z.string(),
        technologies: z.array(z.string()),
    })
})

export const collections = {workexperience};