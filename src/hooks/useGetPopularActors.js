import { useQuery } from '@tanstack/react-query'
import { getPopularActors } from '../services/GenreService'

export function useGetPopularActors() {
  const { data, isLoading } = useQuery({
    queryKey: ['popular_actors'],
    queryFn: getPopularActors,
  })
  return { data, isLoading }
}
