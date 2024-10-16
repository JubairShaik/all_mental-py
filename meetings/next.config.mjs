// @ts-check
import "./env.mjs";
// import { withNextDevtools } from "@next-devtools/core/plugin";
import withMDX from "@next/mdx";

!process.env.SKIP_ENV_VALIDATION && (await import("./env.mjs"));

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "*.googleusercontent.com",
                port: "",
                pathname: "*",
            },
        ],
    },
    experimental: {
        mdxRs: true,
        serverComponentsExternalPackages: ["@prisma/client"],
    },
    pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX()(config);
