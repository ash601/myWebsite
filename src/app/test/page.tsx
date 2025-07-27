"use client"

import { useState, useEffect } from 'react'

/*
  V1 Waitlist Page - Glassmorphic Design
  Inputs: none
  Returns: Full-screen hero with glassmorphism card, countdown timer, and email signup
*/
export default function TestPage() {
  // Email form state
  const [email, setEmail] = useState('')
  
  // Countdown timer state - targeting a date 30 days from now
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Calculate countdown to launch date
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30) // 30 days from now
    
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate.getTime() - now
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Handle email form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email signup logic here
    console.log('Email submitted:', email)
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#07090F] relative">
      
      {/* Background Arc Glow */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main violet/blue arc gradient */}
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
        
        {/* Secondary glow for depth */}
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

        {/* Subtle noise overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Top Navigation - Floating Pill */}
      <nav className="relative z-10 pt-8 px-6">
        <div className="flex justify-center">
          <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-8 py-3 shadow-lg">
            <div className="flex items-center space-x-8">
              <span className="text-white/90 font-light tracking-wide">Waitlists</span>
              <div className="flex space-x-6 text-sm">
                <span className="text-white bg-white/10 px-3 py-1 rounded-full">V1</span>
                <span className="text-white/50 hover:text-white/80 cursor-pointer transition-colors">V2</span>
                <span className="text-white/50 hover:text-white/80 cursor-pointer transition-colors">V3</span>
                <span className="text-white/50 hover:text-white/80 cursor-pointer transition-colors">V4</span>
                <span className="text-white/50 hover:text-white/80 cursor-pointer transition-colors">V5</span>
                <span className="text-white/50 hover:text-white/80 cursor-pointer transition-colors">V6</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Hero Content */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        
        {/* Glassmorphism Card */}
        <div className="w-full max-w-[640px] min-w-[320px] bg-[rgba(12,14,20,0.55)] backdrop-blur-[24px] border border-white/8 rounded-[28px] p-12 md:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.6)] relative">
          
          {/* Inner highlight */}
          <div className="absolute inset-0 rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] pointer-events-none" />
          
          <div className="text-center">
            
            {/* Main Heading */}
            <h1 className="text-[clamp(40px,6vw,56px)] text-white/95 font-serif leading-tight tracking-tight mb-6">
              Join the waitlist.
            </h1>
            
            {/* Subtext */}
            <p className="text-[17px] text-white/70 mb-8 max-w-md mx-auto leading-relaxed">
              Gain exclusive early access to our software and stay informed about launch updates.
            </p>
            
            {/* Email Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="h-[52px] flex-1 rounded-[14px] bg-white/5 border border-white/10 px-5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[rgba(150,120,255,0.35)] transition-all"
                required
              />
              <button
                type="submit"
                className="h-[52px] rounded-[14px] px-8 font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] shadow-[0_8px_24px_rgba(140,90,255,0.45)] hover:shadow-[0_12px_32px_rgba(140,90,255,0.55)] transition-all duration-200 whitespace-nowrap"
              >
                Get Notified
              </button>
            </form>
            
            {/* Social Proof - Avatar Row */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex">
                {/* Mock avatars with overlap */}
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border border-white/25 relative z-10" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border border-white/25 -ml-2 relative z-20" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-blue-500 border border-white/25 -ml-2 relative z-30" />
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-yellow-400 to-red-500 border border-white/25 -ml-2 relative z-40" />
              </div>
              <span className="text-white/60 text-sm ml-2">~ 2k+ people already joined</span>
            </div>
            
            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-[32px] md:text-[36px] font-semibold text-white/92 leading-none">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="text-[12px] uppercase tracking-[0.1em] text-white/55 mt-2">
                  DAYS
                </div>
              </div>
              <div>
                <div className="text-[32px] md:text-[36px] font-semibold text-white/92 leading-none">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-[12px] uppercase tracking-[0.1em] text-white/55 mt-2">
                  HOURS
                </div>
              </div>
              <div>
                <div className="text-[32px] md:text-[36px] font-semibold text-white/92 leading-none">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-[12px] uppercase tracking-[0.1em] text-white/55 mt-2">
                  MINUTES
                </div>
              </div>
              <div>
                <div className="text-[32px] md:text-[36px] font-semibold text-white/92 leading-none">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-[12px] uppercase tracking-[0.1em] text-white/55 mt-2">
                  SECONDS
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>

      {/* Footer Strip */}
      <footer className="relative z-10 py-6 px-6">
        <div className="flex justify-center space-x-8 text-xs text-white/30">
          <a href="#" className="hover:text-white/50 transition-colors">Use this Template</a>
          <a href="#" className="hover:text-white/50 transition-colors">Build in Framer</a>
          <span>Backgrounds sourced from Grainient</span>
        </div>
      </footer>

      {/* Responsive adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .glassmorphism-card {
            padding: 28px;
          }
          
          .heading {
            font-size: clamp(36px, 8vw, 40px);
          }
          
          .email-input, .cta-button {
            height: 48px;
          }
          
          .avatar {
            width: 24px;
            height: 24px;
          }
          
          .countdown-number {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  )
} 