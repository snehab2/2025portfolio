import React from 'react'
import Image from 'next/image'
export default function Landing() {
  return (
    <div>
        <Image
            src="/background header.png"
            fill={true}
            alt="Blue background"
            style={{objectFit: "cover"}}
        />
        <div className="parent absolute flex h-screen">
            <div className="paragraph flex flex-col m-auto px-4 md:pl-20">
                <h1 className="text-6xl md:text-7xl font-semibold text-[#2B4C6D]">Hi, I'm Sneha</h1>
                <h1 className="text-lg font-medium text-[#2B4C6D]"><i>Creating and combining art and technology to bring joy.</i></h1>
            </div>
            
        </div>
        
       
    </div>
  )
}
