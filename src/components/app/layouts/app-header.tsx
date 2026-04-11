"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { href: "#", label: "Today's Answer", active: true },
  { href: "#archive", label: "Archive" },
  { href: "#analysis", label: "Analysis" },
//   { href: "#blog", label: "Blog" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <svg
  viewBox="0 0 24 24"
  fill="none"
  className="w-5 h-5"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Yellow - Top Left (Easiest category) */}
  <rect
    x="3"
    y="3"
    width="7"
    height="7"
    rx="1.5"
    fill="#f9d71c"
    stroke="#0a0a0a"
    strokeWidth="1.25"
  />

  {/* Green - Top Right */}
  <rect
    x="14"
    y="3"
    width="7"
    height="7"
    rx="1.5"
    fill="#8ac926"
    stroke="#0a0a0a"
    strokeWidth="1.25"
  />

  {/* Blue - Bottom Left */}
  <rect
    x="3"
    y="14"
    width="7"
    height="7"
    rx="1.5"
    fill="#4a90e2"
    stroke="#0a0a0a"
    strokeWidth="1.25"
  />

  {/* Purple - Bottom Right (Hardest category) */}
  <rect
    x="14"
    y="14"
    width="7"
    height="7"
    rx="1.5"
    fill="#9b59b6"
    stroke="#0a0a0a"
    strokeWidth="1.25"
  />
</svg>
            </div>
            <span className="text-base md:text-lg font-bold text-foreground tracking-tight">NYT Connections Answer</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  link.active
                    ? "bg-surface-container-high text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface-container"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block px-4 py-3 text-sm font-medium ${
                  link.active ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
