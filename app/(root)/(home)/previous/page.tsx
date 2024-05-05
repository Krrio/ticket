"use client"

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
    const randomX = Math.floor(Math.random() * 400) - 100;
    const randomY = Math.floor(Math.random() * 400) - 100;
    setOffset({ x: randomX, y: randomY });
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="bg-blue-500 rounded-lg h-[70vh] w-full flex flex-col justify-start items-center mt-[25px]">
        <span className="text-6xl font-bold text-white mt-[90px]">Lot na Bali!</span>
        <Image src="/images/line.png" alt='line' width={112} height={112} className='ml-[190px] mt-[-5px]'/>
        <Image src="/images/logo-plane.png" alt='airline' width={112} height={112} className='absolute ml-[-700px] mt-[25px]'/>
        <span className="text-xl font-semibold text-white mt-[250px]">
          To jest brama, którą musisz otworzyć, aby spełnić swoje marzenie.
        </span>
        <span className="text-lg font-medium text-white mt-[10px]">
          Wchodzisz?
        </span>
        <div className="flex gap-4 mt-[20px]">
          <Button
            variant="default"
            className="bg-orange-1 text-white"
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
        <div className='mt-[300px]'>
          <span className='font-light'>Bilet do kupienia we własnym zakresie.</span>
        </div>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default Page;
