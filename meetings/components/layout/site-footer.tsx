import * as React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "../ui/icons";
import { ModeToggle } from "../ui/mode-toggle";
import Link from "next/link";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <footer className={cn("", className)}>
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <Icons.tnsLogo className="w-fit h-8" />
                </div>
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <Link href="/sitemap">
                        <p className="text-center text-sm leading-loose md:text-left">
                            Site Map |
                        </p>
                    </Link>
                    <Link href="/contact">
                        <p className="text-center text-sm leading-loose md:text-left">
                            Contact
                        </p>
                    </Link>
                </div>
                <ModeToggle />
            </div>
        </footer>
    );
}
