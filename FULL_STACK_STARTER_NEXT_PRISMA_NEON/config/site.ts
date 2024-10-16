import { SiteConfig } from "@/types"
import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
  name: "Full Stack Tech",
  description: "NYC-Based Digital Design + Development",
  url: env.NEXT_PUBLIC_SERVER_URL as string,
  // # TODO: fix the ogImage
  ogImage: `${env.NEXT_PUBLIC_SERVER_URL}/public/og.jpg` as string,
  links: {
    twitter: "https://twitter.com/fullstacktechnyc",
    instagram: "https://instagram.com/fullstacktechnyc",
  },
};