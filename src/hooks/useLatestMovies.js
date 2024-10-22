import { useQuery } from '@tanstack/react-query'
import { getLatestMovies } from '../services/GenreService'

export function useLatestMovies() {
  const { data, isLoading } = useQuery({
    queryKey: ['movie_latest'],
    queryFn: getLatestMovies,
  })

  return { data, isLoading }
}
