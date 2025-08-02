"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] w-full text-center">
    
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl mx-auto py-14">
      <div className="flex-shrink-0">
        <Image src={"/images/hero.jpg"} 
        alt="Fatima Sheikh"
        width={320} 
        height={320} 
        className="rounded-full shadow-2xl border-4 border-white/40" />
      </div>

      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-3xl md:text-5xl font-bold font-serif text-black px-30">
            Fatima Sheikh
        </h2>
        <p className="text-lg md:text-xl text-shadow-black font-serif font-medium mb-8 mt-4">
        A passionate developer & designer crafting beautiful web experiences.</p>
      </div>
    </div>
  </section>

  );
}
