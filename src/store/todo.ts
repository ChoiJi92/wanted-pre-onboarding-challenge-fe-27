import { create } from 'zustand'

interface TodoStore {
  id: string
  setId: (id: string) => void
}

const useTodoStore = create<TodoStore>((set) => ({
  id: '',
  setId: (id) => set({ id }),
}))

export default useTodoStore
