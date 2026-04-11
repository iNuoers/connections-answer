import { asc } from 'drizzle-orm'

import { getDb } from '@/db'
import { puzzles } from '@/db/schema'

import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://connectionsanswers.today'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const db = getDb()
    const rows = await db.select({ printDate: puzzles.printDate }).from(puzzles).orderBy(asc(puzzles.printDate))

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${siteUrl}/connections`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
    ]

    const puzzleRoutes: MetadataRoute.Sitemap = rows.map(row => ({
        url: `${siteUrl}/connections?date=${row.printDate}`,
        lastModified: new Date(row.printDate),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...staticRoutes, ...puzzleRoutes]
}
