import React from 'react'
import Image from 'next/image'
export default function Landing() {
  return (
    <div className="relative w-screen h-[35rem]">
        <Image
            src="/port header.png"
            layout="fill"
            alt="Blue background"
            style={{objectFit: "cover"}}
        />
        <div className="parent absolute flex h-screen">
            <div className="paragraph flex flex-col mt-52 px-4 md:px-20">
                <h1 className="text-6xl md:text-7xl font-semibold text-[#2B4C6D] italic">Hi, I'm Sneha.</h1>
                <p className="text-lg font-medium text-[#2B4C6D]">Intersecting art and technology to create joyful experiences.</p>
            </div>
            
        </div>
        
       
    </div>
  )
}
