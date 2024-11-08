import { ResponseTodoItem, TodoItem, TodoItemWithId } from '@/types/todo'
import instance from './instance'

export const getTodos = async () => {
  const { data } = await instance.get('/todos')

  return data.data as ResponseTodoItem[]
}

export const getTodo = async ({ id }: { id: string }) => {
  const { data } = await instance.get(`/todos/${id}`)
  return data.data as ResponseTodoItem
}

export const postTodo = ({ title, content }: TodoItem) => {
  return instance.post(`/todos`, {
    title,
    content,
  })
}

export const updateTodo = ({ id, title, content }: TodoItemWithId) => {
  return instance.put(`/todos/${id}`, {
    title,
    content,
  })
}

export const deleteTodo = async ({ id }: { id: string }) => {
  return await instance.delete(`/todos/${id}`)
}
