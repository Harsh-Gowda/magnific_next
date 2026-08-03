import Image from "next/image";
import Hero from "./components/Hero";
import About from "./about/page";
import ProductsCard from "./components/products/ProductCard";
import HomeSlider from "./components/Slider/slider";

export default function Home() {
  return (
   <main>
    <div>
      <Hero />
      <ProductsCard />
      <HomeSlider />
      <About />
    </div>
   </main>
  );
}
