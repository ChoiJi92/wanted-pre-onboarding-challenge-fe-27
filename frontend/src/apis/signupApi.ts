import instance from './instance'

const signupApi = ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  return instance.post(`/users/create`, {
    email,
    password,
  })
}

export default signupApi
