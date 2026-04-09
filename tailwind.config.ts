import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/app/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
        './src/features/**/*.{ts,tsx}',
        './src/hooks/**/*.{ts,tsx}',
        './src/lib/**/*.{ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--color-background)',
                foreground: 'var(--color-foreground)',
                muted: 'var(--color-muted)',
                border: 'var(--color-border)',
                primary: 'var(--color-primary)',
                'primary-foreground': 'var(--color-primary-foreground)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)'
            },
            borderRadius: {
                md: 'var(--radius-md)',
                lg: 'var(--radius-lg)'
            },
            boxShadow: {
                soft: 'var(--shadow-soft)'
            },
            container: {
                center: true,
                padding: '1.25rem',
                screens: {
                    '2xl': '1200px'
                }
            }
        }
    },
    darkMode: ['class', ':root']
}

export default config
