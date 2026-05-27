// bookSchema.ts
import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(1, "Tytuł jest wymagany"),
  author: z.string().min(1, "Autor jest wymagany"),

  isbn: z
    .string()
    .min(10, "ISBN za krótki")
    .max(13, "ISBN za długi"),

  number_of_pages: z
    .number({ invalid_type_error: "Musi być liczbą" })
    .positive("Musi być > 0"),

  rating: z
    .number()
    .min(1, "Min 1")
    .max(5, "Max 5"),
});

export type BookFormData = z.infer<typeof bookSchema>;