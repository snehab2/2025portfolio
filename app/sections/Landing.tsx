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
            <div className="paragraph flex flex-col mt-52 px-4 md:pl-20">
                <h1 className="text-6xl md:text-7xl font-semibold text-[#2B4C6D]">Hi, I'm Sneha.</h1>
                <h1 className="text-lg font-semibold text-[#2B4C6D]"><i>Intersecting art and technology to build joyful experiences.</i></h1>
            </div>
            
        </div>
        
       
    </div>
  )
}
