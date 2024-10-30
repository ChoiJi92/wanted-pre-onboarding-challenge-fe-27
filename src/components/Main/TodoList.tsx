import classNames from 'classnames/bind'
import styles from './TodoList.module.scss'
import useTodos from '@/hooks/useTodos'
import TodoItem from './TodoItem'

const cx = classNames.bind(styles)

const TodoList = () => {
  const { data, isFetching } = useTodos()

  if (!data || isFetching) return <div>Loading...</div>

  return (
    <div className={cx('container')}>
      <h3>할 일 목록</h3>
      {data.length === 0 ? (
        <span>할 일이 없어요 😥</span>
      ) : (
        <ul className={cx('data-wrap')}>
          {data.map((item) => (
            <TodoItem title={item.title} id={item.id} key={item.id} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TodoList
