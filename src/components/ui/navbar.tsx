"use client"

/*
  Navbar component - Subtle Luxury Design  
  Inputs: none
  Returns: nav bar with refined luxury styling without excessive attention-grabbing effects
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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* refined luxury container with subtle effects */}
      <div className="bg-black/20 backdrop-blur-xl border border-white/15 rounded-full px-8 py-3 shadow-xl">
        {/* navigation items container */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          {items.map(({ label, href }) => (
            <Link 
              key={href} 
              href={href} 
              className={`relative transition-all duration-300 px-3 py-1.5 rounded-full ${
                pathname === href 
                  ? "text-white bg-white/15 shadow-lg" 
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {/* text with refined styling */}
              <span className="relative tracking-wide">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
} 