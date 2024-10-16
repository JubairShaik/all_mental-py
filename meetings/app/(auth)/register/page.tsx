import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { UserAuthForm } from "@/components/forms/user-auth-form";
import { Suspense } from "react";
import { UserAuthFormSkeleton } from "@/components/user-auth-skeleton";
import Image from "next/image";

export const metadata = {
    title: "Create an account",
    description: "Create an account to get started.",
};

export default function RegisterPage() {
    return (
        <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
            <Link
                href="/login"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute right-4 top-4 md:right-8 md:top-8"
                )}
            >
                Login
            </Link>
            <div className="hidden h-full lg:block relative">
                <Image
                    src="/images/login.jpg"
                    alt="TNS Student Art"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-4 text-center">
                        <Icons.tnsLogo className="mx-auto h-fit w-full" />
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Create an account
                        </h1>
                    </div>
                    <Suspense fallback={<UserAuthFormSkeleton />}>
                        <UserAuthForm />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
