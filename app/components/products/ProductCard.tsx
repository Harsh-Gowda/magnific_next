import Link from 'next/link';
import Image from 'next/image';

type card = {
    id: number;
    name: string;
    slug: string;
    price: number | string;
    image: string;
}
type home ={
  
  card_title:string;
  card_content:string;
  button:{
    title:string;
    url:string;
  } 
    
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


async function getHomeContent(): Promise<home>{
  const res = await fetch ("http://magnificnext.local/wp-json/magnific/v1/home", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch home content");
  }
  return res.json();
}

export default async function ProductsCard() {

    const cards = await getProductsCard();
    const home = await getHomeContent();

    return (
        <section className="bg-white py-12 px-6 md:px-12  mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start max-w-7xl  mx-auto">
        
        {/* Left Intro Text Column */}

        <div className="lg:col-span-1 space-y-4 pt-2">
         
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-black">
                  {home.card_title}
                </h1>
                <p className="text-stone-400 text-sm leading-relaxed font-light">
                  {home.card_content}
                </p>
               
                <Link href={home.button.url} className="inline-block bg-black text-white py-2 px-4 rounded-sm hover:bg-gray-800 transition-colors duration-300">
                  {home.button.title}
                </Link>
              </div>
            
         
        </div>



        {/* Right Cards Layout */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
