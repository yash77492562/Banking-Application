import {z} from 'zod'


export const userSigninSchema = z.object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    phone: z.string().min(10).max(10),
    password: z.string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")
})
export const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")
})
export const loginPin = z.number()
  .int()
  .gte(100000, "Pin must be a 6-digit number")
  .lte(999999, "Pin must be a 6-digit number");


  
export type UserSigninSchema = z.infer<typeof userSigninSchema>;
export type UserLoginSchema = z.infer<typeof userLoginSchema>;
export type LoginPin = z.infer<typeof loginPin>