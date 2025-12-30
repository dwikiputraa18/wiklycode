'use client'
'use client'


import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)


export default function Skills() {
const sectionRef = useRef<HTMLDivElement>(null)
const iconsRef = useRef<HTMLDivElement[]>([])


useEffect(() => {
const ctx = gsap.context(() => {
gsap.fromTo(
iconsRef.current,
{ opacity: 0, y: 40, scale: 0.8 },
{
opacity: 1,
y: 0,
scale: 1,
stagger: 0.2,
duration: 0.8,
ease: 'power3.out',
scrollTrigger: {
trigger: sectionRef.current,
start: 'top 70%',
},
}
)
}, sectionRef)


return () => ctx.revert()
}, [])
const skills = [
{ name: 'Next.js', svg: NextJS },
{ name: 'Laravel', svg: Laravel },
{ name: 'PostgreSQL', svg: PostgreSQL },
{ name: 'Tailwind CSS', svg: Tailwind },
{ name: 'GSAP', svg: GSAPIcon },
]


return (
<section
ref={sectionRef}
id="skills"
className="min-h-screen py-32 bg-slate-900/40 flex items-center"
>
<div className="max-w-5xl mx-auto px-6 w-full">
<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
Tech Stack
</h2>


<div className="grid grid-cols-2 md:grid-cols-5 gap-12 place-items-center">
{skills.map((skill, i) => (
<div
key={skill.name}
ref={(el) => {
if (el) iconsRef.current[i] = el
}}
className="flex flex-col items-center gap-4 text-slate-300"
>
<skill.svg />
<span className="text-sm tracking-wide">{skill.name}</span>
</div>
))}
</div>
</div>
</section>
)
}
function NextJS() {
return (
<svg width="64" height="64" viewBox="0 0 128 128" fill="none">
<circle cx="64" cy="64" r="64" fill="#000" />
<path d="M86 96L44 32h-8v64h8V44l42 64h8V32h-8v64z" fill="#fff" />
</svg>
)
}


function Laravel() {
return (
<svg width="64" height="64" viewBox="0 0 128 128" fill="none">
<path d="M64 4L4 36v56l60 32 60-32V36L64 4z" fill="#FF2D20" />
</svg>
)
}


function PostgreSQL() {
return (
<svg width="64" height="64" viewBox="0 0 128 128" fill="none">
<circle cx="64" cy="64" r="60" fill="#336791" />
<text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="36" fontWeight="bold">PG</text>
</svg>
)
}


function Tailwind() {
return (
<svg width="64" height="64" viewBox="0 0 128 128" fill="none">
<path d="M32 64c6-12 14-18 26-18 18 0 22 14 34 14 8 0 14-4 18-14-6 12-14 18-26 18-18 0-22-14-34-14-8 0-14 4-18 14z" fill="#38BDF8" />
</svg>
)
}


function GSAPIcon() {
return (
<svg width="64" height="64" viewBox="0 0 128 128" fill="none">
<rect width="128" height="128" rx="24" fill="#0AE448" />
<text x="50%" y="58%" textAnchor="middle" fill="#000" fontSize="36" fontWeight="bold">GSAP</text>
</svg>
)
}