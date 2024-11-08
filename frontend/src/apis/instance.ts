import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

const instance = axios.create({
  baseURL: BASE_URL,
})

instance.interceptors.request.use((config) => {
  const localItem = JSON.parse(localStorage.getItem('@TOKEN') || 'null')
  const token = localItem?.state.token ?? ''
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default instance
