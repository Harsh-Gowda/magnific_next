"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Menu = {
    id:number;
    title:string;
    slug:string;
};

type HeaderClientProps = {
    menu:Menu[];
    logo :string;
}

export default function HeaderClient({menu,logo}: HeaderClientProps){
    const [isOpen, setIsOpen]= useState(false);

    return (
        <header className="bg-[#fcfdff] text-black px-6 py-1  
         flex justify-between items-center max-w-4xl mx-auto rounded-full fixed top-6 z-50 right-0 left-0">
            
            <div className= "text-2xl font-bold">
               <Image
               src = {logo}
               alt="Site Logo"
               width={120}
               height={100}
               unoptimized
               className="object-contain"
               />
            </div>
            <nav className = "hidden md:block"> 
                <ul className= "flex gap-5.5 text-1xl">

                    {
                        menu.map((item) => (
                            <li key={item.id}>
                                <Link href={`/${item.slug}`}>{item.title}</Link>
                            </li>
                        ))
                    }
                 
                </ul>
            </nav>

            <div className = " p-4">
                <button className="hidden md:block bg-white border border-gray-300 hover:bg-gray-100 text-black font-bold py-2 px-6 rounded">
                    Login
                </button>
            </div>
              <button  onClick ={() =>setIsOpen(!isOpen)}
            className='md:hidden text-2xl'>
                {isOpen ? 'X' :'☰'}
                </button>


                {/* Mobile Menu */}

                {
                    isOpen && (
                        <nav className="md:hidden p-4"> 
                            <ul>
                                {menu.map((item)=> (
                                    <li key = {item.id}> 
                                    <Link href={`/${item.slug}`}>
                                        {item.title}
                                        </Link>
                                    </li>   
                                ))}
                            </ul>

                        </nav>

                    ) 
                }

        </header>
    )

}   





