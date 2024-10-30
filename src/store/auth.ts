import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthStore {
  token: string | null
  setToken: (token: string) => void
  logout: () => void
}

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      token: '',
      setToken: (token) => set({ token }),
      logout: () => {
        set({ token: null })
        localStorage.removeItem('@TOKEN')
      },
    }),

    {
      name: '@TOKEN',
    },
  ),
)

export default useAuthStore
