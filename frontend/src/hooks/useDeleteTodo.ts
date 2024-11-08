import { deleteTodo } from '@/apis/todoApis'
import useAuthStore from '@/store/auth'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

const useDeleteTodo = () => {
  const navigate = useNavigate()
  const { logout } = useAuthStore()
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id }: { id: string }) => deleteTodo({ id }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
      navigate('/')
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

export default useDeleteTodo
