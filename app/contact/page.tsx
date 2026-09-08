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
        <main className='w-full'>


            {/* Hero Section */}

            <section className='relative w-full'>

                <Image
                    src="/images/Contact.jpg"
                    alt="Contact"
                    fill
                    className=' absolute inset-0 -z-20 object-cover'
                    unoptimized
                />
                <div className='absolute inset-0 -z-10 bg-black/60 '></div>


                <div className=' relative z-10 pb-20'>
                    <div className='flex justify-center items-center min-h-[400px]'>

                        <h1 className='text-3xl font-bold text-white'>{data.title}</h1>
                    </div>
                    <div className=' bg-white min-h-[350px] opacity-50  justify-center flex text-center items-center '>
                        <p className='text-black'>{data.description}</p>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4  text-center '>
                        <div className='bg-[#edeae3] p-10 '>
                            <h1 className='text-2xl font-bold text-black'>Email</h1>
                            <p className='text-black'>{data.email}</p>
                        </div>
                        <div className='bg-[#625947] p-10'>
                            <h1 className='text-2xl font-bold text-black'>Phone</h1>
                            <p className='text-black'>{data.phone}</p>
                        </div>
                        <div className='bg-[#edeae3] p-10'>
                            <h1 className='text-2xl font-bold text-black'>Email</h1>
                            <p className='text-black'>{data.email}</p>
                        </div>
                        <div className='bg-[#625947] p-10'>
                            <h1 className='text-2xl font-bold text-black'>Address</h1>
                            <p className='text-black'>{data.address}</p>
                        </div>



                    </div>

                    <div className='flex flex-row w-[100%]  justify-center text-center'>
                        <div className='bg-[#969291] w-[50%] p-10'>
                            <h1 className='text-2xl font-bold text-white'>Magnific Design fans</h1>
                        </div>
                        <div className='bg-[#636260] w-[50%] p-10'>
                            <h1 className='text-2xl font-bold text-white'>Magnific Design fans</h1>

                        </div>
                    </div>


                    {/* Contact Us Design */}

                    <div className='flex flex-col w-[100%]  justify-center text-center h-[500px]'>
                        <div className="">
                            < h1 className='text-2xl font-bold text-white'>Magnific Design fans</h1>
                        </div>
                        <div className="flex flex-row w-[100%] justify-center text-center">
                            <div className=" w-[50%] p-20">
                                <h1 className='text-2xl font-bold text-white'>Magnific Design fans</h1>
                            </div>
                            <div className=" w-[50%] p-20">
                                <h1 className='text-2xl font-bold text-white'>Magnific Design fans</h1>
                            </div>
                        </div>
                    </div>

                </div>


            </section>





        </main>


    );

}

