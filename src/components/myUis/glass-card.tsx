import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "xl"
  futuristic?: boolean
}

export function GlassCard({ children, className, size = "default", futuristic = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        futuristic ? "e-glass-card-futuristic" : "e-glass-card",
        size === "xl" && "w-full max-w-[1440px] min-h-[620px] p-16 md:p-24",
        size === "default" && "p-8",
        "flex flex-col items-center justify-center relative",
        className,
      )}
    >
      {/* Floating particles */}
      {futuristic && (
        <div className="particles">
          <div className="particle" style={{ left: "10%", animationDuration: "6s" }}></div>
          <div className="particle" style={{ left: "20%", animationDuration: "8s" }}></div>
          <div className="particle" style={{ left: "80%", animationDuration: "7s" }}></div>
          <div className="particle" style={{ left: "90%", animationDuration: "9s" }}></div>
          <div className="particle" style={{ left: "60%", animationDuration: "5s" }}></div>
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
