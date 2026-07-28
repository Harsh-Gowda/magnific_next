
import type { ReactNode } from 'react';

import './globals.css';
import Header from './components/Header/Header';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Footer from './components/Footer/Footer';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }: { children: ReactNode }) {
  return(
     <html lang="en" className={cn("font-sans", geist.variable)}>
    <body>
     
      <Header />
    { children }
    <Footer />
   </body>
    </html>
  )
  
}