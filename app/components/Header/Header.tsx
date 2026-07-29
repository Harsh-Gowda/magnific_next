
import React from 'react';
import Link from 'next/link';
import HeaderClient from "./HeaderClient";

type site ={
    logo:string;
};

type menu = {
    id:number;
    title:string;
    slug:string;
};

async function getMenu(): Promise<menu[]>{
    const res = await fetch("http://magnificnext.local/wp-json/magnific/v1/main",
    {
        cache:"no-store",
    }
);
if(!res.ok){
    throw new Error("Failed to fetch");

}
return res.json();
}


async function getSite(): Promise<site>{
        const res = await fetch("http://magnificnext.local/wp-json/magnific/v1/site",{
            cache:"no-cache",
        }
    );
    if(!res.ok){
        throw new Error("Failed to fetch");
    }
    return res.json();
}


export default async function Header(){
    const menuItem = await getMenu();
    const site = await getSite();

    return (
        <HeaderClient
          menu = {menuItem}
          logo = {site.logo}

        />
    );
}