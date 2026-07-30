import Link from 'next/link';
import Image from 'next/image';

type card = {
    id: number;
    name: string;
    slug: string;
    price: number | string;
    image: string;
}


async function getProductsCard(): Promise<card[]> {

    const res = await fetch("http://magnificnext.local/wp-json/magnific/v1/card", {
        cache: "no-store",
    }

    );

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();

}

export default async function ProductsCard() {

    const cards = await getProductsCard();

    return (
        <section className="bg-white py-12 px-6 md:px-12  mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start max-w-7xl  mx-auto">
        
        {/* Left Intro Text Column */}
        <div className="lg:col-span-1 space-y-4 pt-2">
          <h2 className="text-3xl font-serif text-stone-700 font-normal tracking-wide">
            Heading Text
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed font-light">
            Elements like this introductory text can often be hidden in the block settings. Click on this text to start editing and enter your own text with some basic formatting.
          </p>
        </div>

        {/* Right Cards Layout */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((Productcard) => (
            <div 
              key={Productcard.id} 
              className="flex flex-col items-center  rounded-sm overflow-hidden pb-6 transition-all duration-300 hover:shadow-md"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full mb-4 overflow-hidden">
                <Image
                  src={Productcard.image}
                  alt={Productcard.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                  className="object-cover object-center w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Title & Price */}
              <div className="text-center space-y-1.5 px-3">
                <h3 className="text-black text-xs font-light tracking-wide uppercase">
                  {Productcard.name}
                </h3>
               
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    )

}
