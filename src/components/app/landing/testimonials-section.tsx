import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Finally, a site that respects the engineering of the game. The analysis is sharp and actually helps me improve.",
    author: "LingoLab_43",
    platform: "Reddit",
    color: "primary"
  },
  {
    quote: "The UI is cleaner than the actual game. No ads, no fluff, just pure linguistic data.",
    author: "WordNerdJack",
    platform: "Twitter",
    color: "category-blue"
  },
  {
    quote: "I use the shareable cards every morning for our discord group. Best-looking connections tool out there.",
    author: "PuzzleFanatic",
    platform: "Discord",
    color: "tertiary"
  }
]

const colorStyles: Record<string, string> = {
  primary: "text-primary",
  "category-blue": "text-category-blue",
  tertiary: "text-tertiary"
}

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-3xl p-6 bg-surface-container"
            >
              <Quote className={`w-8 h-8 mb-4 ${colorStyles[testimonial.color]}`} />
              <p className="text-foreground leading-relaxed mb-6">
                {`"${testimonial.quote}"`}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                  <span className={`text-sm font-semibold ${colorStyles[testimonial.color]}`}>
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.platform}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
