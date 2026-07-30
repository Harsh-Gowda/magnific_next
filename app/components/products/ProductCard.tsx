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
        <section className='p-6  '>

            
                <div className='flex flex-row p-6 '>
                    {
                        cards.map((Productcard) => (

                            <div key={Productcard.id}>

                                <Image 
                                src= {Productcard.image}
                                alt={Productcard.name}
                                width={300}
                                height={300}
                                unoptimized/>
                                {Productcard.name}
                            </div>
                        ))
                    }
                </div>
          

        </section>
    )

}
