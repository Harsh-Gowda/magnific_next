import Image from 'next/image';
import Link from "next/link"


type galleryImage = {
  id:number;
  url:string;
  alt:string;
};

type Product = {
  id: number;
  name: string;
  slug: string;
  price: string;
  image: string;
  gallery:galleryImage[];
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

          <main className="bg-gray-300 text-black py-20">

      {/* ==============================
          PRODUCT TOP SECTION
      ============================== */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">


          {/* ==============================
              PRODUCT GALLERY
          ============================== */}

          <div className="lg:col-span-6 flex gap-4">

            {/* Thumbnails */}

            <div className="w-[90px] flex flex-col gap-4">

              {product.gallery.map((galleryimage) => (
                <div
                  key={galleryimage.id}
                  className="w-full aspect-square border border-gray-200 overflow-hidden"
                >
                  <Image
                    src={galleryimage.url}
                    alt={galleryimage.alt || product.name}
                    width={300}
                    height={300}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

            </div>


            {/* Main Product Image */}

            <div className="flex-1">

              <div className="relative aspect-square w-full bg-gray-100 overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={800}
                  unoptimized
                  priority
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>


          {/* ==============================
              PRODUCT INFORMATION
          ============================== */}

          <div className="lg:col-span-6 flex flex-col justify-start px-4 lg:px-10">

            {/* Product Title */}

            <h1 className="text-3xl md:text-4xl font-light leading-tight">
              {product.name}
            </h1>


            {/* Short Description */}

            <div className="mt-8">

              <p className="text-gray-600 text-base leading-7">
                {product.short_description}
              </p>

            </div>


            {/* Price */}

            <div className="mt-8">

              <p className="text-2xl font-medium">
                ₹{product.price}
              </p>

            </div>


            {/* Buttons */}

            <div className="flex gap-3 mt-8">

              <button
                className="
                  flex-1
                  border
                  border-black
                  px-6
                  py-4
                  text-sm
                  uppercase
                  tracking-wider
                  hover:bg-black
                  hover:text-white
                  transition
                "
              >
                Send Enquiry
              </button>

              <button
                className="
                  flex-1
                  bg-black
                  text-white
                  px-6
                  py-4
                  text-sm
                  uppercase
                  tracking-wider
                  hover:bg-gray-800
                  transition
                "
              >
                Add to Cart
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* ==============================
          DESCRIPTION SECTION
      ============================== */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


          {/* Long Description */}

          <div className="bg-gray-100 p-8 min-h-[280px]">

            <h2 className="text-xl font-medium mb-6">
              Product Long Description
            </h2>

            <div
              className="text-gray-600 leading-7"
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
            />

          </div>


          {/* Technical Detail */}

          <div className="bg-gray-100 p-8 min-h-[280px]">

            <h2 className="text-xl font-medium mb-6">
              Product Technical Detail
            </h2>

            <p className="text-gray-500">
              Technical details will be added here.
            </p>

          </div>

        </div>

      </section>


      {/* ==============================
          PRODUCT DETAIL IMAGE
      ============================== */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="relative w-full aspect-[16/7] overflow-hidden bg-gray-100">

          <Image
            src={product.image}
            alt={product.name}
            fill
            unoptimized
            className="object-cover"
          />

        </div>

      </section>


      {/* ==============================
          RELATED PRODUCTS
      ============================== */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-2xl font-medium mb-8">
          Related Products
        </h2>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          <div className="aspect-square bg-gray-100 flex items-center justify-center">
            <span className="text-sm text-gray-500">
              Related Product
            </span>
          </div>

          <div className="aspect-square bg-gray-100 flex items-center justify-center">
            <span className="text-sm text-gray-500">
              Related Product
            </span>
          </div>

          <div className="aspect-square bg-gray-100 flex items-center justify-center">
            <span className="text-sm text-gray-500">
              Related Product
            </span>
          </div>

          <div className="aspect-square bg-gray-100 flex items-center justify-center">
            <span className="text-sm text-gray-500">
              Related Product
            </span>
          </div>

        </div>

      </section>

    </main>




























    // <main>

    //   <div className='flex flex-row  gap-10 m-10 py-20 '>

    //     <div className = "gap-2 flex flex-col w-[10%]">
    //       {product.gallery.map((galleryimage) =>(
    //         <Image
    //         key = {galleryimage.id}
    //         src={galleryimage.url}
    //         alt={galleryimage.alt}
    //         width={600}
    //         height={600}
    //         unoptimized
    //         className='w-[200px] h-auto'     
    //         />
    //       ))}
    //     </div>

    //     <div className='w-[40%]'>
    //       <Image

    //         src={product.image}
    //         alt={product.name}
    //         width={800}
    //         height={800}
    //         unoptimized
    //         className='w-full h-auto'
    //       />
       
      
    //      </div>

    //     <div className='w-[50%]'>

    //       <h1>
    //         {product.name}
    //       </h1>
    //       <p>
    //         {product.price}
    //       </p>
    //     </div>

    //   </div>
    // </main>












  );

}

