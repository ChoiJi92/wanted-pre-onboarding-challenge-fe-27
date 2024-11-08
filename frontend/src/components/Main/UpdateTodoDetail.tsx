import { ChangeEvent, useCallback, useState } from 'react'
import TextareaField from '../shared/TextareaField'
import TextField from '../shared/TextField'
import { TodoItem } from '@/types/todo'
import Button from '../shared/Button'
import classNames from 'classnames/bind'
import styles from './TodoDetail.module.scss'
import useUpdateTodo from '@/hooks/useUpdateTodo'

const cx = classNames.bind(styles)

interface UpdateTodoDetailProps {
  id: string
  title: string
  content: string
  handleUpdateCancelButton: () => void
}

const UpdateTodoDetail = ({
  id,
  title,
  content,
  handleUpdateCancelButton,
}: UpdateTodoDetailProps) => {
  const [formValues, setFormValues] = useState<TodoItem>({
    title,
    content,
  })

  const { mutate } = useUpdateTodo({ handleUpdateCancelButton })

  const handleUpdateButton = () => {
    mutate({ ...formValues, id })
  }

  const handleFormValues = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      })
    },
    [formValues],
  )

  const buttonDisabled = Object.values(formValues).some((item) => !item)

  return (
    <div className={cx('container')}>
      <TextField
        label="제목"
        value={formValues.title}
        name="title"
        onChange={handleFormValues}
      />
      <TextareaField
        label="상세 내용"
        value={formValues.content}
        name="content"
        onChange={handleFormValues}
      />
      <div className={cx('button-wrap')}>
        <Button
          label="완료"
          onClick={handleUpdateButton}
          disabled={buttonDisabled}
        />
        <Button
          label="취소"
          style={{ backgroundColor: 'var(--red)' }}
          onClick={handleUpdateCancelButton}
        />
      </div>
    </div>
  )
}

export default UpdateTodoDetail
