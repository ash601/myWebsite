"use client"

import { useState } from 'react'

/*
  Richard Payne Clone - Proof Page  
  Inputs: none
  Returns: Exact replica of Richard Payne's site with vertical scrolling gallery and hero section
*/
export default function ProofPage() {
  // State for any interactive elements
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  
  // Project data matching Richard Payne's actual projects
  const projects = [
    {
      id: "delta-force",
      title: "DELTA FORCE",
      tagline: "Strike Hard. Strike Fast. Survive.",
      collaborators: "TENCENT / PUPPETWORKS / TEAM JADE / TIMI STUDIO",
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1600&h=900&fit=crop&crop=center"
    },
    {
      id: "apex-legends", 
      title: "APEX LEGENDS",
      tagline: "Titans fall, Legends rise.",
      collaborators: "EA GAMES / SUN CREATURE / RESPAWN ENTERTAINMENT",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&h=900&fit=crop&crop=center"
    },
    {
      id: "nfs-unbound",
      title: "NFS: UNBOUND", 
      tagline: "Burning Rubber, Breaking Limits.",
      collaborators: "EA GAMES / CRITERION",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&h=900&fit=crop&crop=center"
    },
    {
      id: "american-horror",
      title: "AMERICAN HORROR STORIES",
      tagline: "Medicine Meets Malevolence.",
      collaborators: "FX / ELASTIC STUDIO / FEED ME LIGHT", 
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=1600&h=900&fit=crop&crop=center"
    },
    {
      id: "dark-horizons",
      title: "DARK HORIZONS",
      tagline: "Where Darkness Finds Form.",
      collaborators: "CONCEPT ART / IP DEVELOPMENT",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1600&h=900&fit=crop&crop=center"
    },
    {
      id: "midnight-suns",
      title: "THE MIDNIGHT SUNS", 
      tagline: "Heroes Unite, Darkness Falls.",
      collaborators: "2K GAMES / MARVEL",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=1600&h=900&fit=crop&crop=center"
    },
    {
      id: "badman-silence",
      title: "BADMAN SILENCE",
      tagline: "Flipping the hero's script.",
      collaborators: "SHORT FILM",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1600&h=900&fit=crop&crop=center"
    },
    {
      id: "game-awards",
      title: "THE GAME AWARDS",
      tagline: "Gaming Sparks Fly.", 
      collaborators: "MAIN TITLES",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600&h=900&fit=crop&crop=center"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">


      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        {/* Background GIF - Coding */}
        <div className="absolute inset-0">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnY2ZDZvbHhoaXQ4YjAzbDl3aXdpcWVxcWJnd3NvM3R0Z3R1ZzBmdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bGgsc5mWoryfgKBx1u/giphy.gif"
            alt="Coding Animation"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-light tracking-wide text-white mb-6">
              Cinematic Ventures
            </h1>
            <p className="text-xl font-light leading-relaxed text-white/90 max-w-lg">
              Projects span focused storytelling, dynamic sequences, and epic spectacles—each demanding its own unique visual language. 
              These worlds command deep respect, shaped by distinct animation, art direction, and narrative force that serves the story above all.
            </p>
          </div>
        </div>
      </section>

      {/* Project Gallery - Vertical Scrolling */}
      <section id="projects" className="relative">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative h-screen flex items-center group cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Full-width Background Image */}
            <div className="absolute inset-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500" />
            </div>

            {/* Project Content */}
            <div className="relative z-10 container mx-auto px-6">
              <div className="max-w-4xl">
                {/* Semi-transparent Collaborators Caption */}
                <div className="mb-4">
                  <span className="inline-block bg-black/30 backdrop-blur-sm px-4 py-2 text-sm font-light tracking-[0.1em] text-white/80 uppercase">
                    {project.collaborators}
                  </span>
                </div>

                {/* Large Project Title */}
                <h2 className="text-5xl md:text-6xl font-light tracking-wide text-white mb-4 uppercase">
                  {project.title}
                </h2>

                {/* Tagline */}
                <p className="text-xl font-light text-white/90 tracking-wide">
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Scroll Indicator (for last project) */}
            {index === projects.length - 1 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-sm font-light tracking-wide uppercase">Scroll to Connect</span>
                  <div className="w-px h-8 bg-white/40"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Footer - Connect Section */}
      <footer id="info" className="bg-black border-t border-white/10">
        <div className="container mx-auto px-6 py-16">
          {/* Connect Title */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light tracking-wide text-white mb-8">
              Connect
            </h3>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-12 mb-12">
            <a 
              href="#" 
              className="text-white/60 hover:text-white transition-colors duration-300 font-light tracking-[0.1em] uppercase text-sm"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-white/60 hover:text-white transition-colors duration-300 font-light tracking-[0.1em] uppercase text-sm"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="text-white/60 hover:text-white transition-colors duration-300 font-light tracking-[0.1em] uppercase text-sm"
            >
              Behance
            </a>
            <a 
              href="#" 
              className="text-white/60 hover:text-white transition-colors duration-300 font-light tracking-[0.1em] uppercase text-sm"
            >
              IMDb
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center mb-12">
            <h4 className="text-lg font-light tracking-wide text-white/80 mb-4">Get in touch</h4>
            <a 
              href="mailto:info@richard-payne.com" 
              className="text-white/60 hover:text-white transition-colors duration-300 font-light tracking-wide text-lg block mb-6"
            >
              info@richard-payne.com
            </a>
            <a 
              href="#" 
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-light tracking-wide px-8 py-3 border border-white/20 hover:border-white/40 transition-all duration-300 uppercase text-sm"
            >
              Book a Call
            </a>
          </div>

          {/* Bottom Section with PAYNE Logo */}
          <div className="flex justify-between items-center pt-8 border-t border-white/10">
            <p className="text-white/30 font-light tracking-[0.1em] text-xs uppercase">
              Copyright © Richard Payne
            </p>
            
            {/* PAYNE Logo Bottom Right */}
            <div className="text-xl font-light tracking-[0.2em] text-white/40">
              PAYNE
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 