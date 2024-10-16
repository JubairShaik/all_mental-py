import { MainNav } from "./main-nav";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { RelaxButton } from "./relax-button";
import { Separator } from "../ui/separator";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex min-h-fit h-14 md:h-32 max-w-screen-xl mx-auto items-center justify-between">
                <MainNav items={siteConfig.mainNav} />
                <Link
                    href="/contact"
                    className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                        className: "capitalize mr-4",
                    })}
                >
                    Book a consultation
                </Link>
            </div>
        </header>
    );
}