'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { getStorageManager } from '@/lib/browser-storage'

type User = {
    id: string
    name: string
    email: string
    avatar?: string
    role?: string
}

type AuthContextValue = {
    user: User | null
    isLoading: boolean
    isAuthenticated: boolean
    login: (email: string, password: string) => boolean
    logout: () => void
    signup: (name: string, email: string, password: string) => boolean
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)
const storage = getStorageManager<User>('sme-user')

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(() => storage.get() ?? null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    const login = useCallback((email: string, _password: string) => {
        setIsLoading(true)
        try {
            const mockUser: User = {
                id: `user_${Math.random().toString(36).slice(2, 11)}`,
                name: email.split('@')[0] ?? 'User',
                email,
                role: 'user'
            }
            setUser(mockUser)
            storage.set(mockUser)
            return true
        } catch (error) {
            console.error('Login failed:', error)
            return false
        } finally {
            setIsLoading(false)
        }
    }, [])

    const logout = useCallback(() => {
        setIsLoading(true)
        try {
            storage.remove()
            setUser(null)
        } catch (error) {
            console.error('Logout failed:', error)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const signup = useCallback((name: string, email: string, _password: string) => {
        setIsLoading(true)
        try {
            const mockUser: User = {
                id: `user_${Math.random().toString(36).slice(2, 11)}`,
                name,
                email,
                role: 'user'
            }
            setUser(mockUser)
            storage.set(mockUser)
            return true
        } catch (error) {
            console.error('Signup failed:', error)
            return false
        } finally {
            setIsLoading(false)
        }
    }, [])

    const value = useMemo<AuthContextValue>(
        () => ({
            user,
            isLoading,
            isAuthenticated: Boolean(user),
            login,
            logout,
            signup
        }),
        [user, isLoading, login, logout, signup]
    )

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
    const ctx = useContext(AuthContext)
    if (!ctx) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return ctx
}

export default AuthProvider
