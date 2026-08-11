import Link from "next/link";
import Image from "next/image";


type Footer = {
    id: number;
    title: string;
    slug: string;
};

type FooterClientProps = {
    footer: Footer[];
    logo: string;

}

export default function FooterClient({ footer, logo }: FooterClientProps) {
    return (


        <footer className="grid bg-[#0d0d0d] h-[700px] ">

            {/* To Enter Email Design */}

            <div className="flex justify-center items-center p-10  bg-[#0d0d0d] border-b border-gray-400">
                <div className="">
                    <h1 className="text-6xl font-bold text-[#8caaa7]">Lets Find Product Together</h1>
                </div>
                <div className="p-4 ">
                    <input type="email" className="border text-[8caaa7] px-4 py-2 border-gray-400 text-[#8caaa7]"  placeholder="Enter Your Email" />
                </div>
            </div>


            {/* Main Footer Design */}
            <div className=" bg-[#0d0d0d] border-b z-10 border-gray-500 relative overflow-hidden min-h-[300px] ">
                <div className="absolute bottom-5 left-0 z-0 w-full overflow-hidden">
                    <h2 className="whitespace-nowrap font-serif text-[20vw] font-normal uppercase leading-[0.7] tracking-[-0.04em] text-[#0f0d0d] drop-shadow-[1px_1px_1px_#242424]">
                        Magnific
                    </h2>
                </div>

                <div className="grid grid-cols-4 p-8 gap-4 relative z-10">
                    <div className=" ">
                        <Image
                            src={logo}
                            alt="website Logo"
                            width={200}
                            height={150}
                            className="object-contain"
                            unoptimized />

                        <h1 className="text-2xl  mt-2 text-white">Koramangala Showroom</h1>
                        <p className="mt-2 text-[#8caaa7]">#No.42/1, 1st Floor, I-Towers, 100ft Intermediate Ring Road Near Oasis Mall, Ejipura, Koramangala, Bangalore - 560047</p>
                    </div>
                    <div className="">
                        <h1 className="text-2xl text-white">Designer Fans</h1>
                        <p className="text-[#8caaa7] ">Bladeless Fans <br />Chandelier Fans <br /> Ultra Modern Contemporary <br />Vintage Classic Wooden Ceiling Fan
                            Modern Wooden Fans <br />Openable Blade Fans</p>
                    </div>
                    <div className="0">
                        <h1 className="text-2xl text-white">Designer Fans</h1>
                        <p className="text-[#8caaa7]">Bladeless Fans <br />Chandelier Fans <br /> Ultra Modern Contemporary <br />Vintage Classic Wooden Ceiling Fan
                            Modern Wooden Fans <br />Openable Blade Fans</p>
                    </div>
                    <div className="">
                        <ul>
                            {
                                footer.map((item) => (
                                    <li key={item.id} className="text-[#8caaa7]">
                                        <Link href={item.slug}>{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </div>
            {/* copyright design  */}
            <div className="    text-center text-[#8caaa7] content-center">
                <h1>All Rights Reserved © 2026 – Magnific Home Appliances.</h1>
            </div>


        </footer>
    );

};