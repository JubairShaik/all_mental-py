import * as React from "react"
import { cn } from "@/lib/utils"
import { Icons } from "./icons"
import { ModeToggle } from "./mode-toggle"
import Link from "next/link";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("", className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.fullStackTechLogo className="w-6 h-fit" />
          <p className="text-center text-sm leading-loose md:text-left">
            Copyright Full Stack Tech NYC 2024.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/terms">
            <p className="text-center text-sm leading-loose md:text-left">
              Terms and Conditions |
            </p>
          </Link>
          <Link href="/privacy">
            <p className="text-center text-sm leading-loose md:text-left">
              Privacy Policy
            </p>
          </Link>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}