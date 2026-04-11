"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const words = [
  "BELL PEPPER", "CAROLINA REAPER", "JALAPEÑO", "SERRANO",
  "ANCHOR", "BRIDGE", "SADDLE", "NUT",
  "DOOR", "WINDOW", "WALL", "CEILING",
  "HEART", "DIAMOND", "SPADE", "CLUB"
]

export function PuzzleGrid() {
  const [selectedWords, setSelectedWords] = useState<string[]>([])

  const toggleWord = (word: string) => {
    setSelectedWords(prev => 
      prev.includes(word) 
        ? prev.filter(w => w !== word)
        : prev.length < 4 ? [...prev, word] : prev
    )
  }

  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground tracking-tight">
              16 Words • Ready to Play?
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Can you find the connections before the reveal?
            </p>
          </div>
          <a 
            href="#analysis" 
            className="hidden sm:flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Skip & See Full Answers + Analysis
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Word Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {words.map((word) => {
            const isSelected = selectedWords.includes(word)
            return (
              <button
                key={word}
                onClick={() => toggleWord(word)}
                className={`
                  connex-card p-4 rounded-2xl text-center font-medium text-sm
                  transition-all duration-200 cursor-pointer
                  ${isSelected 
                    ? "bg-surface-bright ring-2 ring-primary/50 text-foreground" 
                    : "bg-surface-container-high text-foreground hover:bg-surface-bright"
                  }
                `}
              >
                {word}
              </button>
            )
          })}
        </div>

        {/* Selection Indicator */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i < selectedWords.length ? "bg-primary" : "bg-surface-container-high"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
