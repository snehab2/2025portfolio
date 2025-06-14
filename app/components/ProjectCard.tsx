import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Link from 'next/link'

export default function ProjectCard({title, role, description, github, live, tech} : {title:string, role:string, description:string, github:string, live:string, tech:string}) {
  return (
    <Card className="drop-shadow-none shadow-none rounded-sm border- border-[#CFE1F3]">
        <CardHeader>
            <CardTitle><h1 className="text-2xl text-[#2B4C6D] font-bold">{title}</h1></CardTitle>
            <CardDescription>{role}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-3">
            <p className="text-lg">{description}</p>
            <p className="text-sm text-[#7197D3]">{tech}</p>
        </CardContent>
        <CardFooter className="flex flex-row gap-x-3">
            <Link href={live} target="_blank" className="bg-[#CFE1F3] px-3 py-1 rounded-4xl font-medium hover:bg-[#FFBA9C] text-[#2B4C6D] transition ease-in-out delay-75">Live</Link>
            <Link href={github} target="_blank" className="bg-[#CFE1F3] px-3 py-1 rounded-4xl font-medium hover:bg-[#FFBA9C] text-[#2B4C6D] transition ease-in-out delay-75">Github</Link>
        </CardFooter>
    </Card>
  )
}
