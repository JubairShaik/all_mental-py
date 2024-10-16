'use server'

import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { signIn } from "@/auth";
import * as z from "zod";
import { userAuthSchema } from "@/lib/validations/auth";

type FormData = z.infer<typeof userAuthSchema>;

export const signInWithResend = async ({searchParams, data}:{searchParams: ReadonlyURLSearchParams, data: FormData }) => {
    const signInResult = await signIn("resend", {
        email: data.email.toLowerCase(),
        redirect: false,
        callbackUrl: searchParams?.get("from") || "/dashboard",
    });
    return signInResult
}