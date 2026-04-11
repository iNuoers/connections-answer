import { Inter } from 'next/font/google'

import { Analytics } from '@/components/app/analytics'
import { ThemeProvider } from '@/components/app/provider/theme-provider'
import { Toaster } from '@/components/ui/sonner'

import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

import '@/styles/globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export const metadata: Metadata = {
    title: 'NYT Connections Answers & Analysis',
    description:
        "Today's NYT Connections answers, deep linguistic analysis, and interactive practice grid. Built for linguistic discovery and the global Connections community.",
    keywords: ['NYT Connections', 'Connections answers', 'word puzzle', 'linguistic analysis']
}

export const viewport: Viewport = {
    themeColor: '#0e0e0e',
    width: 'device-width',
    initialScale: 1
}

type RootLayoutProps = {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang='en' className={inter.variable} suppressHydrationWarning>
            <head>
                <link rel='icon' href='/imgs/logo.svg' />
                <Analytics />
            </head>
            <body className={`font-sans antialiased bg-background text-foreground`}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    themes={['light', 'dark']}
                    storageKey='astra-theme'
                    disableTransitionOnChange
                >
                    <div id='root'>
                        {children}
                        <Toaster richColors />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
