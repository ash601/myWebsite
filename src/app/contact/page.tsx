"use client"

import type React from "react"
import { useState } from "react"
import toast from 'react-hot-toast'

/*
  Contact Page - Glassmorphic Design
  Inputs: none  
  Returns: Contact page with form using approved test design
*/
export default function ContactPage() {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  
  // Loading state for form submission
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.')
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        toast.error(result.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#07090F] relative">
      
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

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        
        {/* Glassmorphism Card */}
        <div className="w-full max-w-[640px] min-w-[320px] bg-[rgba(12,14,20,0.55)] backdrop-blur-[24px] border border-white/8 rounded-[28px] p-12 md:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.6)] relative mt-6">
          
          {/* Inner highlight */}
          <div className="absolute inset-0 rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] pointer-events-none" />
          
          <div className="text-center">
            
            {/* Main Heading */}
            <h1 className="text-[clamp(40px,6vw,56px)] text-white/95 font-serif leading-tight tracking-tight mb-6">
              Get in Touch
            </h1>
            
            {/* Subtext */}
            <p className="text-[17px] text-white/70 mb-8 max-w-md mx-auto leading-relaxed">
              Have questions or want to work together? We'd love to hear from you.
            </p>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="mb-8 space-y-4">
              {/* Name and Email Row */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="h-[52px] flex-1 rounded-[14px] bg-white/5 border border-white/10 px-5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[rgba(150,120,255,0.35)] transition-all"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-[52px] flex-1 rounded-[14px] bg-white/5 border border-white/10 px-5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[rgba(150,120,255,0.35)] transition-all"
                  required
                />
              </div>
              
              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="h-[52px] w-full rounded-[14px] bg-white/5 border border-white/10 px-5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[rgba(150,120,255,0.35)] transition-all"
                required
              />
              
              {/* Message */}
              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full rounded-[14px] bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[rgba(150,120,255,0.35)] transition-all resize-none"
                required
              />
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-[52px] w-full rounded-[14px] font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] shadow-[0_8px_24px_rgba(140,90,255,0.45)] hover:shadow-[0_12px_32px_rgba(140,90,255,0.55)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] mx-auto mb-3 flex items-center justify-center shadow-[0_8px_24px_rgba(140,90,255,0.3)]">
                  <span className="text-white font-semibold text-lg">@</span>
                </div>
                <p className="text-[14px] text-white/60">
                  hello@futuresite.com
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] mx-auto mb-3 flex items-center justify-center shadow-[0_8px_24px_rgba(140,90,255,0.3)]">
                  <span className="text-white font-semibold">📞</span>
                </div>
                <p className="text-[14px] text-white/60">
                  +1 (555) 123-4567
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] mx-auto mb-3 flex items-center justify-center shadow-[0_8px_24px_rgba(140,90,255,0.3)]">
                  <span className="text-white font-semibold">📍</span>
                </div>
                <p className="text-[14px] text-white/60">
                  San Francisco, CA
                </p>
              </div>
            </div>

            {/* Response Time Indicator */}
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                <span className="text-[14px] text-white/60">
                  We typically respond within 24 hours
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  )
} 