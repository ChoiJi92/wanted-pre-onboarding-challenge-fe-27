import { deleteTodo } from '@/apis/todoApis'
import useAuthStore from '@/store/auth'
import useTodoStore from '@/store/todo'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

const useDeleteTodo = () => {
  const { setId } = useTodoStore()
  const navigate = useNavigate()
  const { logout } = useAuthStore()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id }: { id: string }) => deleteTodo({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
      setId('')
    },
    onError: (error: AxiosError) => {
      console.log('error', error)
      if (error.status === 401) {
        // 로그인 페이지로 이동
        logout()
        navigate('/login')
      }
    },
  })
}

export default useDeleteTodo
