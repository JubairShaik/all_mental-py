import * as z from "zod"

export const formPatchSchema = z.object({
  title: z.string().min(3).max(128).optional(),
  description: z.string().optional(),
  status: z.enum(["draft", "published"]).optional(),
})