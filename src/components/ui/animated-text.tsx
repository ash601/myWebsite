"use client"

/*
  Animated Text Component - Cycling Text Animation
  Inputs: texts (array of strings), duration (milliseconds per text)
  Returns: animated text that cycles through provided texts with fade transitions
*/
import { useState, useEffect } from "react"

interface AnimatedTextProps {
  texts: string[]
  duration?: number
  className?: string
}

export default function AnimatedText({ 
  texts, 
  duration = 2000, 
  className = "" 
}: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out current text
      setIsVisible(false)
      
      // after fade out, change text and fade in
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsVisible(true)
      }, 300)
    }, duration)

    return () => clearInterval(interval)
  }, [texts.length, duration])

  return (
    <span 
      className={`transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {texts[currentIndex]}
    </span>
  )
} 