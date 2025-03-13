import * as z from "zod"

export const RegisterFormSchema = z.object({
    email: z.string()
    .min(1, "Email is required.").email('Please use a valid email address.'),
    password: z.string()
    .min(1, "Password is required.").min(8, 'Password must have at least 8 characters.'),
    confirmPassword: z.string()
    .min(1, "Passwords confirmation is required.")
  }).refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: 'Passwords do not match.'
  })

export const RegisterAPISchema = z.object({
    email: z.string()
    .min(1, "Email is required.").email('Please use a valid email address.'),
    password: z.string()
    .min(1, "Password is required.").min(8, 'Password must have at least 8 characters.'),
})

export const LoginFormSchema = z.object({
    email: z.string()
    .min(1, "Email is required.").email('Invalid email.'),
    password: z.string()
    .min(1, "Password is required.").min(8, 'Password must have at least 8 characters.'),
  })