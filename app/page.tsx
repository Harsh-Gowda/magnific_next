import Image from "next/image";
import Hero from "./components/Hero";
import About from "./about/page";
import ProductsCard from "./components/products/ProductCard";

export default function Home() {
  return (
   <main>
    <div>
      <Hero />
      <ProductsCard />
      <About />
    </div>
   </main>
  );
}
