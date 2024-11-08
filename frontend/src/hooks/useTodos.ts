import { getTodos } from '@/apis/todoApis'
import { useQuery } from '@tanstack/react-query'

const useTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })
}

export default useTodos
