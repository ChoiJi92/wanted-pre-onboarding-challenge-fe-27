import { updateTodo } from '@/apis/todoApis'
import useAuthStore from '@/store/auth'
import { TodoItemWithId } from '@/types/todo'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

const useUpdateTodo = ({
  handleUpdateCancelButton,
}: {
  handleUpdateCancelButton: () => void
}) => {
  const navigate = useNavigate()
  const { logout } = useAuthStore()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, title, content }: TodoItemWithId) =>
      updateTodo({ id, title, content }),
    onSuccess: (result) => {
      const id = result.data.data.id
      queryClient.invalidateQueries({ queryKey: ['todos'] })
      queryClient.invalidateQueries({
        queryKey: ['todo', id],
      })
      handleUpdateCancelButton()
    },
    onError: (error: AxiosError) => {
      console.log('error', error)
      if (error.status === 401) {
        // 로그인 페이지로 이동
        alert('유효하지 않는 회원입니다.')
        logout()
        navigate('/login')
      }
    },
  })
}

export default useUpdateTodo
