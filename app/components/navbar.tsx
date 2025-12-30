'use client'


import Link from 'next/link'
import { useEffect, useState } from 'react'


export default function Navbar() {
const [scrolled, setScrolled] = useState(false)


useEffect(() => {
const onScroll = () => setScrolled(window.scrollY > 50)
window.addEventListener('scroll', onScroll)
return () => window.removeEventListener('scroll', onScroll)
}, [])


return (
<nav className={`fixed top-0 w-full z-50 transition-all ${
scrolled ? 'bg-slate-900/80 backdrop-blur border-b border-slate-800' : 'bg-transparent'
}`}>
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<Link href="/" className="text-xl font-bold tracking-wide text-white">
wiklycode<span className="text-cyan-400">.dev</span>
</Link>
<div className="hidden md:flex gap-8 text-sm">
<a href="#about" className="hover:text-cyan-400">About</a>
<a href="#skills" className="hover:text-cyan-400">Skills</a>
<a href="#projects" className="hover:text-cyan-400">Projects</a>
<a href="#contact" className="hover:text-cyan-400">Contact</a>
</div>
</div>
</nav>
)
}