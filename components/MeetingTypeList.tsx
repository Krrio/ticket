"use client"

import Image from 'next/image'
import React from 'react'
import { Toaster } from "@/components/ui/toaster"
import { Button } from './ui/button'
import { useToast } from './ui/use-toast'


const MeetingTypeList = () => {

  const { toast } = useToast();
  
  return (
    <section className='grid gird-cols-1 gap-5  md:grid-cols-2 xl:grid-cols-4'>
      <div className='bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer' onClick={() => {}}>
        <div className='flex-center glassmorphism size-12 rounded-[10px]'>
          <Image 
            src='/icons/add-meeting.svg' 
            alt='meeting'
            width={27}
            height={27}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold'>
            Zaplanuj Lot
          </h1>
          <p className='text-lg font-normal'>
            Zaplanuj następną podróż
          </p>
        </div>
      </div>

      <div className='bg-blue-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer' onClick={() => {}}>
        <div className='flex-center glassmorphism size-12 rounded-[10px]'>
          <Image 
            src='/icons/add-meeting.svg' 
            alt='meeting'
            width={27}
            height={27}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold'>
            Zrób odprawę
          </h1>
          <p className='text-lg font-normal'>
            Zrób błyskawiczną odprawę
          </p>
        </div>
      </div>

      <div className='bg-purple-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer' onClick={() => {}}>
        <div className='flex-center glassmorphism size-12 rounded-[10px]'>
          <Image 
            src='/icons/add-meeting.svg' 
            alt='meeting'
            width={27}
            height={27}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold'>
            Ubezpiecz bagaż
          </h1>
          <p className='text-lg font-normal'>
            Sprawdź ofertę
          </p>
        </div>
      </div>

      <div className='bg-yellow-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer' onClick={() => {}}>
        <div className='flex-center glassmorphism size-12 rounded-[10px]'>
          <Image 
            src='/icons/add-meeting.svg' 
            alt='meeting'
            width={27}
            height={27}
          />
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='text-2xl font-bold'>
            Promocje
          </h1>
          <p className='text-lg font-normal'>
            Sprawdź nasze najlepsze oferty!
          </p>
        </div>
      </div>
    </section>
  )
}

export default MeetingTypeList