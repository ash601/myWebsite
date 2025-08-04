"use client"

import { useState } from 'react'
import Image from 'next/image'

/*
  Portfolio page with glassmorphic design consistency
  Inputs: none  
  Returns: portfolio page with image-based project grid and glassmorphic background
*/
export default function PortfolioPage() {
  // State for hover interactions and modal views
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  
  // Modern sensual portrait collection
  const projects = [
    {
      id: "modern-beauty-1",
      title: "ETHEREAL BEAUTY",
      category: "Fashion Portrait",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop&crop=face&auto=format&q=85",
      number: "001",
      size: "large"
    },
    {
      id: "modern-beauty-2",
      title: "GOLDEN HOUR", 
      category: "Natural Beauty",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=450&fit=crop&crop=face&auto=format&q=85",
      number: "002",
      size: "medium"
    },
    {
      id: "modern-beauty-3",
      title: "URBAN ELEGANCE",
      category: "Street Fashion", 
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=450&fit=crop&crop=face&auto=format&q=85",
      number: "003",
      size: "medium"
    },
    {
      id: "modern-beauty-4",
      title: "VINTAGE ALLURE",
      category: "Editorial",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=600&fit=crop&crop=face&auto=format&q=85",
      number: "004",
      size: "large"
    },
    {
      id: "modern-beauty-5",
      title: "SOFT GLOW",
      category: "Beauty Portrait",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&h=450&fit=crop&crop=face&auto=format&q=85",
      number: "005", 
      size: "medium"
    },
    {
      id: "modern-beauty-6",
      title: "FIERCE GRACE",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=450&fit=crop&crop=face&auto=format&q=85",
      number: "006",
      size: "medium"
    },
    {
      id: "modern-beauty-7",
      title: "NATURAL RADIANCE",
      category: "Lifestyle Portrait",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&h=450&fit=crop&crop=face&auto=format&q=85", 
      number: "007",
      size: "medium"
    },
    {
      id: "modern-beauty-8",
      title: "CONTEMPORARY MUSE",
      category: "Artistic Portrait",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=800&h=600&fit=crop&crop=face&auto=format&q=85",
      number: "008",
      size: "large"
    }
  ]

  return (
    <div className="min-h-screen w-full bg-[#07090F] relative overflow-hidden">
      
      {/* Background Arc Glow - Same as other pages */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-50"
          style={{
            background: `radial-gradient(ellipse at center, 
              rgba(130, 100, 255, 0.70) 0%, 
              rgba(95, 110, 255, 0.55) 35%, 
              rgba(100, 140, 255, 0.15) 70%, 
              transparent 100%)`,
            filter: 'blur(60px)',
            transform: 'rotate(-15deg) scale(1.2)'
          }}
        />
        
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-30"
          style={{
            background: `radial-gradient(ellipse at center, 
              rgba(140, 90, 255, 0.8) 0%, 
              rgba(120, 140, 255, 0.4) 50%, 
              transparent 100%)`,
            filter: 'blur(40px)'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-[clamp(40px,6vw,56px)] text-white/95 font-serif leading-tight tracking-tight mb-4">
            Selected Work
          </h1>
          <p className="text-[17px] text-white/70 max-w-md mx-auto leading-relaxed">
            A showcase of our creative projects and collaborative endeavors
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative group cursor-pointer overflow-hidden bg-[rgba(12,14,20,0.55)] backdrop-blur-[24px] border border-white/8 rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.4)] ${
                project.size === 'large' 
                  ? 'md:col-span-2 md:row-span-2 h-[500px]' 
                  : 'h-[300px]'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Inner highlight */}
              <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] pointer-events-none" />
              
              {/* Project Image */}
              <div className="absolute inset-2 rounded-[16px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={index < 3}
                  quality={85}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500" />
              </div>

              {/* Project Number */}
              <div className="absolute top-6 right-6 z-20">
                <span className="text-white/60 text-sm font-light tracking-wider bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                  #{project.number}
                </span>
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className={`transform transition-all duration-500 ${
                  hoveredProject === project.id 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-2 opacity-90'
                }`}>
                  <h3 className="text-lg font-semibold text-white mb-1 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/70 tracking-wide">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent rounded-[20px]" />
                  <div className="absolute inset-0 border-2 border-purple-400/30 rounded-[20px]" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="text-center">
          <div className="bg-[rgba(12,14,20,0.55)] backdrop-blur-[24px] border border-white/8 rounded-[20px] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] max-w-md mx-auto">
            <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] pointer-events-none" />
            
            <div className="flex justify-center space-x-8 mb-6">
              <a 
                href="#" 
                className="text-white/60 hover:text-white transition-colors duration-300 font-light tracking-wide text-sm"
              >
                Instagram
              </a>
              <a 
                href="#" 
                className="text-white/60 hover:text-white transition-colors duration-300 font-light tracking-wide text-sm"
              >
                LinkedIn  
              </a>
            </div>
            <p className="text-white/50 text-sm tracking-wide">
              © DIGITAL ICON AGENCY LTD
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 