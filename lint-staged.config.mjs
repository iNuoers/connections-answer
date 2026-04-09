const config = {
    '*.{js,jsx,ts,tsx}': ['pnpm exec eslint --fix'],
    '*.{js,jsx,ts,tsx,md,mdx,json,css}': ['pnpm exec prettier --write']
}

export default config
