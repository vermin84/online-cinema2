import { useQuery } from '@tanstack/react-query'
import { getNewestMovie } from '../services/GenreService'

export function useNewestMovie() {
  const { data, isLoading } = useQuery({
    queryKey: ['movie_new'],
    queryFn: getNewestMovie,
  })

  return { data, isLoading }
}
