
import { env } from "@/env.mjs";
import {calendar} from "@googleapis/calendar";

export const cal =  calendar({ version: "v3", auth: env.GOOGLE_API_KEY });
