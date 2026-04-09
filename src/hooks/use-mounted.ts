import { useEffect, useState } from 'react'

export function useMounted() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        const id = requestAnimationFrame(() => setIsMounted(true))
        return () => cancelAnimationFrame(id)
    }, [])

    return isMounted
}
