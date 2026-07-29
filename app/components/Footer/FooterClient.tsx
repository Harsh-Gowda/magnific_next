import Link from "next/link";
import Image from "next/image";


type Footer = {
    id: number;
    title: string;
    slug: string;
};

type FooterClientProps = {
    footer: Footer[];
    logo:string;

}

export default function FooterClient({ footer, logo}: FooterClientProps) {
    return (


        <footer className="grid bg-[#9fb6b3] ">

            {/* To Enter Email Design */}

            <div className="flex justify-center items-center p-10  bg-[#617e7b] ">
                <div className="">
                    <h1 className="text-6xl font-bold text-white">Lets Find Product Together</h1>
                </div>
                <div className="p-4 ">
                    <input type="email" className="border text-white px-4 py-2 border-gray-400" placeholder="Enter Your Email" />
                </div>
            </div>

            <hr className="text-white w-full" />


            {/* Main Footer Design */}
            <div className=" bg-[#617e7b] ">
                <div className="grid grid-cols-4 p-6 gap-4">
                    <div className=" ">
                        <Image
                            src={logo}
                            alt="website Logo"
                            width={200}
                            height={150}
                            className="object-contain"
                            unoptimized />
                                
                        
                        <h1 className="text-1xl font-semibold mt-2 text-white">Koramangala Showroom</h1>
                        <p className="mt-2 text-white">#No.42/1, 1st Floor, I-Towers, 100ft Intermediate Ring Road Near Oasis Mall, Ejipura, Koramangala, Bangalore - 560047</p>
                    </div>
                    <div className="">
                        <h1 className="text-2xl text-white">Designer Fans</h1>
                        <p className="text-white">Bladeless Fans <br />Chandelier Fans <br /> Ultra Modern Contemporary <br />Vintage Classic Wooden Ceiling Fan
                            Modern Wooden Fans <br />Openable Blade Fans</p>
                    </div>
                    <div className="0">
                        <h1 className="text-2xl text-white">Designer Fans</h1>
                        <p className="text-white">Bladeless Fans <br />Chandelier Fans <br /> Ultra Modern Contemporary <br />Vintage Classic Wooden Ceiling Fan
                            Modern Wooden Fans <br />Openable Blade Fans</p>
                    </div>
                    <div className="0">
                        <ul>
                            {
                                footer.map((item) => (
                                    <li key={item.id} className="text-white">
                                        <Link href={item.slug}>{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <hr className="text-white  mb-2 mt-2 w-full" />

                {/* copyright design  */}
                <div className=" p-2   text-center text-white">
                    <h1>All Rights Reserved © 2026 – Magnific Home Appliances.</h1>
                </div>
            </div>

        </footer>
    );

};