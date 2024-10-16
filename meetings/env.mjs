import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        OPENAI_API_KEY: z.string().min(1),
        GROQ_API_KEY: z.string().min(1),
        NEXTAUTH_SECRET: z.string().min(1),
        AUTH_GOOGLE_ID: z.string().min(1),
        AUTH_GOOGLE_SECRET: z.string().min(1),
        GOOGLE_API_KEY: z.string().min(1),
        GOOGLE_CALENDAR_ID: z.string().min(1),
        AUTH_RESEND_KEY: z.string().min(1),
        RESEND_FROM: z.string().min(1),
        STRIPE_API_KEY: z.string().min(1),
        STRIPE_API_SECRET: z.string().min(1),
        IS_DEBUG: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_APP_URL: z.string().min(1),
    },
    runtimeEnv: {
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        GROQ_API_KEY: process.env.GROQ_API_KEY,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
        AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
        GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
        GOOGLE_CALENDAR_ID: process.env.GOOGLE_CALENDAR_ID,
        AUTH_RESEND_KEY: process.env.AUTH_RESEND_KEY,
        RESEND_FROM: process.env.RESEND_FROM,
        STRIPE_API_KEY: process.env.STRIPE_API_KEY,
        STRIPE_API_SECRET: process.env.STRIPE_API_SECRET,
        IS_DEBUG: process.env.IS_DEBUG,
    },
});