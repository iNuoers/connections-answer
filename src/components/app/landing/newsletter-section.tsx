"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription
    console.log("Subscribe:", email)
    setEmail("")
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-container via-surface to-surface-container" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-tertiary/10" />
      
      {/* Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-tertiary" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-tertiary" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-tertiary" />
        </svg>
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4 text-balance">
          {"Missed Today's Puzzle?"}
        </h2>
        <p className="text-muted-foreground mb-8">
          Subscribe to get the midnight update delivered straight to
          your inbox. Free forever, no spam.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-full px-6 py-6 bg-surface-container border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <Button 
            type="submit"
            className="gradient-btn text-primary-foreground font-semibold rounded-full px-8 py-6 text-sm uppercase tracking-wider border-0"
          >
            Subscribe Free
          </Button>
        </form>
      </div>
    </section>
  )
}
