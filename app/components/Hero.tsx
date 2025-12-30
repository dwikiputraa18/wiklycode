'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HeroParallax() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const midRef = useRef<HTMLDivElement>(null)
  const fgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* BACKGROUND – SLOW + ZOOM (DOLLY FEEL) */
      gsap.fromTo(
        bgRef.current,
        { scale: 1, y: 0 },
        {
          scale: 1.3,
          y: -120,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      /* MIDGROUND – MEDIUM SPEED */
      gsap.fromTo(
        midRef.current,
        { y: 0 },
        {
          y: -200,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      /* FOREGROUND – FASTEST */
      gsap.fromTo(
        fgRef.current,
        { y: 0 },
        {
          y: -320,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      /* TEXT PARALLAX + FADE */
      gsap.fromTo(
        textRef.current,
        { y: 0, opacity: 1 },
        {
          y: -140,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top+=120 top',
            end: 'bottom top',
            scrub: true,
          },
        }
      )

      /* INITIAL TEXT REVEAL */
      gsap.from(textRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.4,
        ease: 'power4.out',
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
    >

      {/* BACKGROUND */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-[url('/hero-bg.mp4')] bg-cover bg-center will-change-transform"
      />

      {/* MIDGROUND */}
      <div
        ref={midRef}
        className="absolute inset-0 bg-[url('/hero-mid.jpg')] bg-cover bg-center opacity-70 mix-blend-screen will-change-transform"
      />

      {/* FOREGROUND */}
      <div
        ref={fgRef}
        className="absolute inset-0 bg-[url('/hero-fg.jpg')] bg-cover bg-center will-change-transform"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

      {/* TEXT */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div ref={textRef} className="max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
            Wiklycode
            <span className="block text-cyan-400">
              Cinematic Web Developer
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-300">
            Building immersive web experiences with <strong>Next.js</strong> &{' '}
            <strong>Laravel</strong>
          </p>
        </div>
      </div>

      {/* SCROLL HINT */}
      <a
      href="/about"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-slate-200 bg-black/40 px-4 py-2 rounded-md hover:bg-black/60 transition"
      aria-label="Scroll to explore — About"
    >
      Scroll to explore
    </a>
    </section>
  )
}
