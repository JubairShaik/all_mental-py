
import OpenAI from "openai";
import { env } from "@/env.mjs";

export const openai = new OpenAI({
    apiKey: env.OPENAI_API_KEY as string,
    maxRetries: 4,
    timeout: 60 * 1000, // 60 secs
});
