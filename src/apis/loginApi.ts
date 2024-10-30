import axios from 'axios'

const loginApi = ({ email, password }: { email: string; password: string }) => {
  return axios.post(`${import.meta.env.VITE_API_URL}/users/login`, {
    email,
    password,
  })
}

export default loginApi
