import { notFound } from "next/navigation";
import { allProducts } from "contentlayer/generated";

import { Mdx } from "@/components/mdx-components";

import "@/styles/mdx.css";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { env } from "@/env.mjs";
import { absoluteUrl, cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

interface ProductPageProps {
    params: {
        slug: string[];
    };
}

async function getProductFromParams(params: ProductPageProps["params"]) {
    const slug = params?.slug?.join("/");
    const product = allProducts.find(
        (product) => product.slugAsParams === slug
    );

    if (!product) {
        null;
    }

    return product;
}

export async function generateMetadata({
    params,
}: ProductPageProps): Promise<Metadata> {
    const product = await getProductFromParams(params);

    if (!product) {
        return {};
    }

    const url = env.NEXT_PUBLIC_APP_URL;

    const ogUrl = new URL(`${url}/api/og`);
    ogUrl.searchParams.set("heading", product.title);
    ogUrl.searchParams.set("type", "TNS Merch");
    ogUrl.searchParams.set("mode", "dark");

    return {
        title: product.title,
        description: product.description,
        openGraph: {
            title: product.title,
            description: product.description,
            type: "article",
            url: absoluteUrl(product.slug),
            images: [
                {
                    url: ogUrl.toString(),
                    width: 1200,
                    height: 630,
                    alt: product.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: product.title,
            description: product.description,
            images: [ogUrl.toString()],
        },
    };
}

export async function generateStaticParams(): Promise<
    ProductPageProps["params"][]
> {
    return allProducts.map((product) => ({
        slug: product.slugAsParams.split("/"),
    }));
}

export default async function ProductPage({ params }: ProductPageProps) {
    const product = await getProductFromParams(params);

    if (!product) {
        notFound();
    }

    return (
        <article className="container relative max-w-3xl py-6 lg:py-10">
            <Link
                href="/store"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute left-[-200px] top-14 hidden xl:inline-flex"
                )}
            >
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                See all products
            </Link>
            <div>
                <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
                    {product.title}
                </h1>
            </div>
            {product.images &&
                product.images.map((image, index) => (
                    <Image
                        key={index}
                        src={image[0]}
                        alt={product.title}
                        width={1280}
                        height={720}
                        className="my-8 rounded-md border bg-muted transition-colors"
                        priority
                    />
                ))}
            <Mdx code={product.body.code} />
            <hr className="mt-12" />
            <div className="flex justify-center py-6 lg:py-10">
                <Link
                    href="/store"
                    className={cn(buttonVariants({ variant: "ghost" }))}
                >
                    <Icons.chevronLeft className="mr-2 h-4 w-4" />
                    See all products.
                </Link>
            </div>
        </article>
    );
}
