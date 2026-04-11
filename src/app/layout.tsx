import Script from 'next/script'
import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/app/provider/theme-provider'
import { Toaster } from '@/components/ui/sonner'

import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

import '@/styles/globals.css'

const GA_ID = 'G-GLFW6WP55C'

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
                <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy='afterInteractive' />
                <Script id='google-analytics' strategy='afterInteractive'>
                    {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
                </Script>
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
