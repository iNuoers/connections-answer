import localFont from 'next/font/local'

export const sfProText = localFont({
    src: [
        {
            path: './fonts/sf-pro-text_regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/sf-pro-text_medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: './fonts/sf-pro-text_semibold.woff2',
            weight: '600',
            style: 'normal'
        }
    ],
    variable: '--font-sans',
    display: 'swap'
})

export const sfProDisplay = localFont({
    src: [
        {
            path: './fonts/sf-pro-display_regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/sf-pro-display_medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: './fonts/sf-pro-display_semibold.woff2',
            weight: '600',
            style: 'normal'
        }
    ],
    variable: '--font-display',
    display: 'swap'
})
