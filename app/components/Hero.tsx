"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"
export default function Hero() {


    const [lightOn, setLightOn] = useState(false);
    return (
        <section className="relative h-screen">
            <Image src="/images/White.jpg"
                alt="Hero Image"
                fill 
                className={`object-cover transition-all duration-700 
                ${lightOn ? "brightness-100" : "brightness-50"}`}
                >

            </Image>

            <div className="absolute inset-0 ">
                <div className="relative z-10 flex h-full items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-6xl text-[#8caaa7] font-fold">Desigenr Fans and Lights</h1>

                        <p className=" text-[#6b908d] mt-6">let me know and I’ll check the layout import and any fetch errors next.</p>
                        <button className="bg-white text-[#6b908d] rounded-lg px-6 py-3 mt-6">Explore More</button>
                        <button onClick={() => setLightOn(!lightOn)}
                            className="bg-amber-200 border-amber-100 text-[#6b908d]">

                            {lightOn ? "Turn Of Light" : "Turn On light"}
                        </button>
                    </div>
                </div>



            </div>
        </section>

    )
}