import signupApi from '@/apis/signupApi'
import { FormValues } from '@/types/formValues'
import useAuthStore from '@/store/auth'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

const useSignup = () => {
  const { setToken } = useAuthStore()
  const navigate = useNavigate()
  return useMutation({
    mutationFn: ({ email, password }: Pick<FormValues, 'email' | 'password'>) =>
      signupApi({ email, password }),
    onSuccess: (result) => {
      if (result.data.token) {
        setToken(result.data.token)
        navigate('/')
      }
    },
    onError: (error) => {
      console.log('error', error)
    },
  })
}

export default useSignup
