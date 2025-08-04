"use client"

import Link from "next/link"
import AnimatedText from "@/components/ui/animated-text"

/*
  Home Hero Page - Glassmorphic Design
  Inputs: none
  Returns: Home page with hero section showcasing Alex as digital creator
*/
export default function HomePage() {

  return (
    <div className="min-h-screen w-full bg-[#07090F] relative overflow-hidden">
      
      {/* Background Arc Glow - Same as test page */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-70"
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-40"
          style={{
            background: `radial-gradient(ellipse at center, 
              rgba(140, 90, 255, 0.8) 0%, 
              rgba(120, 140, 255, 0.4) 50%, 
              transparent 100%)`,
            filter: 'blur(40px)'
          }}
        />

        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Main Hero Content - Account for fixed navbar */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-6">
        
        {/* Glassmorphism Card */}
        <div className="w-full max-w-[640px] min-w-[320px] bg-[rgba(12,14,20,0.55)] backdrop-blur-[24px] border border-white/8 rounded-[28px] p-12 md:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.6)] relative">
          
          {/* Inner highlight */}
          <div className="absolute inset-0 rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] pointer-events-none" />
          
          {/* Navigation tabs */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <span className="text-white/70 text-sm font-medium">Branding</span>
            <span className="text-white/70 text-sm font-medium">Web Design</span>
            <span className="text-white/70 text-sm font-medium">UX & UI design</span>
            <span className="text-white/70 text-sm font-medium">AI</span>
          </div>

          <div className="text-center">
            
            {/* Main Heading */}
            <h1 className="text-[clamp(48px,8vw,72px)] text-white/95 font-serif leading-tight tracking-tight mb-2">
              I&apos;m Anshul,
            </h1>
            
            {/* Subheading */}
            <h2 className="text-[clamp(48px,8vw,72px)] text-white/95 font-serif leading-tight tracking-tight mb-8">
              <AnimatedText 
                texts={["Programmer", "AI developer", "Artist"]}
                duration={2500}
              />
            </h2>
            
            {/* Description removed as per request */}
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 mb-12">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/portfolio"
                className="h-[52px] rounded-[14px] px-8 font-semibold text-black bg-[#C5FF6D] hover:bg-[#B8FF54] shadow-[0_8px_24px_rgba(197,255,109,0.25)] hover:shadow-[0_12px_32px_rgba(197,255,109,0.35)] transition-all duration-200 whitespace-nowrap flex items-center justify-center"
              >
                See work
              </Link>
              <Link 
                href="/contact"
                className="h-[52px] rounded-[14px] px-8 font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-200 whitespace-nowrap flex items-center justify-center"
              >
                Contact
              </Link>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  )
}
