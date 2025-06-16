import React from 'react'
import ProjectCard from '../components/ProjectCard'


const projects = [
    {
        title: "WEHackV",
        role: "Team Lead, Developer",
        description: "Official website for WEHack V (2024-2025), a hackathon management platform. Developed by WEHack team with collaboration with ACM UTSA.",
        github: "https://github.com/WEHackUTD/WEHackV",
        live: "https://wehack-ee2yptcth-wehack-utd.vercel.app/",
        tech: "TypeScript, Next.js, Tailwind CSS, Drizzle ORM, shadcn, NeonDB, Upstash, UploadThing, Vercel",
        image: "/official wehack mockup.png"
    },

    {
        title: "Disaster Sentiment Tracker",
        role: "Contributor",
        description: "A disaster monitoring dashboard that identifies current disasters and tracks public sentiment. This enhances situational awareness for first responders, researchers, and the general public.",
        github: "https://github.com/syl15/CSProject",
        live: "https://disaster-sentiment-tracker.vercel.app/",
        tech: "Vite.js, Tailwind CSS, RadixUI, Python, Flask, Render",
        image: "/official disaster mockup.png"
    }
]
export default function Projects() {
  return (
    <div className="flex flex-col gap-y-7 px-4 md:px-20 py-30" id="projects">
        <h1 className="text-4xl font-bold text-[#2B4C6D] italic">Selected Works</h1>
        <div className="flex flex-col gap-y-7 md:flex-row md:gap-x-10">
            {projects.map((project, index) => (
            <div className='flex flex-wrap justify-center w-full flex-grow flex-shrink basis-0 items-stretch' key={index}>
                <ProjectCard title={project.title} role={project.role} description={project.description} github={project.github} live={project.live} tech={project.tech} image={project.image}/>
            </div>
        ))}
        </div>
    </div>
  )
}
