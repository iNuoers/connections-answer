import { AnalysisSection } from '@/components/app/landing/analysis-section'
import { FeaturesSection } from '@/components/app/landing/features-section'
import { Hero } from '@/components/app/landing/hero'
import { NewsletterSection } from '@/components/app/landing/newsletter-section'
import { PuzzleGrid } from '@/components/app/landing/puzzle-grid'
import { TestimonialsSection } from '@/components/app/landing/testimonials-section'
import { Footer } from '@/components/app/layouts/app-footer'
import { Header } from '@/components/app/layouts/app-header'

export default function Home() {
    return (
        <main className='min-h-screen bg-background'>
            <Header />
            <Hero />
            <PuzzleGrid />
            <AnalysisSection />
            <FeaturesSection />
            <TestimonialsSection />
            <NewsletterSection />
            <Footer />
        </main>
    )
}
