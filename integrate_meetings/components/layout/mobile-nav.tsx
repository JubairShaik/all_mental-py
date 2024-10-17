import * as React from "react";
import Link from "next/link";

import { MainNavItem } from "@/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useLockBody } from "@/hooks/use-lock-body";
import { Icons } from "../ui/icons";
import { buttonVariants } from "../ui/button";

interface MobileNavProps {
    items: MainNavItem[];
    children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
    useLockBody();

    return (
        <div
            className={cn(
                "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden"
            )}
        >
            <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md align-middle items-center">
                <Link href="/" className="flex flex-col mx-auto items-center">
                    <Icons.therapistFelesiaLogoMin className="h-fit w-1/2 py-4" />
                    <h1 className="font-bold text-lg">{siteConfig.name}</h1>
                </Link>
                <nav className="mx-auto">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? "#" : item.href}
                            className={cn(
                                "w-full rounded-md p-2 text-sm font-medium hover:underline capitalize",
                                item.disabled && "cursor-not-allowed opacity-60"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
                <div className="mx-auto w-full">
                    <Link
                        className={buttonVariants({
                            variant: "default",
                            size: "lg",
                            className: "w-full capitalize",
                        })}
                        href="/contact"
                    >
                        Book a consultation
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
