import React from 'react';
import Image from 'next/image';

type Contact = {
    id: number;
    title: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    image: string;
};


async function getContact(): Promise<Contact> {
    const res = await fetch('http://magnificnext.local/wp-json/magnific/v1/contact', {
        cache: "no-store",
    }

    );

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
    return res.json();
}


export default async function ContactPage() {
    const data = await getContact();

    return (
        <main className='container grid gap-12 pb-20' >

            <section className='relative h-screen w-full overflow-hidden'>

                <Image
                    src="/images/Contact.jpg"
                    alt="Contact"
                    fill
                    className='object-cover w-full h-full'
                    unoptimized
                />


                <div className='absolute inset-0  bg-black/50 align-center justify-center flex flex-col gap-4 text-center'>
                    <h1 className='text-3xl font-bold text-white'> {data.title} </h1>
                    <p className='text-white'>{data.description}</p>
                </div>
            </section>



            <div className='w-full text-center py-40 ' style={{ backgroundImage: `url(${data.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  >

            </div>

            <div className='grid grid-rows-1 md:grid-rows-2 gap-10 '>
                <div className="bg-amber-100 p-10 gap-5 text-center">
                    <h1>Reach Us Directly</h1>
                </div>
                <div className='flex flex-row gap-12 align-center justify-center'>
                    <div className="bg-amber-500 p-10">
                        <h1> Icon box 1 </h1>
                    </div>
                    <div className="bg-amber-800 p-10">
                        <h1> Icon box 2 </h1>
                    </div>
                    <div className="bg-amber-50 p-10">
                        <h1> Icon box 3 </h1>
                    </div>
                    <div className="bg-amber-700 p-10">
                        <h1> Icon box 4 </h1>
                    </div>

                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className="bg-amber-100 p-50">
                    <h1>Magnific Designer fans</h1>
                </div>
                <div className="bg-amber-500 p-50">
                    <h1>Magnific Designer fans</h1>
                </div>
            </div>




        </main>
    );

}

