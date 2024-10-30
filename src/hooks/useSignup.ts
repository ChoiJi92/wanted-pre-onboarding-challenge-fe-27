import signupApi from '@/apis/signupApi'
import useAuthStore from '@/store/auth'
import { FormValues } from '@/types/formValues'
import { useMutation } from '@tanstack/react-query'

const useSignup = () => {
  const { setToken } = useAuthStore()
  return useMutation({
    mutationFn: ({ email, password }: Pick<FormValues, 'email' | 'password'>) =>
      signupApi({ email, password }),
    onSuccess: (result) => {
      if (result.data.token) {
        setToken(result.data.token)
      }
    },
    onError: (error) => {
      console.log('error', error)
    },
  })
}

export default useSignup
