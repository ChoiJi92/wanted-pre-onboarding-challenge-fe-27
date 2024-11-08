import instance from './instance'

const loginApi = ({ email, password }: { email: string; password: string }) => {
  return instance.post(`/users/login`, {
    email,
    password,
  })
}

export default loginApi
