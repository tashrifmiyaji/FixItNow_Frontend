import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "Name is required"),

  email: z.email("Invalid email address"),

  phone: z
    .string()
    .min(11, "Phone number is invalid"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),

  role: z.enum(["ADMIN", "CUSTOMER", "TECHNICIAN"]),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
export type RegisterSchemaType = z.infer<typeof registerSchema>;