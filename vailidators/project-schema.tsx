import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(3).max(255),
  company: z.string().min(3).max(255),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  description: z
    .string()
    .min(10, {
      message: "Project Description must be at least 10 characters.",
    })
    .max(160, {
      message: "Project Description must not be longer than 160 characters.",
    }),
});

export type projectSchema = z.infer<typeof projectSchema>;
