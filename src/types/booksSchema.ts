import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(1, "Tytuł jest wymagany"),
  author: z.string().min(1, "Autor jest wymagany"),
  isbn: z.string().min(10, "ISBN musi mieć min. 10 znaków"),
  number_of_pages: z.coerce
    .number()
    .positive("Liczba stron musi być większa od 0"),
  rating: z.coerce
    .number()
    .min(1, "Minimalna ocena to 1")
    .max(5, "Maksymalna ocena to 5"),
});

export type BookFormData = z.infer<typeof bookSchema>;