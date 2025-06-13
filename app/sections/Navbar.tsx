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
        <NavigationMenuList className="py-5 px-10 w-screen flex justify-between">
            <h1 className="font-bold text-2xl float-left">S</h1>
            <NavigationMenuItem className="flex flex-row float-right gap-x-3">
                <NavigationMenuLink asChild className="hover:text-[#7197D3]">
                    <Link href="" className="font-medium hover:bg-transparent">Work</Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild className="hover:text-[#7197D3]">
                    <Link href="" className="font-medium hover:bg-transparent">Playground</Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild className="hover:text-[#7197D3]">
                    <Link href="" className="font-medium hover:bg-transparent">About</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}
