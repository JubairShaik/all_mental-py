'use server'

import Groq from "groq-sdk";
import { env } from "@/env.mjs";

export const groq = new Groq({ apiKey: env.GROQ_API_KEY });
