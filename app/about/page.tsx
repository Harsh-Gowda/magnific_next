import Link from 'next/link';

type about = {
    id:number;
    hero_title:string;
    hero_subtitle:string;
    hero_image:string;
    description:string;
    button_text:string;
    button_link:string;
}

async function getAbout(): Promise<about>{
        const res = await fetch("http://magnificnext.local/wp-json/magnific/v1/about",
        { 
            cache :"no-store",
         }
        );

        if(!res.ok){
            throw new Error("Failed to fetch data");
        }
        return res.json();
}

export default async function AboutPage(){
    const about = await getAbout();

    return(
        <>
    <main>
        <div className='p-10'>   
        <h1 className='text-2xl'>{about.hero_title}</h1>
        </div>

        <div
            dangerouslySetInnerHTML={{  __html:about.description}}
        />

        <Image

        src={about.hero_image}
        alt="About Image"
        width={200}
        height ={100}
 />
       

</main>

</>
    );
}