"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from 'next/image';

const Page = () => {
  const router = useRouter();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const randomX = Math.floor(Math.random() * 200) - 100;
    const randomY = Math.floor(Math.random() * 200) - 100;
    setOffset({ x: randomX, y: randomY });
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="bg-blue-500 rounded-lg h-[70vh] w-11/12 md:w-3/4 lg:w-1/2 flex flex-col justify-start items-center">
        <span className="text-4xl md:text-6xl font-bold text-white mt-8 md:mt-16">Lot na Bali!</span>
        <Image src="/images/line.png" alt='line' width={112} height={112} className='ml-[50%] -translate-x-1/2 mt-2 md:mt-4' />
        <Image src="/images/logo-plane.png" alt='airline' width={112} height={112} className='absolute left-1/2 -translate-x-[350%] md:translate-x-[-400%] mt-4 md:mt-8' />
        <span className="text-lg md:text-xl font-semibold text-white mt-16 md:mt-32 text-center">
          To jest brama, którą musisz otworzyć, aby spełnić swoje marzenie.
        </span>
        <span className="text-md md:text-lg font-medium text-white mt-4 md:mt-8 text-center">
          Wchodzisz?
        </span>
        <div className="flex gap-4 mt-4 md:mt-8">
          <Button
            variant="default"
            className="bg-orange-500 text-white"
            onClick={() => router.push("/recordings")}
          >
            Wchodzę!
          </Button>
          <Button
            variant="outline"
            className={cn("text-white border-white transition-transform duration-100")}
            onMouseEnter={moveButton}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`
            }}
          >
            Nie wchodzę :(
          </Button>
        </div>
        <div className='mt-4 md:mt-8'>
          <span className='font-light text-sm md:text-base text-white'>Bilet do kupienia we własnym zakresie.</span>
        </div>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default Page;
