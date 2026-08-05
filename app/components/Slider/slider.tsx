import Link from "next/link";
import Image from "next/image";
import SliderClient from "./sliderClient";

type slider = {
  
    title: string;
   description: string;
   products:product[];

};

type product = {
    id:number;
    name:string;
    slug:string;
    price:string;
    image:string;
};


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
    const data = await getSlider();

    return <SliderClient data={data}/>;
        
   
}