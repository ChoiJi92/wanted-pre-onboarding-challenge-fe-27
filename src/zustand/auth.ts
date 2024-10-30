import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthStore {
  token: string
  setToken: (token: string) => void
}

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      token: '',
      setToken: (token) => set({ token }),
    }),
    {
      name: '@TOKEN',
    },
  ),
)

export default useAuthStore
