import classNames from 'classnames/bind'
import styles from './Main.module.scss'
import NewTodoForm from '@/components/Main/NewTodoForm'
import TodoList from '@/components/Main/TodoList'
import TodoDetail from '@/components/Main/TodoDetail'

const cx = classNames.bind(styles)

const Main = () => {
  return (
    <div className={cx('container')}>
      <h1>TodoList</h1>
      <NewTodoForm />
      <TodoList />
      <TodoDetail />
    </div>
  )
}

export default Main
