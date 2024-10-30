import { postTodo } from '@/apis/todoApis'
import useAuthStore from '@/store/auth'
import { TodoItem } from '@/types/todo'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

const useCreateTodo = ({
  resetFormValues,
}: {
  resetFormValues: () => void
}) => {
  const { logout } = useAuthStore()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ title, content }: TodoItem) => postTodo({ title, content }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
      resetFormValues()
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

export default useCreateTodo
