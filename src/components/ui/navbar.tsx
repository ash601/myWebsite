"use client"

/*
  Navbar component - Futuristic Luxury Design  
  Inputs: none
  Returns: nav bar with futuristic luxury styling and premium animations
*/
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  
  // navigation configuration
  const items = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
    { label: "Proof", href: "/proof" },
  ]

  return (
    // fixed positioning with enhanced z-index for layering
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      {/* futuristic luxury container with multiple layer effects */}
      <div className="relative group">
        {/* outer glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-400/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
        
        {/* main navbar container */}
        <div className="relative bg-gradient-to-r from-black/40 via-gray-900/30 to-black/40 backdrop-blur-xl border border-white/20 rounded-full px-10 py-4 shadow-2xl">
          {/* inner glow border */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-transparent to-purple-400/10 rounded-full"></div>
          
          {/* navigation items container */}
          <div className="relative flex items-center space-x-8 text-sm font-medium">
            {items.map(({ label, href }) => (
              <Link 
                key={href} 
                href={href} 
                className={`relative transition-all duration-300 group/item ${
                  pathname === href 
                    ? "text-white" 
                    : "text-white/70 hover:text-white"
                }`}
              >
                {/* active state background with premium glow */}
                {pathname === href && (
                  <div className="absolute -inset-x-3 -inset-y-2 bg-gradient-to-r from-cyan-400/20 via-white/10 to-purple-400/20 rounded-full backdrop-blur-sm border border-white/30 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 rounded-full"></div>
                  </div>
                )}
                
                {/* hover glow effect for non-active items */}
                {pathname !== href && (
                  <div className="absolute -inset-x-3 -inset-y-2 bg-white/5 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
                )}
                
                {/* text with subtle glow */}
                <span className="relative z-10 tracking-wide">
                  {label}
                </span>
                
                {/* subtle underline effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transform origin-center transition-transform duration-300 ${
                  pathname === href ? "scale-x-100" : "scale-x-0 group-hover/item:scale-x-75"
                }`}></div>
              </Link>
            ))}
          </div>
          
          {/* decorative corner accents */}
          <div className="absolute top-2 left-4 w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse"></div>
          <div className="absolute bottom-2 right-4 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>
    </nav>
  )
} 