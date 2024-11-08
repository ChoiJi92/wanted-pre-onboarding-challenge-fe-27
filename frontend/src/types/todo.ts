export interface TodoItem {
  title: string
  content: string
}

export interface TodoItemWithId extends TodoItem {
  id: string
}

export interface ResponseTodoItem extends TodoItemWithId {
  createdAt: string
  updatedAt: string
}
