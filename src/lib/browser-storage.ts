'use client'

import { IS_BROWSER } from '@/config'

const PRE_FIX = 'ChATBOT-STORAGE'

const buildKey = (key: string) => `${PRE_FIX}-${key}`

const safeParse = <T>(value: string | null, fallback?: T): T | undefined => {
    if (!value) return fallback
    try {
        const parsed = JSON.parse(value) as unknown
        if (parsed && typeof parsed === 'object' && 'value' in parsed) {
            return (parsed as { value: T }).value
        }
    } catch {
        return fallback
    }
    return fallback
}

const get = <T>(storage: Storage, key: string, defaultValue?: T): T | undefined => {
    const value = storage.getItem(buildKey(key))
    const parsed = safeParse<T>(value, defaultValue)
    return parsed ?? defaultValue
}

const set = <T>(storage: Storage, key: string, value: T | ((prev?: T) => T)) => {
    const prev = get<T>(storage, key)
    const nextValue = typeof value === 'function' ? (value as (prev?: T) => T)(prev) : value
    storage.setItem(buildKey(key), JSON.stringify({ value: nextValue }))
}

const remove = (storage: Storage, key: string) => storage.removeItem(buildKey(key))

type StorageManager<T> = {
    get(defaultValue?: T): T | undefined
    set(value: T | ((prev?: T) => T)): void
    remove(): void
    isEmpty: boolean
}

export const getStorageManager = <T>(key: string, storageType: 'local' | 'session' = 'local'): StorageManager<T> => {
    if (!IS_BROWSER) {
        return {
            get: (defaultValue?: T) => defaultValue,
            set: () => undefined,
            remove: () => undefined,
            isEmpty: true
        }
    }

    const storage = storageType === 'local' ? localStorage : sessionStorage

    const manager: StorageManager<T> = {
        get: (defaultValue?: T) => get(storage, key, defaultValue),
        set: (value: T | ((prev?: T) => T)) => set(storage, key, value),
        remove: () => remove(storage, key),
        get isEmpty() {
            return manager.get() == null
        }
    }

    return manager
}
