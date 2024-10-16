import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { UserAuthForm } from "@/components/forms/user-auth-form";
import { Suspense } from "react";
import { UserAuthFormSkeleton } from "@/components/user-auth-skeleton";

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your account",
};

export default function LoginPage() {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Link
                href="/"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute left-4 top-4 md:left-8 md:top-8"
                )}
            >
                <>
                    <Icons.chevronLeft className="mr-2 h-4 w-4" />
                    Back
                </>
            </Link>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <Icons.tnsLogo className="mx-auto h-6 w-fit" />
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Sign in to your account
                    </h1>
                    <p className="text-sm text-muted-foreground"></p>
                </div>
                <Suspense fallback={<UserAuthFormSkeleton />}>
                    <UserAuthForm />
                </Suspense>
                <p className="px-8 text-center text-sm text-muted-foreground">
                    <Link
                        href="/register"
                        className="hover:text-brand underline underline-offset-4"
                    >
                        Don&apos;t have an account? Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
