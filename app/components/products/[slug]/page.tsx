import Image from "next/image";

type Product = {
  id: number;
  name: string;
  slug: string;
  price: string;
  image: string;
};

async function getProduct(slug: string): Promise<Product> {
  const res = await fetch(
    `http://magnificnext.local/wp-json/wc/store/products?slug=${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const products = await res.json();

  if (!products.length) {
    throw new Error("Product not found");
  }

  const product = products[0];

  return {
    id: product.id,
    name: product.name,
    slug: product.slug,
    price: product.prices.price,
    image: product.images?.[0]?.src || "",
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="p-10">
      <h1 className="text-3xl">
        Product Page
      </h1>

      <p className="mt-4">
        Slug: {slug}
      </p>
    </main>
  );
}