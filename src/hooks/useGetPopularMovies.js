import { useQuery } from '@tanstack/react-query'
import { getPopularMovie } from '../services/GenreService'

export function useGetPopularMovies() {
  const { data, isLoading } = useQuery({
    queryKey: ['popular_movies'],
    queryFn: getPopularMovie,
  })
  return { data, isLoading }
}
