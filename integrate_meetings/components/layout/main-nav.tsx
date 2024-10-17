"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { MainNavItem } from "@/types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "../ui/icons";
import { MobileNav } from "./mobile-nav";

interface MainNavProps {
    items?: MainNavItem[];
    children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
    const segment = useSelectedLayoutSegment();
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

    return (
        <div className="flex justify-between items-center">
            <Link
                href="/"
                className="hidden items-center space-x-2 md:flex mt-2 ml-2"
            >
                <Icons.therapistFelesiaLogoMin className="h-28 pt-6 w-fit" />
                <span className="hidden font-bold 4xl:inline-block">
                    {siteConfig.name}
                </span>
            </Link>
            <div className="ml-4">
                {items?.length ? (
                    <nav className="hidden md:flex justify-center gap-6">
                        {items?.map((item, index) => (
                            <Link
                                key={index}
                                href={item.disabled ? "#" : item.href}
                                className={cn(
                                    "flex items-center text-sm font-medium transition-colors hover:text-foreground/80 sm:text-sm capitalize",
                                    item.href.startsWith(`/${segment}`)
                                        ? "text-foreground"
                                        : "text-foreground/60",
                                    item.disabled &&
                                        "cursor-not-allowed opacity-80"
                                )}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                ) : null}
            </div>
            <button
                className="flex items-center space-x-2 md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu ? (
                    <Icons.close />
                ) : (
                    <Icons.therapistFelesiaLogoMin />
                )}
                <span className="font-bold">Menu</span>
            </button>
            {showMobileMenu && items && (
                <MobileNav items={items}>{children}</MobileNav>
            )}
        </div>
    );
}
