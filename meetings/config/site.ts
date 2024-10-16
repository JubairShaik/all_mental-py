import { SiteConfig } from "@/types";
import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
    name: "TNS PTA",
    description: "Everything there is to know about The Neighborhood School PTA, and more.",
    url: env.NEXT_PUBLIC_APP_URL as string,
    ogImage: `${env.NEXT_PUBLIC_APP_URL}/public/og.jpg` as string,
    links: {
        twitter: "https://twitter.com/SchoolTns",
        instagram: "https://instagram.com/neighborhoodgram",
        donate: "/donate",
    },
};