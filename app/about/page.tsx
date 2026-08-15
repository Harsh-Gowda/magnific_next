import Link from 'next/link';
import Image from 'next/image';

type about = {
    id: number;
    hero_title: string;
    hero_subtitle: string;
    hero_image: {
        url: string;
        alt: string;
    };
    description: string;
    button_text: string;
    button_link: string;
}

async function getAbout(): Promise<about> {
    const res = await fetch("http://magnificnext.local/wp-json/magnific/v1/about",
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function AboutPage() {
    const about = await getAbout();

    return (
        <>
 <main className="w-full bg-[#86a1a2] text-[#ffffff] py-28 px-6 lg:px-16 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Row with Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#ffffff]/15 mb-16">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffffff]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#ffffff]/70">
              01 // Studio Overview
            </span>
          </div>
          <span className="text-xs font-mono text-[#ffffff]/60 tracking-wider">
            EST. 2026 — BANGALORE
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Massive Editorial Title & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between min-h-full">
            <div>
              <h1 className="text-4xl sm:text-6xl   leading-[1.08] text-[#ffffff]">
                {about.hero_title}
              </h1>

              {/* Rich Text Body */}
              <div 
                className="mt-10 text-lg sm:text-xl  text-[#ffffff]/80 max-w-2xl [&>p]:mb-6"
                dangerouslySetInnerHTML={{ __html: about.description }}
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a 
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#111111] text-[#dadada] rounded-full text-sm font-medium tracking-wide transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <span>Discover Our Products</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              <a 
                href="#catalogue"
                className="px-8 py-4 rounded-full border border-[#ffffff]/30 text-[#111111] text-sm font-medium tracking-wide hover:bg-[#111111]/5 transition-colors"
              >
                Explore Catalogue
              </a>
            </div>
          </div>

          {/* Right Column: Frame Card with Contrast Border */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden rounded-2xl bg-[#c8c8c8]  border border-[#111111]/10 shadow-2xl">

              {about?.hero_image?.url && (
                
                <div className="relative h-[480px] w-full overflow-hidden rounded-xl">
                  <Image
                    src={about.hero_image.url}
                    alt={about.hero_image.alt || "About Image"}
                    fill
                    unoptimized
                    className="object-cover  contrast-110 hover:scale-105 transition-all duration-700 hover:grayscale-0"
                  />
                </div>
              )}
              <div className="mt-3 px-2 py-1 flex justify-between items-center text-xs font-mono text-[#111111]/60">
                <span>FIG 01. SHOWROOM</span>
                <span>KORAMANGALA</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>

        </>
    );
}