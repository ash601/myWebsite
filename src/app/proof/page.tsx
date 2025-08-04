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
  
  // Real superhero video project data
  const projects = [
    {
      id: "a",
      title: "A",
      video: "https://www.youtube.com/embed/XaI-EOVpDvo?autoplay=1&mute=1&loop=1&playlist=XaI-EOVpDvo&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&fs=0&vq=hd720"
    },
    {
      id: "b", 
      title: "B",
      video: "https://www.youtube.com/embed/cfVY9wLKltA?autoplay=1&mute=1&loop=1&playlist=cfVY9wLKltA&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&fs=0&vq=hd720"
    },
    {
      id: "c",
      title: "C", 
      video: "https://www.youtube.com/embed/qaeHKoq_CLM?autoplay=1&mute=1&loop=1&playlist=qaeHKoq_CLM&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&fs=0&vq=hd720"
    },
    {
      id: "d",
      title: "D",
      video: "https://www.youtube.com/embed/b9V3Pj47x4c?autoplay=1&mute=1&loop=1&playlist=b9V3Pj47x4c&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&fs=0&vq=hd720"
    },
    {
      id: "e",
      title: "E",
      video: "https://www.youtube.com/embed/ThgmWpXkKMI?autoplay=1&mute=1&loop=1&playlist=ThgmWpXkKMI&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&fs=0&vq=hd720"
    },
    {
      id: "f",
      title: "F", 
      video: "https://www.youtube.com/embed/yvIHTbTTpuQ?autoplay=1&mute=1&loop=1&playlist=yvIHTbTTpuQ&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&fs=0&vq=hd720"
    },
    {
      id: "g",
      title: "G",
      video: "https://www.youtube.com/embed/cfVY9wLKltA?autoplay=1&mute=1&loop=1&playlist=cfVY9wLKltA&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&fs=0&vq=hd720"
    },
    {
      id: "h",
      title: "H",
      video: "https://www.youtube.com/embed/qaeHKoq_CLM?autoplay=1&mute=1&loop=1&playlist=qaeHKoq_CLM&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&fs=0&vq=hd720"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">


      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/nq1M_Wc4FIc?autoplay=1&mute=1&loop=1&playlist=nq1M_Wc4FIc&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&fs=0&vq=hd720&start=13"
            className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>


      </section>

      {/* Project Gallery - Alternating Layout */}
      <section id="projects" className="relative">
        {/* Row 1: A | B */}
        <div className="flex h-[45vh]">
          <div
            className="relative w-1/2 flex items-center group cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredProject(projects[0].id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 overflow-hidden">
              <iframe src={projects[0].video} className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-105" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
            </div>

          </div>
          <div
            className="relative w-1/2 flex items-center group cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredProject(projects[1].id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 overflow-hidden">
              <iframe src={projects[1].video} className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-105" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
            </div>

          </div>
        </div>

        {/* Row 2: C */}
        <div
          className="relative h-[45vh] flex items-center group cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredProject(projects[2].id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className="absolute inset-0 overflow-hidden">
            <iframe src={projects[2].video} className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-105" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
          </div>

        </div>

        {/* Row 3: D | E */}
        <div className="flex h-[45vh]">
          <div
            className="relative w-1/2 flex items-center group cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredProject(projects[3].id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 overflow-hidden">
              <iframe src={projects[3].video} className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-105" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
            </div>
          </div>
          <div
            className="relative w-1/2 flex items-center group cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredProject(projects[4].id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 overflow-hidden">
              <iframe src={projects[4].video} className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-105" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
            </div>
          </div>
        </div>

        {/* Row 4: F */}
        <div
          className="relative h-[45vh] flex items-center group cursor-pointer overflow-hidden"
          onMouseEnter={() => setHoveredProject(projects[5].id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <div className="absolute inset-0 overflow-hidden">
            <iframe src={projects[5].video} className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-105" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
          </div>
        </div>

        {/* Row 5: G | H */}
        <div className="flex h-[45vh]">
          <div
            className="relative w-1/2 flex items-center group cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredProject(projects[6].id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 overflow-hidden">
              <iframe src={projects[6].video} className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-105" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
            </div>
          </div>
          <div
            className="relative w-1/2 flex items-center group cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredProject(projects[7].id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="absolute inset-0 overflow-hidden">
              <iframe src={projects[7].video} className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-105" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
            </div>
          </div>
        </div>
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