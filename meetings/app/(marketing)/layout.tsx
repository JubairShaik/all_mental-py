import Link from "next/link";

import { marketingConfig } from "@/config/marketing";
import { buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/layout/nav";
import { SiteFooter } from "@/components/layout/site-footer";
import { siteConfig } from "@/config/site";
import { HeartHandshake } from "lucide-react";

interface MarketingLayoutProps {
    children: React.ReactNode;
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="container z-40 bg-background">
                <div className="flex h-20 items-center justify-between py-6">
                    <MainNav items={marketingConfig.mainNav} />
                    <nav>
                        <Link
                            href={siteConfig.links.donate}
                            className={buttonVariants({
                                variant: "default",
                                size: "sm",
                                className: "px-4 mr-2",
                            })}
                        >
                          <HeartHandshake className="w-4 h-fit mr-2" />  Donate
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1">{children}</main>
            <SiteFooter />
        </div>
    );
}
