import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    AUTH_POSTGRES_PRISMA_URL: z.string().url(1),
    AUTH_POSTGRES_URL_NON_POOLING: z.string().url(1),
    AUTH_GITHUB_ID: z.string().min(1),
    AUTH_GITHUB_SECRET: z.string().min(1),
    AUTH_SECRET: z.string().min(1),
    EMAIL_SERVER: z.string().min(1),
    EMAIL_FROM: z.string().min(1),
    STRIPE_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_SERVER_URL: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    AUTH_POSTGRES_PRISMA_URL: process.env.AUTH_POSTGRES_PRISMA_URL,
    AUTH_POSTGRES_URL_NON_POOLING: process.env.AUTH_POSTGRES_URL_NON_POOLING,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    AUTH_SECRET: process.env.AUTH_SECRET,
    EMAIL_SERVER: process.env.EMAIL_SERVER,
    EMAIL_FROM: process.env.EMAIL_FROM,
    STRIPE_KEY: process.env.STRIPE_KEY,
  },
});
