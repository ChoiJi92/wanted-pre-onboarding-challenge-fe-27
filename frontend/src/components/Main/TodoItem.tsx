import classNames from 'classnames/bind'
import styles from './TodoItem.module.scss'
import { useNavigate, useParams } from 'react-router-dom'

const cx = classNames.bind(styles)

interface TodoItemProps {
  title: string
  id: string
}

const TodoItem = ({ title, id }: TodoItemProps) => {
  const navigate = useNavigate()
  const { id: currentId } = useParams()
  const handleTodoItem = () => {
    navigate(`/todo/${id}`)
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
