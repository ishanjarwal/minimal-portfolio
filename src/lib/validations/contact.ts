import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(100, { message: "Name cannot exceed 100 characters." })
    .trim(),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." })
    .max(120, { message: "Email cannot exceed 120 characters." })
    .trim(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(2000, { message: "Message cannot exceed 2000 characters." })
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
