import { z } from "zod";

export const bookSchema = z.object({
  title: z.string(),
  author: z.string(),
  isbn: z.string(),
  number_of_pages: z.coerce.number().positive(),
  rating: z.coerce.number().min(1).max(5),
});

export type BookFormData = z.infer<typeof bookSchema>;