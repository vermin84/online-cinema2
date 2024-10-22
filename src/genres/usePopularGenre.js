import { useQuery } from '@tanstack/react-query'

import { fetchMovieGenres } from '../services/GenreService'

export default function usePopularGenre() {
  const { data, isLoading } = useQuery({
    queryKey: ['genres_name'],
    queryFn: fetchMovieGenres,
  })

  return { data, isLoading }
}
