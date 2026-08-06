"use client";

import Image from 'next/image';
import Link from 'next/link';

import { useState } from "react";


type product = {
    id: number;
    name: string;
    slug: string;
    price: string;
    image: string;
}

type slider = {

    title: string;
    description: string;
    products: product[];
}


type props = {
    data: slider;
}

export default function sliderClient({ data }: props) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) =>
            prev === data.products.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? data.products.length - 1 : prev - 1

        );
    };

    return (
        <section className="bg-white py-12 px-6 md:px-12  mx-auto">

            <div className="grid grid-cols-1 lg:grid-rows-4 gap-8 items-start max-w-7xl  mx-auto ">
                <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
                <p className="text-gray-600">{data.description}</p>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <button onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full bg-white shadow-md
                     flex items-center justify-center
                     hover:bg-black hover:text-white transition">
                    ←
                </button>




                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${current * 100}%)` }}>

                        {data.products.map((product) => (

                            <div key={product.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 p-4">
                                <Link href={`products/${product.slug}`} className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">


                                    {/* //Image component for product image */}

                                    <div className="relative aspect-square w-full mb-4 overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            unoptimized
                                            className="object-cover object-center w-full h-full transition-transform duration-500 hover:scale-105"
                                        />

                                    </div>

                                    <h3 className="text-black text-xs font-light tracking-wide uppercase">
                                        {product.name}
                                    </h3>
                                </Link>
                            </div>

                        ))}

                    </div>

                </div>

                <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full bg-white shadow-md
                     flex items-center justify-center
                     hover:bg-black hover:text-white transition">
                    →

                </button>

            </div>

        </section>
    );

}



