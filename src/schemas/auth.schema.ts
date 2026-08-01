import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address."),
  password: z
    .string()
    .min(1, "Password is required.")
    .min(8, "Password must be at least 8 characters."),
});

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters."),

  email: z.email("Please enter a valid email address."),

  phone: z
    .string()
    .regex(/^01[3-9]\d{8}$/, "Please enter a valid Bangladeshi phone number."),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/,
      "Password must contain uppercase, lowercase, number and special character."
    ),

  role: z.enum(["ADMIN", "CUSTOMER", "TECHNICIAN"]),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;