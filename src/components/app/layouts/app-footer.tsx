import Link from 'next/link'

type AppFooterProps = {
    links?: { label: string; href: string }[]
}

const defaultLinks: AppFooterProps['links'] = [
    { label: 'Contact Us', href: '#' },
    { label: 'Privacy Policy', href: '#' }
]

export function AppFooter({ links = defaultLinks }: AppFooterProps) {
    return (
        <footer className='border-t border-slate-200 bg-white/70 backdrop-blur'>
            <div className='mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-slate-700 md:flex-row md:items-center md:justify-between'>
                <div className='flex items-center gap-2 text-sm font-semibold text-slate-800'>
                    <span className='text-xl'></span>
                    <span>Information Systems and Technology</span>
                </div>
                <div className='text-xs text-slate-600 max-w-2xl'>
                    Information Systems and Technology knowledge database is for the business use of IS&T employees, and
                    the content should not be distributed outside of Apple Inc.
                </div>
                <div className='flex items-center gap-4 text-sm text-slate-700'>
                    {(links ?? defaultLinks)!.map(link => (
                        <Link key={link.label} href={link.href} className='transition hover:text-slate-900'>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}
