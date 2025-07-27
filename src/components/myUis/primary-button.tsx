"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "default" | "hover"
  holographic?: boolean
}

export function PrimaryButton({
  children,
  className,
  variant = "default",
  holographic = true,
  onMouseEnter,
  onMouseLeave,
  ...props
}: PrimaryButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={cn(
        "t-body px-6 h-[54px] rounded-full transition-all duration-300 relative overflow-hidden",
        "text-[var(--c-text-high)]",
        holographic ? "e-button-holographic" : "",
        isHovered && !holographic ? "g-glow-arc e-accent-glow" : "",
        !isHovered && !holographic ? "bg-[var(--c-accent)]" : "",
        className,
      )}
      onMouseEnter={(e) => {
        setIsHovered(true)
        onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        setIsHovered(false)
        onMouseLeave?.(e)
      }}
      {...props}
    >
      <span className="relative z-10">{children}</span>

      {/* Holographic shine effect */}
      {holographic && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      )}
    </button>
  )
}
