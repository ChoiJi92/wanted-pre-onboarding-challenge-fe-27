import axios from 'axios'

const signupApi = ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/users/create`, {
    email,
    password,
  })
}

export default signupApi
