import Hero from './components/Hero'
import About from './components/about'
import Skills from './components/skill'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">

      {/* HERO PARALLAX */}
      <Hero />

      {/* CONTENT */}
      <div className="relative z-10 bg-slate-950">

        {/* ABOUT */}
        <About />

        {/* SKILLS */}
        <Skills />
        {/* PROJECTS */}
        <section
          id="projects"
          className="min-h-screen py-32 max-w-6xl mx-auto px-6 flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Projects
          </h2>
          <p className="text-slate-400">
            Selected works will be displayed here.
          </p>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="min-h-screen py-32 bg-slate-900/40 flex items-center"
        >
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact
            </h2>
            <p className="text-slate-300">
              Let’s build something cinematic together.
            </p>
          </div>
        </section>

      </div>
    </main>
  )
}
