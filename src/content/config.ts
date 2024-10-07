import { defineCollection, z } from "astro:content";

const meal = defineCollection({
    schema: z.object({
        title: z.string(),
        tapaPrice: z.string(),
        dishPrice: z.string(),
        description: z.string(),
        allergens: z.array(z.string()),
    })
})

const papelon = defineCollection({
    schema: z.object({
        title: z.string(),
        tapaPrice: z.string(),
        dishPrice: z.string(),
        description: z.string(),
        allergens: z.array(z.string()),
    })
})


const cheese = defineCollection({
    schema: z.object({
        title: z.string(),
        tapaPrice: z.string(),
        dishPrice: z.string(),
        description: z.string(),
    })
})

export const collections = {meal, papelon, cheese};