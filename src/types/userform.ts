import { z } from "zod";


export const userFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  age: z.number().min(18, "Age should be greater than 18"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Password should be at least 8 characters")
    .regex(/[A-Z]/, "Password should contain at least one uppercase letter")
    .regex(/[0-9]/, "Password should contain at least one number"),
  confirmPassword: z.string(),
  phone: z.string().min(10, "Phone number should be at least 10 digits").max(10, "Phone number should be at most 10 digits"),
  gender: z.enum(["Male", "Female", "Other"],
    {errorMap: ()=>({message:"please select a valid gender"})}),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type UserFormSchema = z.infer<typeof userFormSchema>;

export type FormErrors = Partial<Record<keyof UserFormSchema, string[]>>;
