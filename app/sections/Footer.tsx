import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


export default function Footer() {
  return (
    <div className="relative w-screen h-60">
        <Image
            src="/port header.png"
            fill={true}
            alt="Blue background"
            style={{objectFit: "cover"}}
            unoptimized= {true}
            className="w-full"
            quality={100}
        />
        <div className="parent absolute flex">
            <div className="paragraph flex flex-col m-auto px-4 md:px-20 mt-10">
                <h1 className="text-2xl md:text-4xl font-semibold text-white italic drop-shadow-md">Thanks for stopping by!</h1>
                <p className="text-md md:text-lg font-medium text-white drop-shadow-md">Made with sleep, matcha, & a cat</p>
                <p className="text-base md:text-md font-medium text-white drop-shadow-md">Updated 6/2025</p>
                <div className="flex flex-row gap-x-3 pt-4">
                    <Link href="https://www.linkedin.com/in/sneha-bista-1b784b229" target="_blank">
                      <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            viewBox="0 0 20 20"
                            className="fill-[#2B4C6D] hover:fill-[#7197D3] transition-colors duration-300"
                        >
                            <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z" />
                        </svg>
                    </Link>
                    <Link href="https://github.com/snehab2" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            viewBox="0 0 100 100"
                            className="fill-[#2B4C6D] hover:fill-[#7197D3] transition-colors duration-300"
                        >
                            <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                        </svg>
                    </Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}
