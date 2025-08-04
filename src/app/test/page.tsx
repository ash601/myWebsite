"use client"

import { useState, useEffect } from 'react'

/*
  Cosmic Glass Effect Test Page
  Inputs: none
  Returns: Full-screen cosmic background with enhanced glassmorphism card
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
    console.log('Email submitted:', email)
  }

  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      
      {/* Cosmic Background */}
      <div className="cosmic2" aria-hidden>
        <div className="base" />
        <div className="vignette" />
        <svg className="arc" viewBox="0 0 2400 1400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="arcColor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="35%" stopColor="#6D28D9" />
              <stop offset="65%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>

            <linearGradient id="arcHighlight" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="0.0" />
              <stop offset="40%" stopColor="white" stopOpacity="0.55" />
              <stop offset="60%" stopColor="white" stopOpacity="0.40" />
              <stop offset="100%" stopColor="white" stopOpacity="0.0" />
            </linearGradient>

            <radialGradient id="softFade" cx="50%" cy="85%" r="85%">
              <stop offset="55%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>

            <filter id="arcBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="46" />
            </filter>
            <filter id="hlBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="18" />
            </filter>

            <mask id="arcMask">
              <rect width="2400" height="1400" fill="url(#softFade)" />
            </mask>
          </defs>

          <path
            d="M -500 1300 A 1800 1800 0 0 1 2900 1050"
            stroke="url(#arcColor)"
            strokeWidth="300"
            fill="none"
            filter="url(#arcBlur)"
            mask="url(#arcMask)"
            opacity="0.95"
          />

          <path
            d="M -500 1300 A 1800 1800 0 0 1 2900 1050"
            stroke="url(#arcHighlight)"
            strokeWidth="110"
            fill="none"
            filter="url(#hlBlur)"
            mask="url(#arcMask)"
            opacity="0.8"
          />
        </svg>

        <div className="haze" />
        <div className="glow tl" />
        <div className="glow tr" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        
        {/* Enhanced Glass Card */}
        <div className="relative w-full max-w-[640px] min-w-[320px]">
          
          {/* Card outer glow/shadow */}
          <div 
            className="absolute inset-0 rounded-[32px] opacity-60"
            style={{
              background: 'rgba(80, 120, 255, 0.08)',
              filter: 'blur(30px)',
              transform: 'scale(1.05) translateY(10px)'
            }}
          />
          
          {/* Main Glass Card */}
          <div 
            className="relative backdrop-blur-[50px] rounded-[32px] p-12 md:p-16 overflow-hidden"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.15) 0%, 
                  rgba(255, 255, 255, 0.08) 50%,
                  rgba(255, 255, 255, 0.12) 100%
                )
              `,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: `
                0 40px 100px rgba(0, 0, 0, 0.8),
                inset 0 1px 0 rgba(255, 255, 255, 0.3),
                inset 1px 0 0 rgba(255, 255, 255, 0.15),
                inset -1px 0 0 rgba(255, 255, 255, 0.15),
                inset 0 -1px 0 rgba(255, 255, 255, 0.1),
                0 0 80px rgba(70, 100, 255, 0.2)
              `
            }}
          >
            
            {/* Top glass reflection */}
            <div 
              className="absolute top-0 left-0 right-0 h-[50%] rounded-t-[32px] pointer-events-none"
              style={{
                background: `linear-gradient(180deg, 
                  rgba(255, 255, 255, 0.2) 0%, 
                  rgba(255, 255, 255, 0.1) 30%, 
                  rgba(255, 255, 255, 0.05) 60%,
                  transparent 100%
                )`
              }}
            />
            
            {/* Side edge highlights */}
            <div 
              className="absolute top-0 left-0 w-[2px] h-full rounded-l-[32px] pointer-events-none"
              style={{
                background: `linear-gradient(180deg, 
                  rgba(255, 255, 255, 0.4) 0%, 
                  rgba(255, 255, 255, 0.2) 50%, 
                  rgba(255, 255, 255, 0.1) 100%
                )`
              }}
            />
            <div 
              className="absolute top-0 right-0 w-[2px] h-full rounded-r-[32px] pointer-events-none"
              style={{
                background: `linear-gradient(180deg, 
                  rgba(255, 255, 255, 0.3) 0%, 
                  rgba(255, 255, 255, 0.15) 50%, 
                  rgba(255, 255, 255, 0.05) 100%
                )`
              }}
            />
            
            <div className="relative text-center">
              
              {/* Main Heading */}
              <h1 className="text-[clamp(40px,6vw,56px)] text-white/95 font-serif leading-tight tracking-tight mb-6">
                Join the waitlist.
              </h1>
              
              {/* Subtext */}
              <p className="text-[17px] text-white/80 mb-8 max-w-md mx-auto leading-relaxed">
                Gain exclusive early access to our software and stay informed about launch updates.
              </p>
              
              {/* Email Form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="h-[52px] flex-1 rounded-[16px] bg-white/10 backdrop-blur-sm border border-white/20 px-5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="h-[52px] rounded-[16px] px-8 font-semibold text-white bg-gradient-to-r from-[#0077FF] to-[#8B5CF6] shadow-[0_8px_24px_rgba(70,100,255,0.45)] hover:shadow-[0_12px_32px_rgba(70,100,255,0.55)] transition-all duration-200 whitespace-nowrap"
                >
                  Get Notified
                </button>
              </form>
              
              {/* Social Proof - Avatar Row */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="flex">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border border-white/30 relative z-10" />
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 border border-white/30 -ml-2 relative z-20" />
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 border border-white/30 -ml-2 relative z-30" />
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 border border-white/30 -ml-2 relative z-40" />
                </div>
                <span className="text-white/70 text-sm ml-2">~ 2k+ people already joined</span>
              </div>
              
              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-[32px] md:text-[36px] font-semibold text-white/95 leading-none">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.1em] text-white/60 mt-2">
                    DAYS
                  </div>
                </div>
                <div>
                  <div className="text-[32px] md:text-[36px] font-semibold text-white/95 leading-none">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.1em] text-white/60 mt-2">
                    HOURS
                  </div>
                </div>
                <div>
                  <div className="text-[32px] md:text-[36px] font-semibold text-white/95 leading-none">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.1em] text-white/60 mt-2">
                    MINUTES
                  </div>
                </div>
                <div>
                  <div className="text-[32px] md:text-[36px] font-semibold text-white/95 leading-none">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-[12px] uppercase tracking-[0.1em] text-white/60 mt-2">
                    SECONDS
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </main>

      {/* Cosmic Background Styles */}
      <style jsx>{`
        .cosmic2 {
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
          background: #050613;
        }

        .base {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(1200px at 50% 10%, rgba(99,102,241,0.12), transparent 70%),
            radial-gradient(900px at 85% 15%, rgba(139,92,246,0.10), transparent 70%),
            linear-gradient(#06081a, #02030a 60%, #010208);
        }

        .vignette {
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 280px 160px rgba(0,0,0,0.92);
        }

        .arc {
          position: absolute;
          width: 180vw;
          height: 140vh;
          left: -40vw;
          bottom: -42vh;
          mix-blend-mode: screen;
        }

        .haze {
          position: absolute;
          left: -20vw;
          right: -20vw;
          bottom: -30vh;
          height: 70vh;
          background: radial-gradient(80% 130% at 50% 0%,
            rgba(112,97,247,0.35),
            rgba(124,58,237,0.22) 45%,
            rgba(0,0,0,0) 72%);
          filter: blur(46px);
          mix-blend-mode: screen;
          opacity: 0.95;
        }

        .glow {
          position: absolute;
          width: 780px;
          height: 780px;
          filter: blur(120px);
          mix-blend-mode: screen;
          opacity: 0.22;
          background: radial-gradient(circle at center, #a78bfa, rgba(167,139,250,0.04) 70%, transparent 75%);
        }
        .glow.tl { top: -260px; left: -260px; }
        .glow.tr { top: -280px; right: -280px; }

        @media (max-width: 768px) {
          .arc {
            width: 230vw;
            left: -65vw;
            bottom: -48vh;
          }
          .glow { width: 560px; height: 560px; }
        }
      `}</style>
    </div>
  )
}
