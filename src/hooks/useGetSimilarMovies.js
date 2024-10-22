import { useQuery } from '@tanstack/react-query'
import { getSimilarMovies } from '../services/GenreService'

export function useGetSimilarMovies(movieId) {
  const { data, isLoading } = useQuery(['search similar movies', movieId], () =>
    getSimilarMovies(movieId)
  )

  return { data, isLoading }
}
