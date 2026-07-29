import Image from "next/image";
import Hero from "./components/Hero";
import About from "./about/page";

export default function Home() {
  return (
   <main>
    <div>
      <Hero />
      <About />
    </div>
   </main>
  );
}
