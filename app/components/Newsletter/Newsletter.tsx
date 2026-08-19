// import Links from "next/link";
// import Image from "next/image";


// type news = {
//     id:number;
//     title:string;
//     description:string;
//     image:{
//         url:string;
//         alt:string;
//     };
//     name:string;
// }

// async function newsLetter() : Promise<news>{
//     const res = await fetch('http://magnificnext.local/wp-json/magnific/v1/newsletter',{
//         cache:'no-store',
//     });

//     if(!res.ok){
//         throw new Error("Failed to fetch data");
//     }
//     return res.json();
// }


// export default async function newsPage(){
//     const data = await newsLetter();

//     return (
//         <main className="p-20">
//             <h1>{data.title}</h1>
//             <p>{data.description}</p>
//             <Image
//             src={data.image.url}
//             alt={data.image.alt}
//             unoptimized
//             width={200}
//             height={200}
//             />
//         </main>
//     )
// }