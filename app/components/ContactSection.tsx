import Link from "next/link";

const testProducts = [
    {
        id:1,
        title: "product1",
    },
    {
        id:2,
        title:"product2",
    },
    {
        id:3,
        title:"product3",
    },
];

const  products = testProducts.map((product) => product.title);

console.log(products);