// https://github.com/fengjutian/Blade-AI-Editor/blob/main/src/hooks/use-debounce.ts

import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer: NodeJS.Timeout = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        // Cancel the timeout if value changes (also on delay change or unmount)
        return () => {
            clearTimeout(timer)
        }
    }, [value, delay])

    return debouncedValue
}

export function debounce(fn: () => void, delay: number) {
    let timeout: ReturnType<typeof setTimeout> | null = null

    return (...args: Parameters<typeof fn>) => {
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => fn(...args), delay)
    }
}
