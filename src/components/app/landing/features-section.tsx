import { Grid3X3, Brain, Archive, BarChart3, Share2 } from "lucide-react"

const features = [
  {
    icon: Grid3X3,
    title: "Interactive Practice Grid",
    description: "Hone your skills without affecting your official stats. Our sandbox mode uses historical NYT patterns to keep you sharp.",
    color: "primary"
  },
  {
    icon: Brain,
    title: "Deep Wordplay Analysis",
    description: "We examine the red herrings and the linguistic leaps needed for every puzzle.",
    color: "tertiary"
  }
]

const subFeatures = [
  {
    icon: Archive,
    title: "Full Archive",
    description: "Access every puzzle since launch with full historical analytics."
  },
  {
    icon: BarChart3,
    title: "Difficulty Stats",
    description: "See how many players failed on today's puzzle group."
  },
  {
    icon: Share2,
    title: "One-Click Share",
    description: "Beautifully rendered share cards that don't spoil the fun for others."
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-surface-container-high mb-6">
            <Grid3X3 className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold text-foreground tracking-tight mb-4">
            Built for Discovery
          </h2>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature) => {
            const Icon = feature.icon
            const isSecondary = feature.color === "tertiary"
            return (
              <div
                key={feature.title}
                className="connex-card rounded-3xl p-8 bg-surface-container"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6 ${
                  isSecondary ? "bg-tertiary/20" : "bg-primary/20"
                }`}>
                  <Icon className={`w-6 h-6 ${isSecondary ? "text-tertiary" : "text-primary"}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Sub Features */}
        <div className="grid sm:grid-cols-3 gap-6">
          {subFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-surface-container-high mb-4">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
