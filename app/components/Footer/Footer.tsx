import Link from "next/link";

import FooterClient from "./FooterClient";


type site = {
    logo:string;
};

type footer = {
    id:number;
    title:string;
    slug:string;
};

async function getFooter(): Promise<footer[]> {
    const result = await fetch("http://magnificnext.local/wp-json/magnific/v1/footer",
    {
        cache: "no-store",
    }
);


if (!result.ok){
        throw new Error("Failed to fetch data");
}

    return result.json();
}

export default async function Footer() {

    const footerItem = await  getFooter();

    return <FooterClient footer = {footerItem}/>

}

// async function getSite(): Promise <site>{
//     const res = await fetch ("http://magnificnext.local/wp-json/magnific/v1/site",
//         {
//             cache : "no-cache",
//         }
//     );

//     if(!res.ok){
//         throw new Error("Failed to fetch");
//     }
//  return res.json();
// }

