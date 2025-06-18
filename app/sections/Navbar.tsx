import React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'

export default function Navbar() {
  return (
    <NavigationMenu>
        <NavigationMenuList className="py-5 px-10 w-screen flex justify-between absolute z-99">
            <h1 className="font-bold text-2xl float-left italic text-[#2B4C6D]">S.</h1>
            <NavigationMenuItem className="flex flex-row float-right gap-x-3">
                <Link href="/" className="font-medium hover:bg-transparent hover:text-[#7197D3] text-[#2B4C6D] hover:underline transition duration-100 ease-in-out">projects</Link>
                {/* <NavigationMenuLink asChild className="hover:text-[#7197D3] text-[#2B4C6D] hover:underline">
                    <Link href="" className="font-medium hover:bg-transparent">playground</Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild className="hover:text-[#7197D3] text-[#2B4C6D] hover:underline">
                    <Link href="" className="font-medium hover:bg-transparent">about</Link>
                </NavigationMenuLink> */}
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}
