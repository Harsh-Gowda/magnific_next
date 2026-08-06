import Link from "next/link";

import Image from "next/image";
import image from "next/image";

type  single ={
    id:number;
    name:string;
    slug:string;
    image:string;
    price:string;
};

async function singleProduct(slug:string): Promise<single>{
    const res = await fetch (`http://magnificnext.local/wp-json/wc/store/v1/products?slug=${slug}`,
        {
            cache:"no-store",
        }
    );

       if(!res.ok){
        throw new Error("failed to fetch");
       }

       const products = await res.json();

       if(!products.length){
        throw new Error("Product not found");
       }

       const product =products[0];

       return {
        id:product.id,
        name:product.name,
        slug:product.slug,
        image:product.images?.[0]?.src || "",
        price:product.prices.price,
        
       };

}

export async function productPage({params,}:{params:Promise<{slug:string}>;})
{

    const {slug} = await params;
    const product = await singleProduct(slug);

    return (
       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        </main>
    )


}
