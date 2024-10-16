import { MainNav } from "./main-nav";
import { marketingConfig } from "@/config/marketing";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export default function Header() {
  return (
    <header className="container z-40 bg-background">
    <div className="flex h-20 items-center justify-between py-6">
      <MainNav items={marketingConfig.mainNav} />
      <nav>
        <Link
          href="mailto:admin@fullstacktechnyc.com"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "px-4"
          )}
        >
          Contact
        </Link>
      </nav>
    </div>
  </header>
  );
}