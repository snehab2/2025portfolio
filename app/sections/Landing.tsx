import React from 'react'
import Image from 'next/image'
export default function Landing() {
  return (
    <div className="relative w-screen h-screen">
        <Image
            src="/port header.png"
            fill={true}
            alt="Blue background"
            style={{objectFit: "cover"}}
            unoptimized= {true}
            className="w-full"
        />
        <div className="parent absolute flex h-screen">
            <div className="paragraph flex flex-col m-auto px-4 md:px-20">
                <h1 className="text-6xl md:text-7xl font-semibold text-white italic drop-shadow-md">Hi, I'm Sneha.</h1>
                <p className="text-lg font-medium text-white drop-shadow-md">Intersecting art and technology to create joyful experiences.</p>
            </div>
            
        </div>
        
       
    </div>
  )
}
