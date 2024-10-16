import Image from "next/image"
import Link from "next/link"
import { allProducts as products } from "contentlayer/generated"

export const metadata = {
  title: "Product",
}

export default async function ProductPage() {

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
          TNS Store
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      {products?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {products.map((product, index) => (
            <article
              key={product._id}
              className="group relative flex flex-col space-y-2"
            >
              {product.images && product.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={product.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              ))}
              <h2 className="text-2xl font-extrabold">{product.title}</h2>
              {product.description && (
                <p className="text-muted-foreground">{product.description}</p>
              )}
              <Link href={product.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No products published.</p>
      )}
    </div>
  )
}