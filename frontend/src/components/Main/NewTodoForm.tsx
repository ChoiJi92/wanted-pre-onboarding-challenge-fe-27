import Button from '@/components/shared/Button'
import TextField from '@/components/shared/TextField'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './NewTodoForm.module.scss'
import useCreateTodo from '@/hooks/useCreateTodo'
import { TodoItem } from '@/types/todo'
import TextareaField from '../shared/TextareaField'

const cx = classNames.bind(styles)

const NewTodoForm = () => {
  const [formValues, setFormValues] = useState<TodoItem>({
    title: '',
    content: '',
  })

  const resetFormValues = () => {
    setFormValues({
      title: '',
      content: '',
    })
  }
  const { mutate, isPending } = useCreateTodo({ resetFormValues })

  const handleFormValues = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      })
    },
    [formValues],
  )

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate({ ...formValues })
  }

  const buttonDisabled = Object.values(formValues).some((value) => !value)

  return (
    <form onSubmit={onSubmit} className={cx('container')}>
      <h3>새로운 할 일 추가</h3>
      <TextField
        value={formValues.title}
        name="title"
        onChange={handleFormValues}
        label="제목"
      />
      <TextareaField
        value={formValues.content}
        name="content"
        onChange={handleFormValues}
        label="상세 내용"
      />
      <Button
        label="추가"
        type="submit"
        disabled={buttonDisabled || isPending}
      />
    </form>
  )
}

export default NewTodoForm
