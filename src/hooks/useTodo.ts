import { getTodo } from '@/apis/todoApis'
import { useQuery } from '@tanstack/react-query'

const useTodo = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ['todo', id],
    queryFn: () => getTodo({ id }),
    enabled: !!id,
  })
}

export default useTodo
