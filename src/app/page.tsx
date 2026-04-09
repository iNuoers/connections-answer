import Link from 'next/link'

const featureCards = [
    {
        title: 'Routing & Layouts',
        body: 'App Router with server components, SEO-ready metadata, and flexible layouts.'
    },
    {
        title: 'TypeScript Strict',
        body: 'Strict mode, @/* alias, and lint rules to keep types sharp.'
    },
    {
        title: 'Design System',
        body: 'Tailwind tokens, cards, and stack utilities for fast, consistent UI.'
    }
]

export default function Home() {
    return (
        <div className='min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),_transparent_35%),_radial-gradient(circle_at_20%_40%,_rgba(14,165,233,0.08),_transparent_25%)] text-[var(--color-foreground)]'>
            <div className='container py-16 md:py-20'>
                <div className='card-surface'>
                    <div className='v-stack gap-10 md:gap-12'>
                        <header className='v-stack gap-4'>
                            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]'>
                                Gourd SME Frontend
                            </p>
                            <div className='v-stack gap-3'>
                                <h1 className='text-3xl md:text-4xl font-semibold leading-tight'>
                                    Production-ready Next.js 16 scaffold
                                </h1>
                                <p className='max-w-2xl text-base md:text-lg text-[var(--color-foreground)]/80'>
                                    Strict TypeScript, opinionated linting, Tailwind tokens, and Husky hooks—all wired
                                    for shipping features fast without losing quality.
                                </p>
                            </div>
                            <div className='h-stack gap-3 flex-wrap'>
                                <Link
                                    href='https://nextjs.org/docs'
                                    className='rounded-full bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary-foreground)] shadow-md shadow-blue-500/15 transition hover:translate-y-[-1px] hover:shadow-lg'
                                >
                                    View Next.js Docs
                                </Link>
                                <Link
                                    href='https://tailwindcss.com/docs'
                                    className='rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-foreground)]/90 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                                >
                                    Tailwind Guide
                                </Link>
                            </div>
                        </header>

                        <section className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                            {featureCards.map(card => (
                                <article key={card.title} className='card-surface h-full'>
                                    <div className='v-stack gap-3'>
                                        <h3 className='text-lg font-semibold'>{card.title}</h3>
                                        <p className='text-sm text-[var(--color-foreground)]/80'>{card.body}</p>
                                    </div>
                                </article>
                            ))}
                        </section>

                        <section className='v-stack gap-4'>
                            <h2 className='text-xl font-semibold'>Included examples</h2>
                            <ul className='v-stack gap-3 text-sm text-[var(--color-foreground)]/85'>
                                <li>✅ Layout with custom font and theme tokens</li>
                                <li>✅ Stack utilities (`v-stack`, `h-stack`, `center`) for clean spacing</li>
                                <li>✅ Tailwind CSS variables and dark theme class toggle</li>
                                <li>✅ Prettier, ESLint (flat), TypeScript strict, Husky, lint-staged, commitlint</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
