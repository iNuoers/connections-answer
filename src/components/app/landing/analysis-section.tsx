"use client"

import { Button } from "@/components/ui/button"
import { Copy, ChevronDown } from "lucide-react"

type CategoryColor = "yellow" | "green" | "blue" | "purple"

interface CategoryCard {
  title: string
  difficulty: string
  color: CategoryColor
  description: string
  words: string[]
}

const categories: CategoryCard[] = [
  {
    title: "CHILI PEPPER VARIETIES",
    difficulty: "EASY",
    color: "yellow",
    description: "A straightforward collection of heat levels. The linguistic link here is culinary taxonomical grouping.",
    words: ["BELL", "GHOST", "HABANERO", "SERRANO"]
  },
  {
    title: "GUITAR PARTS",
    difficulty: "MEDIUM",
    color: "green",
    description: "Mechanical components of a stringed instrument. Requires specific domain knowledge beyond basic English.",
    words: ["BRIDGE", "NUT", "SADDLE", "HEADSTOCK"]
  },
  {
    title: "STRUCTURAL PARTS",
    difficulty: "HARD",
    color: "blue",
    description: "Elements that define a room. The difficulty lies in the generic nature of the words which could fit other groups.",
    words: ["WALL", "CEILING", "FLOOR", "WINDOW"]
  },
  {
    title: "CARD SUITS",
    difficulty: "TRICKY",
    color: "purple",
    description: "The classic purple group. Requires spotting the abstract connection between disparate symbols.",
    words: ["HEART", "SPADE", "DIAMOND", "CLUB"]
  }
]

const colorStyles: Record<CategoryColor, { bg: string; text: string; badge: string }> = {
  yellow: {
    bg: "bg-primary/10",
    text: "text-primary",
    badge: "bg-primary text-primary-foreground"
  },
  green: {
    bg: "bg-secondary/10",
    text: "text-secondary",
    badge: "bg-secondary text-secondary-foreground"
  },
  blue: {
    bg: "bg-category-blue/10",
    text: "text-category-blue",
    badge: "bg-category-blue text-white"
  },
  purple: {
    bg: "bg-tertiary/10",
    text: "text-tertiary",
    badge: "bg-tertiary text-tertiary-foreground"
  }
}

export function AnalysisSection() {
  return (
    <section id="analysis" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-foreground tracking-tight">
            Deep Linguistic Analysis
          </h2>
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Show All
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Category Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => {
            const styles = colorStyles[category.color]
            return (
              <div
                key={category.title}
                className={`connex-card rounded-3xl p-6 ${styles.bg}`}
              >
                {/* Card Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-lg font-bold ${styles.text}`}>
                    {category.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles.badge}`}>
                    {category.difficulty}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Words */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.words.map((word) => (
                    <span
                      key={word}
                      className="px-3 py-1.5 rounded-xl bg-surface-container-high text-foreground text-sm font-medium"
                    >
                      {word}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full bg-transparent border-border text-foreground hover:bg-surface-container-high hover:text-foreground gap-2"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    Copy Share Card
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full text-muted-foreground hover:text-foreground hover:bg-surface-container-high"
                  >
                    Expand Story
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
