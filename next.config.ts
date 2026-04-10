import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

import type { NextConfig } from 'next'

const config: NextConfig = {
    reactCompiler: true,
    typedRoutes: true,
    typescript: {
        ignoreBuildErrors: true
    }
}

export default async function nextConfig(): Promise<NextConfig> {
    await initOpenNextCloudflareForDev()
    return config
}
