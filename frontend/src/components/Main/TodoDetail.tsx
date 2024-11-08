import classNames from 'classnames/bind'
import styles from './TodoDetail.module.scss'
import useTodo from '@/hooks/useTodo'
import Button from '../shared/Button'
import UpdateTodoDetail from './UpdateTodoDetail'
import { useCallback, useState } from 'react'
import useDeleteTodo from '@/hooks/useDeleteTodo'

const cx = classNames.bind(styles)

const TodoDetail = ({ id }: { id: string }) => {
  const { data, isFetching } = useTodo({ id })

  const [isUpdate, setIsUpdate] = useState<boolean>(false)

  const { mutate } = useDeleteTodo()

  const handleUpdateCancelButton = useCallback(() => {
    setIsUpdate((prev) => !prev)
  }, [])

  const handleDeleteButton = useCallback(() => {
    mutate({ id })
  }, [mutate, id])

  if (!id) return null

  if (!data || isFetching) {
    return <div>Loading...</div>
  }

  return (
    <div className={cx('container')}>
      <h3>상세 내용</h3>
      <div>
        {isUpdate ? (
          <UpdateTodoDetail
            id={id}
            title={data.title}
            content={data.content}
            handleUpdateCancelButton={handleUpdateCancelButton}
          />
        ) : (
          <div className={cx('data-container')}>
            <div className={cx('data-wrap')}>
              <p>{data.title}</p>
              <span>{data.content}</span>
            </div>
            <div className={cx('button-wrap')}>
              <Button label="수정" onClick={handleUpdateCancelButton} />
              <Button
                label="삭제"
                style={{ backgroundColor: 'var(--red)' }}
                onClick={handleDeleteButton}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoDetail
