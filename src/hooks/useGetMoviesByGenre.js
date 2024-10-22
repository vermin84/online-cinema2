import { useQuery } from '@tanstack/react-query'
import { fetchMoviesByGenre } from '../services/GenreService'

export default function useMoviesByGenre(genreId) {
  const { data, isLoading } = useQuery({
    queryKey: ['moviesByGenre', genreId],
    queryFn: () => fetchMoviesByGenre(genreId),
  })

  return { data, isLoading }
}
