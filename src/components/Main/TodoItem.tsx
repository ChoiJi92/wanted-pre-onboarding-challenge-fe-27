import classNames from 'classnames/bind'
import styles from './TodoItem.module.scss'
import useTodoStore from '@/store/todo'

const cx = classNames.bind(styles)

interface TodoItemProps {
  title: string
  id: string
}

const TodoItem = ({ title, id }: TodoItemProps) => {
  const { id: currentId, setId } = useTodoStore()
  const handleTodoItem = () => {
    setId(id)
  }
  return (
    <li
      className={cx('container', { selected: currentId === id })}
      onClick={handleTodoItem}
    >
      {title}
    </li>
  )
}

export default TodoItem
