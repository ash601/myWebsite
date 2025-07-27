"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface BrandInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  futuristic?: boolean
}

export function BrandInput({ className, futuristic = true, onFocus, onBlur, ...props }: BrandInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isScanning, setIsScanning] = useState(false)

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    setIsScanning(true)
    onFocus?.(e)

    // Stop scanning animation after 2 seconds
    setTimeout(() => setIsScanning(false), 2000)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false)
    setIsScanning(false)
    onBlur?.(e)
  }

  return (
    <div className="relative">
      <input
        className={cn(
          "h-[54px] px-4 w-full border-0 outline-none relative z-10",
          futuristic ? "e-input-futuristic" : "bg-[var(--c-surface)] backdrop-blur-sm rounded-xl",
          isScanning && "e-input-scanning",
          "text-[var(--c-text-high)] placeholder:text-[var(--c-text-low)]",
          "t-body",
          className,
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />

      {/* Holographic border effect when focused */}
      {futuristic && isFocused && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--c-accent)] via-[var(--c-accent-alt)] to-[var(--c-accent)] opacity-20 blur-sm animate-pulse"></div>
      )}
    </div>
  )
}
