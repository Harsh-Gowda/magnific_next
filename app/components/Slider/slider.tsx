import Link from "next/link";
import Image from "next/image";


type slider = {
    id: number;
    title: string;
   description: string;

}


async function getSlider(): Promise<slider> {

    const res = await fetch("http://magnificnext.local/wp-json/magnific/v1/slider", {
        cache: "no-store",
    }

    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();

}

export default async function HomeSlider() {
    const homeSlider = await getSlider();

    return (
        <>

            <div className="p-6 ">
                <h1 className="text-2xl font-bold text-black">{homeSlider.title}</h1>
                <p className="text-gray-600">{homeSlider.description}</p>
            </div>






        </>
    )
}