import loginApi from '@/apis/loginApi'
import { FormValues } from '@/types/formValues'
import useAuthStore from '@/store/auth'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

interface ErrorResponse {
  details?: string
}

const useLogin = () => {
  const { setToken } = useAuthStore()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: ({ email, password }: Pick<FormValues, 'email' | 'password'>) =>
      loginApi({ email, password }),
    onSuccess: (result) => {
      if (result.data.token) {
        setToken(result.data.token)
        navigate('/')
      }
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      console.log('error', error)
      if (error.response) {
        alert(error.response.data?.details)
      } else {
        alert('다시 시도해주세요.')
      }
    },
  })
}

export default useLogin
