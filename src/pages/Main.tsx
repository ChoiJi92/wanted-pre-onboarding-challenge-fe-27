import classNames from 'classnames/bind'
import styles from './Main.module.scss'
import NewTodoForm from '@/components/Main/NewTodoForm'
import TodoList from '@/components/Main/TodoList'
import TodoDetail from '@/components/Main/TodoDetail'
import { useParams } from 'react-router-dom'

const cx = classNames.bind(styles)

const Main = () => {
  const { id } = useParams()
  return (
    <div className={cx('container')}>
      <h1>TodoList</h1>
      <NewTodoForm />
      <TodoList />
      {id && <TodoDetail id={id} />}
    </div>
  )
}

export default Main
