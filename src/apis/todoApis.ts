import { ResponseTodoItem, TodoItem, TodoItemWithId } from '@/types/todo'
import axios from 'axios'

const localItem = JSON.parse(localStorage.getItem('@TOKEN') || 'null')
const token = localItem?.state.token ?? ''
const headers = token
  ? {
      headers: { Authorization: `Bearer ${token}` },
    }
  : undefined
export const getTodos = async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_URL}/todos`,
    headers,
  )

  return data.data as ResponseTodoItem[]
}

export const getTodo = async ({ id }: { id: string }) => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_URL}/todos/${id}`,
    headers,
  )
  return data.data as ResponseTodoItem
}

export const postTodo = ({ title, content }: TodoItem) => {
  return axios.post(
    `${import.meta.env.VITE_API_URL}/todos`,
    {
      title,
      content,
    },
    headers,
  )
}

export const updateTodo = ({ id, title, content }: TodoItemWithId) => {
  return axios.put(
    `${import.meta.env.VITE_API_URL}/todos/${id}`,
    {
      title,
      content,
    },
    headers,
  )
}

export const deleteTodo = async ({ id }: { id: string }) => {
  return await axios.delete(
    `${import.meta.env.VITE_API_URL}/todos/${id}`,
    headers,
  )
}
