import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

const stats = [
  { value: "1,034", label: "Puzzles Analyzed", icon: "chart" },
  { value: "99.9%", label: "Accuracy Rate", icon: "check" },
  { value: "4.96", label: "Average Score", icon: "star" },
  { value: "Zero", label: "Ad Clutter", icon: "block" },
]

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-background to-background" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-40 left-1/3 w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Now in Public Beta</span>
            <span className="text-primary/60">•</span>
            <span>3,892 users</span>
            <span className="text-primary/60">•</span>
            <span>Updated at midnight</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9] mb-4">
            <span className="text-foreground">{"Today's NYT"}</span>
            <br />
            <span className="text-foreground">Connections</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[0.9] mb-6">
            <span className="gradient-text">Answers & Analysis</span>
          </h2>
          <p className="text-lg text-foreground mb-2">
            #1034 • April 10, 2026
          </p>
          <p className="text-muted-foreground mb-4">
            {"Unlock every group's hidden story..."}
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-8">
            Playful engineering meets the {"world's"} favorite word game. We break down
            the linguistics, the difficulty spikes, and the logic behind every puzzle.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button className="gradient-btn text-primary-foreground font-semibold rounded-full px-8 py-6 text-base border-0 gap-2">
              <Sparkles className="w-4 h-4" />
              {"Reveal Today's Answers"}
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-base bg-transparent border-border text-foreground hover:bg-surface-container-high hover:text-foreground gap-2"
            >
              Try Interactive Grid Demo
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium">
              Cool
            </span>
            <span className="px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
              Kinship
            </span>
            <span className="px-4 py-1.5 rounded-full bg-category-blue/20 text-category-blue text-sm font-medium">
              Caribbean
            </span>
            <span className="px-4 py-1.5 rounded-full bg-tertiary/20 text-tertiary text-sm font-medium">
              Onstage
            </span>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-16">
            <span>←</span>
            <span>All the answers unclog right now.</span>
            <span>→</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-surface-container"
            >
              <div className="flex justify-center mb-3">
                {stat.icon === "chart" && (
                  <div className="w-10 h-10 rounded-xl bg-category-blue/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-category-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                )}
                {stat.icon === "check" && (
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                )}
                {stat.icon === "star" && (
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                )}
                {stat.icon === "block" && (
                  <div className="w-10 h-10 rounded-xl bg-tertiary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
