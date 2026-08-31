import Image from 'next/image';
import Link from "next/link"

type Product = {
  id: number;
  name: string;
  slug: string;
  price: string;
  image: string;
  description: string;
  short_description: string;
}

async function getProduct(slug: string): Promise<Product> {
  const res = await fetch(`http://magnificnext.local/wp-json/magnific/v1/product/${slug}`, {
    cache: "no-store",
  }
  );

  if (!res.ok) {
    throw new Error("product not found");
  }
  return res.json();

}

export default async function singleProduct({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProduct(slug)
  return (
    <main>

      <div className='flex flex-row w-full '>

        <div className='w-[50%]'>
          <Image

            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            unoptimized
            className='w-full h-auto'
          />
        </div>

        <div className='w-[50%]'>

          <h1>
            {product.name}
          </h1>
          <p>
            {product.price}
          </p>
        </div>

      </div>
    </main>
  );

}

