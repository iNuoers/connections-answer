import { AuthProvider } from '@/components/app/provider/auth-provider'
import { ThemeProvider } from '@/components/app/provider/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib'
import { sfProDisplay, sfProText } from '@/styles/fonts'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import '@/styles/globals.css'

export const metadata: Metadata = {
    title: 'Gourd SME Frontend',
    description: 'Production-ready Next.js scaffold'
}

type RootLayoutProps = {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head>
                <link rel='icon' href='/imgs/favicon.ico' />
            </head>
            <body className={cn(sfProText.variable, sfProDisplay.variable, 'antialiased')}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    themes={['light', 'dark']}
                    storageKey='astra-theme'
                    disableTransitionOnChange
                >
                    <div id='root'>
                        <AuthProvider>{children}</AuthProvider>
                        <Toaster richColors />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}
